# Portfolio UI Audit — Progress

Working log for the browser audit of the portfolio (desktop ~1630px and
mobile ~350–375px, light and dark theme).

**Last updated:** 2026-09-20
**Branch point:** `main` @ `b0187d1` (PR #8 merged)
**Status:** 7 of 10 audit tasks done, plus 2 follow-ups. 3 audit tasks and
2 follow-ups remain.

---

## How we work on this

One task per branch, one commit per task. Push, review on GitHub, merge,
then start the next. Every fix is verified in a real browser before it is
committed — both themes, and a narrow viewport where it matters.

```bash
npm run dev          # Vite, base path /Portfolio/
npm run build        # must pass before commit
npx tsc --noEmit -p tsconfig.app.json
```

Verification is driven with Playwright against installed Chrome:

```js
import { chromium } from '<npx-cache>/playwright/index.mjs';
const b = await chromium.launch({ channel: 'chrome' });
// theme is read from localStorage on load:
await ctx.addInitScript(t => localStorage.setItem('theme', t), 'dark');
```

Prefer measuring over eyeballing — computed styles, bounding boxes, and
for contrast, sampled pixels from a screenshot. Two bugs below were only
caught because the rendered result was measured rather than assumed.

---

## Done

| # | Task | PR |
|---|------|-----|
| 1 | Fixed nav had no background; content scrolled through it | #1 |
| 2 | Horizontal overflow at mobile widths | #1 |
| 3 | Mobile menu had no scrim; Escape did not close it | #2 |
| 4 | "Download CV" was a dead link | #3 |
| 5 | "Connect With Me" icons were `href="#"`, unlabelled | #4 |
| 6 | Two different contact emails on the same page | #5 |
| — | Removed the incomplete `+49` phone from the Impressum | #8 |
| — | Removed dead Privacy Policy / Terms of Service footer links | #6 |
| — | Footer Impressum link restyled as plain legal small print | #7 |
| — | Impressum page restyled as plain legal boilerplate | #8 |

Notes on a few of these:

- **Task 2** had two causes: a blurred gradient blob in the hero that
  rendered 480px wide with no clipping ancestor, and the "Featured
  Projects" heading, which JSX had glued into the single unbreakable word
  `FeaturedProjects` so it could not wrap. `overflow-x: clip` on
  `html, body` is now a safety net.
- **Task 3** was not just a missing backdrop — the overlay measured
  375×120 instead of 375×740, because it was a child of the blurred nav.
- **Privacy Policy / Terms of Service** never existed as pages or routes;
  only the two dead footer links did.

---

## Remaining

### Task 7 — Footer LinkedIn and Twitter point at platform homepages
`src/components/Footer.tsx`, `socialLinks` array.

`https://linkedin.com` and `https://twitter.com` are bare homepages, not
profiles. GitHub in the same row is correct.

Decided already: point LinkedIn at
`https://www.linkedin.com/in/farid-hima-834521389/` and **remove** the
Twitter icon — there is no Twitter account. This mirrors what was done in
the Contact section in PR #4, which now shows LinkedIn + GitHub only.

Ready to do, needs nothing further.

### Task 8 — Python listed at two different proficiencies
`src/components/SkillsSection.tsx`, `skillCategories`.

- `frontend` → `{ name: "Python", level: 60 }` (line ~180)
- `backend`  → `{ name: "Python", level: 35 }` (line ~195)

Same skill, two numbers. Also check placement: `Python` and
`React Native` (level 60) both sit under **Frontend**, where Python does
not belong.

**Needs a decision:** which single proficiency value is correct for
Python, and whether React Native should move to its own or a mobile
category.

Acceptance: each skill name appears exactly once across all four tabs,
with one value.

### Task 9 — Project card icon links are unlabelled
`src/components/ProjectsSection.tsx` lines ~100–105.

```jsx
<a href={project.demoUrl} className="...">   <ExternalLink size={20}/>
<a href={project.githubUrl} className="..."> <Github size={20}/>
```

Icon-only, no `aria-label`, no visible text, and no `target="_blank"` —
unlike the "Check My Github" button further down.

Fix: add `aria-label="View live demo"` / `aria-label="View source on
GitHub"` and `target="_blank" rel="noopener noreferrer"`.

Ready to do, needs nothing further.

### Task 10 — Project thumbnails are live interactive iframes
`src/components/ProjectsSection.tsx`, `embedUrl` + `isLive` per project.

All three cards embed the deployed sites (earth3d, weather-15-jul,
tunel) at ~373×240 with `pointer-events: auto`. Two Three.js/WebGL
scenes and a weather widget boot on page load purely to render a
thumbnail, and hovering a card can scroll the embed instead of the page.

Fix: static preview image per card, or mount the iframe on demand behind
a "Preview live" button.

**Blocker:** each project already has an `image` field pointing at
`/projects/project1.png` … `project3.png`, but **`public/projects/` does
not exist** — those files were never added. Screenshots have to be
produced first. Note the Vite `base` is `/Portfolio/`, so reference them
via `` `${import.meta.env.BASE_URL}projects/project1.png` ``, not a
root-absolute path.

Acceptance: page load makes no network requests to the three external
project URLs; scrolling over a card scrolls the page.

### Follow-up A — 404 page has no footer
`src/pages/NotFound.tsx` is a 4-line stub:

```jsx
export const NotFound = () => <div>NotFound</div>
```

No Navbar, no Footer, so any unknown URL under `/Portfolio/*` renders a
page with **no route to the Impressum at all**. That is a gap against
"reachable from every page", which German disclosure rules expect.

**Needs a decision:** give it the Navbar + Footer and some real 404 copy?

### Follow-up B — Contact form placeholder
`src/components/ContactSection.tsx` uses `placeholder="bob@gmail.com"`.
Cosmetic; left alone so far.

---

## Repo-specific traps

Things that cost time once already:

1. **`text-muted-foreground` is a custom `@utility`** in `src/index.css`,
   not a theme colour. It takes **no `/opacity` modifier** —
   `text-muted-foreground/80` silently generates nothing and the element
   falls back to inheriting `foreground`. Use a separate `opacity-*`.
2. **`backdrop-filter` establishes a containing block for
   `position: fixed` descendants.** The nav carries `backdrop-blur`, so a
   `fixed inset-0` overlay nested inside it collapses to the nav's box.
   Full-screen overlays must be siblings of `<nav>`, not children.
3. **`base: '/Portfolio/'`** in `vite.config.ts`. Anything in `public/`
   must be referenced through `import.meta.env.BASE_URL`, or it works in
   dev and 404s on GitHub Pages.
4. **`docs/` is gitignored.** Files there are never committed or
   deployed. The CV had to be copied into `public/`.
5. **JSX drops whitespace at a line break next to an element.** Splitting
   `Featured <span>Projects</span>` across lines produced the single
   unbreakable word `FeaturedProjects`.
6. **A merged PR can strand a commit.** PR #5 was merged before the
   phone-removal commit was pushed, so that fix never reached `main` and
   the placeholder `tel:+491234567890` stayed live. It was recovered in
   PR #8. Check the branch tip is actually merged, not just its first
   commit.

---

## Housekeeping

- `fix/consistent-contact-email` shows as unmerged but is **stale** — its
  outstanding commit reached `main` via PR #8. Safe to delete.
- Merged local branches from PRs #1–#8 can be pruned.
