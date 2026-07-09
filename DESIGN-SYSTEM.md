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
