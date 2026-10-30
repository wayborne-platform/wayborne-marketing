type ScoreArcProps = {
  className?: string;
  /** Stroke width in viewBox units (the circle's radius is 170). */
  stroke?: number;
  /** Unique per page, since the gradient is referenced by id. */
  id: string;
};

/**
 * The app's score dial at poster scale: a 300-degree track with an
 * amber-to-green arc climbing most of the way round, gap at the bottom.
 * Static SVG, no animation. It is the site's signature shape, used behind
 * the hero phone and the closing panel.
 */
export function ScoreArc({ className = "", stroke = 7, id }: ScoreArcProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 400" fill="none" className={`pointer-events-none ${className}`}>
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-score-fair)" />
          <stop offset="1" stopColor="var(--color-score-excellent)" />
        </linearGradient>
      </defs>
      <g transform="rotate(120 200 200)" strokeLinecap="round" strokeWidth={stroke}>
        <circle cx="200" cy="200" r="170" stroke="rgba(255,255,255,0.06)" strokeDasharray="890 2000" />
        <circle cx="200" cy="200" r="170" stroke={`url(#${id})`} strokeDasharray="740 2000" />
      </g>
    </svg>
  );
}
