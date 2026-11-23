import site from "@/config/site.json";
import seo from "@/config/seo.json";

interface PageMeta {
  path: string;
  title: string;
  description: string;
  canonical?: string;
}

const pages = seo.pages as unknown as PageMeta[];
const home = pages[0];
const IMAGE = `${site.url}/og-image.png`;

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

// Keeps the head correct while visitors move around the single-page app.
// Crawlers that do not run JavaScript get the same tags from the build step (scripts/prerender-meta.mjs).
export const applyPageMeta = (pathname: string) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const page = pages.find((p) => p.path === clean);
  const meta = page ?? home;
  const url = site.url + ((page?.canonical ?? clean) === "/" ? "/" : page?.canonical ?? clean);

  document.title = meta.title;
  setMeta("name", "description", meta.description);
  setMeta("name", "robots", page ? "index,follow,max-image-preview:large" : "noindex,follow");
  setMeta("property", "og:type", "website");
  setMeta("property", "og:site_name", site.name);
  setMeta("property", "og:title", meta.title);
  setMeta("property", "og:description", meta.description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", IMAGE);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", meta.title);
  setMeta("name", "twitter:description", meta.description);
  setMeta("name", "twitter:image", IMAGE);

  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
};
