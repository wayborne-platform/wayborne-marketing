import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
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
};

/** One screenshot beside a heading and a short list of supporting points. */
export function SplitFeature({
  id,
  eyebrow,
  heading,
  body,
  image,
  alt,
  points,
  imageSide = "left",
}: SplitFeatureProps) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <Container>
        <div className="neu neu-sheen relative grid items-center gap-12 rounded-[2rem] px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-2 lg:gap-16">
          <Reveal
            className={`mx-auto w-full max-w-[262px] ${imageSide === "right" ? "lg:order-2" : ""}`}
          >
            <PhoneFrame src={image} alt={alt} sizes="(max-width: 1024px) 68vw, 262px" />
          </Reveal>

          <div className="flex flex-col gap-6">
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
