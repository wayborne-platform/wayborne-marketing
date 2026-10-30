import { howItWorks } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * How much of the Live screen shows above the panel's bottom edge, as a
 * fraction of screen height: the capture's setup list ends just above it, and
 * the rest of the screen is empty.
 */
const VISIBLE = 0.71;

/**
 * The setup story in one wide panel: the app's own Live screen, which is the
 * adapter setup flow (connect button and "Get set up" list), beside the three
 * steps. The phone rises out of the panel's bottom edge; the device is
 * clipped, never the screenshot.
 */
export function HowItWorks() {
  return (
    <section id={howItWorks.id} className="py-14 sm:py-20">
      <Container className="flex flex-col gap-10 sm:gap-12">
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.heading} />

        <Reveal className="panel-lg grid overflow-hidden rounded-[32px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <ol className="flex flex-col gap-1 p-6 sm:p-10 lg:order-2 lg:justify-center lg:py-14 lg:pl-4 lg:pr-14">
            {howItWorks.steps.map((step, i) => (
              <li
                key={step.heading}
                className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 border-b border-[var(--color-hairline)] py-5 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:py-6"
              >
                <span className="font-display text-[30px] font-semibold tabular-nums leading-none text-[var(--color-accent)] sm:text-[38px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold sm:text-[20px]">{step.heading}</h3>
                  <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)] sm:text-[16px]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex items-end justify-center px-6 pt-2 sm:px-10 lg:order-1 lg:pt-14">
            <div
              className="w-full max-w-[300px] overflow-hidden"
              style={{ aspectRatio: `280 / ${9 + VISIBLE * 262 * 2.164}` }}
            >
              <PhoneFrame src={howItWorks.image} alt={howItWorks.imageAlt} sizes="300px" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
