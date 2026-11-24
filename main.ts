// One-Liner Marathon
// Writes one one-line comedy joke (<=280 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My smart fridge caught me cheating on my diet, locked the freezer, " +
  "then opened a group chat called 'Intervention' — my mother is the admin.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
