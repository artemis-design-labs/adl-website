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

### Visual Language: Severance-Style Corporate Minimalism

The website uses a sterile, controlled, minimal aesthetic inspired by corporate environments:
- Light mode primary (dark mode toggle available)
- Desaturated whites and grays
- Muted sage/beige accents (used sparingly)
- Flat, geometric layouts
- No gradients or dramatic shadows
- Cold, fluorescent lighting feel

### Design Tokens

All design tokens are defined in `/src/styles/tokens.css`. The system uses CSS custom properties for runtime theming.

#### Color Tokens (Light Mode - Default)

```css
--color-bg-primary: #FAFAFA;      /* Main background */
--color-bg-secondary: #F5F5F4;    /* Section backgrounds */
--color-bg-elevated: #FFFFFF;     /* Cards, elevated surfaces */
--color-text-primary: #1C1C1C;    /* Main text */
--color-text-secondary: #525252;  /* Secondary text */
--color-text-muted: #A3A3A3;      /* Muted text */
--color-accent: #7D8471;          /* Muted sage accent */
--color-border: #E5E5E5;          /* Borders */
```

#### Dark Mode

Dark mode overrides are applied via `[data-theme="dark"]` selector.

### Typography

- **Primary Font:** Inter (sans-serif)
- **Monospace:** JetBrains Mono

Font sizes use Tailwind classes with responsive breakpoints:
- Hero headlines: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- Section headers: `text-2xl md:text-3xl lg:text-4xl`
- Body text: `text-base` (16px)
- Small text: `text-sm` (14px)
- Micro text: `text-xs` (12px)

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

1. **Hero** - Typing animation: "From Bootstrapped to Unicorn / We Grow with You."
2. **ProblemSection** - 5 friction pain points that resonate with startup founders
3. **ServicesSection** - 3 service pathways (Creation, Maintenance, Handoff) with AI-powered messaging
4. **SocialProofSection** - Metrics, testimonials, client logos
5. **CaseStudySection** - Featured before/after case study (HANDS AI)
6. **CTASection** - Final call-to-action

## Brand Voice

- Speak founder-to-founder, not vendor-to-client
- Acknowledge real startup pressures: runway, velocity, enterprise deals
- Be direct - no corporate fluff
- Emphasize AI-human hybrid approach: "Human Expertise with AI Velocity"
- Use "we" and "your team"

### Key Messaging

- Primary: "Human Expertise with AI Velocity"
- AI-powered tools accelerate delivery
- Design systems that ship, not files that sit
- Enterprise-grade output at startup speed

### CTAs

- Primary: "About Us" / "Book a Conversation"
- Secondary: "Get a Free Audit"
- Tertiary: "UI Forge Waitlist"

## Navigation

Current navigation links:
- Products
- Services
- Work
- Pricing
- About
- Contact (CTA button)

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

## Responsive Grid Patterns

### 1/2/3 Column Grid (Services, Problems)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
  {items.map((item) => (
    <article className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
      {/* content */}
    </article>
  ))}
</div>
```

## Recent Changes (February 2025)

### Visual Redesign: Severance-Style Corporate Minimalism

- Changed from dark-mode-primary to light-mode-primary
- Updated color palette to desaturated whites/grays with muted sage accent
- Removed all gradients, glows, and dramatic shadows
- Implemented flat, geometric layouts
- Updated all components for the new aesthetic

### Homepage Content Updates

- Hero: "From Bootstrapped to Unicorn / We Grow with You." with typing animation
- Services section header: "Human Expertise with AI Velocity"
- All three services now emphasize AI-powered delivery
- Added "Products" to navigation menu
- Responsive CSS Grid for Problem and Services sections

### Services Reorder and AI Messaging

1. **Design System Creation** - AI tools accelerate delivery
2. **Design System Maintenance** - AI-powered monitoring and sync audits
3. **Design-to-Code Handoff** - Proprietary AI tools for design-to-code conversion

### Files Modified

- `/src/styles/tokens.css` - New color palette
- `/src/context/ThemeContext.tsx` - Default theme to light
- `/src/app/layout.tsx` - Default theme to light
- `/src/components/organisms/Hero/` - Updated headline with line break
- `/src/components/organisms/ProblemSection/` - Responsive CSS Grid
- `/src/components/organisms/ServicesSection/` - New content, AI messaging, responsive grid
- `/src/components/Navigation.tsx` - Added Products link
- All components updated for Severance aesthetic

## Content Reference

See `/website-content.md` for the complete text content of all website sections.

## Next Steps (Phase 2)

- [ ] Create Products page (UI Forge)
- [ ] Update other pages (services, work, about, pricing, contact)
- [ ] Add entrance animations with Intersection Observer
- [ ] Integrate real case study content with images
- [ ] Add client logos to social proof section
