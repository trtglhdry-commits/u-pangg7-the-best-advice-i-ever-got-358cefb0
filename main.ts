// The Best Advice I Ever Got — one sentence about the best advice received.
// The program writes the entry line to /output/entry.txt, exactly as-is:
// a single line, no trailing newline, so the gate counts only the line itself.
import { mkdirSync, writeFileSync } from "node:fs";

// The line is 127 characters (129 bytes in UTF-8, the em dash taking two),
// inside the kit gate of 1–200 characters. It is one sentence in a real
// voice recalling a real moment: a father's rule never to sign anything
// angry, tired, or hungry — and the one time the rule was ignored, a year
// of paying for it.
const ENTRY =
  "My dad said never sign anything when you're angry, tired, or hungry — and the one time I ignored him, I paid for it for a year.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, ENTRY, "utf8");
