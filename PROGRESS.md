# Portfolio UI Audit — Progress

Working log for the browser audit of the portfolio (desktop ~1630px and
mobile ~350–375px, light and dark theme).

**Last updated:** 2026-09-20
**Branch point:** `main` @ `7e3486e` (PR #12 merged)
**Status:** all 10 audit tasks are done. Two PRs are open and awaiting
review; two follow-ups remain, both optional.

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
await ctx.addInitScript(t => localStorage.setItem('theme', t), 'dark');
```

For WebGL pages add `args: ['--use-gl=angle','--use-angle=swiftshader',
'--enable-unsafe-swiftshader']`.

Prefer measuring over eyeballing — computed styles, bounding boxes,
sampled pixels for contrast, request logs for network claims. Several
bugs below were caught only because the rendered result was measured
rather than assumed.

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
| 7 | Footer LinkedIn/Twitter pointed at platform homepages | #11 |
| 8 | Python listed at two different proficiencies | #10 |
| 9 | Project card icon links unlabelled, no new tab | #12 |
| 10 | Project thumbnails were live interactive iframes | **open** |

Side work, same audit:

| Change | PR |
|---|-----|
| Removed the incomplete `+49` phone from the Impressum | #8 |
| Removed dead Privacy Policy / Terms of Service footer links | #6 |
| Footer Impressum link restyled as plain legal small print | #7 |
| Impressum page restyled as plain legal boilerplate | #8 |
| Skills: Mobile category, Go, Kotlin, JetBrains IDEs, level updates | #10 |
| LogoLoop: added Kotlin, Go, Android Studio | **open** |

Notes on a few of these:

- **Task 2** had two causes: a blurred gradient blob in the hero that
  rendered 480px wide with no clipping ancestor, and the "Featured
  Projects" heading, which JSX had glued into the single unbreakable
  word `FeaturedProjects` so it could not wrap.
- **Task 3** was not just a missing backdrop — the overlay measured
  375×120 instead of 375×740, because it was a child of the blurred nav.
- **Task 9** uses per-project aria-labels ("View live demo of Weather
  App") rather than a repeated generic string, so the six icon links
  have distinct accessible names.
- **Privacy Policy / Terms of Service** never existed as pages or
  routes; only the two dead footer links did.

---

## Open pull requests

- `feat/static-project-previews` — Task 10. Replaces the three live
  iframes with committed screenshots in `public/projects/`, drops
  `embedUrl`, resolves image paths through `import.meta.env.BASE_URL`.
- `feat/logoloop-kotlin-go-android` — adds Kotlin, Go and Android
  Studio to the top marquee.

---

## Remaining

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

### Possible polish, not yet raised as tasks
- `public/projects/project2.png` shows the weather app's empty state.
  Its API returned no data from this environment, so the preview shows
  the UI rather than a live forecast. Worth recapturing from a browser
  where the API responds.
- The Go mark in the logo marquee renders shorter than its neighbours.
  Its artwork is 641×240, so the square slot is height-limited; a
  tighter viewBox does not change this. Only a different Go logo would.

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
   dev and 404s on GitHub Pages. This caught the project images, whose
   paths were root-absolute `/projects/...`.
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
7. **Brand SVG paths are already in the repo.** `@fortawesome/
   free-brands-svg-icons` is installed; read paths from it in Node
   rather than transcribing them. It has `faGolang`, `faAndroid` and
   `faJava`, but no Kotlin or JetBrains icon.

---

## Housekeeping

- `fix/consistent-contact-email` shows as unmerged but is **stale** — its
  outstanding commit reached `main` via PR #8. Safe to delete.
- Merged local branches from PRs #1–#12 can be pruned.
