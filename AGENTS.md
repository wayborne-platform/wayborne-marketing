# Design system

The site matches the app's soft tactile dark theme (`ThemeContext` in wayborne-mobile): a near-black page, panels one step lighter, and wells one step darker. Panels get depth from a crisp layered shadow (a 1px top highlight, a bottom shade, a faint ring, a short drop), not borders or blurry paired shadows. The tokens and the `.panel`, `.panel-lg`, and `.well` classes live in `app/globals.css`. Score colors are the app's five bands; `lib/score.ts` maps a score to its band, so a number on the site reads the same as in the app.

Amber, green, and red are score colors; amber also marks the pre-launch status. Blue is the app's primary color: actions, links, and guidance such as step numbers and the "Fix this next" callout. Headlines use Barlow (`font-display`); everything else is Inter.

The signature shape is the app's score dial: `components/ui/ScoreRing.tsx` draws it with a number, and `components/ui/ScoreArc.tsx` draws it as a thin amber line behind the hero phone and around the app icon in the closing panel.

Insurance is the one light section, on the app's light palette with the light-mode screenshot.

## Screenshots

App screenshots in `public/images/screens` are 1170 x 2532 (a 390 x 844pt screen at 3x) rendered from the app's design capture rig (`npm run capture:design` in wayborne-mobile), with the rig's rounded corners and Dynamic Island removed. `components/ui/PhoneFrame.tsx` draws them at their natural aspect ratio inside a device frame built from the real iPhone's proportions (47.33pt display corners, concentric rail and border), sized in container units so the corners match the device at any rendered size; never crop a screenshot to fit a box. A device may run off the edge of a panel; `visibleAspectRatio` sizes the clip box so the cut lands on a chosen row.

Copy and site-drawn numbers (`sample` in `content/site.ts`) match the sample driver in the screenshots. When the screenshots change, update both. A replaced screenshot needs a new file name or path, because the image optimizer caches by URL.

## Links

Anything without a real destination is modeled in `content/site.ts` as `href: null` and rendered disabled by `Button` and `AppLinks`; the site ships no dead links. Nav and footer links are in-page anchors. Both app store badges are disabled until launch; set `stores[].href` in `content/site.ts` and they activate on their own.

## Design captures

`npm run capture:design` builds the site, serves it, and writes full-page, first-screen, and per-section screenshots at desktop (1440) and mobile (390) widths to `$WAYBORNE_SITE_ARTIFACTS` (default `<tmp>/wayborne-site`). Use it to compare design changes.

## Deployment

Deployed on Vercel. Pushing to `main` triggers a production deployment automatically once the project is linked.
