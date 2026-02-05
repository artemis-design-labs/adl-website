'use client';

import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/cn';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative w-8 h-8 flex items-center justify-center',
        'text-[var(--color-text-secondary)]',
        'hover:text-[var(--color-text-primary)]',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-text-secondary)]',
        className
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Simple geometric toggle indicator */}
      <div className="relative w-4 h-4">
        {/* Light mode indicator (filled square) */}
        <div
          className={cn(
            'absolute inset-0 border border-current transition-opacity duration-150',
            theme === 'light' ? 'opacity-100 bg-current' : 'opacity-100'
          )}
        />
      </div>
    </button>
  );
}
