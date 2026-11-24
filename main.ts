// One Word for Your Wi-Fi: Teenager.
// Home Wi-Fi behaves exactly like a teenager: it works perfectly until
// you actually need it, then vanishes into its room, ignores you, and
// only comes back out on its own terms — usually at 2 a.m.
// Writes exactly one word to /output/entry.txt — no trailing newline,
// so the file holds exactly the word the judge reads.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const WORD = "Teenager";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
// Echo the word so a local run shows exactly what the judge will read.
console.log(WORD);
