# Design notes — Charts & Crafts

The whole surface obeys one pairing: **warm surface, rigorous spine** — strip the
warmth and the logic still stands; strip the logic and the warmth has nothing to
hold. What follows is the working record of how that gets enforced, and the
one-sentence idea each diagram carries (Law 1: one chart, one load).

## The ten laws, as applied here
1. **One chart, one load** — each diagram states a single idea; its `Figure`
   caption *is* that sentence, shown so the reader consumes the conclusion (Law 9).
2. **Label the flow, not the box** — edges carry verbs (*translates*, *let go*,
   *hands off to*); nodes are just anchors. See `DiaVersions`, `DiaTrust`.
3. **The hand is a trust signal** — every stroke is a hand-set SVG path with
   deliberate wobble, never a filter. Ruler-straight only where it would be
   colder without being clearer.
4. **Chunk to the snap-grain** — surfaces are short; essays are 300–600 words;
   one idea enters per scroll-beat.
5. **Contrast is the hierarchy** — rank by weight/size/temperature. The single
   poppy accent is the strongest signal and is spent sparingly.
6. **Reveal in beats** — home moves keystone → intro → doorways; essays move
   claim → diagram → turn → open question.
7. **The metaphor must bear weight** — canopy↔container, canopy↔legible-in-
   motion, seam↔the-join-that-holds each map ≥2 properties to ≥2 of the idea.
8. **The glyph earns its place** — the 7-mark glyph kit (`Glyph.astro`) is only
   used where a mark guides the eye or encodes a relation; decoration is cut.
9. **Show the precomputed answer** — captions give the conclusion; the drawing
   is the evidence, not a puzzle.
10. **Warm surface, rigorous spine** — cream paper + hand + one poppy over a
    strict reading measure, semantic HTML, and a real argument in every essay.

## Tokens (see `src/styles/tokens.css`)
- **Paper** `#f7f2e7` with a graph-grid at ~0.7px line, very low contrast.
- **Ink** warm near-black `#2a251d`; two softer greys for hierarchy.
- **One accent** — poppy `#cf4a45`, held for ports / focal points only.
- **Botanical greens** for the canopy motif (leaf, dapple, shadow-side).
- **Line weights** — spine `1.5`, block `1.1`, hairline `0.7` (micron-pen idiom).
- **Type** — Newsreader (humanist serif) for the eye; Caveat (hand) for margins
  and annotations *only*, never body; system sans for quiet labels.

## v2 — the garden layer (fused from the prior intimate site)
The dark, starry garden was carried onto warm paper, not discarded:
- **Display voice** — Fraunces (wonky-soft optical serif, italic) for the hero and
  section titles, carving an identity that isn't AI-generic; Newsreader stays the
  reading spine; Caveat stays the hand, margins only.
- **Constellation whisper** — a sparse dot field sits under the graph grid, both far
  below the reading threshold (Law 8): the night sky kept as texture, not pattern.
- **Growth stages** — pieces are tended by maturity, not date: seedling · budding ·
  evergreen (the digital-garden lineage), shown as a coloured chip on every essay.
- **The tending chain** — the prior site's live agent status bar, re-drawn as a light
  Charts & Crafts footer: NOTE → gather → PULSE → sharpen → TEND → guard → MIRROR →
  grow → GROW. Edges carry verbs (Law 2); the machine is visible, its internals are
  not; "assisted, never authored" is stated, not hidden. See `ARCHITECTURE.md`.

## The diagrams — one idea each (Law 1)
| Diagram | Where | The one sentence it carries |
|---|---|---|
| `CanopyScene` | home, colophon | Light reaches the ground only by passing through what holds it. |
| `DiaSeams` | Field Notes · The Seam | The truth is in the seam between versions, not the average of them. |
| `DiaTrust` | Field Notes · The Room I Left | Letting go is the last craft — the work continues in a room you have left. |
| `DiaCanopy` | Field Notes · Only in Motion | A self, like canopy, is legible only in motion — never in the still frame. |
| `DiaUnfinished` | Field Notes · In Formation | Unfinished is a state, drawn as a bracket left open on purpose — not a broken line. |
| `DiaHands` | Workbench · Why Start With the Hands | The hand learns what the head can only later name. |
| `DiaFall` | Body & Spine · Relearning to Fall | The body's first lesson is the safe fall, not the graceful stand. |
| `DiaArticulation` | Body & Spine · Articulation | A spine re-punctuated: the same sentence, newly articulated. |
| `DiaVersions` | Versions of Me | The versions are nodes; the seams between them — labelled with verbs — are the self. |
| `DiaMemory` | Field Notes · Hallucinations of the Past | Forgetting is maintenance: keep the seams, let the rest decay, never consolidate the past into one clean summary. |

## Accessibility
- WCAG AA contrast on text; ink-on-cream is comfortably above 4.5:1.
- `prefers-reduced-motion` disables the canopy drift and all transitions.
- Every diagram is `role="img"` with a `<title>` describing what it shows.
- Semantic landmarks (`nav`, `main`, `article`, `footer`), a skip link, and
  `aria-current` on the active nav item.

## Deliberately unfinished
Autobiographical specifics are left as marked slots, never invented — grep
`SLOT` across the repo. The HUB identity essay is not built; `Versions of Me`
holds the structure around its gap and ends inside the open question, by design.
