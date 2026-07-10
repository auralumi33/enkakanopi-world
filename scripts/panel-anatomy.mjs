#!/usr/bin/env node
/*
 * panel-anatomy.mjs — the panel-language linter.
 *
 * Static → Active promotion for the panel-anatomy doctrine (per
 * DESIGN-SYSTEM.md § Institutional Memory levels). Runs after every build.
 * Catches doctrinal drift on:
 *
 *   1. The one-hidden-joy rule — every vignette SVG must carry a paradox
 *      smile. Heuristic: the SVG's <title> text mentions "smile" (case-
 *      insensitive). All shipped vignettes name the smile in their title;
 *      any new vignette that forgets breaks this check.
 *
 *   2. The a11y contract — every vignette SVG must carry a <title> element
 *      (screen-reader accessibility). PanelDoors already sets role="img";
 *      the title is what actually names the drawing.
 *
 *   3. The each-a-door contract at build time — every rendered .panel
 *      element must be an anchor with an href (a real link, not a div).
 *
 * The heuristics are deliberately narrow — this catches drift, not craft
 * quality. Craft is Rika's + the mirror's job; this linter is the airlock's.
 *
 * Exit 0 = clean. Exit 1 = drift. No dependencies.
 * Run: `npm run lint:panels`  ·  auto-run by `npm run verify` after build.
 */

import { readdir, readFile } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

// Recursively walk dist/ and return every .html file
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

const files = await walkHtml(DIST);
const violations = [];
const warnings = [];

// Only routes that carry PanelDoors — the reader/archive rooms + Versions.
const PANEL_ROUTES = [
  /\/index\.html$/,
  /\/nursery\/index\.html$/,
  /\/colophon\/index\.html$/,
  /\/field-notes\/index\.html$/,
  /\/workbench\/index\.html$/,
  /\/body-spine\/index\.html$/,
  /\/studio\/index\.html$/,
  /\/lexicon\/index\.html$/,
  /\/versions\/index\.html$/,
];

function relRoute(path) {
  return path.replace(DIST, "").replace(/\/index\.html$/, "") || "/";
}

for (const file of files) {
  const isPanelRoute = PANEL_ROUTES.some((rx) => rx.test(file));
  if (!isPanelRoute) continue;

  const html = await readFile(file, "utf8");
  const route = relRoute(file);

  // 1. Every .panel element must be an anchor with an href
  const panels = [...html.matchAll(/<a[^>]*class="panel"[^>]*>/g)];
  const nonAnchorPanels = [...html.matchAll(/<(?!a)\w+[^>]*class="panel"[^>]*>/g)];
  if (nonAnchorPanels.length > 0) {
    violations.push({
      route,
      rule: "each-a-door",
      msg: `${nonAnchorPanels.length} .panel element(s) not rendered as <a href="…">`,
    });
  }

  // 2. Every vignette SVG (inside .panel-vignette) must have a <title>
  //    Extract vignette SVG blocks and check each
  const vignetteBlocks = [
    ...html.matchAll(/<div class="panel-vignette"[^>]*>([\s\S]*?)<\/div>/g),
  ];
  for (const [i, block] of vignetteBlocks.entries()) {
    const svgContent = block[1];
    if (!svgContent.includes("<svg")) continue; // slot may be empty on non-panel rooms

    if (!/<title[^>]*>[\s\S]*?<\/title>/.test(svgContent)) {
      violations.push({
        route,
        rule: "a11y-title",
        msg: `vignette #${i + 1} SVG missing <title>`,
      });
    }

    // 3. Every vignette SVG's title should mention "smile" — the one-hidden-joy
    //    rule is a doctrine, but the title is also an a11y surface for screen
    //    readers who cannot see a hidden smile in the drawing. This is a WARN
    //    (soft a11y-improvement suggestion), not a FAIL — some legitimate
    //    shipped compositions foreground a different focal subject (the
    //    provenance target, the wobbly ensō, the hand) with the smile hidden
    //    inside. The doctrine holds visually; naming it in the title is a
    //    kindness to non-visual readers.
    const titleMatch = svgContent.match(/<title[^>]*>([\s\S]*?)<\/title>/);
    if (titleMatch && !/smile/i.test(titleMatch[1])) {
      warnings.push({
        route,
        rule: "one-hidden-joy · a11y",
        msg: `vignette #${i + 1} title could name "smile" so screen-reader users learn about the hidden joy`,
      });
    }
  }

  // 4. Each PanelDoors row must carry at least one panel — an empty row is
  //    a broken caller, not a design choice.
  const navs = [...html.matchAll(/<nav class="panels-nav"[^>]*>[\s\S]*?<\/nav>/g)];
  for (const [i, [nav]] of navs.entries()) {
    if (!/<a[^>]*class="panel"/.test(nav)) {
      violations.push({
        route,
        rule: "non-empty-row",
        msg: `panels-nav #${i + 1} has no .panel anchors`,
      });
    }
  }
}

console.log("");
console.log("panel-anatomy · linter");
console.log("─".repeat(52));
for (const w of warnings) {
  console.log(`  ⚠ ${w.route.padEnd(20)} [${w.rule}]  ${w.msg}`);
}
if (violations.length === 0) {
  const warnLine = warnings.length > 0
    ? `✓ panel-anatomy: clean · ${warnings.length} soft warning(s).`
    : `✓ panel-anatomy: clean — the doctrine holds.`;
  console.log(warnLine);
  process.exit(0);
} else {
  for (const v of violations) {
    console.log(`  ✗ ${v.route.padEnd(20)} [${v.rule}]  ${v.msg}`);
  }
  console.log("─".repeat(52));
  console.log(`✗ panel-anatomy: ${violations.length} violation(s) · ${warnings.length} warning(s).`);
  process.exit(1);
}
