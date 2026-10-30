import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

/** Shared eyebrow + heading + supporting paragraph treatment for major sections. */
export function SectionHeading({ title, eyebrow, body, align = "center", className = "" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className="text-sm font-medium text-[var(--color-accent-soft)]">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal>
        <h2 className="utility-text-gradient text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.08}>
          <p className="text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">{body}</p>
        </Reveal>
      )}
    </div>
  );
}
