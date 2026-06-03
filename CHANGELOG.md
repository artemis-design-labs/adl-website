# Changelog

All notable changes to the ADL website. Newest first.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Tags follow semver — see "Releases" on GitHub for the immutable checkpoints.

---

## [v1.0.0] — 2026-06-03 — First Cloudflare Workers production deploy

This is the production cutover from Vercel (disabled, billing) to **Cloudflare Workers via OpenNext**, with **GitHub Actions CI/CD** auto-deploying every push to `main`. The site is live at:

- `https://artemisdesignlabs.com`
- `https://www.artemisdesignlabs.com`
- `https://adl-website.adl-ef6.workers.dev` (Worker default subdomain — bypasses zone-level bot challenge, useful for debugging)

### Added
- `wrangler.jsonc` — Workers config (`nodejs_compat` flag, `ASSETS` binding, observability enabled, `compatibility_date: 2026-06-02`).
- `open-next.config.ts` — `defineCloudflareConfig()` with adapter defaults.
- `.github/workflows/deploy.yml` — push-to-main + `workflow_dispatch` triggered deploy on Node 22. Steps: checkout → install → `wrangler whoami` sanity check → `npm run cf:build` → `opennextjs-cloudflare deploy` → sync `DATABASE_URL` via `wrangler secret put`.
- `DEPLOYMENT.md` — full operations doc: architecture, CI/CD flow, required GitHub + Cloudflare secrets and scopes, local dev, custom-domain attach, manual deploy, rollback, troubleshooting, migration history.
- `CHANGELOG.md` — this file.
- `npm` scripts: `cf:build`, `cf:preview`, `cf:deploy`, `cf:upload`.
- `@opennextjs/cloudflare` and `wrangler` added as devDependencies.
- Horizontal infinite-marquee logo carousel in `ClientsSection.tsx` rendering 8 real client logos (AT&T, Verizon, NBCU, NYCPS, NYCERS, CMA, Qualitrol, Freshop) — grayscale at 70% opacity, hover-to-color, edge fade via CSS mask, pause-on-hover, respects `prefers-reduced-motion`.
- `@keyframes marqueeX` + `.animate-marquee-x` utility class in `src/app/globals.css`.

### Changed
- `next.config.ts` now calls `initOpenNextCloudflareForDev()` so `next dev` mirrors the Workers runtime locally.
- `prisma/schema.prisma` switched from `provider = "sqlite"` to `provider = "mongodb"`. The `Contact` model `id` field is now `String @id @default(auto()) @map("_id") @db.ObjectId`. The `DATABASE_URL` in `.env` was already MongoDB (leftover from the Nov 2025 attempt); only the schema flipped.
- `/admin/page.tsx` marked `export const dynamic = 'force-dynamic'` so Next doesn't try to statically prerender it (and call Prisma) at build time, when `DATABASE_URL` is only available as a runtime secret.
- `.gitignore` ignores `.open-next/`, `.wrangler/`, `.dev.vars`. Removed `.vercel` since we don't run that CLI anymore.

### Removed
- `vercel.json` — no longer the deploy target.
- `public/vercel.svg` — unreferenced Vercel-branded asset.
- Stray empty file `./main` in repo root — was confusing git ref parsing.
- The pre-existing Cloudflare **Pages** project `adl-website` (auto-created by a stale GitHub integration; was producing 404s).
- The pre-existing Cloudflare **Worker** `adl-website` from the November 2025 attempt (modified `2025-11-17`, conflicting metadata broke fresh deploys; deleted with `?force=true` which also dropped its 2 zone routes).
- Stale DNS records on the `artemisdesignlabs.com` zone:
  - `A artemisdesignlabs.com → 192.0.2.1` (proxy placeholder from the deleted Worker)
  - `CNAME www.artemisdesignlabs.com → df9d6d771f2a0de1.vercel-dns-017.com` (Vercel)
  - 2× `TXT _vercel.artemisdesignlabs.com → vc-domain-verify=…` (Vercel domain verification)
- Stale branches:
  - local `modify-services-section` (last touched 2025-11-17 — Nov Cloudflare attempt)
  - `origin/test-branch` (2025-08-01)
  - `origin/test-branch-dos` (2025-08-01)
  - `origin/claude/understand-codebase-01AkQpxWZejWmQ8WtPrFihMw` (2025-11-19 — agent working branch)
- The Vercel project itself (user-deleted in dashboard after the deploy stabilised).

