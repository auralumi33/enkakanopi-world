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
- **The correspondence rail** — the one-door-two-anchors pattern
  behind every essay. A foot-of-essay prose line (the voice, on the
  earned spot) plus a persistent faint rail word in the site footer
  (the findability, everywhere), both pointing at the same `mailto:`.
  Canonical foot-line copy: *"If something here found you — the garden
  keeps a line open — say hello@enkakanopi.world."* Canonical rail
  word: `correspondence`.
- **The maker's-mark seal** — a hand-pressed poppy-red wax mark
  (subtly irregular; the irregularity is the handcraft) + a tiny
  serif caption in the Margiela REPLICA provenance grammar (place ·
  period · hand). Canonical form: *"the garden · summer 07/ 2026 ·
  tended by Fang Rika ·"*. Opt-in per essay via frontmatter
  `seal: boolean`.
- **The garden's motif set** — twenty hand-drawn Marimekko × Japanese-ma
  marks carrying the 円花 (circle + flower) + canopy name-thesis
  across the site. Extended from 10 → 20 on 2026-07-07 (tab pass).
  The colophon ten: *the sheltered bloom · the ensō 円 · the seasonal
  round · the nursery pot · the canopy round · the nested rounds ·
  the three arches · the three pots · the dappled floor · the
  hand-inked seam*. The tab ten: *the pinned cluster · the pressed
  nineteen · the archive gate* (Volume I) · *the word plot · the
  term tick · the citation seed* (Lexicon) · *the apprentice bench ·
  the workbench · the tally mark* (Studio) · *the braided seam*
  (Versions of Me). Delivered as reusable components under
  [`src/components/motifs/`](./src/components/motifs/). Pastel
  palette: `--canopy-soft` primary leaves, `--poppy-soft` held blooms,
  bloom-family sprinkles (lavender · pastel blue · Marimekko yellow ·
  cream heart) at whisper opacity. Each motif is `aria-hidden`,
  reduced-motion safe (no motion). Extend the set only when a new
  name-thesis beat is unaccounted for. Restraint is per-surface, not
  per-page (Law 6 measured at zone level: head · body · foot).
- **The memoria layer** — a fine-line calligraphic register that runs
  alongside the pastel v3 motif set. Named for the *body/webpage as a
  site of memory* framing. Hairline weight 0.6–0.9, tapered ends, low
  opacity, negative space is the star. Two ground variants: cream skin
  (`--ink-soft` + `--poppy-soft` accents, for reader-facing paper) and
  night skin (`--night-ink` + `--gold` accents, for the workshop dark
  ground only). Vocabulary base (19 marks shipped · plus a
  scene-motif hybrid layer of 9 essay-specific scenes commissioned in
  §26, blending Marimekko silhouettes with the fine-line register —
  see the *Scene-motif hybrid layer* note below · extensible per
  essay): cream skin main register (hairline 0.85) — MoonCrescent ·
  VineTrail · ScriptHeart · Greenhouse · BenchTending · PlaceNotFunnel
  · InCompany · FictionFold · WorkspaceRoom · WhiteBear · MergingSeam.
  Set 3 addition — WeaveSeam (2026-07-09) — carries the **円花 keystone
  lineage**: the same hand-brushed ensō circle as `MotifEnkaEnso`, the
  same four cardinal orbit dots (lavender · gold · slate · poppy-soft),
  with the fragile thing held inside the container replaced by Set 3's
  soft/hard note — a woven cross of `--canopy` thread over-and-under a
  ruled `--ink-soft` spine, resting on a soft `--skin` cloth, with a
  doubled `--poppy-soft` press at the meeting and the crest. The mark
  reads as *the container beneath the craft, holding the raw human weave*
  — one gesture for the container/craft thesis at memoria scale. Sits
  per-essay where the soft/hard note earns a mark, opt-in like the
  other memoria breathers. Also — MoonCrescent reworked (2026-07-09) to
  a proper waxing crescent (outer arc bulges right, inner arc creates
  the "bite"); hand-inked four-line star swapped in for the polygon; the
  interior mote dropped (Law 8).
  Cream skin tattoo-flash register (hairline 0.55 · ornamental scatter
  · sparkle glyphs · poppy-soft accent preserved · SUCCESSION §25) —
  TheCurveKept · TheFirstApproximation · FineLineStar · Dragonfly.
  Night skin
  — WorkshopHand · WorkshopMirror · WorkshopSign. Delivered as
  reusable components under
  [`src/components/motifs/memoria/`](./src/components/motifs/memoria/).
  Two placement patterns: **inline** for small doodles that carry a
  phrase within a text line (phrase-replacement register, with
  `aria-label` on the wrapping span), and **block-level** for larger
  concept illustrations that carry a paragraph-scale gesture (above
  or below the phrase anchor, centered wrapper, aria-hidden).
  Extend per essay as narratives require.
