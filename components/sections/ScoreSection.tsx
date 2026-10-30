import { sample, score } from "@/content/site";
import { scoreBand } from "@/lib/score";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BoltIcon, BrakeIcon, GaugeIcon, ShieldCheckIcon } from "@/components/ui/icons";

const HABIT_ICONS = {
  speed: GaugeIcon,
  smooth: BoltIcon,
  braking: BrakeIcon,
  awareness: ShieldCheckIcon,
} as const;

/** The band scale under the dial: where each label starts, left to right. */
const SCALE = [0, 60, 70, 80, 90] as const;

/**
 * What the score is made of and how to read it. The dial sits over the app's
 * five-band scale with the sample driver marked on it; each habit row pairs
 * what it measures with that driver's sub-score, so the section explains the
 * number rather than repeating the Home screen.
 */
export function ScoreSection() {
  return (
    <section id={score.id} className="py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={score.eyebrow} title={score.heading} body={score.body} />

        <Reveal className="panel-lg grid gap-10 rounded-[28px] p-6 sm:p-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
          <div className="flex flex-col items-center gap-6 text-center">
            <ScoreRing score={sample.score} size={176} showBand />
            <div>
              <p className="text-balance text-[15px] font-semibold">{sample.insight.lead}</p>
              <p className="mt-1 text-[14px] text-[var(--color-fg-muted)]">{sample.insight.tip}</p>
            </div>

            <div className="w-full" aria-label={`The score bands. ${sample.score} is ${sample.band}.`} role="img">
              <div className="relative flex h-1.5 gap-[3px]" aria-hidden="true">
                {SCALE.map((min, i) => {
                  const max = SCALE[i + 1] ?? 100;
                  return (
                    <span
                      key={min}
                      className="h-full rounded-full"
                      style={{ flexGrow: max - min, background: scoreBand(min).color, opacity: 0.85 }}
                    />
                  );
                })}
                <span
                  className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--color-panel)] bg-[var(--color-fg)]"
                  style={{ left: `${sample.score}%` }}
                />
              </div>
              <div className="relative mt-2.5 h-4 text-[11px] font-medium tabular-nums text-[var(--color-fg-subtle)]" aria-hidden="true">
                {SCALE.map((mark) => (
                  <span
                    key={mark}
                    className="absolute top-0 -translate-x-1/2 first:translate-x-0"
                    style={{ left: `${mark}%` }}
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ul className="flex flex-col">
            {score.habits.map((habit) => {
              const Icon = HABIT_ICONS[habit.icon];
              const band = scoreBand(habit.score);
              return (
                <li
                  key={habit.name}
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3.5 gap-y-2 border-b border-[var(--color-hairline)] py-5 first:pt-0 last:border-b-0 last:pb-0 sm:gap-x-5 sm:gap-y-1"
                >
                  <span className="well flex h-8 w-8 items-center justify-center rounded-full sm:row-span-2 sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: band.color }} />
                  </span>
                  <h3 className="text-[17px] font-semibold">{habit.name}</h3>
                  <p
                    className="text-right font-display text-[28px] font-semibold tabular-nums leading-none sm:row-span-2 sm:w-14 sm:text-[32px]"
                    style={{ color: habit.score < 70 ? band.color : undefined }}
                  >
                    {habit.score}
                  </p>
                  <p className="col-span-3 text-pretty text-[15px] leading-snug text-[var(--color-fg-muted)] sm:col-span-1 sm:col-start-2">
                    {habit.body}
                  </p>
                  <div
                    className="col-span-3 mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06] sm:col-span-2 sm:col-start-2 sm:mt-2"
                    aria-hidden="true"
                  >
                    <div className="h-full rounded-full" style={{ width: `${habit.score}%`, background: band.color }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
