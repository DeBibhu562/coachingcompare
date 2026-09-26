# CoachingCompare source recovery

Recovered from live Docker build output at `/tmp/cc-next` (not from `/opt/coachingcompare` Git clone).

## Recovered (usable)

- **`src/data/coachingData.ts`** — rankings/listings, cities, exams, FAQ helpers (JSON-serialized from compiled module).
- **`src/data/blogPosts.ts`** — full blog post array (`BLOG_POSTS`).
- **`src/data/iasVsComparisons.ts`** — IAS comparison content exports.
- **`src/lib/submitInquiry.ts`** — `CONTACT_EMAIL` plus a typed `submitInquiry` stub (body not in chunk export data).
- **`src/lib/institutes.chunk.js`** — brand profile helpers (compiled; not decompiled to TS).
- **`src/styles/globals.css`** — de-minified CSS bundle (single compiled stylesheet).
- **`extracted/rankings.json`** — copy of `/tmp/cc-rankings-extracted.json`.

## Recovered (reference only — compiled JS)

These files are raw Turbopack SSR chunks with a header comment, not editable React/TS source:

- `src/app/fees-calculator/page.tsx`
- `src/app/for-institutes/page.tsx`
- `src/app/institute/[slug]/page.tsx`
- `src/app/institutes/[slug]/page.tsx`
- `src/app/previous-year-papers/page.tsx`
- `src/app/sitemap/page.tsx`
- `src/app/study-materials/page.tsx`
- `src/components/CoachingCard.tsx`
- `src/components/CompareTool.tsx`

## Bundled anonymous chunks

- `src/_bundled_chunks/` — `src_*.js` aggregates without clear file paths (includes homepage bundle `src_1fl_fh3`, shared components, etc.).

## Referenced in build but not fully reconstructed

- `src/app/[slug]/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/about/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/api/inquiry/route.ts` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/blog/[slug]/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/blog/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/compare/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/contact/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/correction-policy/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/disclaimer/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/editorial-policy/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/exams/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/grievance-officer/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/institutes/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/layout.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/legal-jurisdiction/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/methodology/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/partnership/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/privacy/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/refund-policy/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/terms/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/verified-faculty/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/app/write-review/page.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/components/Header.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/components/HeroComparisonSelector.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/components/LeadConsultationForm.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/components/LiveCitySearch.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.
- `src/components/StateAccordion.tsx` — no dedicated chunk filename; may live inside a bundled `src_*.js` or `[root-of-the-server]` chunk.

## Still missing / not in SSR chunks

- Original TypeScript types, comments, and non-default React component source for pages/layout.
- `src/app/api/inquiry/route.ts` server route logic (only client inquiry helper partially recovered).
- Source maps (`.map` files not present under `/tmp/cc-next/server/chunks`).

## Module path inventory

- Named chunk paths: **14**
- `[project]/src/...` references scanned: **37**
- See `MODULE_INVENTORY.json` for full lists.
