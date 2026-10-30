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

/**
 * The four habits behind the sample driver's 79, with the product making its
 * call: the weakest habit gets the big card, its score, what it is doing to
 * the 79, and the app's coaching line, beside the heading; the other three sit in a strip of compact cards
 * below. The hero already shows the overall dial, so this section shows the
 * decision instead.
 */
export function ScoreSection() {
  const weakest = score.habits.reduce((low, habit) => (habit.score < low.score ? habit : low));
  const others = score.habits.filter((habit) => habit !== weakest);
  const nextWeakest = others.reduce((low, habit) => (habit.score < low.score ? habit : low));
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
              <span className="rounded-full bg-[color-mix(in_srgb,var(--color-accent)_18%,transparent)] px-3 py-1 text-[13px] font-semibold text-[var(--color-accent-soft)]">
                Fix this next
              </span>
            </div>
            <div className="flex items-center gap-5 sm:gap-7">
              <p className="font-display text-[88px] font-semibold tabular-nums leading-[0.8] sm:text-[120px]" style={{ color: weakBand.color }}>
                {weakest.score}
              </p>
              <div className="flex flex-1 flex-col gap-3">
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
                  <div className="h-full rounded-full" style={{ width: `${weakest.score}%`, background: weakBand.color }} />
                </div>
                <div className="flex items-center gap-2.5 text-[13px] text-[var(--color-fg-muted)]">
                  <ScoreRing score={sample.score} className="w-10" />
                  <span>Holding your overall {sample.score} back</span>
                </div>
              </div>
            </div>
            <div className="border-t border-[var(--color-hairline)] pt-5">
              <p className="text-balance text-[20px] font-semibold leading-snug sm:text-[24px]">Hard launches are costing you the most points.</p>
              <p className="mt-2 text-[15px] text-[var(--color-fg-muted)]">Next drive: {sample.insight.tip.charAt(0).toLowerCase() + sample.insight.tip.slice(1)}</p>
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {others.map((habit, i) => {
              const Icon = HABIT_ICONS[habit.icon];
              const band = scoreBand(habit.score);
              return (
                <Reveal
                  key={habit.name}
                  as="li"
                  delay={0.05 + i * 0.05}
                  className="panel grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 rounded-[20px] px-5 py-4 sm:p-5"
                >
                  <span className="flex items-center gap-2 text-[15px] font-semibold">
                    <Icon className="h-[18px] w-[18px] shrink-0" style={{ color: band.color }} />
                    {habit.name}
                  </span>
                  <p
                    className="font-display text-[32px] font-semibold tabular-nums leading-none sm:text-[40px]"
                    style={{ color: habit.score < 70 ? band.color : undefined }}
                  >
                    {habit.score}
                  </p>
                  <div className="col-span-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
                    <div className="h-full rounded-full" style={{ width: `${habit.score}%`, background: band.color }} />
                  </div>
                  <p className="col-span-2 text-pretty text-[14px] leading-snug text-[var(--color-fg-muted)]">
                    {habit.body}
                    {habit === nextWeakest && habit.score < 70 ? ` Your next habit after ${weakest.name.toLowerCase()}.` : ""}
                  </p>
                </Reveal>
              );
            })}
        </ul>
      </Container>
    </section>
  );
}
