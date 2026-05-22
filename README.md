# Rishabh Academic Website

Academic website for Rishabh Gupta, built with **Vite + React + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial academic website"
git branch -M main
git remote add origin https://github.com/rishabhgupta44/rishabh-academic-website.git
git push -u origin main
```

## Deploy with GitHub Pages

This repo already includes `.github/workflows/deploy.yml`.

After pushing:

1. Open the GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main`; the website will deploy automatically.

## Add your files later

Put these in `public/`:

```text
public/profile1.jpg
public/Rishabh_Gupta_CV.pdf
```

Then set in `src/data/siteData.js`:

```js
cvUrl: asset("Rishabh_Gupta_CV.pdf")
```

## Polishing done

- Added social/meta tags and a `favicon.svg` for better sharing and branding.
- Implemented a responsive mobile menu and accessibility attributes on the navbar.
- Added `public/robots.txt` and `public/sitemap.xml` for search engines.

If you'd like, I can also add a CI deploy workflow for Netlify/Vercel or prepare GitHub Actions for automatic publishing.
# profile
