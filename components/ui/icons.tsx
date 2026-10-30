import type { SVGProps } from "react";

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.365 1.43c0 1.14-.466 2.227-1.225 3.02-.81.85-2.124 1.51-3.21 1.426-.142-1.094.448-2.26 1.16-3.006.79-.83 2.18-1.46 3.275-1.44zM20.6 17.07c-.55 1.273-.815 1.84-1.526 2.967-.99 1.572-2.388 3.53-4.12 3.546-1.54.014-1.936-1.003-4.025-.992-2.09.012-2.524 1.01-4.066.997-1.732-.016-3.056-1.78-4.047-3.353-2.77-4.39-3.06-9.54-1.35-12.28C2.5 5.98 4.39 4.9 6.166 4.9c1.81 0 2.95 1.006 4.448 1.006 1.453 0 2.34-1.008 4.43-1.008 1.582 0 3.258.862 4.45 2.352-3.91 2.142-3.275 7.72.106 9.82z" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.6 2.1c-.3.3-.5.7-.5 1.2v17.4c0 .5.2.9.5 1.2l.1.1L13.5 12 3.7 2l-.1.1z" opacity=".85" />
      <path d="M17.3 8.3 13.5 12l3.8 3.7 4.4-2.5c.6-.35.6-1.05 0-1.4l-4.4-2.5z" />
      <path d="M3.6 2.1 13.5 12l3.8-3.7L5.4 1.4c-.7-.4-1.4-.3-1.8.7z" opacity=".6" />
      <path d="M13.5 12 3.6 21.9c.4 1 1.1 1.1 1.8.7l11.9-6.9-3.8-3.7z" opacity=".4" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
      <path d="M3.5 8h9M8.5 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity="0.4" />
      <path d="M10 8.5l5 3.5-5 3.5v-7z" fill="currentColor" />
    </svg>
  );
}

/*
 * The four safety-score behaviours, drawn to match the glyphs the app puts in
 * the sub-score wells on the home screen: speedometer, bolt.fill, brakesignal,
 * and checkmark.shield.fill. The app tints each one by that driver's score, so
 * braking shows red for a bad score; here they carry no score, so they all take
 * a single accent instead of implying a verdict about the behaviour itself.
 */

/** Speed: an open gauge with the needle swept up and to the right. */
export function GaugeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.6 18.4a10.5 10.5 0 1 1 14.8 0"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M12 12.9 17.1 7.4a.55.55 0 0 1 .86.68l-4.06 6.36A1.85 1.85 0 1 1 12 12.9z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Smooth driving: a filled bolt. */
export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.9 1.8 5.3 12.6a.7.7 0 0 0 .55 1.14h4.06l-1.2 8.3a.55.55 0 0 0 .98.42l8.85-11.02a.7.7 0 0 0-.55-1.14h-4.19l1.06-7.9a.55.55 0 0 0-.96-.6z" />
    </svg>
  );
}

/**
 * Braking: the dashboard brake telltale, a circled "!" between two arcs.
 *
 * The app draws two arcs a side, which is the real symbol, but they merge into
 * a smudge at the 22px this renders at, so this keeps one arc a side.
 */
export function BrakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="6.1" strokeWidth="1.9" />
      <path d="M12 8.9v3.6" strokeWidth="1.9" strokeLinecap="round" />
      <circle cx="12" cy="15.1" r="1" fill="currentColor" stroke="none" />
      <path d="M3.9 5.9a11.2 11.2 0 0 0 0 12.2" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20.1 5.9a11.2 11.2 0 0 1 0 12.2" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Awareness: a filled shield with a checkmark knocked out of it. */
export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 1.9 4.4 4.6a1 1 0 0 0-.66.94v6.02c0 4.2 2.72 7.98 6.86 9.66a3.7 3.7 0 0 0 2.8 0c4.14-1.68 6.86-5.46 6.86-9.66V5.54a1 1 0 0 0-.66-.94z"
        fill="currentColor"
      />
      <path
        d="m8.4 11.9 2.5 2.5 4.7-4.9"
        stroke="var(--color-bg)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WordmarkLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeOpacity="0.25" />
      <path
        d="M7 19c2.8 0 3.2-3.2 5.6-3.2 2 0 2.2 2 4 2 2.8 0 3.4-6.8 1.4-9.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
