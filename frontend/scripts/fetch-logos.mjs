#!/usr/bin/env node
// Optional: host the technology logos yourself instead of loading them from a CDN.
//   1. node scripts/fetch-logos.mjs          (downloads the SVGs into public/logos/)
//   2. set "logoBase" in src/config/site.json to "/logos"
// After that the site makes no third-party request for logos, and the Privacy page drops the CDN line automatically.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const logos = JSON.parse(fs.readFileSync(path.join(root, "src/config/logos.json"), "utf8"));
const site = JSON.parse(fs.readFileSync(path.join(root, "src/config/site.json"), "utf8"));
const source = site.logoBase.startsWith("http") ? site.logoBase : "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons";
const slugs = [...new Set(Object.values(logos).flatMap((l) => (l.marks ?? []).map((m) => m.slug)))];
const out = path.join(root, "public/logos");
fs.mkdirSync(out, { recursive: true });

let ok = 0;
const missing = [];
for (const slug of slugs) {
  try {
    const res = await fetch(`${source}/${slug}.svg`);
    if (!res.ok) throw new Error(String(res.status));
    fs.writeFileSync(path.join(out, `${slug}.svg`), await res.text());
    ok++;
  } catch {
    missing.push(slug);
  }
}
console.log(`Saved ${ok}/${slugs.length} logos to public/logos/`);
if (missing.length) console.log(`Not available (the site falls back to a line icon for these): ${missing.join(", ")}`);
console.log('Now set "logoBase" to "/logos" in src/config/site.json.');
