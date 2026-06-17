# Artemis Design Labs — Project Guide for Claude

A short, accurate map of the codebase so future Claude sessions can be useful without re-discovering everything. For deeper detail see [`DEPLOYMENT.md`](./DEPLOYMENT.md) (infrastructure) and [`CHANGELOG.md`](./CHANGELOG.md) (chronology).

## What this is

Marketing site for **Artemis Design Labs (ADL)** — a B2B design systems agency. Pitch: "We build the AI that builds your design infrastructure." Audience is Series A-C founders and CTOs. Brand voice is founder-to-founder, no fluff. Source of truth for in-copy strings lives in [`Website-Content.md`](./Website-Content.md).

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, React 19, Server + Client Components) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + design tokens in `src/styles/tokens.css` |
| Fonts | Geist Sans + Geist Mono via the `geist` npm package |
| DB | MongoDB Atlas (`adl_website` db, native `mongodb` driver — no Prisma) |
| Hosting | Cloudflare Workers via `@opennextjs/cloudflare` |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`). Push to `main` → live in ~2 min. |
| DNS / TLS | Cloudflare (zone `artemisdesignlabs.com`, custom-domain attach via Workers) |
| Package mgr | npm |

## Visual direction

**AI-tech forward**, dark by default with a polished light-mode alternate.

| Token | Dark (default) | Light |
|---|---|---|
| `--color-bg-primary` | `#0A0A0F` | `#FAFAFC` |
| `--color-bg-elevated` | `#1B1B26` | `#FFFFFF` |
| `--color-text-primary` | `#EDEDF0` | `#0A0A0F` |
| `--color-accent` | `#2F77EA` (Ramotion electric blue) | `#0F766E` (teal) |
| `--font-sans` | Geist Sans | — |
| `--font-mono` | Geist Mono | — |

> **As of v1.3.0** the homepage runs the "Ramotion" design language (dark-first, electric-blue accent), and `tokens.css` carries a 17px-body, ~1.25 modular **type scale** (`--text-display/h1/h2/h3/h4/body-lg/body/sm/xs`) — reference sizes in JSX via `text-[length:var(--text-h2)]`. The older violet accent is gone; everything resolves through `tokens.css`. Sub-pages still use the mono-eyebrow + Geist-display patterns below.

Key UI patterns:
- **Mono eyebrow** — `font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]`, prefixed with `›`. Example: `› by the numbers`.
- **Display headlines** — Geist Sans semibold, tracking-tight (-0.025em), second line often in `text-[var(--color-accent)]` for emphasis.
- **Primary CTA** — violet fill, white text, arrow icon, hover glow via `shadow-[var(--shadow-glow)]`, active translate-y-px.
- **Cards** — `rounded-xl`/`rounded-2xl` with `border-[var(--color-border)]`, hover promotes border to accent and bg to `bg-tertiary`.

