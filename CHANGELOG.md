# Changelog

All notable changes to the ADL website. Newest first.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Tags follow semver — see "Releases" on GitHub for the immutable checkpoints.

---

## [v1.4.3] — 2026-07-25 — Crawl verification + robots.txt / Search Console documented

No code change. Verified the post-canonical-fix crawl path and wrote down two things that are invisible from the repo.

- **Googlebot returns 200 on every indexable route** (`/`, `/services`, `/work`, `/contact`, `/hands-ai`, `/sitemap.xml`, `/robots.txt`) with no `cf-mitigated` header — Bot Fight Mode is still correctly off.
- **The served `robots.txt` is not `src/app/robots.ts`.** Cloudflare prepends a managed block (dashboard → AI Crawl Control) setting `Content-Signal: search=yes,ai-train=no,use=reference` plus `Disallow: /` for GPTBot, ClaudeBot, Google-Extended, CCBot, Bytespider, Amazonbot, Applebot-Extended and meta-externalagent. Google **search** is unaffected (`Google-Extended` is the training crawler, not the search crawler), but the site is invisible to AI assistants — a business trade-off set outside the repo, where nobody reading the code would find it. Editing `robots.ts` cannot remove any of it.
- **Search Console is a domain property**, so the sitemap box has no domain prefix and rejects a bare `sitemap.xml` as "Invalid sitemap address" — it needs the full `https://artemisdesignlabs.com/sitemap.xml`. Google last read the sitemap on 19 Jul 2026 with 3 URLs (the pre-fix set); re-submitted so it picks up 5.

Both recorded in `DEPLOYMENT.md` → **Search / crawling**.

---

## [v1.4.2] — 2026-07-25 — Dependabot alerts cleared (3 of 4)

`npm audit fix` could only resolve these by downgrading Next.js to **9.3.3**, so the two fixable ones are pinned forward with `overrides` in `package.json` instead. All are build-time-only transitives — none ships in the Worker bundle.

- **`sharp` → 0.35.3** (high) — inherited libvips CVEs, `GHSA-f88m-g3jw-g9cj`. Pinned by Next; overridden.
- **`postcss` → 8.5.23** (moderate) — XSS via unescaped `</style>` in stringify output. The direct devDependency was bumped and nested copies routed to it via `"postcss": "$postcss"` (npm rejects an override that conflicts with a direct dependency spec).
- **`body-parser` → 2.3.0** (low) — resolved by plain `npm audit fix`.

### `brace-expansion` is deliberately left alone — do not "fix" it
The remaining alert (`GHSA-mh99-v99m-4gvg`, DoS via unbounded expansion) has exactly one patched release, **5.0.8**, which **removed the package's default export**. minimatch's ESM build does `import expand from 'brace-expansion'`, so overriding it produces:

```
SyntaxError: The requested module 'brace-expansion'
does not provide an export named 'default'
```

Critically, **`npm run build` still passes** with that override in place — it never loads the failing path. Only `npm run cf:build`, which is what CI runs, fails. Anyone re-attempting this fix must verify with `cf:build`, not `build`, or they will push a broken deploy. It is reachable only through minimatch/glob in the eslint + opennextjs build chain, where the only input is this repo's own file paths, so it carries no runtime risk. Revisit once minimatch ships a release compatible with 5.0.8.

---

## [v1.4.1] — 2026-07-25 — Open Sans replaces KeplerStd, docs resynced, sitemap + contact deep-links fixed

Housekeeping pass after pulling `main` up to `12077e9`. No visual redesign — one font change, three bug fixes, and the documentation brought back in line with the code.

### Typography — Adobe Fonts dropped
- **KeplerStd is gone; Open Sans is the display face.** KeplerStd had never actually rendered — its Typekit `@import` was commented out behind a placeholder kit id (`use.typekit.net/XXXXXXX.css`) and no component referenced `--font-display`, so headlines fell back to Roboto.
- **Open Sans (600/700) now loads via `next/font/google`** alongside Roboto, so both faces are self-hosted from the app bundle — **no external font CDN, no Typekit account, nothing to configure outside the repo**. Removed the dead `@import` from `globals.css`.
- `--font-display` is applied **once**, via an `h1, h2` base rule in `globals.css`, rather than per component — new headings are correct by default and `font-sans` opts one back out. Roles swap by editing the two tokens in `tokens.css`; nothing names a font family directly.

