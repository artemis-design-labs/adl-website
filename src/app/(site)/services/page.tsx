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
    tagline: 'Your foundation for governed, scalable UI.',
    description:
      'For teams that want to own their UI infrastructure but need the expertise to build it right. ADL audits what\'s broken, designs a custom governance system around your stack, and delivers an operational capability your team can run — not a Figma file that becomes tomorrow\'s debt.',
    capabilities: [
      {
        title: 'Infrastructure Foundation',
        description: 'A custom governance system built around your stack, giving your team a single source of truth between design and code from day one.',
      },
      {
        title: 'Automated Design-to-Code',
        description: 'An AI-powered pipeline that converts Figma to production-ready React, eliminating the translation work that burns engineering cycles every sprint.',
      },
      {
        title: 'Drift Prevention Architecture',
        description: 'Governance rules and detection baselines built into the system before handoff, so consistency is enforced structurally — not manually.',
      },
      {
        title: 'Team Ownership by Design',
        description: 'Your team is embedded throughout the build so when ADL hands off, you run a system you understand — not a dependency you manage.',
      },
    ],
    href: '/contact?type=build-track',
  },
  {
    num: '02',
    title: 'Operate Track',
    tagline: 'We run your UI infrastructure. You ship product.',
    description:
      'For teams that want UI infrastructure to work without dedicating internal headcount to it. ADL runs the entire operation — powered by a coordinated system of AI agents — so your engineers stay focused on product while the foundation stays governed underneath them.',
    capabilities: [
      {
        title: 'Always-On Infrastructure Management',
        description: 'A coordinated system of AI agents that keeps your UI layer stable, consistent, and evolving — without internal headcount dedicated to it.',
      },
      {
        title: 'Continuous Design-Code Alignment',
        description: 'Bidirectional sync that catches drift before it compounds, keeping what ships matching what was designed.',
      },
      {
        title: 'Autonomous Component Delivery',
        description: 'Production-ready components generated and governed on a monthly cadence, without engineering time spent on recurring UI work.',
      },
      {
        title: 'Operational Visibility',
        description: 'Monthly health reports showing what was maintained, what was added, and the velocity impact — so you always know the infrastructure is working.',
      },
    ],
    href: '/contact?type=operate-track',
  },
];

const PROCESS = [
  {
    num: '01',
    title: 'UI Audit',
    description: 'We identify where your UI is drifting, where ownership is missing, and what needs to be built.',
  },
  {
    num: '02',
    title: 'System Architecture',
    description: 'We design a governance system around your stack — the foundation every component is built on.',
  },
  {
    num: '03',
    title: 'AI-Assisted Build',
    description: 'Our agents convert design intent into production-ready code, consistently, across every component.',
  },
  {
    num: '04',
    title: 'Governance Layer',
    description: 'Drift detection and enforcement are embedded before delivery — consistency is structural, not manual.',
  },
  {
    num: '05',
    title: 'Handoff or Operate',
    description: 'Your team takes ownership, or ADL keeps running it. The infrastructure doesn\'t stop at delivery.',
  },
];

const OUTCOMES = [
  'Engineering ships UI without rebuilding the same patterns every sprint',
  'Design and code share a single source of truth — drift is caught before it ships',
  'New engineers contribute from day one, without weeks of codebase archaeology',
  'Every component covers every interaction state — QA cycles shrink',
  'The system scales with your product without rebuilding when your team doubles',
  'Governance is structural — not dependent on whoever remembered to check',
];

const PRICING = [
  {
    num: '01',
    name: 'Build Track',
    descriptor: 'Fixed Scope · One-Time',
    featured: false,
    features: [
      'Component library: Figma + production React',
      'Token architecture tailored to your stack',
      'Full interaction state coverage',
      'AI-powered Figma → React pipeline',
      'Storybook documentation',
      'WCAG 2.1 AA accessibility',
      'Post-delivery support included',
    ],
    href: '/contact?type=build-track',
  },
  {
    num: '02',
    name: 'Operate Track',
    descriptor: 'Monthly Retainer · Ongoing',
    featured: true,
    features: [
      'Ongoing component delivery: Figma + React',
      'Agentic drift detection + alerts',
      'Figma ↔ React continuous sync',
      'Autonomous governance enforcement',
      'Monthly infrastructure health reports',
      'Office hours included',
      'Priority response SLA',
    ],
    href: '/contact?type=operate-track',
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
            Two ways to engage.<br />One standard of output.
          </h2>

          {/* Semiflat 2×2 numbered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                className={cn(
                  'py-10 pr-10',
                  'border-t-2 border-t-[var(--color-accent)]',
                  i % 2 === 0 && 'md:border-r md:border-r-[var(--color-border)]',
                  i % 2 === 1 && 'md:pl-10',
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

                <div className="space-y-4 mb-6">
                  {svc.capabilities.map((cap) => (
                    <div key={cap.title} className="flex items-start gap-3">
                      <div
                        className="w-[6px] h-[6px] flex-shrink-0 mt-[5px] bg-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-[13px] font-semibold text-[var(--color-text-primary)] leading-snug mb-0.5">
                          {cap.title}
                        </p>
                        <p className="text-[12px] text-[var(--color-text-secondary)] leading-[1.6]">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

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
                Every engagement follows the same sequence — not because it's templated,
                but because the order matters. Each phase builds on the last, so the system
                you receive is coherent from the token layer up, not assembled from
                independent decisions made in isolation.
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
              What changes after:
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

      {/* ── 04 ENGAGEMENT OPTIONS ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-20 md:py-28">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            Engagement
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2
              className={cn(
                'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]',
                'text-[var(--color-text-primary)] max-w-[480px]'
              )}
            >
              Scoped to your situation.
            </h2>
            <p className="text-[14px] text-[var(--color-text-secondary)] max-w-[360px] leading-[1.65]">
              Every engagement is scoped after a discovery call.
              Pricing is determined by the complexity and scale of your infrastructure needs.
            </p>
          </div>

          {/* Engagement track cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

                <h3 className="text-[16px] font-bold text-[var(--color-text-primary)] mb-5 leading-[1.2]">
                  {plan.name}
                </h3>

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
