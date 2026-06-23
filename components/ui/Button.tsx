import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-marketing)]";

const variants: Record<Variant, string> = {
  primary: "bg-white text-[#08090a] hover:bg-white/90",
  secondary:
    "bg-white/10 text-[var(--color-fg)] backdrop-blur hover:bg-white/15 border border-[var(--color-border-strong)]",
  ghost: "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
} & ComponentProps<typeof Link>;

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
