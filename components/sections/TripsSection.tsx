import { trips } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * The trip story left to right: the list, one trip's breakdown, and that
 * trip's map, each with its caption under it. On phones each becomes a row,
 * a small phone beside its caption, so the three fit in about one screen.
 */
export function TripsSection() {
  return (
    <section id={trips.id} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading eyebrow={trips.eyebrow} title={trips.heading} body={trips.body} />

        <ol className="grid gap-8 md:grid-cols-3 md:gap-8">
          {trips.screens.map((screen, i) => (
            <Reveal
              key={screen.src}
              as="li"
              delay={i * 0.06}
              className="grid grid-cols-[132px_minmax(0,1fr)] items-center gap-5 md:flex md:flex-col md:items-start md:gap-7"
            >
              <PhoneFrame
                src={screen.src}
                alt={screen.alt}
                className="w-full md:max-w-[310px]"
                sizes="(max-width: 768px) 132px, 310px"
              />
              <div>
                <span className="text-[13px] font-semibold tabular-nums text-[var(--color-fg-subtle)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-[17px] font-semibold">{screen.heading}</h3>
                <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
