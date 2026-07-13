// The Workbench's one-idea map — data + copy only. Nodes are the container
// thesis and its facets (conceptual canon: DiaContainerCraft, DESIGN-SYSTEM.md
// "the container beneath the craft"); ported from the remediated reference
// study GARDEN-SCULPT/touchable-workbench-study.html — six of that study's
// eight nodes, per the ship prompt's own list ("home" and "versions of me"
// dropped). No term or count here is invented; illustrative throughout.
import type { MapConfig } from "./graph.types";

export const workbenchConfig: MapConfig = {
  panel: "specimen",
  illustrative: true,
  headingId: "the-map-of-the-one-idea",
  heading: "the map of the one idea",
  intro:
    "The container beneath the craft, held from three angles — the artist, the builder, the researcher. Touch a node to see what it holds.",
  defaultRelation: "holds",

  nodes: [
    {
      id: "root",
      label: "the container",
      kind: "soul",
      stage: "evergreen",
      blurb: "The object deflates; the container appreciates. A canopy holds a self without pinning it to one shape.",
      material: "one sentence, three registers",
      constraint: "the keystone the whole garden grows from",
    },
    {
      id: "c1",
      label: "a self in motion",
      kind: "soul",
      stage: "budding",
      blurb: "Identity is not a statue but a weathering — the vessel rebuilt while sailing.",
      material: "the identity pillar",
      constraint: "wholly true, wholly unidentifiable",
    },
    {
      id: "c2",
      label: "the craft that deflates",
      kind: "craft",
      stage: "budding",
      blurb: "Paint, prose, code — every medium commoditises. Grieve it lightly; it was never the point.",
      material: "the deflation essays — execution, objects, intelligence",
      constraint: "grieve lightly, no nostalgia",
    },
    {
      id: "c3",
      label: "what appreciates",
      kind: "soul",
      stage: "budding",
      blurb: "Attention, judgment, provenance, the relationship. What holds the work outlives the work.",
      material: "the container economics",
      constraint: "never sound like a consultant",
    },
    {
      id: "c5",
      label: "the open question",
      kind: "soul",
      stage: "evergreen",
      blurb: "End inside the question. Resolution is a door closed on the reader.",
      material: "the voice law itself, held as a bed of its own",
      constraint: "end inside the question",
    },
    {
      id: "c7",
      label: "the seam",
      kind: "soul",
      stage: "seedling",
      blurb: "Where the machine's hand shows: keep the seam visible; wabi-sabi is honesty.",
      material: "the co-authored seam",
      constraint: "keep the seam visible",
    },
  ],

  // root fans to every facet; c2 (craft) and c3 (appreciates) also hold the
  // thesis's own pivot edge, as the reference study wired it.
  edges: [
    { a: "root", b: "c1" },
    { a: "root", b: "c2" },
    { a: "root", b: "c3" },
    { a: "root", b: "c5" },
    { a: "root", b: "c7" },
    { a: "c2", b: "c3" },
  ],

  lenses: [
    {
      key: "artist",
      label: "the artist",
      read:
        "The artist reads the map as a life: the self is the most intimate container there is — reinvention is re-containing, and home is the container we ache toward. Touch a node to see what it holds.",
    },
    {
      key: "builder",
      label: "the builder",
      read:
        "The builder reads the same map as a system: tokens, memory, the schema as the road — every essay leaves a named framework or diagram behind. Same territory, harder edges.",
      relabel: {
        root: "the substrate",
        c1: "state, versioned",
        c2: "execution (deflating)",
        c3: "infrastructure (appreciating)",
        c5: "resist premature closure",
        c7: "observability",
      },
    },
    {
      key: "researcher",
      label: "the researcher",
      read:
        "The researcher reads it as a field: features as directions, memory in classes — autotheory for the age of artificial memory, where the self reads the models and the models read back.",
      relabel: {
        root: "the feature bundle",
        c1: "a trained self",
        c2: "capability (commodity)",
        c3: "the scarce directions",
        c5: "the unasked question",
        c7: "interpretability",
      },
    },
  ],
};
