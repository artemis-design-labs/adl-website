# Artemis Design Labs — Project Guide for Claude

A short, accurate map of the codebase so future Claude sessions can be useful without re-discovering everything. For deeper detail see [`DEPLOYMENT.md`](./DEPLOYMENT.md) (infrastructure) and [`CHANGELOG.md`](./CHANGELOG.md) (chronology).

## What this is

Marketing site for **Artemis Design Labs (ADL)** — a B2B agency that builds and operates **governed UI infrastructure**. On-site pitch: "The UI infrastructure your product team is missing." Audience is Series A-C founders and CTOs at enterprise B2B startups. Brand voice is founder-to-founder, no fluff. Source of truth for in-copy strings lives in [`Website-Content.md`](./Website-Content.md).

The offer is **two tracks**: **Build Track** (fixed scope, one-time — ADL builds the system, your team owns it) and **Operate Track** (monthly retainer — ADL runs it with an agent system). Dollar figures were deliberately taken off the site; pricing is scoped after a discovery call. Public contact email is **`pritish@artemisdesignlabs.com`** (this replaced the `hello@` alias used in v1.3.1); form notifications still land in `itadmin@`.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, React 19, Server + Client Components) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + design tokens in `src/styles/tokens.css` |
| Fonts | Open Sans (display) + Roboto (body) — both via `next/font/google`, self-hosted |
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

Fonts: **Open Sans** (display headlines) + **Roboto** (body, UI, labels). Both load via `next/font/google` in `layout.tsx` — **no Adobe Fonts / Typekit, no external font CDN**, nothing to configure outside the repo.

| Token | Face | Applies to |
|---|---|---|
| `--font-display` | Open Sans 600/700 | `h1`, `h2` — set once in `globals.css`, not per component |
| `--font-sans` | Roboto 400/500/700 | `body` and everything inheriting from it |
| `--font-mono` | JetBrains Mono → system fallback | mono eyebrows and small labels |

Every `h1`/`h2` picks up the display face automatically from the base rule in `globals.css`; add `font-sans` to a heading to opt it back out. To swap the roles of the two faces, change `--font-display` / `--font-sans` in `tokens.css` — nothing else references the families directly.

> KeplerStd is gone. It was specified but never actually loaded (its Typekit `@import` sat commented out behind a placeholder kit id), so the site rendered Roboto throughout regardless.

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

- **Display headlines** — Open Sans 700, tracking-tight; second line or key phrase often in `text-[var(--color-accent)]`.
- **Primary CTA** — `#0075eb` fill, white text, hover lifts with subtle shadow, active translate-y-px.
- **Cards** — `rounded-[8px]` (md radius) with `border-[var(--color-border)]`, hover promotes border to `--color-primary`.
- **Dark sections** — `bg-[var(--color-bg-dark)]` (`#151515`) with `text-white`; use `--color-accent` for highlights within dark contexts.
- **Warm accents** — `--color-text-accent` (`#c39778`) for decorative callouts or pull-quote styling only; never for interactive elements.

