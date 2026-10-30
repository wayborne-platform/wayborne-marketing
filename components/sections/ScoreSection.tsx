import { sample, score } from "@/content/site";
import { scoreBand } from "@/lib/score";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BoltIcon, BrakeIcon, GaugeIcon, ShieldCheckIcon } from "@/components/ui/icons";

const HABIT_ICONS = {
  speed: GaugeIcon,
  smooth: BoltIcon,
  braking: BrakeIcon,
  awareness: ShieldCheckIcon,
} as const;

/**
 * The four habits behind the sample driver's 79, with the product making its
 * call: the weakest habit gets the big card, its score, and the app's coaching
 * line, beside the heading; the other three sit in a strip of compact cards
 * below. The hero already shows the overall dial, so this section shows the
 * decision instead.
 */
export function ScoreSection() {
  const weakest = score.habits.reduce((low, habit) => (habit.score < low.score ? habit : low));
  const others = score.habits.filter((habit) => habit !== weakest);
  const WeakIcon = HABIT_ICONS[weakest.icon];
  const weakBand = scoreBand(weakest.score);

  return (
    <section id={score.id} className="py-14 sm:py-20">
      <Container className="flex flex-col gap-4">
        <div className="grid items-center gap-10 pb-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <SectionHeading eyebrow={score.eyebrow} title={score.heading} body={score.body} />

          <Reveal className="panel-lg flex flex-col gap-5 rounded-[26px] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-2.5 text-[17px] font-semibold">
                <WeakIcon className="h-5 w-5" style={{ color: weakBand.color }} />
                {weakest.name}
              </span>
              <span className="rounded-full bg-[color-mix(in_srgb,var(--color-accent)_16%,transparent)] px-3 py-1 text-[13px] font-semibold text-[var(--color-accent-soft)]">
                Fix this next
              </span>
            </div>
            <div className="flex items-end gap-6">
              <p className="font-display text-[88px] font-semibold tabular-nums leading-[0.8] sm:text-[120px]" style={{ color: weakBand.color }}>
                {weakest.score}
              </p>
              <div className="mb-2 h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
                <div className="h-full rounded-full" style={{ width: `${weakest.score}%`, background: weakBand.color }} />
              </div>
            </div>
            <div className="border-t border-[var(--color-hairline)] pt-5">
              <p className="text-balance text-[20px] font-semibold leading-snug sm:text-[24px]">{sample.insight.tip}</p>
              <p className="mt-2 text-[15px] text-[var(--color-fg-muted)]">
                Your weakest habit right now. It measures {weakest.body.charAt(0).toLowerCase() + weakest.body.slice(1)}
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="grid grid-cols-3 gap-3 sm:gap-4">
            {others.map((habit, i) => {
              const Icon = HABIT_ICONS[habit.icon];
              const band = scoreBand(habit.score);
              return (
                <Reveal key={habit.name} as="li" delay={0.05 + i * 0.05} className="panel flex flex-col justify-center gap-2.5 rounded-[20px] p-4 sm:p-5">
                  <span className="flex flex-col gap-1.5 text-[14px] font-semibold sm:flex-row sm:items-center sm:gap-2 sm:text-[15px]">
                    <Icon className="h-[18px] w-[18px] shrink-0" style={{ color: band.color }} />
                    {habit.name}
                  </span>
                  <div className="flex items-center gap-4">
                    <p
                      className="font-display text-[32px] font-semibold tabular-nums leading-none sm:text-[40px]"
                      style={{ color: habit.score < 70 ? band.color : undefined }}
                    >
                      {habit.score}
                    </p>
                    <div className="hidden h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06] sm:block" aria-hidden="true">
                      <div className="h-full rounded-full" style={{ width: `${habit.score}%`, background: band.color }} />
                    </div>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/[0.06] sm:hidden" aria-hidden="true">
                    <div className="h-full rounded-full" style={{ width: `${habit.score}%`, background: band.color }} />
                  </div>
                </Reveal>
              );
            })}
        </ul>
      </Container>
    </section>
  );
}
