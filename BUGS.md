# ADL Website - Bug Tracking & Debugging Log

This document tracks bugs encountered during development and their solutions.

---

## Bug #001: React Key Warning in Our AI Page

**Date:** February 2025
**Severity:** Warning
**Status:** ✅ Resolved

### Symptoms
Console warning: "Each child in a list should have a unique 'key' prop"

### Root Cause
Using React fragment shorthand `<>` inside a `.map()` loop without a key prop.

### Location
`src/app/our-ai/page.tsx` - Human vs AI comparison table

### Solution
Changed from `<>` shorthand to `<Fragment key={index}>`:

```tsx
// Before (broken)
{humanVsAI.map((row, index) => (
  <>
    <div>...</div>
    <div>...</div>
  </>
))}

// After (fixed)
import { Fragment } from 'react';

{humanVsAI.map((row, index) => (
  <Fragment key={index}>
    <div>...</div>
    <div>...</div>
  </Fragment>
))}
```

---

## Bug #002: Internal Server Error / Corrupted .next Cache

**Date:** February 2025
**Severity:** Critical
**Status:** ✅ Resolved

### Symptoms
- Internal Server Error displayed in browser
- Dev server failing to compile pages
- Stale or corrupted cache causing module resolution errors

### Root Cause
Corrupted Next.js build cache in `.next` directory, often caused by:
- Interrupted builds
- File changes during compilation
- TypeScript/module resolution conflicts

### Solution
Clear the `.next` cache and restart the dev server:

```bash
rm -rf .next && npm run dev
```

---

## Bug #003: GitHub Permission Denied (Wrong Account)

**Date:** February 2025
**Severity:** Blocking
**Status:** ✅ Resolved

### Symptoms
```
ERROR: Permission to artemis-design-labs/adl-website.git denied to Electromau5.
fatal: Could not read from remote repository.
```

### Root Cause
GitHub CLI authenticated with wrong user account (Electromau5 instead of artemis-design-labs).

### Solution
Switch GitHub accounts:

```bash
gh auth switch --user artemis-design-labs
```

---

## Bug #004: ContentSwitcher Showing Same Sections on All Pages

**Date:** February 2025
**Severity:** Medium
**Status:** ✅ Resolved

### Symptoms
The A/B test ContentSwitcher panel displayed the same sections (Hero, Problem, Social Proof, CTA) regardless of which page the user was viewing.

### Root Cause
ContentSwitcher was not page-aware. It used a static list of sections instead of detecting the current route and showing page-specific sections.

### Location
- `src/components/ContentSwitcher.tsx`
- `src/context/ContentVersionContext.tsx`

### Solution
1. Updated `ContentVersionContext.tsx` with page-specific section types:
   - `HomeSectionName`, `AboutSectionName`, `ServicesSectionName`, etc.
   - Added `pageSections` mapping for each page
   - Added `setAllVersionsForPage()` function

2. Updated `ContentSwitcher.tsx` to be page-aware:
   - Import `usePathname()` from `next/navigation`
   - Added `getPageFromPath()` to map routes to page names
   - Display sections specific to current page
   - Show "Current Page" indicator
   - Added "Set All Sections (This Page)" buttons

### Files Modified
- `src/context/ContentVersionContext.tsx`
- `src/components/ContentSwitcher.tsx`

---

## Bug #005: Fast Refresh Full Reload Warnings

**Date:** February 2025
**Severity:** Low (Warning)
**Status:** ⚠️ Known Issue

### Symptoms
Console warning: "Fast Refresh had to perform a full reload"

### Root Cause
Changes to context providers or root-level components trigger full page reloads instead of component-level hot reloading.

### Impact
Development experience slightly slower during context/provider changes. No impact on production.

### Workaround
No fix needed - this is expected Next.js behavior when modifying providers.

---

## Debugging Tips

### Clearing Next.js Cache
```bash
rm -rf .next && npm run dev
```

### Checking GitHub Auth Status
```bash
gh auth status
```

### Switching GitHub Accounts
```bash
gh auth switch --user <username>
```

### Viewing Dev Server Logs
The dev server runs on `http://localhost:3000`. Check the terminal for compilation errors.

### Common React Warnings
- **Missing key prop**: Add unique `key` to items in `.map()` loops
- **Hydration mismatch**: Ensure server and client render the same content

---

## Template for New Bugs

```markdown
## Bug #XXX: [Short Description]

**Date:** [Month Year]
**Severity:** Critical | High | Medium | Low
**Status:** ✅ Resolved | 🔄 In Progress | ⚠️ Known Issue

### Symptoms
[What the user sees / error messages]

### Root Cause
[Why the bug occurred]

### Location
[File paths affected]

### Solution
[How it was fixed]

### Files Modified
[List of changed files]
```