- **Scene-motif hybrid layer** (SUCCESSION §26) — larger essay-scale
  scene illustrations that BLEND the pastel Marimekko motif palette
  (soft bloom silhouettes, ground-planes, canopy shapes at 0.68–0.75
  opacity in the four canonical colours: lavender `#b899c9` · coral
  `#e46b6b` · gold `#e8c15a` · slate `#a4b8c8`) with the fine-line
  calligraphic + tattoo-flash register (hairline 0.55–0.85 stroke
  overlays · dashed tangents · script-heart curves · sparkle glyphs
  · Caveat hand-labels via the global `.hand-label` classes). Same
  discipline as the home's `CanopyScene`, per-essay. Delivered as
  reusable components in `src/components/motifs/Scene*.astro`, each
  wrapped in a `.scene-hybrid` figure (max-width 40rem · svg
  responsive · role="img" with title-element for a11y).
  Nine shipped in §26 · redrawn in §27 with narrative-specific
  object-poetry (no transferable sparkle-star or dragonfly filler;
  each scene now carries an essay-specific device that only makes
  sense for THAT idea): SceneShelfOfImpossible (rolled carpet · book
  spine · 1980 TV · terminal) · SceneRearrangedRoom (floor plan with
  named furniture in ghost + crisp positions) · SceneWarningAndMirror
  (triangular hazard sign + hand-mirror + figure standing in the
  overlap) (Prologue); SceneRoomAtMiddleDepths (layer stack + keyhole
  aperture + directional flow-arrow + ∂ mark) · SceneInsideLife (body
  silhouette + hairline stethoscope + Greek etymology whisper) ·
  SceneAsymptote (walking figure + hairline calipers measuring the
  never-closing gap) (Silent Workspace); SceneBearAtEdge (page +
  edge-bear + hand-caveat "damn." smoke-curl + ghost mirror-bear
  inside blooms) · SceneFourGrounds (keyhole · speech-quotes · brick
  wall · question-mark bloom + central hand-mirror + Bourgeois-style
  × marks) · SceneInBetweenRoom (two hands reaching + mercy as gold
  bloom in the gap) (White Bear). ≥3 per essay is the shipping floor
  for load-bearing pieces; extend as needed.

  **Rule:** scenes must carry essay-specific object-poetry (real
  named objects, real instruments, real gestures the essay actually
  describes) — not transferable ornamentation. Sparkle-star,
  dragonfly, and cross-plus tick are NOT valid at scene-scale; they
  remain valid only at the small memoria breather-scale on non-load-
  bearing surfaces. Reference altitude: JW Anderson's tote-on-stool,
  Louise Bourgeois's signed missing-piece card + wax seal, SiSi's
  laundry-tag micrographics, the internal Versions-of-Me node-and-
  edge + braided-current + verdict-vs-landings diagrams.
- **The 円花 keystone mark** (`MotifEnkaEnso`, SUCCESSION §28) — the
  definitive brand-voice motif. A hand-brushed ensō circle (the 円
  of 円花) with the character 円 whispered at centre (serif, 0.38
  opacity — a mark, not a label). Above the character, the 花 (flower)
  is held on hairline stems + two canopy-soft leaves + a coral poppy
  bloom — the flower held inside the circle. Four whispered orbit
  dots at cardinal points in the site's canonical four colours mark
  the four grounds/seasons/directions the circle holds. Reserved for
  the Colophon (top + closing keystone) and the site's most load-
  bearing brand surfaces. One gesture holding both halves of 円花.
- **Scene-motif hybrid layer** now numbers **16 hybrid scenes**
  (was 9, plus §28's six new Workbench + Body-spine scenes): the
  original nine (redrawn in §27 with narrative object-poetry) plus
  six new middleground-register scenes for the other rooms — Body-
  spine's SceneSpineAsSentence (vertebrae as punctuation marks in a
  calligraphic sentence-curve), SceneSafeFall (braced-vs-safe fall
  side-by-side), SceneBodyTides (hairline horizon + tidal curves +
  hand-drawn boats + shell); Workbench's SceneShapeAndCrack
  (kintsugi bowl mended in gold, held in hairline hands),
  SceneLittleKit (six primitives in a workbench tray + hand-caveat
  ampersand), SceneHandsBegin (two hands cup unshaped clay, brain
  told to wait, bloom beginning below). §28 also softened three
  §27 scenes flagged as too rigid: SceneFourGrounds's mechanical ×
  crosses became hand-drawn wobbly single-stroke slashes;
  SceneRoomAtMiddleDepths's medical-diagnostic keyhole became a
  hand-brushed ensō opening; SceneAsymptote's mechanical caliper
  became a soft two-stroke hairline gesture. Middleground register
  codified: dainty, feminine, hand-drawn organic craft; retain
  colours + daintiness but with tenderness that amplifies the
  garden rather than reading as messy haphazard sparkles.
  Set 3 addition (2026-07-09) — SceneWeaveSeam — the container
  beneath the craft rendered whole: hand-brushed ensō container,
  soft `--skin` fabric panel inside with faint silk-moiré vertical
  stripes, ruled `--ink-soft` spine across the cloth, `--canopy`
  thread woven over-and-under, three tall-stem-and-bloom botanicals
  growing on the cloth (`--lavender` bloom + `--coral` marigold +
  `--slate` bell, all with `--gold` centres), fern frond at base,
  two embroidery needles piercing the cloth from either side with
  `--canopy` trailing threads, four cardinal orbit dots around the
  ensō (lineage from MotifEnkaEnso), a trellis-canopy above the
  ensō with four hanging blooms (one per canonical pastel: lavender
  · gold · coral · slate bell) + whisper vine curls. Hand-labels all
  from Rika's own voice ("what looks carved was always soft thread"
  · "warm surface, rigorous spine" — Law 3, made tactile · "held long
  enough to become"). Reads as: designer form × creative-tech rigor
  × the four grounds × return to essentials. Companion mark for the
  Set 3 workbench/spine surfaces; opt-in per essay.
