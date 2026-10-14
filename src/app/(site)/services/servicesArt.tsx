import { cn } from '@/lib/cn';
import { ACCENT, Person, Sheets } from '@/components/atoms/BeforeAfterStrip';

/**
 * Images for /services, decided by the copy-creator skill §13.4:
 * hero = before / after strip, tracks = thin-line icons, process = labeled
 * diagram. Outcomes and CTA carry no image.
 */

const COLUMNS = [
  { cx: 28, people: [0] },
  { cx: 80, people: [-6, 6] },
  { cx: 132, people: [-12, 0, 12] },
];

function Team({ cx, people }: { cx: number; people: number[] }) {
  return (
    <>
      {people.map((dx) => (
        <Person key={dx} x={cx + dx} y={88} s={0.6} style={{ strokeWidth: 2.5 }} />
      ))}
    </>
  );
}

/** Hero: the team grows; before, the pile of manual work grows with it. */
export const SERVICES_HERO_STRIP = {
  before: {
    label: 'Every hire adds busywork.',
    art: (
      <>
        {COLUMNS.map((c, i) => (
          <g key={c.cx}>
            <Sheets cx={c.cx} n={[2, 5, 9][i]} />
            <Team {...c} />
          </g>
        ))}
      </>
    ),
  },
  after: {
    label: 'Team grows. Busywork doesn’t.',
    art: (
      <>
        {COLUMNS.map((c) => (
          <g key={c.cx}>
            <Sheets cx={c.cx} n={2} style={ACCENT} />
            <Team {...c} />
          </g>
        ))}
      </>
    ),
  },
  alt: 'Two panels. On the left, each time the team grows by one person, the pile of manual work grows too. On the right, the team grows and the pile stays small.',
};

const icon = 'h-8 w-auto shrink-0 self-start text-[var(--color-text-primary)] mb-6';

/** Build Track: a tool handed over to your team. */
export function BuildIcon() {
  return (
    <svg viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={icon} aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
      <path d="M25 12h8m-3-3 3 3-3 3" />
      <circle cx={41} cy={8} r={3} />
      <path d="M36 20c0-4 2.2-6 5-6s5 2 5 6" />
    </svg>
  );
}

/** Operate Track: a loop that keeps running. */
export function OperateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={icon} aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5" />
    </svg>
  );
}

/* ------------------------------------------------------- process diagram */

const box = 'rounded-[var(--radius-md)] border px-4 py-3 text-[13px] leading-snug text-center';

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 self-center rotate-90 @2xl:rotate-0 text-[var(--color-text-tertiary)]" aria-hidden="true">
      <path d="M4 12h15m-5-5 5 5-5 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Process: one shared path, then the fork into the two tracks. The five
 * numbered columns below give the detail; this shows the shape.
 */
export function ProcessDiagram({ className }: { className?: string }) {
  const step = cn(box, 'flex items-center justify-center border-[var(--color-border)] bg-[var(--color-bg-primary)] font-medium text-[var(--color-text-secondary)] @2xl:flex-1');
  const end = cn(box, 'border-[var(--color-accent)] bg-[var(--color-bg-primary)]');

  return (
    <figure
      role="img"
      aria-label="Diagram. Every engagement runs Audit, then Design and build, then Train. It then splits: on the Build Track your team runs the system, on the Operate Track ADL runs it."
      className={cn('@container w-full', className)}
    >
      <div className="flex flex-col items-stretch gap-2 @2xl:flex-row">
        <div className={step}>Audit</div>
        <Arrow />
        <div className={step}>Design &amp; build</div>
        <Arrow />
        <div className={step}>Train</div>
        <Arrow />
        <div className="flex flex-col gap-2 @2xl:flex-[1.4]">
          {[
            ['Your team runs it', 'Build Track'],
            ['We run it', 'Operate Track'],
          ].map(([label, track]) => (
            <div key={track} className={end}>
              <p className="font-semibold text-[var(--color-accent-text)]">{label}</p>
              <p className="mt-0.5 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                {track}
              </p>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
