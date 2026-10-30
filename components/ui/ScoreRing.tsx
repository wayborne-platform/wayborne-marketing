import { scoreBand } from "@/lib/score";

type ScoreRingProps = {
  score: number;
  /**
   * Rendered diameter in px. Omit it to size the ring with `className`
   * instead (e.g. `w-[120px] sm:w-[176px]`); the type inside scales with
   * the ring either way, through container query units.
   */
  size?: number;
  /** Shows the band name ("Fair") in a chip under the number. */
  showBand?: boolean;
  className?: string;
};

/** The arc covers 300 of 360 degrees, leaving a gap at the bottom like the app's dial. */
const SWEEP = 300;
const VIEW = 100;
const STROKE = 9;
const RADIUS = (VIEW - STROKE) / 2 - 3;
const ARC = (2 * Math.PI * RADIUS * SWEEP) / 360;

/**
 * The app's score dial drawn in SVG: a carved track, an arc in the score's
 * band color, and a raised disc holding the number. Everything scales with
 * the ring's width, so the same component works as a poster dial and as a
 * small trip badge.
 */
export function ScoreRing({ score, size, showBand = false, className = "" }: ScoreRingProps) {
  const band = scoreBand(score);
  const filled = (ARC * score) / 100;
  const rotate = 90 + (360 - SWEEP) / 2;

  return (
    <div
      role="img"
      aria-label={`Safety score ${score}, ${band.label}`}
      className={`relative aspect-square shrink-0 rounded-full [container-type:inline-size] ${className}`}
      style={size ? { width: size } : undefined}
    >
      <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g transform={`rotate(${rotate} 50 50)`}>
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${ARC} 999`}
          />
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke={band.color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${filled} 999`}
          />
        </g>
      </svg>
      <div
        className="panel absolute flex flex-col items-center justify-center rounded-full"
        style={{ inset: `${(STROKE + 9) / VIEW * 100}%` }}
      >
        <span
          className="font-semibold tabular-nums leading-none tracking-[-0.04em] text-[var(--color-fg)]"
          style={{ fontSize: "27cqw" }}
        >
          {score}
        </span>
        {showBand && (
          <span
            className="mt-[0.35em] rounded-full px-[0.7em] py-[0.2em] font-semibold leading-none"
            style={{
              fontSize: "max(10px, 7cqw)",
              color: band.color,
              background: `color-mix(in srgb, ${band.color} 16%, transparent)`,
            }}
          >
            {band.label}
          </span>
        )}
      </div>
    </div>
  );
}
