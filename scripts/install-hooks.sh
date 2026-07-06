#!/usr/bin/env bash
# install-hooks.sh — copy tools/pre-push.sh into .git/hooks/ and mark executable.
#
# Run after any fresh clone / worktree / hook-clear:
#   bash scripts/install-hooks.sh
#
# The committed mirror at tools/pre-push.sh is the source of truth.
# .git/hooks/ is not tracked by git; this installer re-hydrates it.
# See ARCHITECTURE.md § pre-push guard.

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
SRC="$REPO_ROOT/tools/pre-push.sh"
DST="$REPO_ROOT/.git/hooks/pre-push"

if [ ! -f "$SRC" ]; then
  echo "✗ install-hooks: $SRC not found." >&2
  exit 1
fi

install -m 0755 "$SRC" "$DST"
echo "✓ install-hooks: pre-push installed at $DST"
echo "  Smoke-test with: echo '' | .git/hooks/pre-push origin git@github.com:auralumi33/enkakanopi-world.git"
