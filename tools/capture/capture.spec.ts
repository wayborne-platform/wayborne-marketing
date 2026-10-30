// Design captures of the marketing page, for scoring design changes round to
// round. For each viewport it writes
//   <viewport>-full.png      the whole page, every section revealed
//   <viewport>-fold.png      the first screen, what a visitor lands on
//   <viewport>-<section>.png each section on its own, at desktop only
// Output: $WAYBORNE_SITE_ARTIFACTS (default: <tmp>/wayborne-site). Any page
// error fails that viewport's capture.
import { test, expect, type Page } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const artifacts = process.env.WAYBORNE_SITE_ARTIFACTS ?? join(tmpdir(), "wayborne-site");
mkdirSync(artifacts, { recursive: true });

const viewports = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2 },
} as const;

/** Lets the hero's entrance animations finish before the first capture. */
const SETTLE_MS = 2500;

/**
 * Scrolls to the bottom in viewport-sized steps so every scroll-triggered
 * reveal fires, then returns to the top with the reveals settled.
 */
const revealEverything = async (page: Page) => {
  const step = page.viewportSize()!.height / 2;
  for (let y = 0; y < (await page.evaluate(() => document.body.scrollHeight)); y += step) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
    await page.waitForTimeout(120);
  }
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(800);
};

for (const [name, viewport] of Object.entries(viewports)) {
  test(name, async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: viewport.deviceScaleFactor,
    });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(SETTLE_MS);
    await page.screenshot({ path: join(artifacts, `${name}-fold.png`) });

    await revealEverything(page);
    await page.screenshot({ path: join(artifacts, `${name}-full.png`), fullPage: true });

    if (name === "desktop") {
      const sections = await page.locator("main > section").all();
      for (const [i, section] of sections.entries()) {
        const id = (await section.getAttribute("id")) ?? (i === 0 ? "hero" : `section-${i}`);
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(400);
        await section.screenshot({ path: join(artifacts, `${name}-${String(i).padStart(2, "0")}-${id}.png`) });
      }
      await page.locator("footer").screenshot({ path: join(artifacts, `${name}-99-footer.png`) });
    }

    expect(errors).toEqual([]);
    await context.close();
  });
}
