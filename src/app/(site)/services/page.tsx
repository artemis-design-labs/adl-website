import Link from 'next/link';
import type { Metadata } from 'next';
import { cn } from '@/lib/cn';
import { CTASection } from '@/components/organisms/CTASection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Two engagement tracks. One mission: UI infrastructure that ships, scales, and stays governed. Build Track, Operate Track, Agentic Ecosystem, and UI Forge.',
};

const SERVICES = [
  {
    num: '01',
    title: 'Build Track',
    tagline: 'From fragmented to governed in 3–4 weeks.',
    description:
      'We audit your UI infrastructure, then build a custom AI-powered governance system — component architecture, drift detection, and a Figma-to-React pipeline your team owns after delivery.',
    features: [
      'User Research · Token Architecture · Component Audit',
      'Figma Components · React · Storybook',
      'WCAG 2.1 AA · Accessibility Baked In',
      'Governance Layer · Drift Detection',
    ],
    href: '/contact?type=build-track',
  },
  {
    num: '02',
    title: 'Operate Track',
    tagline: 'We run your UI infrastructure. You ship product.',
    description:
      'We take over and run your entire UI infrastructure operation. Drift monitoring, governed component delivery, governance enforcement, and monthly health reports.',
    features: [
      'Up to 5 Components/Month · Figma + Code',
      'AI Drift Detection · Monthly Health Reports',
      'Office Hours · Design + Engineering',
      'Governance · Scales 5 to 500',
    ],
    href: '/contact?type=operate-track',
  },
  {
    num: '03',
    title: 'Agentic Ecosystem',
    tagline: '500-person quality. 15-person startup pricing.',
    description:
      'A master UI Infrastructure Architect agent coordinating specialized sub-agents that autonomously govern, maintain, and scale your frontend infrastructure.',
    features: [
      'Master UI Infrastructure Agent · Autonomous Governance',
      'Token Validation Pipeline · Before Code Merge',
      'Figma ↔ React Sync · Bidirectional · Continuous',
      'WCAG 2.1 AA · Automated Checks',
    ],
    href: '/contact?type=agentic',
  },
  {
    num: '04',
    title: 'UI Forge',
    tagline: 'Figma in. Production React out.',
    description:
      'Our internal AI engine converts Figma designs into production-ready React — all 5 interaction states, full token integration, governance review before output touches your codebase.',
    features: [
      'TypeScript + Tailwind · Production Ready',
      'Full State Coverage · Beyond the Happy Path',
      'Performance Optimization · 10K+ Row Virtualization',
      'PR-Ready · Passes Review on First Submission',
    ],
    href: '/contact?type=ui-forge',
  },
];

const PROCESS = [
  {
    num: '01',
    title: 'UI Audit',
    description: 'We map your component drift, token sprawl, and handoff gaps in 48 hours.',
  },
  {
    num: '02',
    title: 'System Architecture',
    description: 'Token hierarchy, component API, governance rules — designed for your stack.',
  },
  {
    num: '03',
    title: 'AI-Assisted Build',
    description: 'Our agents convert Figma to production React, state by state.',
  },
  {
    num: '04',
    title: 'Governance Layer',
    description: 'Drift detection, enforcement rules, and monthly health reports.',
  },
  {
    num: '05',
    title: 'Handoff or Operate',
    description: 'Your team takes ownership — or we keep running it under the Operate Track.',
  },
];

const OUTCOMES = [
  '25+ components in Figma AND your framework',
  'Design tokens synced across the entire product',
  'Full state coverage: loading · error · empty',
  'Storybook documentation built for engineers',
  'WCAG 2.1 AA accessibility from day one',
  '30-day post-delivery support included',
];

