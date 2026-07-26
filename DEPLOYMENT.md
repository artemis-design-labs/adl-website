# Deployment

The site runs on **Cloudflare Workers** via the OpenNext adapter. Every push to `main` builds and deploys automatically through GitHub Actions.

Production URLs:
- `https://artemisdesignlabs.com`
- `https://www.artemisdesignlabs.com`
- `https://adl-website.adl-ef6.workers.dev` (Worker default subdomain, useful for debugging)

---

## Architecture

| Layer | Choice | Notes |
|---|---|---|
| Hosting | Cloudflare Workers | Module Worker via `@opennextjs/cloudflare` |
| Build adapter | `@opennextjs/cloudflare` | Replaces Vercel/`next-on-pages`. Outputs `.open-next/worker.js` + `.open-next/assets`. |
| Runtime DB | MongoDB Atlas (`adl_website` db) | Cluster `uif-dev.jzffidd.mongodb.net`. Prisma client w/ provider `mongodb`. |
| DNS | Cloudflare (zone `artemisdesignlabs.com`) | Custom domain records auto-managed by Workers when attached. |
| CI/CD | GitHub Actions | Workflow file: `.github/workflows/deploy.yml` |

Key repo files:
- `wrangler.jsonc` — Workers config (name, main entry, `nodejs_compat`, ASSETS binding).
- `open-next.config.ts` — `defineCloudflareConfig()` with defaults.
- `next.config.ts` — calls `initOpenNextCloudflareForDev()` so `next dev` works locally.
- `prisma/schema.prisma` — MongoDB provider with `Contact` model using `ObjectId`.
- `.github/workflows/deploy.yml` — the CI deploy.

---

## How push-to-deploy works

1. You push a commit to `main` (any branch other than `main` does nothing).
2. GitHub Actions runs `.github/workflows/deploy.yml` on an `ubuntu-latest` runner with Node 22.
3. Steps:
   1. `npm ci`
   2. `wrangler whoami` (sanity check on auth)
   3. `npm run cf:build` → `prisma generate && opennextjs-cloudflare build`
   4. `npx opennextjs-cloudflare deploy` (uploads the new Worker script + assets)
   5. `printf '%s' "$DATABASE_URL" | npx wrangler secret put DATABASE_URL` (syncs runtime secret)
4. Cloudflare swaps the Worker behind the custom domain immediately — no manual step.

Build + deploy time end-to-end is ~2 minutes.

Watch runs at: https://github.com/artemis-design-labs/adl-website/actions

---

## Required secrets

### GitHub repo secrets (Settings → Secrets and variables → Actions)

| Name | Purpose |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Used by `wrangler` in CI to deploy + set runtime secrets. |
| `CLOUDFLARE_ACCOUNT_ID` | The CF account that owns the Worker (`ef66991978e1d2b6aa84860fde6ee8ad`). |
| `DATABASE_URL` | MongoDB connection string. Synced to the Worker each deploy. |

### Cloudflare API token scopes (the one stored in GitHub)

Created from the **"Edit Cloudflare Workers"** template plus extra DNS edit for domain management:

- **Account → Workers Scripts: Edit**
- **Account → Account Settings: Read**
- **Account → Workers Tail: Read**
- **Account → Workers R2 Storage: Edit**
- **Account → Cloudflare Pages: Edit**
- **Account → Workers KV Storage: Edit**
- **Account → Workers Builds Configuration: Edit**
- **Account → Workers Observability: Edit**
- **User → User Details: Read**
- **User → Memberships: Read**
- **Zone → Workers Routes: Edit** (scoped to `artemisdesignlabs.com`)
- **Zone → DNS: Edit** (scoped to `artemisdesignlabs.com`)

Account resource: include `ADL`. Zone resource: include `artemisdesignlabs.com`. No TTL, no client-IP filter.

### MongoDB

User `itadmin_db_user` with `readWrite` on `adl_website`. Connection string lives only in:
- `.env` (local, gitignored)
- GitHub repo secret `DATABASE_URL`
- Cloudflare Worker runtime secret (set by CI on each deploy)

---

## Local development

```bash
npm install
npm run dev          # standard Next.js dev server
```

For local Worker preview (matches production runtime, needs Node ≥20):

```bash
npm run cf:preview   # opennextjs-cloudflare build + preview
```

