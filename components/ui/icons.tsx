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
