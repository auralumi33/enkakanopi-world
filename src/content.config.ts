import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Every essay declares its epistemic status in-format (voice law: a state, not
// an apology) and the one-sentence idea its diagram carries (Law 1).
const essay = z.object({
  title: z.string(),
  dek: z.string(),                 // the standfirst
  status: z.string().default("in formation · v0"),
  order: z.number().default(0),    // small = earlier in the stream
  glyph: z.enum(["leaf", "canopy", "seam", "spine", "compass", "light", "arrow"]).default("seam"),
  // growth stage — a piece is planted, then tended, then stands on its own.
  // organised by maturity, never by date (the digital-garden lineage).
  stage: z.enum(["seedling", "budding", "evergreen"]).default("seedling"),
  tended: z.string().optional(),   // an honest, non-triangulating note on when it was last worked
  breath: z.string().optional(),   // "in one breath" — the liftable thesis, in the essay's own words
  farewell: z.string().optional(), // a handwritten goodbye at the door — Rika's hand only, never generated
  seal: z.boolean().optional(),    // maker's-mark seal at essay foot — opt-in, one piece at a time
  // machine-mirror only (JSON-LD substrate; no rendered surface).
  // populate ONLY when the essay's prose already names the source —
  // frontmatter mirrors what the body says, never introduces it.
  citations: z.array(z.object({    // works the essay references (papers, books)
    name: z.string(),              // creator / author / entity being cited
    work: z.string().optional(),   // the specific work title, if the essay names it
    url: z.string().url().optional(),
  })).optional(),
  mentionsWorks: z.array(z.object({ // works the essay mentions but is not "about"
    name: z.string(),              // the work's name
    creator: z.string().optional(),
  })).optional(),
});

// The nursery — pre-essay fragments, caught before they are essays. The
// maturity ladder extends downward to seed; a seed arrives in Rika's own
// hand or not at all. Tended, never timestamped.
const seed = z.object({
  title: z.string(),
  line: z.string().optional(),     // the fragment / one-liner, in her hand
  stage: z.enum(["seed", "seedling", "budding", "evergreen"]).default("seed"),
  glyph: z.enum(["leaf", "canopy", "seam", "spine", "compass", "light", "arrow"]).default("leaf"),
  tended: z.string().optional(),   // an honest, non-triangulating note on when it was last held
  bed: z.string().optional(),      // which prepared bed it belongs to, if any
});

// The studio wall — the making, shown with its working note:
// material · constraint · tally. Counts are honest; the tally starts now.
const piece = z.object({
  title: z.string(),
  kind: z.enum(["drawing", "object", "code", "craft"]).default("craft"),
  material: z.string(),            // what it is made of, plainly
  constraint: z.string(),          // the rule the piece was made under
  tally: z.string().optional(),    // failure / revision count — never invented
  note: z.string().optional(),     // a short aside, if one is true
  stage: z.enum(["seed", "seedling", "budding", "evergreen"]).optional(),
});

const fieldNotes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/field-notes" }),
  schema: essay,
});
const workbench = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/workbench" }),
  schema: essay,
});
const bodySpine = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/body-spine" }),
  schema: essay,
});
const nursery = defineCollection({
  loader: glob({ pattern: ["**/*.{md,mdx}", "!README.md"], base: "./src/content/nursery" }),
  schema: seed,
});
const studio = defineCollection({
  loader: glob({ pattern: ["**/*.{md,mdx}", "!README.md"], base: "./src/content/studio" }),
  schema: piece,
});

export const collections = { fieldNotes, workbench, bodySpine, nursery, studio };
