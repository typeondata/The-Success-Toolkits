# Deploying the Academy to 20i

The live site is the **contents of the `public/` folder** (`index.html` + `content.js`).
It is a static site — no Node.js, no database, no server config needed. This is why it
runs perfectly on standard 20i shared hosting.

> Upload the **contents of `public/`**, not the `public` folder itself.

---

## Option A — 20i File Manager (easiest, no extra tools)

1. Log in to **my.20i.com** → **Manage Hosting** → select the package for this site.
2. Open **File Manager**.
3. Go to the web root for the domain — usually `public_html/` (or
   `public_html/<subdomain>/` if it's on a subdomain like `academy.thesuccesstoolkits.com`).
4. Upload **`index.html`** and **`content.js`** from this repo's `public/` folder into that directory.
   - If you zip them first, upload the zip and use **Extract** in File Manager, then delete the zip.
5. Visit the domain — the Academy should load.

## Option B — FTP / SFTP (good for repeat deploys)

1. In my.20i.com → **Manage Hosting** → **FTP** — create/note an FTP user.
2. Connect with FileZilla (or similar):
   - **Host:** your 20i FTP hostname  ·  **User/Pass:** the FTP credentials  ·  **Port:** 21 (FTP) / 22 (SFTP)
3. Navigate to `public_html/` (or the subdomain folder).
4. Upload `index.html` and `content.js` from `public/`, overwriting when prompted.

> ⚠️ Never paste FTP or hosting passwords into chat tools. Keep them in your password manager.

---

## After deploying

- **Hard-refresh** (Ctrl+F5) to bypass the browser cache when checking a new upload.
- A **free SSL/HTTPS** certificate is included with 20i — enable it under **SSL/TLS** if not already on.
- To update the course later: drop the new `index.html` / `content.js` into `public/`,
  commit, and re-upload the two files.

## Custom domain / subdomain

If you want it on e.g. `academy.thesuccesstoolkits.com`, add that subdomain in 20i first,
then upload into the subdomain's folder (20i shows the exact path next to the subdomain).

---

## What about user accounts & community?

The current site stores each learner's progress in **their own browser** (`localStorage`).
That's self-contained and free to host. Real accounts / cross-device sync / community would
need the `server/` API running on a Node + PostgreSQL host (not 20i shared) — a separate,
later piece of work.
