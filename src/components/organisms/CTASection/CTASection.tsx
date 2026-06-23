'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

export function CTASection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    /*
     * Interactivism pattern: the accent color fills the entire section background —
     * the one moment on the page where blue is the canvas, not the highlight.
     * Centered layout, white text on blue, dark-on-white button, email + sub-note beneath.
     * Blink UX accent: #0090ff as bg, white text, white filled button.
     */
    <section
      ref={ref}
      id="contact"
      className="bg-[var(--color-accent)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">

        {/* Interactivism: bold question, white on accent bg */}
        <h2
          className={cn(
            'text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.04em]',
            'text-white max-w-[700px] mb-10 fade-up'
          )}
          data-visible={dataVisible}
        >
          Ready to close<br />
          the gap?
        </h2>

        {/* Interactivism: dark button on accent bg — high contrast */}
        <div
          className="flex flex-col sm:flex-row items-center gap-5 mb-6 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '80ms' }}
        >
          <Link
            href="/contact?type=audit"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-[48px] px-9 rounded-[var(--radius-md)]',
              'bg-white text-[var(--color-accent)] font-bold text-[15px]',
              'hover:bg-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.15)]',
              'active:brightness-95 transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-accent)]'
            )}
          >
            Book a free audit
          </Link>

          <a
            href="mailto:hello@artemisdesignlabs.com"
            className="font-[var(--font-mono)] text-[13px] text-white/70 hover:text-white transition-colors duration-150"
          >
            hello@artemisdesignlabs.com
          </a>
        </div>

        {/* Sub-note */}
        <p
          className="text-[13px] text-white/60 leading-[1.5] max-w-[400px] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '160ms' }}
        >
          Free 30-minute UI infrastructure audit. Written drift score +
          three specific recommendations. No pitch deck, no commitment.
        </p>

      </div>
    </section>
  );
}
