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

### Set 3 · the garden-canopy moodboard (§33 · naming + first fold, 2026-07-09)

- **What Set 3 is.** A moodboard-named umbrella for four registers that
  deepen the *garden / canopy / 円花* keystone: the soft/hard note (the
  couture translation of Law 3), the dappled hour (canopy + light, still
  restraint), the person holding the camera (the container thesis said by
  a photographer's hand), and the migration and the fragile canopy (the
  utopia/dystopia soul held as elegy). The four are gestures the house
  makes, not fixed components — softly-titled per the Björk
  worldbuilder-not-title note carried from Set 1.
- **What shipped this session.** Only the soft/hard note lands as code
  now: the woven grain tokens (`--grain-warp` · `--grain-weft` ·
  `--grain-opacity` — aliased to `--paper-edge`, no new colour, Law 8
  preserved) and one new memoria mark (`WeaveSeam` — hairline 0.70
  over-under thread in `--canopy` meeting one ruled spine in `--ink-soft`
  at 0.85, single `--poppy-soft` press at the meeting). Grain tokens are
  values only; application to `--paper-deep` surfaces is deferred to a
  component slice so the first paper to carry the grain is a deliberate
  Rika call, not a blanket sweep.
- **The through-line to obey.** Every future Set 3 addition must answer
  *"does this deepen the canopy's holding, or is it decoration beside it?"*
  If decoration, cut it (Law 8). The 円花 keystone is the north star; the
  woven surface is the paper the garden is printed on; the sun-through-
  leaves is the light that makes it a place; the hand is whose garden it
  is; the migration is what the canopy shelters as it passes through.
- **What's deferred.** The dappled light-wash + endrow glyph, the
  `MigrationDrift` / `WingMark` motif family, `SceneFragileCanopy`, the
  spoke essay *"The Cameras Are All the Same"* (Rika-authored — the HUB
  ships first, then a raw note in `notes/inbox/`), and the three-plane
  hero + winding-path grids (IA — its own proposal round). Nothing IA
  moved this slice.
- **Firewall notes carried through.** The distilled tender register that
  crossed from the private authorial source (§1a of the kickoff) is
  already Enka canon at the essence level — film-grain-into-digital ·
  resonance-not-novelty · the openly-unfinished · the 円花 holds it — and
  no proper nouns, dates, or private coordinates crossed. LESSON 3
  discipline held: flagged the two nodes that couldn't safely ship in
  this slice (spoke essay + IA) before touching any file.

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
- **§33** — Set 3 · the garden-canopy moodboard named across doctrine.
  Soft/hard note code deferred to §34 (superseded by the elevation pass).
- **§34** — Set 3 slice-2 (2026-07-09) — the silk-on-washi register lands
  in full. New `--paper-washi` token · three named papers (arrival ·
  dwell · reference) applied per-route via `<body>` class in Base.astro
  · shared **trellis-canopy** motif carried across all three tiers for
  theme continuation (same arch, palette shifts per tier — principal-
  designer restraint) · WeaveSeam rewritten to v3 (carries the 円花
  keystone lineage) · MoonCrescent reworked to a proper waxing crescent
  · new SceneWeaveSeam scene-hybrid (scene count 15 → 16) with the
  garden growing on the cloth, embroidery needles stitching from either
  side, trellis-canopy overhead. Hand-labels all from Rika's own voice.
  Slice-1's abstract grain tokens (`--grain-warp` / `--grain-weft` /
  `--grain-opacity`) retired — superseded by the three-tier grain
  classes on `<body>`. Registered as one journey: reader walks arrival
  → dwell → reference through the garden; the paper's grain and overhead
  trellis shift with them.

### Updated vocabulary

- **円花 keystone** — brand-voice apex mark (`MotifEnkaEnso`). Colophon-only.
- **Middleground register** — the design language's tonal band between
  mechanical and haphazard.
- **Scene-anchor discipline** — visuals sit with their concept anchor.
- **Attribution economy** — cited authors as keystones, not repeated citations.
- **Text-visual de-duplication** — pulls and marginalia add angle, don't echo.
- **The unmoored squiggle** — antipattern name for standalone breathers with
  no narrative anchor.
