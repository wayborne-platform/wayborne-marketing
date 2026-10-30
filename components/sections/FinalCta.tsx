import Image from "next/image";
import { finalCta } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppLinks } from "@/components/ui/AppLinks";
import { ScoreArc } from "@/components/ui/ScoreArc";

/**
 * The closing launch panel, with the signature score arc behind the copy.
 */
export function FinalCta() {
  return (
    <section id="get-the-app" className="py-16 sm:py-24">
      <Container>
        <div className="panel-lg relative overflow-hidden rounded-[36px] px-6 py-16 sm:py-24">
          <ScoreArc
            id="cta-arc"
            className="absolute left-1/2 top-[50%] w-[700px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[980px]"
          />

          <Reveal className="relative flex flex-col items-center gap-6 text-center">
            <Image
              src="/icon.png"
              alt=""
              width={72}
              height={72}
              className="rounded-[18px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_40px_-16px_rgba(0,0,0,0.8)]"
            />
            <h2 className="mt-2 max-w-[14ch] text-balance font-display text-[3rem] font-semibold leading-[0.95] tracking-[-0.02em] sm:text-[4.5rem]">
              {finalCta.heading}
            </h2>
            <p className="max-w-md text-pretty text-lg text-[var(--color-fg-muted)]">{finalCta.body}</p>
            <AppLinks className="mt-4 justify-center" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
