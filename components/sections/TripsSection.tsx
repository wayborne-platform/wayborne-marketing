import { trips } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * One trip from list to breakdown to map. On desktop the three screens fan
 * out with the map in front (list left, breakdown right) and the captions run
 * in a row beneath in the same left-to-right order. On phones
 * they become a sideways row that snaps one screen at a time, each card 78%
 * of the viewport so the next one peeks in, with its caption under it.
 */
export function TripsSection() {
  const [list, detail, map] = trips.screens;

  return (
    <section id={trips.id} className="overflow-hidden py-14 sm:py-20">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading eyebrow={trips.eyebrow} title={trips.heading} body={trips.body} />

        {/* Phones and small tablets: a snapping row. */}
        <div className="md:hidden">
          <p className="mb-4 text-[13px] font-medium text-[var(--color-fg-subtle)]">Swipe through one trip →</p>
          <ol className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none]">
            {trips.screens.map((screen) => (
              <li key={screen.src} className="flex w-[78vw] max-w-[300px] shrink-0 snap-start flex-col gap-5">
                <PhoneFrame src={screen.src} alt={screen.alt} sizes="78vw" />
                <div>
                  <h3 className="text-[17px] font-semibold">{screen.heading}</h3>
                  <p className="mt-1 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop: the fan, then the captions in a row. */}
        <Reveal className="relative mx-auto hidden w-full max-w-[920px] items-start justify-center md:flex">
          <div className="z-0 -mr-[6%] w-[30%] translate-y-12 opacity-90">
            <PhoneFrame src={list.src} alt={list.alt} sizes="280px" />
          </div>
          <div className="z-10 w-[36%]">
            <PhoneFrame src={map.src} alt={map.alt} sizes="340px" />
          </div>
          <div className="z-0 -ml-[6%] w-[30%] translate-y-12 opacity-90">
            <PhoneFrame src={detail.src} alt={detail.alt} sizes="280px" />
          </div>
        </Reveal>
        <ol className="hidden gap-8 md:grid md:grid-cols-3">
          {[list, map, detail].map((screen, i) => (
            <Reveal key={screen.src} as="li" delay={i * 0.05} className="border-t border-[var(--color-hairline)] pt-5">
              <h3 className="text-[17px] font-semibold">{screen.heading}</h3>
              <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