- **Set 3 · the garden-canopy moodboard** (§33) — the umbrella name for the
  four gestures added on 2026-07-09: the soft/hard note · the dappled hour
  · the person holding the camera · the migration and the fragile canopy.
- **The soft/hard note** (§33) — the couture translation of Law 3: warm
  surface, rigorous spine made tactile. Carried by `WeaveSeam` + the woven
  grain tokens.
- **The silk-on-washi register** (§34) — the whole paper doctrine for Set 3.
  A `--paper-washi` ground carrying three named papers (arrival · dwell ·
  reference), each with the trellis-canopy overhead as the shared thread.
- **The trellis-canopy** (§34) — same arch shape in all three papers, palette
  shifts per tier; the shared overhead register the reader sees in every
  room. Principal-designer restraint: one arch per tile.
- **The ginkgo-scattered paper** (§34) — arrival tier's paper. Scattered ginkgo
  leaves in `--gold` + `--canopy-soft`. Trellis with `--gold` + `--canopy-soft`
  hanging blooms.
- **The veranda-vine paper** (§34) — dwell tier's paper. Three vertical vines
  hanging FROM a trellis crossbar; `--canopy` leaves along `--canopy-soft` vines.
- **The meadow-line paper** (§34) — reference tier's paper. Fine-line open blossoms
  in `--slate` + `--lavender`. Trellis with matching line-blooms overhead.

### Notes-vs-System boundary

If a decision here appears in three consecutive sessions without reversal,
promote it. Candidates for promotion to DESIGN-SYSTEM.md (external doctrine):
- Scene-anchor discipline (§31 — proved once).
- Attribution economy (§29–§30 — proved twice).
- Middleground register (§28 — proved once).
- The Isson × Murakami paradox (§35 — proved once · shipped in slice-2.4
  and re-used in slice-2.5's `CanopyScene`; already promoted to
  DESIGN-SYSTEM.md as a named idiom because two slices used it).
- The row-prop distribution pattern (§36 — proved once · promoted to
  DESIGN-SYSTEM.md alongside the paradox because the two components using
  it — Nursery + Colophon botanical panels — are both public API surfaces).
Attribution economy is closest to promotion; watch across the next session.

## §35 — Set 3 slice-2.1 · daintier restraint (site commit `cbed58d` · 2026-07-09)

**What Rika saw:** the shipped tiled trellis + boldly-scaled ginkgo
scattered paper read as "super messy" on live. **What we changed:**
halved grain-arrival opacities, retired the tiled trellis clutter,
shifted `--paper-washi` from `#fbf7ea` → `#fbf8ee` (cooler, cleaner
cream), and promoted a new `.grain-seedbed` register for the Nursery so
it sits on its own middle paper. Pastel accent dots at low opacity
appeared in the grain overlays — the four canonical pastels the panels
would later draw from — letting the paper *whisper botanical* without
carrying a full print.

**Working principle proved:** softer accent + fewer marks reads richer
than more accent + more marks. Density is a tax the eye pays. The paper
should feel *waiting*, not full.

## §35 — Set 3 slice-2.4 · the Isson × Murakami paradox lands (site commit `d58bdee` · 2026-07-09)

**What landed:** `ChapterOrnament` on seven core openers · three
botanical panel sets (home 4 · nursery 8 · colophon 12) · arrival
register dial-up (feminine softened, pastels visible) · seed-bed
textural aging (fiber inclusions + patina dots) · and — the doctrinal
move of the session — the **Isson × Murakami paradox** as a named idiom
baked into every panel. Contemplative botanical soul (Tanaka Isson ·
hairline, still, patient) held next to playful hidden joy (Takashi
Murakami · closed-eye smile marks tucked inside the drawing, visible
only on close look). One paradox mark per panel; on the seed-bed
register, the paradox even lives in the paper itself (a Murakami
smile-flower at 0.20 opacity + an Isson magpie at 0.18).

