import { ACCENT, Person } from '@/components/atoms/BeforeAfterStrip';

/**
 * Before / after art for the four pillar slides, in PILLARS order.
 * Scenes and labels come from the copy-creator skill §13.5. Pillar 2 keeps
 * the person in the after panel (AI assists her); Pillar 3 has no person at
 * all (nobody needs to be watching). Don't swap that.
 */

const ACCENT_SOFT = { ...ACCENT, fill: 'var(--color-accent)', fillOpacity: 0.15 } as const;

function Screen({ x, children }: { x: number; children?: React.ReactNode }) {
  return (
    <g stroke="currentColor">
      <rect x={x} y={18} width={44} height={64} rx={3} />
      <path d={`M${x} 26h44M${x + 6} 36h28M${x + 6} 42h20`} />
      {children}
    </g>
  );
}

function Lines({ x, dashed = false, style }: { x: number; dashed?: boolean; style?: React.CSSProperties }) {
  return (
    <path
      d={[28, 38, 48, 58, 68].map((y) => `M${x + 6} ${y}h32`).join('')}
      stroke="currentColor"
      strokeDasharray={dashed ? '2 4' : undefined}
      style={style}
    />
  );
}

function PageStack() {
  return (
    <g stroke="currentColor">
      <path d="M56 22V12h60v66h-10M50 28V18h60v66h-6" />
      <rect x={44} y={24} width={60} height={68} rx={2} />
      <path d="M50 36h40M50 44h46M50 52h34M50 60h42M50 68h30" />
    </g>
  );
}

export const PILLAR_STRIPS = [
  {
    before: {
      label: 'Three teams. Three versions.',
      art: (
        <>
          <Screen x={6}><rect x={12} y={58} width={22} height={9} rx={1} stroke="currentColor" /></Screen>
          <Screen x={58}><rect x={64} y={56} width={32} height={12} rx={6} stroke="currentColor" /></Screen>
          <Screen x={110}><rect x={116} y={60} width={14} height={6} fill="currentColor" fillOpacity={0.4} stroke="currentColor" /></Screen>
        </>
      ),
    },
    after: {
      label: 'One way. Everywhere.',
      art: (
        <>
          {[6, 58, 110].map((x) => (
            <Screen key={x} x={x}><rect x={x + 6} y={58} width={24} height={9} rx={4.5} style={ACCENT_SOFT} /></Screen>
          ))}
        </>
      ),
    },
    alt: 'Two panels. On the left, the same button drawn three different ways on three screens. On the right, one button style used on every screen.',
  },
  {
    before: {
      label: 'Typed by hand, again.',
      art: (
        <>
          <rect x={10} y={16} width={44} height={62} rx={3} stroke="currentColor" />
          <Lines x={10} />
          <rect x={106} y={16} width={44} height={62} rx={3} stroke="currentColor" />
          <Lines x={106} dashed />
          <path d="M58 28c14-8 32-8 44 0M58 40c14-8 32-8 44 0" stroke="currentColor" strokeDasharray="2 3" />
          <Person x={80} y={82} />
        </>
      ),
    },
    after: {
      label: 'Done for her. She approves it.',
      art: (
        <>
          <rect x={10} y={16} width={44} height={62} rx={3} stroke="currentColor" />
          <Lines x={10} />
          <rect x={106} y={16} width={44} height={62} rx={3} style={ACCENT} />
          <Lines x={106} style={ACCENT} />
          <path d="M60 34h38m-5-5 5 5-5 5" stroke="currentColor" />
          <Person x={80} y={82} />
          <circle cx={94} cy={64} r={6} style={ACCENT} />
          <path d="m91 64 2 2 4-4" style={ACCENT} />
        </>
      ),
    },
    alt: 'Two panels. On the left, a person copying the same facts by hand from one list to another. On the right, the list is filled in for her and she approves it.',
  },
  {
    before: {
      label: 'Found after it cost money.',
      art: (
        <>
          <PageStack />
          <path d="M100 76l9 15H91z M100 82v4" stroke="currentColor" />
          <path d="M109 86c8 0 10-14 18-14" stroke="currentColor" strokeDasharray="2 3" />
          <path d="M126 66h18l6 6-6 6h-18z" stroke="currentColor" />
          <circle cx={131} cy={72} r={1.5} fill="currentColor" />
        </>
      ),
    },
    after: {
      label: 'Caught early. No one on call.',
      art: (
        <>
          <PageStack />
          <path d="M126 6l11 18h-22z M126 13v5" style={ACCENT} />
          <circle cx={126} cy={21.5} r={0.5} style={ACCENT} />
          <circle cx={146} cy={34} r={7} stroke="currentColor" />
          <path d="M146 30v4l3 2" stroke="currentColor" />
          <path d="M116 26l-12 6" style={ACCENT} />
        </>
      ),
    },
    alt: 'Two panels. On the left, a problem buried at the bottom of a pile of reports, found late with a cost tag. On the right, the same problem flagged at the top early, with a time on it and no one watching.',
  },
  {
    before: {
      label: 'It all lives in one head.',
      art: (
        <>
          <Person x={36} y={86} s={1.3} />
          {[14, 24, 34, 44].map((y, i) => (
            <rect key={y} x={22 + (i % 2) * 4} y={y} width={24} height={7} rx={1.5} stroke="currentColor" />
          ))}
          {[98, 120, 142].map((x) => <Person key={x} x={x} y={88} s={0.9} />)}
          <path d="M112 58h.01M120 58h.01M128 58h.01" stroke="currentColor" strokeWidth={3} />
        </>
      ),
    },
    after: {
      label: 'Day 5. Working on her own.',
      art: (
        <>
          <path
            d="M44 44c-8-6-22-6-28-2v34c6-4 20-4 28 2 8-6 22-6 28-2V42c-6-4-20-4-28 2zM44 44v34"
            stroke="currentColor"
          />
          <path d="M22 52h16M22 60h16M50 52h16M50 60h16" stroke="currentColor" />
          <Person x={100} y={86} />
          <rect x={122} y={20} width={26} height={24} rx={3} style={ACCENT} />
          <path d="M122 28h26m-17 6 3 3 6-6" style={ACCENT} />
        </>
      ),
    },
    alt: 'Two panels. On the left, one person holds all the knowledge while three others wait. On the right, a new hire works on their own from an open guide, with day five checked off.',
  },
] as const;
