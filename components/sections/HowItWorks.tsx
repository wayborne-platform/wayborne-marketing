import Image from "next/image";
import { howItWorks } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * The setup story: the WiCAN adapter, the one piece of hardware the product
 * needs, as a large render in a lit well, then the three steps as a connected
 * timeline (across on desktop, down the left on phones).
 */
export function HowItWorks() {
  const { adapter } = howItWorks;

  return (
    <section id={howItWorks.id} className="py-14 sm:py-20">
      <Container className="flex flex-col gap-10 sm:gap-12">
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.heading} />

        <Reveal className="panel-lg flex flex-col gap-10 rounded-[32px] p-2 pb-8 sm:gap-12 sm:pb-12">
          <figure
            className="well relative flex flex-col items-center justify-center gap-5 overflow-hidden rounded-[26px] px-6 pb-7 pt-10 sm:pt-12"
            style={{ backgroundImage: "radial-gradient(55% 60% at 50% 45%, rgba(76,141,255,0.16), transparent 70%)" }}
          >
            <div className="relative">
              <Image
                src={adapter.image}
                alt={adapter.alt}
                width={adapter.width}
                height={adapter.height}
                sizes="(max-width: 640px) 160px, 220px"
                className="relative z-10 h-auto w-[150px] sm:w-[200px]"
              />
              {/* Contact shadow under the render. */}
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-1/2 h-5 w-[110%] -translate-x-1/2 rounded-[50%] bg-black/70 blur-md"
              />
            </div>
            <figcaption className="text-center text-[13px] text-[var(--color-fg-muted)]">{adapter.caption}</figcaption>
          </figure>

          <ol className="grid gap-7 px-5 sm:px-8 md:grid-cols-3 md:gap-8">
            {howItWorks.steps.map((step, i) => (
              <li key={step.heading} className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-4 md:flex md:flex-col md:gap-4">
                {/* Connector to the next step's marker: down on phones, across on desktop. */}
                {i < howItWorks.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-7 left-[13px] top-7 w-0.5 bg-[var(--color-accent)] opacity-60 md:-right-8 md:bottom-auto md:left-7 md:top-[13px] md:h-0.5 md:w-auto"
                  />
                )}
                <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-panel)] text-[12px] font-bold tabular-nums text-[var(--color-accent-soft)]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold sm:text-[18px]">{step.heading}</h3>
                  <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
