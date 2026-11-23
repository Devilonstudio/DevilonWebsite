# Deploying the new Devilon site: start here

You have a repo with this shape (that is what your old `vercel.json` described):

```
your-repo/
  vercel.json          <- root, REPLACE with the new one
  package.json         <- root, REPLACE with the new one
  package-lock.json    <- root, DELETE (it is regenerated)
  api/                 <- DELETE the whole folder (Supabase replaces it)
  frontend/            <- the website
    index.html         <- REPLACE
    package.json       <- EDIT (commands below)
    src/               <- REPLACE
    public/            <- MERGE (copy new files in, keep your old ones)
    scripts/           <- ADD
```

The zip you got mirrors this layout. Unzip it **over a copy or branch of your repo**, then do the steps in order. Use Git so you can undo anything.

## Step 1. Copy the files
1. Delete the old `api/` folder and the root `package-lock.json`.
2. Copy `vercel.json` and `package.json` from the zip into your repo root (overwrite).
3. Copy `supabase/` into your repo root.
4. Inside `frontend/`: delete the old `src/` folder, then copy in the new `src/`, `scripts/` and `index.html` from the zip. Copy the contents of the zip's `frontend/public/` into your `frontend/public/` (merge; do not delete your existing files such as the favicon).
5. Copy `frontend/.env.example` into `frontend/`.

## Step 2. Fix the frontend dependencies
Open a terminal **in the `frontend` folder** and run:

```
npm uninstall express mongoose cors dotenv
npm install @supabase/supabase-js
```

Then open `frontend/package.json` and add one line inside `"scripts"` (mind the comma after the line above it):

```json
"postbuild": "node scripts/prerender-meta.mjs"
```

So `scripts` becomes:
```json
"scripts": {
  "dev": "vite",
  "build:ts": "npx tsc --project tsconfig.node.json",
  "build": "vite build",
  "postbuild": "node scripts/prerender-meta.mjs",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

Also in `frontend/tailwind.config.ts`, add this line at the top level of the exported config object (next to `content`, `theme` and `plugins`) so hover effects don't stick on phones:
```ts
future: { hoverOnlyWhenSupported: true },
```

If your editor complains about importing JSON, add `"resolveJsonModule": true` under `compilerOptions` in `frontend/tsconfig.app.json`.

## Step 3. Set up Supabase (the contact form database)
1. Create a project at supabase.com.
2. Open **SQL Editor**, paste the whole of `supabase/schema.sql`, and run it. (If you ran an older version before, run only: `alter table public.contact_submissions add column if not exists wants_nda boolean not null default false;`)
3. Open **Project Settings > API**. Copy the **Project URL** and the **anon public** key. (Never use the `service_role` key on the website.)
4. For local testing: copy `frontend/.env.example` to `frontend/.env.local` and paste the two values in. Make sure `.env.local` is in `.gitignore` (the Vite default ignores `*.local`).
5. In **Vercel > your project > Settings > Environment Variables** add the same two variables, `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, for Production and Preview. **Important:** these are baked in when the site is built, so redeploy after adding them.

## Step 4. Test locally
```
cd frontend
npm install
npm run dev
```
Open the address it prints. Send a test message from the Contact page. Check it appears in Supabase under **Table Editor > contact_submissions**.

Then run `npm run build` once. It should end with a line like "Prerendered head tags and content summaries for 20 routes". If it does not, the `postbuild` line from Step 2 is missing.

## Step 5. Vercel settings
The new root `vercel.json` replaces your old `builds`/`routes` setup. It tells Vercel to install and build inside `frontend/`, publish `frontend/dist`, send unknown URLs to the app, and add security headers. You do not need to change anything in the Vercel dashboard, except:
- **Settings > General > Node.js Version:** choose 20.x (or 18.x or newer).
- **Settings > Domains:** add both `devilonstudio.com` and `www.devilonstudio.com`, and set one to redirect to the other. The site is configured for **www** (`https://www.devilonstudio.com`). To use the bare domain instead, change `url` in `frontend/src/config/site.json` and the `Sitemap:` line in `frontend/public/robots.txt`.

Then commit and push, or run `vercel --prod`.

