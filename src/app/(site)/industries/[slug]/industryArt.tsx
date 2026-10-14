import { ACCENT, Person, Sheets } from '@/components/atoms/BeforeAfterStrip';

/**
 * Before / after strip per industry, keyed by slug (copy-creator skill §13).
 * Each one draws the scene the intro copy in src/lib/industries.ts names.
 * Industries without copy get no strip — no scene, no image.
 */

function Check({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g style={ACCENT}>
      <circle cx={cx} cy={cy} r={6} />
      <path d={`m${cx - 3} ${cy} 2 2 4-4`} />
    </g>
  );
}

function Clock({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke="currentColor">
      <circle cx={cx} cy={cy} r={12} />
      <path d={`M${cx} ${cy - 7}v7l6 4`} />
    </g>
  );
}

function House({ x, y, style }: { x: number; y: number; style?: React.CSSProperties }) {
  return <path d={`M${x - 6} ${y}v-6l6-5 6 5v6z`} stroke="currentColor" style={style} />;
}

const SCREENS = [10, 40, 70];

function ListingCard() {
  return (
    <g stroke="currentColor">
      <rect x={8} y={24} width={40} height={52} rx={3} />
      <House x={28} y={46} />
      <path d="M16 56h24M16 63h16" />
    </g>
  );
}

function ListingScreen({ y, style }: { y: number; style?: React.CSSProperties }) {
  return (
    <g stroke="currentColor">
      <rect x={112} y={y} width={40} height={20} rx={2} />
      <House x={122} y={y + 15} style={style} />
      <path d={`M132 ${y + 8}h14M132 ${y + 13}h9`} />
    </g>
  );
}

function Calendar({ x, y }: { x: number; y: number }) {
  return (
    <g stroke="currentColor">
      {[0, 1, 2].flatMap((r) =>
        [0, 1, 2].map((c) =>
          r === 1 && c === 2 ? (
            <path key={`${r}${c}`} d={`M${x + c * 11} ${y + r * 11}l6 6m0-6-6 6`} />
          ) : (
            <rect key={`${r}${c}`} x={x + c * 11} y={y + r * 11} width={6} height={6} rx={1} />
          )
        )
      )}
    </g>
  );
}

function Bubble({ x, y }: { x: number; y: number }) {
  return (
    <g stroke="currentColor">
      <path d={`M${x + 4} ${y}h16a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H${x + 10}l-4 4v-4h-2a4 4 0 0 1-4-4V${y + 4}a4 4 0 0 1 4-4z`} />
      <path d={`M${x + 7} ${y + 7}h.01M${x + 12} ${y + 7}h.01M${x + 17} ${y + 7}h.01`} strokeWidth={2.5} />
    </g>
  );
}

function Truck({ x, y }: { x: number; y: number }) {
  return (
    <g stroke="currentColor">
      <rect x={x} y={y} width={26} height={16} rx={1.5} />
      <path d={`M${x + 26} ${y + 4}h8l5 6v6h-13`} />
      <circle cx={x + 7} cy={y + 19} r={3} />
      <circle cx={x + 31} cy={y + 19} r={3} />
    </g>
  );
}

function Phone({ x, y, ringing = false }: { x: number; y: number; ringing?: boolean }) {
  return (
    <g stroke="currentColor">
      <rect x={x} y={y} width={10} height={16} rx={2} />
      {ringing && <path d={`M${x + 14} ${y + 3}c2 2 2 8 0 10M${x + 18} ${y}c4 4 4 12 0 16`} />}
    </g>
  );
}

function Crate({ x, y }: { x: number; y: number }) {
  return <path d={`M${x} ${y}h18v14H${x}zM${x} ${y + 5}h18`} stroke="currentColor" />;
}

const PANEL = { x: 6, y: 22, w: 44, h: 56 };

