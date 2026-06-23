import { showcase } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { PlayCircleIcon } from "@/components/ui/icons";

export function Showcase() {
  return (
    <section id="product" className="relative py-12 sm:py-20">
      <Container className="flex flex-col gap-12">
        <Reveal className="relative">
          <div className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)]">
            <MediaFrame
              src={showcase.image}
              alt="Wayborne app showing a trip being scored in real time"
              width={1024}
              height={646}
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              rounded="rounded-3xl"
              className="w-full"
            />
            <div className="absolute inset-0 flex items-end justify-start p-6 sm:p-10">
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border-strong)] bg-black/40 py-2 pl-2 pr-5 text-sm font-medium text-white backdrop-blur transition-transform duration-200 hover:scale-[1.02]"
              >
                <PlayCircleIcon width={28} height={28} />
                {showcase.cta}
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
          <Reveal>
            <p className="text-2xl font-medium tracking-tight text-[var(--color-fg)] sm:text-[1.75rem]">{showcase.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">{showcase.body}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
