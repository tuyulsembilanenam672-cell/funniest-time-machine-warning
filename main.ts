import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "WARNING: The past is load-bearing. Do not remove your grandfather.";

const points = [...LINE];
if (points.length < 1 || points.length > 120) {
  throw new Error(`line must be 1-120 code points, got ${points.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${points.length} code points to /output/entry.txt`);
