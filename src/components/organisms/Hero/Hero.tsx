'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { HeroBackdrop } from './HeroBackdrop';

const EYEBROW_PREFIX = '$ ./adl ';
/**
 * Commands rotate through the eyebrow. Each is the part that comes
 * AFTER `$ ./adl `. Theme: AI, software SDLC, design systems, tokens,
 * a11y, the kind of operations our pitch keeps gesturing at.
 */
const EYEBROW_COMMANDS = [
  'train --status=production',
  'generate component button --states=5',
  'audit design-system --target=figma',
  'sync tokens --from=figma --to=react',
  'validate --wcag=2.1AA',
  'diff figma:main code:main',
  'handoff --format=react --typed',
  'review pr/847 --auto-fix',
  'scaffold component card --variants=3',
  'ship --reviewed-by=senior',
];
const HEADLINE_LINE_1 = 'We Build the AI That Builds';
const HEADLINE_LINE_2 = 'Your Design Infrastructure.';
const SUBHEADLINE =
  "Founder-built. Human-validated. Trained on 190,000+ production design-to-code examples. We solve design-to-development friction because we lived it ourselves.";

const TRUST_TAGS = ['Health', 'Fintech', 'Enterprise'];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-primary)]">
      <HeroBackdrop />

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
    const [cmdIndex, setCmdIndex] = useState(0);
    const [chars, setChars] = useState(0);
    const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing'>('typing');
    const [reducedMotion, setReducedMotion] = useState(false);

    // Respect prefers-reduced-motion — pin to the first command, no animation.
    useEffect(() => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const update = () => setReducedMotion(mq.matches);
      update();
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }, []);

    useEffect(() => {
      if (reducedMotion) return;
      const current = EYEBROW_COMMANDS[cmdIndex];
      let id: ReturnType<typeof setTimeout> | undefined;

      if (phase === 'typing') {
        if (chars < current.length) {
          id = setTimeout(() => setChars((c) => c + 1), 38);
        } else {
          id = setTimeout(() => setPhase('holding'), 0);
        }
      } else if (phase === 'holding') {
        id = setTimeout(() => setPhase('erasing'), 2400);
      } else {
        if (chars > 0) {
          id = setTimeout(() => setChars((c) => c - 1), 18);
        } else {
          setCmdIndex((i) => (i + 1) % EYEBROW_COMMANDS.length);
          setPhase('typing');
        }
      }

      return () => { if (id) clearTimeout(id); };
    }, [phase, chars, cmdIndex, reducedMotion]);

    // For reduced-motion users, show the full first command immediately and
    // suppress the live region so screen readers don't get spam on each tick.
    const visible = reducedMotion ? EYEBROW_COMMANDS[0] : EYEBROW_COMMANDS[cmdIndex].slice(0, chars);
    const cursorClass = phase === 'typing' ? '' : 'animate-pulse';

    return (
      <div className="inline-flex items-baseline gap-2 font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)]">
        <span className="text-[var(--color-accent-text)]" aria-hidden="true">{'›'}</span>
        {/* aria-hidden because constant updates would spam SR; the brand prompt is decorative. */}
        <span aria-hidden="true">
          <span className="text-[var(--color-text-tertiary)]">{EYEBROW_PREFIX}</span>
          <span>{visible}</span>
          {!reducedMotion && (
            <span
              className={cn(
                'inline-block w-[7px] h-[0.95em] bg-[var(--color-accent)] align-middle ml-0.5',
                cursorClass
              )}
            />
          )}
        </span>
        {/* Static SR-only label so screen readers know what this is, without the chatter. */}
        <span className="sr-only">Terminal prompt: artemis design labs commands</span>
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
