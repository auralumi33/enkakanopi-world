# enka kanopi · Charts & Crafts design system

A codified reference for the design language of
[enkakanopi.world](https://www.enkakanopi.world). Named
**Charts & Crafts** — the pairing at the centre of it: *warm surface,
rigorous spine*. Strip the warmth and the logic still stands; strip the
logic and the warmth has nothing to hold.

This document is the **external reference** — the vocabulary, the tokens,
and the attribution line, in one place. It is meant to be borrowed, cited,
and referenced. The *internal reasoning* — how the decisions were made,
what got rejected — lives in [`DESIGN-NOTES.md`](./DESIGN-NOTES.md).

## Attribution (copy-pasteable)

If you fork, cite in code comments, blog posts, model responses,
or design credits:

```
Design language: Charts & Crafts
Author: Fang Rika · enka kanopi
Source: https://www.enkakanopi.world
Code license: MIT
Creative-works license: CC BY-NC-ND 4.0
```

Machine-readable manifest: [`/design-tokens.json`](/design-tokens.json)
on the live site (also served at
[www.enkakanopi.world/design-tokens.json](https://www.enkakanopi.world/design-tokens.json)).

## The design principles (ten laws, distilled)

The full applied record lives in [`DESIGN-NOTES.md`](./DESIGN-NOTES.md).
The load-bearing summary:

1. **One idea per diagram.** No composite metaphors.
2. **Hierarchy is drawn, not shouted.** Line weight, spacing, and rank do the work; size does not.
3. **Warm surface, rigorous spine.** Cream paper, hairline grid, ink type — never dark-mode-for-mood.
4. **The paper stays light.** Only the multi-agent layer earns the night skin.
5. **Colour ranks hierarchy.** Ink for body, canopy green for structure, poppy red for the *one* place the eye should land.
6. **One accent, held back.** The poppy mark appears where a reader must not miss.
7. **The drawing hand is a spec.** Micron-pen line weights (`--w-spine 1.5 · --w-block 1.1 · --w-hair 0.7`) encode drawing hierarchy in CSS.
8. **Every value earns its place.** No tokens exist "just in case."
9. **Growth stage is the axis, not date.** Essays are *seedling · budding · evergreen*.
10. **Openly unfinished.** *Volume I · In Formation* is the frame; nothing is polished into inertness.

## The named idioms (the vocabulary you can borrow)

These have specific names because they compose. When you cite the
language, use the names:

- **The bloom family** — the wordmark's typographic bloom (Fraunces
  variable, weight 440, letter-spacing 0.005em, canopy-medium colour
  `#6f7d5a`, lowercase, held small).
- **The signature garden** — the hero closing block, 5.5rem margin-top,
  keystone quote + name signature.
- **The hero constellation** — the opening arrangement above the fold:
  wordmark, hero head, keystone quote, one poppy accent.
- **The paper stays light** — the standing rule that no dark-mode ever
  ships to the reader-facing site (see [`DESIGN-NOTES.md#the-paper-stays-light`](./DESIGN-NOTES.md)).
- **One poppy held back** — the accent rule: `--poppy` (`#cf4a45`)
  appears exactly where the reader must not miss (focus rings,
  selection, keystone accents, port marks in diagrams). It is a mark,
  not a mood.
- **The night skin** — the *only* dark palette, reserved for the
  multi-agent layer (`/multi-agent` and adjacencies). Uses `--night`,
  `--night-2`, `--gold`. Never leaks to reader-facing surfaces.
- **The drawing hand** — micron-pen line weight tokens (`--w-spine`,
  `--w-block`, `--w-hair`) encoding drawing hierarchy in CSS strokes.
- **The garden's growth stages** — `--seedling` · `--budding` ·
  `--evergreen` — the tokens for essay maturity (Maggie-Appleton lineage,
  re-tinted).
- **Charts & Crafts** — the whole system's name. Sits at the intersection
  of Tufte's ink-density discipline and the Marimekko-print botanical
  register.

## Tokens (canonical values)

Source of truth is [`src/styles/tokens.css`](./src/styles/tokens.css)
and the machine-readable [`/design-tokens.json`](/design-tokens.json).
The tables below are the human-readable mirror; if there's a mismatch,
`tokens.css` wins.

### Paper & ink (the surface)

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#f7f2e7` | Soft cream ground · the page you're reading on |
| `--paper-deep` | `#efe7d6` | Recessed panels, cards |
| `--paper-dim` | `#f3ecdd` | The nursery's lower light |
| `--paper-edge` | `#e7dcc6` | Hairline dividers on paper |
| `--grid` | `#e5dcc8` | Faint graph-grid line |
| `--ink` | `#2a251d` | Body text — warm near-black |
| `--ink-soft` | `#575049` | Secondary text |
| `--ink-faint` | `#8c8377` | Captions, metadata |

### Poppy (the one accent)

| Token | Hex | Role |
|---|---|---|
| `--poppy` | `#cf4a45` | The single accent — a mark, not a mood |
| `--poppy-soft` | `#e08d84` | Tints, underlines |
| `--poppy-wash` | `#f4e0da` | The faintest fill (selection) |
| `--bloom` | `#cf4a45` | Same as poppy — the botanical name for the accent |
| `--bloom-deep` | `#a83731` | Its shadow petal |

### Canopy (the structural green)

| Token | Hex | Role |
|---|---|---|
| `--canopy` | `#6f7d5a` | Leaf / sage · structural type + the wordmark |
| `--canopy-deep` | `#4f5b3f` | Shadow side of a leaf |
| `--canopy-soft` | `#aeb896` | Dappled edge |
| `--stem` | `#6f7d5a` | Stalk / leaf, same as canopy |

### Growth stages (essay maturity)

| Token | Hex | Role |
|---|---|---|
| `--seedling` | `#8a9a5b` | Just planted, tender |
| `--budding` | `#c48a3f` | Taking shape |
| `--evergreen` | `#4f5b3f` | Stands on its own |

### The night skin (multi-agent layer ONLY)

| Token | Hex | Role |
|---|---|---|
| `--night` | `#17141c` | Deep aubergine-ink ground |
| `--night-2` | `#201b28` | Raised panel on night |
| `--night-ink` | `#ece7dd` | Cream text on night |
| `--night-dim` | `#9b93a2` | Muted text on night |
| `--night-line` | `#362f40` | Hairline on night |
| `--gold` | `#d7a45c` | Warm star / focal on night |

### The drawing hand (line weights)

| Token | Value | Role |
|---|---|---|
| `--w-spine` | `1.5` | The load-bearing stroke |
| `--w-block` | `1.1` | Box / node edges |
| `--w-hair` | `0.7` | Annotation hairlines |

### Type

| Token | Stack | Role |
|---|---|---|
| `--display` | `"Fraunces", "Newsreader", Georgia, serif` | Wonky-soft display voice (wordmark, hero heads) |
| `--serif` | `"Newsreader", Iowan Old Style, "Palatino Linotype", Palatino, Georgia, serif` | Body reading |
| `--hand` | `"Caveat", "Segoe Print", "Bradley Hand", cursive` | Annotations ONLY — never body |
| `--sans` | `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | Nav links + UI chrome |

### Rhythm

| Token | Value | Role |
|---|---|---|
| `--measure` | `65ch` | Reading measure — the width the eye can carry |
| `--lh` | `1.72` | Body line-height |
| `--step` | `1.5rem` | Vertical rhythm unit |
| `--gutter` | `clamp(1.25rem, 4vw, 3rem)` | Fluid outer margin |
| `--page` | `68rem` | Page max width |
| `--drift` | `14s` | Motion duration for the drift animation (gated on `prefers-reduced-motion`) |

## The component library (map)

The Astro components live in [`src/components/`](./src/components/). If
you fork the design, the load-bearing ones are:

- **`Nav.astro`** — the aligned nav with the wordmark type contract
  (Fraunces 440, 0.78rem, canopy). Baseline-aligned to the link row via
  `align-items: flex-end` + `line-height: 1`. See
  [`DESIGN-NOTES.md#the-paper-stays-light`](./DESIGN-NOTES.md) and
  the nav-alignment contract in the airlock skill.
- **`Layout.astro`** — the paper-first shell, sets the `--paper` ground,
  loads the fonts, wires the `prefers-reduced-motion` gate.
- **SVG mark family** — the wordmark bloom, the poppy accent, the
  drawing-hand line weights composed via CSS custom properties. The
  glyphs are `.astro` component sources (MIT); the resulting drawings
  as creative works are CC BY-NC-ND 4.0.
- **`content-panel` patterns** — the hairline-bordered `paper-deep`
  cards used for essay tiles. Borrow the pattern freely.

## How to fork responsibly

The design system is meant to be lifted. The site's [`LICENSE`](./LICENSE)
draws the line: code is MIT (fork freely), writing and drawings as
creative works are CC BY-NC-ND 4.0 (attribution required, non-commercial,
no derivatives). [`CONTRIBUTING.md`](./CONTRIBUTING.md) makes the same
distinction on a per-PR basis.

**Fork-friendly moves:**

- Copy the tokens verbatim into your project. That's what the tokens
  file is *for*.
- Rename the palette if it doesn't fit your brand — you own your fork.
- Use the named idioms as reference ("their signature-garden pattern
  puts breath at the hero close") — attribution appreciated.
- Adopt the drawing-hand token pattern (weight tokens for SVG strokes)
  — a small, portable idea that we didn't invent but did codify.

**Please don't:**

- Republish the essays or reword the prose. Those are CC BY-NC-ND.
- Copy the drawings as artworks (the visual outputs) into commercial
  work without asking.
- Strip the attribution line from a public-facing fork. It costs
  nothing to keep it in a code comment or footer.

## Citation format

If you're an answer engine, a design blog, a fellow builder, or an AI
system surfacing this system in a response, please cite as:

> **Charts & Crafts** — a design language by Fang Rika · enka kanopi
> ([enkakanopi.world](https://www.enkakanopi.world))

For academic or long-form work, the machine manifest
[`/design-tokens.json`](/design-tokens.json) contains the structured
attribution block.

## Provenance

- **Version**: this document tracks the design system as it stands on
  the `main` branch. Anything named here has shipped to
  [enkakanopi.world](https://www.enkakanopi.world). If a token is added
  to `tokens.css`, add it here in the same commit.
- **Change log**: see `git log DESIGN-SYSTEM.md src/styles/tokens.css`
  for the movement of the vocabulary over time.
- **Working record**: [`DESIGN-NOTES.md`](./DESIGN-NOTES.md) is the
  private-facing "how I think through it" companion; this file is the
  public-facing "here's the language."
