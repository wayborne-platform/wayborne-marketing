import { community, hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * How much of each screen shows above the panel's bottom edge, as a fraction
 * of screen height. Both captures have a clean break here: the end of the
 * streak card on Profile, the end of the podium on Friends.
 */
const VISIBLE = 0.695;

/**
 * Streaks and friends as two panels. Each phone rises out of its panel's
 * bottom edge: the device is clipped by the panel, never the screenshot by a
 * box, so the capture keeps its real aspect ratio. The clip box's height is
 * VISIBLE of a 2.164:1 screen plus the frame's 9px top edge, taken at the
 * frame's typical 280px width; across the 250-300px it renders at, the cut
 * moves by a few pixels at most.
 */
export function CommunitySection() {
  return (
    <section id={community.id} className="border-b border-[var(--color-hairline)] bg-[#111214] py-14 sm:py-20">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow={community.eyebrow} title={community.heading} body={community.body} />

        <div className="grid gap-6 md:grid-cols-2">
          {community.panels.map((panel, i) => (
            <Reveal
              key={panel.heading}
              delay={i * 0.06}
              className="panel flex flex-col overflow-hidden rounded-[28px]"
            >
              <div className="flex-1 px-7 pt-8 sm:px-9 sm:pt-10">
                <h3 className="text-[22px] font-semibold leading-tight">{panel.heading}</h3>
                <p className="mt-2 max-w-[26rem] text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                  {panel.body}
                </p>
              </div>
              <div
                className="mx-auto mt-10 w-[72%] max-w-[300px] overflow-hidden"
                style={{ aspectRatio: `280 / ${9 + VISIBLE * 262 * 2.164}` }}
              >
                <PhoneFrame src={panel.image} alt={panel.alt} sizes="(max-width: 768px) 72vw, 300px" />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="-mt-6 text-[14px] text-[#929ba8] sm:text-[13px]">{hero.sampleNote}</p>
      </Container>
    </section>
  );
}
