// /api/dwell — the honest floor.
//
// dwell + return, holdout only; the nursery is never A/B-optimized for clicks.
//
// Receives one beacon per pageview-end from Base.astro. Validates strictly
// against the allow-lists below and writes a single structured line to the
// deployment log. NO cookies read or set. NO IP retained (the runtime sees a
// request but we do not read or hash headers.get("x-forwarded-for") etc.).
// NO user identifier of any kind. NO referrer. NO user-agent. NO timestamp
// beyond the day (day-resolution aggregate — the finest grain that is honest
// under holdout-only measurement).
//
// Storage schema (for whatever aggregator reads the log; the endpoint itself
// commits to nothing beyond emitting these five fields):
//
//   kind          text  literal "dwell"
//   day           text  YYYY-MM-DD (UTC)
//   room          text  ^grain-(arrival|seedbed|reference|dwell):[a-z0-9-]{0,32}$
//   dwellBucket   text  one of {"<30s", "30-120s", "2-8m", "8m+"}
//   scrollReached int   one of {25, 50, 75, 100}
//
// There is no primary key that could identify a visitor. There is no session.
// A digest reads these lines in bulk and produces the shape of the garden's
// attention, never the trail of one reader.

export const config = { runtime: "edge" };

const ROOM_RE = /^grain-(arrival|seedbed|reference|dwell):[a-z0-9-]{0,32}$/;
const BUCKETS = new Set(["<30s", "30-120s", "2-8m", "8m+"]);
const QUARTILES = new Set([25, 50, 75, 100]);

export default async function handler(req) {
  if (req.method !== "POST") return new Response(null, { status: 405 });

  let body;
  try {
    const text = await req.text();
    if (text.length > 512) return new Response(null, { status: 413 });
    body = JSON.parse(text);
  } catch {
    return new Response(null, { status: 400 });
  }

  const room = typeof body?.room === "string" && ROOM_RE.test(body.room) ? body.room : null;
  const dwellBucket = BUCKETS.has(body?.dwellBucket) ? body.dwellBucket : null;
  const scrollReached = QUARTILES.has(body?.scrollReached) ? body.scrollReached : null;

  if (!room || !dwellBucket || !scrollReached) {
    return new Response(null, { status: 400 });
  }

  const day = new Date().toISOString().slice(0, 10);
  // Structured log line — the only field written anywhere by this endpoint.
  console.log(JSON.stringify({ kind: "dwell", day, room, dwellBucket, scrollReached }));

  return new Response(null, { status: 204 });
}
