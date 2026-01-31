'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2 font-medium rounded-lg',
      'transition-all duration-200 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      fullWidth && 'w-full'
    );

    const variantStyles: Record<ButtonVariant, string> = {
      primary: cn(
        'bg-[var(--color-accent)] text-white',
        'hover:bg-[var(--color-accent-hover)]',
        'focus-visible:ring-[var(--color-accent)]',
        'focus-visible:ring-offset-[var(--color-bg-primary)]',
        'shadow-md hover:shadow-lg'
      ),
      secondary: cn(
        'border border-[var(--color-border)] bg-transparent',
        'text-[var(--color-text-primary)]',
        'hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
        'focus-visible:ring-[var(--color-accent)]',
        'focus-visible:ring-offset-[var(--color-bg-primary)]'
      ),
      ghost: cn(
        'bg-transparent text-[var(--color-text-secondary)]',
        'hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)]',
        'focus-visible:ring-[var(--color-accent)]',
        'focus-visible:ring-offset-[var(--color-bg-primary)]'
      ),
      link: cn(
        'bg-transparent text-[var(--color-accent)] underline-offset-4',
        'hover:underline',
        'focus-visible:ring-[var(--color-accent)]',
        'p-0 h-auto'
      ),
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-7 py-3.5 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== 'link' && sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
