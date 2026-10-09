# QA Brief — nivedportofolio

Verify the portfolio site built by the frontend agent. You are the last gate before deploy.

---

## Environment

```
next 16.4.0 · react 19.3.0 · tailwindcss 4 (turbopack loader)
node scripts: dev / build / lint
```

- Dev server: `npm run dev` → http://localhost:3000
- No test runner is installed. There is no jest/vitest/playwright in `package.json` and no `tests/` dir. Do **not** assume one exists.

---

## Where tests live

`e2e/` and unit tests do not exist yet. If automated tests are in scope, the frontend/QA owner must agree first, since it adds dependencies:

```
e2e/                     # playwright specs
tests/unit/              # node:test (zero-install) or vitest
playwright.config.js
```

Until then QA is **manual verification**, documented below.

---

## Manual checklist

Run `npm run lint` and `npm run build` first. Both must pass before anything else is worth checking.

### Functional
- [ ] Every nav link resolves. No 404, no `#` placeholder hrefs.
- [ ] All social links open the correct URL in a new tab with `rel="noopener noreferrer"`.
- [ ] No create-next-app leftovers: search for `Vercel logomark`, `Deploy Now`, `next.svg`, "Create Next App" in title.
- [ ] `metadata` title/description match the owner, not the template.
- [ ] Every image has correct `alt`. Optimized via `next/image`, no layout shift on load.
- [ ] Keyboard: tab through the whole page, visible focus ring on every focusable element, skip-to-content present.

### Responsive
- [ ] 375px — no horizontal scroll (`document.documentElement.scrollWidth <= clientWidth`).
- [ ] 768px and 1280px — grids reflow, nothing overlaps.
- [ ] Tap targets ≥ 44×44px on mobile.

### Dark mode
- [ ] Toggle OS scheme; both themes legible. Body text contrast ≥ 4.5:1.
- [ ] No unstyled flash on load (FOUC).

### Performance
- [ ] LCP element has `priority` if it is an above-the-fold image.
- [ ] No layout shift when images finish loading.
- [ ] Build output shows static prerender where expected.

### Correctness
- [ ] Content is sourced from `src/lib/data/` — grep JSX for hardcoded owner name or project titles. Should find none.
- [ ] `cacheComponents` — no Suspense-boundary warnings in dev or build output.

### Accessibility
- [ ] One `h1` per page; heading levels descend without skipping.
- [ ] Landmarks present: `header`, `nav`, `main`, `footer`.
- [ ] Contrast check on muted text (the zinc palette is the usual offender).

---

## How to report

For each finding give: **severity** (blocker / major / minor), **file:line**, **what is wrong**, **expected**, **repro steps**. Do not fix frontend code directly — report it to the frontend brief owner. Fix test tooling yourself.

## Blocker criteria (do not deploy)

Build fails · broken nav or 404s · missing metadata · leaked placeholder content · WCAG A blocker (keyboard trap, unlabeled control) · horizontal scroll on mobile.
