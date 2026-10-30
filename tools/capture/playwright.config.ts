// Design captures: `npm run capture:design`. See capture.spec.ts.
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { defineConfig } from "@playwright/test";

const port = 3311;

export default defineConfig({
  testDir: ".",
  testMatch: "*.spec.ts",
  outputDir: join(tmpdir(), "wayborne-site-test-results"),
  workers: 1,
  timeout: 90_000,
  use: {
    baseURL: `http://localhost:${port}`,
    browserName: "chromium",
    locale: "en-US",
  },
  webServer: {
    // A production build, so captures carry no dev overlay and match Vercel.
    // The image cache is keyed by URL, so a replaced screenshot would otherwise
    // be served stale.
    command: `rm -rf .next/cache/images && npm run build && npx next start -p ${port}`,
    cwd: resolve(__dirname, "../.."),
    url: `http://localhost:${port}`,
    timeout: 180_000,
    reuseExistingServer: false,
  },
});
