"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero, site } from "@/content/site";
import { WordReveal } from "@/components/ui/WordReveal";
import { AppleIcon, PlayIcon } from "@/components/ui/icons";

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
    <section className="relative flex min-h-[760px] overflow-hidden pb-16 pt-16 sm:min-h-[820px] lg:min-h-[900px]">
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[45%_18%] opacity-[0.72]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_26%,rgba(255,255,255,0.16),transparent_22%),linear-gradient(180deg,rgba(1,1,2,0.12)_0%,rgba(1,1,2,0.18)_38%,rgba(1,1,2,0.9)_73%,#010102_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,1,2,0.62)_0%,rgba(1,1,2,0.16)_36%,rgba(1,1,2,0.42)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(1,1,2,0.92)] to-transparent" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:radial-gradient(rgba(255,255,255,0.68)_0.6px,transparent_0.8px)] [background-size:3px_3px]" />
      </div>

      <div className="mx-auto flex w-full max-w-[1050px] items-end px-6 pb-10 pt-[46vh] sm:pb-14 sm:pt-[50vh] lg:pt-[520px]">
        <div className="grid w-full items-end gap-10 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16">
          <div className="text-left">
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="mb-5 text-sm font-medium text-[var(--color-accent-soft)]"
            >
              {hero.eyebrow}
            </motion.p>

            <h1 className="max-w-[620px] text-pretty text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-[4.1rem]">
              <WordReveal text={hero.headline} className="text-[var(--color-fg)]" delay={0.15} />
            </h1>

            <motion.p
              variants={fadeUp}
              custom={0.7}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-[520px] text-pretty text-lg font-medium leading-snug text-[rgba(247,248,248,0.68)] sm:text-xl"
            >
              {hero.subhead[0]}
              <br className="hidden sm:block" /> {hero.subhead[1]}
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            custom={0.9}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-3 sm:w-[240px]"
          >
            <a
              href={site.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/[0.055] p-3 text-left shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-md transition-colors hover:bg-white/[0.09]"
            >
              <span className="text-sm font-semibold leading-tight text-[rgba(247,248,248,0.72)]">Scan to download</span>
              <Image src="/images/qr.svg" alt="Scan to download Wayborne" width={68} height={68} unoptimized className="rounded-sm bg-white p-1" />
            </a>
            <a
              href={site.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open App Store"
              className="group min-h-[98px] rounded-xl border border-white/10 bg-white/[0.055] p-3 text-left backdrop-blur-md transition-colors hover:bg-white/[0.09]"
            >
              <span className="flex items-center justify-between text-[var(--color-fg)]">
                <AppleIcon width={18} height={18} />
                <span className="text-sm text-[var(--color-fg-subtle)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">{"\u2197"}</span>
              </span>
              <span className="mt-6 block text-sm font-semibold leading-tight text-[var(--color-fg)]">Open<br />App Store</span>
            </a>
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Play Store"
              className="group min-h-[98px] rounded-xl border border-white/10 bg-white/[0.055] p-3 text-left backdrop-blur-md transition-colors hover:bg-white/[0.09]"
            >
              <span className="flex items-center justify-between text-[var(--color-fg)]">
                <PlayIcon width={18} height={18} />
                <span className="text-sm text-[var(--color-fg-subtle)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">{"\u2197"}</span>
              </span>
              <span className="mt-6 block text-sm font-semibold leading-tight text-[var(--color-fg)]">Open<br />Play Store</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
