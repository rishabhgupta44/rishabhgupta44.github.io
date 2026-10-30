# Rishabh Gupta — academic portfolio

React/Vite/Tailwind academic portfolio for Rishabh Gupta, doctoral researcher at ETH Zürich in the Marie Skłodowska-Curie COMBINE Doctoral Network. The site presents current multiphase-flow research alongside prior high-energy physics, detector, software, and machine-learning work.

## Stack

- React and Vite
- Tailwind CSS v4
- GitHub Pages via `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run dev
```

Build the production site with:

```bash
npm run build
```

The generated site is written to `dist/`. GitHub Pages deploys it automatically when changes land on `main`.

## Project structure

- `src/data/siteData.js` — profile, research, projects, publications, skills, and timeline data
- `src/pages/` — home, project archive, and notes pages
- `src/components/` — layout, shared UI, and archive components
- `src/index.css` — global styles and accessibility focus states
- `public/profile.jpg` — current portrait used by the site
- `public/Rishabh_Gupta_CV.pdf` — downloadable CV

## Updating content

Edit `src/data/siteData.js` to update profile information, add a publication, or add a project. Projects must include a `tag`, `status`, `summary`, and `highlights` so filtering and cards continue to work. Add archive-only work under `archiveGroups`.

Replace the portrait by overwriting `public/profile.jpg` with a professional JPG that preserves the original aspect ratio. Replace the CV by overwriting `public/Rishabh_Gupta_CV.pdf`; keep the filename so existing download links continue to work.

## Deployment notes

The app uses Vite's `BASE_URL` for local assets and the workflow builds with Node 22. The homepage, `/archive`, and `/notes` are shareable paths; GitHub Pages serves the static fallback through the Pages deployment workflow.
