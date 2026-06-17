# Deploying the Academy to 20i

The live site is the **contents of the `public/` folder** (`index.html` + `content.js`).
It is a static site — no Node.js, no database, no server config needed. This is why it
runs perfectly on standard 20i shared hosting.

> Upload the **contents of `public/`**, not the `public` folder itself.

---

## ✅ Quick deploy checklist

Use this every time you push a change live:

1. **Commit & push** to GitHub so the source is saved (`git add` → `git commit` → `git push`).
2. Note **which files changed** this release:
   - Edited a lesson, quiz, or course card → re-upload **`content.js`**.
   - Edited layout, styling, or app behaviour → re-upload **`index.html`**.
   - Not sure → upload **both**.
3. Log in to **my.20i.com** → **Manage Hosting** → **File Manager** (or FTP).
4. Go to the web root (`public_html/`, or the subdomain folder) and **upload, overwriting** the changed file(s).
5. **Hard-refresh** the live site (**Ctrl+F5**) to bypass the cache.
6. Smoke-test: sign in → confirm you land straight on the first lesson → click through one lesson.

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

---

## Automating deploys (optional — skip the manual upload)

Today, pushing to GitHub saves the source but **does not** change the live site — you still
upload to 20i by hand. If you'd like a `git push` to publish automatically, here are the options,
easiest first:

### Option 1 — GitHub Pages (free, zero hosting setup)
GitHub can serve `public/` straight from this repo at a `github.io` URL (or your own domain).

1. On GitHub: **Settings → Pages**.
2. **Source:** *Deploy from a branch* → branch **`main`**, folder **`/public`** → **Save**.
3. After a minute the site is live at `https://typeondata.github.io/The-Success-Toolkits/`.
4. To use `academy.thesuccesstoolkits.com` instead: add it under **Pages → Custom domain**, then
   in 20i create a **CNAME** record for `academy` pointing at `typeondata.github.io`.

After this, every `git push` to `main` republishes automatically — no File Manager step.
(Note: this serves from GitHub, not 20i — pick **either** GitHub Pages **or** 20i for the live
site, not both on the same domain.)

### Option 2 — Keep 20i, auto-upload via FTP on push (GitHub Actions)
Stay on 20i hosting but let a GitHub Action FTP the files up whenever you push.

**The workflow is already in this repo** at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
It uploads `public/` to `public_html/` on every push that touches `public/`. To switch it on, just
add the FTP credentials as repo secrets — **one-time setup**:

1. In 20i, create/note an **FTP** user for `academy.thesuccesstoolkits.com`.
2. On GitHub: **Settings → Secrets and variables → Actions → New repository secret**, add three:
   - `FTP_SERVER` — your 20i FTP hostname
   - `FTP_USERNAME` — the FTP user
   - `FTP_PASSWORD` — the FTP password
3. Done. Next push that changes `public/` deploys automatically — or trigger it any time from the
   **Actions** tab (the workflow has a manual "Run workflow" button).

> ⚠️ Never put FTP passwords in the code or in chat — only in GitHub **encrypted secrets**.

> If 20i serves `academy.thesuccesstoolkits.com` from a subfolder rather than the package's
> top-level `public_html/` (File Manager shows the exact path next to the subdomain), update
> `server-dir` in the workflow to match.
