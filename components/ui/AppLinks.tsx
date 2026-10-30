import { stores } from "@/content/site";
import { AppleIcon, PlayIcon } from "./icons";

type AppLinksProps = {
  className?: string;
};

const shell = "flex h-14 w-[200px] items-center gap-2.5 rounded-xl pl-4 pr-5";

/**
 * App Store / Google Play badges.
 *
 * A store with no listing URL yet renders as a quiet outlined badge that says
 * "Coming soon to" in place of the store's call to action. It is not a link
 * and does not react to the pointer, so nothing here goes nowhere, but it
 * still reads as a deliberate pre-launch badge rather than a broken button.
 * Set `href` in content/site.ts and it becomes a solid, clickable badge.
 */
export function AppLinks({ className = "" }: AppLinksProps) {
  return (
    <div className={`flex flex-col items-center gap-3 sm:flex-row ${className}`}>
      {stores.map((store) => {
        const icon =
          store.id === "ios" ? <AppleIcon width={22} height={22} /> : <PlayIcon width={20} height={20} />;

        if (!store.href) {
          return (
            <span
              key={store.id}
              aria-disabled="true"
              aria-label={`${store.store}: coming soon`}
              className={`${shell} text-[var(--color-fg-muted)] ring-1 ring-inset ring-white/10`}
            >
              <span aria-hidden="true" className="text-[var(--color-fg-muted)]">
                {icon}
              </span>
              <span aria-hidden="true" className="flex flex-col leading-tight">
                <span className="text-[11px] text-[var(--color-fg-muted)]">Coming soon to</span>
                <span className="text-[16px] font-semibold">{store.store}</span>
              </span>
            </span>
          );
        }

        return (
          <a
            key={store.id}
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${shell} bg-[var(--color-fg)] text-[var(--color-bg)] transition-opacity hover:opacity-90`}
          >
            <span aria-hidden="true">{icon}</span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] opacity-70">{store.label}</span>
              <span className="text-[15px] font-semibold tracking-[-0.01em]">{store.store}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
