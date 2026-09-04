# Design system

The site uses a neumorphic (soft UI) treatment matched to the app: a single mid-dark slate surface throughout, with depth coming from paired shadows: a cool highlight from the top-left and a deep shadow to the bottom-right, rather than borders or contrasting fills. The elevation scale lives in `app/globals.css` as `.neu`, `.neu-sm`, `.neu-lg`, `.neu-inset`, and `.neu-inset-sm`, with `.neu-interactive` for pads that settle toward the page on hover.

Screenshots render through `components/ui/PhoneFrame.tsx`, which always draws the image at its natural aspect ratio inside a device bezel, so tall phone captures are never cropped to fit a landscape box.

## Links

Anything without a real destination is modeled in `content/site.ts` as `href: null` and rendered grayed out and non-interactive by `MaybeLink` (nav and footer), `Button`, and `AppLinks`; the site ships no dead links. Both app store listings are disabled until launch; set `stores[].href` in `content/site.ts` and the buttons activate on their own.

## Deployment

Deployed on Vercel. Pushing to `main` triggers a production deployment automatically once the project is linked.
