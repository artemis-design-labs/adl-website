'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

type Track = {
  eyebrow: string;
  title: string;
  jtbd: string;
  whatAdlDoes: string[];
  walkAway: string;
  bestFor: string[];
  ctaLabel: string;
  ctaHref: string;
};

const TRACKS: { build: Track; operate: Track } = {
  build: {
    eyebrow: 'build track',
    title: 'Install the system. Run it yourself.',
    jtbd:
      'For engineering teams that want to own UI infrastructure but can\'t build the governance layer from scratch.',
    whatAdlDoes: [
      'Audit your current UI infrastructure',
      'Design a custom AI-powered governance system',
      'Build it alongside your team',
      'Hand off operational capability',
    ],
    walkAway:
      'A system that prevents structural debt — owned and operated by your team after delivery.',
    bestFor: [
      'teams 15–50 engineers',
      'seed to early series a',
      'teams that want internal control',
    ],
    ctaLabel: 'Scope a Build Track audit',
    ctaHref: '/contact?type=audit',
  },
  operate: {
    eyebrow: 'operate track',
    title: 'Outsource the function. We run it ongoing.',
    jtbd:
      'For engineering teams scaling faster than internal capacity can support UI governance.',
    whatAdlDoes: [
      'Run continuous drift monitoring',
      'Deliver governed components on cadence',
      'Enforce review gates and contribution rules',
      'Send monthly health reports',
    ],
    walkAway:
      'Production-ready UI infrastructure that never drifts — operated by ADL\'s agentic ecosystem.',
    bestFor: [
      'teams 50+ engineers',
      'series a–b scaling fast',
      'multiple product lines',
    ],
    ctaLabel: 'Talk through Operate Track',
    ctaHref: '/contact',
  },
};

export function TwoTracksSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section
      ref={ref}
      id="tracks"
      className="relative bg-[var(--color-bg-secondary)] scroll-mt-24"
    >
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8 py-28 md:py-36">
        {/* Section header */}
        <header
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto fade-up"
          data-visible={dataVisible}
        >
          <p className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)]">
            <span className="text-[var(--color-accent)]" aria-hidden="true">›&nbsp;</span>
            two ways to close the gap
          </p>
          <h2
            className={cn(
              'mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold',
              'leading-[1.1] tracking-[-0.025em]',
              'text-[var(--color-text-primary)]'
            )}
          >
            Build the system.
            <br />
            <span className="text-[var(--color-accent)]">Or let us run it.</span>
          </h2>
          <p className="mt-7 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Same operational outcome. Different model of ownership. The choice depends on how
            much of UI infrastructure you want to own internally — versus outsource entirely.
          </p>
        </header>

        {/* Two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <TrackCard
            track={TRACKS.build}
            dataVisible={dataVisible}
            delay={120}
          />
          <TrackCard
            track={TRACKS.operate}
            dataVisible={dataVisible}
            delay={260}
          />
        </div>

        {/* Recommend-track sub-line */}
        <div
          className="mt-14 md:mt-16 text-center fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '420ms' }}
        >
          <p className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)]">
            Not sure which track fits?{' '}
            <Link
              href="/contact?type=audit"
              className={cn(
                'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]',
                'underline underline-offset-4 decoration-[var(--color-border-strong)]',
                'hover:decoration-[var(--color-accent)]',
                'transition-colors duration-150'
              )}
            >
              Run{' '}
              <span className="text-[var(--color-accent)]" aria-hidden="true">›</span>{' '}
              ./adl audit --recommend-track
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function TrackCard({
  track,
  dataVisible,
  delay,
}: {
  track: Track;
  dataVisible: string;
  delay: number;
}) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-[var(--color-border)]',
        'bg-[var(--color-bg-elevated)]',
        'p-8 lg:p-10',
        'transition-colors duration-200',
        'hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)]',
        'flex flex-col',
        'fade-up'
      )}
      data-visible={dataVisible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card eyebrow */}
      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
        <span aria-hidden="true">›&nbsp;</span>
        {track.eyebrow}
      </p>

      {/* Title */}
      <h3 className="mt-4 text-2xl md:text-[1.75rem] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] leading-snug">
        {track.title}
      </h3>

      {/* JTBD */}
      <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed italic">
        {track.jtbd}
      </p>

      {/* What ADL does */}
      <div className="mt-8">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-4">
          What ADL does
        </p>
        <ul className="space-y-3">
          {track.whatAdlDoes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="font-[var(--font-mono)] text-[var(--color-accent)] leading-[1.55] mt-px flex-shrink-0"
                aria-hidden="true"
              >
                →
              </span>
              <span className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Walk away */}
      <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-3">
          What you walk away with
        </p>
        <p className="text-base text-[var(--color-text-primary)] leading-relaxed">
          {track.walkAway}
        </p>
      </div>

      {/* Best for */}
      <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-3">
          Best for
        </p>
        <ul className="space-y-2">
          {track.bestFor.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="font-[var(--font-mono)] text-[var(--color-accent)] leading-[1.55] mt-px flex-shrink-0"
                aria-hidden="true"
              >
                ›
              </span>
              <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10 flex-grow flex items-end">
        <Link
          href={track.ctaHref}
          className={cn(
            'inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md',
            'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
            'font-medium text-base w-full',
            'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
            'active:translate-y-px transition-all duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-secondary)]'
          )}
        >
          {track.ctaLabel}
          <ArrowRight />
        </Link>
      </div>
    </article>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
