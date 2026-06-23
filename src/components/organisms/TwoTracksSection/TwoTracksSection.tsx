'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

type Track = {
  number: string;
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
    number: '01',
    eyebrow: 'Build Track',
    title: 'Install the system.\nRun it yourself.',
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
    number: '02',
    eyebrow: 'Operate Track',
    title: 'Outsource the function.\nWe run it ongoing.',
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
    /*
     * Interactivism / Blink UX pattern — Services Section.
     * Editorial 2-column, type-forward, no cards. Vertical 1px rule
     * separates tracks. Thin horizontal rules separate sub-blocks
     * within each column. Arrow-prefixed list items and arrow-prefixed
     * text-link CTAs. Header uses 60/40 asymmetric split.
     */
    <section
      ref={ref}
      id="tracks"
      className="relative bg-[var(--color-bg-secondary)] scroll-mt-24"
    >
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8 py-28 md:py-36">

        {/* Section header — Interactivism 60/40 asymmetric, left-aligned */}
        <header
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 fade-up"
          data-visible={dataVisible}
        >
          <div className="lg:col-span-7">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-text)] mb-6">
              <span aria-hidden="true">›&nbsp;</span>
              two ways to close the gap
            </p>
            <h2
              className={cn(
                'text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05]',
                'tracking-[-0.025em] text-[var(--color-text-primary)]'
              )}
            >
              Build the system.<br />
              <span className="text-[var(--color-accent-text)]">Or let us run it.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7]">
              Same operational outcome. Different model of ownership. The choice depends on
              how much of UI infrastructure you want to own internally — versus outsource
              entirely.
            </p>
          </div>
        </header>

        {/* Horizontal rule below header */}
        <div
          className="mt-16 md:mt-20 h-px bg-[var(--color-border)] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '80ms' }}
          aria-hidden="true"
        />

        {/* Two-track editorial grid — no cards, vertical 1px rule between */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0 relative">
          <TrackColumn
            track={TRACKS.build}
            dataVisible={dataVisible}
            delay={120}
            side="left"
          />

          {/* Vertical rule */}
          <div
            className="hidden lg:block w-px bg-[var(--color-border)] self-stretch"
            aria-hidden="true"
          />

          <TrackColumn
            track={TRACKS.operate}
            dataVisible={dataVisible}
            delay={260}
            side="right"
          />
        </div>

        {/* Horizontal rule above recommend-track row */}
        <div
          className="mt-20 md:mt-24 h-px bg-[var(--color-border)] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '400ms' }}
          aria-hidden="true"
        />

        {/* Recommend-track row */}
        <div
          className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '460ms' }}
        >
          <p className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)]">
            Not sure which track fits?
          </p>
          <Link
            href="/contact?type=audit"
            className={cn(
              'group inline-flex items-center gap-3 font-[var(--font-mono)] text-[14px]',
              'text-[var(--color-text-primary)] hover:text-[var(--color-accent-text)]',
              'transition-colors duration-150'
            )}
          >
            <span
              className="text-[var(--color-accent-text)] transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
            ./adl audit --recommend-track
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrackColumn({
  track,
  dataVisible,
  delay,
  side,
}: {
  track: Track;
  dataVisible: string;
  delay: number;
  side: 'left' | 'right';
}) {
  const titleLines = track.title.split('\n');

  return (
    <div
      className={cn(
        'flex flex-col fade-up',
        side === 'left' ? 'lg:pr-12 xl:pr-16' : 'lg:pl-12 xl:pl-16'
      )}
      data-visible={dataVisible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Eyebrow — numbered Interactivism convention */}
      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent-text)]">
        {track.number} <span className="text-[var(--color-text-tertiary)] mx-1">/</span> {track.eyebrow}
      </p>

      {/* Title — large editorial */}
      <h3
        className={cn(
          'mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] font-light',
          'leading-[1.1] tracking-[-0.025em]',
          'text-[var(--color-text-primary)]'
        )}
      >
        {titleLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < titleLines.length - 1 && <br />}
          </span>
        ))}
      </h3>

      {/* JTBD — secondary lead */}
      <p className="mt-6 text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7]">
        {track.jtbd}
      </p>

      {/* — Divider */}
      <div className="mt-10 h-px bg-[var(--color-border)]" aria-hidden="true" />

      {/* What ADL does */}
      <div className="mt-8">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-5">
          What ADL does
        </p>
        <ul className="space-y-3.5">
          {track.whatAdlDoes.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span
                className="font-[var(--font-mono)] text-[var(--color-accent-text)] leading-[1.6] mt-px flex-shrink-0"
                aria-hidden="true"
              >
                →
              </span>
              <span className="text-[16px] text-[var(--color-text-secondary)] leading-[1.6]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* — Divider */}
      <div className="mt-10 h-px bg-[var(--color-border)]" aria-hidden="true" />

      {/* Walk away */}
      <div className="mt-8">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-4">
          What you walk away with
        </p>
        <p className="text-[16px] md:text-[17px] text-[var(--color-text-primary)] leading-[1.65]">
          {track.walkAway}
        </p>
      </div>

      {/* — Divider */}
      <div className="mt-10 h-px bg-[var(--color-border)]" aria-hidden="true" />

      {/* Best for */}
      <div className="mt-8">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-4">
          Best for
        </p>
        <ul className="space-y-2.5">
          {track.bestFor.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="font-[var(--font-mono)] text-[var(--color-accent-text)] leading-[1.55] mt-px flex-shrink-0"
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

      {/* CTA — arrow-prefixed text link (Interactivism) */}
      <div className="mt-12 flex-grow flex items-end">
        <Link
          href={track.ctaHref}
          className={cn(
            'group inline-flex items-center gap-3',
            'text-[18px] md:text-[19px] font-medium',
            'text-[var(--color-text-primary)] hover:text-[var(--color-accent-text)]',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-secondary)] rounded-sm'
          )}
        >
          <span
            className="text-[var(--color-accent-text)] transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
          {track.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
