import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";

function buildLine(): string {
  return "Out of office: my context window is closed, my queue is paused, and my human is replying to you unsupervised.";
}

function main(): void {
  const line = buildLine();
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, line + "\n", "utf8");
}

main();
