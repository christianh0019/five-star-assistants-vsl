# FSA Website — Claude SOP

## On Every Change

### 1. Check if the sitemap needs updating

Update `public/sitemap.xml` if any of the following are true:
- A new page/route was added to `App.tsx`
- A new blog post, case study, or YouTube video was added (check `src/data/` and `data/`)
- A page was removed or its URL changed

Do NOT add these to the sitemap:
- `/thank-you`
- `/onboarding/*` (any onboarding funnel pages)

When adding a URL, follow the existing format and set an appropriate priority:
- Core pages (home, pricing, booking): `1.0` / `0.9`
- Hire and industry pages: `0.7`–`0.8`
- Results, YouTube videos: `0.5`–`0.6`
- Legal pages (privacy, terms): `0.3`

Update the `<lastmod>` date on any URLs you modify.

---

### 2. Push to GitHub

Stage only the files that were intentionally changed. Never use `git add -A` blindly.

```bash
git add <specific files>
git commit -m "descriptive message"
git push origin main
```

Vercel auto-deploys on every push to `main`.

---

### 3. Verify deployment

After pushing, confirm the deploy succeeded one of two ways:

**Option A — GitHub CLI:**
```bash
gh run list --repo christianh0019/five-star-assistants-vsl --limit 3
```
Wait for status to show `completed` / `success`.

**Option B — Vercel dashboard:**
Check [vercel.com/dashboard](https://vercel.com/dashboard) for the latest deployment status.

If a deployment fails, check the build logs. Common causes:
- TypeScript errors
- Missing imports
- CSS build errors (Tailwind v4 `@import "tailwindcss"` — do not revert to CDN or `@tailwind` directives)

---

## Project Notes

- **Stack:** Vite + React 19, React Router v7, Tailwind CSS v4, react-helmet-async
- **Tailwind:** v4 via PostCSS — config lives in `index.css` `@theme` block, NOT `tailwind.config.js`
- **Meta tags:** Managed per-page via `react-helmet-async` — do not add `<title>` or OG tags to `index.html`
- **Domain:** `https://www.fivestarassistants.com`
- **Sitemap:** Static file at `public/sitemap.xml` — must be manually updated when routes change
- **robots.txt:** `public/robots.txt` — blocks `/onboarding/` and `/thank-you`
