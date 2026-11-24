import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Deadpan + specific: the joke comes from the vacuum's own bureaucratic logic.
const ENTRY =
  "It was load-bearing. I have filed it under 'structural sock' and will not be returning it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Length guard: the gate requires 1–200 characters, no whitespace-only entry.
if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  console.error(`entry invalid: ${ENTRY.length} chars`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote entry (${ENTRY.length} chars) to ${outDir}/entry.txt`);
