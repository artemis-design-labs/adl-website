/**
 * Decorative backdrop for the hero — wireframe ghosts, training-log
 * fragments, design-tool measurement marks, and a tiny loss-curve.
 * All `aria-hidden`, all `pointer-events-none`, hidden below md.
 */

const FRAGMENTS_TOP_LEFT = [
  '$ ./adl train',
  '> loading.dataset(190_000)',
  '> validate.by(senior_engineer)',
];

const FRAGMENTS_TOP_RIGHT = [
  'epoch 14 / 40',
  'loss · 0.0023',
  'accuracy · 0.94',
];

const FRAGMENTS_BOTTOM_LEFT = [
  'tokens/spacing/lg',
  'tokens/color/teal/500',
  'components/button/primary',
  'states · loading | error | empty',
];

const FRAGMENTS_BOTTOM_RIGHT = [
  '> reviewing PR #847',
  'wcag.2_1.AA',
  'a11y · focus.visible',
  'shipped.to(production)',
];

export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10 hidden md:block"
    >
      {/* Grid */}
      <Grid />

      {/* Soft violet radial glow */}
      <div
        className="absolute inset-x-0 top-0 h-[70vh]"
        style={{ background: 'var(--gradient-subtle)' }}
      />

      {/* Floating training fragments */}
      <FragmentColumn
        items={FRAGMENTS_TOP_LEFT}
        className="absolute top-[14vh] left-[3vw] text-left items-start"
      />
      <FragmentColumn
        items={FRAGMENTS_TOP_RIGHT}
        className="absolute top-[14vh] right-[3vw] text-right items-end"
      />
      <FragmentColumn
        items={FRAGMENTS_BOTTOM_LEFT}
        className="absolute bottom-[12vh] left-[3vw] text-left items-start"
      />
      <FragmentColumn
        items={FRAGMENTS_BOTTOM_RIGHT}
        className="absolute bottom-[12vh] right-[3vw] text-right items-end"
      />

      {/* Wireframe component ghosts */}
      <WireframeButton className="absolute top-[42%] left-[5vw]" />
      <WireframeCard className="absolute top-[44%] right-[5vw]" />

      {/* Loss-curve sparkline */}
      <LossCurve className="absolute top-[18vh] right-[3vw] mt-20" />

      {/* Corner measurement marks */}
      <CornerMark className="top-3 left-3" label="0,0" />
      <CornerMark className="top-3 right-3" label="1440,0" align="right" />
      <CornerMark className="bottom-3 left-3" label="0,900" />
      <CornerMark className="bottom-3 right-3" label="1440,900" align="right" />
    </div>
  );
}

function Grid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          'linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
      }}
    />
  );
}

function FragmentColumn({ items, className }: { items: string[]; className: string }) {
  return (
    <ul
      className={`${className} flex flex-col gap-2 font-[var(--font-mono)] text-[11px] tracking-[0.04em] text-[var(--color-text-tertiary)] opacity-[0.55]`}
    >
      {items.map((line, i) => (
        <li
          key={i}
          className="leading-snug"
          style={{ opacity: 1 - i * 0.18 }}
        >
          {line}
        </li>
      ))}
    </ul>
  );
}

function WireframeButton({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} opacity-[0.18]`}>
      <div className="relative w-[140px] h-9 rounded-md border border-dashed border-[var(--color-text-tertiary)] flex items-center justify-between px-3">
        <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
          btn.primary
        </span>
        <span className="w-2 h-2 rounded-full border border-[var(--color-accent)]" />
      </div>
      <div className="mt-1 flex justify-between">
        <span className="font-[var(--font-mono)] text-[8px] tracking-[0.12em] text-[var(--color-text-tertiary)]">↤ 140 ↦</span>
      </div>
    </div>
  );
}

function WireframeCard({ className = '' }: { className?: string }) {
  return (
    <div className={`${className} opacity-[0.15]`}>
      <div className="w-[180px] h-[110px] rounded-lg border border-dashed border-[var(--color-text-tertiary)] p-3 flex flex-col gap-2">
        <div className="h-2 w-1/2 rounded-sm bg-[var(--color-text-tertiary)] opacity-50" />
        <div className="h-1.5 w-3/4 rounded-sm bg-[var(--color-text-tertiary)] opacity-30" />
        <div className="h-1.5 w-2/3 rounded-sm bg-[var(--color-text-tertiary)] opacity-30" />
        <div className="mt-auto flex items-center gap-2">
          <div className="h-3 w-12 rounded-sm border border-[var(--color-accent)] opacity-60" />
          <div className="h-3 w-9 rounded-sm border border-[var(--color-text-tertiary)]" />
        </div>
      </div>
      <p className="mt-1 text-right font-[var(--font-mono)] text-[8px] tracking-[0.12em] text-[var(--color-text-tertiary)]">
        components/card.featured
      </p>
    </div>
  );
}

function LossCurve({ className = '' }: { className?: string }) {
  // Synthetic loss curve: starts high, decays. Drawn as SVG path.
  const points = [
    [0, 28],   [10, 22], [20, 17], [30, 14], [40, 11],
    [50, 9],   [60, 8],  [70, 7],  [80, 6.5],[90, 6],
    [100, 5.8],[110, 5.7],[120, 5.6],
  ];
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`)
    .join(' ');

  return (
    <div className={`${className} opacity-[0.30]`}>
      <div className="mb-1 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] text-right">
        train.loss
      </div>
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
        <line x1="0" y1="32" x2="120" y2="32" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" className="text-[var(--color-text-tertiary)]" />
        <path d={path} stroke="var(--color-accent)" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CornerMark({
  className,
  label,
  align = 'left',
}: {
  className: string;
  label: string;
  align?: 'left' | 'right';
}) {
  return (
    <div
      className={`absolute ${className} font-[var(--font-mono)] text-[9px] tracking-[0.12em] text-[var(--color-text-tertiary)] opacity-50 flex items-center gap-1.5`}
      style={{ flexDirection: align === 'right' ? 'row-reverse' : 'row' }}
    >
      <span className="w-2 h-2 border-l border-t border-[var(--color-text-tertiary)]" style={{ transform: align === 'right' ? 'scaleX(-1)' : undefined }} />
      <span>{label}</span>
    </div>
  );
}
