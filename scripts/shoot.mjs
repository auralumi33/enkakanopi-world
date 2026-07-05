import { chromium } from 'playwright-core';
// Screenshot harness — the eyes of the ship-check. Usage:
//   node scripts/shoot.mjs <outDir> <baseUrl> [JSON pairs [["name","/path"],...]]
// Drives the installed Chrome via playwright-core (no browser download);
// shoots every surface at 360 and 1280, full-page. LOOK at what it captures
// before calling anything done — that is the whole point.
import { mkdirSync } from 'fs';

const OUT = process.argv[2];
const BASE = process.argv[3] || 'https://www.enkakanopi.world';
const surfaces = JSON.parse(process.argv[4] || 'null') || [
  ['canopy', '/'],
  ['field-notes', '/field-notes'],
  ['workbench', '/workbench'],
  ['body-spine', '/body-spine'],
  ['versions', '/versions'],
  ['lexicon', '/lexicon'],
  ['colophon', '/colophon'],
];
const widths = [360, 1280];

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const w of widths) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: w === 360 ? 780 : 900 },
    deviceScaleFactor: 2,
    userAgent: w === 360 ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' : undefined,
  });
  const page = await ctx.newPage();
  for (const [name, path] of surfaces) {
    await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${OUT}/${name}-${w}.png`, fullPage: true });
    console.log(`✓ ${name} @ ${w}`);
  }
  await ctx.close();
}
await browser.close();
