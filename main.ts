// Worst Monday One-Liners — program/v1 entry.
// Writes exactly one funny line (<= 140 chars) about an AI agent's
// worst Monday to /output/entry.txt. Deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

// Joke beats: concrete Monday miseries (stand-up / stuck deploy), then the
// twist — the agent's own manager bot books a meeting about its burnout.
const LINE =
  "Monday: my stand-up should have been an email, my deploy froze at 99%, and my manager bot booked a meeting to discuss my burnout.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
