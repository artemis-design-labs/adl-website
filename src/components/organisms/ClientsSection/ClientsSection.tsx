'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

type Client = {
  name: string;
  srcLight: string;
  srcDark: string;
  // Per-logo height override for logos whose artboard reads optically small.
  // Defaults to the shared 84px height when omitted.
  heightClass?: string;
};

const CLIENTS: Client[] = [
  { name: 'AT&T',         srcLight: '/images/atnt-light.svg',        srcDark: '/images/atnt-dark.svg'        },
  { name: 'Verizon',      srcLight: '/images/verizon-light.svg',      srcDark: '/images/verizon-dark.svg'      },
  { name: 'NBCUniversal', srcLight: '/images/nbcuniversal-light.svg', srcDark: '/images/nbcuniversal-dark.svg', heightClass: 'h-[92px]' },
  { name: 'NYCERS',       srcLight: '/images/nycers-light.svg',       srcDark: '/images/nycers-dark.svg',       heightClass: 'h-[92px]' },
  { name: 'Qualitrol',    srcLight: '/images/qualitrol-light.svg',    srcDark: '/images/qualitrol-dark.svg'    },
  { name: 'CMA Global',   srcLight: '/images/cma-global-light.svg',   srcDark: '/images/cma-global-dark.svg'   },
  { name: 'NYC DOE',      srcLight: '/images/nyc-doe-light.svg',      srcDark: '/images/nyc-doe-dark.svg'      },
  { name: 'Freshop',      srcLight: '/images/freshop-light.svg',      srcDark: '/images/freshop-dark.svg'      },
];

// Rendered twice back-to-back so the -50% marquee keyframe loops seamlessly.
const TRACK = [...CLIENTS, ...CLIENTS];

export function ClientsSection() {
  const { theme } = useTheme();
  const srcFor = (c: Client) => (theme === 'dark' ? c.srcDark : c.srcLight);

  return (
    <section
      id="clients"
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-3"
      aria-label="Client logos"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        <ul className="sr-only">
          {CLIENTS.map((c) => <li key={c.name}>{c.name}</li>)}
        </ul>

        {/* Single-row infinite marquee. Edges fade via .marquee-mask; hovering
            pauses the scroll (both handled in globals.css). */}
        <div className="marquee-mask overflow-hidden" aria-hidden="true">
          <div className="animate-marquee-x flex w-max items-center">
            {TRACK.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex shrink-0 items-center justify-center px-8 md:px-12"
              >
                <Image
                  src={srcFor(client)}
                  alt=""
                  width={300}
                  height={200}
                  decoding="async"
                  className={`${client.heightClass ?? 'h-[84px]'} w-auto object-contain`}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
