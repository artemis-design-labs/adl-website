'use client';

import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/cn';

interface ThemeToggleProps {
  className?: string;
}

/**
 * Pill-shaped two-state toggle with sun + moon icons.
 *
 * The visible pill is 56x28 px; the surrounding <button> is a 44x44 hit
 * target (WCAG 2.5.5 AAA / Apple HIG minimum) with transparent padding
 * so the visual is unchanged but tap accuracy is forgiving on mobile.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={`Theme: ${isDark ? 'dark' : 'light'}. Switch to ${isDark ? 'light' : 'dark'} mode.`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={cn(
        'inline-flex items-center justify-center min-h-11 min-w-11 p-1.5',
        'rounded-full',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'relative inline-flex items-center h-7 w-14',
          'rounded-full border border-[var(--color-border-strong)]',
          'bg-[var(--color-bg-elevated)]',
          'transition-colors duration-150 group-hover:border-[var(--color-accent)]'
        )}
      >
        {/* Sun (left) */}
        <span
          className={cn(
            'absolute left-1.5 inline-flex items-center justify-center w-4 h-4 transition-colors duration-200',
            isDark ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-accent)]'
          )}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </span>

        {/* Moon (right) */}
        <span
          className={cn(
            'absolute right-1.5 inline-flex items-center justify-center w-4 h-4 transition-colors duration-200',
            isDark ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-tertiary)]'
          )}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>

        {/* Thumb */}
        <span
          className={cn(
            'absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full',
            'bg-[var(--color-accent)]',
            'shadow-[0_0_0_2px_var(--color-bg-elevated),0_0_12px_var(--color-accent-glow)]',
            'transition-transform duration-200 ease-out',
            isDark ? 'translate-x-[1.85rem]' : 'translate-x-1'
          )}
        />
      </span>
    </button>
  );
}
