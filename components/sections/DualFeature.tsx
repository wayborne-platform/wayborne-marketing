import { dualFeatures } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";

export function DualFeature() {
  return (
    <section className="py-12 sm:py-20">
      <Container className="grid gap-6 md:grid-cols-2">
        {dualFeatures.map((feature, i) => (
          <Reveal
            key={feature.eyebrow}
            delay={i * 0.08}
            className="flex flex-col gap-8 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 sm:p-10"
          >
            <div className="flex flex-1 items-center justify-center">
              <MediaFrame
                src={feature.image}
                alt=""
                width={feature.width}
                height={feature.height}
                sizes="(max-width: 768px) 90vw, 480px"
                className="max-w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium text-[var(--color-fg)]">{feature.eyebrow}</p>
              <p className="text-pretty leading-relaxed text-[var(--color-fg-muted)]">{feature.body}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