const PRICING = [
  {
    num: '01',
    name: 'Build Track',
    descriptor: 'Fixed Scope · 3–4 Weeks',
    price: '$15K',
    priceRange: '– $25K',
    priceNote: 'one-time',
    featured: false,
    features: [
      '25+ components: Figma + React',
      'Full token architecture',
      'All 5 interaction states',
      'Storybook docs',
      'WCAG 2.1 AA baked in',
      '30-day support',
    ],
    href: '/contact?type=build-track',
  },
  {
    num: '02',
    name: 'Operate Track',
    descriptor: 'Monthly Retainer · Ongoing',
    price: '$4K',
    priceRange: '– $15K',
    priceNote: 'per month',
    featured: true,
    features: [
      'Up to 5 new components/month',
      'AI drift detection + alerts',
      'Monthly health reports',
      'Office hours included',
      'Governance enforcement',
      'Priority response SLA',
    ],
    href: '/contact?type=operate-track',
  },
  {
    num: '03',
    name: 'UI Forge',
    descriptor: 'Per Engagement · 2–3 Weeks',
    price: '$8K',
    priceRange: '– $15K',
    priceNote: 'per engagement',
    featured: false,
    features: [
      'Figma → production React',
      'TypeScript + Tailwind',
      'Full state coverage',
      'Performance optimization',
      'PR-ready first submission',
      'Framework agnostic',
    ],
    href: '/contact?type=ui-forge',
  },
  {
    num: '04',
    name: 'Agentic Ecosystem',
    descriptor: 'Custom Scope · Always On',
    price: 'Custom',
    priceRange: '',
    priceNote: 'scoped per org',
    featured: false,
    features: [
      'Master UI Architect agent',
      'Automated drift detection',
      'Figma ↔ React sync',
      'Token validation pipeline',
      'WCAG automated checks',
      'Scale-stage governance',
    ],
    href: '/contact?type=agentic',
  },
];

// CRZY accent line colors — signature rainbow separator
const CRZY_LINES = [
  '#FF6B9D',
  '#A78BFA',
  '#3B82F6',
  '#14B8A6',
  '#84CC16',
  '#F59E0B',
];

