"use client";

import { useRef, useState } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

type Screen = { src: string; alt: string; heading: string; body: string };

/**
 * The trip screens as a sideways row for phone widths: each card snaps to the
 * content gutter, the next one peeks in, and dots under the row show which
 * card is in view.
 */
export function TripsCarousel({ screens }: { screens: readonly Screen[] }) {
  const rowRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const row = rowRef.current;
    const first = row?.firstElementChild as HTMLElement | null;
    if (!row || !first) return;
    const step = first.offsetWidth + parseFloat(getComputedStyle(row).columnGap || "0");
    setActive(Math.min(screens.length - 1, Math.round(row.scrollLeft / step)));
  };

  return (
    <div>
      <ol
        ref={rowRef}
        onScroll={onScroll}
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none]"
      >
        {screens.map((screen) => (
          <li key={screen.src} className="flex w-[80vw] max-w-[300px] shrink-0 snap-start flex-col gap-5">
            <PhoneFrame src={screen.src} alt={screen.alt} sizes="80vw" />
            <div>
              <h3 className="text-[17px] font-semibold">{screen.heading}</h3>
              <p className="mt-1 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
        {screens.map((screen, i) => (
          <span
            key={screen.src}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
              i === active ? "w-5 bg-[var(--color-fg)]" : "w-1.5 bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
