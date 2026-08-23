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
      className={`group fixed bottom-5 left-1/2 z-40 -translate-x-1/2 ${
        scrolled ? "pointer-events-none" : ""
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[rgba(35,39,46,0.72)] shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-md transition-[border-color,background-color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-white/[0.16] group-hover:bg-[rgba(39,44,52,0.9)]">
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className="h-4 w-4 text-[var(--color-accent-soft)]"
          animate={reduceMotion ? undefined : { y: [0, 3, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </span>
    </motion.a>
  );
}
