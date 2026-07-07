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
7. **The metaphor must bear weight** — canopy↔container (holds without
   fixing), self-in-motion↔legible-only-in-motion, seam↔the-join-that-holds
   each map ≥2 properties to ≥2 of the idea.
8. **The glyph earns its place** — the 7-mark glyph kit (`Glyph.astro`) is only
   used where a mark guides the eye or encodes a relation; decoration is cut.
9. **Show the precomputed answer** — captions give the conclusion; the drawing
   is the evidence, not a puzzle.
10. **Warm surface, rigorous spine** — cream paper + hand + one poppy over a
    strict reading measure, semantic HTML, and a real argument in every essay.

## The paper stays light (standing rule · 2026-07-05)
The lightness of the paper is identity, not a preference. The garden renders on
cream in **every** system setting — there is no dark mode, and none should be
added: a warm-umber variant shipped briefly and was retired the same day
(Rika's call — it cost the site its sense of lightness; git `f6ccf38` holds it
if a dusk ever earns its way back). Dark skins are **rooms, deliberately
entered** — the workshop strip's night tokens are the one dark room in the
house — never defaults inherited from an OS toggle. Enforced mechanically:
`npm run guard` fails on any `prefers-color-scheme: dark` in `src/`
(reduced-motion queries are fine).

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
| `DiaGardenPlot` | Colophon · About this place | A quiet garden is small on purpose — a wall that keeps rhythm, not people. |
| `DiaTendingQuiet` | Colophon · How it is made | The age keeps learning; the hand keeps tending — the quiet is what makes the small work legible. |
| `DiaSeams` | Field Notes · The Seam | The truth is in the seam between versions, not the average of them. |
| `DiaTrust` | Field Notes · The Room I Left | Letting go is the last craft — the work continues in a room you have left. |
| `DiaCanopy` | Field Notes · Only in Motion | A self is legible only in motion — never in the still frame. |
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
| `DiaSilences` | Body & Spine · Articulation | The meaning is in the pauses — the small silences put back between the bones. |
| `DiaHeadBody` | Body & Spine · Relearning to Fall | The head stiffens and fights the floor; the body, left to its own counsel, knows to go soft. |
| `DiaSeaToSail` | Body & Spine · The Tide Knows When | The body stops being a machine that keeps breaking and becomes a sea you're learning to sail. |
| `DiaBurnBoats` | Field Notes · A Home You Keep Rebuilding | Some rebuildings only begin once you burn the boats behind you — the crossing with no return. |
| `DiaConvoy` | Field Notes · Fragments That Rhyme | Not one ship and not a wreck — a convoy, sailing loosely together, each self keeping its own hull. |
| `DiaScaffolding` | Field Notes · In Formation | Does showing the scaffolding cost you authority — or is being seen mid-build the only authority worth trusting? |
| `DiaWeight` | Field Notes · The Company of Machines | The captain who cannot pass the weight of the ship to the ship — the fear is yours alone to hold. |
| `DiaLandfall` | Field Notes · The Detours Were the Voyage | Each trial is a landfall where you pick up the one thing only that island held. |
| `DiaStormMessage` | Field Notes · The Weather and the Sky | How do you tell the storm that is only weather from the storm trying to tell you something true? |
| `DiaSeriousLight` | The Workbench · The Shape of Things | Seriousness of seeing in one hand, the human lightness a machine can't commoditize in the other — you need both. |
| `DiaConstraint` | The Workbench · Trust the Little Kit | Constraint is the generator — a small kit you trust invents more than a big one you're afraid of. |
| `DiaTally` | The Workbench · Why Start With the Hands | You learn by the count of ruined bowls — the hand keeps a tally the head cannot argue with. |
| `DiaTwoVerdicts` | Versions of Me | A self that cannot be averaged — a failure of integration, or the only kind worth keeping? |

