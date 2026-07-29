import Image from "next/image";
import Link from "next/link";
import { footer, nav, site, stores } from "@/content/site";
import { AppleIcon, PlayIcon } from "@/components/ui/icons";
import { MaybeLink } from "@/components/ui/MaybeLink";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-sunken)]">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
              <Image src="/icon.png" alt="" width={28} height={28} className="rounded-lg" />
              <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="text-sm text-[var(--color-fg-subtle)]">{site.tagline}</p>
            <div className="mt-1 flex gap-2">
              {stores.map((store) => {
                const icon =
                  store.id === "ios" ? <AppleIcon width={16} height={16} /> : <PlayIcon width={16} height={16} />;
                const shell = "flex h-9 w-9 items-center justify-center rounded-xl";

                return store.href ? (
                  <a
                    key={store.id}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${store.store}`}
                    className={`${shell} neu-sm neu-interactive text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]`}
                  >
                    {icon}
                  </a>
                ) : (
                  <span
                    key={store.id}
                    aria-disabled="true"
                    title={`${store.store} listing coming soon`}
                    className={`${shell} neu-inset-sm cursor-not-allowed text-[var(--color-fg-subtle)] opacity-45`}
                  >
                    {icon}
                  </span>
                );
              })}
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
              <h3 className="text-[13px] font-medium text-[var(--color-fg)]">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <MaybeLink
                      label={link.label}
                      href={link.href}
                      className="text-[13px]"
                      linkClassName="text-[var(--color-fg-subtle)] transition-colors hover:text-[var(--color-fg)]"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[var(--color-fg-subtle)]">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-[var(--color-fg-subtle)]">
            {nav.cta.label} — {site.tagline.toLowerCase()}.
          </p>
        </div>
      </div>
    </footer>
  );
}
