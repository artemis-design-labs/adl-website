'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

/**
 * The break in the rhythm — deliberately NOT a grid.
 *
 * Single column, maximum whitespace, the only section besides the hero
 * allowed above section scale. Every other section is a grid; this one
 * stops the page. That contrast is the whole point of it.
 */
export function OperationalMoatSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section
      ref={ref}
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-32 md:py-44"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
        <div className="max-w-[24ch]">
          <div
            className="w-10 h-[2px] bg-[var(--color-accent)] mb-10 fade-up"
            data-visible={dataVisible}
            aria-hidden="true"
          />
          <h2
            className={cn(
              'text-[clamp(2rem,4.5vw,var(--text-h1))] font-semibold leading-[1.05]',
              'tracking-[-0.035em] text-balance text-[var(--color-text-primary)] fade-up'
            )}
            data-visible={dataVisible}
            style={{ transitionDelay: '60ms' }}
          >
            Your business can only scale as fast as the systems running it.
          </h2>
        </div>

        <p
          className="mt-12 max-w-[56ch] text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.75] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '140ms' }}
        >
          Most agencies solve one thing and leave your team to manage the rest.
          ADL installs four connected systems — UI infrastructure, AI tools, automated
          workflows, and training — so your operation runs cleanly as you scale.
          Every engagement targets the root cause, not the symptom.
        </p>
      </div>
    </section>
  );
}
