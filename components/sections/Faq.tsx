import { faq } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Plain questions and answers on native <details>, so they open without
 * JavaScript and stay searchable with find-in-page.
 */
export function Faq() {
  return (
    <section id={faq.id} className="py-14 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.heading} size="md" />
          <ul className="flex flex-col gap-3">
            {faq.promises.map((promise) => (
              <li key={promise} className="flex items-center gap-3 text-[15px] font-medium">
                <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-score-excellent)_16%,transparent)] text-[var(--color-score-excellent)]">
                  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5"><path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                {promise}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          {faq.items.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-b border-[var(--color-hairline)] first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="relative h-3.5 w-3.5 shrink-0 text-[var(--color-fg-muted)] before:absolute before:left-0 before:top-1/2 before:h-[1.5px] before:w-full before:-translate-y-1/2 before:rounded before:bg-current after:absolute after:left-1/2 after:top-0 after:h-full after:w-[1.5px] after:-translate-x-1/2 after:rounded after:bg-current after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-[40rem] pb-6 pr-10 text-pretty text-[15px] leading-relaxed text-[var(--color-fg-muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
