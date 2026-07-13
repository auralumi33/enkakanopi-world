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
 *                      in guard.words.local.txt so sensitive terms never ship).
 *                      Matched two ways:
 *                        (a) prose whole-word (case-insensitive) — as before
 *                        (b) identifier case-styles — CamelCase, PascalCase,
 *                            snake_case, kebab-case, digits, and compound
 *                            identifiers, so a banned register word inside a
 *                            component name in any casing fails. The scan
 *                            surface (which files are read) is unchanged.
 *   3. heaviness     — the paper stays light in every setting (LESSON 2,
 *                      2026-07-05): no dark-mode media-query skins in src/.
 *                      Dark rooms are deliberate rooms (the workshop strip's
 *                      night tokens), never defaults inherited from an OS toggle.
 *   4. substrate drift — the lexicon in src/data/lexicon.ts is the source; the
 *                      built llms.txt (via src/pages/llms.txt.ts) is its mirror.
 *                      llms.txt curates a subset — that's fine. Drift is when
 *                      llms.txt still names a term the substrate no longer holds.
 *                      That's what this check catches.
 *
 * Exit 0 = clean. Exit 1 = something to look at. No dependencies.
 * Run: `npm run guard`   ·   wired into CI on every push + PR.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";

const ROOT = process.cwd();
// notes/redlines/ holds working drafts that ENUMERATE the very words the guard
// checks for (firewall grep recipes, deny-list examples). They are untracked
// working scratch, never shipped. Same rationale as _archive: their job is to
// preserve/enumerate history, not to pass today's checks.
const IGNORE_DIRS = new Set(["node_modules", "dist", ".git", ".astro", ".vercel", "_archive", "redlines"]);
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
// Prose whole-word match — the historical behaviour.
const wordRes = words.map((w) => ({ word: w, re: new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i") }));
// Identifier case-style match — only meaningful for single-word banned entries;
// multi-word phrases stay to the prose regex.
const bannedSingle = new Map();
for (const w of words) {
  if (/^[A-Za-z]+$/.test(w)) bannedSingle.set(w.toLowerCase(), w);
}

// Extract identifier-like tokens from a line (3+ chars, alpha-lead).
function extractIdentifiers(line) {
  return line.match(/[A-Za-z][A-Za-z0-9_-]{2,}/g) || [];
}
// Split an identifier into its sub-words across all four case styles + digits.
// Examples (with WORD standing in for a banned register term):
//   `MyWORDComponent`  → ["my","word","component"]
//   `WORD_ring`        → ["word","ring"]
//   `WORD-ring`        → ["word","ring"]
//   `wordRing2`        → ["word","ring"]
//   `URLParserV2`      → ["url","parser"]
function splitCaseStyles(id) {
  const parts = id.split(/[_\-0-9]+/).filter(Boolean);
  const out = [];
  for (const p of parts) {
    for (const s of p.split(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/)) {
      if (s.length >= 3) out.push(s.toLowerCase());
    }
  }
  return out;
}

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
    // case-style identifier match — catches CamelCase / PascalCase / snake_case
    // / kebab-case / compound identifiers that the prose regex misses.
    if (bannedSingle.size > 0) {
      const seen = new Set();
      for (const id of extractIdentifiers(line)) {
        for (const sub of splitCaseStyles(id)) {
          if (bannedSingle.has(sub) && !seen.has(id + "|" + sub)) {
            seen.add(id + "|" + sub);
            hits.push({ rel, ln: i + 1, kind: "off-register (identifier)", what: `${bannedSingle.get(sub)} in ${id}`, line: line.trim().slice(0, 100) });
          }
        }
      }
    }
    // heaviness — the paper stays light (LESSON 2). Reduced-motion queries are fine.
    if (rel.startsWith("src") && /prefers-color-scheme\s*:\s*dark/.test(line))
      hits.push({ rel, ln: i + 1, kind: "heaviness", what: "dark-mode skin (the paper stays light — LESSON 2)", line: line.trim().slice(0, 100) });
  });
}

