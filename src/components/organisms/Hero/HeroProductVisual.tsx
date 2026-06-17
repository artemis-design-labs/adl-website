'use client';

const TOKENS = [
  { key: 'color.accent', value: '#0D9488' },
  { key: 'spacing.component', value: '48px' },
  { key: 'radius.md', value: '6px' },
];

const OUTPUT_LINES = [
  '47 components · production-ready',
  'TypeScript + React + WCAG 2.1 AA',
  '5 states · 0 Figma-only output',
];

export function HeroProductVisual() {
  return (
    <div className="relative w-full max-w-[460px]">
      {/* Outer ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(45, 212, 191, 0.12), transparent 70%)',
        }}
      />

      {/* Main panel */}
      <div
        className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-lg)] animate-glow-pulse"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-strong)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-strong)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border-strong)]" />
          </div>
          <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] ml-1 truncate">
            design-system / button.tsx
          </span>
          <span className="ml-auto font-[var(--font-mono)] text-[10px] text-[var(--color-accent-text)] flex-shrink-0">
            ✓ verified
          </span>
        </div>

        {/* Tokens */}
        <div className="px-5 py-4 border-b border-[var(--color-border)]">
          <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-3">
            › tokens
          </p>
          <div className="space-y-2">
            {TOKENS.map((t) => (
              <div key={t.key} className="flex items-center justify-between gap-4">
                <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-secondary)] truncate">
                  {t.key}
                </span>
                <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-accent-text)] flex-shrink-0">
                  {t.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Component states preview */}
        <div className="px-5 py-4 border-b border-[var(--color-border)]">
          <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-3">
            › component states
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              className="h-7 px-3 rounded bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-[var(--font-mono)] text-[11px] flex items-center gap-1.5"
            >
              Primary <span className="opacity-60 text-[9px]">→</span>
            </div>
            <div
              className="h-7 px-3 rounded border border-[var(--color-accent)] text-[var(--color-accent-text)] font-[var(--font-mono)] text-[11px] flex items-center"
            >
              Secondary
            </div>
            <div
              className="h-7 px-3 rounded border border-dashed border-[var(--color-border-strong)] text-[var(--color-text-muted)] font-[var(--font-mono)] text-[11px] flex items-center opacity-60"
            >
              Loading…
            </div>
            <div
              className="h-7 px-3 rounded border border-[var(--color-border)] text-[var(--color-text-disabled)] font-[var(--font-mono)] text-[11px] flex items-center opacity-40"
            >
              Disabled
            </div>
          </div>
        </div>

        {/* Generated output */}
        <div className="px-5 py-4 bg-[var(--color-bg-inset)]">
          <div className="flex items-center justify-between mb-3">
            <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              › generated output
            </p>
            <span className="font-[var(--font-mono)] text-[9px] text-[var(--color-accent-text)]">
              AI · 190K examples
            </span>
          </div>
          <div className="space-y-2">
            {OUTPUT_LINES.map((line) => (
              <div key={line} className="flex items-center gap-2">
                <span className="text-[var(--color-accent-text)] font-[var(--font-mono)] text-[11px] flex-shrink-0">
                  ✓
                </span>
                <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-secondary)]">
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating metric badges */}
      <div
        aria-hidden="true"
        className="absolute -top-3 -right-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border-accent)] rounded-lg px-3 py-1.5 shadow-[var(--shadow-md)]"
        style={{ opacity: 0.95 }}
      >
        <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-accent-text)]">3 weeks</span>
        <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-muted)]"> delivery</span>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -left-3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 shadow-[var(--shadow-md)]"
        style={{ opacity: 0.90 }}
      >
        <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-accent-text)]">PR #847</span>
        <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-muted)]"> merged ✓</span>
      </div>
    </div>
  );
}
