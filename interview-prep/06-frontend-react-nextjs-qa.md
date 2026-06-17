# 06 — Frontend: React, Next.js, TypeScript (Interview Q&A)

Based on Sudoku, Lunar Visualizer, and your **Harshitha_Portfolio** (Next.js 16, Tailwind, Outfit + DM Sans).

---

## Core web (ELI5)

**HTML** = skeleton  
**CSS** = clothes and colors  
**JavaScript** = behavior (buttons, animations)  
**React** = LEGO blocks that rebuild themselves when data changes  

---

## React

**Q: What is React?**  
**A:** Library for UI as components; virtual DOM diffs changes for efficient updates.

**Q: Props vs state?**  
**A:** Props = inputs from parent (read-only); state = internal mutable data (`useState`).

**Q: `useEffect` purpose?**  
**A:** Side effects after render — fetch data, subscriptions, sync with DOM. Include dependency array.

**Q: Keys in lists?**  
**A:** Stable unique keys help React identify items (`key={project.name}` in your ProjectsSection).

**Q: Controlled vs uncontrolled input?**  
**A:** Controlled: React state owns input value. Uncontrolled: DOM holds value via ref.

---

## Next.js (your portfolio stack)

**Q: Why Next.js over CRA?**  
**A:** File-based routing, SSR/SSG, optimized images (`next/image`), metadata API, production defaults.

**Q: App Router vs Pages Router?**  
**A:** Your portfolio uses **App Router** (`src/app/page.tsx`, `layout.tsx`).

**Q: Server vs Client Components?**  
**A:** Server Components render on server (no JS to client for static parts); Client Components (`"use client"`) for interactivity. Your sections are mostly Server Components importing static data.

**Q: How does your portfolio load data?**  
**A:** `src/data/portfolio.ts` constants imported into section components — simple, type-safe, no API needed.

**Q: `next/image` benefits?**  
**A:** Lazy loading, responsive `sizes`, automatic optimization — used in HeroSection for profile photo.

---

## TypeScript

**Q: Why TypeScript?**  
**A:** Catch errors at compile time; better IDE autocomplete; `as const` for readonly portfolio data.

**Q: `interface` vs `type`?**  
**A:** Both describe shapes; interfaces extend cleanly; types more flexible for unions.

---

## CSS / Tailwind (your portfolio)

**Q: Your color system?**  
**A:** CSS variables in `globals.css`: `--background #07080c`, `--accent #2dd4bf` (teal), `--keyword #c4b5fd` (violet highlights).

**Q: Responsive design approach?**  
**A:** Mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`); grid collapses to single column on mobile.

**Q: Accessibility you implemented?**  
**A:** Skip link, `aria-labelledby` on sections, focus-visible outlines, semantic HTML (`main`, `section`, `footer`).

---

## Building frontend with AI agents

**Q: How would you use Claude Code to build a React feature?**  
**A:**  
1. Write clear goal in prompt with file paths  
2. Reference `CLAUDE.md` with stack (Next.js, Tailwind tokens)  
3. Ask for minimal diff matching existing patterns  
4. Run `npm run build` and fix lints  
5. Review accessibility and responsive behavior manually  

**Q: Example prompt for portfolio project card?**  
**A:** "Add a project to `portfolio.ts` with githubUrl, keywords, tech array. Update ProjectsSection only if needed. Match existing card styling. Run build."

---

## Sudoku / Lunar specific

**Q: State management in Sudoku grid?**  
**A:** 2D array in state; updates immutable; solver runs on copy or with backtracking visualization steps.

**Q: SVG animation in Lunar project?**  
**A:** SVG paths for map; CSS/JS transitions for rover movement along plan steps.

---

## Frontend system design (light)

**Q: Design a review dashboard for F21AA model.**  
**A:** Next.js frontend → API route → Python inference service; show prediction + confidence; batch upload for analysts; auth for internal users.

**Q: Performance optimizations?**  
**A:** Code splitting, image optimization, memoization (`React.memo`), avoid huge client bundles, static generation for portfolio pages.

---

## Q&A rapid fire

| Question | Short answer |
|----------|--------------|
| Virtual DOM? | Lightweight copy; diff → minimal real DOM updates |
| CORS? | Browser blocks cross-origin requests unless server allows |
| npm vs yarn? | Package managers; your portfolio uses npm |
| ESLint? | Static code quality for JS/TS |
| Hydration? | Client attaches interactivity to server-rendered HTML |
