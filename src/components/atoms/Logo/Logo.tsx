import Image from 'next/image';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const HEIGHTS = { sm: 28, md: 36, lg: 45 };

export function Logo({ className, size = 'md' }: LogoProps) {
  const h = HEIGHTS[size];
  // Intrinsic ratio of the logo PNGs is ~4.9:1 (wide lockup)
  const w = Math.round(h * 4.9);

  return (
    <span className={cn('inline-flex items-center', className)} aria-label="Artemis Design Labs">
      {/* Dark mode logo — white on transparent, shown by default */}
      <Image
        src="/images/logo-dark.png"
        alt="Artemis Design Labs"
        width={w}
        height={h}
        className="block dark:block [html[data-theme='light']_&]:hidden"
        priority
      />
      {/* Light mode logo — dark on transparent, shown when data-theme="light" */}
      <Image
        src="/images/logo-light.png"
        alt="Artemis Design Labs"
        width={w}
        height={h}
        className="hidden [html[data-theme='light']_&]:block"
        priority
      />
    </span>
  );
}
