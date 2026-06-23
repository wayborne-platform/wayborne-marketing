"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type WordRevealProps = {
  text: string;
  className?: string;
  /** Delay before the whole sequence begins, in seconds. */
  delay?: number;
};

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.4em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
};

/**
 * Animates a headline one word at a time, each fading and un-blurring upward.
 * The full string is also exposed to assistive tech as a single label.
 */
export function WordReveal({ text, className, delay = 0.1 }: WordRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      variants={container}
      custom={delay}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          aria-hidden="true"
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