### Fixes
- **`sitemap.ts` was missing two live pages.** `/services` and `/hands-ai` had been indexable but unlisted since the v1.4.0 restructure; both added. `/publication` stays out on purpose — it ships `noindex`.
- **`/services` → `/contact` deep links were dead.** The four "Get started →" CTAs pointed at `?type=build-track` / `?type=operate-track`, but the contact page only recognised `type === 'audit'` and its dropdown still listed the retired priced services (*"Design System Creation — $15-25K"* etc.) that no longer appear anywhere else on the site. Options are now Audit / Build Track / Operate Track / Not sure, and the handler preselects any valid option; the audit banner still shows for `?type=audit` only. `service` is a free-form string server-side, so no API change was needed.
- **Turnstile's fail-open is now loud.** `verifyTurnstile` still accepts submissions when `TURNSTILE_SECRET_KEY` is absent (a missing secret must not take the contact form down), but it logs a warning instead of passing silently — the Worker has observability on, so a vanished secret is now visible.

### Turnstile — verified working end to end
Audited rather than changed: `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set as a GitHub repo **variable** (inlined at build), `TURNSTILE_SECRET_KEY` is a GitHub **secret** synced to the Worker by the deploy job, and the Cloudflare Worker confirms the secret is present. The site key and the challenge-script loader are both inlined in the deployed `/contact` chunk. Spam protection is live. Note the site key is **not** in local `.env`, so the widget renders nothing in `npm run dev` and the form submits unverified locally — add it if you want to exercise the flow.

### SEO — every page was canonicalised to the homepage
- **`alternates: { canonical: SITE_URL }` in the root layout was inherited by every route**, so `/services`, `/work`, `/contact` and `/hands-ai` each shipped `<link rel="canonical" href="https://artemisdesignlabs.com">` — telling Google the entire site is a duplicate of the homepage and shouldn't be indexed separately. Verified against production before and after. Changed to `canonical: './'`, which resolves against `metadataBase` per route so each page is self-canonical.
- **`/contact` had no title of its own** — it's a Client Component (form state, Turnstile, Calendly) and so can't export `metadata`, leaving the highest-intent page on the site serving the generic homepage title. Added a passthrough `layout.tsx` carrying its title, description and OG data, matching the pattern already used for the archived client-component case studies.
- **Sitewide title and description moved onto the current positioning** — was still "We build the AI that builds your design infrastructure… Trained on 190K+ design-to-code examples" while every page led with governed UI infrastructure. Keywords retargeted accordingly.

### Fact audit
- **`190K+ AI training images` removed** from the homepage StatBar and the site metadata — no citable source, per the owner's "no made-up numbers" directive. The StatBar now runs 5 states / 0 Figma-only deliverables / WCAG 2.1 AA, all backed by the Build Track deliverables on `/services`, and its grid was corrected from 4 columns to 3 (it had been rendering 3 metrics in a 4-col grid).
- The `/work` client outcome figures and the 3 anonymous testimonials are **deliberately unchanged** — they need the owner's sources and client permission respectively, not a code change. Tracked in `Website-Content.md`.

### Docs
- **`CHANGELOG.md`** — v1.4.0 written up retroactively (the 17 commits had gone undocumented).
- **`CLAUDE.md`** — file tree, homepage composition, fonts, routes and env vars resynced; added the `_archived/` explanation and a list of the 11 unwired organisms that are dead code.
- **`Website-Content.md`** — rewritten; it still described the pre-June homepage.

---

## [v1.4.0] — 2026-06-23 → 2026-07-09 — Site narrowed to 6 pages, repositioned on UI infrastructure, Ramotion/Creative Navy design system

Seventeen commits by Electromau5 (`1a4e0ee` → `12077e9`), documented retroactively on 2026-07-25. This is the largest change since v1.2.0: the site was cut down to the pages that were actually finished, repositioned from "AI that builds your design infrastructure" to **"governed UI infrastructure"**, and re-skinned onto a new design system.

### Scope — 10 pages archived, 6 remain
- **`src/app/_archived/`** now holds `about`, `blog`, `clients`, `pricing`, `our-ai`, a duplicate `hands-ai`, `insight`, `marketplace`, `design-system-license`, `my-project-inbox`. The folder sits **outside the router** (`(site)` is the routed group), so these pages no longer build, route, or appear anywhere — reviving one means moving the folder back **and** re-adding it to `sitemap.ts` and the nav/footer link lists.
- **Live routes:** `/`, `/services`, `/work`, `/contact`, `/hands-ai`, `/publication` (noindex) + `/admin` + `/api/contact`. Inbound links to archived pages were removed from nav and footer at the same time.
- **`/services` is new** and absorbs what `/pricing` used to carry — Build Track / Operate Track, a 5-step process, "what changes after" outcomes, and two engagement cards. **Dollar figures were removed**: engagements are now "scoped after a discovery call" rather than listing $15–25K / $4–6K/mo.
- **Blog is now external** — nav and footer point at `medium.com/ai-ui` rather than an on-site route.

### Positioning
- Homepage headline is now **"The UI infrastructure your product team is missing."** with the hero framed around the missing owner of the design↔engineering layer. The hero's right rail is a **Capabilities panel** (Design Language Architecture, Figma-to-Code Pipeline, Agentic UI Generation, Drift Detection & Governance, Infrastructure Lifecycle Management).
- Primary CTA sitewide is **"Book a free audit"** → `/contact?type=audit`.
- **Public email moved to `pritish@artemisdesignlabs.com`** (footer, `CTASection`, JSON-LD `Organization.email`) — this supersedes the v1.3.1 switch to `hello@`.

### Design system — Ramotion colors + Creative Navy typography
- **Light-first**: `--color-bg-primary: #fafafa`, elevated `#ffffff`, text `#141414`; the dark theme is now the alternate (`[data-theme="dark"]` → `#141414` / `#262626`). Accent stays Ramotion blue `#2f77ea`.
- **Type**: Roboto via `next/font/google` replaces Geist Sans/Mono. A KeplerStd serif display face was also specified, but its Adobe Fonts `@import` was left commented out behind a placeholder kit id, so `--font-display` never resolved and nothing referenced it — the site rendered Roboto throughout. Resolved in v1.4.1 by dropping KeplerStd for Open Sans.
- Sections are built from named reference patterns (Creative Navy, Apexon, CRZY, Semiflat, Interactivism, Wandr Studio, Blink UX) — the pattern name is in a comment at the top of each component.
- **`px-10 lg:px-20` horizontal padding is now a hard sitewide rule** for every section container, nav and footer, enforced across all pages and documented in `CLAUDE.md`.
- Sections **alternate `--color-bg-primary` / `--color-bg-elevated`**; `CTASection` takes a `background` prop so it can continue whichever alternation its page ends on.

