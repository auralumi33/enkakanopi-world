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
| `DiaWriteAuthority` | Field Notes · Who Gets to Write to You | A self is not what it remembers but what it lets become permanent — most of what knocks should stay provisional until it has been lived. |
| `DiaKeel` | Field Notes · The Keel, Not the Harbour | Home isn't the harbour you return to; it's the keel you carry that keeps you upright in any water. |
| `DiaTwoMemories` | Field Notes · What the Machine Remembers of Me | One memory forgets me softly, the other keeps me exact — and I live in the gap between them. |
| `DiaCompany` | Field Notes · The Company of Machines | The crew that doesn't share your vertigo keeps working while you carry the fear alone. |
| `DiaKit` | The Workbench · Trust the Little Kit | A few trusted primitives and a grammar for joining them make more than a big box of bespoke parts. |
| `DiaTides` | Body & Spine · The Tide Knows When | The body has tides — the craft is timing the effort to them, not overriding them (natural rhythm, never the sky). |
| `DiaMerging` | Versions of Me | The selves don't resolve into one; they braid into a single current that keeps each of their colours. |
| `DiaWeatherSky` | Field Notes · The Weather and the Sky | The moods are weather; you are the sky they pass through — neither improved by clear days nor damaged by storms (metaphor, not the heavens). |
| `DiaQuest` | Field Notes · The Detours Were the Voyage | The straight line home was never on offer — the detours were the voyage. |
| `DiaWobble` | The Workbench · The Shape of Things | The tremble isn't your core failing; it's the deep muscle waking up — the wobble is the rebuild. |
| `DiaCarriedCapacity` | Field Notes · The Keel, Not the Harbour | Capacity isn't a trait you have — it's the running total of the reps you survived, compounded into ballast you carry into every room. |
| `DiaGranularity` | Field Notes · The Weather and the Sky | A precisely named feeling gives you a heading; "bad" gives you nowhere to steer. |
| `DiaFallData` | Body & Spine · Relearning to Fall | Every fall is data, gilded — a landing to learn from, plotted into a rising series, never a verdict stamped on you. |
| `DiaLoadBearing` | Body & Spine · Articulation | The discipline is knowing which parts must bear the load and which are free to move — and for years I had it backwards. |
| `DiaMendPace` | Body & Spine · The Tide Knows When | You mend at the speed the mending happens — a real recovery is a jagged rising line, not the straight one you'd have willed. |
| `DiaRelay` | Field Notes · Hallucinations of the Past | Memory is finally for the handoff — the machine can out-hoard me forever, but can never hand anything on. |
| `DiaRevising` | Field Notes · In Formation | A living line you can return to and find changed beats a sealed, lacquered one that can't move. |
| `DiaContainerCraft` | Field Notes · Only in Motion | The still frame catches the craft and loses the container; the object deflates the instant you still it. |
| `DiaStableOrbit` | Field Notes · The Company of Machines | Too close and you crush it; too far and it drifts — the craft is the stable orbit, close enough to hold, far enough to spin. |
| `DiaStorms` | Field Notes · The Detours Were the Voyage | Nobody remembers the calm passages; it's the storms that get gilded into the story. |
| `DiaAtTheDoor` | Field Notes · The Room I Left | I linger by the door, hand half-raised, while the work happens correctly in a room I've already left. |
| `DiaKintsugi` | Field Notes · The Seam | Don't hide the break or merely tolerate it — gild it, until the mended seam is the most precious line on the vessel. |
| `DiaAbsence` | Field Notes · What the Machine Remembers of Me | The machine holds up an absence I can't feel from inside it — a self I stopped being without noticing. |
| `DiaForecast` | Field Notes · Who Gets to Write to You | The critic forecasts "stay small" from old data; one lived rep the data didn't have revises the forecast. |
| `DiaFreshEyes` | The Workbench · The Shape of Things | Fresh eyes don't see more facts — they look until the few forces that move the tangle surface as a shape. |
| `DiaHandsBegin` | The Workbench · Trust the Little Kit | The head wants the whole plan; the hands just want to begin — and beginning is the part no plan can do for you. |
| `DiaArc` | The Workbench · Why Start With the Hands | Hands, screen, room — one continuous appetite for making the thing you can stand inside. |
| `DiaBreathAir` | Field Notes · Hallucinations of the Past | The self ends; what it handed on becomes air, and the air keeps moving in others — breath becomes air (after Paul Kalanithi). |
| `DiaWhichWins` | Field Notes · What the Machine Remembers of Me | When mercy and accuracy disagree about who you are, which do you let win — and is the accurate one telling the truth? |
| `DiaAche` | Field Notes · The Keel, Not the Harbour | The ache that says you can never go home is the same ache that drives you to build one you can carry — one source, two pulls. |
| `DiaWholeness` | Field Notes · The Seam | A wholeness made of seams — not one smooth blank surface, but many pieces whose visible joins are the whole point. |
| `DiaGovernedFree` | Field Notes · Who Gets to Write to You | Is a self meant to be governed — a gate against its own revisions — or free to overwrite itself completely? |
| `DiaAttentionAsked` | Field Notes · Only in Motion | To be legible only in motion is to ask for a slow, patient attention most people don't have time to give. |
| `DiaCommandRegulate` | Field Notes · The Room I Left | Trust isn't gripping tighter; it's the shift from command to regulate — steady the vessel, don't seize the wheel. |
| `DiaCrumbleRebuild` | Field Notes · A Home You Keep Rebuilding | What crumbled wasn't a setback to repair but a foundation to rebuild differently — the home remade, not restored. |
| `DiaOutgrown` | Field Notes · A Home You Keep Rebuilding | You didn't lose the old life — you outgrew it, a shell left behind, not a limb cut off. |
| `DiaRhyme` | Field Notes · Fragments That Rhyme | The fragments don't reconcile into one; they rhyme across the gaps, like stanzas of a single poem. |
| `DiaMultiplicityDuality` | Field Notes · Fragments That Rhyme | The many selves don't collapse to one; they pair off into tensions held in balance — multiplicity as duality, not a single average. |

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
