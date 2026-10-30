import { trips } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TripsCarousel } from "./TripsCarousel";

/**
 * One trip in reading order: the list, its breakdown, and its map. On desktop
 * the breakdown sits forward and larger, the other two step back and down,
 * and phones overlap only at their bezels; each caption sits under its phone.
 * On phones the three become a snapping sideways row.
 */
export function TripsSection() {
  return (
    <section id={trips.id} className="overflow-x-clip py-14 sm:py-20">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading eyebrow={trips.eyebrow} title={trips.heading} body={trips.body} />

        <div className="md:hidden">
          <TripsCarousel screens={trips.screens} />
        </div>

        <ol className="hidden items-start justify-center md:flex">
          {trips.screens.map((screen, i) => {
            const front = i === 1;
            return (
              <Reveal
                key={screen.src}
                as="li"
                delay={i * 0.05}
                className={`flex flex-col gap-6 ${front ? "z-10 w-[36%] max-w-[380px]" : "w-[30%] max-w-[300px] pt-12"} ${
                  i === 0 ? "-mr-3" : i === 2 ? "-ml-3" : ""
                }`}
              >
                <div className={front ? "" : "brightness-[0.8]"}>
                  <PhoneFrame src={screen.src} alt={screen.alt} sizes={front ? "380px" : "300px"} />
                </div>
                <div className="px-3">
                  <h3 className="text-[17px] font-semibold">{screen.heading}</h3>
                  <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