- **Set 3 · the garden-canopy moodboard** (softly-titled — the gestures
  the house makes, not fixed furniture; per the worldbuilder-not-title
  note carried over from Set 1). A moodboard of four registers that
  deepen the *garden / canopy / 円花* keystone; each is a gesture, not a
  named component, and each can be shipped in its own slice:
  - **the soft/hard note** — *what looks carved was always soft thread.*
    The couture translation of Law 3 (warm surface, rigorous spine) made
    tactile: the weave (soft, the visible medium) held by the loom (hard,
    the structure that appreciates). Shipped 2026-07-09 as `WeaveSeam` +
    the woven grain tokens.
  - **the dappled hour** — sun through leaves as *still* restraint, never
    a spotlight. The already-named *canopy and the light* (Voice Spine §6)
    given a filtered, sub-perceptual paper drift. *Fold pending.*
  - **the person holding the camera** — the container-beneath-the-craft
    thesis said by a photographer's hand: the gear commoditises, the
    seeing appreciates; conviction over applause; patience across time;
    curiosity across disciplines. *Spoke seed pending — Rika-authored.*
  - **the migration and the fragile canopy** — hand-cut wings massing into
    a quiet, elegiac drift. The utopia/dystopia soul held without
    resolving; the openly-unfinished at scale; the canopy holds what is
    fragile as it passes through. *Motif family + scene-hybrid pending.*
  Through-line: *the woven surface is the paper the garden is printed
  on; the sun-through-leaves is the light that makes it a place; the
  hand is whose garden it is; the migration is what the canopy shelters
  as it passes through — the 円花 holds all of it.*
- **Charts & Crafts** — the whole system's name. Sits at the intersection
  of Tufte's ink-density discipline and the Marimekko-print botanical
  register.
- **The Isson × Murakami paradox** (Set 3 · slice-2.4) — the panel doctrine
  landed in the homepage / nursery / colophon botanical panels. Named for
  the pairing of Tanaka Isson's contemplative botanical soul (still,
  hairline, patient) with Takashi Murakami's playful hidden joy (a tiny
  closed-eye smile mark tucked inside the composition, only visible on
  close look). Every Set 3 slice-2.4+ panel carries one paradox mark
  somewhere in the drawing — hidden joy, not shouted. Slice-2.5 extended
  the paradox to the homepage `CanopyScene`'s three ground blooms.
- **The ChapterOrnament** (Set 3 · slice-2.4) — a single delicate trellis
  arch under 90px tall with four hanging blooms (lavender, gold,
  poppy-soft, slate bell). Rendered by `Base.astro` on seven core opener
  routes only (`/`, `/volume-i`, `/field-notes`, `/workbench`,
  `/body-spine`, `/versions`, `/colophon`) — restraint is the rule.
- **The Isson × Murakami paradox panels** (Set 3 · slice-2.4+) — the
  distributable panel-set family: `HomeBotanicalPanels` (4 panels — the
  branch · the chrysanthemum · the bird · the magpie),
  `NurseryBotanicalPanels` (8 panels in two rows — scrap · germination ·
  wobble · cracked seed // closed bud · pressed leaf · tangent · small
  vessel), `ColophonBotanicalPanels` (12 panels in three-act triptych —
  What holds the garden // How it's made // The retraining). Unified
  grammar: hairline ink-soft strokes 0.55-0.7, kanji + English label +
  italic caption, one paradox smile per panel. Rendered on the four
  canonical pastels.
- **The row-prop distribution pattern** (Set 3 · slice-2.5) — the multi-row
  panel components (`Nursery-` and `ColophonBotanicalPanels`) each accept
  a `row` prop (`1 | 2 | 3 | "all"`) so a single triptych/pair can be
  interleaved across a page's prose instead of clustered at one end.
  Surrounding prose does the row-introducing; internal `row-title` text
  is dropped in the split placement. Figcaption only renders with the
  last row (or `"all"`). See `pages/colophon.astro` +
  `pages/nursery.astro` for the reference wiring.
- **Panels-as-doors** (Set 3 · slice-2.6 · 2.7 · 2.9) — every botanical
  panel in the site (4 home + 8 nursery + 12 colophon = 24 total) is an
  `<a class="panel">` anchor rather than a static `<div>`. On hover /
  focus-visible: `translateY(-2px)` lift + poppy-tinted border + soft
  cream wash + a "enter [Room] →" CTA span fades in from 0 → 0.85
  opacity in `--poppy` / `var(--hand)` type. Focus-visible states +
  `prefers-reduced-motion` gate honoured. Each panel routes to a
  semantically-anchored reading-room / archive-wall destination — the
  panel-name evokes what the destination holds. **Discovered
  affordance, not shouted.**
- **The Slice-3 preview family** (Set 3 · slice-3 · 2026-07-09) — three
  new motifs baked into `src/components/motifs/` after previewing
  months earlier: **`MotifJLens`** (Enka's Global Workspace keystone —
  three horizontal bands with a hand-inked lens + one poppy-soft press
  in the middle band; rendered on colophon), **`MotifOpeningEnso`**
  (sibling to `MotifEnkaEnso` — the same brushed ensō but with a wider
  opening at 1 o'clock and a small skin-toned seed escaping through a
  dashed hairline passage; rendered on colophon inside "How it is
  made"), **`MotifTreeFriend`** (arrival hero — looking up from below
  into a canopy with a tiny skin figure at the base; rendered on
  Volume I at the founding-collection close).
- **The woven canopy** (Set 3 · slice-3) — `CanopyScene` is no longer
  a painted canopy. The five arch strokes are threaded with **two
  embroidery needles** (SceneWeaveSeam grammar) piercing the canopy
  from left (rotate -18°) and right (rotate 198°), each carrying a
  `--canopy` thread that trails off-frame. Four over-and-under thread
  crossings mark the canopy-arch intersection points overhead. Reads
  as: *the canopy is not painted, it is stitched — the container beneath
  the craft, made visible.*
- **The shipped-family scene grammar** (Set 3 · consolidated 2026-07-09)
  — all "scene" and "motif" components in `src/components/motifs/*`
  follow one grammar: **all outlines `var(--ink-soft)` at hairline
  widths 0.35-0.85**; **fills from canonical palette only** (paper-washi
  ground + skin + canopy-soft + four pastels + poppy-soft); **subtle
  hand-wobble** in path curves; **one poppy-soft or gold press per
  composition**; italic hand-caption in `var(--hand)` at the base.
  Reference implementations: `SceneShapeAndCrack`, `SceneHandsBegin`,
  and now (as of slice-3) the reworked `CanopyScene` + `MotifJLens`
  / `MotifOpeningEnso` / `MotifTreeFriend`.
- **The hero-figure integrated block** (Set 3 · slice-2.7) — the
  homepage hero's `<CanopyScene />` visual + its "Our machines will
  outremember us…" byline paragraph live inside ONE
  `<figure class="hero-figure">`. The paragraph is a
  `<figcaption class="keystone">` with a hairline top-rule tying it
  to the visual. Reads as one integrated hero, not scene-plus-loose
  paragraph. The kanji header `円 · canopy` + italic subtitle "the
  container and the light" sit at the top INSIDE the SVG (panel-style
  inverted hierarchy). The SceneWeaveSeam kernel-voice label
  "held long enough to become" whispers mid-figure at 0.55 opacity.
