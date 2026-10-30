"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, nav, sample } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { ScoreArc } from "@/components/ui/ScoreArc";
import { Button } from "@/components/ui/Button";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { ArrowIcon, PlugIcon } from "@/components/ui/icons";

const ease = [0.25, 1, 0.5, 1] as const;

/** Fades a hero element up once on load, in order. */
function Rise({ delay, className, children }: { delay: number; className?: string; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-28 sm:pt-32 lg:pb-14">
      {/*
       * A static pool of light behind the phone. No animation, no blur filter.
       * The section is `isolate` so this and the arc's negative z-index stay
       * inside it instead of sinking under the body's background.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 72% 38%, rgba(76,141,255,0.13), transparent 70%), radial-gradient(40% 30% at 20% 10%, rgba(245,166,35,0.05), transparent 70%)",
        }}
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-10">
          <div className="text-center lg:pb-24 lg:text-left">
            <Rise delay={0}>
              <p className="inline-flex h-7 items-center rounded-full bg-[color-mix(in_srgb,var(--color-score-fair)_14%,transparent)] px-3 text-[13px] font-semibold text-[var(--color-score-fair)]">
                {nav.status}
              </p>
            </Rise>

            <Rise delay={0.06}>
              <h1 className="mt-6 text-balance font-display text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.02em] sm:text-[5rem] lg:text-[6rem]">
                {hero.headline}
              </h1>
            </Rise>

            <Rise delay={0.16}>
              <p className="mx-auto mt-5 max-w-[30rem] text-pretty text-[17px] leading-relaxed text-[var(--color-fg-muted)] sm:mt-6 sm:text-xl lg:mx-0">
                {hero.subhead}
              </p>
            </Rise>

            <Rise delay={0.24} className="mt-8 flex flex-col items-center gap-5 sm:mt-10 lg:items-start">
              <Button href={hero.primary.href} className="group">
                {hero.primary.label}
                <ArrowIcon className="h-4 w-4 rotate-90 transition-transform group-hover:translate-y-0.5" />
              </Button>
              <a
                href="#faq"
                className="flex items-center gap-2 text-[14px] text-[var(--color-fg-muted)] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[var(--color-fg)]"
              >
                <PlugIcon className="h-[18px] w-[18px] shrink-0 text-[var(--color-accent-soft)]" />
                {hero.requirement}
              </a>
            </Rise>
          </div>

          <Rise delay={0.2} className="relative mx-auto w-full max-w-[290px] sm:max-w-[360px]">
            {/* The signature dial, drawn around the phone's own score dial. */}
            <ScoreArc
              score={sample.score}
              stroke={3}
              className="absolute left-1/2 top-[21%] -z-10 w-[360px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[500px]"
            />
            <PhoneFrame src={hero.image} alt={hero.imageAlt} priority sizes="(max-width: 640px) 290px, 360px" />

            {/*
             * What the score is worth, inside the arc beside the habit tiles,
             * overlapping the frame by about 20px over bezel and the screen's
             * empty margin, never app text. Phones get the screenshot alone: at that width a chip can
             * only cover it.
             */}
            <div className="panel-lg absolute -left-[182px] top-[38%] hidden rounded-2xl px-4 py-3 sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-fg-muted)]">
                Example estimate
              </p>
              <p className="text-[28px] font-semibold tabular-nums leading-tight tracking-[-0.02em]">{sample.discount} off</p>
              <p className="text-[12px] text-[var(--color-fg-muted)]">At a score of {sample.score}. Not a quote.</p>
            </div>
            {/* Phones hide the estimate chip, so the example number goes under the screenshot instead. */}
            <p className="mt-5 text-center text-[15px] text-[var(--color-fg-muted)] sm:hidden">
              At a score of {sample.score}: <span className="font-semibold text-[var(--color-fg)]">{sample.discount} off</span> an
              example premium. Not a quote.
            </p>
            <p className="mt-2 text-center text-[14px] text-[var(--color-fg-muted)] sm:mt-5 sm:text-[13px]">{hero.sampleNote}</p>
          </Rise>
        </div>
      </Container>
    </section>
  );
}