export default function ServicesPage() {
  return (
    <>
      {/* ── 01 HERO — CRZY Design ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-primary)] pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-6">
            Services
          </p>

          <h1
            className={cn(
              'text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.04em]',
              'text-[var(--color-text-primary)] mb-8'
            )}
          >
            Build the infrastructure.<br />
            Then run it.
          </h1>

          {/* CRZY signature: multicolor horizontal accent lines */}
          <div className="flex mb-8" aria-hidden="true">
            {CRZY_LINES.map((color, i) => (
              <div
                key={i}
                className="h-[3px] flex-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.65] max-w-[520px] mb-10">
            ADL builds and operates governed UI infrastructure for enterprise B2B startups.
            Fixed-scope engagements, agentic automation, and ongoing governance — designed
            to scale from 5 to 500 engineers without rebuilding.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact?type=audit"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
                'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-bold text-[14px]',
                'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
                'active:brightness-90 transition-all duration-150'
              )}
            >
              Book a free audit
            </Link>
            <Link
              href="#services"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
                'border border-[var(--color-border)] text-[var(--color-text-secondary)] font-bold text-[14px]',
                'hover:border-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                'transition-all duration-150'
              )}
            >
              View services
            </Link>
          </div>

        </div>
      </section>

      {/* ── 02 SERVICES LISTING — Semiflat ──────────────────────────────────── */}
      <section
        id="services"
        className="bg-[var(--color-bg-elevated)] border-y border-[var(--color-border)] py-20 md:py-28"
      >
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            What We Do
          </p>

          <h2
            className={cn(
              'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]',
              'text-[var(--color-text-primary)] mb-12 max-w-[600px]'
            )}
          >
            Four ways to engage.<br />One standard of output.
          </h2>

          {/* Semiflat 2×2 numbered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                className={cn(
                  'py-10 pr-10',
                  // teal top border on every cell
                  'border-t-2 border-t-[var(--color-accent)]',
                  // right border on odd (left column)
                  i % 2 === 0 && 'md:border-r md:border-r-[var(--color-border)]',
                  // extra left padding on right column
                  i % 2 === 1 && 'md:pl-10',
                  // bottom border on first row
                  i < 2 && 'border-b border-b-[var(--color-border)]',
                )}
              >
                <span className="block font-[var(--font-mono)] text-[11px] text-[var(--color-accent)] uppercase tracking-[0.14em] mb-3">
                  {svc.num}
                </span>

                <h3 className="text-[20px] font-bold text-[var(--color-text-primary)] mb-1 leading-[1.2]">
                  {svc.title}
                </h3>
                <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-[0.1em] mb-4">
                  {svc.tagline}
                </p>

                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.65] mb-5">
                  {svc.description}
                </p>

                {/* Semiflat dot-separated feature tags */}
                <div className="space-y-1.5 mb-6">
                  {svc.features.map((f) => (
                    <p key={f} className="text-[12px] text-[var(--color-accent)] leading-[1.5]">
                      {f}
                    </p>
                  ))}
                </div>

                <Link
                  href={svc.href}
                  className="font-[var(--font-mono)] text-[12px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 03 PROCESS — Semiflat ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-20 md:py-28">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            How We Work
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-14">
            <div>
              <h2
                className={cn(
                  'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]',
                  'text-[var(--color-text-primary)]'
                )}
              >
                From audit to governed infrastructure.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.7]">
                Our engagements are structured to move fast without cutting corners.
                We start with a focused discovery phase, then move through architecture,
                AI-assisted build, and governance — keeping you informed at every stage
                without overwhelming your calendar.
              </p>
            </div>
          </div>

          {/* Semiflat numbered step columns */}
          <div className="grid grid-cols-1 sm:grid-cols-5 border-t-2 border-t-[var(--color-accent)]">
            {PROCESS.map((step, i) => (
              <div
                key={step.num}
                className={cn(
                  'pt-8 pb-10 pr-6',
                  i > 0 && 'sm:pl-6',
                  i < PROCESS.length - 1 && 'border-b sm:border-b-0 sm:border-r border-[var(--color-border)]'
                )}
              >
                <span className="block font-[var(--font-mono)] text-[11px] text-[var(--color-accent)] uppercase tracking-[0.14em] mb-4">
                  {step.num}
                </span>
                <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] mb-2 leading-[1.2]">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.65]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Semiflat "Typical outcomes" checkmark section */}
          <div className="mt-14 pt-10 border-t border-[var(--color-border)]">
            <p className="font-[var(--font-mono)] text-[12px] text-[var(--color-text-tertiary)] uppercase tracking-[0.14em] mb-5">
              Typical outcomes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
              {OUTCOMES.map((o) => (
                <div key={o} className="flex items-start gap-3 text-[14px] text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  {o}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 04 PRICING — Wandr Studio ───────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-20 md:py-28">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            Pricing
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2
              className={cn(
                'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]',
                'text-[var(--color-text-primary)] max-w-[480px]'
              )}
            >
              Outcome-based pricing. No surprises.
            </h2>
            <p className="text-[14px] text-[var(--color-text-secondary)] max-w-[360px] leading-[1.65]">
              Every engagement is scoped precisely after the discovery call.
              The proposal you sign is the proposal you pay.
            </p>
          </div>

          {/* Wandr Studio pricing cards — dot-separated descriptors, → feature lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRICING.map((plan) => (
              <div
                key={plan.num}
                className={cn(
                  'rounded-[var(--radius-md)] p-6 flex flex-col',
                  plan.featured
                    ? 'bg-[var(--color-bg-primary)] border-2 border-[var(--color-accent)]'
                    : 'bg-[var(--color-bg-primary)] border border-[var(--color-border)]'
                )}
              >
                {/* Wandr Studio dot-separated descriptor */}
                <p className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-[0.14em] mb-4">
                  {plan.descriptor}
                </p>

                <h3 className="text-[16px] font-bold text-[var(--color-text-primary)] mb-3 leading-[1.2]">
                  {plan.name}
                </h3>

                <div className="mb-5">
                  <span className="text-[2rem] font-bold text-[var(--color-accent)] leading-none tracking-[-0.02em]">
                    {plan.price}
                  </span>
                  {plan.priceRange && (
                    <span className="text-[1.25rem] font-bold text-[var(--color-text-disabled)] leading-none">
                      {plan.priceRange}
                    </span>
                  )}
                  <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-[0.1em] mt-1">
                    {plan.priceNote}
                  </p>
                </div>

                {/* Wandr Studio → feature list */}
                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--color-text-secondary)] leading-[1.5]">
                      <span className="text-[var(--color-accent)] flex-shrink-0 mt-px" aria-hidden="true">→</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={cn(
                    'inline-flex items-center justify-center h-[40px] px-5 rounded-[var(--radius-md)]',
                    'text-[13px] font-bold transition-all duration-150',
                    plan.featured
                      ? 'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]'
                      : 'border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                  )}
                >
                  Get started →
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[12px] text-[var(--color-text-tertiary)] leading-[1.6]">
            Not sure which track fits? Start with a free 30-minute audit —
            we'll scope the right engagement after we understand your situation.{' '}
            <Link href="/contact?type=audit" className="text-[var(--color-accent)] hover:underline">
              Book an audit →
            </Link>
          </p>

        </div>
      </section>

      {/* ── CTA — Creative Navy (same as homepage) ──────────────────────────── */}
      <CTASection />
    </>
  );
}
