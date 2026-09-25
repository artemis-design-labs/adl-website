import Image from 'next/image';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
}

// Images fill their parent span — height is controlled purely by className
// so the nav can drive a smooth CSS transition on the container height.
//
// One variant only: the site is a single black-canvas theme, so the wordmark
// is always the white one. (The file is named logo-dark.png because it is the
// artwork FOR a dark canvas.)
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)} aria-label="Artemis Design Labs">
      <Image
        src="/images/logo-dark.png"
        alt="Artemis Design Labs"
        width={220}
        height={45}
        className="h-full w-auto object-contain"
        priority
      />
    </span>
  );
}
