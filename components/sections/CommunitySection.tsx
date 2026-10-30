import { community } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SnapCarousel } from "@/components/ui/SnapCarousel";

/**
 * How much of each screen shows above the panel's bottom edge, as a fraction
 * of screen height. Both captures have a clean break here: the end of the
 * streak card on Profile, the end of the podium on Friends.
 */
const VISIBLE = 0.695;

/**
 * Streaks and friends as two panels (a snapping row on phones). Each phone rises out of its panel's
 * bottom edge: the device is clipped by the panel, never the screenshot by a
 * box, so the capture keeps its real aspect ratio. The clip box's height is
 * VISIBLE of a 2.164:1 screen plus the frame's 9px top edge, taken at the
 * frame's typical 280px width; across the 250-300px it renders at, the cut
 * moves by a few pixels at most.
 */
export function CommunitySection() {
  const panels = community.panels.map((panel) => (
    <div key={panel.heading} className="panel flex h-full flex-col overflow-hidden rounded-[28px]">
      <div className="flex-1 px-6 pt-7 sm:px-9 sm:pt-10">
        <h3 className="text-[20px] font-semibold leading-tight sm:text-[22px]">{panel.heading}</h3>
        <p className="mt-2 max-w-[26rem] text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{panel.body}</p>
      </div>
      <div
        className="mx-auto mt-8 w-[72%] max-w-[300px] overflow-hidden sm:mt-10"
        style={{ aspectRatio: `280 / ${9 + VISIBLE * 262 * 2.164}` }}
      >
        <PhoneFrame src={panel.image} alt={panel.alt} sizes="(max-width: 768px) 60vw, 300px" />
      </div>
    </div>
  ));

  return (
    <section id={community.id} className="overflow-x-clip py-14 sm:py-20">
      <Container className="flex flex-col gap-12 sm:gap-14">
        {/* Headline left, paragraph right, so this header does not repeat the stacked ones around it. */}
        <Reveal className="grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-fg-muted)]">{community.eyebrow}</p>
            <h2 className="text-balance font-display text-[2.5rem] font-semibold leading-[1] tracking-[-0.015em] sm:text-[3.5rem]">
              {community.heading}
            </h2>
          </div>
          <p className="max-w-[30rem] text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)] lg:pb-1">{community.body}</p>
        </Reveal>

        <div className="md:hidden">
          {/* Friends first on phones: the leaderboard is the section's point. */}
          <SnapCarousel itemClassName="w-[84vw] max-w-[340px]" labels={[...community.panels].reverse().map((panel) => panel.tab)}>
            {[...panels].reverse()}
          </SnapCarousel>
        </div>
        <div className="hidden gap-6 md:grid md:grid-cols-2">
          {panels.map((panel, i) => (
            <Reveal key={i} delay={i * 0.06}>
              {panel}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