export const INDUSTRY_STRIPS: Record<string, {
  before: { art: React.ReactNode; label: string };
  after: { art: React.ReactNode; label: string };
  alt: string;
}> = {
  legal: {
    before: {
      label: 'Hours lost to admin.',
      art: (
        <>
          <Person x={30} y={88} />
          <Sheets cx={80} n={9} base={80} />
          <Clock cx={128} cy={40} />
        </>
      ),
    },
    after: {
      label: 'Hours back on client work.',
      art: (
        <>
          <Person x={30} y={88} />
          <Person x={70} y={88} />
          <path d="M14 96h72" stroke="currentColor" />
          <Sheets cx={118} n={3} base={86} style={ACCENT} />
          <Check cx={142} cy={80} />
        </>
      ),
    },
    alt: 'Two panels. On the left, a lawyer faces a tall pile of intake forms while the clock runs. On the right, the forms are handled and the lawyer sits with a client.',
  },

  'real-estate': {
    before: {
      label: 'One listing, typed three times.',
      art: (
        <>
          <ListingCard />
          <Person x={80} y={88} />
          {SCREENS.map((y) => (
            <g key={y}>
              <ListingScreen y={y} />
              <path d={`M86 70L110 ${y + 10}`} stroke="currentColor" strokeDasharray="2 3" />
            </g>
          ))}
        </>
      ),
    },
    after: {
      label: 'Entered once. Current everywhere.',
      art: (
        <>
          <ListingCard />
          {SCREENS.map((y) => (
            <g key={y}>
              <ListingScreen y={y} style={ACCENT} />
              <path d={`M52 50L108 ${y + 10}`} style={ACCENT} />
            </g>
          ))}
        </>
      ),
    },
    alt: 'Two panels. On the left, an agent types the same listing by hand into three separate systems. On the right, the listing is entered once and appears in all three.',
  },

  healthcare: {
    before: {
      label: 'Three systems. No full picture.',
      art: (
        <>
          {[6, 58, 110].map((x) => (
            <rect key={x} x={x} y={PANEL.y} width={PANEL.w} height={PANEL.h} rx={3} stroke="currentColor" />
          ))}
          <path d="M12 34h28M12 42h22M12 50h30M12 58h18" stroke="currentColor" />
          <Calendar x={65} y={32} />
          <path d="M116 34h26M116 42h18M116 50h22M116 64h28M116 67h28" stroke="currentColor" />
        </>
      ),
    },
    after: {
      label: 'One view. Flagged early.',
      art: (
        <>
          <rect x={8} y={14} width={104} height={72} rx={3} stroke="currentColor" />
          <path d="M8 24h104" stroke="currentColor" />
          {[34, 46, 70].map((y) => (
            <path key={y} d={`M16 ${y}h60M84 ${y}h18`} stroke="currentColor" />
          ))}
          <rect x={12} y={52} width={96} height={12} rx={2} style={{ ...ACCENT, fill: 'var(--color-accent)', fillOpacity: 0.15 }} />
          <path d="M16 58h52" style={ACCENT} />
          <path d="M96 63V53l8 3-8 3" style={ACCENT} />
          <Person x={138} y={88} />
        </>
      ),
    },
    alt: 'Two panels. On the left, patient records, appointments and billing sit in three separate systems, with a missed appointment hidden in one. On the right, one view brings them together and flags that patient for a clinician to review.',
  },

  'consumer-goods': {
    before: {
      label: 'Five texts to find one item.',
      art: (
        <>
          {[[6, 34], [28, 8], [68, 2], [108, 8], [130, 34]].map(([x, y]) => (
            <Bubble key={x} x={x} y={y} />
          ))}
          <Person x={80} y={88} />
          <rect x={92} y={70} width={10} height={16} rx={2} stroke="currentColor" />
        </>
      ),
    },
    after: {
      label: 'One live record of every unit.',
      art: (
        <>
          <rect x={50} y={6} width={50} height={88} rx={6} style={ACCENT} />
          {[22, 34, 46, 58, 70].map((y, i) => (
            <g key={y}>
              <rect x={58} y={y - 3} width={6} height={6} rx={1} stroke="currentColor" />
              <path d={`M70 ${y}h${i % 2 ? 14 : 18}`} stroke="currentColor" />
              <circle cx={92} cy={y} r={2} style={ACCENT} />
            </g>
          ))}
          <Person x={130} y={88} />
        </>
      ),
    },
    alt: 'Two panels. On the left, the owner sends five messages to different people to find one product. On the right, one live list on a phone shows every unit and where it is.',
  },

  'logistics-supply-chain': {
    before: {
      label: 'The customer tells you first.',
      art: (
        <>
          <path d="M10 30h140" stroke="currentColor" strokeDasharray="2 4" />
          <Truck x={60} y={12} />
          <Clock cx={122} cy={24} />
          <Person x={56} y={88} />
          <Phone x={70} y={66} ringing />
        </>
      ),
    },
    after: {
      label: 'Flagged early. Time to fix.',
      art: (
        <>
          <path d="M10 30h140" stroke="currentColor" strokeDasharray="2 4" />
          <Truck x={30} y={12} />
          <path d="M112 6l11 18h-22z M112 13v5" style={ACCENT} />
          <circle cx={112} cy={21.5} r={0.5} style={ACCENT} />
          <path d="M112 34c0 20-30 22-44 34" style={ACCENT} strokeDasharray="3 3" />
          <Person x={56} y={88} />
          <Check cx={80} cy={72} />
        </>
      ),
    },
    alt: 'Two panels. On the left, a delivery truck is stuck and the dispatcher only finds out when the customer phones. On the right, the delay is flagged ahead on the route and the dispatcher is told while there is still time to fix it.',
  },

  'food-and-drinks': {
    before: {
      label: 'Clipboard counts. Orders by text.',
      art: (
        <>
          <rect x={10} y={20} width={36} height={52} rx={3} stroke="currentColor" />
          <path d="M20 16h16v8H20z" stroke="currentColor" />
          {[34, 44, 54, 64].map((y) => (
            <path key={y} d={`M16 ${y}h4M24 ${y}h16`} stroke="currentColor" />
          ))}
          <Bubble x={62} y={10} />
          <Bubble x={92} y={28} />
          <Crate x={112} y={74} />
          <Crate x={132} y={74} />
          <Crate x={122} y={58} />
          <Crate x={132} y={42} />
          <Person x={74} y={88} />
        </>
      ),
    },
    after: {
      label: 'Order drafted. Manager approves.',
      art: (
        <>
          <rect x={10} y={14} width={64} height={72} rx={4} stroke="currentColor" />
          {[28, 40, 52].map((y) => (
            <g key={y}>
              <rect x={18} y={y - 3} width={6} height={6} rx={1} stroke="currentColor" />
              <path d={`M30 ${y}h24`} stroke="currentColor" />
            </g>
          ))}
          <rect x={16} y={62} width={52} height={16} rx={2} style={{ ...ACCENT, fill: 'var(--color-accent)', fillOpacity: 0.15 }} />
          <path d="M22 70h28" style={ACCENT} />
          <Check cx={60} cy={70} />
          <Crate x={92} y={74} />
          <Person x={132} y={88} />
        </>
      ),
    },
    alt: 'Two panels. On the left, a manager counts stock on a clipboard, texts suppliers and the storeroom fills with extra crates. On the right, one stock list drafts the next order and the manager approves it.',
  },
};
