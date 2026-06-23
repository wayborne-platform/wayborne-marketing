import { finalCta } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppLinks } from "@/components/ui/AppLinks";

export function FinalCta() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-36">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(91,141,239,0.3), transparent 70%)", animation: "aurora-drift 16s ease-in-out infinite" }}
        />
      </div>

      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="utility-text-gradient text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {finalCta.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-xl text-pretty text-lg text-[var(--color-fg-muted)]">{finalCta.body}</p>
        </Reveal>
        <Reveal delay={0.16} className="mt-2 flex justify-center">
          <AppLinks showQr />
        </Reveal>
      </Container>
    </section>
  );
}
