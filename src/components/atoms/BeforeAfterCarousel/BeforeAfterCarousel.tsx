'use client';

import { useCallback, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/**
 * BeforeAfterCarousel — the before / after strip (copy-creator skill §13.1)
 * split into two square slides the visitor cycles through: "Before", then
 * "After AI". Same art and labels as BeforeAfterStrip, sized for a narrow
 * column where two side-by-side panels would be too small to read.
 *
 * Native scroll-snap track, like the homepage pillar carousel: touch swipe and
 * trackpad come free, buttons and dots just scroll the track, and the active
 * index is read back from scrollLeft so both input paths stay in sync.
 */

interface Panel {
  art: React.ReactNode;
  label: string;
}

interface BeforeAfterCarouselProps {
  before: Panel;
  after: Panel;
  /** One plain sentence describing the whole before / after (§13.10). */
  alt: string;
  className?: string;
}

export function BeforeAfterCarousel({ before, after, alt, className }: BeforeAfterCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const slides = [
    { ...before, tag: 'Before', isAfter: false },
    { ...after, tag: 'After AI', isAfter: true },
  ];
  const last = slides.length - 1;

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(last, index));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: clamped * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  }, [last]);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(active - 1); }
  };

  const arrow = cn(
    'inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-full)]',
    'border border-[var(--color-border)] text-[var(--color-text-secondary)]',
    'hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]',
    'disabled:opacity-40 disabled:pointer-events-none transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Before and after"
      onKeyDown={onKeyDown}
      className={cn('w-full', className)}
    >
      <p className="sr-only">{alt}</p>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-[var(--radius-md)] [scrollbar-width:none]! [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.tag}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slide.tag}: ${slide.label}`}
            aria-hidden={i !== active}
            className="w-full shrink-0 snap-start p-px"
          >
            {/* 1px inset: a fractional column width can clip the track by
                half a pixel, so it clips this padding, not the border */}
            <div
              className={cn(
                'flex aspect-square flex-col justify-between gap-4 p-5',
                'rounded-[var(--radius-md)] border bg-[var(--color-bg-tertiary)]',
                slide.isAfter ? 'border-[var(--color-accent)]' : 'border-[var(--color-border)]'
              )}
            >
              <span
                className={cn(
                  'self-start rounded-[var(--radius-full)] border px-2.5 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em]',
                  slide.isAfter
                    ? 'border-[var(--color-accent)] text-[var(--color-accent-text)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-tertiary)]'
                )}
              >
                {slide.tag}
              </span>

              <svg
                viewBox="0 0 160 100"
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full text-[var(--color-text-tertiary)]"
                aria-hidden="true"
              >
                {slide.art}
              </svg>

              <p
                className={cn(
                  'text-[14px] leading-snug',
                  slide.isAfter
                    ? 'font-semibold text-[var(--color-accent-text)]'
                    : 'font-medium text-[var(--color-text-secondary)]'
                )}
              >
                {slide.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.tag}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${slide.tag.toLowerCase()}`}
              aria-current={i === active}
              className={cn(
                'h-[6px] rounded-[var(--radius-full)] transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
                i === active
                  ? 'w-6 bg-[var(--color-accent)]'
                  : 'w-[6px] bg-[var(--color-border-strong)] hover:bg-[var(--color-text-tertiary)]'
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Show before" className={arrow}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active === last} aria-label="Show after" className={arrow}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