// ── substrate drift — lexicon.ts (source) vs dist/llms.txt (built mirror) ────
// The lexicon in src/data/lexicon.ts is the source of truth. The built llms.txt
// (via src/pages/llms.txt.ts) is its mirror. The generator already iterates
// lexicon.ts programmatically, so a fresh build is guaranteed to match. Drift
// happens when the mirror on disk (dist/llms.txt) was built from an older
// substrate and never rebuilt. Curated subsets are fine (some builds may name
// only a slice); the drift signal is: the mirror names a term the substrate no
// longer holds. If no build has run, skip quietly.
function loadLexiconTerms() {
  const p = join(ROOT, "src/data/lexicon.ts");
  if (!existsSync(p)) return null;
  const text = readFileSync(p, "utf8");
  const out = [];
  const re = /^\s*term:\s*"([^"]+)"/gm;
  let m;
  while ((m = re.exec(text)) !== null) out.push(m[1]);
  return out;
}
function loadLlmsNamedTerms() {
  const p = join(ROOT, "dist/llms.txt");
  if (!existsSync(p)) return { skipped: true };
  const text = readFileSync(p, "utf8");
  // Terms live under `## Core frameworks` as bullet lines pointing to lexicon
  // anchors, e.g. `- [The container beneath the craft](.../lexicon#the-container-...)`.
  // We stop at the next `##` heading. The Lexicon overview bullet itself points
  // to `/lexicon` (no `#` fragment), so it's naturally filtered out.
  const secStart = text.indexOf("## Core frameworks");
  if (secStart < 0) return { terms: [] };
  const rest = text.slice(secStart);
  const secEnd = rest.indexOf("\n## ", 1);
  const section = secEnd >= 0 ? rest.slice(0, secEnd) : rest;
  const terms = [];
  for (const line of section.split("\n")) {
    const m = /^\s*-\s*\[([^\]]+)\]\([^)]*\/lexicon#[^)]+\)/.exec(line);
    if (m) terms.push(m[1]);
  }
  // Fallback: older builds inline-named the terms in prose after
  // "Named frameworks defined at the source:". Parse those too, so the drift
  // check works against a stale mirror in either shape.
  if (terms.length === 0) {
    const anchor = "Named frameworks defined at the source:";
    const idx = section.indexOf(anchor);
    if (idx >= 0) {
      const rest = section.slice(idx + anchor.length);
      const stop = rest.search(/[.\n]/);
      const list = stop >= 0 ? rest.slice(0, stop) : rest;
      for (const t of list.split("·").map((s) => s.trim()).filter(Boolean)) terms.push(t);
    }
  }
  return { terms };
}
const drift = [];
{
  const lex = loadLexiconTerms();
  const mirror = loadLlmsNamedTerms();
  if (lex && mirror && !mirror.skipped) {
    const lexSet = new Set(lex.map((t) => t.toLowerCase()));
    const missing = mirror.terms.filter((t) => !lexSet.has(t.toLowerCase()));
    const M = lex.length;
    const N = mirror.terms.length - missing.length;
    if (missing.length > 0) {
      for (const m of missing) drift.push({ kind: "drift", what: `the mirror still names "${m}" — the substrate no longer holds it` });
      drift.push({ kind: "drift", what: `the mirror lists ${N} of ${M} terms — the substrate has drifted` });
    }
  }
}

if (hits.length === 0 && drift.length === 0) {
  console.log("✓ guard: clean — the mirror passes.");
  process.exit(0);
}
console.error(`✗ guard: ${hits.length + drift.length} thing(s) to look at\n`);
for (const h of hits) console.error(`  [${h.kind}: ${h.what}]  ${h.rel}:${h.ln}\n    ${h.line}`);
for (const d of drift) console.error(`  [${d.kind}] ${d.what}`);
console.error(`\nIf a hit is a false positive, refine guard.words.txt or the pattern in scripts/guard.mjs.`);
process.exit(1);
