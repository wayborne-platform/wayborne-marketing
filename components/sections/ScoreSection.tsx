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
 * What the score is made of, shown on one real trip: the sample trip's score
 * up top and its four habit scores below, each with what that habit
 * measures. The hero already shows the overall score, so this panel shows
 * the per-trip breakdown that feeds it. Heading on the left, panel on the
 * right at desktop widths.
 */
export function ScoreSection() {
  const { trip } = sample;

  return (
    <section id={score.id} className="py-14 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <SectionHeading eyebrow={score.eyebrow} title={score.heading} body={score.body} size="xl" />

        <Reveal className="panel-lg rounded-[28px] p-5 sm:p-8">
          <div className="flex items-center gap-4 border-b border-[var(--color-hairline)] pb-5 sm:pb-6">
            <ScoreRing score={trip.score} className="w-16 sm:w-[72px]" />
            <div className="min-w-0">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--color-score-excellent)]">
                Trip score · {trip.band}
              </p>
              <p className="truncate text-[17px] font-semibold">{trip.title}</p>
              <p className="text-[13px] text-[var(--color-fg-muted)]">
                {trip.when} · {trip.duration} · {trip.distance}
              </p>
            </div>
          </div>

          <ul className="flex flex-col">
            {score.habits.map((habit) => {
              const Icon = HABIT_ICONS[habit.icon];
              const band = scoreBand(habit.score);
              return (
                <li
                  key={habit.name}
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3.5 gap-y-1.5 border-b border-[var(--color-hairline)] py-4 last:border-b-0 last:pb-0 sm:gap-x-4 sm:py-5"
                >
                  <span className="well flex h-9 w-9 items-center justify-center rounded-full sm:row-span-2 sm:h-10 sm:w-10">
                    <Icon className="h-[18px] w-[18px]" style={{ color: band.color }} />
                  </span>
                  <h3 className="text-[16px] font-semibold sm:text-[17px]">{habit.name}</h3>
                  <p
                    className="text-right font-display text-[28px] font-semibold tabular-nums leading-none sm:row-span-2 sm:text-[32px]"
                    style={{ color: band.color }}
                  >
                    {habit.score}
                  </p>
                  <p className="col-span-3 text-pretty text-[15px] leading-snug text-[var(--color-fg-muted)] sm:col-span-1 sm:col-start-2">
                    {habit.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