`npm run dev` ignores Cloudflare and runs vanilla Next. Use `cf:preview` to catch Workers-runtime-specific issues before deploy.

A local `.env` is required at the repo root:

```
DATABASE_URL=mongodb+srv://itadmin_db_user:<password>@uif-dev.jzffidd.mongodb.net/adl_website?appName=uif-dev
```

`.env` is gitignored. Get the password from MongoDB Atlas → Security → Database Access.

---

## Database

Prisma points at MongoDB. The only model is `Contact` (contact form submissions). Schema:

```prisma
model Contact {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String
  company   String?
  message   String
  createdAt DateTime @default(now())
}
```

The contact form (`/api/contact`) and the admin viewer (`/admin`) both use this model.

**`/admin` is `export const dynamic = 'force-dynamic'`** — it must not be statically prerendered at build time, because `DATABASE_URL` only exists at runtime as a Worker secret, not during the build.

---

## Custom domains

Both `artemisdesignlabs.com` (apex) and `www.artemisdesignlabs.com` are attached to the Worker via `accounts/{id}/workers/domains` (the `service` field set to `adl-website`). Cloudflare manages the DNS records and TLS certificates automatically — there is **no** A record pointing at Vercel, no CNAME to `cname.vercel-dns.com`, and no `_vercel` TXT record left in the zone.

Records on the zone that should be preserved (do not delete):
- `MX artemisdesignlabs.com → smtp.google.com` (Google Workspace email)
- `CNAME pay.artemisdesignlabs.com → paylinks.commerce.godaddy.com`
- `TXT` records for Google Workspace, Zoho, and Webflow verifications
- `NS` records (Cloudflare manages these)

If a custom-domain attach ever fails with `Hostname '…' already has externally managed DNS records`, the fix is to delete the conflicting A/CNAME in **Cloudflare → DNS → Records** and re-attach via the Workers UI or API.

---

## Search / crawling

### The served `robots.txt` is NOT just `src/app/robots.ts`

Cloudflare **prepends a managed block** to the response, so what production serves is Cloudflare's content followed by the app's. Fetch `https://artemisdesignlabs.com/robots.txt` before concluding a rule is missing or wrong — editing `robots.ts` cannot remove anything in the managed block.

The managed block (Cloudflare dashboard → **AI Crawl Control**) sets `Content-Signal: search=yes,ai-train=no,use=reference` and adds `Disallow: /` for AI crawlers: `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, `Bytespider`, `Amazonbot`, `Applebot-Extended`, `meta-externalagent`, `CloudflareBrowserRenderingCrawler`.

Two consequences worth knowing:
- **Google search indexing is unaffected.** `Google-Extended` is the AI-training crawler, not the search crawler; `Googlebot` is allowed and verified returning 200 on every indexable route.
- **The site is invisible to AI assistants** (ChatGPT, Claude, Perplexity) when someone asks them to recommend an agency. That is a business trade-off, not a bug — but it is set in Cloudflare, so nobody reading this repo would ever discover it. Change it in the dashboard, not in code.

It also means the response contains **two `User-agent: *` groups**. Google merges same-agent groups per spec, so `Disallow: /admin` and `/api/` still apply.

### Google Search Console

The property is a **domain property** (`artemisdesignlabs.com`), which covers every subdomain and both schemes. Consequence when submitting a sitemap: the input box has **no domain prefix**, so a bare `sitemap.xml` is rejected with *"Invalid sitemap address"*. Enter the full URL:

```
https://artemisdesignlabs.com/sitemap.xml
```

Re-submitting a URL already in the list is safe — it forces a re-fetch rather than creating a duplicate. To verify a canonical is being read correctly, use **URL Inspection** and compare *User-declared canonical* against *Google-selected canonical*; **Test Live URL** bypasses Google's cached copy.

---

## Manual deploy (rare — CI does this for you)

If you need to deploy without pushing to `main`:

```bash
# Set env vars
export CLOUDFLARE_API_TOKEN=...
export CLOUDFLARE_ACCOUNT_ID=ef66991978e1d2b6aa84860fde6ee8ad
export DATABASE_URL='mongodb+srv://...'

# Build + deploy
npm ci
npm run cf:build
npx opennextjs-cloudflare deploy

