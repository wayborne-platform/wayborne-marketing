/**
 * Where the adapter goes, as a line drawing: the underside of the dashboard,
 * the steering column, the trapezoid OBD-II port beside it, and a thumb-sized
 * Bluetooth adapter plugged in with its status light glowing blue. Strokes are
 * light gray at 2px; the only color is the light.
 */
export function AdapterDiagram({ className = "" }: { className?: string }) {
  const line = "rgba(205,210,218,0.95)";
  const faint = "rgba(175,181,191,0.5)";
  const pins = Array.from({ length: 8 }, (_, i) => 226 + i * 8);

  return (
    <svg viewBox="0 0 420 260" fill="none" role="img" aria-label="A WiCAN Bluetooth adapter plugged into the OBD-II port under the steering wheel" className={className}>
      <defs>
        <radialGradient id="adapter-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4c8dff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#4c8dff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke={line} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Dashboard underside. */}
        <path d="M0 34h420" stroke={faint} />
        <path d="M0 60c70 26 140 36 210 36s140-10 210-36" />
        {/* Steering column and the bottom of the wheel. */}
        <path d="M64 70v92a14 14 0 0 0 14 14h44a14 14 0 0 0 14-14V80" />
        <path d="M22 4c18 60 138 60 156 0" strokeWidth="5" />
        <path d="M84 48v20M116 48v20" stroke={faint} />
        {/* The port, recessed into the dash. */}
        <path d="M214 96h96l-9 26h-78z" />
        {pins.map((x) => (
          <g key={x}>
            <path d={`M${x} 104v4`} stroke={faint} />
            <path d={`M${x + 4} 112v4`} stroke={faint} />
          </g>
        ))}
        {/* The adapter, plugged in and hanging below the port. */}
        <path d="M228 122h66v68a16 16 0 0 1-16 16h-34a16 16 0 0 1-16-16z" fill="#111214" />
        <path d="M240 122v-6M282 122v-6" />
        <path d="m252 146 12 12-6 6v-24l6 6-12 12" stroke="rgba(238,239,242,0.85)" />
      </g>

      <circle cx="261" cy="188" r="26" fill="url(#adapter-glow)" />
      <circle cx="261" cy="188" r="4" fill="#4c8dff" />

      {/* Labels with leaders. */}
      <g stroke={faint} strokeWidth="1.2" strokeLinecap="round">
        <path d="M310 108h40" />
        <path d="M294 170h56" />
      </g>
      <g fill="rgba(238,239,242,0.82)" fontSize="14" fontWeight="600" fontFamily="var(--font-sans)">
        <text x="356" y="113">Port</text>
        <text x="356" y="166">WiCAN</text>
        <text x="356" y="184" fill="rgba(175,181,191,0.9)" fontWeight="500" fontSize="13">adapter</text>
      </g>
      <text x="100" y="206" textAnchor="middle" fill="rgba(175,181,191,0.9)" fontSize="13" fontWeight="500" fontFamily="var(--font-sans)">
        Steering column
      </text>
    </svg>
  );
}
