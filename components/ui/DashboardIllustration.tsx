/**
 * Where the adapter goes: the underside of a dashboard with the steering
 * column on the left and a WiCAN-style adapter plugged into the OBD-II port
 * beside it, its status light lit, with a label pointing at the port.
 * Decorative; the step's copy says the same thing.
 */
export function DashboardIllustration({ className = "" }: { className?: string }) {
  const pins = Array.from({ length: 7 }, (_, i) => 150 + i * 7);
  return (
    <svg viewBox="0 0 260 160" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="dash-adapter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3c42" />
          <stop offset="1" stopColor="#22232a" />
        </linearGradient>
        <radialGradient id="dash-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4c8dff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#4c8dff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Steering column, then the dash panel over it. */}
      <rect x="22" y="22" width="66" height="84" rx="18" fill="#1d1e22" stroke="#3a3d44" />
      <path d="M0 0h260v38c-46 14-92 20-130 20S46 52 0 38z" fill="#2a2c31" />
      <path d="M0 38c46 14 92 20 130 20s84-6 130-20" stroke="#3a3d44" strokeWidth="1.5" />
      {/* The port, recessed under the dash, with two rows of pins. */}
      <path d="M140 56h58l-6 16h-46z" fill="#0b0c0e" stroke="#4a4d55" />
      {pins.map((x) => (
        <g key={x} fill="#d4ad55">
          <rect x={x} y="59" width="3" height="4" rx="1" />
          <rect x={x + 1.5} y="65" width="3" height="4" rx="1" />
        </g>
      ))}
      {/* The adapter, hanging from the port. */}
      <circle cx="169" cy="120" r="44" fill="url(#dash-glow)" />
      <rect x="146" y="70" width="46" height="78" rx="12" fill="url(#dash-adapter)" stroke="rgba(255,255,255,0.16)" />
      <path d="M153 72h32" stroke="rgba(255,255,255,0.2)" strokeLinecap="round" />
      <circle cx="169" cy="132" r="4" fill="#4c8dff" />
      <path
        d="m163 90 11 11-5.5 5.5V84.5L174 90l-11 11"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Label with a leader to the port. */}
      <path d="M200 64h14v-8h4" stroke="rgba(255,255,255,0.35)" strokeLinecap="round" strokeLinejoin="round" />
      <text x="206" y="88" fill="rgba(255,255,255,0.6)" fontSize="10.5" fontWeight="600" fontFamily="var(--font-sans)">
        <tspan x="206">OBD-II</tspan>
        <tspan x="206" dy="13">port</tspan>
      </text>
    </svg>
  );
}
