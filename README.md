# The Success Toolkits — Academy

The online course platform for **The Success Toolkits Academy** (The Startup Process).

## What's in this repo

| Path | What it is | Deployed? |
|------|-----------|-----------|
| `public/` | The live Academy site — a self-contained static app (`index.html` + `content.js`). Course content, lessons, exercises and progress all run in the browser using `localStorage`. **No backend required.** | ✅ This is what goes on 20i |
| `server/` | Optional future API (Node.js + Express + PostgreSQL) for real accounts, cross-device sync and community. **Not used by the current site** and **not** deployable to 20i shared hosting. | ❌ |
| `DEPLOY.md` | Step-by-step instructions for publishing `public/` to 20i. | — |

## Run the site locally

It's just static files — open `public/index.html` in a browser, or serve the folder:

```bash
# from the repo root
npx serve public
# then visit the printed URL
```

Progress is saved per-browser via `localStorage`.

## Deploy

See **[DEPLOY.md](DEPLOY.md)** — you upload the contents of `public/` to your 20i hosting.

## Optional backend (future)

The `server/` folder is a starting point for adding real user accounts. It needs
Node.js + PostgreSQL and therefore **cannot** run on standard 20i shared hosting —
it would be hosted separately. Copy `.env.example` to `.env` before running it.
It is not required for the Academy to work.

---
© Type on Data Ltd — The Success Toolkits
