#!/usr/bin/env node
/*
 * essay-covenant.mjs — the correspondence-rail presence linter.
 *
 * Static → Active promotion for the essay-covenant doctrine
 * (`ENKA-VOICE-AND-IP-SPINE.md §7.5 + STUDIO-CHARTER.md §3`): every
 * published essay ends with the correspondence-rail foot line. If a
 * future session (or a schema change) accidentally decouples the foot
 * line from the Essay.astro layout, this linter catches it before the
 * essay ships.
 *
 * Canonical phrase (verbatim, from the shipped correspondence rail):
 *   "keeps a line open"
 *
 * Distinctive enough to be a stable canary; general enough that Rika
 * can rework the surrounding sentence without breaking the guard.
 *
 * The check runs against BUILT essay HTML — every `dist/<room>/<slug>/`
 * index.html — so it catches drift at the actual serving surface, not
 * just in source. Also cross-checks against the Essay.astro layout
 * source to catch upstream removal before it hits a build.
 *
 * Exit 0 = clean. Exit 1 = drift. No dependencies.
 * Run: `npm run lint:covenant`  ·  auto-run by `npm run verify` after build.
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const LAYOUT = resolve(__dirname, "../src/layouts/Essay.astro");

const CANONICAL = "keeps a line open";

// Essay routes — every published essay serves under one of these prefixes.
const ESSAY_PREFIXES = ["/field-notes/", "/workbench/", "/body-spine/"];

async function walkHtml(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walkHtml(p)));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

function relRoute(path) {
  return path.replace(DIST, "").replace(/\/index\.html$/, "") || "/";
}

function isEssayRoute(route) {
  return ESSAY_PREFIXES.some((p) => route.startsWith(p) && route !== p.replace(/\/$/, ""));
}

const violations = [];

// 1. Layout source check — canary in the source, before build.
try {
  const layout = await readFile(LAYOUT, "utf8");
  if (!layout.includes(CANONICAL)) {
    violations.push({
      surface: "src/layouts/Essay.astro",
      rule: "layout-covenant",
      msg: `layout no longer contains the canonical correspondence phrase "${CANONICAL}"`,
    });
  }
} catch (err) {
  violations.push({
    surface: "src/layouts/Essay.astro",
    rule: "layout-covenant",
    msg: `could not read layout: ${err.message}`,
  });
}

// 2. Built-HTML check — every essay's built page contains the phrase.
const files = await walkHtml(DIST);
for (const file of files) {
  const route = relRoute(file);
  if (!isEssayRoute(route)) continue;

  const html = await readFile(file, "utf8");
  if (!html.includes(CANONICAL)) {
    violations.push({
      surface: route,
      rule: "built-covenant",
      msg: `built essay does not contain the canonical correspondence phrase`,
    });
  }
}

console.log("");
console.log("essay-covenant · linter");
console.log("─".repeat(52));
if (violations.length === 0) {
  console.log(`✓ essay-covenant: clean — the rail holds.`);
  process.exit(0);
} else {
  for (const v of violations) {
    console.log(`  ✗ ${v.surface.padEnd(38)} [${v.rule}]  ${v.msg}`);
  }
  console.log("─".repeat(52));
  console.log(`✗ essay-covenant: ${violations.length} violation(s).`);
  process.exit(1);
}
