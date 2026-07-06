import Image from 'next/image';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
}

// Images fill their parent span — height is controlled purely by className
// so the nav can drive a smooth CSS transition on the container height.
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)} aria-label="Artemis Design Labs">
      {/* Dark mode — white logo */}
      <Image
        src="/images/logo-dark.png"
        alt="Artemis Design Labs"
        width={220}
        height={45}
        className="h-full w-auto object-contain block [html[data-theme='light']_&]:hidden"
        priority
      />
      {/* Light mode — dark logo */}
      <Image
        src="/images/logo-light.png"
        alt="Artemis Design Labs"
        width={220}
        height={45}
        className="h-full w-auto object-contain hidden [html[data-theme='light']_&]:block"
        priority
      />
    </span>
  );
}
