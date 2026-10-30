import { trips } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

/**
 * One trip in reading order: the list, its breakdown, and its map. On desktop
 * the breakdown sits forward and the other two step back and down, phones
 * overlapping only at their bezels, with the captions on one row beneath in
 * their own columns. On phones the three become a snapping row with tabs.
 */
export function TripsSection() {
  return (
    <section id={trips.id} className="overflow-x-clip py-14 sm:py-20">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading eyebrow={trips.eyebrow} title={trips.heading} body={trips.body} align="center" />

        <div className="md:hidden">
          <SnapCarousel labels={trips.screens.map((screen) => screen.tab)}>
            {trips.screens.map((screen) => (
              <div key={screen.src} className="flex flex-col gap-5">
                <PhoneFrame src={screen.src} alt={screen.alt} sizes="80vw" />
                <div>
                  <h3 className="text-[17px] font-semibold">{screen.heading}</h3>
                  <p className="mt-1 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
                </div>
              </div>
            ))}
          </SnapCarousel>
        </div>

        <div className="hidden md:block">
          <Reveal className="flex items-start justify-center">
            {trips.screens.map((screen, i) => {
              const front = i === 1;
              return (
                <div
                  key={screen.src}
                  className={
                    front
                      ? "z-10 w-[34%] max-w-[360px]"
                      : `w-[29%] max-w-[300px] pt-12 brightness-[0.8] ${i === 0 ? "-mr-6" : "-ml-6"}`
                  }
                >
                  <PhoneFrame src={screen.src} alt={screen.alt} sizes={front ? "360px" : "300px"} />
                </div>
              );
            })}
          </Reveal>
          <ol className="mx-auto mt-10 grid max-w-[960px] grid-cols-3 gap-8">
            {trips.screens.map((screen, i) => (
              <Reveal key={screen.src} as="li" delay={i * 0.05} className="border-t border-[var(--color-hairline)] pt-5 text-center">
                <h3 className="text-[17px] font-semibold">{screen.heading}</h3>
                <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
