import { stores } from "@/content/site";
import { AppleIcon, PlayIcon } from "./icons";

type AppLinksProps = {
  className?: string;
};

const shell = "group flex h-[62px] items-center gap-3 rounded-2xl px-5";

/**
 * App Store / Google Play buttons.
 *
 * A store with no listing URL yet renders grayed out and non-interactive,
 * with a flat surface and a "Coming soon" label in place of the store name,
 * so nothing here is a dead link.
 */
export function AppLinks({ className = "" }: AppLinksProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      {stores.map((store) => {
        const icon =
          store.id === "ios" ? <AppleIcon width={22} height={22} /> : <PlayIcon width={22} height={22} />;

        if (!store.href) {
          return (
            <span
              key={store.id}
              aria-disabled="true"
              title={`${store.store} listing coming soon`}
              className={`${shell} cursor-not-allowed text-[var(--color-fg-subtle)]`}
            >
              <span aria-hidden="true">{icon}</span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px]">{store.store}</span>
                <span className="text-[15px] font-medium">Coming soon</span>
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
            className={`${shell} neu neu-interactive text-[var(--color-fg)]`}
          >
            <span aria-hidden="true">{icon}</span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] text-[var(--color-fg-muted)]">{store.label}</span>
              <span className="text-[15px] font-medium">{store.store}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