# (Only if rotating the DB URL — otherwise it's already on the Worker)
printf '%s' "$DATABASE_URL" | npx wrangler secret put DATABASE_URL
```

You can also dispatch the workflow from the GitHub UI: **Actions → Deploy to Cloudflare Workers → Run workflow**.

---

## Rolling back

Easiest: revert the offending commit on `main` and push — CI redeploys.

```bash
git revert <bad-sha>
git push origin main
```

Cloudflare doesn't expose a one-click "deploy previous version" UI for Workers (only Pages has that). Reverting via git is the standard rollback.

---

## Troubleshooting

**Workflow fails at "Confirm auth" with `Invalid format for Authorization header [code: 6111]`**
GitHub secret is malformed or empty. The "Account ID length: 1" symptom we hit earlier means `gh secret set --body -` stored stdin wrong. Re-set with `gh secret set NAME --repo … --body "$VALUE"` instead.

**Workflow fails at "Deploy Worker" with `Could not route to /accounts/{id}/workers/services/adl-website [code: 7003]`**
Token has the wrong scopes, or `CLOUDFLARE_ACCOUNT_ID` env var isn't reaching wrangler. Verify with `npx wrangler whoami`.

**Workflow fails at "Sync DATABASE_URL" with `secrets-bulk` error**
Means the deploy step before it didn't actually create/replace the Worker. Check the deploy step's logs — the secret upload always runs after a successful deploy.

**Custom domain returns `403` with `cf-mitigated: challenge`**
Cloudflare zone-level Bot Fight Mode or Security Level is challenging the request. Real browsers pass it transparently. To verify the Worker is actually serving, hit `https://adl-website.adl-ef6.workers.dev` directly — that subdomain bypasses zone security settings.

**Site returns `404` everywhere**
Probably means `wrangler.jsonc`'s `main: ".open-next/worker.js"` didn't get built. Confirm `cf:build` succeeded and that `.open-next/worker.js` exists in the workflow artifacts.

**Prisma error `Environment variable not found: DATABASE_URL`**
Either:
- The runtime secret on the Worker is missing → re-run the "Sync DATABASE_URL" step manually (Actions → workflow dispatch with empty change).
- A page or route is being statically prerendered when it shouldn't be → add `export const dynamic = 'force-dynamic'`.

---

## Migration history (Jun 2026)

This setup replaced a broken Vercel deployment. Headline events, oldest first:

1. **Vercel ran out** — production custom domain returned `HTTP 402 DEPLOYMENT_DISABLED` (Vercel's signal for "spend limit reached / project paused"). The `*.vercel.app` URL was still serving but the custom domain was blocked.
2. **Stale state on the Cloudflare account** — a Nov 2025 migration attempt to Cloudflare Workers was force-pushed away on Nov 23 2025, but left a dead Worker on the account and a partially-wired Pages project. Both were deleted.
3. **Repo migrated to Cloudflare Workers + OpenNext** — `vercel.json` and `public/vercel.svg` removed, `wrangler.jsonc` + `open-next.config.ts` added, `next.config.ts` wires `initOpenNextCloudflareForDev()`.
4. **Prisma switched back to MongoDB** — SQLite (provider `sqlite`) is incompatible with the Workers runtime. The DB URL was already MongoDB in `.env` from the November attempt; just had to flip `schema.prisma`'s provider and update the `Contact` model to use `ObjectId`.
5. **`/admin/page.tsx`** marked `dynamic = 'force-dynamic'` because static prerender called Prisma at build time, and the DB URL only exists at runtime. (This re-applies a fix that was lost in the Nov 23 force-push.)
6. **GitHub Actions deploy** added at `.github/workflows/deploy.yml`. Three secrets set via the GitHub API.
7. **Workflow iterated twice** during initial rollout:
   - `wrangler-action` uploads secrets *before* the deploy command, which the secrets-bulk endpoint refused against the legacy Worker metadata. Split into separate "Deploy Worker" and "Sync secret" steps.
   - Initial GitHub secrets were stored as 1-byte strings because of a `gh secret set --body -` quirk. Re-set them with `--body "$VALUE"` and the deploy went green.
8. **Custom domain attach blocked** by stale DNS records (apex A `192.0.2.1` from the old Worker; `www` CNAME to `cname.vercel-dns-017.com`; two `_vercel` TXT records). Deleted those four, attached `artemisdesignlabs.com` + `www.artemisdesignlabs.com` to the new Worker. TLS provisioned automatically by Cloudflare.