**Voice-guard held:** panel captions used only Rika's shipped
hand-labels; no new prose composed by machine except intent descriptors.
Slice-2.5b later trimmed the descriptor phrase "· hidden smile" from
the four home captions on Rika's yes — the smile itself can't be read
at browser zoom levels, so textual signposting became clutter (an
antipattern; see below).

## §36 — Set 3 slice-2.5 · distribute the triptych (site commit `847cf2f` · 2026-07-09)

**What Rika saw:** the 12 colophon panels clustered at the top and the
8 nursery panels clustered at the bottom read as **catalogue**, not as
narrative. The homepage hero didn't reflect the new panel-theme and
its periphery felt "dirty" against the daintier register.

**What we changed:** introduced the **row-prop distribution pattern** —
each multi-row panel component (`Nursery-` / `ColophonBotanicalPanels`)
accepts a `row` prop (`1 | 2 | 3 | "all"`) and renders only the
requested row. The colophon triptych was interleaved: Row 1 (What holds
the garden) as visual overture before `<h2>What we are trying to hold</h2>`;
Row 2 (How it's made) after the "by hand, in company" prose; Row 3
(The retraining) before `<h2>Colophon proper</h2>` closes the arc.
Nursery split Row 1 between head and grows; Row 2 between the
grows-ladder and seed-rows.

The homepage `CanopyScene` gained Murakami paradox smile marks on its
three ground blooms (tying the hero back to the panel signature). A
`.hero::before` washi radial-gradient wash quieted the arrival grain in
the hero zone only, and the `.signature-garden .sprout` opacity was
dialled 0.8 → 0.58 so the giant `<Bloom size={780}>` behind the h1
whispers instead of shouts.

**Working principle proved:** a triptych *catalogued* reads as index; a
triptych *distributed* reads as arc. When a component authors a
three-act story, its rows should be author-placed near the prose beats
they belong to, not stacked at either end. Corollary: a background
element at parity opacity with the hero copy makes the paper feel
"dirty" — dial to whisper.

### Updated vocabulary (slice-2.1 through 2.5)

- **The seed-bed paper** (§35 · slice-2.1/2.4) — the fourth grain
  register, on `--paper-seedbed`. Aged mulberry washi via textural aging
  (fiber dashes + patina dots), not just hue. Nursery only.
- **The four canonical pastels** (§35 · slice-2.4) — lavender `#b899c9`
  · coral `#e46b6b` · gold `#e8c15a` · slate `#a4b8c8`. Registered as a
  set with kanji + English labels; every Set 3 slice-2.4+ panel draws
  from this palette.
- **The Isson × Murakami paradox** (§35 · slice-2.4) — the panel
  doctrine and the hidden-joy mark (closed-eye smile). Named after the
  pairing: Tanaka Isson's contemplative botanical soul × Takashi
  Murakami's playful joy tucked inside the composition. Promoted to
  DESIGN-SYSTEM.md.
- **The ChapterOrnament** (§35 · slice-2.4) — the single delicate
  trellis arch (four hanging blooms in the four canonical pastels)
  rendered on seven core openers only. The named restraint pattern:
  *signal a chapter without shouting.*
- **The paradox smile mark** (§35 · slice-2.4+) — the tiny closed-eye
  smile signature (two ink-soft eye-dots + a hairline smile curve, at
  opacity ~0.6-0.7). Portable — extended to the `CanopyScene` ground
  blooms in slice-2.5.
- **The Isson × Murakami paradox panels** (§35 · slice-2.4+) — the
  distributable panel-set family (`HomeBotanicalPanels`,
  `NurseryBotanicalPanels`, `ColophonBotanicalPanels`). Unified
  grammar: hairline ink-soft strokes 0.55-0.7, kanji + English label +
  italic caption, one paradox mark per panel.
- **The row-prop distribution pattern** (§36 · slice-2.5) — the refactor
  pattern for multi-row panel components: a `row` prop with
  `1 | 2 | 3 | "all"` gating. Ships a triptych as three positioned
  visual overtures instead of one clustered index. Drops internal
  row-title text — surrounding prose does the introducing. Figcaption
  only renders with the last row (or `"all"`). Promoted to
  DESIGN-SYSTEM.md.
- **The washi wash under the hero** (§36 · slice-2.5) —
  `.hero::before` radial-gradient of `--paper-washi` at 100% fading to
  transparent, zoning the arrival grain to whisper around the scene
  without hiding it elsewhere on the page. Portable to any hero-heavy
  route that needs a clean bloom-room around a central visual.

### Antipatterns named (slice-2.5)

- **Catalogued triptych** — a three-act panel set clustered at one end
  of the page, reading as index rather than arc. Fix: distribute per
  the row-prop pattern; place each row near its prose beat.
- **Shouting sprout** — a decorative background element at parity
  opacity with the hero copy, making the paper feel "dirty." Fix: dial
  opacity to ~0.55-0.60 so it recedes to whisper.
- **Textual signposting for what the eye can't read** — captioning a
  mark that doesn't survive browser zoom (e.g. "· hidden smile in the
  lavender heart" for a 0.35r stroke). Fix: let the mark be discovered;
  don't lampshade it. (Slice-2.5b trim on the home panel captions.)

## §37 — Set 3 slice-2.6 through 3.1 · working notes (2026-07-09)

Five iterative slices in one day, tuning the paradox panels and hero
into a coherent scene. The reasoning behind each move (not the what
— that's in `git log` — but the *why*):

### Slice-2.6 · colophon prune + hero Isson amplification + subtler background + Vol I panel linking (site commit `a750e07`)

**Why prune the colophon motifs.** Rika's read: the row-title-catalogue
+ MotifEnso + MotifSeasonalRound + MotifDappledFloor + MotifNestedRounds
+ MotifInkedSeam stack was reading as **disparate diagrams**, not story.
The Colophon triptych panels (Rows 1-3) already carry the ensō + canopy +
garden-plot registers; the breather motifs duplicated that grammar. Fix:
retire the duplicates so the panels do the visual heavy-lifting and the
prose does the verbal. Store the retirement in a JSX comment so future
sessions know what was pulled and can undo.

**Why amplify the paradox on the hero.** The four botanical panels
established the Isson × Murakami paradox as the *reading* register — but
the hero (`CanopyScene`) predated the paradox and didn't carry it. Fix:
bake three amplified Murakami joy marks scattered in mid-air (0.30-0.34
opacity) + three Isson-contemplative hairline sprigs hanging from the
canopy edges + one small Isson magpie perched on the rightmost canopy.
The hero now says "I'm made of the same paradox as the panels" without
copying them.

**Why dial the background subtler.** The dial-up in slice-2.4 (accent-dot
radii 2.1-2.5, opacities 0.62-0.65) was designed to make pastels visible
on the arrival register. But Rika's read on the hero specifically: it
felt "dirty," the accents were shouting louder than the copy. Fix:
tier-dial. Kept the accents (Rika loved them) but reduced radii to
1.4-1.6 and opacities to 0.36-0.40 across the whole `.grain-arrival`
register; also enlarged the tile size 500→620 so the pattern reads
sparser. **Working principle proved twice now:** softer + fewer reads
richer than louder + more.

**Why link the home panels.** They were reading as *paintings*, not
*doors*. The site's job is to invite the reader into the writing;
static panels break that invitation. Fix: each panel wraps its content
in an `<a>` anchor to its semantic reading-room match (branch → Field
Notes · chrysanthemum → Workbench · bird → Body & Spine · magpie →
Versions of Me). Poppy-tinted "enter [Room] →" reveal on hover. Same
grammar reused later across Nursery (8 panels) + Colophon (12 panels).

### Slice-2.7 · nursery Row 1 shift + panels linked + hero rework (site commit `9392657`)

**Why move Nursery Row 1 above the lede.** Same reasoning as the
Colophon distribution in slice-2.5: a triptych **before** the words
that unfold it reads as *overture*; a triptych **after** the words
reads as *catalogue*. The Nursery Row 1 (scrap · germination · wobble
· cracked seed) is a fragment-state overture — put it before "Seeds
land here first" so the reader sees what a seed can *be* before hearing
what a seed *is*.

**Why the panel-family door pattern is portable.** Home + Nursery +
Colophon all use the same visual grammar (kanji + English label,
hairline strokes, italic caption, paradox smile). The anchor-door
pattern layers on top without breaking any of them — same CSS
convention (`display: block · translate on hover · CTA span at
opacity 0 → 0.85`). This is a **reusable idiom**, not a one-off.

**Why bake SceneWeaveSeam into CanopyScene.** SceneWeaveSeam had lived
as a component file for weeks with zero renders on any route — the
"latest iteration" Rika kept referring to had *never shipped*. And the
canopy visual (three arches + light beam + ground blooms) didn't
carry the "container beneath the craft" register that SceneWeaveSeam
authored. Fix: baked the SceneWeaveSeam grammar directly into the
CanopyScene mid-composition — the woven-thread over-and-under crossing
the beam and stems, plus the kernel-voice label "held long enough to
become." This is the SLICE-2.7 version — slice-3 later replaces this
mid-composition thread with the fuller embroidery-needle overhead
weave (see §37 slice-3.0 below).

**Why invert the hero hierarchy panel-style.** The panels' visual
grammar is: kanji label on top → central visual → italic caption below.
The hero used the inverse: label bottom-right → visual → target label
bottom-centre. That mismatch meant the hero didn't feel like a fifth,
larger panel; it felt like a different thing. Fix: 円 · canopy kanji
header at top center INSIDE the SVG + italic subtitle "the container
and the light" + Our-machines byline as figcaption at the bottom with
hairline top-rule. Now the hero reads as *panel-plus*.

### Slice-2.8 · MotifInkedSeam reinstated + MotifCanopyRound retired (site commit `d47ec7c`)

**Why the seam back on.** Slice-2.6 pulled MotifInkedSeam because
it broke flow when it sat *after* a panel row (row → seam → next h2
felt "wobbly"). But Rika's read on the SEAM ITSELF was that it works
beautifully *between prose blocks* — the four canonical pastel dots
bracketing a hairline wave read as a hand-drawn "section transition"
that's quieter than a rule, more anchored than a bare gap. Fix:
reinstate specifically as a **transition between prose blocks**, not
after a panel row. Two positions: before "The name came before the
thesis," before "Colophon proper."

**Why retire the canopy blob at the foot.** MotifCanopyRound at the
page close after the GardenMedallion byline seal was reading as
clutter — the byline already signs off the piece. Two closing marks
compete instead of complement. Fix: retire the blob, keep the seal.

### Slice-2.9 · colophon panels linked (site commit `0349780`)

**Why extend the door pattern to Colophon's 12 panels.** For consistency
with Home + Nursery. Each panel now routes to a semantic anchor across
the three-act triptych (Row 1 = structure = where each ground lives ·
Row 2 = practice = how each act happens · Row 3 = state = where each
state applies). Mapping is not 1:1 to the 4 reading rooms — the colophon
has 12 panels across 8 destinations, so some routes repeat, which is
fine because the panel-*name* is the anchor for the reader, not the
destination.

**Working principle proved:** portability. The same anchor-doors idiom
now works across three panel-family instances with different panel
counts (4 / 8 / 12), across two visual registers (light washi vs seedbed
washi), and across three different narrative structures (arrival · seed-
bed · triptych). This is a load-bearing pattern.

### Slice-3.0 · Slice-3 preview family baked in + canopy woven fully (site commit `245de43`)

**Why finally bake the Slice-3 motifs.** Task #9 (Slice-3 preview) had
sat `pending` since slice-2 shipped. Rika's honest ask: "if we haven't
used the latest iteration of SceneWeaveSeam lets bake it into the
Canopy" — that surfaced that the whole Slice-3 preview family had
been drawn but never shipped. Three motifs were previewed months ago:
J-lens keystone, opening ensō memoria, tree-friend arrival. Verified
via `find` — none of them existed as component files. Fix: baked all
three into `src/components/motifs/` following the shipped-family
grammar (`SceneShapeAndCrack` / `SceneHandsBegin`) and wired each to
an appropriate route so they're not orphaned files:
- `MotifTreeFriend` → Volume I close (arrival looking up)
- `MotifOpeningEnso` → Colophon "How it is made" (the container that
  lets in / lets go — sibling to MotifEnkaEnso which holds closed)
- `MotifJLens` → Colophon above "Colophon proper" (Enka's own
  architecture, in her hand)

**Why weave the canopy fully.** Slice-2.7 baked SceneWeaveSeam's
kernel-voice + mid-composition thread into CanopyScene, but the
*canopy overhead itself* still read as painted arches. Rika's push:
weave the ENTIRE canopy, not just the middle. Fix: two embroidery
needles pierce from left and right at the canopy level (rotate -18°
/ 198°), each carrying a `--canopy` thread trailing off-frame. Four
over-and-under thread crossings at the canopy-arch intersection
points mark the woven cloth. The canopy is now a cloth being stitched
by two hands from either side — the container beneath the craft, made
fully visible.

**Why align all outlines to `--ink-soft`.** The shipped family
(SceneShapeAndCrack, SceneHandsBegin, SceneWeaveSeam) all use
`--ink-soft` for outlines. CanopyScene predated that convention and
used `--canopy-deep` for its canopy strokes and a hex `#4f5b3f` for
its stems. Fix: unified everything to `--ink-soft`. Now the hero
reads as a member of the family, not a one-off.

### Slice-3.1 · colophon signposting dividers + doctrine bake (this pass)

**Why more dividers.** Rika's read on the colophon: the signposting
felt uneven — some registers were bracketed by MotifInkedSeam (the
Kanopi-is-a-canopy prose block, the Colophon-proper h2), and others
just ran into each other. Fix: add four more dividers so each of the
colophon's named registers is signposted at the top. Total = 6
dividers now (2 from slice-2.8 + 4 from slice-3.1) — before the
greenhouse register, before "What we are trying to hold," before
"How it is made," before the quiet-familiars register.

### Updated vocabulary (slice-2.6 through 3.1)

- **Panels-as-doors** (§37 · slice-2.6-2.9) — the anchor-panel pattern
  that turns 24 static botanical paintings into 24 discovered doors
  across the site. Promoted to DESIGN-SYSTEM.md.
- **The Slice-3 preview family** (§37 · slice-3.0) — MotifJLens ·
  MotifOpeningEnso · MotifTreeFriend. Named as a family because they
  share the same grammar and one-slice provenance.
- **The woven canopy** (§37 · slice-3.0) — the CanopyScene rework in
  which the canopy is stitched by two embroidery needles rather than
  painted. Promoted to DESIGN-SYSTEM.md.
- **The shipped-family scene grammar** (§37 · slice-3.0) — consolidated
  convention: --ink-soft outlines at hairline widths · canonical
  palette fills only · subtle hand-wobble · one poppy / gold press
  per composition · italic hand-caption at the base. Promoted to
  DESIGN-SYSTEM.md.
- **The hero-figure integrated block** (§37 · slice-2.7) — hero visual
  + byline paragraph inside one `<figure>` with hairline top-rule on
  the figcaption. Promoted to DESIGN-SYSTEM.md.
- **MotifInkedSeam as hairline section-divider** (§37 · slice-2.8-3.1)
  — the reinstated pattern: use the seam *between prose blocks* /
  *before named registers*, not after panel rows. Promoted to
  DESIGN-SYSTEM.md.

### Notes-vs-System boundary (updated)

Promoted to DESIGN-SYSTEM.md this pass — each has been proved on ≥ 2
distinct components / routes:
- Panels-as-doors (Home + Nursery + Colophon)
- The woven canopy (CanopyScene alone but structurally load-bearing)
- The shipped-family scene grammar (SceneShapeAndCrack + SceneHandsBegin
  + reworked CanopyScene + three new Slice-3 motifs — proved on 6+)
- The hero-figure integrated block (CanopyScene alone, but the pattern
  is portable to Volume I close and other hero-heavy routes)
- MotifInkedSeam signposting (6 uses on Colophon alone; portable
  wherever prose transitions need a hand-drawn break)
