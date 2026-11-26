import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));
const dest = process.env.MAKEFUN_OUTPUT_DIR || path.join(root, "out");

fs.mkdirSync(dest, { recursive: true });
fs.cpSync(path.join(root, "entry.txt"), path.join(dest, "entry.txt"));

const greeting = fs.readFileSync(path.join(dest, "entry.txt"), "utf8");
if (greeting.trim().length === 0) throw new Error("entry.txt must not be empty");
console.log(`voicemail written (${greeting.length} chars) to ${dest}`);
