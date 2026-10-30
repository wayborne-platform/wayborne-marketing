import Image from "next/image";
import { finalCta } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppLinks } from "@/components/ui/AppLinks";
import { ScoreArc } from "@/components/ui/ScoreArc";

/**
 * The closing launch panel. The app icon sits inside the signature score
 * arc, drawn whole and small enough to stay inside the panel at every width.
 */
export function FinalCta() {
  return (
    <section id="get-the-app" className="py-14 sm:py-20">
      <Container>
        <Reveal className="panel-lg flex flex-col items-center gap-5 rounded-[32px] px-6 py-12 text-center sm:py-16">
          <div className="relative flex h-[148px] w-[148px] items-center justify-center">
            <ScoreArc id="cta-arc" stroke={16} className="absolute inset-0 h-full w-full" />
            <Image
              src="/icon.png"
              alt=""
              width={64}
              height={64}
              className="rounded-[16px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_32px_-12px_rgba(0,0,0,0.8)]"
            />
          </div>
          <h2 className="max-w-[18ch] text-balance font-display text-[2.25rem] font-semibold leading-[1] tracking-[-0.015em] sm:text-[3.5rem]">
            {finalCta.heading}
          </h2>
          <p className="max-w-md text-pretty text-[17px] text-[var(--color-fg-muted)]">{finalCta.body}</p>
          <AppLinks className="mt-2 justify-center" />
        </Reveal>
      </Container>
    </section>
  );
}
