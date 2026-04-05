'use client';

import { cn } from '@/lib/cn';

export function AboutUsSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
              <span className="w-2 h-2 bg-[var(--color-accent)]" />
              <span
                className={cn(
                  'text-xs font-medium tracking-[0.15em] uppercase',
                  'text-[var(--color-text-tertiary)]'
                )}
              >
                About Us
              </span>
            </div>

            {/* Headline */}
            <h2
              className={cn(
                'text-2xl md:text-3xl lg:text-4xl',
                'font-medium tracking-[-0.02em]',
                'text-[var(--color-text-primary)]',
                'leading-[1.2]'
              )}
            >
              We Build Design Systems{' '}
              <span className="text-[var(--color-accent)]">That Ship</span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                We&apos;re a team of designers and engineers who&apos;ve lived the startup grind.
                We know what it&apos;s like to ship fast, iterate faster, and scale when it matters most.
              </p>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Our mission is simple: eliminate the friction between design and development
                so your team can focus on building products that matter.
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--color-border)]">
              <div>
                <p className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">50+</p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">3x</p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">Faster Handoff</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">100%</p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">Code Parity</p>
              </div>
            </div>
          </div>

          {/* Right Column - Placeholder Image */}
          <div className="relative">
            <div
              className={cn(
                'aspect-[4/3] w-full',
                'bg-[var(--color-bg-elevated)]',
                'border border-[var(--color-border)]',
                'flex items-center justify-center'
              )}
            >
              {/* Placeholder content */}
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-[var(--color-border)] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[var(--color-text-muted)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] tracking-wide uppercase">
                  Image Placeholder
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  800 x 600 recommended
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