## Accessibility
- WCAG AA contrast on text; ink-on-cream is comfortably above 4.5:1.
- `prefers-reduced-motion` disables the leaf-light drift and all transitions.
- Every diagram is `role="img"` with a `<title>` describing what it shows.
- Semantic landmarks (`nav`, `main`, `article`, `footer`), a skip link, and
  `aria-current` on the active nav item.

## Deliberately unfinished
Autobiographical specifics are left as marked slots, never invented — grep
`SLOT` across the repo. The HUB identity essay is not built; `Versions of Me`
holds the structure around its gap and ends inside the open question, by design.

---

## Evolving decisions log (2026-07 sessions §26 → §31)

The section above is doctrine that has settled. What follows is the working
record of decisions made across §26–§31 that reshape how visuals, prose and
attributions co-exist in the garden. When a decision here has been proven
across three sessions without reversal, promote it upward into the doctrine
section (or into DESIGN-SYSTEM.md if it's a permanent principle for external
readers).

### The register — codified

- **The middleground** (§28 · locked). Design work must sit between mechanical
  diagrams (too clinical) and haphazard ornament (too messy). Retain the
  canonical four colours + daintiness, but hold every mark in a tender
  hand-drawn organic register that reads as *craft — the garden's own hand* —
  not as scatter-sparkle noise. Applies to scene-scale illustrations AND to
  breather motifs.
- **The 円花 keystone** (§28 · brand-voice apex). The mark that holds both
  halves of the name in one figure (`MotifEnkaEnso`) is the site's most
  concentrated brand mark. Reserved for the Colophon (top of about + closing
  keystone) and load-bearing brand surfaces. Rare enough to read as a keystone,
  never as a repeated ornament.
- **Scene-scale must be object-poetry, not ornament** (§27 · rule). A hybrid
  scene must carry an image that only makes sense for THAT essay's argument.
  Real named objects, real instruments, real gestures the prose actually
  describes. Sparkle-star + dragonfly + cross-plus tick + generic scatter-dots
  are NOT valid at scene-scale. They remain valid only at the small memoria
  breather-scale — and only where a breather adds something a scene doesn't.

### Attribution economy (§29 · §30)

- **Keystones, not repeated citations.** A cited author is a KEYSTONE mark for
  the site, not a repeated attribution across essays. Kalanithi appears named
  in exactly one place — as a shape held by the register. Elsewhere, the
  citable lines (*mercy trumps justice*, *filled a dying man's days with a
  sated joy*) are quoted as citable text attributed to "a physician writing
  near the end of his life" — the register is preserved, the wag is not.
- **Companion citations widen the register.** Sizelle's *Unwords* now sits
  alongside Karpathy / Reisman / Follett / Kalanithi / Wegner / Kaplan as
  citable public thinkers/artists. Future essays can pull from the wider
  list. The register doesn't need a single citation to hold it.
- **The garden's own voice carries the register when attribution becomes
  repetitive.** Rewriting a Kalanithi paragraph in the garden's voice does
  not weaken the register — it strengthens it by refusing to lean on the
  same shoulder every time. The register is the garden's now.

### Text-visual de-duplication (§30 · §31 rule)

- **Pull-quotes ≠ text.** A calligraphic pull-quote must NOT echo the lede
  paragraph above it word-for-word. If the pull is doing its job, it names
  the discipline from an adjacent angle. Nursery: *"tended, not timestamped.
  / kept small, on purpose."* (not the lede's wobble-the-ruler phrase).
  Studio: *"process over product. / counted as it happened."* (not the lede's
  approximation-and-edge phrase).
- **MarginNotes add angle, not echo.** A hand-voice MarginNote adjacent to a
  paragraph must NOT quote or paraphrase the paragraph. It adds a small
  turn — a rarity claim, an economy comparison, a smaller-claim discipline.
  If the marginalia can be removed without losing meaning, remove it.
