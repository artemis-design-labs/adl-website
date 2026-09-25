'use client';

import Image from 'next/image';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

type Client = {
  name: string;
  /** White-ink artwork — the canvas is black. NOTE: this component is no
   *  longer wired to the homepage; the client wall lives in HomeBento. */
  src: string;
};

const CLIENTS: Client[] = [
  { name: 'AT&T',         src: '/images/atnt-dark.svg'},
  { name: 'Verizon',      src: '/images/verizon-dark.svg'},
  { name: 'NBCUniversal', src: '/images/nbcuniversal-dark.svg'},
  { name: 'NYCERS',       src: '/images/nycers-dark.svg'},
  { name: 'Qualitrol',    src: '/images/qualitrol-dark.svg'},
  { name: 'CMA Global',   src: '/images/cma-global-dark.svg'},
  { name: 'NYC DOE',      src: '/images/nyc-doe-dark.svg'},
  { name: 'Freshop',      src: '/images/freshop-dark.svg'},
];

/**
 * Trust band — static 4×2 / 8×1 grid.
 *
 * Replaces the scrolling marquee: logos now sit quiet and aligned at a
 * size subordinate to the body type, which is how a reference client is
 * presented when you are confident about it.
 */
export function ClientsSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section
      ref={ref}
      id="clients"
      className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-10 md:py-12"
      aria-label="Client logos"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-px border border-[var(--color-border)] bg-[var(--color-border)]">
          {CLIENTS.map((client, i) => (
            <li
              key={client.name}
              className="flex items-center justify-center bg-[var(--color-bg-elevated)] px-4 py-8 fade-up"
              data-visible={dataVisible}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={300}
                height={200}
                decoding="async"
                className="h-[30px] w-auto object-contain opacity-60 transition-opacity duration-200 hover:opacity-100"
                unoptimized
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
