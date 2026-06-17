# Artemis Design Labs — Website

Marketing site for ADL — a B2B design-systems agency. We build the AI that builds your design infrastructure.

**Live**: [artemisdesignlabs.com](https://artemisdesignlabs.com) · **CI/CD**: GitHub Actions → Cloudflare Workers

## Quick start

```bash
npm install
npm run dev          # standard Next.js dev server
npm run cf:preview   # local Cloudflare Workers preview (needs Node 20+)
npm run lint
npm run typecheck
```

You'll need a `.env` at the repo root with at least:
```
DATABASE_URL=mongodb+srv://...mongodb.net/adl_website?appName=uif-dev
```

Optional, for full feature parity with production:
```
RESEND_API_KEY=re_...                            # email notifications
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAA...         # spam-protection widget
TURNSTILE_SECRET_KEY=0x4AAA...                   # server-side verify
```

## Stack at a glance

| Layer | Choice |
|---|---|
| Framework | Next.js 15, App Router, React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind 4 + design tokens in `src/styles/tokens.css` |
| Fonts | Geist Sans + Geist Mono via `geist` npm pkg |
| DB | MongoDB Atlas (native `mongodb` driver — no ORM) |
| Email | Resend |
| Spam | Cloudflare Turnstile |
| Hosting | Cloudflare Workers via `@opennextjs/cloudflare` |
| Auth on `/admin` | Cloudflare Access (one-time PIN) |
| Analytics | Cloudflare Web Analytics |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) |

## Deploying

Push to `main`. The workflow:
1. `npm ci` on Node 22
2. `npm run cf:build` → OpenNext bundles for the Workers runtime
3. `npx opennextjs-cloudflare deploy` → ships the Worker
4. Syncs `DATABASE_URL`, `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY` as Worker secrets

Watch runs at <https://github.com/artemis-design-labs/adl-website/actions>. Total time: ~2 min build + deploy.

## Where things live

```
src/
├── app/                  # Next App Router (homepage + sub-routes + api)
├── components/
│   ├── atoms/            # Button, Logo, ThemeToggle, Turnstile
│   ├── organisms/        # Hero, ProblemSection, AboutUs, …, CTASection
│   ├── Navigation.tsx
│   └── Footer.tsx
├── context/              # ThemeContext
├── lib/                  # cn (class-merging), mongo (DB client)
└── styles/tokens.css     # all design tokens
```

## Visual direction

Dark-primary AI-tech-forward. Electric violet (`#7C3AED`) accent. Geist typography. Mono `›` eyebrows. See `CLAUDE.md` for the full token map and pattern conventions.

## More reading

- `DEPLOYMENT.md` — full ops doc: architecture, CI/CD, secrets, custom domains, rollback, troubleshooting.
- `CLAUDE.md` — project guide for future Claude sessions (token map, conventions, "do not revive" list).
- `CHANGELOG.md` — chronological release notes, including the v1.0.0 Cloudflare cutover and v1.1.0 brand redesign.
- `Website-Content.md` — live copy reference (V2 only, the version actually shipping).

## Contact

`hello@artemisdesignlabs.com`
