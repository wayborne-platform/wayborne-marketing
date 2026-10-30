import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  /** `md` for the quieter sections near the end of the page. */
  size?: "lg" | "md";
  className?: string;
};

/** Shared eyebrow + heading + supporting paragraph for each section. */
export function SectionHeading({ eyebrow, title, body, align = "left", size = "lg", className = "" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-[36rem] flex-col gap-4 ${alignment} ${className}`}>
      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--color-fg-muted)]">{eyebrow}</p>
      <h2
        className={`text-balance font-display font-semibold leading-[1] tracking-[-0.015em] ${
          size === "lg" ? "text-[2.5rem] sm:text-[3.5rem]" : "text-[2.25rem] sm:text-[2.75rem]"
        }`}
      >
        {title}
      </h2>
      {body && <p className="text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">{body}</p>}
    </Reveal>
  );
}
