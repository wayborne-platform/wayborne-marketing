import { howItWorks, sample } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { DashboardIllustration } from "@/components/ui/DashboardIllustration";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Bluetooth glyph for the adapter chip. */
function BluetoothIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>
  );
}

/** A short drive drawn as a route, with two events pinned on it. */
function RouteSketch() {
  return (
    <svg viewBox="0 0 220 120" fill="none" aria-hidden="true" className="w-[170px] sm:w-[220px]">
      <path d="M0 30h220M0 70h220M0 110h220M40 0v120M110 0v120M180 0v120" stroke="rgba(255,255,255,0.05)" />
      <path
        d="M22 98c18 0 20-36 44-36s22 28 48 28 26-58 52-58 26 18 34 18"
        stroke="var(--color-accent)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="98" r="6" fill="var(--color-well)" stroke="var(--color-fg)" strokeWidth="2.5" />
      <circle cx="90" cy="74" r="5.5" fill="var(--color-score-poor)" stroke="var(--color-panel)" strokeWidth="2" />
      <circle cx="152" cy="40" r="5.5" fill="var(--color-score-fair)" stroke="var(--color-panel)" strokeWidth="2" />
      <circle cx="200" cy="50" r="7" fill="var(--color-accent)" stroke="var(--color-panel)" strokeWidth="3" />
    </svg>
  );
}

/** A status line in the app's chip style, under a step's drawing. Hidden on phones to keep the steps short. */
function StatusChip({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="panel hidden items-center gap-2.5 rounded-xl py-2 pl-2 pr-3.5 sm:flex">
      {icon}
      <div className="leading-tight">
        <p className="text-[13px] font-semibold">{title}</p>
        <p className="text-[11px] tabular-nums text-[var(--color-fg-muted)]">{detail}</p>
      </div>
    </div>
  );
}

/*
 * Each step's visual: what the driver has in hand at that moment, drawn in
 * the app's language, with the status the app shows laid over it.
 */
const visuals = [
  <>
    <DashboardIllustration className="w-[190px] sm:w-[230px]" />
    <StatusChip
      icon={
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_18%,transparent)] text-[var(--color-accent-soft)]">
          <BluetoothIcon className="h-4 w-4" />
        </span>
      }
      title="Adapter connected"
      detail="Ready to record"
    />
  </>,
  <>
    <RouteSketch />
    <StatusChip
      icon={
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-score-poor)_16%,transparent)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-score-poor)]" />
        </span>
      }
      title="Recording trip"
      detail="12 min · 4.1 mi"
    />
  </>,
  <>
    <ScoreRing score={sample.trip.score} showBand className="w-[96px] sm:w-[112px]" />
    <StatusChip
      icon={<span className="h-7 w-7 rounded-full bg-[color-mix(in_srgb,var(--color-score-excellent)_18%,transparent)] p-[9px]"><span className="block h-full w-full rounded-full bg-[var(--color-score-excellent)]" /></span>}
      title="Trip scored"
      detail="Overall score updated"
    />
  </>,
];

/** The three-step setup story: adapter, drive, score. */
export function HowItWorks() {
  return (
    <section id={howItWorks.id} className="py-14 sm:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.heading} />

        <ol className="grid gap-5 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <Reveal
              key={step.heading}
              as="li"
              delay={i * 0.06}
              className="panel flex flex-col overflow-hidden rounded-[24px]"
            >
              <div className="well m-2 flex h-[150px] flex-col items-center justify-center gap-3 rounded-[18px] sm:h-[240px] sm:gap-4">
                {visuals[i]}
              </div>
              <div className="px-5 pb-6 pt-3 sm:px-7 sm:pb-7 sm:pt-4">
                <h3 className="flex items-baseline gap-3 text-[18px] font-semibold">
                  <span className="font-display text-[26px] font-semibold tabular-nums leading-none text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.heading}
                </h3>
                <p className="mt-2 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
