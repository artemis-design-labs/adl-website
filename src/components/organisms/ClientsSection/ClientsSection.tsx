'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/cn';

type Client = {
  name: string;
  srcLight: string;
  srcDark: string;
};

const CLIENTS: Client[] = [
  { name: 'AT&T',         srcLight: '/images/atnt-light.svg',        srcDark: '/images/atnt-dark.svg'        },
  { name: 'Verizon',      srcLight: '/images/verizon-light.svg',      srcDark: '/images/verizon-dark.svg'      },
  { name: 'NBCUniversal', srcLight: '/images/nbcuniversal-light.svg', srcDark: '/images/nbcuniversal-dark.svg' },
  { name: 'NYCERS',       srcLight: '/images/nycers-light.svg',       srcDark: '/images/nycers-dark.svg'       },
  { name: 'Qualitrol',    srcLight: '/images/qualitrol-light.svg',    srcDark: '/images/qualitrol-dark.svg'    },
  { name: 'CMA Global',   srcLight: '/images/cma-global-light.svg',   srcDark: '/images/cma-global-dark.svg'   },
  { name: 'NYC DOE',      srcLight: '/images/nyc-doe-light.svg',      srcDark: '/images/nyc-doe-dark.svg'      },
  { name: 'Freshop',      srcLight: '/images/freshop-light.svg',      srcDark: '/images/freshop-dark.svg'      },
];


export function ClientsSection() {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance the mobile carousel (paused on touch/hover).
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % CLIENTS.length);
    }, 2500);
    return () => clearInterval(id);
  }, [paused]);

  const srcFor = (c: Client) => (theme === 'dark' ? c.srcDark : c.srcLight);

  return (
    <section
      id="clients"
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-10 md:py-12"
      aria-label="Client logos"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        <ul className="sr-only">
          {CLIENTS.map((c) => <li key={c.name}>{c.name}</li>)}
        </ul>

        {/* Tablet / desktop: 4-column grid */}
        <div className="hidden md:grid grid-cols-4 gap-8 md:gap-12 items-center" aria-hidden="true">
          {CLIENTS.map((client) => (
            <Image
              key={client.name}
              src={srcFor(client)}
              alt=""
              width={300}
              height={200}
              decoding="async"
              className="w-full h-auto"
              unoptimized
            />
          ))}
        </div>

        {/* Mobile: one-logo-at-a-time carousel */}
        <div
          className="md:hidden"
          aria-hidden="true"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="w-full shrink-0 flex justify-center"
                >
                  <Image
                    src={srcFor(client)}
                    alt=""
                    width={300}
                    height={200}
                    decoding="async"
                    className="w-full max-w-[220px] h-auto"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Position dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {CLIENTS.map((client, i) => (
              <button
                key={client.name}
                type="button"
                tabIndex={-1}
                onClick={() => setActive(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === active
                    ? 'w-5 bg-[var(--color-primary)]'
                    : 'w-1.5 bg-[var(--color-border)]',
                )}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