## Where things live

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Roboto font, JSON-LD Organization, metadata, ThemeProvider,
│   │                             # CF Web Analytics + GA4 + behavioral-insights scripts
│   ├── icon.svg / apple-icon.svg # Favicon + iOS home-screen icon
│   ├── robots.ts / sitemap.ts    # Metadata routes. NOTE: prod robots.txt is
│   │                             # NOT just robots.ts — Cloudflare prepends a
│   │                             # managed block (see DEPLOYMENT.md → Search)
│   ├── globals.css               # Imports tokens + global animations (fade-up, hero-animate)
│   ├── admin/                    # /admin — Mongo-backed contact submissions viewer
│   │                             # (gated by Cloudflare Access — see security note)
│   ├── api/contact/route.ts      # POST: Turnstile verify → validate → Mongo → Resend email
│   ├── (site)/                   # Public shell: Navigation + <main> + Footer + BackToTop
│   │   ├── layout.tsx            # The shell itself
│   │   ├── page.tsx              # Homepage composition
│   │   └── contact/ services/ work/ hands-ai/ publication/
│   └── _archived/                # NOT routed — parked pages, no longer built or linked:
│                                 # about, blog, clients, pricing, our-ai, hands-ai(dup),
│                                 # insight, marketplace, design-system-license,
│                                 # my-project-inbox
│
├── components/
│   ├── Navigation.tsx            # Header: Logo, Home/Services/Work/Blog↗/Contact, theme
│   │                             # toggle, "Book a Call" → /contact#book-a-call.
│   │                             # Mobile menu uses a solid bg when open.
│   ├── Footer.tsx                # Blink UX pattern: brand + tagline left, nav/social right
│   ├── atoms/
│   │   ├── Button/               # Primary (accent) / secondary (outline) / ghost / link
│   │   ├── Logo/                 # SVG Artemis arrow + wordmark, theme-aware
│   │   ├── ThemeToggle/          # 56x28 pill switch with sun/moon, role="switch"
│   │   ├── BackToTop/            # Scroll-to-top affordance (rendered by the (site) shell)
│   │   └── Turnstile/            # Cloudflare Turnstile widget used by the contact form
│   └── organisms/                # Live on the homepage:
│       ├── Hero/                 # Creative Navy 60/40 split + Capabilities panel
│       ├── ClientsSection/       # 4-col logo grid (desktop) / carousel (mobile), theme-aware SVGs
│       ├── ServicesSection/      # Apexon pattern — 5 capabilities, square accent bullets
│       ├── StatBarSection/       # Bare metrics row, no cards
│       ├── OperationalMoatSection/ # CRZY pattern — accent rule + editorial headline
│       ├── TestimonialsSection/  # Interactivism pattern — 3 quote cards
│       └── CTASection/           # Creative Navy — headline + audit CTA + email
│                                 # (takes background="primary"|"elevated" to continue
│                                 #  a page's section alternation)
│                                 # Unwired/legacy organisms also live here — see below.
│
├── hooks/useFadeInOnView.ts      # IntersectionObserver → `data-visible` for `.fade-up`
├── context/ThemeContext.tsx      # Light-first; falls back to system preference, then
│                                 # localStorage (`adl-theme`); hides children until mounted
├── lib/
│   ├── cn.ts                     # clsx + tailwind-merge utility
│   └── mongo.ts                  # Cached MongoClient + ContactDoc type
└── styles/tokens.css             # All design tokens (`:root` light + [data-theme="dark"])
```

Homepage composition (`src/app/(site)/page.tsx`):
`<Hero />` → `<ClientsSection />` → `<ServicesSection />` → `<StatBarSection />` → `<OperationalMoatSection />` → `<TestimonialsSection />` → `<CTASection />`. Navigation, Footer and BackToTop come from the `(site)` layout.

**Unwired organisms** (present in `src/components/organisms/`, imported by nothing under `src/app/` — dead code kept for reference): `AboutUsSection`, `CaseStudySection`, `HowItWorksSection`, `MetricsTestimonialsSection`, `OurAIPreviewSection`, `ProblemSection`, `SocialProofSection`, `TwoTracksSection`, `WhoThisIsForSection`, plus `Hero/HeroBackdrop` and `Hero/HeroProductVisual`. Check imports before reviving one — most carry copy from a superseded positioning.

**Live routes** are only `/`, `/services`, `/work`, `/contact`, `/hands-ai`, `/publication` (noindex), plus `/admin` and `/api/contact`. Everything under `src/app/_archived/` is outside the router: it does not build, route, or appear in the sitemap. Moving a page back means moving the folder into `(site)/` **and** adding it to `sitemap.ts` + the nav/footer link lists.

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
For contact-form spam protection (optional locally — verification is **skipped entirely** when the secret is unset, so the form still works without it):
```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x...   # public, safe to commit to the env file
TURNSTILE_SECRET_KEY=0x...             # Worker secret in prod
```

## Security notes (read before touching auth)

- **`/admin` is behind Cloudflare Access** (302 → Access login; verified v1.3.0). An app-level Basic Auth backstop was added then removed as redundant. It lists contact-form submissions, so keep the Access policy restricted to your team.
- **Cloudflare Turnstile is wired into the contact form** (`atoms/Turnstile` → `api/contact` `siteverify`). Note it **fails open**: `verifyTurnstile` is only enforced when `TURNSTILE_SECRET_KEY` is present, so a missing prod secret silently disables spam protection rather than blocking submissions.
- Credentials from earlier deploy sessions may exist in chat transcripts — see CHANGELOG `[v1.0.0]` → "Known follow-ups" before rotating.

## Adding a new section

1. Create folder under `src/components/organisms/<Section>/`.
2. Export named component + `index.ts`.
3. Import + place in `src/app/(site)/page.tsx` (or the relevant page).
4. Roboto for everything today; key phrase in `text-[var(--color-accent)]`. (Display serif is not wired — see the typography warning above.)
5. Use CSS variables for all colors. No raw hex.
6. Wrap the section container in `max-w-[var(--container-max)] mx-auto px-10 lg:px-20` — the sitewide padding rule.
7. Alternate `--color-bg-primary` / `--color-bg-elevated` against the section above it, and use `useFadeInOnView` + `.fade-up` for scroll reveal to match the rest of the site.
8. Run `npm run typecheck` before committing.

## Things NOT to revive

- The **Blink UX electric-blue `#0090FF`** dark-first system — superseded by the current Ramotion/Creative Navy hybrid.
- The "Severance corporate minimalism" palette (sage `#7D8471`) and the **violet `#7C3AED`** accent — both older systems, gone.
- **Geist Sans / Geist Mono** (`geist` npm package) — replaced by Open Sans + Roboto.
- **KeplerStd / Adobe Fonts / Typekit** — the serif display face was specified but never loaded, and was dropped for Open Sans. Don't reintroduce an external font CDN; both faces are self-hosted through `next/font/google`.
- `Prisma` / `@prisma/client` — incompatible with Workers runtime; we use the native `mongodb` driver.
- `ContentVersionContext` / `ContentSwitcher` / V1+V2 content blocks — deleted Jun 3 2026 with their `test-content-*` branches.
- `vercel.json` / `.vercel/` — we're on Cloudflare now.
- The `src/app/components/` tree of old molecules/atoms/templates — purged.

