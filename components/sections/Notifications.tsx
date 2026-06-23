import { notifications } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Notifications() {
  return (
    <section className="py-16 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={notifications.heading} body={notifications.body} align="center" />

        <MediaFrame
          src={notifications.image}
          alt=""
          width={1024}
          height={688}
          sizes="(max-width: 1024px) 100vw, 1024px"
          rounded="rounded-3xl"
          className="w-full"
        />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {notifications.points.map((point, i) => (
            <Reveal key={point.eyebrow} delay={i * 0.08} className="flex flex-col gap-2 border-t border-[var(--color-border)] pt-6">
              <p className="text-lg font-medium text-[var(--color-fg)]">{point.eyebrow}</p>
              <p className="text-pretty leading-relaxed text-[var(--color-fg-muted)]">{point.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
