// The Lexicon's reading-map — data + copy only. Nodes are the real terms in
// src/data/lexicon.ts; edges are real co-occurrence (two terms share an edge
// when a seeIn essay/page cites both). No term, essay, or count here is
// invented — see DESIGN-SYSTEM.md § theLexiconMap.
import { getCollection } from "astro:content";
import { terms, slugify } from "../../data/lexicon";
import type { MapConfig, GraphNode, GraphEdge, GraphEntry } from "./graph.types";

// Known static (non-collection) pages a lexicon term may cite via seeIn.
const STATIC_PAGE_META: Record<string, string> = {
  "/colophon": "colophon",
  "/nursery": "nursery",
  "/studio": "studio",
};

const fieldNotesSlugs = new Set((await getCollection("fieldNotes")).map((e) => e.id));
const bodySpineSlugs = new Set((await getCollection("bodySpine")).map((e) => e.id));
const workbenchSlugs = new Set((await getCollection("workbench")).map((e) => e.id));

function metaFor(href: string): string | undefined {
  if (href.startsWith("/field-notes/")) return "field notes";
  if (href.startsWith("/body-spine/")) return "body & spine";
  if (href.startsWith("/workbench/")) return "workbench";
  return STATIC_PAGE_META[href];
}

// Fails the build rather than ship a dead link — every seeIn href must
// resolve to a real collection entry or a known static page.
function assertResolves(href: string) {
  if (href.startsWith("/field-notes/")) {
    if (fieldNotesSlugs.has(href.slice("/field-notes/".length))) return;
  } else if (href.startsWith("/body-spine/")) {
    if (bodySpineSlugs.has(href.slice("/body-spine/".length))) return;
  } else if (href.startsWith("/workbench/")) {
    if (workbenchSlugs.has(href.slice("/workbench/".length))) return;
  } else if (href in STATIC_PAGE_META) {
    return;
  }
  throw new Error(`lexicon.config: seeIn href does not resolve to a real page — ${href}`);
}

// ---- nodes: the real terms ----
const nodes: GraphNode[] = terms.map((t) => ({
  id: slugify(t.term),
  label: t.term,
  kind: "soul",
  blurb: t.def,
}));

// ---- entries: the real pages a term is cited in ----
const entryByHref = new Map<string, GraphEntry>();
for (const t of terms) {
  const nodeId = slugify(t.term);
  for (const link of t.seeIn) {
    assertResolves(link.href);
    let entry = entryByHref.get(link.href);
    if (!entry) {
      entry = { id: slugify(link.href), label: link.label, meta: metaFor(link.href), href: link.href, nodeIds: [] };
      entryByHref.set(link.href, entry);
    }
    if (!entry.nodeIds.includes(nodeId)) entry.nodeIds.push(nodeId);
  }
}
const entries = [...entryByHref.values()];

// ---- edges: real co-occurrence — two terms sharing an entry ----
const edgeWeight = new Map<string, number>();
for (const entry of entries) {
  for (let i = 0; i < entry.nodeIds.length; i++) {
    for (let j = i + 1; j < entry.nodeIds.length; j++) {
      const key = [entry.nodeIds[i], entry.nodeIds[j]].sort().join("|");
      edgeWeight.set(key, (edgeWeight.get(key) ?? 0) + 1);
    }
  }
}
const edges: GraphEdge[] = [...edgeWeight.entries()].map(([key, weight]) => {
  const [a, b] = key.split("|");
  return { a, b, weight };
});

export const lexiconConfig: MapConfig = {
  nodes,
  edges,
  entries,
  panel: "bookmarks",
  illustrative: true,
  headingId: "how-the-terms-hold",
  heading: "how the terms hold each other",
  intro: "A quiet map of the lexicon — the terms this garden has named, and the pieces that hold them. Sizes and line-weights are a sketch, not a measurement; most terms stand alone until an essay grows to hold more than one.",
};

// ---- seams: the densest real co-occurrences, for the seam-cards partial ----
// Same edges as the map above — never a separate or fabricated count. Top 2
// by weight; honestly empty when nothing has crossed yet (most terms still
// stand alone — see the map's own intro line, and DESIGN-SYSTEM.md § theLexiconMap).
export interface LexiconSeam {
  a: string;
  b: string;
  aLabel: string;
  bLabel: string;
  weight: number;
}

const nodeLabel = new Map(nodes.map((n) => [n.id, n.label]));
export const lexiconSeams: LexiconSeam[] = edges
  .slice()
  .sort((x, y) => (y.weight ?? 0) - (x.weight ?? 0))
  .slice(0, 2)
  .map((e) => ({
    a: e.a,
    b: e.b,
    aLabel: nodeLabel.get(e.a) ?? e.a,
    bLabel: nodeLabel.get(e.b) ?? e.b,
    weight: e.weight ?? 0,
  }));
