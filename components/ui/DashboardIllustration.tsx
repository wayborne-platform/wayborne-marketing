/**
 * Where the adapter goes: the underside of a dashboard with the steering
 * column on the left and a WiCAN-style adapter plugged into the OBD-II port
 * beside it, its status light lit. Drawn in the page's panel tones;
 * decorative, since the step's copy says the same thing.
 */
export function DashboardIllustration({ className = "" }: { className?: string }) {
  const pins = Array.from({ length: 6 }, (_, i) => 163 + i * 6);
  return (
    <svg viewBox="0 0 260 150" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="dash-adapter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2e2f34" />
          <stop offset="1" stopColor="#1b1c1f" />
        </linearGradient>
        <radialGradient id="dash-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4c8dff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#4c8dff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Steering column, then the dash panel over it. */}
      <rect x="34" y="20" width="62" height="78" rx="16" fill="#141518" stroke="rgba(255,255,255,0.08)" />
      <path d="M44 98h42" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeLinecap="round" />
      <path d="M0 0h260v40c-46 14-92 20-130 20S46 54 0 40z" fill="#1d1e22" stroke="rgba(255,255,255,0.09)" />
      <path d="M8 38c40 12 82 18 122 18s82-6 122-18" stroke="rgba(255,255,255,0.12)" />
      {/* The port, recessed under the dash. */}
      <path d="M154 58h48l-5 13h-38z" fill="#0b0c0e" stroke="rgba(255,255,255,0.14)" />
      {pins.map((x) => (
        <rect key={x} x={x} y="61" width="2.6" height="5" rx="1" fill="#c9a24a" opacity="0.8" />
      ))}
      {/* The adapter, hanging from the port. */}
      <circle cx="178" cy="114" r="34" fill="url(#dash-glow)" />
      <rect x="160" y="70" width="36" height="62" rx="10" fill="url(#dash-adapter)" stroke="rgba(255,255,255,0.12)" />
      <path d="M166 71h24" stroke="rgba(255,255,255,0.16)" strokeLinecap="round" />
      <circle cx="178" cy="116" r="3.5" fill="#4c8dff" />
      <path
        d="m173 86 9 9-4.5 4.5V81.5L182 86l-9 9"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="214" y="98" fill="rgba(255,255,255,0.45)" fontSize="10" fontWeight="600" letterSpacing="0.6" fontFamily="var(--font-sans)">
        OBD-II
      </text>
      <path d="M210 95h-8" stroke="rgba(255,255,255,0.3)" strokeLinecap="round" />
    </svg>
  );
}
