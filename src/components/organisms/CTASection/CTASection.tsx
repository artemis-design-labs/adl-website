'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

export function CTASection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-16 md:py-20 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        {/* Headline */}
        <h2
          className={cn(
            'text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.0]',
            'tracking-[-0.02em] text-[var(--color-text-primary)] mb-12 fade-up'
          )}
          data-visible={dataVisible}
        >
          Close the gap between<br />
          <span className="text-[var(--color-accent-text)]">&ldquo;it runs&rdquo; and production-ready.</span>
        </h2>

        {/* Supporting line */}
        <p
          className="text-[16px] text-[var(--color-text-secondary)] leading-[1.6] max-w-[520px] mb-10 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '80ms' }}
        >
          Book a free 30-minute UI infrastructure audit. We&apos;ll produce a written
          drift score and three specific recommendations — no pitch deck, no commitment.
        </p>

        {/* Button + email on one row */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '160ms' }}
        >
          <Link
            href="/contact?type=audit"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-[45px] px-7 rounded-[var(--radius-md)]',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
              'font-semibold text-[14px]',
              'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
              'active:brightness-90 transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
            )}
          >
            Book a free audit
          </Link>
          <Link
            href="/contact#book-a-call"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-[45px] px-7 rounded-[var(--radius-md)]',
              'border border-[var(--color-border)] text-[var(--color-text-primary)]',
              'font-semibold text-[14px]',
              'hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)] transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
            )}
          >
            Book a call
          </Link>
          <a
            href="mailto:hello@artemisdesignlabs.com"
            className="text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors duration-150"
          >
            hello@artemisdesignlabs.com
          </a>
        </div>

      </div>
    </section>
  );
}
