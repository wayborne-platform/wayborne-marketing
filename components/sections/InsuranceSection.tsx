import { insurance, sample } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The insurance estimate, on the app's light theme. It is the page's one
 * light surface, a full-width band: it breaks up the run of dark sections and
 * shows that the app has a light mode. Colors are the app's light palette
 * (ThemeContext). The big number is the dollar range; the phone, shown whole,
 * carries the percentage. On phones the screenshot follows the number, before
 * the two supporting points.
 */
export function InsuranceSection() {
  return (
    <section id={insurance.id} className="mt-8 bg-[#eef0f4] text-[#141a26] sm:mt-12">
      <Container>
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-x-12 lg:gap-y-10">
          <div className="flex flex-col gap-9">
            <Reveal className="flex max-w-[36rem] flex-col gap-4">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#576071]">{insurance.eyebrow}</p>
              <h2 className="text-balance font-display text-[2.5rem] font-semibold leading-[1] tracking-[-0.015em] sm:text-[3.5rem]">
                {insurance.heading}
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-[#4c5566]">{insurance.body}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#576071]">
                Estimated savings at a score of {sample.score}
              </p>
              <p className="flex items-baseline gap-1 font-display font-semibold leading-none tracking-[-0.02em] text-[#17803f]">
                <span className="text-[4.5rem] tabular-nums sm:text-[6rem]">{sample.savings.monthly}</span>
                <span className="text-[1.75rem] sm:text-[2rem]">/mo off</span>
              </p>
              <p className="mt-3 max-w-[560px] text-pretty text-[14px] leading-snug text-[#4c5566]">
                Example: {sample.discount} off a {sample.savings.premium} premium. An estimate, not a quote.
              </p>
            </Reveal>
          </div>

          <Reveal className="mx-auto w-full max-w-[260px] lg:row-span-2 lg:max-w-none lg:self-start lg:pt-28">
            <PhoneFrame src={insurance.image} alt={insurance.alt} sizes="(max-width: 640px) 260px, 340px" />
          </Reveal>

          <dl className="grid gap-6 sm:grid-cols-2">
            {insurance.points.map((point, i) => (
              <Reveal key={point.heading} delay={0.1 + i * 0.05} className="border-t border-[rgba(20,26,38,0.1)] pt-4">
                <dt className="text-[16px] font-semibold">{point.heading}</dt>
                <dd className="mt-1 text-pretty text-[15px] leading-relaxed text-[#4c5566]">{point.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
