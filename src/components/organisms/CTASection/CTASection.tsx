'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

export function CTASection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    /*
     * Creative Navy CTA pattern — dark bg, left-aligned layout,
     * light-weight headline, accent button + email inline.
     * No centering, no decorative elements — just the question and the action.
     */
    <section
      ref={ref}
      id="contact"
      className="bg-[var(--color-bg-primary)] py-20 md:py-28"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        <h2
          className={cn(
            'text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.1]',
            'tracking-[-0.025em] text-[var(--color-text-primary)] max-w-[680px] mb-10 fade-up'
          )}
          data-visible={dataVisible}
        >
          Ready to build your<br />UI infrastructure?
        </h2>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '80ms' }}
        >
          <Link
            href="/contact?type=audit"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-bold text-[14px]',
              'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
              'active:brightness-90 transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
            )}
          >
            Book a free audit
          </Link>

          <a
            href="mailto:hello@artemisdesignlabs.com"
            className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors duration-150"
          >
            hello@artemisdesignlabs.com
          </a>
        </div>

      </div>
    </section>
  );
}
