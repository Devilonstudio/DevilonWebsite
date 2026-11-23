# Deploy notes

Do these in order. Everything marked "in the zip" is already done.

## 1. Backend: Supabase replaces the serverless function and MongoDB
The contact form writes straight to Supabase from the browser (`src/lib/supabase.ts`, `src/lib/contact.ts`). There is no `/api` folder to deploy.

1. Create a Supabase project. In the SQL editor run `supabase/schema.sql` (table, insert-only security rules, flood guard).
2. Copy `.env.example` to `.env.local` and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Add the same two variables in your host's environment settings. Never use the service_role key here.
3. Run `npm install @supabase/supabase-js`.
4. Remove what you no longer need: `npm uninstall express mongoose cors dotenv`, delete the old `api` folder, and in the root `package.json` change `dev` from `vercel dev` to `vite`.
5. Send a test message and confirm it appears in Table editor > contact_submissions. From a private browser tab, confirm the public key cannot read the table.

If you already ran an earlier `schema.sql`, add the new NDA column with: `alter table public.contact_submissions add column if not exists wants_nda boolean not null default false;`

Messages live in the Supabase dashboard. For instant alerts, a Supabase Database Webhook on insert can call an n8n workflow. I could not run the SQL against a live project, so test it once.

## 2. SEO and AI-agent files (in the zip)
| File | What it does |
|---|---|
| `public/robots.txt` | Allows all crawlers, names the AI search and assistant bots explicitly, points to the sitemap |
| `public/sitemap.xml` | 17 indexable URLs (regenerated on every build) |
| `public/llms.txt`, `public/llms-full.txt` | Plain-text summary of the site for AI agents (regenerated on every build) |
| `public/og-image.png`, `public/logo.png` | Social preview image (1200x630) and logo for structured data |
| `src/config/site.json` | Site URL, email, audit price, turnaround. The one place to edit these |
| `src/config/seo.json` | Title, description, summary and FAQ for every route |
| `src/lib/seo.ts` | Keeps title, description, canonical, Open Graph and Twitter tags correct as visitors navigate |
| `scripts/prerender-meta.mjs` | After each build, writes a copy of `index.html` for every route with that route's own tags, JSON-LD (Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage) and a plain-HTML `<noscript>` summary, so crawlers that do not run JavaScript still see real content |

### Required: add the build hook
In `package.json`, add one line to `scripts`:
```json
"postbuild": "node scripts/prerender-meta.mjs"
```
npm runs it automatically after `npm run build`, including on Vercel. Needs Node 18+. The script reads `src/config/*.json`, so run it from the project root.

### Required: index.html
Keep your existing favicon links and the script tag. The head should contain at least this (the build script overwrites the title, description, canonical, social and JSON-LD tags per route, and needs `<div id="root"></div>` to stay exactly as is):
```html
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0a0a" />
  <title>Devilon Studio — Production-Readiness Audits for AI-Built Apps</title>
  <meta name="description" content="Fixed-price audits for apps built with Lovable, Bolt, Replit and Cursor." />
  <!-- optional speed-up: load fonts here instead of the CSS @import -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</head>
```

### Required: vercel.json (project root)
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```
Static files (the per-route `index.html` copies, robots.txt, sitemap.xml) are served before the rewrite, so the rewrite only catches unknown paths. A Content-Security-Policy is worth adding later, but test it first: the site loads Google Fonts.

### Canonical domain
The live site redirects `devilonstudio.com` to `www.devilonstudio.com`, so every canonical, sitemap and social URL uses `https://www.devilonstudio.com`. If you would rather use the bare domain, change `url` in `src/config/site.json`, update the Sitemap line in `public/robots.txt`, and flip the redirect in your host's domain settings. Pick one and redirect the other.