## Step 6. Check it worked (Windows)
In Command Prompt (use `curl.exe`, and `findstr` instead of `grep`):
```
curl.exe -s https://www.devilonstudio.com/robots.txt
curl.exe -s https://www.devilonstudio.com/sitemap.xml
curl.exe -s https://www.devilonstudio.com/services/mobile-apps | findstr /i "canonical <title>"
curl.exe -I -A "OAI-SearchBot" https://www.devilonstudio.com/
```
- The third command should show the **Mobile Apps** title and a canonical URL ending in `/services/mobile-apps`. If it shows the home page title, the `postbuild` hook did not run.
- The last one should return `200`. If it returns 403, a firewall or bot-protection setting is blocking AI crawlers.
- Open the site on your phone, visit `/sample-audit` directly (it should load, not 404), and send a test contact message.
- Paste the home URL into a LinkedIn or X draft to check the preview image.

## Step 7. Tell search engines
1. **Google Search Console:** add the property, verify it, submit `https://www.devilonstudio.com/sitemap.xml`, then use URL Inspection on the home page and press Request Indexing.
2. **Bing Webmaster Tools:** import from Search Console.
3. Paste the home URL into Google's Rich Results Test and fix any warnings.

## What is in `index.html`, in plain words
- The page title, description and social tags: defaults for the home page. At build time the script rewrites them per page, so every page gets its own.
- `canonical`: tells search engines the official address of the page.
- The favicon points at `/logo.png`, which the zip adds to `public/`.
- `viewport-fit=cover` and `theme-color`: make the site fit phones with notches and tint the browser bar.
- The `<div id="root">` and the `/src/main.tsx` script: how the React app starts. Do not change them.
- If your old `index.html` had extra tags you still need (for example a Google Search Console verification tag or analytics), copy them into the new file before you overwrite it.

## Things you will edit later
- `frontend/src/config/site.json`: price, turnaround, email, site URL, LinkedIn URL (the footer icon appears once you paste it), policy date, and where logos load from.
- `frontend/src/config/seo.json`: page titles, descriptions, summaries and the FAQ.
- `frontend/src/data/services.ts`: service text and the "Is it a fit?" lists.
- `frontend/src/config/logos.json`: which logo each stack tile uses.
- `frontend/src/pages/SampleAudit.tsx` and `frontend/src/data/sampleAudit.ts`: replace the sample findings with a real, permissioned report when you have one.
- When you add a page: add it to `src/App.tsx` and to `seo.json`, then rebuild.

## Optional: host the stack logos yourself
By default the stack logos load from the jsDelivr CDN. To avoid that third-party request, in `frontend` run `node scripts/fetch-logos.mjs`, then set `"logoBase": "/logos"` in `site.json`. Missing logos fall back to a line icon.

## Before you publish: legal pages
`/privacy` and `/terms` match what the site does today. I am not a lawyer, so have them reviewed, and make sure these are true or edit the pages:
- The site sets no cookies and uses no analytics or ad trackers. If you add analytics, update the Privacy page first.
- You do not send client code to third-party AI services without the client's agreement.
- You keep and honour an opt-out list for outreach emails.
- Contact messages are stored in Supabase and deleted on request.
- The Terms are governed by the law where your business is established; add your legal entity name and jurisdiction if you want them stated.
- Google Fonts sends visitors' IP addresses to Google. Hosting the fonts yourself removes that.

## If something goes wrong
- **"Cannot find module @supabase/supabase-js":** run `npm install @supabase/supabase-js` in `frontend`.
- **Contact form says "We couldn't send your message":** the two `VITE_SUPABASE_...` variables are missing or the site was not redeployed after adding them.
- **Direct links like /services give a 404:** the new `vercel.json` is not at the repo root.
- **Every page shows the home title in page source:** the `postbuild` line is missing from `frontend/package.json`.
- **Build fails on the first run:** delete `frontend/node_modules` and `frontend/package-lock.json`, run `npm install`, then try again.
- **A logo tile shows a line icon:** that logo is not available from the icon library; this is expected and harmless.

## What the SEO and AI-agent files do (and do not do)
- `robots.txt` allows search engines and the main AI crawlers; `sitemap.xml` and `llms.txt` / `llms-full.txt` are regenerated on every build from `seo.json`.
- Google's own guidance on AI features says no special markup is needed and that it ignores `llms.txt`, so for Google ordinary SEO is the lever. `llms.txt` is a cheap extra with no confirmed benefit.
- The structured data is minimal and matches what is visible on the page.
- What moves rankings is useful, original content, so plan to publish a few pages that answer real questions your buyers search for, such as "Lovable app security checklist" or "Supabase row-level security mistakes".
- New sites take weeks or months to be indexed. Do not expect clients from search in the first month.
