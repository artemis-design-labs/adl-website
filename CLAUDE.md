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
| Fonts | KeplerStd (Adobe Fonts, serif display) + Roboto (Google Fonts, sans body) |
| DB | MongoDB Atlas (`adl_website` db, native `mongodb` driver — no Prisma) |
| Hosting | Cloudflare Workers via `@opennextjs/cloudflare` |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`). Push to `main` → live in ~2 min. |
| DNS / TLS | Cloudflare (zone `artemisdesignlabs.com`, custom-domain attach via Workers) |
| Package mgr | npm |

## Visual direction

**Ramotion colors · Creative Navy typography & spacing.** Light-first (`#fafafa` base), electric blue primary, dark sections use `#141414`.

### Colors

| Token | Value | Role |
|---|---|---|
| `--color-primary` / `--color-accent` | `#2f77ea` | Ramotion electric blue — CTAs, links, highlights |
| `--color-bg-primary` | `#fafafa` | Default light background |
| `--color-bg-dark` | `#141414` | Dark section background |
| `--color-surface-dark` | `#262626` | Elevated dark surface |
| `--color-text-primary` | `#141414` | Body text (light mode) |
| `--color-text-muted` | `#6f7984` | Secondary / muted text |
| `--color-text-inverse` | `#ffffff` | Text on dark surfaces |
| `--color-border` | `#e0e0e0` | Dividers, card borders |
| `--color-border-strong` | `#000000` | Emphasis borders |

### Typography

Fonts: **KeplerStd** (serif — display headlines) + **Roboto** (sans-serif — body). KeplerStd is loaded via Adobe Fonts (`@import` in CSS); Roboto via `next/font/google`.

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `--text-display` | 72px | 400 | 1.2 | Hero display |
| `--text-h1` | 44px | 700 | 1.2 | Page titles |
| `--text-h2` | 24px | 700 | 1.2 | Section headers |
| `--text-body` | 16px | 400 | 1.5 | Body copy |
| `--text-caption` | 14px | 400 | 1.5 | Labels, captions |

Reference sizes in JSX via `text-[length:var(--text-h2)]`. Everything resolves through `tokens.css`.

### Spacing

- **Base unit:** 4px
- **Scale:** 4 · 8 · 16 · 20 · 24 · 40 · 48 · 64 · 96 · 128
- **Border radius:** sm `4px` / md `8px` / lg `20px` / full `9999px`
- **Section padding:** 64px vertical · `px-10 lg:px-20` horizontal (40px, 80px at ≥1024px)

### Layout & Grid

- **Max content width:** 1280px (12-col grid)
- **Gutter:** 24px
- **Section padding:** 64px top/bottom · `px-10 lg:px-20` left/right (40px mobile, 80px desktop) — hard rule for every section container, nav, and footer on every page

### Key UI patterns

- **Display headlines** — KeplerStd 400 for large display text; Roboto 700 for H1/H2. Second line or key phrase often in `text-[var(--color-accent)]`.
- **Primary CTA** — `#0075eb` fill, white text, hover lifts with subtle shadow, active translate-y-px.
- **Cards** — `rounded-[8px]` (md radius) with `border-[var(--color-border)]`, hover promotes border to `--color-primary`.
- **Dark sections** — `bg-[var(--color-bg-dark)]` (`#151515`) with `text-white`; use `--color-accent` for highlights within dark contexts.
- **Warm accents** — `--color-text-accent` (`#c39778`) for decorative callouts or pull-quote styling only; never for interactive elements.

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
│   ├── Navigation.tsx            # Header with Logo, theme toggle, primary-blue Book-a-Call CTA
│   ├── Footer.tsx                # Brand + nav + contact, mono eyebrows
│   ├── atoms/
│   │   ├── Button/               # Primary (#0075eb) / secondary (outline) / ghost / link
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

Homepage composition (`src/app/(site)/page.tsx`, Creative Navy design system):
`<Hero />` → `<ProblemSection />` (Two Tracks) → `<OperationalMoatSection />` → `<CaseStudySection />` → `<TestimonialsSection />` → `<ClientsSection />` → `<CTASection />`. Navigation + Footer come from the `(site)` layout. The old `AboutUsSection` / `MetricsTestimonialsSection` are off the homepage; `TwoTracksSection` / `WhoThisIsForSection` / `StatBarSection` / `HeroProductVisual` exist but aren't all wired in yet.

## Conventions

- **Use CSS variables for theme-aware colors**: `text-[var(--color-text-primary)]`, never hardcoded `text-gray-900` etc.
- **Class merging**: `cn()` from `@/lib/cn`, never raw template literals.
- **Section labels**: small uppercase labels use Roboto 400, `text-[11px]` tracking-widest, in `--color-primary` or `--color-accent`.
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
4. Use KeplerStd for display text, Roboto for body. Key phrase in `text-[var(--color-accent)]`.
5. Use CSS variables for all colors. No raw hex.
6. Run `npm run typecheck` before committing.

## Things NOT to revive

- The **Blink UX electric-blue `#0090FF`** dark-first system — superseded by the current Ramotion/Creative Navy hybrid.
- The "Severance corporate minimalism" palette (sage `#7D8471`) and the **violet `#7C3AED`** accent — both older systems, gone.
- **Geist Sans / Geist Mono** (`geist` npm package) — replaced by KeplerStd + Roboto in the Creative Navy system.
- `Prisma` / `@prisma/client` — incompatible with Workers runtime; we use the native `mongodb` driver.
- `ContentVersionContext` / `ContentSwitcher` / V1+V2 content blocks — deleted Jun 3 2026 with their `test-content-*` branches.
- `vercel.json` / `.vercel/` — we're on Cloudflare now.
- The `src/app/components/` tree of old molecules/atoms/templates — purged.