## Where things live

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Geist fonts, JSON-LD Organization, metadata, ThemeProvider
│   ├── page.tsx                  # Homepage composition
│   ├── icon.svg                  # Favicon (violet arrow on dark)
│   ├── apple-icon.svg            # iOS home-screen icon
│   ├── robots.ts / sitemap.ts    # Metadata routes
│   ├── globals.css               # Imports tokens + global animations (marquee, etc.)
│   ├── admin/                    # /admin — Mongo-backed contact submissions viewer
│   │                             # (currently UNAUTHENTICATED — see security note)
│   ├── api/contact/route.ts      # POST endpoint: validates, writes to Mongo, emails via Resend
│   ├── about/ contact/ pricing/ work/ our-ai/ hands-ai/ nbcu/ insight/
│   ├── publication/ marketplace/ design-system-license/ my-project-inbox/
│
├── components/
│   ├── Navigation.tsx            # Header with Logo, theme toggle, violet Book-a-Call CTA
│   ├── Footer.tsx                # Brand + nav + contact, mono eyebrows
│   ├── atoms/
│   │   ├── Button/               # Primary (violet) / secondary (outline) / ghost / link
│   │   ├── Logo/                 # SVG Artemis arrow + wordmark, theme-aware
│   │   └── ThemeToggle/          # 56x28 pill switch with sun/moon, role="switch"
│   └── organisms/
│       ├── Hero/                 # `> ./adl train --status=production` + headline + CTAs
│       ├── ProblemSection/       # 5-card grid, hover promotes border to accent
│       ├── AboutUsSection/       # Origin story + services carousel (auto-advance, pause on hover)
│       ├── MetricsTestimonialsSection/  # 2x2 metrics + testimonial carousel
│       ├── ClientsSection/       # Horizontal logo marquee (CSS `marqueeX` keyframe)
│       └── CTASection/           # "Founder-to-founder conversation" + contact card
│
├── context/ThemeContext.tsx      # Theme state (defaults to dark), localStorage persistence
├── lib/
│   ├── cn.ts                     # clsx + tailwind-merge utility
│   └── mongo.ts                  # Cached MongoClient + ContactDoc type
└── styles/tokens.css             # All design tokens (root + [data-theme="light"])
```

Homepage composition (`src/app/(site)/page.tsx`, v1.3.0 Ramotion redesign):
`<Hero />` → `<ProblemSection />` (Two Tracks) → `<OperationalMoatSection />` → `<CaseStudySection />` → `<TestimonialsSection />` → `<ClientsSection />` → `<CTASection />`. Navigation + Footer come from the `(site)` layout. The old `AboutUsSection` / `MetricsTestimonialsSection` are off the homepage; `TwoTracksSection` / `WhoThisIsForSection` / `StatBarSection` / `HeroProductVisual` exist but aren't all wired in yet.

## Conventions

- **Use CSS variables for theme-aware colors**: `text-[var(--color-text-primary)]`, never hardcoded `text-gray-900` etc.
- **Class merging**: `cn()` from `@/lib/cn`, never raw template literals.
- **Mono eyebrows**: prefix with `› ` and use the `--font-mono` family for any small uppercase label.
- **Routes that hit the DB**: `export const dynamic = 'force-dynamic'` and `export const runtime = 'nodejs'`. The DB lives behind a Worker runtime secret, not at build time. `/admin` and `/api/contact` both need this.
- **Don't add custom Tailwind colors**: drive new color needs through tokens.
- **Don't fetch from `process.env` directly** outside of `src/lib/mongo.ts` and `src/app/api/`. Inside those it's fine (Worker runtime secrets surface via `process.env` under `nodejs_compat`).

## Workflow

- `npm run dev` — standard Next dev server (vanilla, no Worker emulation, fastest).
- `npm run cf:preview` — local OpenNext + Workers preview. Closest to prod runtime. Requires Node ≥20.
- `npm run lint` / `npm run typecheck` — sanity checks. Pre-commit hook (husky + lint-staged) runs lint --fix and tsc on staged files.
- `git push origin main` — production deploy. Watch the run at github.com/artemis-design-labs/adl-website/actions.

Required env (in `.env`, gitignored):
```
DATABASE_URL=mongodb+srv://...mongodb.net/adl_website?appName=uif-dev
```
For email notifications (optional locally, required in prod):
```
RESEND_API_KEY=re_...
```

## Security notes (read before touching auth)

- **`/admin` is behind Cloudflare Access** (302 → Access login; verified v1.3.0). An app-level Basic Auth backstop was added then removed as redundant. It lists contact-form submissions, so keep the Access policy restricted to your team.
- The contact endpoint has no captcha. Backlog: Cloudflare Turnstile (site key public, secret as Worker secret).
- Credentials from earlier deploy sessions may exist in chat transcripts — see CHANGELOG `[v1.0.0]` → "Known follow-ups" before rotating.

## Adding a new section

1. Create folder under `src/components/organisms/<Section>/`.
2. Export named component + `index.ts`.
3. Import + place in `src/app/page.tsx`.
4. Use the mono-eyebrow + Geist display + accent-second-line pattern.
5. Use CSS variables for all colors. No raw hex.
6. Run `npm run typecheck` before committing.

## Things NOT to revive

- The "Severance corporate minimalism" palette (sage `#7D8471`) and the **violet `#7C3AED`** accent that replaced it — both superseded by the v1.3.0 Ramotion **electric-blue `#2F77EA`** system in `tokens.css`.
- `Prisma` / `@prisma/client` — incompatible with Workers runtime; we use the native `mongodb` driver.
- `ContentVersionContext` / `ContentSwitcher` / V1+V2 content blocks — deleted Jun 3 2026 with their `test-content-*` branches.
- `vercel.json` / `.vercel/` — we're on Cloudflare now.
- The `src/app/components/` tree of old molecules/atoms/templates — purged.
