# Frontend Brief — nivedportofolio

Personal portfolio website. Frontend work is the bulk of this repo.

---

## Stack (do not change without asking)

| Concern | Choice |
|---|---|
| Framework | Next.js `16.4.0`, App Router |
| UI runtime | React `19.3.0` |
| Styling | Tailwind CSS `4` via `@tailwindcss/turbopack` |
| Language | **JavaScript** (`.js` / `.jsx`). No TypeScript in this repo. |
| Lint | ESLint 9 flat config, `eslint-config-next/core-web-vitals` |
| Fonts | `next/font/google` → Geist + Geist Mono, exposed as CSS vars |

---

## Current file tree

```
src/
└── app/
    ├── layout.js        # root layout, <html>/<body>, font vars, metadata
    ├── page.js          # home route — still create-next-app boilerplate
    ├── globals.css      # tailwind import + :root / @theme inline color vars
    └── favicon.ico
public/
├── next.svg  vercel.svg  globe.svg  file.svg  window.svg   # boilerplate only
```

Everything except `layout.js` is untouched template. You are building greenfield.

---

## Where to put new code

```
src/app/                    # routes ONLY. one folder per route segment.
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── about/page.js       # /about
│
src/components/             # ← CREATE THIS. all reusable UI.
│   ├── ui/                 # primitives: Button, Card, Badge, Container
│   ├── sections/           # page sections: Hero, About, Skills, Projects, Contact
│   └── layout/             # Navbar, Footer, Shell
│
src/lib/                    # ← CREATE THIS. pure helpers, no React.
│   └── data/               # portfolio content as JS objects
│       └── profile.js      # name, role, bio, socials
│       ├── skills.js
│       └── projects.js
│
src/hooks/                  # ← CREATE THIS. client-side state only.
└── public/
    ├── images/             # ← CREATE THIS. project screenshots, avatar
    └── fonts/
```

## Rules

1. **Server Components by default.** Only add `"use client"` when you need state, effects, browser APIs, or event handlers. Every unnecessary `"use client"` ships JS to the browser.
2. **Never edit the boilerplate inside `src/app/page.js` piecemeal** — replace it wholesale once sections exist.
3. **Use the `@/` alias** (`@/components/ui/Button`), not `../../components/...`. Configured in `jsconfig.json` → `./src/*`.
4. **Content lives in `src/lib/data/`.** Never hardcode the owner's name, bio, or project list inside JSX. Portfolio content changes constantly; it must be a one-file edit.
5. **Images:** use `next/image`. Remote images need `images.remotePatterns` added to `next.config.mjs`.
6. **Colors:** use the CSS vars already wired in `globals.css` (`--background`, `--foreground`) or Tailwind's `dark:` variant. Do not introduce a new color system.
7. **Accessibility:** the lint config includes `jsx-a11y` rules. Semantic elements (`header`, `nav`, `main`, `section`, `footer`), one `h1` per page, alt text on every image, keyboard-reachable interactive elements.
8. **Meta:** update `export const metadata` in `layout.js`. The current value is `"Create Next App"` and must be replaced.

---

## Gotcha: `cacheComponents: true`

`next.config.mjs` enables `cacheComponents`. This is strict. If you hit *"A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary"*:

- either wrap the async part in `<Suspense>`,
- or mark the function with `"use cache"` if the data is cacheable.

Do not disable `cacheComponents` to make the error go away. Ask first.

---

## Definition of done

- `npm run lint` clean.
- `npm run build` succeeds.
- Renders correctly at 375px, 768px, 1280px.
- Keyboard-navigable, no console errors.
- Dark mode legible (template already ships a `prefers-color-scheme` block).

Hand off to `docs/BRIEF-QA.md` for verification.
