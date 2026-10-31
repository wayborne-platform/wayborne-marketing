import { Container } from "@/components/ui/Container";
import { PhoneFrame, visibleAspectRatio } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";

type Point = {
  eyebrow: string;
  body: string;
};

type SplitFeatureProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  body: string;
  image: string;
  alt: string;
  points: readonly Point[];
  /** Which side the screenshot sits on at desktop widths. */
  imageSide?: "left" | "right";
  /**
   * Share of the screen to show. When set, the phone rises out of the panel's
   * bottom edge, cut on that row, instead of sitting whole inside it.
   */
  cut?: number;
};

/**
 * One screenshot beside a heading and a short list of supporting points. With
 * a `cut`, the phone rises out of the panel's bottom edge (below the copy on
 * phones) and the device is clipped, never the screenshot.
 */
export function SplitFeature({
  id,
  eyebrow,
  heading,
  body,
  image,
  alt,
  points,
  imageSide = "left",
  cut,
}: SplitFeatureProps) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <Container>
        <div
          className={`neu neu-sheen relative grid items-center gap-12 overflow-hidden rounded-[2rem] px-6 sm:px-12 lg:grid-cols-2 lg:gap-16 ${
            cut ? "pt-12 sm:pt-14" : "py-12 sm:py-14"
          }`}
        >
          <Reveal
            className={`mx-auto w-full max-w-[262px] ${imageSide === "right" ? "lg:order-2" : ""} ${cut ? "lg:max-w-[300px]" : ""} ${
              cut ? `order-2 self-end lg:mt-14 ${imageSide === "left" ? "lg:order-first" : ""}` : ""
            }`}
          >
            {cut ? (
              <div className="overflow-hidden" style={{ aspectRatio: visibleAspectRatio(cut) }}>
                <PhoneFrame src={image} alt={alt} sizes="(max-width: 1024px) 68vw, 300px" />
              </div>
            ) : (
              <PhoneFrame src={image} alt={alt} sizes="(max-width: 1024px) 68vw, 262px" />
            )}
          </Reveal>

          <div className={`flex flex-col gap-6 ${cut ? "lg:py-14" : ""}`}>
            <Reveal className="flex flex-col gap-4">
              {eyebrow && (
                <p className="text-sm font-medium text-[var(--color-accent-soft)]">{eyebrow}</p>
              )}
              <h2 className="utility-text-gradient text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {heading}
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">{body}</p>
            </Reveal>

            <dl className="flex flex-col gap-4">
              {points.map((point, i) => (
                <Reveal
                  key={point.eyebrow}
                  delay={0.08 + i * 0.08}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-5 py-4"
                >
                  <dt className="text-[15px] font-medium text-[var(--color-fg)]">{point.eyebrow}</dt>
                  <dd className="mt-1 text-pretty text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                    {point.body}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
