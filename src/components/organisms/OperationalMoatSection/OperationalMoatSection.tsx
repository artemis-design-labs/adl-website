'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

export function OperationalMoatSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    /*
     * CRZY Philosophy pattern — dark bg, short accent rule top-left,
     * large editorial headline on left (~60%), body paragraph on right (~40%).
     * The headline IS the philosophical statement; no eyebrow needed.
     */
    <section
      ref={ref}
      className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — accent rule + headline */}
          <div className="lg:col-span-7">
            {/* CRZY signature: short horizontal accent rule */}
            <div
              className="w-10 h-[2px] bg-[var(--color-accent)] mb-8 fade-up"
              data-visible={dataVisible}
              aria-hidden="true"
            />
            <h2
              className={cn(
                'text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.05]',
                'tracking-[-0.03em] text-[var(--color-text-primary)] fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: '60ms' }}
            >
              We believe UI infrastructure is the only competitive moat that scales.
            </h2>
          </div>

          {/* Right — philosophy paragraph */}
          <div
            className="lg:col-span-5 lg:pt-16 fade-up"
            data-visible={dataVisible}
            style={{ transitionDelay: '140ms' }}
          >
            <p className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7]">
              Most agencies ship Figma files and call it done. We build the layer underneath
              — the governance, the automation, the AI — that lets your product team ship UI
              at scale without growing a design operations team to match. Every engagement
              starts with architecture, not aesthetics.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
