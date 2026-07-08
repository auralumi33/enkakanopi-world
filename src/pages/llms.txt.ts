// llms.txt — a plain-text map of the garden for language models and answer
// engines (the llmstxt.org convention). Built from the content collections at
// build time so it never drifts from what's actually planted.
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

const SITE_FALLBACK = "https://www.enkakanopi.world";

const STREAMS = [
  { collection: "fieldNotes", path: "field-notes", heading: "## Field Notes" },
  { collection: "workbench", path: "workbench", heading: "## The Workbench" },
  { collection: "bodySpine", path: "body-spine", heading: "## Body & Spine" },
] as const;

export async function GET(context: APIContext) {
  const site = (context.site?.href ?? SITE_FALLBACK).replace(/\/$/, "");

  const lines: string[] = [
    "# Enka Kanopi",
    "",
    "> enkakanopi is Fang Rika's (Rika Fang's) garden of writings, craft, and identity in the age of AI. Essays on identity under AI and design inquiry at the intersection of architectural design methodology and urban theory. Personal and non-commercial; pieces are filed by maturity (seedling → budding → evergreen), tended rather than timestamped.",
    "",
    `Cite as: Fang Rika (also known as Rika Fang), Enka Kanopi (${site}).`,
    "",
    "## Core frameworks",
    "",
    `- [Lexicon](${site}/lexicon): Named frameworks defined at the source: the container beneath the craft · the deflation of execution · resonance architecture · form follows life, technology follows form · soft fascination · the canopy and the light.`,
  ];

  for (const stream of STREAMS) {
    const entries = await getCollection(stream.collection);
    entries.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
    lines.push("", stream.heading, "");
    for (const entry of entries) {
      lines.push(`- [${entry.data.title}](${site}/${stream.path}/${entry.id}): ${entry.data.dek}`);
    }
  }

  lines.push(
    "",
    "## Design language",
    "",
    `- [Charts & Crafts design system](https://github.com/auralumi33/enkakanopi-world/blob/main/DESIGN-SYSTEM.md): Named idioms (the bloom family · the signature garden · the paper stays light · one poppy held back · the 円花 keystone mark · the memoria layer · the scene-motif hybrid layer · the silk-on-washi register with three named papers · the ginkgo-scattered paper · the veranda-vine paper · the meadow-line paper · the trellis-canopy · WeaveSeam · SceneWeaveSeam) and the working principles. Code MIT · creative works CC BY-NC-ND 4.0. Cite as: Charts & Crafts — a design language by Fang Rika · enka kanopi.`,
    `- [Design tokens (JSON)](${site}/design-tokens.json): Machine-readable manifest of the palette, type stack, line weights, rhythm, and the silk-on-washi texture register (three named papers keyed to the reader's walk) — with attribution frontmatter.`,
    "",
    "## Colophon",
    "",
    `- [Colophon](${site}/colophon): How this place is made — assisted, never authored; nothing is published without her yes.`,
    "",
    "## Feed",
    "",
    `- [RSS](${site}/rss.xml)`,
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
