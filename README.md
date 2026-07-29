# Wayborne: Marketing Site

The marketing site for **Wayborne**, a real-time driving coach that turns everyday
trips into a verified safety score, building safer habits and lower insurance.

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
  sections/          Page sections (Hero, Showcase, DuoFeature, SplitFeature, …)
  ui/                Reusable primitives (PhoneFrame, Reveal, AppLinks, …)
content/site.ts      Single source of truth for all copy + nav + footer data
public/images/app/   Real app screenshots (924 x 1999 device captures)
```

All marketing copy lives in `content/site.ts`, so sections stay presentational and
content is easy to edit in one place.

### Design system

The site uses a **neumorphic (soft UI)** treatment matched to the app: a single
mid-dark slate surface throughout, with depth coming from paired shadows: a cool
highlight from the top-left and a deep shadow to the bottom-right, rather than
borders or contrasting fills. The elevation scale lives in `app/globals.css` as
`.neu`, `.neu-sm`, `.neu-lg`, `.neu-inset`, and `.neu-inset-sm`, with
`.neu-interactive` for pads that settle toward the page on hover.

Screenshots render through `components/ui/PhoneFrame.tsx`, which always draws the
image at its natural aspect ratio inside a device bezel, so tall phone captures
are never cropped to fit a landscape box.

### Links

Anything without a real destination is modeled in `content/site.ts` as
`href: null` and rendered grayed out and non-interactive by `MaybeLink` (nav and
footer), `Button`, and `AppLinks`; the site ships no dead links. Both app store
listings are disabled until launch; set `stores[].href` in `content/site.ts` and
the buttons activate on their own.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production
deployment automatically once the project is linked.
