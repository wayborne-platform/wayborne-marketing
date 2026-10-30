import { sample, score } from "@/content/site";
import { scoreBand } from "@/lib/score";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { BoltIcon, BrakeIcon, GaugeIcon, ShieldCheckIcon } from "@/components/ui/icons";

const HABIT_ICONS = {
  speed: GaugeIcon,
  smooth: BoltIcon,
  braking: BrakeIcon,
  awareness: ShieldCheckIcon,
} as const;

/**
 * The page's centered set piece: the sample driver's overall score as one
 * big dial, its four habit scores in a row beneath, and the weakest habit
 * called out with the app's coaching line. Centered and without an eyebrow,
 * so it breaks the left-aligned rhythm of the sections around it.
 */
export function ScoreSection() {
  const weakest = score.habits.reduce((low, habit) => (habit.score < low.score ? habit : low));

  return (
    <section id={score.id} className="py-14 sm:py-20">
      <Container className="flex flex-col items-center gap-10 text-center sm:gap-12">
        <Reveal className="flex max-w-[44rem] flex-col items-center gap-4">
          <h2 className="text-balance font-display text-[2.75rem] font-semibold leading-[1] tracking-[-0.015em] sm:text-[4.5rem]">
            {score.heading}
          </h2>
          <p className="max-w-[36rem] text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">{score.body}</p>
        </Reveal>

        <Reveal>
          <ScoreRing score={sample.score} showBand className="w-[200px] sm:w-[260px]" />
        </Reveal>

        <ul className="grid w-full grid-cols-2 gap-3 text-left sm:gap-4 lg:grid-cols-4">
          {score.habits.map((habit, i) => {
            const Icon = HABIT_ICONS[habit.icon];
            const band = scoreBand(habit.score);
            const isWeakest = habit === weakest;
            return (
              <Reveal
                key={habit.name}
                as="li"
                delay={i * 0.05}
                className={`panel flex flex-col gap-3 rounded-[22px] p-4 sm:p-6 ${
                  isWeakest ? "ring-2 ring-inset ring-[var(--color-accent)]" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-[15px] font-semibold sm:text-[16px]">
                    <Icon className="h-[18px] w-[18px] shrink-0" style={{ color: band.color }} />
                    {habit.name}
                  </span>
                </div>
                <p
                  className="font-display text-[40px] font-semibold tabular-nums leading-none sm:text-[52px]"
                  style={{ color: habit.score < 70 ? band.color : undefined }}
                >
                  {habit.score}
                </p>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
                  <div className="h-full rounded-full" style={{ width: `${habit.score}%`, background: band.color }} />
                </div>
                {isWeakest ? (
                  <p className="text-pretty text-[14px] leading-snug text-[var(--color-fg)] sm:text-[15px]">
                    <span className="font-semibold text-[var(--color-accent-soft)]">Fix this next.</span> {sample.insight.tip}
                  </p>
                ) : (
                  <p className="text-pretty text-[14px] leading-snug text-[var(--color-fg-muted)] sm:text-[15px]">{habit.body}</p>
                )}
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
