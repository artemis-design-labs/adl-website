'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

interface CTASectionProps {
  /** Pick the token that continues the page's primary/elevated alternation. */
  background?: 'primary' | 'elevated';
}

/** Single column, isolated. Nothing competes with the one action. */
export function CTASection({ background = 'primary' }: CTASectionProps) {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section
      ref={ref}
      id="contact"
      className={cn(
        background === 'elevated'
          ? 'bg-[var(--color-bg-elevated)]'
          : 'bg-[var(--color-bg-primary)]',
        'py-28 md:py-36'
      )}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        <h2
          className={cn(
            'text-[clamp(1.75rem,3.5vw,var(--text-h2))] font-semibold leading-[1.1]',
            'tracking-[-0.03em] text-[var(--color-text-primary)] max-w-[18ch] mb-10 fade-up'
          )}
          data-visible={dataVisible}
        >
          Let&apos;s start transforming your business
        </h2>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '80ms' }}
        >
          <Link
            href="/contact#book-a-call"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-[48px] px-8 rounded-[var(--radius-md)]',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-semibold text-[15px]',
              'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
              'active:brightness-90 transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
            )}
          >
            Book a free audit
          </Link>

          <a
            href="mailto:pritish@artemisdesignlabs.com"
            className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors duration-150"
          >
            pritish@artemisdesignlabs.com
          </a>
        </div>

      </div>
    </section>
  );
}
