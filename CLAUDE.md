# ADL Website - Development Documentation

## Overview

This document provides context for AI assistants and developers working on the Artemis Design Labs website.

## Tech Stack

- **Framework:** Next.js 15.5 (App Router)
- **Styling:** Tailwind CSS 4.1
- **Language:** TypeScript 5
- **Database:** SQLite with Prisma ORM
- **Package Manager:** npm

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── pricing/            # Pricing page
│   ├── services/           # Services page
│   ├── work/               # Portfolio/case studies
│   └── api/                # API routes
│       └── contact/        # Contact form handler
├── components/
│   ├── atoms/              # Smallest UI components
│   │   ├── Button/         # Button with variants
│   │   └── ThemeToggle/    # Dark/light mode toggle
│   ├── molecules/          # Composed components
│   │   └── SectionHeader/  # Section header with eyebrow
│   ├── organisms/          # Page sections
│   │   ├── Hero/           # Homepage hero section
│   │   ├── ProblemSection/ # 5 emotional truths
│   │   ├── ServicesSection/# 3 service pathways
│   │   ├── SocialProofSection/
│   │   ├── CaseStudySection/
│   │   └── CTASection/     # Final call-to-action
│   ├── Navigation.tsx      # Global navigation
│   └── Footer.tsx          # Global footer
├── context/
│   └── ThemeContext.tsx    # Theme state management
├── hooks/                  # Custom React hooks
├── lib/
│   └── cn.ts               # Class name utility (clsx + tailwind-merge)
├── styles/
│   └── tokens.css          # Design tokens (colors, spacing, typography)
└── prisma/
    └── schema.prisma       # Database schema
```

## Design System

### Design Tokens

All design tokens are defined in `/src/styles/tokens.css`. The system uses CSS custom properties for runtime theming.

#### Color Tokens (Dark Mode - Default)

```css
--color-bg-primary: #0A0A0A;      /* Main background */
--color-bg-secondary: #121212;    /* Section backgrounds */
--color-bg-elevated: #1F1F1F;     /* Cards, elevated surfaces */
--color-text-primary: #FAFAFA;    /* Main text */
--color-text-secondary: #A1A1AA;  /* Secondary text */
--color-accent: #14B8A6;          /* Teal accent color */
```

#### Light Mode

Light mode overrides are applied via `[data-theme="light"]` selector.

### Typography

- **Primary Font:** Inter (sans-serif)
- **Monospace:** JetBrains Mono

Font sizes use CSS custom properties:
- `--text-display`: 72px (hero headlines)
- `--text-h1`: 56px (page titles)
- `--text-h2`: 40px (section headers)
- `--text-body`: 16px (body text)

### Components

#### Button

```tsx
import { Button } from '@/components/atoms/Button';

<Button variant="primary" size="lg">Let's Talk</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="ghost">Cancel</Button>
```

Variants: `primary`, `secondary`, `ghost`, `link`
Sizes: `sm`, `md`, `lg`

#### SectionHeader

```tsx
import { SectionHeader } from '@/components/molecules/SectionHeader';

<SectionHeader
  eyebrow="How We Help"
  title="Three ways we eliminate friction"
  description="Optional description text"
  alignment="center" // or "left"
/>
```

#### Theme Toggle

```tsx
import { ThemeToggle } from '@/components/atoms/ThemeToggle';

<ThemeToggle /> // Renders sun/moon icon button
```

### Using the Theme

```tsx
import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  // theme: 'dark' | 'light'
}
```

### Class Name Utility

Use `cn()` for conditional class names:

```tsx
import { cn } from '@/lib/cn';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  variant === 'primary' && 'primary-styles'
)} />
```

## Homepage Sections

The homepage (`/src/app/page.tsx`) is composed of these sections:

1. **Hero** - Emotional hook with "Your engineers shouldn't be translating Figma files"
2. **ProblemSection** - 5 emotional truths that resonate with startup founders
3. **ServicesSection** - 3 service pathways (Creation, Handoff, Maintenance)
4. **SocialProofSection** - Metrics, testimonials, client logos
5. **CaseStudySection** - Featured before/after case study
6. **CTASection** - Final call-to-action

## Brand Voice

- Speak founder-to-founder, not vendor-to-client
- Acknowledge real startup pressures: runway, velocity, enterprise deals
- Be direct - no corporate fluff
- Use "we" and "your team"

### Key Messaging

- Primary: "Your engineers shouldn't be translating Figma files"
- We deliver Figma AND production React
- Design systems that ship, not files that sit

### CTAs

- Primary: "Let's Talk" / "Book a Conversation"
- Secondary: "Get a Free Audit"
- Tertiary: "Join the UI Forge Waitlist"

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/styles/tokens.css` | All design tokens |
| `src/context/ThemeContext.tsx` | Theme state management |
| `src/app/layout.tsx` | Root layout with providers |
| `src/components/Navigation.tsx` | Global navigation |
| `src/lib/cn.ts` | Class name utility |

## Adding New Sections

1. Create component in `/src/components/organisms/[SectionName]/`
2. Export from index.ts
3. Import and add to page.tsx
4. Use CSS variables for colors: `var(--color-text-primary)`
5. Use `cn()` for conditional classes

## Theme-Aware Styling

Always use CSS variables for theme-aware colors:

```tsx
// Good
className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"

// Avoid (won't respond to theme changes)
className="bg-gray-900 text-white"
```

## Recent Changes (January 2025)

### Homepage Redesign

- Implemented dark-mode-primary design system
- Created unified design token system
- Built reusable component library (atoms, molecules, organisms)
- Added theme toggle with localStorage persistence
- Refactored homepage with new sections and messaging
- Updated Navigation and Footer for dark mode

### Files Created

- `/src/styles/tokens.css` - Design tokens
- `/src/context/ThemeContext.tsx` - Theme provider
- `/src/lib/cn.ts` - Class utility
- `/src/components/atoms/Button/` - Button component
- `/src/components/atoms/ThemeToggle/` - Theme toggle
- `/src/components/molecules/SectionHeader/` - Section headers
- `/src/components/organisms/Hero/` - Hero section
- `/src/components/organisms/ProblemSection/` - Problem section
- `/src/components/organisms/ServicesSection/` - Services section
- `/src/components/organisms/SocialProofSection/` - Social proof
- `/src/components/organisms/CaseStudySection/` - Case study
- `/src/components/organisms/CTASection/` - CTA section

### Files Modified

- `/src/app/globals.css` - Refactored with token imports
- `/src/app/layout.tsx` - Added ThemeProvider
- `/src/app/page.tsx` - Refactored with new sections
- `/src/components/Navigation.tsx` - Dark mode support
- `/src/components/Footer.tsx` - Dark mode support

## Next Steps (Phase 2)

- [ ] Update other pages (services, work, about, pricing, contact)
- [ ] Create UI Forge product page
- [ ] Add entrance animations with Intersection Observer
- [ ] Integrate real case study content with images
- [ ] Add client logos to social proof section
