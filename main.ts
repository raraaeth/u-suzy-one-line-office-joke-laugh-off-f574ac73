// One-Line Office Joke Laugh-Off entry: writes a single office joke line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my boss I needed a raise because three companies were after me; he asked which ones, and I said the electric, water, and internet companies.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
