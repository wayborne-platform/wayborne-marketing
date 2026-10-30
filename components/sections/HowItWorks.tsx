import { howItWorks } from "@/content/site";
import { AdapterDiagram } from "@/components/ui/AdapterDiagram";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * The setup story in one wide panel: a line drawing of the adapter in its
 * port, the one piece of hardware the product needs, beside the three steps.
 * On phones the drawing comes first and each step's number sits above its
 * title so the text runs full width.
 */
export function HowItWorks() {
  return (
    <section id={howItWorks.id} className="py-14 sm:py-20">
      <Container className="flex flex-col gap-10 sm:gap-12">
        <SectionHeading title={howItWorks.heading} />

        <Reveal className="panel-lg grid overflow-hidden rounded-[32px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <div className="well m-2 flex items-center justify-center rounded-[26px] px-4 py-8 sm:px-8 sm:py-12">
            <AdapterDiagram className="w-full max-w-[440px]" />
          </div>

          <ol className="flex flex-col p-6 sm:p-10 lg:justify-center lg:py-12 lg:pl-8 lg:pr-14">
            {howItWorks.steps.map((step, i) => (
              <li
                key={step.heading}
                className="flex flex-col gap-2 border-b border-[var(--color-hairline)] py-5 first:pt-0 last:border-b-0 last:pb-0 sm:grid sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-x-3 sm:gap-y-0 sm:py-6"
              >
                <span className="font-display text-[24px] font-semibold tabular-nums leading-none text-[var(--color-accent)] sm:text-[38px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold sm:text-[20px]">{step.heading}</h3>
                  <p className="mt-1.5 text-pretty text-[16px] leading-relaxed text-[var(--color-fg-muted)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
