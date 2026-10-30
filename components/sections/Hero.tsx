"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, sample } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { AdapterIllustration } from "@/components/ui/AdapterIllustration";
import { ScoreArc } from "@/components/ui/ScoreArc";
import { Button } from "@/components/ui/Button";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { ArrowIcon } from "@/components/ui/icons";

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
    <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24">
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
          <div className="text-center lg:text-left">
            <Rise delay={0.04}>
              <h1 className="text-balance font-display text-[3.25rem] font-semibold leading-[0.95] tracking-[-0.02em] sm:text-[5rem] lg:text-[6rem]">
                {hero.headline}
              </h1>
            </Rise>

            <Rise delay={0.16}>
              <p className="mx-auto mt-5 max-w-[34rem] text-pretty text-[17px] leading-relaxed text-[var(--color-fg-muted)] sm:mt-6 sm:text-xl lg:mx-0">
                {hero.subhead}
              </p>
            </Rise>

            <Rise delay={0.24} className="mt-8 flex flex-col items-center gap-5 sm:mt-10 lg:items-start">
              <Button href={hero.primary.href} className="group">
                {hero.primary.label}
                <ArrowIcon className="h-4 w-4 rotate-90 transition-transform group-hover:translate-y-0.5" />
              </Button>
              <p className="flex items-center gap-2 text-[15px] text-[var(--color-fg-muted)]">
                <AdapterIllustration className="w-9" />
                {hero.requirement}
              </p>
            </Rise>
          </div>

          <Rise delay={0.2} className="relative mx-auto w-full max-w-[290px] sm:max-w-[360px]">
            {/* The signature dial, centered on the phone's own score dial. */}
            <ScoreArc
              id="hero-arc"
              className="absolute left-1/2 top-[30%] -z-10 w-[400px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-70 sm:w-[600px]"
            />
            <PhoneFrame src={hero.image} alt={hero.imageAlt} priority sizes="(max-width: 640px) 290px, 360px" />

            {/*
             * Two moments the score leads to, floating just off the frame's
             * edges so they cover bezel, never app text. Phones get the
             * screenshot alone: at that width a chip can only cover it.
             */}
            <div className="panel absolute -left-[262px] top-[64%] hidden items-center gap-3 rounded-2xl p-3.5 pr-5 sm:flex">
              <ScoreRing score={sample.trip.score} size={52} />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-score-excellent)]">
                  Trip scored
                </p>
                <p className="whitespace-nowrap text-[14px] font-semibold">{sample.trip.title}</p>
                <p className="text-[12px] text-[var(--color-fg-muted)]">
                  {sample.trip.duration} · {sample.trip.distance} · {sample.trip.band}
                </p>
              </div>
            </div>

            <div className="panel absolute -right-28 top-[40%] hidden rounded-2xl px-4 py-3 sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-fg-muted)]">
                Est. discount
              </p>
              <p className="text-[28px] font-semibold tabular-nums leading-tight tracking-[-0.03em]">{sample.discount}</p>
            </div>
          </Rise>
        </div>
      </Container>
    </section>
  );
}
