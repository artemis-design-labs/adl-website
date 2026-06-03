import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Built by ex-startup founders who lived the design-to-development friction. ADL ships the design infrastructure we wished we had.',
};

const STORY_PARAGRAPHS = [
  "Before we built ADL, we ran startups. We watched our own engineering teams lose entire sprints decoding Figma files that — beautiful as they were — never fully matched the product. We burned six-figure agency retainers on design systems nobody on our team ever fully trusted, let alone shipped.",
  "Every design-to-development handoff felt like translating poetry into engineering tickets. Colors drifted. States got dropped. The 'we'll fix it later' bin filled up faster than the runway shrank.",
  "We didn't start ADL because we saw a market opportunity. We started it because the agencies we were paying weren't built for how we actually worked, and the AI tools on the market generated code our engineers refused to merge.",
  "So we built the infrastructure ourselves — the senior-engineer-validated AI, the production-grade component libraries, the cycles that turn weeks into days. And then we made it available to other founders who can't afford to wait for someone else to solve their problem either.",
];

const PRINCIPLES = [
  {
    num: '01',
    title: 'Ship code, not just designs.',
    detail:
      'Every Figma component leaves with a production-grade equivalent. Designs that don\'t ship aren\'t designs — they\'re wishes. Our deliverables are the kind your senior engineer would merge without asking.',
  },
  {
    num: '02',
    title: 'Engineering empathy at every layer.',
    detail:
      'Design systems exist to make developers faster, not just designers happier. Every token, every prop, every doc is optimized for the engineer at 2 a.m. before a launch.',
  },
  {
    num: '03',
    title: 'Transparency builds trust.',
    detail:
      'Fixed pricing. Clear timelines. No "this scope expanded" emails halfway through. You see the audit, you keep the audit, you make the call.',
  },
  {
    num: '04',
    title: 'The best partnership ends.',
    detail:
      'Our goal is to build infrastructure your team can own and maintain. We create capability, not dependency. The maintenance retainer is optional, not the deliverable.',
  },
];

const STATS = [
  { value: '190K+',   label: 'training images' },
  { value: '3-4 wks', label: 'average delivery' },
  { value: '$0',      label: 'figma-only output' },
  { value: '24h',     label: 'first response' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />
      <main id="main-content">

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[55vh] pointer-events-none opacity-60"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
              › about adl
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.05]">
              We built this for the
              <br />
              <span className="text-[var(--color-accent)]">founders we used to be</span>
            </h1>
            <p className="mt-7 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Artemis Design Labs is the design infrastructure we wished existed when we were running startups —
              built by people who lived the problem before they tried to solve it.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
                › origin story
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
                Why we exist.
              </h2>
              <p className="mt-5 text-base text-[var(--color-text-secondary)] leading-relaxed">
                Less manifesto, more confession.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {STORY_PARAGRAPHS.map((p, i) => (
                <p key={i} className={i === STORY_PARAGRAPHS.length - 1 ? 'text-[var(--color-text-primary)] font-medium' : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="text-center mb-14 max-w-2xl mx-auto">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › by the numbers
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              The shape of how we work.
            </h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <article
                key={s.label}
                className={cn(
                  'p-6 lg:p-8 rounded-xl text-center',
                  'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
                )}
              >
                <div className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-accent)] mb-2">
                  {s.value}
                </div>
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                  {s.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="max-w-2xl mb-14">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › what we stand for
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Four things we keep
              <br />
              <span className="text-[var(--color-accent)]">non-negotiable</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p) => (
              <article
                key={p.num}
                className={cn(
                  'group p-7 lg:p-8 rounded-xl',
                  'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                  'hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)]',
                  'transition-colors duration-200'
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {p.num}
                  </span>
                  <span className="flex-1 h-px bg-[var(--color-border)] group-hover:bg-[var(--color-accent-muted)] transition-colors" />
                </div>
                <h3 className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {p.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-[var(--color-bg-primary)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1/2 h-[120%] pointer-events-none opacity-50"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            › ready when you are
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1] mb-6">
            If our story sounds like yours,
            <br />
            <span className="text-[var(--color-accent)]">let&apos;s have a real conversation.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
            No pitch deck. No pressure. Just founder-to-founder talk about what you&apos;re building and whether we&apos;re the right fit.
          </p>
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center gap-2 h-12 px-7 rounded-md',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
              'font-medium text-base',
              'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
              'active:translate-y-px transition-all duration-150'
            )}
          >
            Book a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