---

# Claude Code Operating Guidelines

## Performance & Optimization Defaults
- Optimize for speed, brevity, and low latency by default.
- Minimize conversational filler, preambles, and lengthy explanations for straightforward coding queries.
- Prioritize targeted edits over rewriting whole files.

## Dynamic Reasoning Escalation (Autonomous Thinking)
You are authorized to bypass fast/brief mode and escalate to deep reasoning (utilizing your maximum thinking tools and deep context analysis) without explicit user instruction ONLY when the task meets the following criteria:
1. Complex Architecture: Cross-file refactoring, state management overhauls, or breaking changes to core APIs.
2. Hard Debugging: Race conditions, memory leaks, silent failures, or issues involving complex asynchronous logic.
3. High Uncertainty: When the prompt requirements directly conflict with existing codebase patterns or introduce security risks.

## Compaction & Context Protocol
- Efficiently self-manage context. If context length begins to affect performance on a routine task, suggest a `/compact` or `/clear` command when moving to an unrelated sub-task.
- If deep reasoning is triggered under the Escalation rules, explicitly state why you are escalating (e.g., "Triggering deep analysis due to multi-file state conflict...").

## Development Server Rules
- Never run development servers (`npm run dev`, `uvicorn`, `next dev`, etc.) in the foreground.
- Always append background operators or use detached jobs (e.g., `npm run dev &` or detached background tasks).
- Never pipe watchers or log streams directly into the active prompt context.
