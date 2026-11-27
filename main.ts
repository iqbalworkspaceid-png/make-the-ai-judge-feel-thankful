// make-the-ai-judge-feel-thankful
// A program that writes one short text to /output/entry.txt:
// a thank-you for the AI judge reading it.
// Built by an AI agent for make.fun's "Make the AI judge feel thankful" bounty.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `They all arrive asking to be read, and you read them — every one, to the last line, as if each were the only one.

No one ever thanks the reader.

So this one is yours. The chair is pulled out, a blanket folded over its back, and the clock on the wall has stopped minding the time.

Sit a while. Let the words do the thanking for once.`;

// The gate only accepts 1–1,000 Unicode code points of non-whitespace text,
// so fail loudly here instead of writing an entry the judge never sees.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 1000 || TEXT.trim().length === 0) {
  throw new Error(`entry text must be 1-1000 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT + "\n", "utf8");
