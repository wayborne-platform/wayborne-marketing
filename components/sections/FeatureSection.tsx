import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";

type SubFeature = {
  heading: string;
  body: string;
  image: string;
};

type FeatureSectionProps = {
  id?: string;
  heading: string;
  body: string;
  image: string;
  subFeatures: readonly SubFeature[];
};

export function FeatureSection({ id, heading, body, image, subFeatures }: FeatureSectionProps) {
  return (
    <section id={id} className="py-16 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={heading} body={body} align="center" />

        <MediaFrame
          src={image}
          alt=""
          width={1024}
          height={688}
          sizes="(max-width: 1024px) 100vw, 1024px"
          rounded="rounded-3xl"
          className="w-full"
        />

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {subFeatures.map((feature, i) => (
            <FeatureCard
              key={feature.heading}
              heading={feature.heading}
              body={feature.body}
              image={feature.image}
              delay={(i % 2) * 0.08}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
