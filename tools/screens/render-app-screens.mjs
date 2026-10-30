// Renders the app's screens for the site's phone frames, from the app's own
// design preview (wayborne-mobile `npm run preview:app`, on :5188). Each screen
// is resized to the bezel's 402 x 874pt hole and captured at 3x (1206 x 2622),
// status bar and home indicator kept, rounded corners and island removed so
// the bezel draws its own.
//
// Usage: WAYBORNE_MOBILE=<path to wayborne-mobile> node tools/screens/render-app-screens.mjs <outDir> [screens] [themes]
//   screens: comma list of home,trips,trip,map,profile,live,friends,insurance
//   themes:  comma list of dark,light
// Env: HOME_SCROLL / PROFILE_SCROLL scroll those screens before capture (px);
// SCREEN_W/SCREEN_H override the size.
const { chromium } = await import(`${process.env.WAYBORNE_MOBILE}/node_modules/playwright/index.mjs`);
const out = process.argv[2];
const base = "http://localhost:5188";
const CLOCK = new Date("2026-10-27T18:30:00-07:00");
const screens = (process.argv[3] ?? "home,trips,trip,map,profile,live,friends,insurance").split(",");
const themes = (process.argv[4] ?? "dark,light").split(",");
// Optional scroll offset per screen so the capture ends on a row boundary.
const SCROLL = { home: Number(process.env.HOME_SCROLL ?? 0), profile: Number(process.env.PROFILE_SCROLL ?? 0) };
// Screen size in points; defaults to the iPhone 18 Pro, whose official bezel the site uses.
const SW = Number(process.env.SCREEN_W ?? 402), SH = Number(process.env.SCREEN_H ?? 874);
const browser = await chromium.launch();
for (const theme of themes) {
  for (const screen of screens) {
    const ctx = await browser.newContext({ viewport: { width: SW + 80, height: SH + 80 }, deviceScaleFactor: 3, locale: "en-US", timezoneId: "America/Los_Angeles" });
    const page = await ctx.newPage();
    await page.clock.setFixedTime(CLOCK);
    await page.goto(`${base}/?screen=${screen}&theme=${theme}&frame`);
    // Resize the rig's 390 x 844 screen (and its bezel) to the target device; the app reflows.
    await page.evaluate(([w, h]) => {
      const scr = [...document.querySelectorAll("div")].find((el) => getComputedStyle(el).borderTopLeftRadius === "50px");
      scr.style.width = `${w}px`; scr.style.height = `${h}px`;
      const bezel = scr.parentElement; bezel.style.width = `${w + 28}px`; bezel.style.height = `${h + 28}px`;
    }, [SW, SH]);
    const frame = page.frameLocator("iframe");
    await frame.locator("#root").filter({ hasText: /\w/ }).waitFor();
    if (screen === "trip") {
      await frame.getByText("Home to Climbing gym").first().click();
      await frame.getByLabel("Close trip details").waitFor();
    }
    if (screen === "map") await frame.getByText("Home to Climbing gym").last().waitFor();
    if (SCROLL[screen]) {
      await frame.locator("body").evaluate((_, y) => {
        const el = [...document.querySelectorAll("*")].find((n) => /(auto|scroll)/.test(getComputedStyle(n).overflowY) && n.scrollHeight > n.clientHeight);
        el.scrollTop = y;
      }, SCROLL[screen]);
    }
    await page.waitForTimeout(1800);
    const box = await page.evaluate(() => {
      const els = [...document.querySelectorAll("div")];
      const scr = els.find((el) => getComputedStyle(el).borderTopLeftRadius === "50px");
      scr.style.borderRadius = "0px";
      const island = els.find((el) => el.getBoundingClientRect().width === 126 && el.getBoundingClientRect().height === 37);
      if (island) island.style.display = "none";
      const r = scr.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    });
    await page.waitForTimeout(200);
    await page.screenshot({ path: `${out}/${screen}-${theme}.png`, clip: box });
    console.log(screen, theme, JSON.stringify(box));
    await ctx.close();
  }
}
await browser.close();
