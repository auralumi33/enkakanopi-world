// The typed contract for GraphCanvas — the one force-directed map engine
// every knowledge-map on the site consumes. Pure types; no data.

export interface GraphNode {
  id: string;
  label: string;
  kind: "soul" | "craft";
  /** An illustrative sizing signal (recurrence, salience) — never a claim on its own; pair with MapConfig.illustrative. */
  weight?: number;
  stage?: "seedling" | "budding" | "evergreen";
  /** "In one breath" — the hover/tooltip line. */
  blurb: string;
  /** Reserved for future search/lens matching. Unused by the engine today. */
  aliases?: string[];
  /** Specimen-panel fields (one-thing-examined-closely maps). Omit for bookmarks-panel maps. */
  material?: string;
  constraint?: string;
  /** Failure/revision tally — honest or absent, never invented. */
  tally?: string;
}

export interface GraphEdge {
  a: string;
  b: string;
  /** An illustrative co-occurrence signal — drives line weight only. */
  weight?: number;
  /** A typed relation verb (e.g. "shelters", "re-reads"). Falls back to MapConfig.defaultRelation. */
  relation?: string;
}

/** A bookmarks-panel entry — a real page (essay, hub) that holds one or more nodes. */
export interface GraphEntry {
  id: string;
  label: string;
  /** A short kind label, e.g. "field notes" — for the panel row, not a claim. */
  meta?: string;
  href: string;
  nodeIds: string[];
}

export interface GraphLens {
  key: string;
  label: string;
  /** The italic intro line shown while this lens is active. */
  read: string;
  /** nodeId → the label this lens re-projects it under. Falls back to the node's own label. */
  relabel?: Record<string, string>;
}

export interface MapConfig {
  nodes: GraphNode[];
  edges: GraphEdge[];
  /** Only meaningful when panel === "bookmarks". */
  entries?: GraphEntry[];
  lenses?: GraphLens[];
  panel: "specimen" | "bookmarks";
  /** true → sizes/weights read as a sketch; the engine never prints a hard count. */
  illustrative: boolean;
  /** The section's anchor id (also the h2's id). */
  headingId: string;
  heading: string;
  intro?: string;
  /** Default label for an edge with no typed relation. */
  defaultRelation?: string;
  /**
   * Opt-in, per-mount only (default false/undefined — every existing
   * consumer stays exactly as still as before). When true, soul-node buds
   * carry a slow, gentle, continuous sway (Rika, 2026-07-14 — a second
   * sanctioned exception to "the paper stays still", alongside the
   * canopy hero's blossom). `prefers-reduced-motion` still kills it
   * entirely; drag/physics behaviour is unchanged either way.
   */
  animateNodes?: boolean;
}
