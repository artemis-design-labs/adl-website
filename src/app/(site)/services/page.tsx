import Link from 'next/link';
import type { Metadata } from 'next';
import { cn } from '@/lib/cn';
import { CTASection } from '@/components/organisms/CTASection';

export const metadata: Metadata = {
  title: 'Services | Artemis Design Labs',
  description:
    'Two ways to work with ADL: Build Track (we install it, your team runs it) or Operate Track (we manage it for you). Both deliver the same four-pillar operating system.',
};

const TRACKS = [
  {
    num: '01',
    name: 'Build Track',
    descriptor: 'Fixed Scope · One-Time',
    tagline: 'We install it. Your team runs it.',
    description:
      'For businesses that want to own their operational infrastructure but need the expertise to build it right. We audit what\'s breaking, design four connected systems around how your business actually works, and hand off a foundation your team can run.',
    features: [
      'Full audit of your current systems and operational bottlenecks',
      'Custom UI foundation built for your product',
      'AI tools integrated into your team\'s workflow',
      'Automated workflows replacing manual processes',
      'Full team training and ownership handoff',
      'Documentation your team can actually use',
      'Post-delivery support included',
    ],
    featured: false,
  },
  {
    num: '02',
    name: 'Operate Track',
    descriptor: 'Monthly Retainer · Ongoing',
    tagline: 'We run it. Your team focuses on the actual work.',
    description:
      'For businesses that want the four-pillar operating system managed as an ongoing service — without dedicating internal headcount to it. ADL runs the infrastructure, monitors operations, and keeps everything consistent as you scale.',
    features: [
      'Continuous management of your systems and infrastructure',
      'Automated monitoring that catches problems before you do',
      'AI-powered operational oversight',
      'Monthly infrastructure health reports',
      'New team member onboarding support',
      'Priority response for critical requests',
      'Quarterly system reviews and evolution planning',
    ],
    featured: true,
  },
];

const PROCESS = [
  {
    num: '01',
    title: 'Audit',
    description: 'We identify where manual processes are costing your business the most and what needs to be fixed first.',
  },
  {
    num: '02',
    title: 'System Design',
    description: 'We design four connected systems — UI, AI tools, automated workflows, and training — built around how your business actually works.',
  },
  {
    num: '03',
    title: 'Build & Install',
    description: 'We install the infrastructure, integrate the AI tools, and deploy the automated workflows that replace your manual bottlenecks.',
  },
  {
    num: '04',
    title: 'Training',
    description: 'We upskill your team so they can own, operate, and evolve the systems independently — not rely on us to keep it running.',
  },
  {
    num: '05',
    title: 'Hand Off or Operate',
    description: 'Your team takes ownership, or ADL keeps running the infrastructure as a managed service. Either way, the system keeps working.',
  },
];

const OUTCOMES = [
  'Your team focuses on the actual work — not manual tasks that should be automated',
  'New team members are contributing in days, not weeks of getting up to speed',
  'Problems get caught and handled before they cost you time or clients',
  'Your operation stays consistent as the team and business grow',
  'Critical knowledge isn\'t locked in one person\'s head — the system survives key exits',
  'Monthly visibility into what\'s running, what changed, and what improved',
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
              'text-[clamp(2.25rem,4.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em]',
              'text-[var(--color-text-primary)] mb-8'
            )}
          >
            We build systems to reduce time,<br />
            accelerate efficiency, and remove bottlenecks.
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
            ADL builds four connected systems — consistent product interfaces, AI tools,
            automated workflows, and trained teams — so your operation grows without
            the manual overhead growing with it.
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

      {/* ── 02 TRACKS ───────────────────────────────────────────────────────── */}
      <section
        id="services"
        className="bg-[var(--color-bg-elevated)] border-y border-[var(--color-border)] py-20 md:py-28"
      >
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            Services
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2
              className={cn(
                'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]',
                'text-[var(--color-text-primary)] max-w-[520px]'
              )}
            >
              Two ways to engage.<br />Scoped to your situation.
            </h2>
            <p className="text-[14px] text-[var(--color-text-secondary)] max-w-[360px] leading-[1.65]">
              Every engagement is scoped after a discovery call.
              Pricing is determined by what you need and how fast you need it — not a menu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRACKS.map((track) => (
              <div
                key={track.num}
                className={cn(
                  'rounded-[var(--radius-md)] p-8 flex flex-col',
                  'bg-[var(--color-bg-primary)] border border-[var(--color-border)]'
                )}
              >
                <p className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-[0.14em] mb-4">
                  {track.descriptor}
                </p>

                <h3 className="text-[18px] font-bold text-[var(--color-text-primary)] mb-1 leading-[1.2]">
                  {track.name}
                </h3>
                <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-[0.1em] mb-5">
                  {track.tagline}
                </p>

                <p className="text-[13px] text-[var(--color-text-secondary)] leading-[1.65] mb-6 pb-6 border-b border-[var(--color-border)]">
                  {track.description}
                </p>

                <ul className="space-y-2.5">
                  {track.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[var(--color-text-secondary)] leading-[1.5]">
                      <span className="text-[var(--color-accent)] flex-shrink-0 mt-px" aria-hidden="true">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[12px] text-[var(--color-text-tertiary)] leading-[1.6]">
            Not sure which track fits? Start with a free 30-minute audit —
            we&apos;ll scope the right engagement after we understand your situation.{' '}
            <Link href="/contact?type=audit" className="text-[var(--color-accent)] hover:underline">
              Book an audit →
            </Link>
          </p>

        </div>
      </section>

      {/* ── 03 PROCESS — Semiflat ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-20 md:py-28">
        <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            How We Work
          </p>

          <div className="mb-14">
            <h2
              className={cn(
                'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]',
                'text-[var(--color-text-primary)] mb-6'
              )}
            >
              From audit to a system that runs itself.
            </h2>
            <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[600px]">
              Every engagement follows the same sequence — not because it&apos;s templated,
              but because the order matters. We fix what&apos;s breaking first, then build
              the systems that prevent it from breaking again. Each phase builds on the
              last so the result is coherent, not a collection of independent fixes.
            </p>
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

      {/* ── CTA — Creative Navy (same as homepage) ──────────────────────────── */}
      <CTASection />
    </>
  );
}
