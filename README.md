# ABDALLAH FARHAT / Palestinian Software Developer

This is a complete redesign of the **same existing personal portfolio**, not a separate application. It retains the original HTML + CSS + JavaScript structure, project gallery, authentic project screenshots, skills, About section and contact details.

## Art direction

**ROOTS × CODE — Contemporary Editorial.** A new cream/forest/olive color system with restrained terracotta and citrus highlights; oversize typographic compositions, asymmetric portrait framing, geometric detail, authentic Palestinian keffiyeh design references, a decorative olive branch and subtle progressive-enhancement animations. All icons are inline vector strokes; no icon packages.

### Photo integrity

`assets/abdallah-original-photo.jpeg` is the **unaltered, original file** provided by Abdallah. It has not been retouched, regenerated, face-filtered, enhanced or color-adjusted. CSS applies only responsive `object-fit: cover` cropping and external decorative framing. The actual image bytes stay unchanged.

### What remains unchanged

- Featured Pharmacy Management System: **Java console application** and its two real privacy-cropped screenshots (`assets/pharmacy-menu.png` and `assets/pharmacy-inventory.png`).
- Gallery arrows and 01 / 02 counter.
- Verified project repository: https://github.com/qcode97/Pharmacy-Management-System
- GitHub profile: https://github.com/qcode97
- LinkedIn: https://www.linkedin.com/in/abdallah-farhat-383418407
- Contact email: afarhatt97@gmail.com
- Current status: second-year student, Java project finished; PHP and Laravel learning.

## Run and review

1. Extract the entire ZIP into a folder.
2. Open `abdallah-portfolio/index.html` in any current browser (Chrome, Edge, Firefox).
3. Check the large opening composition, scroll to Work, try both screenshot arrows and use Contact Me / email / social links.
4. For mobile, resize the browser or use Chrome DevTools (`F12` → device toolbar).

No install, build command, npm, or backend required. Optional Google Fonts load with network access; local system fallbacks apply offline. Email is a `mailto:` link, not a contact form or data collection.

## Files

- `index.html` — comprehensively redesigned semantic page structure with original content and accessible inline SVG symbols.
- `styles.css` — entire new editorial design system, responsive composition and reduced-motion styles.
- `script.js` — mobile navigation, existing gallery behavior, active navigation, scroll progress and lightweight reveals.
- `assets/abdallah-original-photo.jpeg` — exact unchanged original portrait.
- `assets/keffiyeh-pattern.svg`, `assets/olive-branch.svg` — decorative motifs.
- `assets/pharmacy-menu.png`, `assets/pharmacy-inventory.png` — authentic Java console captures, cropped to exclude credentials.

## Production-ready review (October 2026)

This is still the **same static HTML/CSS/JavaScript project**. This release includes the following changes without adding a framework:

- The personal photo is used as the **exact, unchanged original file** (`assets/abdallah-original-photo.jpeg`); CSS creates feathered edges so it blends naturally into the cream background, instead of appearing in a rectangular/card frame. No face retouching or AI alterations.
- Opening copy now quickly explains a real Java deliverable (Pharmacy Management System), plus web-development learning in PHP/Laravel. Title is **Software Developer**, and About correctly identifies the second-year university status.
- Redundant interactions (magnetic cursor, code-letter scramble, spotlight, animated headings) are removed. Restrained tab/button/link hover remains; mobile and `prefers-reduced-motion` are supported.
- Small text and button labels on phones are easier to read; color contrast and keyboard focus states were strengthened for key links/buttons.
- `assets/social-preview.jpg` is a custom 1200×630 link-preview graphic with name, role, and Palestinian palette **without generating or changing the portrait**. SEO/Open Graph/Twitter tags, `assets/favicon.svg`, and a simple `robots.txt` were added.
- Existing About, Skills, Contact, original Pharmacy project gallery, actual project screenshots, and outgoing contact links were retained.

## How to run locally

1. Extract the ZIP; keep the **entire** `abdallah-portfolio` directory.
2. Open `index.html` in Chrome or Edge. CSS/JS/images are referenced relatively and need the `assets` folder.
3. Confirm desktop and phone layout; verify both screenshots with the arrows, the mobile nav, GitHub/LinkedIn links, and the email link.
4. For a more realistic local server test (optional): open a terminal inside `abdallah-portfolio` and run `python -m http.server 8000` and open `http://localhost:8000/`.

No build tool, npm, backend, secrets, trackers, analytics, cookies, or hosted API needed. The contact action opens the visitor's own email app (`mailto:`); it is **not** a working server-side contact form.

## Deploy to GitHub Pages (specific planned path)

The social-preview URL and canonical URL in `index.html` are configured for the **planned repository name `abdallah-portfolio`** under GitHub account `qcode97`. The target URL will be:

`https://qcode97.github.io/abdallah-portfolio/`

That URL is a **plan**, not a claim that the site is currently live. It works only after you create and publish the matching repo.

1. Sign in to GitHub as `qcode97`.
2. Create a **public** repository named exactly `abdallah-portfolio`.
3. Upload the files and folder **inside** `abdallah-portfolio` to the **root** of the repository. The repo root must include `index.html`, `styles.css`, `script.js`, `robots.txt`, and `assets/`.
4. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root) → Save**.
5. Wait for GitHub Pages to report a published address, then visit the site and check links, the image gallery, and phone layout.
6. Inspect the link preview with a LinkedIn post draft or a social sharing checker **after publishing**. Social crawlers need the public **absolute** `og:image` URL to resolve.

If you choose another repository name or a custom domain, update these `<head>` fields in `index.html` to your **real published** URL: `canonical`, `og:url`, `og:image`, and `twitter:image`. If you rename the deployment path, also adjust the remote image path. Until publication, public crawlers cannot view the preview image.

## Accessibility & performance checks

Local offline browser checks were performed on representative desktop, tablet and phone widths. These are functional/layout checks, **not** field Core Web Vitals measurements or a Lighthouse score. After publishing, run Google's PageSpeed Insights / Chrome Lighthouse on the **actual public URL**, and aim for good LCP/INP/CLS and accessible contrast. Verify tab navigation, `prefers-reduced-motion`, gallery controls and social-preview discovery on the live site. The loading speed of Google Fonts and hosting will vary by connection.