### Homepage recomposition
`Hero` → `ClientsSection` → `ServicesSection` → `StatBarSection` → `OperationalMoatSection` → `TestimonialsSection` → `CTASection`. Case studies came off the homepage; `StatBar` was removed and later reinstated with 3 metrics.

### Components
- **Client logos are now theme-aware SVGs** (`-light` / `-dark` per client) in a 4-column grid on desktop and a auto-advancing one-at-a-time carousel on mobile — replacing the v1.3.2 PNG chips and the animated marquee before them.
- **`BackToTop`** added to the `(site)` shell.
- **Nav**: logo enlarged; **mobile menu overlay now paints a solid background when open** (`12077e9`) — it was previously transparent and unreadable over page content.
- Calendly embed fixed on `/contact`.

### Analytics & dependencies
- **Google Analytics 4** (`G-SXX4NH3LQ9`) added alongside the existing Cloudflare Web Analytics beacon, plus a third-party **behavioral-insights tracker** (`behavioral-insights.vercel.app/tracker.js`).
- **15 Dependabot high alerts** cleared by bumping dev transitives (`8672c7e`).

### Undocumented at the time, noted here
- **Cloudflare Turnstile shipped** on the contact form (`atoms/Turnstile` + `siteverify` in `api/contact`), closing the v1.3.0 backlog item. It **fails open** — verification is skipped when `TURNSTILE_SECRET_KEY` is unset.
- **`sitemap.ts` was not kept in step** with the restructure: it listed only `/`, `/contact`, `/work`, omitting the new `/services` and `/hands-ai`. Fixed 2026-07-25 (`/publication` stays out — it's `noindex`).

---

## [v1.3.2] — 2026-06-18 — Client logo strip enlarged

- **Client logos now render ~3–4× bigger** on the homepage `ClientsSection` marquee. Root cause was the source PNGs, not the CSS: all 8 logos had **opaque white backgrounds** with the actual mark filling only ~25–40% of a 219×150 frame (AT&T's globe rendered ~16px tall in a 64px cell). Made every background **transparent** and trimmed each to its content bbox (`public/images/*-logo.png` — e.g. AT&T 219×150 → 80×38, NBCU → 148×18), then render them inside **uniform white rounded chips** (`bg-white rounded-xl`, even padding) so multi-color marks stay crisp at full brand color on the dark `#141414` strip.
- Dropped the `opacity-50` wash (chips are intentional at full strength), enlarged cells to `h-16 md:h-20 w-44 md:w-52`, tightened the gap. Originals recoverable from git history (commit before `d0902ad`).

---

## [v1.3.1] — 2026-06-17 — Public contact email → hello@

- **Public-facing contact email swapped to `hello@artemisdesignlabs.com`** — Footer, `CTASection` mailto, `/contact` "prefer email" box, and the `layout.tsx` JSON-LD `Organization.email`. Copy-reference docs (`README`, `Website-Content.md`) updated to match.
- **Form notifications still delivered to `itadmin@`** — `/api/contact/route.ts` `ADMIN_INBOX` is unchanged. `hello@` is a free **Google Workspace alias** on the `itadmin@` mailbox (added alongside a `noreply@` alias), so it forwards to the real inbox; the deploy was held until the alias was provisioned and test-delivered to avoid bouncing visitor mail. This reverses, for public display only, the v1.1.0 `hello@`→`itadmin@` canonicalization.

---

## [v1.3.0] — 2026-06-17 — Customer-acquisition pass, Ramotion redesign, typography system

Two threads landed together: a third-party customer-acquisition audit with fixes shipped across discoverability/trust/conversion, and a homepage redesign (the "Ramotion" design language, authored by Electromau5) that this session merged and then polished with a real type scale. Copy was preserved throughout the polish — only structure and font sizing changed.

### Discoverability — the #1 fix (site was invisible to Google)
- **Bot Fight Mode was ON** (`bot_management.fight_mode: true`) and 403-ing every crawler. `site:artemisdesignlabs.com` returned **zero** indexed pages. Disabled `fight_mode` via the Cloudflare API → homepage + sitemap now return **200** to Googlebot. (This is distinct from the v1.2.0 `security_level`/`browser_check` tuning; the free Bot Fight Mode toggle was separately on.)
- **Sitemap cleaned** (`sitemap.ts`): removed the broken `/nbcu`, dropped the 3 unfinished stub routes, added the real `/my-project-inbox`. Now lists 9 finished pages.
- **Google Search Console**: domain property verified, `sitemap.xml` submitted (Success, 9 URLs), homepage indexing requested.
- **Cloudflare Polish** (`lossy`) enabled on the zone for image auto-optimization.

### Content / SEO hygiene
- **Removed `/nbcu`** — it was a verbatim duplicate of the HANDS AI case study (wrong client/personas/images) sitting in the sitemap.
- **`noindex` on the 3 stub pages** (`/publication`, `/marketplace`, `/design-system-license`) — server `robots` metadata on the static one, a passthrough `layout.tsx` on the two client-component ones — and dropped them from the sitemap. Code kept.
- **Unique metadata** on case studies (`/hands-ai`, `/insight`, `/my-project-inbox`) instead of inheriting the homepage default; renamed the mislabeled `HandsAIPage` function on `/my-project-inbox`.
- **`/insight`** intro paragraph was printed twice — de-duplicated.

### Trust
- **Named founder section** on `/about` ("who's behind it") — Pritish Sai Kannan, title, a bio sourced verbatim from pritishsai.com, plus personal + company LinkedIn links. The page was previously 100% anonymous ("we"/"founders").
- **Socials wired**: footer LinkedIn + GitHub icon links; JSON-LD `Organization.sameAs` (company LinkedIn + GitHub org) + a `founder` Person — was an empty `sameAs: []`.
- Client logo wall confirmed as real/permissioned by the owner — kept as-is.

### Conversion
- **Free-audit CTA now works**: `/contact?type=audit` pre-selects an audit service option and shows an acknowledgement banner (the param was silently dropped before).
- **Calendly scheduler** embedded inline on `/contact` (`calendly.com/itadmin-artemisdesignlabs/30min`, themed to the palette) with a `#book-a-call` anchor; the "Book a Call" CTAs (nav, hero, CTA, work, about) deep-link to it. CTASection offers all three paths (book a call / free audit / email).
- **Contact email unified** to `itadmin@` everywhere (the redesign had introduced `hello@` in one spot; `hello@` is not yet provisioned — the domain is on Google Workspace, so a free alias is the intended route, not Cloudflare Email Routing which would break the MX).

### Security / infrastructure / repo
- **`/admin`** is gated by **Cloudflare Access** (302 → Access login). The session added a fail-closed Basic Auth middleware as a backstop, then **removed it** once Access was confirmed — it was redundant and double-prompted; `ADMIN_BASIC_AUTH` secret-sync and the GitHub/Worker secrets were deleted too.
- **Deploy token rotated**: the original "Edit Cloudflare Workers" token was deleted mid-session (breaking CI); replaced with one combined token (Workers deploy + Zone Settings + Bot Management + Firewall edit) stored in both the GitHub `CLOUDFLARE_API_TOKEN` secret and `.env`.
- **Stray `zoho-verification` TXT record** deleted from DNS (left over from an abandoned Zoho setup).
- **Repo set private** (`artemis-design-labs/adl-website`).

### Ramotion redesign (homepage — by Electromau5)
- New `tokens.css` — **dark-first "Ramotion" language, electric-blue accent `#2f77ea`** (was violet `#7C3AED`).
- New homepage composition: `Hero` (with a "WHAT WE BUILD" panel), `ProblemSection` ("Two Tracks. One Mission."), `OperationalMoatSection`, `CaseStudySection`, `TestimonialsSection` (dedicated), `ClientsSection`, `CTASection`. New components also added: `TwoTracksSection`, `WhoThisIsForSection`, `StatBarSection`, `HeroProductVisual`, and a `useFadeInOnView` scroll-reveal hook.

### Typography system + structural polish (this session, on top of the redesign)
- **Reset the type scale** in `tokens.css` to a **17px body on a ~1.25 (major-third) ratio** with real `h1→h4` hierarchy. The redesign's scale jumped `--text-display: 92px` straight to `--text-h1: 32px` (nothing between) and had `h3 == h4`. Components now route through it via `text-[length:var(--text-h2)]` etc.
- **Hero**: bigger eyebrow/body/CTAs; the **"WHAT WE BUILD" panel** is now a checkmark capabilities list (was rows with a right-arrow `→` that looked clickable but weren't — the panel is `aria-hidden` decorative).
- **ProblemSection** ("Two Tracks"): icon now sits **inline with the title** (was a block stacked above), all text up-sized.
- **`/work`**: the metric pill and "View case study" were `inline-flex` and sat side-by-side with no gap — made block-level so they stack; project title reduced from `text-3xl/4xl` (== the section heading) to `text-2xl/3xl`.
- **Logo strip**: enlarged and de-jankified. The source logo PNGs were **16,000–21,000 px wide (up to 327 megapixels)** rendered at 64px — resized to fit 440×150 with Pillow, cutting the strip from **~6.9MB to ~47KB (99%)**; added `decoding="async"`.
- **Pricing**: bigger table headers, more row padding, larger FAQ question/answer text (info-density pass; copy unchanged).

---

## [v1.2.0] — 2026-06-03 — Sub-pages redesigned, full site under one shell, WCAG AA pass

Same day as v1.1.0, but a noticeably bigger user-visible change: every public page now lives inside a single shared layout and uses the same dark/violet design system. The homepage looked great in v1.1.0 and the rest of the site didn't — that's fixed here. Also closes out the spam-protection, email, and authentication wiring that was stubbed in v1.1.0.

### Site architecture
- **`src/app/(site)/` route group** with its own `layout.tsx` that renders `Navigation` + `<main id="main-content">` + `Footer`. Every public page (homepage + 12 sub-routes) was moved into it. URL paths are unchanged because route-group parens don't appear in the URL.
- Pages now contain only their content — the duplicated `Navigation` / `Footer` / `main` / wrapping `<div className="min-h-screen ...">` were stripped from each page file.
- `admin/` and `api/*` stay outside the group: `/admin` is private and shouldn't render the marketing nav, API endpoints have no shell at all.

### Sub-pages redesigned (5)
All matching the homepage cadence: mono `›` eyebrows, oversized Geist semibold display headlines with a violet second-line emphasis, rounded-xl/2xl cards with hover-to-accent border, ambient violet wash on CTA sections.

- **`/contact`** — sticky "what to expect" left column + 12-col grid + form card with `Field`/`SelectField`/`TextareaField` atoms. Turnstile widget rendered when the public key is configured. Success state is a centered card with a violet check-circle.
- **`/about`** — "We built this for the founders we used to be." Sticky-left "origin story" header + 4-paragraph confession; 4-up stats (190K+ training images, 3-4 wks delivery, $0 figma-only output, 24h first response); 4 principle cards with the hover-promotes-to-accent pattern.
- **`/pricing`** — 3 tier cards (popular in violet glow + most-popular pill); accordion FAQ via `<details>`/`<summary>` with chevron-toggle; comparison table with row-spaced layout and ADL row highlighted in violet.
- **`/work`** — 4-up results grid + alternating-direction case studies on a 12-col grid (image 7 cols, content 5 cols) with hover border + 3% image scale; mono pill tags; per-project violet metric callout.
- **`/our-ai`** — Human/AI 2-column split with circular icon + mono section header at top of each panel; 4-up tech-stack cards (190K+ images, every-project learning, 6+ frameworks, 94% first-PR approval); violet-highlighted comparison table.

### Legacy pages brought onto the design system
- **`/hands-ai`, `/insight`, `/nbcu`, `/my-project-inbox`**: outer wrappers no longer hardcode `bg-white text-gray-900`; top padding bumped from `py-20` to `pt-32 pb-20` so content clears the fixed nav. All inline `bg-white`, `text-gray-*`, `border-gray-*` replaced with token equivalents (`bg-elevated`, `text-primary/secondary/tertiary`, etc.). Internal structure preserved.
- **`/marketplace`, `/publication`, `/design-system-license`**: same token sweep plus primary-button upgrades to the violet+glow treatment, input focus rings, AA-passing placeholder contrast, `<label htmlFor="…">` associations added on inputs.

### Contact + email + spam protection
- **Resend domain verified** for `artemisdesignlabs.com` (DKIM + SPF + MX + DMARC). From-address default flipped from `onboarding@resend.dev` to `noreply@artemisdesignlabs.com`. `Reply-To` stays the form submitter so hitting reply replies to them.
- **Cloudflare Turnstile** site key created (`adl-website-widget`, Managed mode, scoped to `artemisdesignlabs.com`). Public site key wired as a GitHub repo *variable* (build-time inlined into the client bundle); secret key as a repo *secret* and synced to the Worker on every deploy. Server-side verifies against `siteverify` before writing to MongoDB or emailing.
- **`/admin` behind Cloudflare Access** — Self-hosted Access app, email-restricted allow policy locked to `itadmin@artemisdesignlabs.com`. Anyone else hitting `/admin/*` is bounced to a one-time-PIN email challenge.
- **Cloudflare Web Analytics** beacon wired into `layout.tsx` (`next/script` strategy `afterInteractive`), reading the existing `artemisdesignlabs.com` site token. Privacy-friendly, cookieless.
- **Bot Fight Mode tuning**: zone `security_level` lowered to `low`, `browser_check` disabled so search-engine crawlers and social link previewers stop hitting the JS challenge.

### WCAG 2.1 AA pass
- New `--color-accent-text` (`#9B6BFF` on dark, AAA on white) for inline accent TEXT — the `#7C3AED` accent stays for fills/borders. Small mono eyebrows in `›` accent are now AA-clean.
- `--color-text-tertiary` brightened from `#7A7A87` to `#8E8E9C` so 10-12px mono labels clear 4.5:1 with comfortable margin.
- Skip-to-content link in the root layout, styled via a `.skip-link` utility that slides down in the accent when focused. All pages wrap content in `<main id="main-content">`.
- Hero rotating-command animation, AboutUs services carousel, and MetricsTestimonials carousel all check `prefers-reduced-motion: reduce` and disable auto-advance / typing when set. `globals.css` wraps `html { scroll-behavior: smooth }` in `@media (prefers-reduced-motion: no-preference)`.
- `ThemeToggle`: visible pill stays 56×28 px, but the surrounding `<button>` gets a 44×44 minimum hit target.
- Carousel `prev`/`next` arrow buttons go from 40×40 to 44×44; carousel dots live inside `h-11`/`min-w-44` buttons so tapping near them registers.
- `ClientsSection`: no longer `aria-hidden`s the only client-name source. The visible (doubled) marquee is hidden from AT; an `sr-only` `<ul>` exposes the 8 client names cleanly. Section gets `aria-labelledby`.
- Decorative icons across `/hands-ai`, `/my-project-inbox` get `alt=""` instead of `alt="Vision Icon"` etc. The mis-labeled `alt="HANDS AI Cover"` on `/my-project-inbox` corrected.
- Two unescaped quote pairs in `/pricing` fixed.
- Form input placeholder color promoted from `text-muted` to `text-tertiary` so it clears AA on the inset surface.

### Email link affordance
- Every `mailto:` (Footer, CTASection, /contact "prefer email" box) now renders with a small envelope SVG so users understand the click opens their mail client instead of navigating in-app.

### ClientsSection logo marquee tuning
- Logo cells from 64-80 px to 112-128 px tall; cell width 128-160 → 192-240 px; gap dropped from 48-64 px to 20-32 px so more brands stay in the viewport at once.

### Stale docs cleanup
- Deleted `BUGS.md` (Feb 2025 historical bug log, all entries superseded) and `STATUS-REPORT.md` (April 3-7 2026 snapshot).
- `README.md` rewritten from 568 to ~70 lines: drops the duplicated content reference, fixes "Pricing hidden from nav" stale fact, points at `DEPLOYMENT.md` / `CLAUDE.md` / `CHANGELOG.md` for details.
- `Website-Content.md` is now V2-only (V1 sections deleted with the ContentSwitcher in v1.1.0).

### Known follow-ups
- Legacy case-study pages (`/hands-ai`, `/insight`, `/nbcu`, `/my-project-inbox`) are token-clean but structurally still the pre-redesign era. A proper redesign pass to match the homepage cadence is deferred.
- `next/image` migration for legacy `<img>` tags on those pages — deferred.
- Credential rotation (from v1.0.0 setup session) — runbook stands, still optional.

---

## [v1.1.0] — 2026-06-03 — Brand redesign + AI-tech foundation

A same-day follow-up to the v1.0.0 cutover. v1.0.0 was about getting the site reliably hosted on Cloudflare. v1.1.0 is about **what visitors actually see**: a deliberate AI-tech-forward visual direction, founder-to-founder copy, and the infrastructure pieces (Prisma removed, email + spam-protection plumbing, dead-code purge) needed to safely ship updates from here.

### Visual system
- **Dark-primary palette** with light mode as a polished alternate (deeper violet for AAA contrast). All surfaces, borders, and type roles rebuilt around new tokens in `src/styles/tokens.css`. Variable names preserved so existing components inherit.
- **Electric violet accent** (`#7C3AED` on dark, `#6D28D9` on light) drives CTAs, links, status pills, and headline emphasis.
- **Geist Sans + Geist Mono** typography via the `geist` npm package. Inter Google Fonts `<link>`s dropped. Larger display sizes (clamp 2.5rem–5rem on hero) with -0.025em tracking.
- **Brand mark**: SVG Artemis arrow in violet + Geist wordmark via the new `src/components/atoms/Logo` atom. Replaces the unbranded uppercase wordmark.
- **Theme toggle**: pill switch with sun/moon icons and a violet-glowing thumb. `role="switch"`, `aria-checked`, full keyboard nav. Replaces the prior near-invisible 4×4px square.
- **Primary CTA pattern**: violet fill, white text, arrow icon, hover shadow-glow, active translate-y. Used everywhere a primary action lives.
- **Mono eyebrow pattern**: `font-mono text-[11px] uppercase tracking-[0.18em] text-accent` prefixed with `›`. Used on every section.

### Homepage sections (all rebuilt)
- **Hero**: terminal-style mono prompt (`> ./adl train --status=production`) with typewriter animation, oversized Geist display headline, violet-second-line emphasis, ambient radial accent glow, faint masked grid background. New V2 copy.
- **ProblemSection**: 5-card grid, hover promotes card border + bg to accent, animated divider, mono numbers, italic transition + scroll CTA.
- **AboutUsSection**: founder-led origin story copy, 3-stat block (190K+ images / 3-4 wks delivery / 100% code parity), services carousel with pause-on-hover via `ref`, role="tablist" dots, services updated with investment + timeline.
- **MetricsTestimonialsSection**: 2×2 metrics grid with violet values, testimonial card with oversized open-quote glyph and accent avatar.
- **ClientsSection**: horizontal infinite marquee of 8 real client logos (AT&T, Verizon, NBCU, NYCPS, NYCERS, CMA, Qualitrol, Freshop) — bumped from placeholder boxes. Grayscale at 80% opacity, hover-to-color, edge mask, pause on hover, `prefers-reduced-motion` respected. Cells enlarged in a follow-up to 112-128px tall.
- **CTASection**: "Let's have a founder-to-founder conversation." headline, ambient violet wash, contact card with check-icon list.

### Site-wide
- **New favicon**: `src/app/icon.svg` + `apple-icon.svg` — violet arrow on dark rounded-rect. Old `favicon.ico` removed.
- **Footer rebuild**: Logo atom, 12-col grid, mono eyebrows, status pill with violet glow, accent hover on links, contact column lifted out, Pricing added to nav. Server component now.
- **Navigation rebuild**: Logo atom, pill ThemeToggle, prominent violet "Book a Call" CTA with arrow + glow, focus-visible rings throughout, 44×44 mobile hit target.
- **Email canonicalized**: All `hello@artemisdesignlabs.com` references replaced with `itadmin@artemisdesignlabs.com` (Footer, CTASection, /contact, layout JSON-LD, README).
- **`html` defaults to `data-theme="dark"`** instead of `light`. ThemeProvider default flipped to match.

### V1/V2 ContentSwitcher and related infrastructure — removed
The dev tool that toggled between V1 and V2 copy per section was generating runtime noise across 7 organisms, depended on a `/api/save-content-config` route that `git push`ed to `test-content-1`, and forced a `ContentVersionProvider` into the tree. Single source of truth wins.

- Deleted: `src/components/ContentSwitcher.tsx`, `src/context/ContentVersionContext.tsx`, `src/components/DevOnly.tsx`, `src/app/api/save-content-config/`.
- Stripped `V1_CONTENT` blocks and `version === 'v1'` ternaries from `Hero`, `ProblemSection`, `HowItWorksSection`, `OurAIPreviewSection`, `SocialProofSection`, `CaseStudySection`, `ServicesSection`. V2 copy lifted to `CONTENT`.
- In-page V1/V2 chips removed.
- Remote branches `test-content-1` and `test-content-2` deleted (no longer referenced anywhere).

### Database — Prisma removed
Prisma's query engine couldn't load in the Workers runtime, throwing a server-side exception on `/admin` (digest `888017765`).

- Replaced `@prisma/client` + `prisma` with the native `mongodb` npm driver.
- New `src/lib/mongo.ts` — cached `MongoClient` + `Db` singleton per isolate, `ContactDoc` interface.
- `/api/contact/route.ts` writes to `db.collection('contacts')`.
- `/admin/page.tsx` reads from the same collection. Still `force-dynamic` + `runtime: 'nodejs'`.
- Deleted `prisma/` directory entirely (`schema.prisma`, migrations, `dev.db`). `prisma generate` no longer in any build script.

### Contact form — Resend email + Cloudflare Turnstile
- **Email** notifications via Resend on every submission to `itadmin@artemisdesignlabs.com` with the submitter's email as `Reply-To`. Skipped silently if `RESEND_API_KEY` isn't set (so dev and pre-rollout work). From-address defaults to `onboarding@resend.dev` until a domain is verified in Resend.
- **Spam protection** via Cloudflare Turnstile. New `src/components/atoms/Turnstile/` widget atom activates only when `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set; loads the CF challenges script on demand. Submit button stays disabled until a token arrives. Server verifies the token against `siteverify` before writing to Mongo or emailing. Fails open when `TURNSTILE_SECRET_KEY` is unset.

### SEO + a11y
- `layout.tsx` metadata bumped: `metadataBase` + canonical URL, title template, Open Graph image, Twitter card, JSON-LD `Organization` block.
- New `src/app/robots.ts` allows everything except `/admin` and `/api/`, points crawlers at `/sitemap.xml`.
- New `src/app/sitemap.ts` enumerates 12 public routes with priority + changeFrequency hints.
- `role="switch"` / `role="menubar"` / `role="tablist"` applied on toggle, nav, carousels. `aria-label` / `aria-controls` / `aria-expanded` thread through. `focus-visible` rings everywhere.

### Dev experience
- **Pre-commit hooks**: `husky` v9 + `lint-staged` v17. `.husky/pre-commit` runs `npx lint-staged` which runs `next lint --fix --file` on staged JS/TS/CSS/MD and `tsc --noEmit` on staged TS. `prepare` script activates the hook on `npm install`. `typecheck` script added.
- **Workflow rename**: deploy step renamed to "Sync Worker runtime secrets". Now bulk-syncs `DATABASE_URL` (required), `RESEND_API_KEY` (optional), `TURNSTILE_SECRET_KEY` (optional) — missing optionals log a skip instead of failing.

### Dead-code purge
Verified zero importers from any active route, then deleted:
- `src/app/components/` — entire tree of pre-restructure leftovers (23 files, 7 dirs): `About/`, `Atoms/`, `modals/`, `molecules/`, `templates/`, `FullScreenMenu.tsx`.
- `src/app/variables.css` — old standalone token file (peachy/cream pre-Severance palette).
- `src/components/molecules/SectionHeader/` and the now-empty `molecules/` dir.

### Docs
- `CLAUDE.md` rewritten from scratch. The Feb 2025 Severance / Inter / Prisma stack notes were stale. New version: accurate stack table, palette tokens, current file layout, conventions, workflow, security follow-ups, and an explicit "do not revive" list.
- `CHANGELOG.md` — this entry.

### Security follow-ups (open)
- `/admin` still has **no authentication**. Set up a Cloudflare Access policy on `/admin/*` (dashboard step — needs your CF login).
- `MongoDB`, `CF`, and `GitHub PAT` credentials from the v1.0.0 cutover session live in the chat transcript that produced them. Rotate them when convenient.

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