- **Signposting via MotifInkedSeam** (Set 3 · slice-2.8 · 3.1) — the
  wavy inked-seam reinstated as a **hairline section-divider between
  registers**. Read pattern: use `MotifInkedSeam` *before* a named
  section (h2 or a distinct prose register) whenever a hand-drawn
  break is what the eye wants — quieter than a rule, more anchored
  than a bare gap. Six live on Colophon at 2026-07-09: before the
  greenhouse register, before "What we are trying to hold" (h2),
  before "How it is made" (h2), before the quiet-familiars register
  (Shibi · Seika · Botan · Kotori · Kojika · Usami), before "Kanopi
  is a canopy" prose, before "Colophon proper" (h2).
- **The 円花 wreath composition** (Set 3 · slices 3.8-4.8 · shipped
  homepage hero) — the CanopyScene consolidated shape: bold
  hand-brushed ensō with opening at 1:30-3pm (asymmetric handcrafted)
  + cascade cherry-blossom branch tracing the perimeter + hanko seal at
  bottom-right + discreet paintbrush at stroke-end + Isson magpie
  perched near the end + light beam falling to poppy port + "the light
  lands here" seal at the base. Named after the keystone kanji (円
  circle + 花 flower). The full site now radiates from this single
  composition — homepage hero rendered by `src/components/CanopyScene`.
- **The hanko seal** (Set 3 · slice-3.8 · refined 4.4) — small
  poppy-red rounded square (~26×30 units) with white 円 (top) + 花
  (bottom) kanji stacked vertically in Noto Serif JP. Sits at the
  bottom-right of a scene as the maker's-mark register. The 円花
  keystone made literal. Portable to any signed surface where a small
  poppy seal is on-register.
- **The split-branch dial pattern** (Set 3 · slice-4.7) — one wreath
  branch split into two SVG `<path>` elements (extended segment +
  body segment) so each can be dialled independently. Used in
  `CanopyScene` where the extended top branch runs at low opacity
  behind the top-of-the-ceiling florals while the body branch keeps
  full wet-ink weight. Portable to any sumi-e-register scene where a
  branch or stroke needs foreground/background variance without
  separating into two conceptual paths.
- **The wet-ink illusion** (Set 3 · slice-4.6) — two-layer stroke
  rendering pattern: main `var(--ink-soft)` at higher width + darker
  `var(--ink)` inner shadow at ~40% of main width and ~50% of main
  opacity. Produces saturated brushed-ink feel without literal ink
  texture. Applies to ensō, cherry-blossom branches, side-twigs — any
  sumi-e stroke that should carry brush-weight.
- **The refined discreet fude** (Set 3 · slice-4.2 · refined 4.3-4.6)
  — small bamboo paintbrush at ~60% of naive size (handle 30×2.6,
  ferrule 2×3.1, brush tip 3.5×1.05), positioned at the ensō
  stroke-end via `transform="translate(x y) rotate(-42)"`. Wet ink
  dot at the contact point. Signals *this is being painted* without
  dominating the composition. Pairs with the dry-brush tail trailing
  away from contact.
- **The seven wabi-sabi principles** (Set 3 · consolidated 4.0-4.8) —
  named register discipline for sumi-e-register scenes:
  · **fukinsei** (asymmetry — offset openings ~30° from centre)
  · **kanso** (simplicity — retire decorative fill, empty space is
    register-carrying)
  · **koko** (weathered — dry-brush hairlines, layered opacities)
  · **shizen** (natural — organic curves, no ruler lines)
  · **yugen** (subtle grace — paradox smiles hidden on close look)
  · **datsuzoku** (freedom — break strict convention with canonical
    pastels + English hand-labels)
  · **seijaku** (tranquility — no animations on the hero; paper stays
    still).

## The panel language (the door grammar)

The **Isson × Murakami paradox panels** shipped three times over — home,
nursery, colophon — before they were recognised as a system. The pattern is
now the site's single wayfinding grammar: **path · portal · place made
literal**. A hub is a portal field; an essay is a room; a panel is a door.
The component is [`src/components/PanelDoors.astro`](./src/components/PanelDoors.astro).

### The four hues (register anchors)

Each canonical pastel carries a **register**, not a fixed concept. The
register is what has held across all 24 shipped panels; the specific role
per surface may shift, but the register is stable and doors on any new
surface should honour it.

