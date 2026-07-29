"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { WordReveal } from "@/components/ui/WordReveal";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
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
    <section className="relative overflow-hidden pb-10 pt-32 sm:pb-14 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-8%] h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(61,139,253,0.16), transparent 70%)",
            animation: "aurora-drift 18s ease-in-out infinite",
          }}
        />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="mb-5 text-sm font-medium text-[var(--color-accent-soft)]"
            >
              {hero.eyebrow}
            </motion.p>

            <h1 className="mx-auto max-w-[600px] text-pretty text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:mx-0">
              <WordReveal text={hero.headline} className="text-[var(--color-fg)]" delay={0.15} />
            </h1>

            <motion.p
              variants={fadeUp}
              custom={0.7}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-6 max-w-[520px] text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)] lg:mx-0"
            >
              {hero.subhead[0]} {hero.subhead[1]}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.85}
              initial="hidden"
              animate="visible"
              className="mt-9 flex justify-center lg:justify-start"
            >
              <AppLinks />
            </motion.div>

          </div>

          <motion.div
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-[260px] sm:max-w-[290px] lg:max-w-none"
          >
            <PhoneFrame src={hero.image} alt={hero.imageAlt} priority sizes="(max-width: 1024px) 74vw, 320px" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
