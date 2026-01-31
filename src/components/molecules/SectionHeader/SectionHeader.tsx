'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  alignment?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = 'center',
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        alignment === 'center' && 'mx-auto text-center',
        alignment === 'left' && 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-sm font-medium tracking-wider uppercase mb-4',
            'text-[var(--color-accent)]'
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
          'text-[var(--color-text-primary)]',
          'text-balance',
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 md:mt-6 text-lg md:text-xl',
            'text-[var(--color-text-secondary)]',
            'leading-relaxed',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
