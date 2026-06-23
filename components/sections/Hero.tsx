"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/content/site";
import { WordReveal } from "@/components/ui/WordReveal";
import { AppLinks } from "@/components/ui/AppLinks";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      {/* Cinematic photo backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Image src="/images/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,1,2,0.55)] via-[rgba(1,1,2,0.7)] to-[var(--color-bg-marketing)]" />
      </div>

      {/* Drifting aurora glows */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(91,141,239,0.45), transparent 70%)", animation: "aurora-drift 14s ease-in-out infinite" }}
        />
        <div
          className="absolute left-[20%] top-[20%] h-[380px] w-[380px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(138,180,255,0.28), transparent 70%)", animation: "aurora-drift-alt 18s ease-in-out infinite" }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center px-6 text-center">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-white/[0.04] px-4 py-1.5 text-sm text-[var(--color-fg-muted)] backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-soft)]" />
          {hero.eyebrow}
        </motion.p>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-[4.25rem]">
          <WordReveal text={hero.headline} className="utility-text-gradient" delay={0.15} />
        </h1>

        <motion.p
          variants={fadeUp}
          custom={0.7}
          initial="hidden"
          animate="visible"
          className="mt-7 max-w-xl text-pretty text-lg text-[var(--color-fg-muted)] sm:text-xl"
        >
          {hero.subhead[0]}
          <br className="hidden sm:block" /> {hero.subhead[1]}
        </motion.p>

        <motion.div variants={fadeUp} custom={0.9} initial="hidden" animate="visible" className="mt-10 flex flex-col items-center gap-4">
          <AppLinks showQr />
          <p className="text-sm text-[var(--color-fg-subtle)]">{hero.availability}</p>
        </motion.div>
      </div>
    </section>
  );
}
