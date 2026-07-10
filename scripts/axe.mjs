#!/usr/bin/env node
/*
 * axe.mjs — accessibility pass for the pages this session touched.
 *
 * Runs axe-core (WCAG 2.1 A + AA rules) via playwright-core against a base URL.
 * Reports zero violations OR prints them and exits 1.
 *
 * Usage:
 *   node scripts/axe.mjs                       # defaults to http://localhost:4173
 *   node scripts/axe.mjs http://localhost:4321 # dev-server port
 */

import { chromium } from "playwright-core";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const AXE_SRC = resolve(__dirname, "../node_modules/axe-core/axe.min.js");
const BASE = process.argv[2] || "http://localhost:4173";

// The pages this session touched — the panel-language migrations + hub doors.
const ROUTES = [
  "/",
  "/nursery",
  "/colophon",
  "/field-notes",
  "/workbench",
  "/body-spine",
  "/studio",
  "/lexicon",
];

const axeSource = await readFile(AXE_SRC, "utf8");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

let totalViolations = 0;
const report = [];

for (const route of ROUTES) {
  const url = BASE.replace(/\/$/, "") + route;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.addScriptTag({ content: axeSource });
  const result = await page.evaluate(async () => {
    // WCAG 2.1 A + AA; skip color-contrast for now (already verified on the
    // shipped tokens per Set 3 slice notes) — we care about the DOM-level
    // rules that panel migration + hub doors could regress.
    // @ts-expect-error — axe injected globally
    const r = await window.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
    });
    return { violations: r.violations, passes: r.passes.length };
  });
  const v = result.violations.filter((x) => x.impact !== null);
  totalViolations += v.length;
  report.push({ route, violations: v, passes: result.passes });
}

await browser.close();

console.log("");
console.log("axe · accessibility pass");
console.log("─".repeat(48));
for (const r of report) {
  const badge = r.violations.length === 0 ? "✓" : "✗";
  console.log(`${badge} ${r.route.padEnd(16)}  ${r.violations.length} violation(s) · ${r.passes} passes`);
  for (const v of r.violations) {
    console.log(`    · ${v.id} [${v.impact}]  ${v.help}`);
    for (const node of v.nodes.slice(0, 3)) {
      console.log(`      → ${node.target.join(" ")}`);
    }
  }
}
console.log("─".repeat(48));
console.log(totalViolations === 0
  ? "✓ axe: clean — the touched pages hold."
  : `✗ axe: ${totalViolations} violation(s) — see above.`);
process.exit(totalViolations === 0 ? 0 : 1);
