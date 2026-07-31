import { showcase } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BoltIcon, BrakeIcon, GaugeIcon, ShieldCheckIcon } from "@/components/ui/icons";

const METRIC_ICONS = {
  speed: GaugeIcon,
  smooth: BoltIcon,
  braking: BrakeIcon,
  awareness: ShieldCheckIcon,
} as const;

/**
 * The four behaviors behind the safety score, laid out as raised neumorphic
 * pads, the same breakdown the app shows under the score dial.
 */
export function Showcase() {
  return (
    <section id="score" className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
          <Reveal>
            <p className="text-2xl font-medium tracking-tight text-[var(--color-fg)] sm:text-[1.75rem]">
              {showcase.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">
              {showcase.body}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {showcase.metrics.map((metric, i) => {
            const Icon = METRIC_ICONS[metric.icon];
            return (
              <Reveal
                key={metric.name}
                delay={i * 0.06}
                className="neu neu-sheen neu-interactive relative flex flex-col gap-3 rounded-3xl p-6"
              >
                {/* The app seats each sub-score glyph in a recessed circle; same here. */}
                <span className="neu-inset-sm mb-1 flex h-11 w-11 items-center justify-center rounded-full">
                  <Icon className="h-[22px] w-[22px] text-[var(--color-accent-soft)]" />
                </span>
                <h3 className="text-base font-medium text-[var(--color-fg)]">{metric.name}</h3>
                <p className="text-pretty text-[14px] leading-relaxed text-[var(--color-fg-muted)]">{metric.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