| Kanji | Name | Register (what the hue carries) |
|---|---|---|
| 紫 | lavender | **the hand · the fragment · the beginning** — the tender start, the piece being gathered (branch · scrap · closed bud · plot · hand · small hand · seedling · relearning · why-start) |
| 金 | gold | **the growth · the seal · the warmth** — the thing coming into itself, and the maker's-mark stamp (chrysanthemum · germination · pressed leaf · canopy · seal · first mark · budding · articulation · little-kit) |
| 珊瑚 | coral | **the wobble · the covenant · the opening** — where the curve leaves the ruler, where two hands meet, where the circle opens (bird · wobble · tangent · ensō 円花 · covenant · wobbly ensō · evergreen · tide · shape-of-things) |
| 青 | slate | **the mirror · the distance · the far view** — the reflected and the seen-from-farther (magpie & mountain · cracked seed · small vessel · provenance target · mirror · trust seal) |

**Rule:** one hue, one register, sitewide. Do not re-purpose a hue for a
second register on a new panel — the portfolio-tag discipline: consistent
vocabulary across the whole garden.

### Panel anatomy (the four elements, in order)

Every panel carries exactly these four elements, in order, top to bottom:

1. **Kanji + English label** — `紫 · lavender` (owned by the system; do not vary form)
2. **Role line** — the italic Noto Serif JP name for the door (`the branch`, `the seedling`, `the covenant`). Rika-voice; three-to-four words.
3. **Vignette** — one hand-drawn SVG. Hairline outlines (`0.55–0.7`), canonical pastels only, one paradox smile hidden inside (see below). Per-surface; slotted from the caller.
4. **Italic caption triplet** — three phrases separated by ` · `, ending in a `smile` reference. Compression from the room's own voice, never invention (voice-lock).

The CTA line — `enter [Room] →` in `var(--hand)` `var(--poppy)` — fades in
from `0 → 0.85` opacity on `hover` / `focus-visible`. The door affordance
is **discovered**, not shouted.

### The one-hidden-joy rule

Every panel carries **exactly one paradox smile** somewhere in the drawing —
a tiny closed-eye smile mark (`Tanaka Isson's soul × Takashi Murakami's
hidden joy`, per the named idiom above). Never two. Never absent. Only
readable on close look. Verified across all shipped panels; the rule is now
canon.

### The each-a-door contract

**A panel is always a portal, never decoration.** Every shipped panel is
an `<a class="panel">` anchor with an `href`. There is no such thing as a
static ornamental panel in this garden — if it looks like a panel, it opens
a room. Callers that only need a drawing should reach for a `Motif*` or
`Scene*` component instead; those are the ornamental register.

### The placement law

The panel language lives on **threshold and hub surfaces only**:

- **Threshold** — home, colophon, nursery (the wayfinding surfaces)
- **Hub** — field-notes / workbench / body-spine index pages (the reading-
  room entries)

**Never** inside an essay's prose column. Essays end at their farewell +
correspondence line; they do not carry doors. If a piece of prose feels
like it wants a panel row, the row belongs on the parent hub, not the essay.
This keeps the reader's four-zone journey legible: threshold → growing beds
→ quiet doors → house layer (Studio Charter §3).

### The row-prop distribution pattern (already named above)

For multi-row callers (Nursery · Colophon), the `row` prop on
`PanelDoors` (`1 | 2 | 3 | "all"`) lets the caller interleave rows across
prose blocks. Signature (figcaption) renders only with the final row. See
the named-idiom entry above for the shipped precedents.

### The variants (five, each with a specific register)

The `variant` prop on `PanelDoors` accepts one of five values. Each is a
register decision, not just a layout switch. Pick by surface, not by
looks:

| Variant | Where | Register carried |
|---|---|---|
| `""` (default) | Home | Threshold arrival · 4 doors → 4 reading rooms |
| `"seedbed"` | Nursery | The seed-bed pattern · multi-row rhythm across prose |
| `"colophon"` | Colophon | Triptych structure · three acts (structure · practice · state) |
| `"hub"` | Field Notes · Workbench · Body & Spine | Reading-room arrival · 3 doors, desktop 3-col, mobile 1-col stacked |
| `"meditation"` | Versions of Me | Companion-frame at the foot of a single meditation · hairline top-rule · softer top-margin · "if this moved you" preamble register |

