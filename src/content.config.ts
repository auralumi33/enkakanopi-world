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

export const collections = { fieldNotes, workbench, bodySpine };