### Kept on purpose
- `origin/test-content-1` and `origin/test-content-2` — `src/components/ContentSwitcher.tsx` literally `git checkout test-content-1` and `git push origin test-content-1` at dev time (see `src/app/api/save-content-config/route.ts:48-55`). Deleting them breaks the in-app content-versioning feature.
- All non-Vercel DNS records (MX for Google Workspace, GoDaddy paylinks CNAME, Google/Zoho/Webflow verification TXTs, NS records).

### Custom domains
Both apex and www are attached to the Worker via `PUT /accounts/{id}/workers/domains` with `service: "adl-website"`, `environment: "production"`, `zone_id: "04986876fcbb0971ab60d6a36a57420f"`. Cloudflare provisions TLS automatically via Google Trust Services (WE1 intermediate). No manual DNS records needed — Cloudflare manages routing internally for attached domains.

### GitHub secrets (set on the repo)
- `CLOUDFLARE_API_TOKEN` — token from the "Edit Cloudflare Workers" template, with **Zone → DNS: Edit** added on `artemisdesignlabs.com` for one-time DNS cleanup. No TTL, no IP filter.
- `CLOUDFLARE_ACCOUNT_ID` — `ef66991978e1d2b6aa84860fde6ee8ad` (ADL account).
- `DATABASE_URL` — MongoDB connection string for the `adl_website` database on the `uif-dev` cluster.

### Workflow iterations during initial rollout (debugging artefacts kept here for posterity)
1. **First push-triggered run** (commit `3dbf870`) failed because the 3 GitHub secrets weren't set yet.
2. **Run on commit `3c40b48`** (force-dynamic /admin) fixed a Prisma build-time error but the deploy step hit the cloudflare/wrangler-action `secrets-bulk` upload — which runs **before** `wrangler deploy`. The Nov 2025 leftover Worker's metadata refused the call.
3. **Run on commit `af4b5f9`** split deploy and secret-sync into two steps. Deploy itself then failed with `Could not route to /accounts/.../workers/services/adl-website [code: 7003]` against the legacy worker metadata.
4. **Manual cleanup**: deleted the old Worker via `DELETE /accounts/.../workers/scripts/adl-website?force=true` (Cloudflare auto-dropped the 2 zone routes).
5. **Run on commit `06d2620`** swapped `wrangler-action` for direct `npx wrangler` / `npx opennextjs-cloudflare deploy` calls with `env:` set at the **job** level so account ID + token reach every step. Surfaced that `gh secret set --body -` had stored the GitHub secrets as **1-byte** strings (likely a stdin/buffer quirk). Re-set all 3 secrets with `--body "$VALUE"`.
6. **Run dispatched manually** — green. Worker live. Custom-domain attach then blocked by leftover Vercel/old-Worker DNS records; cleaned and re-attached.

### Known follow-ups
- The Cloudflare zone has Bot Fight Mode / Security Level set high enough that simple `curl` requests get `HTTP 403 cf-mitigated: challenge`. Real browsers pass it. If we see real-user complaints, lower it in **Security → Bots** or **Security → Settings**.
- `/admin` has no authentication — anyone who knows the URL can read all contact submissions. See "Improvements" / P0 for the fix.
- `node_modules` was reinstalled. `package-lock.json` regenerated.
- ESLint warning in `src/app/components/molecules/ServicesSection.tsx:119` — `useEffect` missing `handleTabChange` and `services.length` deps. Non-blocking.

---

## Pre-v1.0.0 (selected)

For full history, `git log`. Highlights leading up to the cutover:

- `c2d0719` — Tabbed accessible `ServicesSection` (kept on `main` via the Jun 2 rebase).
- `2528113` — Landing-page restructure (May 20): Hero / Problem / About / Metrics & Testimonials / Clients / CTA. Removed standalone `/services` page. Added `MetricsTestimonialsSection` and `ClientsSection`.
- `0be26e5` — Homepage content + dark-mode styling pass.
- `52a3931` — Original dark-mode-primary design system (since superseded by the Severance light-mode primary in `ff2b0a7`).
- `8b1b323` / `5057d44` / `01b32ad` / `106facc` (Nov 17 2025) — First Cloudflare migration attempt with OpenNext + MongoDB, **abandoned** by a force-push on Nov 23 2025 that rewound `main`. The current cutover re-applies these lessons cleanly.

[v1.0.0]: https://github.com/artemis-design-labs/adl-website/releases/tag/v1.0.0
