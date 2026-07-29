import type { MaybeLink as MaybeLinkData } from "@/content/site";

type MaybeLinkProps = MaybeLinkData & {
  className?: string;
  /** Extra classes applied only when the link has a real destination. */
  linkClassName?: string;
};

/**
 * Renders a nav or footer entry as a real link when it has a destination, and
 * as grayed-out, non-interactive text when it does not — so the site never
 * ships an anchor that goes nowhere.
 */
export function MaybeLink({ label, href, className = "", linkClassName = "" }: MaybeLinkProps) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Coming soon"
        className={`${className} cursor-not-allowed text-[var(--color-fg-subtle)] opacity-45`}
      >
        {label}
      </span>
    );
  }

  return (
    <a href={href} className={`${className} ${linkClassName}`}>
      {label}
    </a>
  );
}
