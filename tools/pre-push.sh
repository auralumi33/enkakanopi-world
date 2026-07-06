#!/usr/bin/env bash
# pre-push — mechanical last-line firewall for the enka public repo.
#
# Two checks, both must pass:
#   1. `npm run guard` — the mechanical mirror (secrets · off-register · heaviness)
#      on the current working tree, same source of truth authoring uses.
#   2. Push-range commit scan — every commit in <remote>..<local> is inspected;
#      if any file at any commit in the range contains a word from
#      guard.words.txt (public) or guard.words.local.txt (untracked private),
#      the push is blocked with a file:line report.
#
# The point: this is the belt-and-braces layer under .gitignore + guard mirror
# + skill discipline. Catches the case where the working tree looks clean but
# an intermediate commit in history contains firewalled material — that would
# leak on push.
#
# Install: `bash scripts/install-hooks.sh` from _repo root.
# Source of truth for the words: scripts/guard.mjs (this file mirrors its logic).
# See ARCHITECTURE.md § pre-push guard and SUCCESSION.md §16.

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

# ── Step 1: guard mirror on the working tree ────────────────────────────────
echo "→ pre-push: running guard mirror on working tree…"
if ! npm run --silent guard; then
  echo ""
  echo "✗ pre-push BLOCKED: the guard mirror rejected the working tree."
  echo "  Fix the hits listed above, then re-run 'npm run guard' before pushing."
  echo "  Do NOT bypass this with --no-verify — it's the firewall."
  exit 1
fi

# ── Step 2: scan every commit in the push range for forbidden words ─────────
WORDS_PUBLIC="$REPO_ROOT/guard.words.txt"
WORDS_LOCAL="$REPO_ROOT/guard.words.local.txt"

# Load words: strip # comments, trim whitespace, drop blanks.
load_words() {
  local f="$1"
  [ -f "$f" ] || return 0
  # sed: strip #-comments, then trim + drop blanks
  sed -E 's/#.*$//' "$f" | awk 'NF { gsub(/^[ \t]+|[ \t]+$/, ""); if (length) print }'
}

WORDS_TMP="$(mktemp -t enka-pre-push-words.XXXXXX)"
trap 'rm -f "$WORDS_TMP"' EXIT
{ load_words "$WORDS_PUBLIC"; load_words "$WORDS_LOCAL"; } > "$WORDS_TMP"

WORD_COUNT="$(wc -l < "$WORDS_TMP" | tr -d ' ')"
if [ "$WORD_COUNT" -eq 0 ]; then
  echo "→ pre-push: no forbidden words configured; commit-range scan skipped."
  echo "✓ pre-push: guard clean; push allowed."
  exit 0
fi

# Build one alternation pattern for grep -E, with escaped regex metachars and
# word-boundaries — mirrors guard.mjs's `\b<word>\b` case-insensitive matching.
BUILD_PATTERN_AWK='
{
  # escape POSIX ERE metachars in the word
  gsub(/[][(){}.^$*+?|\\]/, "\\\\&")
  if (out == "") out = "\\<" $0 "\\>"
  else           out = out "|\\<" $0 "\\>"
}
END { print out }
'
PATTERN="$(awk "$BUILD_PATTERN_AWK" "$WORDS_TMP")"

# Files/paths guard.mjs itself skips — mirror them here so we don't self-flag.
skip_path() {
  case "$1" in
    node_modules/*|dist/*|.astro/*|.vercel/*|.git/*|_archive/*) return 0 ;;
    guard.words.txt|guard.words.local.txt|package-lock.json) return 0 ;;
    *.png|*.jpg|*.jpeg|*.gif|*.webp|*.woff|*.woff2|*.ico|*.mov|*.mp4|*.pdf) return 0 ;;
    tools/pre-push.sh|scripts/guard.mjs) return 0 ;;  # this file + guard.mjs list words themselves
  esac
  return 1
}

ZERO="0000000000000000000000000000000000000000"
HIT_TOTAL=0
HIT_REPORT=""

# git-hooks(5): stdin lines are `<local_ref> <local_sha> <remote_ref> <remote_sha>`.
while read -r local_ref local_sha remote_ref remote_sha; do
  [ -z "${local_ref:-}" ] && continue
  # Deletion of a remote ref — nothing to inspect.
  [ "$local_sha" = "$ZERO" ] && continue

  if [ "$remote_sha" = "$ZERO" ]; then
    # New branch on remote — scan commits reachable from local_sha but not
    # already on any remote (avoids re-scanning already-pushed history).
    RANGE=("$local_sha" "--not" "--remotes")
  else
    RANGE=("${remote_sha}..${local_sha}")
  fi

  COMMITS="$(git rev-list "${RANGE[@]}" 2>/dev/null || true)"
  [ -z "$COMMITS" ] && continue

  for sha in $COMMITS; do
    # Files added or modified in this commit (skip deletions).
    while IFS= read -r file; do
      [ -z "$file" ] && continue
      if skip_path "$file"; then continue; fi
      # Grep the file's content AT this commit for the pattern.
      # `git show sha:path` streams the blob; grep -nEi reports line:content.
      matches="$(git show "$sha:$file" 2>/dev/null | grep -nEi -- "$PATTERN" || true)"
      if [ -n "$matches" ]; then
        while IFS= read -r m; do
          [ -z "$m" ] && continue
          ln="${m%%:*}"
          rest="${m#*:}"
          # Trim + cap line preview
          preview="$(printf '%s' "$rest" | sed 's/^[[:space:]]*//' | cut -c1-100)"
          HIT_TOTAL=$((HIT_TOTAL + 1))
          HIT_REPORT="${HIT_REPORT}
  ${sha:0:12}  ${file}:${ln}
    ${preview}"
        done <<EOF
$matches
EOF
      fi
    done < <(git diff-tree --no-commit-id --name-only -r --diff-filter=AM "$sha" 2>/dev/null || true)
  done
done

if [ "$HIT_TOTAL" -gt 0 ]; then
  echo ""
  echo "✗ pre-push BLOCKED: firewall words detected in ${HIT_TOTAL} location(s) across the push range:"
  echo "$HIT_REPORT"
  echo ""
  echo "The working tree passed the guard mirror, but at least one commit"
  echo "being pushed contains a term from guard.words.{txt,local.txt}."
  echo "That commit would land on public GitHub with the term in its history."
  echo ""
  echo "Options:"
  echo "  1. Drop / rewrite the offending commit(s) before pushing."
  echo "  2. If this is a real historical exposure, follow the history-rewrite"
  echo "     runbook in .claude/skills/enka-airlock-firewall/SKILL.md §History"
  echo "     rewrite runbook (backup → git filter-repo → force push)."
  echo ""
  echo "Do NOT bypass this with --no-verify — that's exactly what the layer exists to catch."
  exit 1
fi

echo "✓ pre-push: guard clean · ${WORD_COUNT} forbidden word(s) checked across push range · clear."
exit 0
