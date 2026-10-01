// Downloads the homepage imagery from the current WordPress site into
// public/images/ (paths as listed in image-sources.json).
// Run once on a machine with internet access:  npm run fetch-images
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import sources from "./image-sources.json" with { type: "json" };

const root = join(import.meta.dirname, "..", "public", "images");
let ok = 0, skipped = 0, failed = 0;

for (const [local, url] of Object.entries(sources)) {
  const dest = join(root, local);
  try { await access(dest); skipped++; continue; } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    ok++; console.log("✓", local);
  } catch (e) { failed++; console.error("✗", local, "-", e.message); }
}
console.log(`\n${ok} downloaded, ${skipped} already present, ${failed} failed`);
