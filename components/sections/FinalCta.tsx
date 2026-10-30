import Image from "next/image";
import { finalCta, sample } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppLinks } from "@/components/ui/AppLinks";
import { ScoreArc } from "@/components/ui/ScoreArc";
import { ArrowIcon } from "@/components/ui/icons";

/**
 * The closing launch panel: the app icon inside the signature score arc, a
 * launch pill, the store badges, and a link back to the setup steps, the one
 * thing a visitor can usefully do before launch.
 */
export function FinalCta() {
  return (
    <section id="get-the-app" className="py-14 sm:py-20">
      <Container>
        <Reveal className="panel-lg flex flex-col items-center gap-5 rounded-[32px] px-5 py-12 text-center sm:py-16">
          <div className="relative flex h-[140px] w-[140px] items-center justify-center">
            <ScoreArc score={sample.score} stroke={12} className="absolute inset-0 h-full w-full" />
            <Image
              src="/icon.png"
              alt=""
              width={64}
              height={64}
              className="rounded-[16px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_32px_-12px_rgba(0,0,0,0.8)]"
            />
          </div>
          <p className="rounded-full bg-[color-mix(in_srgb,var(--color-score-fair)_16%,transparent)] px-3 py-1 text-[13px] font-semibold text-[var(--color-score-fair)]">
            {finalCta.status}
          </p>
          <h2 className="max-w-[18ch] text-balance font-display text-[2.25rem] font-semibold leading-[1] tracking-[-0.015em] sm:text-[3.5rem]">
            {finalCta.heading}
          </h2>
          <p className="max-w-md text-pretty text-[17px] text-[var(--color-fg-muted)]">{finalCta.body}</p>
          <AppLinks className="mt-2 justify-center" />
          <a
            href={finalCta.link.href}
            className="group mt-1 inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--color-accent-soft)] transition-colors hover:text-[var(--color-fg)]"
          >
            {finalCta.link.label}
            <ArrowIcon className="h-4 w-4 -rotate-90 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
