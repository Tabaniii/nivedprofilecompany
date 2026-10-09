# Backend Brief — nivedportofolio

There is **no backend yet.** This brief defines the only patterns permitted so it stays that way.

---

## Reality check

```
src/app/         # routes only
public/          # static assets only
next.config.mjs  # cacheComponents, partialPrefetching, turbopack css rule
jsconfig.json    # "@/*" -> "./src/*"
```

- No database, no ORM, no auth, no API layer, no `src/lib/server`.
- `.gitignore` contains `.env*` — env vars are **never** committed. Document new vars in `.env.example` (create it) and name them to the user.
- Data is static and lives in `src/lib/data/*.js` as plain JS exports.

**The correct backend for a portfolio is: none.** If the user asks for auth, a DB, or payments, confirm scope and cost before building — that changes the deployment model from static Vercel to a live server.

---

## If and only if server code is required

### Allowed locations

```
src/app/api/*/route.js      # HTTP endpoints ONLY
src/lib/server/             # data access, 3rd-party clients, secrets
├── db.js                   # database client
├── clients.js              # external API clients
└── auth.js                 # session helpers
src/lib/validators.js       # zod (or hand-rolled) input schemas
```

### Forbidden

- No `src/app/api/*` files unless an endpoint is actually specified.
- No ORM models, no migrations, no `src/app/pages` (Pages Router).
- No secrets or API keys in any file that is not gitignored.
- No business logic in `route.js` beyond parse → validate → delegate → respond.

### Route handler shape

```js
// src/app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  // 1. parse  2. validate  3. delegate to src/lib/server/  4. respond
}
```

Rules:
- Export only `GET` / `POST` / `PUT` / `PATCH` / `DELETE`.
- Always return `NextResponse.json(...)`; never `res.status(200).send(...)`.
- Never leak a stack trace or a raw driver error to the client. Log server-side, return a generic message plus the correct status code.
- Read secrets via `process.env.NAME` only inside the function that needs them, never at module top level.

### Caching

`cacheComponents: true` is on. For data that does not change per-request, mark it `"use cache"`. For data that must be fresh, leave it dynamic and wrap the caller in `<Suspense>`. Read `next.config.mjs` before touching fetch calls.

---

## Data

Static portfolio content → `src/lib/data/*.js`, owned by the frontend brief. If it grows past a few records and needs filtering/search, move it to a real source only on explicit instruction.

## Definition of done

- No endpoint invented without a stated requirement.
- No secret in version control.
- `npm run build` succeeds; no new runtime dependencies without approval.
