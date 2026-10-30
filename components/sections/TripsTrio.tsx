import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

type Screen = { tab: string; src: string; alt: string; heading: string; body: string };

type TripsTrioProps = {
  id?: string;
  heading: string;
  body: string;
  /** Three screens in reading order; the middle one sits forward on desktop. */
  screens: readonly [Screen, Screen, Screen];
};

/**
 * Three screens of one flow side by side: on desktop the middle phone sits
 * forward and larger, the outer two step back and down with their bezels
 * just touching it, and each caption sits in its own column beneath. On
 * phones the three become a snapping row with tabs.
 */
export function TripsTrio({ id, heading, body, screens }: TripsTrioProps) {
  return (
    <section id={id} className="overflow-x-clip py-16 sm:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={heading} body={body} align="center" />

        <div className="md:hidden">
          <SnapCarousel labels={screens.map((screen) => screen.tab)}>
            {screens.map((screen) => (
              <div key={screen.src} className="mx-auto flex max-w-[280px] flex-col gap-6">
                <PhoneFrame src={screen.src} alt={screen.alt} sizes="280px" />
                <div>
                  <h3 className="text-lg font-medium text-[var(--color-fg)]">{screen.heading}</h3>
                  <p className="mt-2 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
                </div>
              </div>
            ))}
          </SnapCarousel>
        </div>

        <div className="hidden md:block">
          <Reveal className="flex items-start justify-center">
            {screens.map((screen, i) => {
              const front = i === 1;
              return (
                <div
                  key={screen.src}
                  className={
                    front
                      ? "z-10 w-[34%] max-w-[320px]"
                      : `w-[29%] max-w-[270px] pt-12 brightness-[0.85] ${i === 0 ? "-mr-6" : "-ml-6"}`
                  }
                >
                  <PhoneFrame src={screen.src} alt={screen.alt} sizes={front ? "320px" : "270px"} />
                </div>
              );
            })}
          </Reveal>
          <ol className="mx-auto mt-12 grid max-w-[900px] grid-cols-3 gap-6">
            {screens.map((screen, i) => (
              <Reveal key={screen.src} as="li" delay={i * 0.06} className="neu neu-sheen relative rounded-3xl px-6 py-6 text-center">
                <h3 className="text-lg font-medium text-[var(--color-fg)]">{screen.heading}</h3>
                <p className="mt-2 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{screen.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
