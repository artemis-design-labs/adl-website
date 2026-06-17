# ADL Website Content

Live copy reference. Mirrors what's actually rendered on production (the V2 voice — V1 was deleted along with the ContentSwitcher).

For component implementations, see `src/components/organisms/`. For the design system map, see `CLAUDE.md`.

---

## Homepage

### 1. Hero — `src/components/organisms/Hero`

**Rotating mono eyebrow** (cycles through these, ~2.4s hold per command):
- `$ ./adl train --status=production`
- `$ ./adl generate component button --states=5`
- `$ ./adl audit design-system --target=figma`
- `$ ./adl sync tokens --from=figma --to=react`
- `$ ./adl validate --wcag=2.1AA`
- `$ ./adl diff figma:main code:main`
- `$ ./adl handoff --format=react --typed`
- `$ ./adl review pr/847 --auto-fix`
- `$ ./adl scaffold component card --variants=3`
- `$ ./adl ship --reviewed-by=senior`

**Headline:** We Build the AI That Builds / *Your Design Infrastructure.* (second line in accent)

**Subheadline:** Founder-built. Human-validated. Trained on 190,000+ production design-to-code examples. We solve design-to-development friction because we lived it ourselves.

**CTAs:** Book a Conversation (violet, primary) · Get a Free Audit (outline, secondary)

**Trust line:** Trusted by product teams in **Health · Fintech · Enterprise**

---

### 2. Problem Section — `src/components/organisms/ProblemSection`

**Eyebrow:** › we've lived this — here's what we know

**Headline:** These problems aren't new. / *We had them too.*

**Description:** Before we built ADL, we were on the other side — scaling startups, burning runway on agency retainers, watching engineers waste sprints translating Figma files nobody asked them to translate. We've lived every one of these problems. That's why we stopped outsourcing the solution and built our own.

**Cards (01-05):**
1. Your engineers are deciphering Figma files instead of shipping features.
2. Enterprise buyers are noticing what your team has learned to ignore.
3. Design debt is compounding while you're focused on features.
4. Traditional agencies aren't built for how startups actually work.
5. Most "AI-powered" tools generate code nobody wants to deploy.

**Transition:** We didn't start ADL because we saw a market opportunity. We started it because we lived these problems as founders and couldn't find anyone who solved them properly — so we built the AI to do it ourselves.

---

### 3. About Us — `src/components/organisms/AboutUsSection`

**Eyebrow:** › about adl

**Headline:** Built by founders. / *For founders.*

**Body:**
> We're ex-startup operators who burned years of runway on agency retainers, handoff cycles, and Figma files our engineers couldn't implement.
>
> When the AI tooling caught up to the problem, we stopped waiting for someone else to fix it and built it ourselves. Now we ship the design infrastructure we wished we'd had — for the next generation of founders walking the same path.

**Stats:**
- **190K+** training images
- **3-4 wks** average delivery
- **100%** code parity

**Services carousel (auto-advance, pause on hover):**

| # | Title | Tagline | Price | Timeline |
|---|---|---|---|---|
| 01 | Design System Creation | "We've built this from scratch — for our own startups." | $15,000 – $25,000 | 3-4 weeks |
| 02 | Design System Maintenance | "Infrastructure without maintenance is debt waiting to happen." | $4,000 – $6,000 / mo | 6-month minimum |
| 03 | Design-to-Code Handoff | "Your designers did the work. Our AI finishes the job." | $8,000 – $15,000 | 2-3 weeks |

---

### 4. Metrics + Testimonials — `src/components/organisms/MetricsTestimonialsSection`

**Metrics eyebrow:** › by the numbers
**Metrics headline:** AI-Powered Results

| Value | Label | Description |
|---|---|---|
| 190K+ | Training images | Powering our proprietary AI models |
| 3-4 wks | Not 3-4 months | Average delivery for a full system |
| 5 states | Per component | Loading · error · empty · partial · denied |
| 0 | Figma-only output | Every design ships with production code |

**Testimonials eyebrow:** › testimonials
**Testimonials headline:** Founders who trust us

3 quotes — CTO Series A Healthcare SaaS, Founder Seed-Stage Fintech, VP Eng Series B Analytics. Auto-advance carousel.

---

### 5. Clients — `src/components/organisms/ClientsSection`

Horizontal infinite marquee. Real logos: **AT&T · Verizon · NBCU · NYCPS · NYCERS · CMA · Qualitrol · Freshop**. Grayscale at 80%, hover-to-color, pause on hover, respects `prefers-reduced-motion`.

**Eyebrow:** Our Clients
**Headline:** Helping teams at companies you'd recognize
**Trust line:** Trusted by product teams in Health, Fintech, and Enterprise

---

### 6. CTA — `src/components/organisms/CTASection`

**Eyebrow:** › get started
**Headline:** Let's have a / *founder-to-founder* / conversation.
**Subhead:** No pitch deck. No pressure. Just a real talk about what you're building, what's slowing you down, and whether we're the right fit. We've been on your side of this call — we know what you're looking for.

**CTAs:** Book a Conversation (violet) · Get a Free Audit (outline)

**Trust note:** We respond within 24 hours · usually faster

**Contact card on the right:** hello@artemisdesignlabs.com · Remote-first · "What to expect" 3-bullet list.

---

## Navigation

| Label | Route |
|---|---|
| About | `/about` |
| Our AI | `/our-ai` |
| Work | `/work` |
| Pricing | `/pricing` |
| **Book a Call** *(violet CTA)* | `/contact` |

## Footer

| Section | Items |
|---|---|
| Brand | "We build the AI that builds your design infrastructure. Founder-built. Human-validated. Production-ready." + violet "Available for new projects" pill |
| Services | Design System Creation · Design System Maintenance · Design-to-Code Handoff |
| Company | About · Our AI · Work · Pricing · Contact |
| Contact | hello@artemisdesignlabs.com |
| Bottom row | © year + "Built with care · trained on production" |
