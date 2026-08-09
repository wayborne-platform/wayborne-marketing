"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * An explicit "there is more below" affordance for the bottom of the hero.
 *
 * The section reveals animate on scroll, which only pays off once you already
 * know to scroll, so the first screen needs to say so on its own. It is a real
 * link to the first section, so clicking it does the thing it suggests, and it
 * fades out as soon as the page moves rather than following you down.
 *
 * Pinned to the viewport rather than to the end of the hero: the hero is taller
 * than a laptop viewport, so a hint at the bottom of it would sit below the
 * fold, which is exactly where a scroll hint is no use. Since it only exists
 * for the first 48px of scroll, fixed positioning is just "the first screen".
 */
export function ScrollHint() {
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href="#score"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrolled ? 0 : 1 }}
      transition={{ duration: 0.5, delay: scrolled ? 0 : 1.6, ease: [0.25, 1, 0.5, 1] }}
      aria-label="Scroll to what Wayborne measures"
      className={`group fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3 ${
        scrolled ? "pointer-events-none" : ""
      }`}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] transition-colors group-hover:text-[var(--color-fg-muted)]">
        Scroll
      </span>

      {/*
       * A wheel travelling down a mouse body. The inset shadow alone reads as a
       * smudge at this size, so the body carries an explicit hairline border and
       * the shape does the work.
       */}
      <span className="neu-inset-sm flex h-[36px] w-[22px] items-start justify-center rounded-full border border-[rgba(255,255,255,0.16)] pt-[7px] transition-colors group-hover:border-[rgba(255,255,255,0.28)]">
        <motion.span
          className="h-[6px] w-[3px] rounded-full bg-[var(--color-accent-soft)]"
          animate={reduceMotion ? undefined : { y: [0, 12, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", times: [0, 0.55, 1] }}
          style={reduceMotion ? { opacity: 0.7 } : undefined}
        />
      </span>
    </motion.a>
  );
}
