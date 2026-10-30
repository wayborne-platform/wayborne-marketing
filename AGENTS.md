# Design system

The site uses a neumorphic (soft UI) treatment: a single mid-dark slate surface throughout, with depth coming from paired shadows: a cool highlight from the top-left and a deep shadow to the bottom-right, rather than borders or contrasting fills. The elevation scale lives in `app/globals.css` as `.neu`, `.neu-sm`, `.neu-lg`, `.neu-inset`, and `.neu-inset-sm`, with `.neu-interactive` for pads that settle toward the page on hover.

The owner prefers this look. Treat design changes as refinements of it, not redesigns.

## Screenshots and phone frames

Phones use Apple's official iPhone 18 Pro (Black) product bezel from Apple Design Resources (`public/images/device/iphone-18-pro-black.png`), laid over the screenshot unchanged; `components/ui/PhoneFrame.tsx` clips the screenshot to the bezel's screen hole with a mask cut from the bezel's own alpha (`tools/screens/screen-mask.py`), so the corners are Apple's. Apple's marketing guidelines govern its use: the latest-generation device, shown "as is". The site knowingly crops and overlaps some phones (cropped feature cards, the trips trio); keep that in mind before adding more. When Apple ships a newer iPhone, swap in its bezel, regenerate the mask, and re-render the screenshots at its screen size.

App screenshots in `public/images/iphone` are 1206 x 2622 (the bezel's 402 x 874pt screen at 3x), rendered from the app's design preview with `tools/screens/render-app-screens.mjs`. Never crop or stretch a screenshot to fit a box. A feature can instead show only the top of its phone rising out of its panel's bottom edge: set `cut` (the share of the screen to show) in `content/site.ts`, and `visibleAspectRatio` sizes the clip box so the cut lands on that row at any width.

Copy in `content/site.ts` matches the sample driver in the screenshots (79, Fair). When the screenshots change, update both. A replaced screenshot needs a new file name or path, because the image optimizer caches by URL.

## Links

Anything without a real destination is modeled in `content/site.ts` as `href: null` and rendered grayed out and non-interactive by `MaybeLink` (nav and footer), `Button`, and `AppLinks`; the site ships no dead links. Both app store listings are disabled until launch; set `stores[].href` in `content/site.ts` and the buttons activate on their own.

## Design captures

`npm run capture:design` builds the site, serves it, and writes full-page, first-screen, and per-section screenshots at desktop (1440) and mobile (390) widths to `$WAYBORNE_SITE_ARTIFACTS` (default `<tmp>/wayborne-site`). Use it to compare design changes.

## Deployment

Deployed on Vercel. Pushing to `main` triggers a production deployment automatically once the project is linked.
