import Image from "next/image";
import { finalCta, sample } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppLinks } from "@/components/ui/AppLinks";
import { ScoreArc } from "@/components/ui/ScoreArc";

/**
 * The closing launch panel, lit from behind with a soft amber glow so the
 * page ends on its brand color: the app icon inside the signature score arc,
 * a launch pill, and the store badges.
 */
export function FinalCta() {
  return (
    <section id="get-the-app" className="py-14 sm:py-20">
      <Container>
        <Reveal
          className="panel-lg flex flex-col items-center gap-5 rounded-[32px] px-5 py-10 text-center sm:py-16"
          style={{ backgroundImage: "radial-gradient(360px circle at 50% 110px, rgba(245,166,35,0.22), transparent 100%)" }}
        >
          <div className="relative flex h-[104px] w-[104px] items-center justify-center sm:h-[140px] sm:w-[140px]">
            <ScoreArc score={sample.score} stroke={12} className="absolute inset-0 h-full w-full" />
            <Image
              src="/icon.png"
              alt=""
              width={56}
              height={56}
              className="rounded-[16px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_32px_-12px_rgba(0,0,0,0.8)]"
            />
          </div>
          <p className="rounded-full bg-[color-mix(in_srgb,var(--color-score-fair)_16%,transparent)] px-3 py-1 text-[13px] font-semibold text-[var(--color-score-fair)]">
            {finalCta.status}
          </p>
          <h2 className="max-w-[16ch] text-balance font-display text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.015em] sm:text-[4.5rem] lg:text-[5rem]">
            {finalCta.heading}
          </h2>
          <p className="max-w-md text-pretty text-[17px] text-[var(--color-fg-muted)]">{finalCta.body}</p>
          <a
            href={finalCta.link.href}
            className="text-[15px] font-semibold text-[var(--color-accent-soft)] underline decoration-[var(--color-accent)]/40 underline-offset-4 transition-colors hover:text-[var(--color-fg)]"
          >
            {finalCta.link.label}
          </a>
          <AppLinks className="mt-3 justify-center" />
        </Reveal>
      </Container>
    </section>
  );
}
