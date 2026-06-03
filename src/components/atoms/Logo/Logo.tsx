import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Artemis Design Labs logo — recolored arrow + wordmark.
 * Reinterprets the original adl-logo-1.png arrow mark as a clean SVG
 * in the new electric-violet palette. The wordmark uses Geist Sans
 * via CSS so it remains crisp at any size and adopts the current
 * theme's text color.
 */
export function Logo({ className, showWordmark = true, size = 'md' }: LogoProps) {
  const dims = {
    sm: { icon: 22, wordmarkPx: 'text-[13px]' },
    md: { icon: 28, wordmarkPx: 'text-[15px]' },
    lg: { icon: 40, wordmarkPx: 'text-[20px]' },
  }[size];

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)} aria-label="Artemis Design Labs">
      <svg
        width={dims.icon}
        height={dims.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        {/* Outer arrow — primary violet */}
        <path
          d="M5 6 L33 20 L5 34 L10 20 Z"
          fill="var(--color-accent)"
        />
        {/* Inner arrow head — softer overlay (suggests motion / tail) */}
        <path
          d="M19 14 L33 20 L19 26 L22 20 Z"
          fill="var(--color-text-on-accent)"
          fillOpacity="0.45"
        />
        {/* Tiny notch — references the hexagonal motif in the original mark */}
        <circle cx="6" cy="20" r="2" fill="var(--color-accent-hover)" />
      </svg>

      {showWordmark && (
        <span className={cn('flex flex-col leading-none', dims.wordmarkPx)}>
          <span className="font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
            Artemis
          </span>
          <span className="font-[var(--font-mono)] text-[0.65em] tracking-[0.18em] uppercase text-[var(--color-text-tertiary)] mt-0.5">
            Design Labs
          </span>
        </span>
      )}
    </span>
  );
}
