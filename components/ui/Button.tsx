import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[var(--shadow-neu-sm)] hover:bg-[#4f97ff] hover:shadow-[var(--shadow-neu)] active:shadow-[var(--shadow-neu-inset-sm)]",
  secondary: "neu neu-interactive text-[var(--color-fg)]",
  ghost: "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-5 text-[13px]",
  md: "h-11 px-6 text-[15px]",
};

/** Applied when a destination does not exist yet. */
const disabledClasses =
  "cursor-not-allowed text-[var(--color-fg-subtle)] shadow-[var(--shadow-neu-inset-sm)] bg-[var(--color-bg-sunken)]";

type ButtonProps = {
  /** `null` renders a grayed-out, non-interactive button. */
  href: string | null;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({ href, variant = "primary", size = "md", className = "", children }: ButtonProps) {
  if (!href) {
    return (
      <span aria-disabled="true" className={`${base} ${sizes[size]} ${disabledClasses} ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </Link>
  );
}
