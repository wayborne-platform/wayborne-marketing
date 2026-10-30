/**
 * The app's five score bands (scoreColorUtils in wayborne-mobile), so every
 * number the site draws is colored the way the app would color it.
 */
const BANDS = [
  { min: 90, label: "Excellent", color: "var(--color-score-excellent)" },
  { min: 80, label: "Good", color: "var(--color-score-good)" },
  { min: 70, label: "Fair", color: "var(--color-score-fair)" },
  { min: 60, label: "Weak", color: "var(--color-score-weak)" },
  { min: 0, label: "Poor", color: "var(--color-score-poor)" },
] as const;

export type ScoreBand = (typeof BANDS)[number];

/** The band a 0-100 score falls in. */
export const scoreBand = (score: number): ScoreBand => BANDS.find((band) => score >= band.min) ?? BANDS[BANDS.length - 1];
