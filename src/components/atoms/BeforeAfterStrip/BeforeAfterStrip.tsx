import { cn } from '@/lib/cn';

/**
 * BeforeAfterStrip — ADL's house image form (copy-creator skill §13.1).
 *
 * Two panels and one arrow: the problem on the left in ink, the fix on the
 * right with the single accent. Each panel is a small line drawing plus a
 * 2–5 word label. Labels are real text rather than baked into a bitmap, so
 * they stay sharp, translatable and exactly as approved.
 *
 * The strip is one image to assistive tech (role="img" + `alt`); the labels
 * are presentational inside it.
 *
 * Layout follows its own width, not the viewport (container query): side by
 * side when there is room, stacked before-over-after when there is not, so
 * labels are never shrunk to fit a phone (§13.10).
 *
 * Art is drawn on a 160×100 viewBox. Use `currentColor` for ink and the
 * `ACCENT` style for the one highlighted element on the after side.
 */

export const ACCENT = { stroke: 'var(--color-accent)' } as const;
export const ACCENT_FILL = { fill: 'var(--color-accent)' } as const;

interface Panel {
  art: React.ReactNode;
  label: string;
}

interface BeforeAfterStripProps {
  before: Panel;
  after: Panel;
  /** One plain sentence describing what the strip shows (§13.10). */
  alt: string;
  /** `dark` for use on --color-bg-dark bands such as the hero. */
  tone?: 'light' | 'dark';
  className?: string;
}

export function BeforeAfterStrip({ before, after, alt, tone = 'light', className }: BeforeAfterStripProps) {
  const dark = tone === 'dark';

  const panel = cn(
    'flex flex-1 flex-col gap-3 rounded-[var(--radius-md)] border p-4',
    dark
      ? 'border-[color-mix(in_srgb,var(--color-text-on-dark)_14%,transparent)] bg-[color-mix(in_srgb,var(--color-text-on-dark)_5%,transparent)]'
      : 'border-[var(--color-border)] bg-[var(--color-bg-primary)]'
  );
  const ink = dark
    ? 'text-[color-mix(in_srgb,var(--color-text-on-dark)_62%,transparent)]'
    : 'text-[var(--color-text-tertiary)]';

  return (
    <figure role="img" aria-label={alt} className={cn('@container w-full text-left', className)}>
      <div className="flex flex-col items-stretch gap-2 @sm:flex-row @sm:items-center">
        <div className={panel}>
          <svg viewBox="0 0 160 100" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cn('w-full', ink)}>
            {before.art}
          </svg>
          <p className={cn('text-[13px] font-medium leading-snug', ink)}>{before.label}</p>
        </div>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={cn('h-5 w-5 shrink-0 self-center rotate-90 @sm:rotate-0', ink)}
        >
          <path d="M4 12h15m-5-5 5 5-5 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className={cn(panel, 'border-[var(--color-accent)]')}>
          <svg viewBox="0 0 160 100" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={cn('w-full', ink)}>
            {after.art}
          </svg>
          <p
            className={cn(
              'text-[13px] font-semibold leading-snug',
              dark ? 'text-[var(--color-text-on-dark)]' : 'text-[var(--color-accent-text)]'
            )}
          >
            {after.label}
          </p>
        </div>
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------- shared art */

/** A person seen as a simple glyph — head and shoulders, never a face. */
export function Person({ x, y, s = 1, style }: { x: number; y: number; s?: number; style?: React.CSSProperties }) {
  return (
    <g stroke="currentColor" style={style} transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="0" cy="-9" r="5" />
      <path d="M-9 6c0-6 4-9 9-9s9 3 9 9" />
    </g>
  );
}

/** A stack of `n` sheets rising from `base` — the pile of manual work. */
export function Sheets({ cx, n, base = 72, style }: { cx: number; n: number; base?: number; style?: React.CSSProperties }) {
  return (
    <g stroke="currentColor" style={style}>
      {Array.from({ length: n }, (_, j) => (
        <rect key={j} x={cx - 12} y={base - j * 5} width={24} height={4} rx={1} />
      ))}
    </g>
  );
}
