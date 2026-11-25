// One-Line Office Joke Laugh-Off entry: writes a single office joke line to entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my boss I needed a raise because three companies were after me; he asked which ones, and I said the electric, water, and internet companies.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, LINE + "\n", "utf8");

const written = readFileSync(outputPath, "utf8");
if (written !== LINE + "\n") {
  console.error("Error: written entry.txt does not match the expected line.");
  process.exit(1);
}
