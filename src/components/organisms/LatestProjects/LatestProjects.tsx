'use client';

import Link from 'next/link';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

// Mirrors the projects on /work — keep the two in step. Commercial work
// leads; the public-sector builds follow as proof of depth, not as the pitch.
const LATEST_PROJECTS = [
  {
    name: 'Data Mesh',
    description:
      "One real-time view of linear, cable and streaming distribution for NBCUniversal's operations center.",
    sector: 'Media',
  },
  {
    name: 'My Project Inbox',
    description:
      "A single inbox that replaced spreadsheets and email threads across Verizon's engineering teams.",
    sector: 'Telecom',
  },
  {
    name: 'NYCEPAS',
    description:
      'AI-assisted case routing that unified pension administration across four NYCERS business units.',
    sector: 'Pensions',
  },
  {
    name: 'HANDS AI',
    description:
      'A morning priority queue that shows caseworkers their highest-risk families, with a reason for every flag.',
    sector: 'Family services',
  },
  {
    name: 'Insight AI',
    description:
      'Dashboards that turn fragmented student data into trends principals and teachers can act on.',
    sector: 'Education',
  },
];

interface LatestProjectsProps {
  background?: 'primary' | 'elevated';
}

/**
 * "See latest projects" — an index list, not a card grid (Figma: ADL-Website
 * → Pentagram home → 05 Latest Projects List, node 2076:159).
 *
 * Lives on /services, after the process, as proof right before the CTA. It
 * used to be a homepage bento tile; it moved out as a standard section.
 *
 * Rows are deliberately not links: there are no per-project pages yet, so a
 * clickable row would be a false affordance. "View all" is the one action.
 */
export function LatestProjects({ background = 'primary' }: LatestProjectsProps) {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section
      id="projects"
      className={cn(
        'border-b border-[var(--color-border)] py-20 md:py-28',
        background === 'elevated'
          ? 'bg-[var(--color-bg-elevated)]'
          : 'bg-[var(--color-bg-primary)]'
      )}
    >
      <div
        ref={ref}
        data-visible={dataVisible}
        className="fade-up max-w-[var(--container-max)] mx-auto px-10 lg:px-20"
      >
        <div className="flex items-start justify-between gap-6 pb-8 border-b border-[var(--color-border)]">
          <h2 className="text-[clamp(1.75rem,3.5vw,var(--text-h2))] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)]">
            See latest projects
          </h2>
          <Link
            href="/work"
            className={cn(
              'shrink-0 inline-flex items-center gap-2 h-[46px] px-6 rounded-[var(--radius-md)]',
              'border border-[var(--color-border-strong)] text-[var(--color-text-primary)]',
              'font-[var(--font-mono)] text-[12px] uppercase tracking-[0.12em]',
              'hover:border-[var(--color-accent)] transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
            )}
          >
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul>
          {LATEST_PROJECTS.map((project) => (
            <li
              key={project.name}
              className={cn(
                'grid items-start lg:items-center gap-x-6 gap-y-2 py-4 border-b border-[var(--color-border)]',
                'grid-cols-[96px_minmax(0,1fr)_auto]',
                'lg:grid-cols-[160px_minmax(0,360px)_minmax(0,1fr)_auto] lg:gap-x-8'
              )}
            >
              {/* Image placeholder — replace with real asset when provided */}
              <div className="row-span-2 lg:row-span-1 flex aspect-[8/5] w-full items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-[var(--color-text-tertiary)]">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="7" cy="8.5" r="1.5" fill="currentColor" />
                  <path d="M2 14l4-3 3 2.5 3-4 4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[var(--color-text-primary)] leading-snug">
                {project.name}
              </h3>
              <span className="justify-self-end lg:order-last inline-flex items-center h-[30px] px-3 rounded-[var(--radius-full)] border border-[var(--color-border-strong)] text-[12px] text-[var(--color-text-secondary)] whitespace-nowrap">
                {project.sector}
              </span>
              <p className="col-span-2 lg:col-span-1 text-[14px] md:text-[15px] text-[var(--color-text-tertiary)] leading-[1.6]">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
