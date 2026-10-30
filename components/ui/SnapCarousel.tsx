"use client";

import { Children, useRef, useState, type ReactNode } from "react";

type SnapCarouselProps = {
  children: ReactNode;
  /** Optional tab labels, one per item, shown above the row; tapping one scrolls to it. */
  labels?: readonly string[];
  /** Width classes for each card. The default, full width, shows one card at a time with no peek. */
  itemClassName?: string;
};

/**
 * A sideways row for phone widths. Cards snap to the content gutter one at a
 * time, and tabs above the row (given `labels`) or dots under it show which
 * card is in view and switch between them.
 */
export function SnapCarousel({ children, labels, itemClassName = "w-full" }: SnapCarouselProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  /** Distance from one card's start to the next. */
  const step = () => {
    const row = rowRef.current;
    const first = row?.firstElementChild as HTMLElement | null;
    return row && first ? first.offsetWidth + parseFloat(getComputedStyle(row).columnGap || "0") : 0;
  };

  const onScroll = () => {
    const row = rowRef.current;
    const distance = step();
    if (row && distance) setActive(Math.min(items.length - 1, Math.round(row.scrollLeft / distance)));
  };

  const goTo = (index: number) => rowRef.current?.scrollTo({ left: index * step(), behavior: "smooth" });

  return (
    <div>
      {labels && (
        <div className="mb-5 flex gap-1 rounded-xl bg-white/[0.04] p-1" role="tablist">
          {labels.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => goTo(i)}
              className={`min-h-11 flex-1 rounded-lg px-2 text-[13px] font-semibold transition-colors ${
                i === active ? "bg-[var(--color-panel-raised)] text-[var(--color-fg)]" : "text-[var(--color-fg-muted)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <div
        ref={rowRef}
        onScroll={onScroll}
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-12 overflow-x-auto px-6 pb-2 [scrollbar-width:none]"
      >
        {items.map((item, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {item}
          </div>
        ))}
      </div>
      {!labels && (
      <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
              i === active ? "w-5 bg-[var(--color-fg)]" : "w-1.5 bg-white/25"
            }`}
          />
        ))}
      </div>
      )}
    </div>
  );
}
