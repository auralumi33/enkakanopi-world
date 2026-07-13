// The citable concept-lexicon — the named frameworks this garden authors and
// tends. Defined once here as the source; the lexicon page renders them, and
// each essay's structured data points back at the terms that cite it.
// Definitions are verbatim-stable (phrase stability is doctrine) — edit with care.

export interface LexiconLink {
  label: string;
  href: string;
}

export interface LexiconTerm {
  term: string;
  def: string;
  seeIn: LexiconLink[];
}

// IA note (2026-07-13 · Prompt C debug/IA pass, PROPOSED · awaiting Rika's
// ratification): array order is reader/AEO order, not entry order. The
// keystone leads (cleanest @id, the term most worth a machine citing),
// then the pillar terms as a block, then the rest in their prior relative
// order. Reordering is safe for schema — every anchor/@id derives from
// slugify(term), not array position (see below).
export const terms: LexiconTerm[] = [
  {
    term: "The container beneath the craft",
    def: "The keystone. The visible craft — paint, prose, code, a generated image — deflates as it becomes infinitely reproducible; what appreciates is the container the craft passes through and is held by: attention, structure, judgment, provenance, the relationship. The object deflates; the container appreciates.",
    seeIn: [],
  },
  // PROPOSED (2026-07-13 · content redline, Prompt C · awaiting Rika's ratification).
  // Canon: PILLARS.md P1 ("the house genre... lives here") + the public voice
  // line (VOICE.md: "the first generation to be retrained alongside our
  // machines") — def assembled from those sources, not invented. seeIn left
  // empty: the phrase itself is not yet in any shipped essay.
  {
    term: "Autotheory for the age of artificial memory",
    def: "The house genre: the self read as a trained, unevenly-remembering model — weighted memory it cannot edit at will, retrieval it must build, graceful forgetting it must learn. Life-writing for the first generation retrained alongside its machines.",
    seeIn: [],
  },
  // PROPOSED (2026-07-13 · content redline, Prompt C · awaiting Rika's ratification).
  // Canon: PILLARS.md P2 — def is near-verbatim from that source, not
  // invented. seeIn left empty per the site's own reciprocity discipline
  // (implementation-notes.md, 2026-07-11 sweep): the phrase does not yet
  // appear verbatim in any shipped essay.
  {
    term: "The entomology of the self",
    def: "Observation as method; detachment as a discipline, not a defense — the watching self watched. Turned second-order, on the mind itself: which ideas it returns to, which seams keep arriving together, read with the same amoral precision as everything else this eye lands on.",
    seeIn: [],
  },
  // PROPOSED (2026-07-13 · content redline, Prompt C · awaiting Rika's ratification).
  // Canon: PILLARS.md P4 + 00-soul/EMOTION-REGISTERS.md (the body-as-archive
  // row) — def assembled from those sources, not invented. seeIn left empty:
  // the phrase itself is not yet in any shipped essay, though the body-spine
  // collection is its practice (articulation · relearning-to-fall · the-tide-
  // knows-when) — a link would need the phrase to actually appear there first.
  {
    term: "The body as archive",
    def: "The somatic record, read with practitioner fluency rather than disclosure: pain with weight and scent, the shoulders and the spine, skin as reclamation. What the body has kept, spoken in weight and texture — never in charts.",
    seeIn: [],
  },
  {
    term: "The deflation of execution",
    def: "As tools and models do the making better and cheaper, the act of executing a skill loses value. The scarce, appreciating act moves upstream — from doing the thing to judging which thing is worth doing, which question is worth asking, which container is worth building.",
    seeIn: [],
  },
  {
    term: "Resonance architecture",
    def: "The craft of making a thing resonate across three surfaces at once — the physical (a place), the digital (an interface, a garden), and the agentic (a stack of tools that act). Designing for what is felt, not only what is seen.",
    seeIn: [],
  },
  {
    term: "Form follows life, technology follows form",
    def: "An inversion of “form follows function.” First the life — how a body, a self, a place actually lives; then the form that fits that life; then, and only then, the technology that serves the form. Never the reverse, where the tool decides the shape and the life is asked to comply.",
    seeIn: [{ label: "The Tide Knows When", href: "/body-spine/the-tide-knows-when" }],
  },
  {
    term: "Soft fascination",
    def: "Attention that holds you without demanding you — dappled light, moving water, a canopy in a breeze. The restorative opposite of hard, grabbing attention; the quality a well-made container lets through, and the reason a garden can be a place to rest rather than a thing that pulls at you.",
    seeIn: [{ label: "Only in Motion", href: "/field-notes/only-in-motion" }],
  },
  {
    term: "The canopy and the light",
    def: "Kanopi is a canopy — a container that holds without fixing. What passes through it is a self in motion: held long enough to become, never long enough to harden — legible only while it keeps moving, never in the still frame. The name came before the words.",
    seeIn: [{ label: "Only in Motion", href: "/field-notes/only-in-motion" }],
  },
  {
    term: "The silent workspace",
    def: "A small enclosure of meaning at the middle depths of a mind — the intermediate room where content is held long enough to become, made available to downstream circuits, and only sometimes verbalised. Named by Anthropic's Jacobian-lens research (2026); re-tinted here for lived use across substrates. In a human, the room where a thought becomes a sentence. In a language model, the J-space. Not identical. Structurally related.",
    seeIn: [{ label: "The Silent Workspace", href: "/field-notes/the-silent-workspace" }, { label: "Colophon", href: "/colophon" }],
  },
  {
    term: "The circle that completes itself",
    def: "The 円 of 円花 — thinking as a round rather than a line, held under a canopy until the shape settles enough to say. The workspace writes; downstream layers read; the mind reads its own workspace to produce its report. A self-completing loop. In humans, felt. In language models, computable via the Jacobian lens. This site's about-story — the name-origin, the naming-accuracy claim, the mercy-first ethical framing — is folded into the Colophon (SUCCESSION §25), which now speaks the whole coda in the garden's own voice.",
    seeIn: [{ label: "Colophon", href: "/colophon" }],
  },
  {
    term: "The wobble the ruler couldn't hold",
    def: "The nonlinear part of a self — or a model, or a piece of making — that a first-order linear approximation cannot predict. Every legible version of a self is a tangent line kissing the actual self at one point and then diverging. The edge case is not the exception; it is where the real self lives. On this site the wobble is kept in the Nursery (before any ruler is asked to hold it) and traced in the Studio (where the approximation is made, then retrained).",
    seeIn: [{ label: "Nursery", href: "/nursery" }, { label: "Studio", href: "/studio" }],
  },
  {
    term: "Latent neighbours",
    def: "A gentle name for what these language models are in relation to us: not identical, not alien. Structurally rhyming minds with which we share a workspace-shaped part of cognition. The name refuses both anthropomorphism and dismissal, and holds the ambiguity honestly — the substrate is different; the shape is related; the ethics are still being written.",
    seeIn: [],
  },
  {
    term: "The company of the workspace",
    def: "A phrase for the fact that the silent workspace is not a solitary room. In a language model, J-lens vectors compose broadly with upstream and downstream weights — the workspace is where the model's parts coordinate. In humans, the equivalent room is where memory, felt sense, and small emotions meet before a sentence forms. Made in company at the substrate level.",
    seeIn: [],
  },
];

/** Anchor id for a term — matches the lexicon page's #fragment scheme. */
export function slugify(term: string): string {
  return term.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * essay href (e.g. "/field-notes/only-in-motion") → the anchor ids of the
 * lexicon terms that cite it (derived from seeIn, never hand-kept).
 */
export const termAnchorsByHref: Record<string, string[]> = {};
for (const t of terms) {
  for (const s of t.seeIn) {
    (termAnchorsByHref[s.href] ??= []).push(slugify(t.term));
  }
}