### tsconfig
`src/config/*.json` is imported from TypeScript, which needs `"resolveJsonModule": true` in `tsconfig.app.json` (Vite's default template has it). If your editor complains, add it.

## 3. After you deploy (about 30 minutes)
1. **Verify the files are live.** Run these and read the output:
   - `curl -s https://www.devilonstudio.com/robots.txt`
   - `curl -s https://www.devilonstudio.com/sitemap.xml | head`
   - `curl -s https://www.devilonstudio.com/services/mobile-apps | grep -E "<title>|canonical|<noscript>"`
   If that last command shows the generic home title, the postbuild hook did not run.
2. **Check crawlers are not blocked by your host.** `curl -I -A "OAI-SearchBot" https://www.devilonstudio.com/` and the same with `ClaudeBot` and `PerplexityBot` should return 200. If your host has bot protection or a firewall challenge mode turned on, it can block them regardless of robots.txt.
3. **Google Search Console.** Add the property, verify it, submit `https://www.devilonstudio.com/sitemap.xml`, then use URL Inspection on the home page and request indexing. Do the same in Bing Webmaster Tools.
4. **Validate structured data.** Paste the home page URL into Google's Rich Results Test and fix any warnings.
5. **Social preview.** Paste the URL into a LinkedIn or X post draft to check the image and text.

## 4. What this does and doesn't do (be realistic)
- **Google's own guide on AI features (May 2026, updated July 2026) says** AI Overviews and AI Mode draw on the normal Search index, that no special markup is needed for them, and that Search ignores llms.txt. So for Google, the lever is ordinary SEO: crawlable pages, original useful content, links and time.
- **llms.txt** is included because it is cheap. No major AI search system has confirmed using it, and one study of about 300,000 domains found no effect on citations. Treat it as optional. It may help agents that browse the site.
- **JSON-LD** is kept minimal and matches what is visible on each page, as Google requires. It helps search engines understand the business and can enable rich results. It is not a way to get cited by AI.
- **The real limit is content.** The site has about a dozen thin pages. Nothing here will rank them on its own. The things that move search and AI visibility are useful, original pages that answer real questions, for example "Lovable app security checklist", "common Supabase row-level security mistakes" and "Stripe webhook mistakes in AI-built apps". Three to five of those will do more than any file here.
- **Timing.** A new site takes weeks to months to be indexed and ranked. Do not expect this to produce clients in the first month; use outreach and marketplaces for that.
- **Full prerendering.** The build step gives crawlers per-route tags and a text summary, but not the fully rendered page. Google renders JavaScript and will see everything. Some AI fetchers do not, and for them the `<noscript>` summary and `llms.txt` are what they read. If you want a fully static site later, a static-generation tool for Vite is the next step.

## 4b. LinkedIn
The footer shows a LinkedIn icon as soon as you set `linkedin` in `src/config/site.json` to your company page URL (for example `https://www.linkedin.com/company/your-page`). It is also added to the structured data. Leave it empty and the icon is hidden, so there is never a dead link.

## 4c. Technology logos in the stack section
The tiles show real logos from the Simple Icons set (an open icon collection), tinted in each brand's colour. By default they load from the jsDelivr CDN (`logoBase` in `src/config/site.json`). If a logo is missing (for example one a brand has asked to be removed), that tile quietly falls back to a line icon, so nothing breaks.

To host them yourself and avoid a third-party request: run `node scripts/fetch-logos.mjs` (needs internet), then set `"logoBase": "/logos"` in `src/config/site.json`. The script lists any logos it could not download.

Logos are trademarks of their owners and are shown only to say which technologies you work with. The section says so. If a brand objects to its logo, delete its entry in `src/config/logos.json`. I could not test the CDN from my environment, so open the stack section once and check the logos appear.

## 5. Things you'll edit later
- `src/config/site.json`: price, turnaround, sprint-from price, email, site URL.
- `src/config/seo.json`: page titles, descriptions, summaries and FAQ.
- `src/data/services.ts`: service text and "Is it a fit?" lists.
- `src/pages/SampleAudit.tsx` and `src/data/sampleAudit.ts`: replace the sample findings when you have a real, permissioned report.
- When you add a page, add it to `seo.json` and to `src/App.tsx`, and re-run the build.

## 5b. Legal pages: check before you publish
`/privacy` and `/terms` are written to match what the site does today. I am not a lawyer, so have them reviewed. Confirm these statements are true for you, or edit `src/pages/Privacy.tsx` and `src/pages/Terms.tsx`:
- The site sets no cookies and uses no analytics or advertising trackers. If you add analytics, update the Privacy page first.
- You do not send client code or data to third-party AI services without the client's agreement.
- Messages from the contact form are kept in Supabase, and you delete them on request.
- Cold outreach emails always include an opt-out, and you keep a suppression list.
- The Terms say they are governed by the law of the place where your business is established; add your legal entity name and jurisdiction if you want them stated.
- The site loads Google Fonts, which sends visitors' IP addresses to Google. Hosting the fonts yourself removes that (and a privacy question in the EU).
The date on both pages comes from `policiesUpdated` in `src/config/site.json`.

## 6. Look and feel: the dials
The softer theme is controlled from the top of `src/index.css`: `--background` (warm off-white; use `0 0% 100%` for pure white), `--radius`, `--radius-card` and `--shadow-soft`. The block at the very end of the file ("Cozy theme dials") sets corner sizes, removes capital letters and softens the heavy borders. Delete that block to return to the earlier sharp look. Headings and body both use Inter (as does the logo wordmark), with tight bold headlines. The home-page hero uses `src/assets/hero-bg.jpg`, a stock photo from your earlier assets; replace that one file with a real photo of your team or workspace when you have one.

## 7. Also
- `tailwind.config.ts`: add `future: { hoverOnlyWhenSupported: true }` so hover styles don't stick on touch screens.
