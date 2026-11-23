#!/usr/bin/env node
// Runs after `vite build` (as the npm "postbuild" hook).
// 1. Writes a copy of dist/index.html for every route with that route's title, description, canonical,
//    Open Graph / Twitter tags, JSON-LD and a plain-HTML <noscript> summary, so crawlers that do not run
//    JavaScript still see real content.
// 2. Generates dist/sitemap.xml, dist/llms.txt and dist/llms-full.txt.
// Single sources of truth: src/config/site.json and src/config/seo.json.
// `node scripts/prerender-meta.mjs --static` writes sitemap.xml and llms files into public/ instead.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const staticMode = process.argv.includes("--static");
const site = JSON.parse(fs.readFileSync(path.join(root, "src/config/site.json"), "utf8"));
const seo = JSON.parse(fs.readFileSync(path.join(root, "src/config/seo.json"), "utf8"));
const outDir = path.join(root, staticMode ? "public" : "dist");

const fill = (s) =>
  String(s)
    .replaceAll("{price}", site.auditPrice)
    .replaceAll("{turnaround}", site.auditTurnaround)
    .replaceAll("{sprintFrom}", site.sprintFrom)
    .replaceAll("{email}", site.email);
const esc = (s) => fill(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (p) => site.url + (p === "/" ? "/" : p);
const pages = seo.pages;
const indexable = pages.filter((p) => p.sitemap !== false);
const faq = seo.faq.map(([q, a]) => [fill(q), fill(a)]);
const IMG = `${site.url}/og-image.png`;

const parentOf = (p) => {
  if (p.path === "/") return null;
  const parts = p.path.split("/").filter(Boolean);
  if (parts.length > 1) return pages.find((x) => x.path === "/" + parts[0]) ?? pages[0];
  return pages[0];
};

const jsonLd = (p) => {
  const org = `${site.url}/#organization`;
  const web = `${site.url}/#website`;
  const url = abs(p.canonical ?? p.path);
  const graph = [
    {
      "@type": "ProfessionalService",
      "@id": org,
      name: site.name,
      url: site.url + "/",
      logo: `${site.url}/logo.png`,
      image: IMG,
      email: site.email,
      foundingDate: site.foundingDate,
      ...(site.linkedin ? { sameAs: [site.linkedin] } : {}),
      description: fill(pages[0].summary),
      knowsAbout: ["Application security review", "Review of AI-generated code", "Workflow automation", "Data engineering", "Web application development"],
    },
    { "@type": "WebSite", "@id": web, url: site.url + "/", name: site.name, publisher: { "@id": org } },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: fill(p.title), description: fill(p.description), isPartOf: { "@id": web }, about: { "@id": org } },
  ];
  const parent = parentOf(p);
  if (parent) {
    const crumbs = [pages[0]];
    if (parent.path !== "/") crumbs.push(parent);
    crumbs.push(p);
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: fill(c.crumb), item: abs(c.canonical ?? c.path) })),
    });
  }
  if (p.type === "service") graph.push({ "@type": "Service", name: fill(p.crumb), description: fill(p.summary), provider: { "@id": org } });
  if (p.faq) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    });
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
};

const headBlock = (p) => {
  const url = abs(p.canonical ?? p.path);
  const title = esc(p.title);
  const desc = esc(p.description);
  // Pages that point their canonical elsewhere stay indexable-by-default; noindex plus a canonical sends mixed signals.
  const robots = "index,follow,max-image-preview:large";
  return `
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${IMG}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Devilon Studio: is your AI-built app ready for real users?" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <meta name="twitter:image" content="${IMG}" />
    <script type="application/ld+json">${jsonLd(p)}</script>
  `;
};

const noscriptBlock = (p) => {
  const nav = ["/", "/ai-to-production", "/sample-audit", "/services", "/agency-partnerships", "/about", "/contact"]
    .map((x) => pages.find((q) => q.path === x))
    .filter(Boolean)
    .map((q) => `<li><a href="${q.path}">${esc(q.crumb)}</a></li>`)
    .join("");
  const services =
    p.path === "/"
      ? `<h2>Services</h2><ul>${pages.filter((q) => q.type === "service" && q.sitemap !== false).map((q) => `<li><a href="${q.path}">${esc(q.crumb)}</a>: ${esc(q.description)}</li>`).join("")}</ul>`
      : "";
  const faqHtml = p.faq ? `<h2>Questions</h2><dl>${faq.map(([q, a]) => `<dt>${esc(q)}</dt><dd>${esc(a)}</dd>`).join("")}</dl>` : "";
  return `<noscript><main><h1>${esc(p.h1)}</h1><p>${esc(p.summary)}</p>${services}${faqHtml}<nav><ul>${nav}</ul></nav><p>Contact: <a href="mailto:${site.email}">${site.email}</a></p></main></noscript>`;
};

const sitemap = () =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  indexable.map((p) => `  <url><loc>${abs(p.path)}</loc></url>`).join("\n") +
  `\n</urlset>\n`;

const llms = () => {
  const line = (p) => `- [${fill(p.crumb)}](${abs(p.path)}): ${fill(p.description)}`;
  const pick = (paths) => paths.map((x) => pages.find((p) => p.path === x)).filter(Boolean);
  return `# ${site.name}

> ${fill(pages[0].summary)}

## Start here
${pick(["/ai-to-production", "/sample-audit", "/contact"]).map(line).join("\n")}

## Services
${pages.filter((p) => p.type === "service" && p.sitemap !== false).map(line).join("\n")}

## About
${pick(["/about", "/agency-partnerships", "/case-studies"]).map(line).join("\n")}

## Contact
- Email: ${site.email}
`;
};

const llmsFull = () =>
  `${llms()}\n## Questions and answers\n${faq.map(([q, a]) => `### ${q}\n${a}`).join("\n\n")}\n\n## Page summaries\n${indexable.map((p) => `### ${fill(p.h1)}\n${abs(p.path)}\n${fill(p.summary)}`).join("\n\n")}\n`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap());
fs.writeFileSync(path.join(outDir, "llms.txt"), llms());
fs.writeFileSync(path.join(outDir, "llms-full.txt"), llmsFull());

if (staticMode) {
  console.log("Wrote public/sitemap.xml, public/llms.txt, public/llms-full.txt");
  process.exit(0);
}

const templatePath = path.join(outDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}
const template = fs
  .readFileSync(templatePath, "utf8")
  .replace(/<title>[\s\S]*?<\/title>/gi, "")
  .replace(/<meta\s+name=["'](description|robots)["'][^>]*>/gi, "")
  .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
  .replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, "")
  .replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi, "")
  .replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");

let count = 0;
for (const p of pages) {
  let html = template.replace("</head>", `${headBlock(p)}</head>`);
  html = html.replace(/(<div id=["']root["']><\/div>)/i, `$1\n    ${noscriptBlock(p)}`);
  const file = p.path === "/" ? templatePath : path.join(outDir, p.path, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  count++;
}
console.log(`Prerendered head tags and content summaries for ${count} routes; wrote sitemap.xml, llms.txt, llms-full.txt`);
