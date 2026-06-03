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
      'inline-flex items-center justify-center gap-2',
      'font-medium',
      'rounded-md',
      'transition-all duration-150',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
      'disabled:opacity-40 disabled:cursor-not-allowed',
      fullWidth && 'w-full'
    );

    const variantStyles: Record<ButtonVariant, string> = {
      // Filled violet accent button — the primary CTA across the site.
      primary: cn(
        'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
        'border border-[var(--color-accent)]',
        'hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)]',
        'hover:shadow-[var(--shadow-glow)]',
        'active:translate-y-px'
      ),
      // Outline button — sits next to primary for "secondary action".
      secondary: cn(
        'bg-transparent text-[var(--color-text-primary)]',
        'border border-[var(--color-border-strong)]',
        'hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-accent)]',
        'active:translate-y-px'
      ),
      ghost: cn(
        'bg-transparent text-[var(--color-text-secondary)]',
        'border border-transparent',
        'hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)]'
      ),
      link: cn(
        'bg-transparent text-[var(--color-accent)]',
        'hover:text-[var(--color-accent-hover)] underline-offset-4 hover:underline',
        'p-0 h-auto rounded-none'
      ),
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-5 text-sm',
      lg: 'h-12 px-7 text-base',
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
            <span className="inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Processing</span>
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
