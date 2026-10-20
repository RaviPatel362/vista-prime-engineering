# Vista Prime Engineering — Landing Page

A modern, responsive marketing site for **Vista Prime Engineering (VPE)**,
a precision machining house offering CNC Turning, VMC Milling, and Precision
Machining services. Built with Next.js 16, TypeScript, and Tailwind CSS 4.

> Tagline: **Precision Today... Better Tomorrow...**
> Slogan: **Together We Build Better**

---

## ✨ Features

- Fully responsive (mobile / tablet / desktop)
- Industrial-themed design — charcoal + amber palette
- Sections: Hero, About, Services, Capabilities, Why VPE (process flow), Contact (enquiry form + map), Footer
- Sticky mobile nav drawer with smooth-scroll anchor links
- Accessible: semantic HTML, ARIA labels, keyboard-navigable
- Self-contained: no external database required
- Free hosting on GitHub Pages

---

## 🚀 Quick Start (Local Dev)

```bash
# 1. Install dependencies
bun install   # or: npm install / pnpm install

# 2. Start the dev server
bun run dev   # or: npm run dev
```

Open <http://localhost:3000> in your browser.

---

## 📦 Production Build (Static Export for GitHub Pages)

This project is configured for `output: 'export'`, which produces a fully
static site in the `out/` directory — perfect for free GitHub Pages hosting.

### Option A — Project Pages (`https://<user>.github.io/<repo>/`)

```bash
# Set basePath to the repo name so assets resolve correctly
NEXT_PUBLIC_BASE_PATH=/vpe-website bun run build
```

Upload the contents of `./out` to GitHub Pages (or use the included
GitHub Action — see below).

### Option B — User/Org Pages (`https://<user>.github.io/`)

For a repo named `<user>.github.io`, leave `NEXT_PUBLIC_BASE_PATH` unset:

```bash
bun run build
```

Then push the contents of `./out` to the `main` branch (or use the
included GitHub Action).

---

## 🤖 Automated Deployment via GitHub Actions (Recommended)

A workflow file is included at `.github/workflows/deploy.yml`. It
automatically builds and deploys the site to GitHub Pages on every push
to `main`.

### Setup

1. Push this project to a new GitHub repository.
2. Go to **Settings → Pages** in the repo.
3. Under **Source**, select **GitHub Actions**.
4. Push to `main` — the Action will build & deploy in ~1 min.

### Configure `basePath`

Edit `.github/workflows/deploy.yml` and set the `NEXT_PUBLIC_BASE_PATH`
environment variable to match your repo name:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /vpe-website   # ← change to your repo name
```

For user/org pages (`<user>.github.io` repo), remove the variable
entirely.

---

## ✏️ Customising Content

All copy is in `src/components/landing/`. Edit each section file:

| File | Section |
| --- | --- |
| `navbar.tsx` | Top navigation bar |
| `hero.tsx` | Landing hero with capability card |
| `about.tsx` | About VPE + proprietor quote |
| `services.tsx` | Four service offerings |
| `capabilities.tsx` | Tolerance/material/industry data |
| `why-vpe.tsx` | Process flow (6 steps) |
| `contact.tsx` | Enquiry form + contact cards + map |
| `footer.tsx` | Footer |

### Contact details (IMPORTANT — update before deploying)

Placeholder contact details are in two files — update both:

- `src/components/landing/contact.tsx` — `CONTACT` object
- `src/components/landing/footer.tsx` — `CONTACT` object

Replace:

- Phone: `+91 98765 43210` → actual VPE phone
- Alt phone: `+91 98765 43211` → alternate number (or remove the card)
- Email: `info@vistaprimeengineering.com` → actual VPE email
- Address: `Plot No. 00, Industrial Estate, City, State — 000000, India` → actual workshop address
- Workshop map: in `contact.tsx`, replace the OpenStreetMap iframe `src` with the actual workshop coordinates (or use a Google Maps embed URL).

### Enquiry form behaviour

The form uses a `mailto:` fallback so it works on free static hosting
(GitHub Pages) without any backend. On submit, it opens the visitor's
email client with the details pre-filled.

For a more polished UX, integrate a form backend service such as:

- [Formspree](https://formspree.io) — free tier, no JS backend needed
- [Netlify Forms](https://www.netlify.com/products/forms/) — if hosted on Netlify
- [Google Forms](https://forms.google.com) — free, basic

Replace the `handleSubmit` function in `contact.tsx` with a `fetch()`
to your chosen endpoint.

---

## 🛠 Tech Stack

- [Next.js 16](https://nextjs.org) with App Router
- [TypeScript 5](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) component library
- [Lucide](https://lucide.dev) icons
- Fonts: Inter (body), Oswald (display), Roboto Mono (mono)

---

## 📄 License & Ownership

© Vista Prime Engineering · Proprietor: Ruchit Patel. All rights reserved.

Source code may be reused for the VPE website only. Brand assets
(logo, name, slogans) remain the property of Vista Prime Engineering.
