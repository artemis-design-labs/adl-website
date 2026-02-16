'use client';

import { ReactNode } from 'react';

interface DevOnlyProps {
  children: ReactNode;
}

/**
 * Wrapper component that only renders children in development mode.
 * Use this for dev tools like ContentSwitcher that shouldn't appear in production.
 */
export function DevOnly({ children }: DevOnlyProps) {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return <>{children}</>;
}
