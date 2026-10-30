type ScoreArcProps = {
  /** How far round the arc fills, 0-100. */
  score: number;
  className?: string;
  /** Stroke width in viewBox units (the circle's radius is 180). */
  stroke?: number;
};

/** Like the app's dial, the arc covers 300 of 360 degrees, gap at the bottom. */
const RADIUS = 180;
const ARC = (2 * Math.PI * RADIUS * 300) / 360;

/**
 * The app's score dial as a thin line drawing: a dark track and an amber arc
 * filled to `score`, gap at the bottom. Static SVG, no animation. It is the
 * site's signature shape, drawn behind the hero phone and around the app icon
 * in the closing panel.
 */
export function ScoreArc({ score, className = "", stroke = 4 }: ScoreArcProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 400" fill="none" className={`pointer-events-none ${className}`}>
      <g transform="rotate(120 200 200)" strokeLinecap="round" strokeWidth={stroke}>
        <circle cx="200" cy="200" r={RADIUS} stroke="#1f2023" strokeDasharray={`${ARC} 2000`} />
        <circle
          cx="200"
          cy="200"
          r={RADIUS}
          stroke="var(--color-score-fair)"
          strokeDasharray={`${(ARC * score) / 100} 2000`}
        />
      </g>
    </svg>
  );
}