- **Scene hand-labels don't triple with prose + MarginNote.** The
  `SceneInsideLife` etymology whisper (*"διάγνωσις — to know apart from"*)
  covers the same ground as the paragraph and the MarginNote — the MarginNote
  now adds a rarity claim about tender diagnostic instruments instead of
  re-echoing the etymology.

### Scene-anchor discipline (§31 · rule)

- **A scene sits with its concept anchor, not before it.** The Fresh-Eyes
  paragraph and the kintsugi paragraph are 20 lines apart in
  `the-shape-of-things`; the SceneShapeAndCrack bowl belongs with the
  kintsugi paragraph, not two lines after the seeing-shape opening. Same
  principle across the 6 rebalanced essays: SceneSpineAsSentence sits with
  the spine-as-sentence paragraph, SceneSafeFall sits with the "it teaches
  you how to fall" paragraph, SceneBodyTides sits with the body-keeps-tides
  opening, SceneLittleKit sits after the "a line, a curve, a box, a leaf, a
  fold, a dot" enumeration, SceneHandsBegin sits after "let them learn
  ahead of you."
- **The visual is the reader's picture of the sentence they just read.** If
  the scene appears before the sentence names the concept, the reader has
  nothing to attach it to and the visual reads as unmoored decoration.

### The "unmoored squiggle" antipattern (§31 · retired)

- Small standalone memoria breather divs (`MoonCrescent`, `ScriptHeart`,
  `Dragonfly`, `FineLineStar`) rendered as centred blocks between
  paragraphs when the essay ALREADY carries scene-scale hybrid scenes +
  MarginNotes + a closing essay-specific memoria mark. Read as isolated
  ornaments with no anchor — the "weird squiggle" pattern.
- **Retired from all three trilogy essays.** Prologue's mid-essay
  `MoonCrescent`, White Bear's mid-essay `MoonCrescent`, Silent Workspace's
  mid-essay `ScriptHeart` — all removed in §31. The memoria vocabulary is
  intact; the standalone-breather PLACEMENT is retired.
- **When a breather earns its place.** A small memoria breather is still
  valid when: (a) it closes an essay as its essay-specific mark (FictionFold
  / WorkspaceRoom / WhiteBear); (b) it sits at a rare register-shift beat
  that no scene covers and no MarginNote can carry; (c) it appears on tab
  pages (Nursery / Studio) where the tab voice needs breathability without
  a full scene. Never as decorative filler between text.

### Rebalancing tweaks (session-level moves)

- **§29** — Kalanithi footprint reduced 5 essays → 1 essay + Colophon; Sizelle
  *Unwords* register woven into Silent Workspace's asymptote paragraph.
- **§30** — Kalanithi NAME-drops removed entirely (register preserved as
  attributed-to "a physician near the end of his life"); Nursery + Studio
  pull-quotes rewritten to stop echoing the lede; three MarginNotes reworded
  to add angle rather than echo.
- **§31** — Small standalone MoonCrescent / ScriptHeart breathers retired
  from the three trilogy essays; SceneShapeAndCrack moved to sit with the
  kintsugi paragraph.

### Updated vocabulary

- **円花 keystone** — brand-voice apex mark (`MotifEnkaEnso`). Colophon-only.
- **Middleground register** — the design language's tonal band between
  mechanical and haphazard.
- **Scene-anchor discipline** — visuals sit with their concept anchor.
- **Attribution economy** — cited authors as keystones, not repeated citations.
- **Text-visual de-duplication** — pulls and marginalia add angle, don't echo.
- **The unmoored squiggle** — antipattern name for standalone breathers with
  no narrative anchor.

### Notes-vs-System boundary

If a decision here appears in three consecutive sessions without reversal,
promote it. Candidates for promotion to DESIGN-SYSTEM.md (external doctrine):
- Scene-anchor discipline (§31 — proved once).
- Attribution economy (§29–§30 — proved twice).
- Middleground register (§28 — proved once).
Attribution economy is closest to promotion; watch across the next session.
