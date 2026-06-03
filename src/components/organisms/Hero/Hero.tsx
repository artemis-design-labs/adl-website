'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

const EYEBROW_PREFIX = '$ ./adl train ';
const EYEBROW_SUFFIX = '--status=production';
const HEADLINE_LINE_1 = 'We Build the AI That Builds';
const HEADLINE_LINE_2 = 'Your Design Infrastructure.';
const SUBHEADLINE =
  "Founder-built. Human-validated. Trained on 190,000+ production design-to-code examples. We solve design-to-development friction because we lived it ourselves.";

const TRUST_TAGS = ['Health', 'Fintech', 'Enterprise'];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none"
        style={{ background: 'var(--gradient-subtle)' }}
      />
      {/* Faint grid */}
      <BackgroundGrid />

      <div className="relative max-w-[var(--container-wide)] mx-auto px-6 lg:px-8 pt-36 md:pt-44 pb-28 md:pb-36">
        <div className="max-w-4xl mx-auto text-center">
          <MonoEyebrow />

          <h1
            className={cn(
              'mt-8 text-[clamp(2.5rem,6.5vw,5rem)] font-semibold',
              'leading-[1.05] tracking-[-0.025em]',
              'text-[var(--color-text-primary)]'
            )}
          >
            {HEADLINE_LINE_1}
            <br />
            <span className="text-[var(--color-accent)]">{HEADLINE_LINE_2}</span>
          </h1>

          <p className="mt-7 text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            {SUBHEADLINE}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md',
                'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
                'font-medium text-base',
                'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
                'active:translate-y-px transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
                'min-w-[208px]'
              )}
            >
              Book a Conversation
              <ArrowRight />
            </Link>
            <Link
              href="/contact?type=audit"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md',
                'border border-[var(--color-border-strong)] text-[var(--color-text-primary)]',
                'font-medium text-base',
                'hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-accent)]',
                'transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
                'min-w-[208px]'
              )}
            >
              Get a Free Audit
            </Link>
          </div>

          <p className="mt-10 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
            Trusted by product teams in&nbsp;
            {TRUST_TAGS.map((t, i) => (
              <span key={t}>
                <span className="text-[var(--color-text-primary)]">{t}</span>
                {i < TRUST_TAGS.length - 1 && <span> · </span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );

  function MonoEyebrow() {
    const [shown, setShown] = useState(0);
    const fullText = EYEBROW_PREFIX + EYEBROW_SUFFIX;

    useEffect(() => {
      if (shown >= fullText.length) return;
      const id = setTimeout(() => setShown((s) => s + 1), 28);
      return () => clearTimeout(id);
    }, [shown, fullText.length]);

    const text = fullText.slice(0, shown);
    const isDone = shown >= fullText.length;

    return (
      <div className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)]">
        <span className="text-[var(--color-accent)]">{'›'}</span>
        <span>
          {text}
          <span
            aria-hidden="true"
            className={cn(
              'inline-block w-[7px] h-[1em] bg-[var(--color-accent)] align-middle ml-0.5',
              isDone ? 'animate-pulse' : ''
            )}
          />
        </span>
      </div>
    );
  }
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage:
          'linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage:
          'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
        WebkitMaskImage:
          'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
      }}
    />
  );
}
