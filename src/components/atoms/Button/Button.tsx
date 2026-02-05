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
      'font-medium tracking-[0.05em] uppercase',
      'transition-colors duration-150',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2',
      'disabled:opacity-40 disabled:cursor-not-allowed',
      fullWidth && 'w-full'
    );

    const variantStyles: Record<ButtonVariant, string> = {
      primary: cn(
        'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
        'hover:bg-[var(--color-text-secondary)]',
        'focus-visible:ring-[var(--color-text-primary)]',
        'focus-visible:ring-offset-[var(--color-bg-primary)]'
      ),
      secondary: cn(
        'border border-[var(--color-border-strong)] bg-transparent',
        'text-[var(--color-text-primary)]',
        'hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]',
        'focus-visible:ring-[var(--color-text-secondary)]',
        'focus-visible:ring-offset-[var(--color-bg-primary)]'
      ),
      ghost: cn(
        'bg-transparent text-[var(--color-text-secondary)]',
        'hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)]',
        'focus-visible:ring-[var(--color-text-secondary)]',
        'focus-visible:ring-offset-[var(--color-bg-primary)]'
      ),
      link: cn(
        'bg-transparent text-[var(--color-text-secondary)]',
        'hover:text-[var(--color-text-primary)]',
        'focus-visible:ring-[var(--color-text-secondary)]',
        'p-0 h-auto tracking-normal normal-case'
      ),
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-5 py-2.5 text-xs',
      lg: 'px-6 py-3 text-sm',
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
            <span className="inline-block w-3 h-3 border border-current border-t-transparent animate-spin" />
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
