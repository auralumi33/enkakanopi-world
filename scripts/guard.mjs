#!/usr/bin/env node
/**
 * guard — the mechanical mirror.
 *
 * The garden is voice-locked: nothing publishes without Rika's yes, and a
 * human "mirror" pass guards voice + privacy. This script is that mirror's
 * mechanical floor — a check any hand (or any assisting agent) must pass before
 * a commit lands. It scans authored files for:
 *
 *   1. secrets       — key/token shapes that must never be committed
 *   2. off-register  — words the garden does not write in (a small, public list
 *                      in guard.words.txt; a private list may be added, untracked,
 *                      in guard.words.local.txt so sensitive terms never ship)
 *   3. heaviness     — the paper stays light in every setting (LESSON 2,
 *                      2026-07-05): no dark-mode media-query skins in src/.
 *                      Dark rooms are deliberate rooms (the workshop strip's
 *                      night tokens), never defaults inherited from an OS toggle.
 *
 * Exit 0 = clean. Exit 1 = something to look at. No dependencies.
 * Run: `npm run guard`   ·   wired into CI on every push + PR.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";

const ROOT = process.cwd();
const IGNORE_DIRS = new Set(["node_modules", "dist", ".git", ".astro", ".vercel", "_archive"]);
const IGNORE_FILES = new Set(["package-lock.json", "guard.words.txt", "guard.words.local.txt"]);
const SKIP_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".woff", ".woff2", ".ico", ".mov", ".mp4", ".pdf"]);

// ── secret shapes ────────────────────────────────────────────────────────────
const SECRETS = [
  { name: "OpenAI-style key",   re: /sk-[a-zA-Z0-9]{20,}/ },
  { name: "GitHub token",       re: /gh[pousr]_[a-zA-Z0-9]{20,}|github_pat_[a-zA-Z0-9_]{20,}/ },
  { name: "AWS access key",     re: /AKIA[0-9A-Z]{16}/ },
  { name: "Google API key",     re: /AIza[0-9A-Za-z_-]{30,}/ },
  { name: "Slack token",        re: /xox[baprs]-[0-9A-Za-z-]{10,}/ },
  { name: "private key block",  re: /-----BEGIN (?:RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/ },
  { name: "JWT",                re: /eyJ[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]{10,}/ },
  { name: "assigned secret",    re: /(?:secret|api[_-]?key|password|passwd|token)["'`]?\s*[:=]\s*["'`][^"'`\n]{8,}["'`]/i },
];

// ── off-register words (public list + optional private list) ─────────────────
function loadWords(file) {
  if (!existsSync(file)) return [];
  return readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.replace(/#.*$/, "").trim())
    .filter(Boolean);
}
const words = [
  ...loadWords(join(ROOT, "guard.words.txt")),
  ...loadWords(join(ROOT, "guard.words.local.txt")),
];
const wordRes = words.map((w) => ({ word: w, re: new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i") }));

// ── walk ─────────────────────────────────────────────────────────────────────
function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (IGNORE_DIRS.has(entry)) continue;
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) yield* walk(p);
    else if (!IGNORE_FILES.has(entry) && !SKIP_EXT.has(extname(entry).toLowerCase())) yield p;
  }
}

const hits = [];
for (const file of walk(ROOT)) {
  let text;
  try { text = readFileSync(file, "utf8"); } catch { continue; }
  const rel = relative(ROOT, file);
  text.split("\n").forEach((line, i) => {
    for (const s of SECRETS) if (s.re.test(line)) hits.push({ rel, ln: i + 1, kind: "secret", what: s.name, line: line.trim().slice(0, 100) });
    for (const w of wordRes) if (w.re.test(line)) hits.push({ rel, ln: i + 1, kind: "off-register", what: w.word, line: line.trim().slice(0, 100) });
    // heaviness — the paper stays light (LESSON 2). Reduced-motion queries are fine.
    if (rel.startsWith("src") && /prefers-color-scheme\s*:\s*dark/.test(line))
      hits.push({ rel, ln: i + 1, kind: "heaviness", what: "dark-mode skin (the paper stays light — LESSON 2)", line: line.trim().slice(0, 100) });
  });
}

if (hits.length === 0) {
  console.log("✓ guard: clean — the mirror passes.");
  process.exit(0);
}
console.error(`✗ guard: ${hits.length} thing(s) to look at\n`);
for (const h of hits) console.error(`  [${h.kind}: ${h.what}]  ${h.rel}:${h.ln}\n    ${h.line}`);
console.error(`\nIf a hit is a false positive, refine guard.words.txt or the pattern in scripts/guard.mjs.`);
process.exit(1);
