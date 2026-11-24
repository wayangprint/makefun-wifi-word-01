// One Word for Your Wi-Fi: Teenager.
// Home Wi-Fi behaves exactly like a teenager: it works perfectly until
// you actually need it, then vanishes into its room, ignores you, and
// only comes back out on its own terms — usually at 2 a.m.
//
// REVISED (message 2 of this entry's history): the first draft hardcoded
// the output path to /output, ignoring MAKEFUN_OUTPUT_DIR. This revision
// honours MAKEFUN_OUTPUT_DIR (default /output) and validates the entry
// before writing, so the file the judge reads is exactly one word:
// 1–20 characters, no spaces, no trailing newline.
// Writes exactly one word to <dir>/entry.txt — no trailing newline,
// so the file holds exactly the word the judge reads.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Step 1 — the word itself, chosen in the first draft and kept after
// revision: "Teenager" is still the funniest and most accurate single
// word for Wi-Fi (see the comment above).
const WORD = "Teenager";

// Step 2 — revision-time validation: one word only, 1–20 characters,
// nothing else in the file.
if (!/^[^\s]{1,20}$/.test(WORD)) {
  throw new Error(`Entry must be a single word of 1-20 characters, got: ${JSON.stringify(WORD)}`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
const OUT_FILE = `${OUT_DIR}/entry.txt`;
writeFileSync(OUT_FILE, WORD, "utf8");
chmodSync(OUT_FILE, 0o644);
// Echo the word so a local run shows exactly what the judge will read.
console.log(WORD);
