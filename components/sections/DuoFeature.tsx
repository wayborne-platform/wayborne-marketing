import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneFrame, visibleAspectRatio } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";

type Feature = {
  heading: string;
  body: string;
  image: string;
  alt: string;
  /**
   * Share of the screen to show. When set, the copy moves above the phone and
   * the phone rises out of the card's bottom edge, cut on that row.
   */
  cut?: number;
};

type DuoFeatureProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  body: string;
  features: readonly Feature[];
};

/**
 * A section heading above two side-by-side screenshots, each with its own
 * copy. A feature with a `cut` shows only the top of its phone, rising out of
 * the card's bottom edge; the device is clipped, never the screenshot.
 */
export function DuoFeature({ id, eyebrow, heading, body, features }: DuoFeatureProps) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={eyebrow} title={heading} body={body} align="center" />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) =>
            feature.cut ? (
              <Reveal
                key={feature.heading}
                delay={i * 0.08}
                className="neu neu-sheen relative flex flex-col overflow-hidden rounded-3xl px-6 pt-8 sm:px-8"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium text-[var(--color-fg)]">{feature.heading}</h3>
                  <p className="text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{feature.body}</p>
                </div>
                <div className="mt-auto pt-8">
                  <div
                    className="mx-auto w-full max-w-[268px] overflow-hidden"
                    style={{ aspectRatio: visibleAspectRatio(feature.cut) }}
                  >
                    <PhoneFrame src={feature.image} alt={feature.alt} sizes="(max-width: 768px) 68vw, 268px" />
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal
                key={feature.heading}
                delay={i * 0.08}
                className="neu neu-sheen relative flex flex-col items-center gap-8 rounded-3xl px-6 pb-8 pt-10 sm:px-8"
              >
                <PhoneFrame
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full max-w-[248px]"
                  sizes="(max-width: 768px) 62vw, 248px"
                />
                <div className="flex w-full flex-col gap-2">
                  <h3 className="text-lg font-medium text-[var(--color-fg)]">{feature.heading}</h3>
                  <p className="text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{feature.body}</p>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
