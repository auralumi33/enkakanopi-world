# Architecture — a garden, tended by a small chain

This repo is built to be **layered**: a person writes, a small chain of assists
helps tend, and a mechanical guard keeps the register honest — but the writing
stays hers. This document is the map of that. It is deliberately publishable:
the private internals of the tending fleet live outside this repo.

## The one law: voice-lock

> Every piece starts from Rika's own note. Assists may **structure, tighten,
> reorder, format, fact-check, and propose sharper wordings** — always returned
> as redlines she accepts or rejects. **Nothing is published without her yes**,
> and a *mirror* pass holds a non-overridable veto on voice and privacy.

No assist originates an essay from a theme. The garden is hers; the machines
help her keep it.

## The tending chain

```
  note ──gather──▶ pulse ──sharpen──▶ tend ──guard──▶ mirror ──grow──▶ published
   │                 │                  │                │                 │
Rika writes    scans the edge     structures,     keeps voice &      in the garden
 (the seed)    of the field       tightens        privacy (veto)    (a page here)
```

- **note** — a raw note from Rika lands in `notes/inbox/` (untracked; drafts
  never ship). This is the only origin of a piece.
- **pulse** — an optional scan of the edge of the field, for context. Never writes.
- **tend** — structures and tightens the note into a draft, as redlines.
- **mirror** — the guard on voice + privacy. If the mirror vetoes, nothing moves.
  Its mechanical floor is [`scripts/guard.mjs`](./scripts/guard.mjs) (see below).
- **grow** — once Rika approves, the piece is planted as content in
  [`src/content/`](./src/content/) at its honest growth stage.
- **surface** — visual/interface changes are a separate lane; they touch the
  drawing hand (`src/components/`, `src/styles/`), never the meaning.

The chain is surfaced on the site itself, lightly, in the footer — the machine
made visible, its internals kept private.

## Reading the light — the design's own signals

The visual system is a set of signals the reader learns to read, not
decoration: the maturity glyphs, the four fixed hues, the small hand-drawn
marks that reward a second look. This owes a debt to Tanizaki's *In Praise of
Shadows* and to the idea that meaning can live in what's withheld as much as
in what's shown — an empty room can mean something, if the light falling
through it is designed on purpose. A surface here is meant to hold up for
three readers at once: the person just reading, a design-literate eye that
knows the reference and can spot a cliché, and the source the reference is
drawn from, honoured rather than borrowed as costume. The paper stays light
in every case, and nothing here is decoration for its own sake — if a mark
doesn't carry meaning, it doesn't ship.

## The homepage — lead with the map, land on the keystone

The front page is paced in three beats: a still, wide arrival (the whole
garden, seen from above, as a wayfinding map — the widest view first, not
buried under introduction); a build (the ideas and how they connect to each
other); and a close (the keystone line, landed as a considered payoff rather
than the opening line). The hero itself is under change control rather than
frozen solid: its wording is locked to Rika's own hand and never edited by
an assist, but its position and composition can be deliberately recomposed —
always as a single, serial, before/after-reviewed change, never as a side
effect of unrelated work.

**The paper stays still.** No animation plays on the hero, and reduced-motion
is always honoured. The one narrow exception is a single, slow, barely-there
bloom drifting across the garden-from-above view — a small nod to the idea
that a thing can be beautiful partly because it doesn't last — which
disappears entirely under reduced-motion and never sits behind any text.

## Growth stages (not dates)

Pieces are organised by **maturity**, never chronology:

| Stage | Meaning | Frontmatter |
|---|---|---|
| **seedling** | just planted — tender, thinking out loud | `stage: seedling` |
| **budding** | taking shape — the argument has a spine | `stage: budding` |
| **evergreen** | stands on its own | `stage: evergreen` |

Each essay also carries a `status:` (epistemic state, in-format) and an optional
`tended:` note. See [`src/content.config.ts`](./src/content.config.ts).

## The mechanical mirror — `npm run guard`

A dependency-free check any hand or assist must pass before a commit lands:

1. **secrets** — refuses key/token shapes.
2. **off-register** — refuses words the garden does not write in. The public list
   is [`guard.words.txt`](./guard.words.txt); a **private** list lives untracked
   in `guard.words.local.txt` (gitignored) so sensitive terms — anything that
   would triangulate a person or a venture — are enforced locally but never shipped.

It runs in CI on every push and PR ([`.github/workflows/build.yml`](./.github/workflows/build.yml)),
and inside `npm run verify` (guard → type-check → build).

## The pre-push guard — last line before GitHub

A local git `pre-push` hook runs every time `git push` is invoked. It is the
belt-and-braces layer under `.gitignore` + `guard.mjs`: authoring guards catch
what's on disk right now; the pre-push hook catches what's in *history*.

Two checks, both must pass:

1. **`npm run guard`** on the working tree — same source of truth authoring uses.
2. **Push-range commit scan** — every commit in `<remote>..<local>` is inspected;
   if any file at any commit in the range contains a word from
   [`guard.words.txt`](./guard.words.txt) or the untracked
   `guard.words.local.txt`, the push is blocked with a `commit:file:line` report.

The hook does not run on `git fetch` or `git commit` — pre-push only.

Files:

- [`tools/pre-push.sh`](./tools/pre-push.sh) — the committed mirror (source of truth).
- [`scripts/install-hooks.sh`](./scripts/install-hooks.sh) — one-line installer that
  copies the mirror into `.git/hooks/pre-push` and marks it executable.
- `.git/hooks/pre-push` — the active hook (untracked; `.git/` is per-clone).

Re-install after a fresh clone / worktree / hook-clear:

```
bash scripts/install-hooks.sh
```

Do **not** bypass with `--no-verify` — that's exactly what the layer exists to
catch. If the hook flags a real historical exposure, follow the history-rewrite
runbook in `.claude/skills/enka-airlock-firewall/SKILL.md`.

## Portability

Each assist is meant to be a self-contained system prompt, so the tending layer
can move from one runner to another without rewriting the garden. This repo only
needs the *outputs* — approved content and surface patches — so the runner is an
implementation detail, swappable under the same contract.

## Layout

```
src/
  content/            essays by theme × growth stage (the grown pieces)
  content.config.ts   the essay schema (stage, status, tended, glyph)
  components/         the drawing hand — glyphs, diagrams, the chain strip
  layouts/            Base + Essay
  pages/              the six surfaces
  styles/             tokens (Charts & Crafts) + global
scripts/guard.mjs           the mechanical mirror
scripts/install-hooks.sh    installs .git/hooks/pre-push from tools/pre-push.sh
tools/pre-push.sh           the committed pre-push hook (mirror + push-range scan)
notes/inbox/                raw notes (untracked) — the only origin of a piece
```
