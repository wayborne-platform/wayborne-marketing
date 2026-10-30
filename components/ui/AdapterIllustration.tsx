/**
 * A Bluetooth OBD-II adapter drawn in the page's panel language: the
 * trapezoid 16-pin plug on the left, the body with a status light and the
 * Bluetooth mark on the right. Decorative; the step's copy says what it is.
 */
export function AdapterIllustration({ className = "" }: { className?: string }) {
  const pins = Array.from({ length: 8 }, (_, i) => 22 + i * 7.2);
  return (
    <svg viewBox="0 0 240 110" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="adapter-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c2d32" />
          <stop offset="1" stopColor="#1b1c1f" />
        </linearGradient>
      </defs>
      {/* Plug: the D-shaped shell and two rows of pins. */}
      <path d="M14 28h68l-6 54H20z" fill="#141518" stroke="rgba(255,255,255,0.12)" />
      {pins.map((x) => (
        <g key={x} fill="#c9a24a" opacity="0.85">
          <rect x={x} y="42" width="3.2" height="9" rx="1" />
          <rect x={x + 1} y="60" width="3.2" height="9" rx="1" />
        </g>
      ))}
      {/* Body. */}
      <rect x="80" y="16" width="146" height="78" rx="20" fill="url(#adapter-body)" stroke="rgba(255,255,255,0.1)" />
      <path d="M100 17h106" stroke="rgba(255,255,255,0.14)" strokeLinecap="round" />
      <circle cx="108" cy="55" r="5" fill="#4c8dff" />
      <circle cx="108" cy="55" r="11" fill="#4c8dff" opacity="0.18" />
      <path
        d="m196 44 14 14-7 7V37l7 7-14 14"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="128" y="60" fill="rgba(255,255,255,0.5)" fontSize="13" fontWeight="600" letterSpacing="1.5" fontFamily="var(--font-sans)">
        OBD-II
      </text>
    </svg>
  );
}
