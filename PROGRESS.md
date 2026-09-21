# Portfolio — Work Log

History of the browser audit and the CV alignment that followed, plus the
repo-specific traps found along the way.

**Last updated:** 2026-09-21
**Branch point:** `main` @ `95c4cd6` (PR #16 merged)
**Deployed:** https://faridberlin.github.io/Portfolio/ — live and verified
**Status:** the audit and the CV update are both finished and shipped.
Only small polish items remain.

---

## How we work on this

One task per branch, one commit per task. Push, review on GitHub, merge,
then start the next. Every fix is verified in a real browser before it is
committed — both themes, and a narrow viewport where it matters.

```bash
npm run dev          # Vite, base path /Portfolio/
npm run build        # must pass before commit
npx tsc --noEmit -p tsconfig.app.json
npm run deploy       # build + gh-pages -d dist (manual, no CI workflow)
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

**Before deploying**, build and serve the real bundle (`npx vite preview`)
and check it there. The dev server hides base-path bugs.

---

## Browser audit — all 10 done

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
| 10 | Project thumbnails were live interactive iframes | #15 |

Three of these had a different cause than the symptom suggested:

- **Task 2** — a blurred gradient blob in the hero rendered 480px wide
  with no clipping ancestor, and the "Featured Projects" heading had been
  glued by JSX into the single unbreakable word `FeaturedProjects`.
- **Task 3** — the overlay measured 375×120 instead of 375×740, because
  it was a child of the blurred nav.
- **Task 10** — the `image` paths were root-absolute and pointed at files
  that had never existed.

## Impressum work

| Change | PR |
|---|-----|
| Removed the incomplete `+49` phone | #8 |
| Removed dead Privacy Policy / Terms of Service footer links | #6 |
| Footer Impressum link restyled as plain legal small print | #7 |
| Impressum page restyled as plain legal boilerplate | #8 |

The page is deliberately plain but stays legible: one 13px size
throughout so the mandatory identity data is never smaller than the text
around it, contrast above WCAG AA, links underlined rather than coloured.
§ 5 DDG requires the disclosure to be *leicht erkennbar*.

## CV alignment — PR #16

The site had claimed "over 5 years of experience in web development",
which contradicted the CV. That claim is gone and the content now
matches:

- **Hero** — MERN / Vue 3 / Socket.io positioning; page title and meta
  description added.
- **About** — "From E-Commerce & Media to Full-Stack Development", with
  the DCI, Crowds, pre-tech and AI-focus narrative.
- **Experience & Education** — new section between About and Skills, with
  its own nav link. Crowds, Amazon FBA at IIIHT, the DCI programme and
  languages.
- **Skills** — percentage bars replaced with a tag layout in six groups:
  Frontend, Backend, Mobile Development, Databases & DevOps, AI &
  Automation, Tools. There were no verified proficiency numbers, so
  inventing them was not an option. The old `TechIcon` component went
  with it, and `@fortawesome` is no longer imported anywhere in `src/`.
- **Projects** — five cards. NutriVa first (live at https://nutriva.live/,
  which does serve behind nginx, matching its description), Space
  Invader, Weather App covering both the JS/TS and Python/Flask/Docker
  builds, plus the two Three.js demos.
- **Download CV** — button and `public/Farid-Hima-CV.pdf` both removed.
  The content now lives on the page, and the PDF had been publicly
  crawlable while carrying a phone number and home address.

## Deployment

`npm run deploy` publishes `dist` to the `gh-pages` branch. Pages takes
roughly 40 seconds to propagate; check the served bundle hash rather than
assuming. Verified live afterwards: 6 sections, 6 skill groups, 5 project
cards, all images loading, no console errors, no horizontal overflow.

---

## Remaining

### Footer quick links do nothing off the home page
`src/components/Footer.tsx` — the Quick Links use bare hashes
(`href="#about"`). On `/impressum` and the 404 page they only set the
hash on the current URL instead of returning to the home page. Fix by
routing them through `/#about`, the way the Navbar already handles
cross-page anchors.

### Impressum returns HTTP 404 on first request
Inherent to SPA routing on GitHub Pages: unknown paths are served by
`404.html`, which redirects into the app. The page renders correctly for
visitors, but the status code is 404, so search engines may treat the
Impressum as missing. Fixable only by pre-rendering that route or moving
to a host with rewrite rules.

### Contact form placeholder
`src/components/ContactSection.tsx` uses `placeholder="bob@gmail.com"`.
Cosmetic.

### Weather App preview shows an empty state
Its API returned no data from this environment, so
`public/projects/project2.png` shows the UI rather than a live forecast.
Worth recapturing from a browser where the API responds.

### The Go mark in the marquee renders short
Its artwork is 641×240, so the square slot is height-limited. A tighter
viewBox does not change this; only a different Go logo would.

---

## Repo-specific traps

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
   deployed.
5. **JSX drops whitespace at a line break next to an element.** Splitting
   `Featured <span>Projects</span>` across lines produced the single
   unbreakable word `FeaturedProjects`.
6. **A merged PR can strand later commits.** This happened twice. PR #5
   was merged before the phone-removal commit was pushed; PR #14 was
   merged at 22:54 and the Vue.js commit landed at 22:55. Both fixes had
   to be recovered by hand. **Check the branch tip is merged, not just
   its first commit**, and push before merging.
7. **Brand SVG paths are already in the repo.** `@fortawesome/
   free-brands-svg-icons` is installed; read paths from it in Node rather
   than transcribing them. It has `faGolang`, `faAndroid`, `faVuejs` and
   `faJava`, but no Kotlin or JetBrains icon.
8. **A 200 or 404 status alone proves nothing here.** The SPA fallback
   returns the app shell with a 200 for unknown paths, so checking that a
   deleted file is gone means checking the content type, not the status.
   Likewise `/Portfolio/impressum` answers 404 while rendering fine.
