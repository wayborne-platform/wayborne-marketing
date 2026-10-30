# Design system

The site matches the app's soft tactile dark theme (`ThemeContext` in wayborne-mobile): a near-black page, panels one step lighter, and wells one step darker. Panels get depth from a crisp layered shadow (a 1px top highlight, a bottom shade, a faint ring, a short drop), not borders or blurry paired shadows. The tokens and the `.panel`, `.panel-lg`, and `.well` classes live in `app/globals.css`. Score colors are the app's five bands; `lib/score.ts` maps a score to its band, so a number on the site reads the same as in the app.

Amber, green, and red are score colors; amber also marks the pre-launch status. Blue is the app's primary color: actions, links, and guidance such as step numbers and the "Fix this next" callout. Headlines use Barlow (`font-display`); everything else is Inter.

The signature shape is the app's score dial: `components/ui/ScoreRing.tsx` draws it with a number, and `components/ui/ScoreArc.tsx` draws it as a thin amber line behind the hero phone and around the app icon in the closing panel.

Insurance is the one light section, on the app's light palette with the light-mode screenshot.

## Screenshots and phone frames

Phones use Apple's official iPhone 18 Pro (Black) product bezel from Apple Design Resources (`public/images/device/iphone-18-pro-black.png`), laid over the screenshot unchanged; `components/ui/PhoneFrame.tsx` clips the screenshot to the bezel's screen hole with a mask cut from the bezel's own alpha (`tools/screens/screen-mask.py`), so the corners are Apple's. Apple's marketing guidelines govern its use: the latest-generation device, shown "as is". The site knowingly crops and overlaps some phones (friends panels, hero chip, trips fan); keep that in mind before adding more. When Apple ships a newer iPhone, swap in its bezel, regenerate the mask, and re-render the screenshots at its screen size.

App screenshots in `public/images/iphone` are 1206 x 2622 (the bezel's 402 x 874pt screen at 3x), rendered from the app's design preview with `tools/screens/render-app-screens.mjs`. Never crop or stretch a screenshot to fit a box; a device may run off the edge of a panel, and `visibleAspectRatio` sizes the clip box so the cut lands on a chosen row.

The WiCAN adapter in How it works is a product render (`public/images/device/wican-adapter.png`) cut out of its white background with `tools/images/cutout-white.py`, which also strips a baked-in glow and un-mixes the outline so no light fringe shows on the dark page. Run it again on a higher-resolution render to replace it.

Copy and site-drawn numbers (`sample` in `content/site.ts`) match the sample driver in the screenshots. When the screenshots change, update both. A replaced screenshot needs a new file name or path, because the image optimizer caches by URL.

## Links

Anything without a real destination is modeled in `content/site.ts` as `href: null` and rendered disabled by `Button` and `AppLinks`; the site ships no dead links. Nav and footer links are in-page anchors. Both app store badges are disabled until launch; set `stores[].href` in `content/site.ts` and they activate on their own.

## Design captures

`npm run capture:design` builds the site, serves it, and writes full-page, first-screen, and per-section screenshots at desktop (1440) and mobile (390) widths to `$WAYBORNE_SITE_ARTIFACTS` (default `<tmp>/wayborne-site`). Use it to compare design changes.

## Deployment

Deployed on Vercel. Pushing to `main` triggers a production deployment automatically once the project is linked.
