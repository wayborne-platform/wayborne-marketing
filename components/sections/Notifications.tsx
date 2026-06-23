import Image from "next/image";
import { notifications } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Notifications() {
  return (
    <section className="py-16 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading title={notifications.heading} body={notifications.body} align="center" />

        <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#030405] shadow-[0_36px_120px_rgba(0,0,0,0.46)]">
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_44%,transparent_0,transparent_34%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.42)_100%)]" />
          <Image
            src={notifications.image}
            alt=""
            width={1024}
            height={688}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="aspect-[16/9] w-full translate-x-[18%] scale-[1.08] object-cover object-center brightness-[1.34] contrast-[1.08] saturate-[1.08] sm:translate-x-[24%] lg:translate-x-[30%]"
          />
        </div>

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
