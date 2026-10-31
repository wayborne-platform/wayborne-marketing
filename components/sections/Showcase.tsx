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

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {showcase.metrics.map((metric, i) => {
            const Icon = METRIC_ICONS[metric.icon];
            return (
              <Reveal
                key={metric.name}
                delay={i * 0.06}
                className="neu neu-sheen neu-interactive relative flex flex-col gap-2 rounded-3xl p-5 sm:gap-3 sm:p-6"
              >
                <h3 className="flex items-center gap-2.5 text-base font-medium text-[var(--color-fg)] sm:flex-col sm:items-start sm:gap-4">
                  <Icon className="h-5 w-5 shrink-0 text-[var(--color-accent-soft)] sm:h-[22px] sm:w-[22px]" />
                  {metric.name}
                </h3>
                <p className="text-pretty text-[14px] leading-relaxed text-[var(--color-fg-muted)]">{metric.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
