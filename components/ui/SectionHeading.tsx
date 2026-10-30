import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  /** `xl` for the page's core idea, `md` for the quieter sections near the end. */
  size?: "xl" | "lg" | "md";
  className?: string;
};

/** Shared eyebrow + heading + supporting paragraph for each section. */
export function SectionHeading({ eyebrow, title, body, align = "left", size = "lg", className = "" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-[36rem] flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-fg-muted)]">{eyebrow}</p>
      )}
      <h2
        className={`text-balance font-display font-semibold leading-[1] tracking-[-0.015em] ${
          { xl: "text-[2.75rem] sm:text-[4.5rem]", lg: "text-[2.5rem] sm:text-[3.5rem]", md: "text-[2.25rem] sm:text-[2.75rem]" }[size]
        }`}
      >
        {title}
      </h2>
      {body && <p className="text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">{body}</p>}
    </Reveal>
  );
}
