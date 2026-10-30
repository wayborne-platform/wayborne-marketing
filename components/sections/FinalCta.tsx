import { finalCta } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppLinks } from "@/components/ui/AppLinks";

export function FinalCta() {
  return (
    <section id="get-the-app" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/2 h-[440px] w-[740px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(61,139,253,0.2), transparent 70%)",
            animation: "aurora-drift 16s ease-in-out infinite",
          }}
        />
      </div>

      <Container>
        <div className="neu-lg neu-sheen relative flex flex-col items-center gap-7 rounded-[2rem] px-6 py-16 text-center sm:px-12">
          <Reveal>
            <h2 className="utility-text-gradient text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {finalCta.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl text-pretty text-lg text-[var(--color-fg-muted)]">{finalCta.body}</p>
          </Reveal>
          <Reveal delay={0.16} className="mt-2 flex justify-center">
            <AppLinks />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
