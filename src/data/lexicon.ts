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

export const terms: LexiconTerm[] = [
  {
    term: "The container beneath the craft",
    def: "The keystone. The visible craft — paint, prose, code, a generated image — deflates as it becomes infinitely reproducible; what appreciates is the container the craft passes through and is held by: attention, structure, judgment, provenance, the relationship. The object deflates; the container appreciates.",
    seeIn: [{ label: "A Home You Keep Rebuilding", href: "/field-notes/a-home-you-keep-rebuilding" }, { label: "Hallucinations of the Past", href: "/field-notes/hallucinations-of-the-past" }],
  },
  {
    term: "The deflation of execution",
    def: "As tools and models do the making better and cheaper, the act of executing a skill loses value. The scarce, appreciating act moves upstream — from doing the thing to judging which thing is worth doing, which question is worth asking, which container is worth building.",
    seeIn: [{ label: "What the Machine Remembers of Me", href: "/field-notes/what-the-machine-remembers-of-me" }, { label: "Who Gets to Write to You", href: "/field-notes/who-gets-to-write-to-you" }],
  },
  {
    term: "Resonance architecture",
    def: "The craft of making a thing resonate across three surfaces at once — the physical (a place), the digital (an interface, a garden), and the agentic (a stack of tools that act). Designing for what is felt, not only what is seen.",
    seeIn: [{ label: "The Company of Machines", href: "/field-notes/the-company-of-machines" }],
  },
  {
    term: "Form follows life, technology follows form",
    def: "An inversion of “form follows function.” First the life — how a body, a self, a place actually lives; then the form that fits that life; then, and only then, the technology that serves the form. Never the reverse, where the tool decides the shape and the life is asked to comply.",
    seeIn: [{ label: "The Tide Knows When", href: "/body-spine/the-tide-knows-when" }, { label: "Trust the Little Kit", href: "/workbench/trust-the-little-kit" }],
  },
  {
    term: "Soft fascination",
    def: "Attention that holds you without demanding you — dappled light, moving water, a canopy in a breeze. The restorative opposite of hard, grabbing attention; the quality a well-made container lets through, and the reason a garden can be a place to rest rather than a thing that pulls at you.",
    seeIn: [{ label: "Only in Motion", href: "/field-notes/only-in-motion" }],
  },
  {
    term: "The canopy and the light",
    def: "Canopy (木漏れ日) — light filtered through a moving canopy — as the whole thesis in an image: the canopy is the container, the light is the craft, and the craft is only legible because it passes through something that holds it. The name came before the words. Kanopi is a canopy; canopy is the light it lets through.",
    seeIn: [{ label: "Only in Motion", href: "/field-notes/only-in-motion" }, { label: "Colophon", href: "/colophon" }],
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
