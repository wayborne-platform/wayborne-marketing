# Wayborne — Marketing Site

The marketing site for **Wayborne**, a real-time driving coach that turns everyday
trips into a verified safety score — building safer habits and lower insurance.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Lint with ESLint                     |

## Project structure

```
app/                 App Router entry (layout, page, global styles, icons)
components/
  layout/            Header, Footer
  sections/          Page sections (Hero, Showcase, FeatureSection, …)
  ui/                Reusable primitives (Reveal, WordReveal, AppLinks, …)
content/site.ts      Single source of truth for all copy + nav + footer data
public/images/       Product imagery and the generated download QR code
```

All marketing copy lives in `content/site.ts`, so sections stay presentational and
content is easy to edit in one place. Product screenshots are placeholders today —
swap the files in `public/images/` (keeping the same names) as the real Wayborne
app shots become available.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production
deployment automatically once the project is linked.
