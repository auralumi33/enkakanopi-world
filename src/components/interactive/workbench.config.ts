// The Workbench's one-idea map — data + copy only. Six facets of the one
// idea the room holds (the container beneath the craft), re-read through
// three lenses. Names and lines are the garden's existing phrasing, ported
// from GARDEN-SCULPT/touchable-workbench-study.html — no new terms coined
// here. See DESIGN-SYSTEM.md § theWorkbenchMap.
import type { MapConfig, GraphNode, GraphEdge, GraphLens } from "./graph.types";

const nodes: GraphNode[] = [
  {
    id: "the-container",
    label: "the container",
    kind: "soul",
    stage: "evergreen",
    blurb: "The object deflates; the container appreciates. A canopy holds a self without pinning it to one shape.",
    material: "prose · diagram",
    constraint: "one sentence, three registers",
  },
  {
    id: "a-self-in-motion",
    label: "a self in motion",
    kind: "soul",
    stage: "budding",
    blurb: "Identity is not a statue but a weathering — the vessel rebuilt while sailing.",
    material: "prose · diagram",
    constraint: "wholly true, wholly unidentifiable",
    tally: "2",
  },
  {
    id: "the-craft-that-deflates",
    label: "the craft that deflates",
    kind: "craft",
    stage: "budding",
    blurb: "Paint, prose, code — every medium commoditises. Grieve it lightly; it was never the point.",
    material: "prose · diagram",
    constraint: "grieve lightly, no nostalgia",
    tally: "1",
  },
  {
    id: "what-appreciates",
    label: "what appreciates",
    kind: "soul",
    stage: "budding",
    blurb: "Attention, judgment, provenance, the relationship. What holds the work outlives the work.",
    material: "prose · diagram",
    constraint: "never sound like a consultant",
    tally: "1",
  },
  {
    id: "the-open-question",
    label: "the open question",
    kind: "soul",
    stage: "evergreen",
    blurb: "End inside the question. Resolution is a door closed on the reader.",
    material: "prose · diagram",
    constraint: "end inside the question",
  },
  {
    id: "the-seam",
    label: "the seam",
    kind: "craft",
    stage: "seedling",
    blurb: "Where the machine's hand shows: keep the seam visible; wabi-sabi is honesty.",
    material: "prose · diagram",
    constraint: "keep the seam visible",
    tally: "1",
  },
];

const edges: GraphEdge[] = [
  { a: "the-container", b: "a-self-in-motion" },
  { a: "the-container", b: "the-craft-that-deflates" },
  { a: "the-container", b: "what-appreciates" },
  { a: "the-container", b: "the-open-question" },
  { a: "a-self-in-motion", b: "the-seam" },
  { a: "the-craft-that-deflates", b: "what-appreciates" },
];

const lenses: GraphLens[] = [
  {
    key: "artist",
    label: "the artist",
    read: "The artist reads the map as a life: the self is the most intimate container there is — reinvention is re-containing, and home is the container we ache toward. Touch a node to see what it holds.",
  },
  {
    key: "builder",
    label: "the builder",
    read: "The builder reads the same map as a system: tokens → components → patterns → experiences; memory in four stores; every essay leaves a named framework or diagram behind. Same territory, harder edges.",
    relabel: {
      "the-container": "the substrate",
      "a-self-in-motion": "state, versioned",
      "the-craft-that-deflates": "execution (deflating)",
      "what-appreciates": "infrastructure (appreciating)",
      "the-open-question": "resist premature closure",
      "the-seam": "observability",
    },
  },
  {
    key: "researcher",
    label: "the researcher",
    read: "The researcher reads it as a field: features as directions, circuits as paths, memory in classes — autotheory for the age of artificial memory, where the self reads the models and the models read back.",
    relabel: {
      "the-container": "the feature bundle",
      "a-self-in-motion": "a trained self",
      "the-craft-that-deflates": "capability (commodity)",
      "what-appreciates": "the scarce directions",
      "the-open-question": "the unasked question",
      "the-seam": "interpretability",
    },
  },
];

export const workbenchConfig: MapConfig = {
  nodes,
  edges,
  lenses,
  panel: "specimen",
  illustrative: true,
  headingId: "the-map-of-the-one-idea",
  heading: "the map of the one idea",
  intro: "The container beneath the craft, laid out as a thing your hands can hold. Pick a lens; the same six facets re-read as a life, a system, or a field.",
};
