#!/usr/bin/env node
// Regenerates src/data/dates.json from git history — run locally, commit the
// result. (Vercel builds from a shallow clone, so build-time `git log` would
// lie; a committed artifact is the honest source.) Surface stays
// tended-not-timestamped; these dates feed machine-readable metadata only
// (BlogPosting datePublished/dateModified, RSS pubDate, sitemap lastmod).
import { execSync } from "node:child_process";
import { globSync } from "node:fs";
import { writeFileSync } from "node:fs";

const files = globSync("src/content/*/*.{md,mdx}");
const dates = {};
for (const f of files.sort()) {
  const log = execSync(`git log --follow --format=%ad --date=short -- "${f}"`, { encoding: "utf8" })
    .trim().split("\n").filter(Boolean);
  if (!log.length) continue;
  // key = collection/slug, e.g. "field-notes/the-seam"
  const key = f.replace(/^src\/content\//, "").replace(/\.(md|mdx)$/, "");
  dates[key] = { published: log[log.length - 1], modified: log[0] };
}
writeFileSync("src/data/dates.json", JSON.stringify(dates, null, 2) + "\n");
console.log(`dates.json — ${Object.keys(dates).length} entries`);