**The meditation-variant** (Set 3 · slice-5.0 · 2026-07-11) is the
newest addition. It exists because Versions of Me is a *single-piece
meditation*, not a hub over multiple essays. Adding doors at the top
would disrupt the sit-down flow; adding them at the foot with a hairline
top-rule + extra top-margin turns them into a *walk-out invitation* —
the meditation stays sit-down, the four seams companion pieces are
offered, not imposed. Uses the same panel anatomy + hue register as
other variants; the CSS carries a `<slot name="preamble" />` so the
caller can prefix a hand-caption ("if this moved you — the four seams the
essays trace").

### The sumi-e register within the panel language

Added 2026-07-11 alongside Studio + Lexicon + Versions of Me doors.
An alternative visual register within the same door grammar — hue,
anatomy, one-hidden-joy, each-a-door contract, placement law all held —
but the vignettes shift from *pastel-primary* (the shipped Home /
Nursery / Colophon panels) to *sumi-e-primary*:

- Hairline monochrome brushwork on ink-soft as the dominant register
- **The wet-ink illusion** (already codified) as the load-bearing gesture —
  main stroke `var(--ink-soft)` at higher width + darker `var(--ink)`
  inner shadow at ~40% width and ~50% opacity of main
- Dry-brush hairlines at endpoints (`stroke-dasharray` on trailing
  segments)
- More *ma* — 50–65% negative space per panel
- Restrained pastel accent (one small dot or bloom per panel), reserved
  for the hidden-joy paradox smile at the composition's focal point
- Isson × Murakami paradox held throughout — one hidden smile per panel,
  never zero, never two

**Which register goes where** (the reading-room / archive-room heuristic):

- **Reading rooms** (Home · Nursery · Field Notes hub · Workbench hub ·
  Body & Spine hub) — pastel-primary. Warm, tender, growing-bed
  register.
- **Archive rooms** (Studio · Lexicon · Versions of Me foot) — sumi-e-
  primary. Held, patient, thinking-with-the-hand register. The gesture
  IS the content.
- **Colophon** — mixed. The triptych register keeps its shipped
  pastel-primary vignettes; the covenant + house-layer sections that come
  later would take sumi-e if built.

### The Isson doctrine (the deeper source for the sumi-e register)

*Named idiom, canonised 2026-07-11 after a six-source Isson synthesis
(Kashima Arts · Explore Amami · note.com/artdiva · z-mile · Sainsbury
Institute's* Beauty in Shadows *exhibition brief · artnet). This deepens
what the sumi-e-register section names above with the specific historical
practice Enka's paradox panels borrow from.*

**Who Tanaka Isson was** (Tanaka Takashi, 1908–1977 · artist name Beison).
A Showa-period nihonga painter. Left Tokyo Bijutsu Gakko (Tokyo Fine Arts
School) after two months in 1926; won first prize at the Seiryu-sha
exhibition in 1947, then broke with the mainstream art world after
disagreement with Kawabata Ryūshi. In 1958, at fifty, he moved alone to
Amami Ōshima, in Japan's southern islands. Lived twenty years in a small
hut, paying for art supplies by dyeing tsumugi silk kimono, and painted
the endemic forests, birds (Lidth's jay, Amami woodpecker), and botanicals
of the island. Died there of a heart attack, 1977. Unknown during his
lifetime; the local residents — not institutions — preserved his legacy.

**The ten Isson moves and their Enka correspondences.**

| Isson move | What it is | Enka correspondence |
|---|---|---|
| The 20-year Amami withdrawal | Deliberate exit from the mainstream art world; posthumous recognition | The Gate Doctrine (§3.5 of the voice spine): named, gated by depth |
| The tsumugi day-job | Dyeing silk kimono to buy silk to paint on. Craft supporting craft. | The container beneath the craft (§1). The machinery underneath compounds while the diary stays uncorrupted (Charter §0) |
| Filling in solidly instead of drawing the veins | Solid-fill silhouettes over vein-drawing. Shape dominates detail. | The drawing hand as a spec: hierarchy through weight, never through incidental detail (Law 2 · Law 7) |
| Yellow screw pine, not green | Intentional colour transformation. Memorable over accurate. | The four canonical pastels are chosen for register, not for observational accuracy |
| "Palace" for the humble dwelling | Reframing material poverty as gift. Joy of concentration. | Openly-unfinished as identity (Law 10). *In Formation* is the palace, not the apology |
| Backlit botanical | "Enigmatic landscapes and otherworldly botanical sketches often bathed in backlighting" — subjects as shape-silhouettes catching light from behind | *An import to sharpen*: a subtle radial-wash behind the vignette's focal subject can deepen the sumi-e register. Reserved for archive-room panels only; do not over-apply |
| Beauty in Shadows | From Tanizaki Jun'ichirō — value discovered in shadow and obscurity, not in the tourist-postcard view | The intimate voice under the canopy, never the polish. The forested interior, never the beach |
| Stayed quiet for a long time and became one with the atmosphere of the forest | Patient observation until becoming. His endemic bird paintings came from long stillness. | *Held long enough to become* — the 円花 keystone's inner line, made literal in painting practice |
| Two paintings as "gifts to the King of Hell" | Non-legible-to-the-crowd audience. Sovereign in whom he addressed. | *Address the few; let the many overhear* (Voice-IP §3.5) |
| Local residents preserved the legacy | Community, not gallery. Not by an institution. | The correspondence rail is Enka's community; the citation graph is its slow gallery. Neither is an institution |

**Register discipline for the sumi-e vignettes** (the tuning that ships
per-panel, honouring Isson):

1. **Composition** — asymmetric (fukinsei); the focal subject offset from
   centre; empty ma to one side of the composition (the "quiet corner"
   Isson deliberately leaves).
2. **Line vs mass** — where a leaf, petal, or wing is drawn, prefer
   solid-fill silhouette over vein-line. Hairlines are for gesture and
   trace (stems, tangent lines, dry-brush trails), never for filling
   surfaces that shape can carry.
3. **Backlight (optional, per composition)** — a very subtle radial-wash
   behind the focal subject at 6–10% opacity of a canonical pastel can
   deepen the "bathed in backlighting" register. Reserved for archive-
   room panels; skip on the pastel-primary reading-room panels.
4. **The endemic subject** — Isson painted the specific bird of Amami,
   not a generic bird. Enka's panels name specific idioms: the branch,
   the chrysanthemum, the tension sketches, the covenant, the mirror.
   Never generic ("a plant"); always the named idiom.
5. **The paradox smile** — Murakami's hidden joy, held. Rules unchanged.
6. **The 六% – 十% rule** (proposed cadence) — of the archive-room
   panels, roughly 6–10% may carry a Tanizaki-shadow gradient (a
   deeper ink-wash region opposite the backlight, at 8–12% opacity of
   `var(--ink)`) to name a shadow-carrying idiom (a covenant · a
   mirror · a container). Held rare; when everything shadows, none does.

**Why this matters for Enka's user journey.** Isson's whole practice is
a shape-signature of what Enka is building: the *long withdrawal*, the
*community-preserved legacy*, the *shape over the vein*, the *palace in
the humble dwelling*. Every reader who arrives at a sumi-e panel meets
a small proof — carried in the composition, not written in the copy —
that Enka's slowness is a stance, not a shortfall. Isson is the historical
argument for the register.

**Reading rule:** if a proposed sumi-e vignette does not carry at least
three of the ten Isson moves (Composition · Line vs mass · a named
endemic subject · the paradox smile plus optional backlight or shadow),
it drifts toward decorative sumi-e-adjacent rather than register-carrying.
Return it for another pass.

### Accessibility (machine-legibility, one investment, both returns)

- The panels are wrapped in a `<nav aria-label="...">` landmark
- Each panel is a real link with a descriptive `aria-label` (role + cta,
  not the hue)
- The vignette SVG carries `role="img"` + `<title>` (screen-reader accessible)
- Hover / focus states honour `prefers-reduced-motion`
- Hue is **never** the only signal (name, caption, aria-label all carry
  meaning independently)

### When NOT to use PanelDoors (the negative space of the pattern)

*Intent Capture lens · 2026-07-11. Codified in the same pass as the
system-map + journey-graph work. If the answer to any of the below is
YES, use a different component, not PanelDoors.*

| Situation | Why not | What to use instead |
|---|---|---|
| Inside an essay's prose column | Doors are wayfinding; essays are dwelling. Mixing breaks the sit-down flow. | `<Figure>` for diagrams · `<MarginNote>` for asides · `<Bloom>` for accents |
| As a decorative row | The each-a-door contract is load-bearing. If it looks like a panel and it's not a door, it will erode reader trust. | `Motif*` components under `src/components/motifs/` are the ornamental register. |
| To surface more than four items in a single row | Four is the ceiling (portfolio-grade IA discipline; one chart, one load). | Use the row-prop distribution pattern (Nursery: 2 rows, Colophon: 3 rows) or a curated selection. |
| On the archive-wall (Volume I) | Volume I already carries a native six-cluster door grammar. Adding PanelDoors competes, not amplifies. | If arrival needs a mark, use a small sumi-e cluster-mark per cluster label. |
| On single-piece meditations (as an arrival strip at top) | Doors at the top break the meditation's sit-down flow. | Use `variant="meditation"` at the FOOT with a hairline top-rule + preamble. |
| To replace the correspondence rail | The rail is a persistent hand-note register; doors are a threshold-arrival register. They do different work. | Keep the rail separate; use doors as wayfinding, rail as invitation. |
| On the workshop / night-skin strip | Night skin is a deliberately-entered room, not a portal field. Doors here would violate placement law. | Use the ChainStrip's own idioms (flow · lock · refuse · say). |
| When the destination is off-domain | Bidirectional firewall (SOUL #9). No door on Enka can point outside Enka's own graph. | The correspondence rail is Enka's only outbound door. |

### Constraint Morphology (enabling vs limiting · why + how)

*Constraint Morphology lens · 2026-07-11. Every design constraint is
either enabling (creates possibility by ruling out an alternative) or
limiting (caps possibility without offering an alternative). Enka's
five load-bearing constraints are named here as enabling — with the
WHY (the compounding reason) and the HOW (the design consequence) —
so future sessions treat them as gates for creative work, not walls.*

| Constraint | Why (the compounding reason) | How (the design consequence) |
|---|---|---|
| **Voice-lock** — nothing originates outside Rika's hand | Every published essay carries a hand-signature that AI-generated content cannot fake. Over N essays, the hand-signature becomes an *identity fingerprint* — a moat that scales with volume without diluting. | Fleet agents propose redlines; Rika ratifies. Panel captions compress from essay-source only. New surfaces must borrow from shipped verbatim doctrine, never invent copy. |
| **Bidirectional firewall** — no adjacent venture is named on Enka | Cross-promotion between ventures would confuse the register and collapse the citation graph into a single-brand block. Isolation preserves each venture's own audience + citation surface. | Every design decision passes a firewall audit. The correspondence rail is Enka's only outbound path; adjacent commerce is off-domain, self-select only. |
| **Zero-PII aggregate-only telemetry** — no cookies, no fingerprint, no session | Trust is a container that appreciates; capture-mechanics deflate it. The zero-PII beacon builds trust as a compounding asset while still giving Rika the dwell + return signal she needs to tune the garden. | Cannot A/B individual behaviour → learn via holdout. Cannot personalise → curate universally. Panel-door discipline (curated few over exhaustive many) is a direct downstream consequence. |
| **Openly-unfinished** — *In Formation* is the honest state, not an apology | Glossy sites read as *for sale*. Enka reads as *being tended*. The wobble is what the parasocial reader trusts (a hand shaping in real time). | `SLOT` placeholders where content is not yet ready. Growth stages (seedling / budding / evergreen) as the maturity axis. No progress bars, no completion percentages. |
| **Assisted, never authored** — the covenant on every page | The very slowness is the moat in the AI-answer era. When AI content is infinitely reproducible, a human hand behind the work becomes rare and valuable (§1 of the voice spine — the container appreciates). | The mirror agent has a non-overridable veto. Every artifact traces to Rika's yes. Machine work is scaffold-keeping only. |

**How to use this table:** when a new design decision feels blocked, find
the constraint that blocks it. Read its WHY. If the WHY still holds, the
constraint is genuine — design *around* it, not through it. If the WHY
has changed, propose the constraint's revision through a doctrine
update (a numbered fold in `SUCCESSION.md`), never a silent workaround.

### Institutional Memory levels (where the panel language lives on the ladder)

*Institutional Memory lens · 2026-07-11. Design systems climb a ladder
from Static → Active → Learning → Predictive (per Ross Moody / Design
Systems Collective). Enka's panel language currently lives between
Static and Active — the tables below name where and why, so future
sessions know what "the next rung" would cost.*

| Level | What it means | Enka's panel language today |
|---|---|---|
| **Static** | Written down. Referenced by humans. | ✅ All PanelDoors doctrine (this doc, `notes/journey-map.md`, comments in `PanelDoors.astro`). |
| **Active** | Enforced by tooling. Violations produce a machine-readable error. | ◐ Partial — `guard.mjs` catches dark-mode drift and off-register text but does not (yet) check panel-anatomy compliance (label → role → vignette → caption + hidden smile). |
| **Learning** | Signal-driven — the system *updates itself* from observed use. | ▢ Not yet — the beacon (`b2820a3`) captures dwell/return atoms but does not feed back into panel-door composition. |
| **Predictive** | The system proposes new artifacts a priori from patterns. | ▢ Not yet — fleet agents can propose new panels (they have the schema), but Rika ratifies each. Predictive would need learned taste + a much larger corpus. |

**Next-rung cost estimates (HYPOTHESIS):**
- Static → Active for PanelDoors: ~2 hours to add a build-time linter that checks each panel has the four anatomy elements + one hidden smile per SVG.
- Active → Learning for the whole site: needs the beacon to have 4+ weeks of signal AND a monthly place-intelligence digest that surfaces dwell deltas per door. Cost: 4 hours setup, ~1 hour/month cadence.
- Learning → Predictive: not near-term. Requires taste-corpus of ≥50 shipped panels (currently 33) plus a fleet-side judgment model that has trained on the vetoed vs. accepted pairs.

The point of naming levels: **know which rung you are on before you propose
the next**. Ambition without evidence produces overfit systems; evidence
without ambition produces mediocre ones.

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
| `--seal` | `var(--poppy)` | Alias — the maker's-mark seal (essay-foot wax mark); held for provenance |
| `--seal-size` | `1.15rem` | The seal's rendered size — a small pressed mark, never a badge |

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

### Texture (Set 3 · the silk-on-washi register)

The paper reads as *made*, not printed. A whiter washi ground carries three
named paper variants keyed to the reader's walk through the garden. The
**trellis-canopy** is the shared overhead register — same arch shape in all
three papers, palette shifts per tier — a single thread of continuity that
the reader glimpses in every room of the garden. All hand-drawn in Enka's
palette (four canonical pastels + `--canopy-soft`), at whisper opacity;
contrast for body text verified safe on all three tiers.

| Token | Value | Role |
|---|---|---|
| `--paper-washi` | `#fbf8ee` | The washi ground — whiter than `--paper`, still warm. Base for the silk-on-washi register. (Slice-2.1 shifted from `#fbf7ea` to a cooler cream after the daintier restraint pass.) |
| `--paper-seedbed` | `#f8f3e6` | **Slice-2.4** · aged mulberry washi middle — nourishing warm cream between `--paper-washi` and the shipped `#f4ecda`. Nursery only. |
| `--skin` | `#f2e0d0` | **Slice-2.4** · warm skin ink-wash for hands + covenant panels (Colophon triptych). |
| `--skin-deep` | `#e5c9a8` | **Slice-2.4** · deeper skin for the covenant's guiding hand (v4 hand-over-hand teacher-student transmission). |
| `--bamboo` | `#c9b088` | **Slice-2.4** · warm bamboo for brush handles in Colophon panels. |

**The four canonical pastels** (slice-2.4 · registered as a set):

| Kanji | Name | Hex | Role |
|---|---|---|---|
| 紫 | lavender | `#b899c9` | Bloom accent · panel-1 register |
| 珊瑚 | coral | `#e46b6b` | Bloom accent · panel-3 register · softer twin lives at `--poppy-soft` `#e08d84` |
| 金 | gold | `#e8c15a` | Bloom accent · panel-2 register (chrysanthemum sun) |
| 青 | slate | `#a4b8c8` | Bloom accent · panel-4 register (magpie mountain) |

The four pastels appear across every Set 3 slice-2.4 panel set (home · nursery · colophon), as accent dots in the grain overlays, and as the ground-bloom palette in the homepage `CanopyScene`. Each pastel is anchored to a kanji + English label so future panels stay legible to the same grammar.

Four body classes (slice-2.4 promoted `.grain-seedbed`), applied per-route from `src/layouts/Base.astro`:

| Class | Applied to | Motif |
|---|---|---|
| `.grain-arrival` | home · volume-i · section hubs (field-notes, workbench, body-spine) | **The ginkgo-scattered paper** — scattered ginkgo leaves (`--gold` + `--canopy-soft`) + trellis in `--canopy` with hanging `--gold` and `--canopy-soft` blooms overhead + slice-2.4 four-pastel accent dots (radii 2.1-2.5, opacity 0.62-0.65). Slice-2.5: dial-down handled locally in `.hero::before` washi wash. |
| `.grain-dwell` | individual essays · colophon · versions | **The veranda-vine paper** — three vertical vines hanging FROM a trellis crossbar (structural), small `--canopy` leaves along the vines. The register of deep dwell. |
| `.grain-reference` | studio · lexicon | **The meadow-line paper** — fine-line open blossoms (`--slate` + `--lavender`) + trellis in `--canopy` with hanging `--slate` and `--lavender` line-blooms overhead. |
| `.grain-seedbed` | nursery ONLY | **Slice-2.4 · the seed-bed paper** — aged mulberry washi on `--paper-seedbed` with textural aging (fiber dashes + patina dots), tree-friend at 0.22, sakura petals 0.22-0.30, sumi-e brush dashes 0.30-0.34, plus a hidden Murakami smile-flower (0.20) and Isson magpie (0.18) baked into the register. |

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
