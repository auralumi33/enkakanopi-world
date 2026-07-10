#!/usr/bin/env node
/**
 * dwell-digest — fortnightly, aggregate, holdout-only.
 *
 * Reads a JSONL file of beacon lines emitted by /api/dwell (one line per
 * pageview-end: {kind:"dwell", day, room, dwellBucket, scrollReached}) and
 * renders the fortnight's shape into the digest template
 * (_memory/place-intelligence-digest-TEMPLATE.md). The CF-side fields
 * (path flows, return ratio, RSS reach) are left as placeholders — those
 * come from the zone panel by hand; the beacon does not track flows or
 * identify readers.
 *
 * Run manually. No cron, no automation this pass.
 *
 *   node scripts/dwell-digest.mjs [<aggregates.jsonl>] [--period=YYYY-MM-DD..YYYY-MM-DD]
 *
 * With no arguments, emits an empty template — useful for scaffolding the
 * next entry before the fortnight has closed.
 *
 * dwell + return, holdout only; the nursery is never A/B-optimized for clicks.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE_PATH = resolve(
  __dirname,
  "..",
  "..",
  "_memory",
  "place-intelligence-digest-TEMPLATE.md",
);
const BUCKETS = ["<30s", "30-120s", "2-8m", "8m+"];
const QUARTILES = [25, 50, 75, 100];

function parseArgs(argv) {
  const args = { path: null, start: null, end: null };
  for (const a of argv) {
    if (a.startsWith("--period=")) {
      const [s, e] = a.slice("--period=".length).split("..");
      args.start = s || null;
      args.end = e || null;
    } else if (!a.startsWith("--")) {
      args.path = a;
    }
  }
  return args;
}

function inRange(day, start, end) {
  if (start && day < start) return false;
  if (end && day > end) return false;
  return true;
}

function loadLines(path, start, end) {
  if (!path) return [];
  if (!existsSync(path)) {
    console.error(`dwell-digest: ${path} not found — emitting empty template.`);
    return [];
  }
  const text = readFileSync(path, "utf8");
  const lines = [];
  for (const raw of text.split("\n")) {
    const s = raw.trim();
    if (!s) continue;
    let obj;
    try { obj = JSON.parse(s); } catch { continue; }
    if (obj?.kind !== "dwell") continue;
    if (!inRange(obj.day, start, end)) continue;
    lines.push(obj);
  }
  return lines;
}

function pct(n, total) {
  if (!total) return "—";
  return `${Math.round((n / total) * 100)}%`;
}

function renderRoomTable(lines) {
  const rooms = new Map();
  for (const l of lines) {
    if (!rooms.has(l.room)) rooms.set(l.room, { total: 0, buckets: Object.fromEntries(BUCKETS.map(b => [b, 0])) });
    const r = rooms.get(l.room);
    r.total++;
    if (BUCKETS.includes(l.dwellBucket)) r.buckets[l.dwellBucket]++;
  }
  const rows = [...rooms.entries()].sort((a, b) => b[1].total - a[1].total);
  if (!rows.length) return "| _(no beacon events in period)_ | — | — | — | — | — |";
  return rows.map(([room, r]) => {
    const cells = BUCKETS.map(b => pct(r.buckets[b], r.total));
    return `| ${room.padEnd(30)} | ${String(r.total).padStart(6)} | ${cells[0].padStart(4)} | ${cells[1].padStart(7)} | ${cells[2].padStart(4)} | ${cells[3].padStart(4)} |`;
  }).join("\n");
}

function renderScrollTable(lines) {
  const rooms = new Map();
  for (const l of lines) {
    if (!rooms.has(l.room)) rooms.set(l.room, { total: 0, q: Object.fromEntries(QUARTILES.map(q => [q, 0])) });
    const r = rooms.get(l.room);
    r.total++;
    if (QUARTILES.includes(l.scrollReached)) r.q[l.scrollReached]++;
  }
  const rows = [...rooms.entries()].sort((a, b) => b[1].total - a[1].total);
  if (!rows.length) return "| _(no beacon events in period)_ | — | — | — | — |";
  return rows.map(([room, r]) => {
    const cells = QUARTILES.map(q => pct(r.q[q], r.total));
    return `| ${room.padEnd(30)} | ${cells[0].padStart(4)} | ${cells[1].padStart(4)} | ${cells[2].padStart(4)} | ${cells[3].padStart(4)} |`;
  }).join("\n");
}

function fillTemplate(tpl, subs) {
  let out = tpl;
  for (const [k, v] of Object.entries(subs)) {
    out = out.replaceAll(`{{${k}}}`, v);
  }
  return out;
}

function main() {
  const { path, start, end } = parseArgs(process.argv.slice(2));
  const lines = loadLines(path, start, end);
  const tpl = readFileSync(TEMPLATE_PATH, "utf8");
  const now = new Date().toISOString().slice(0, 10);
  const out = fillTemplate(tpl, {
    PERIOD_START: start || "____-__-__",
    PERIOD_END: end || "____-__-__",
    ROOM_TABLE_ROWS: renderRoomTable(lines),
    SCROLL_TABLE_ROWS: renderScrollTable(lines),
    FLOWS_LIST: "_(copy top ten page → next-page transitions from the zone panel here)_",
    RETURN_RATIO: "__%",
    RSS_REACH_START: "—",
    RSS_REACH_END: "—",
    RSS_REACH_DELTA: "—",
    RENDERED_AT: now,
    LINE_COUNT: String(lines.length),
  });
  process.stdout.write(out);
}

main();
