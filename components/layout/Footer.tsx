import Image from "next/image";
import Link from "next/link";
import { footer, nav, site } from "@/content/site";
import { AppleIcon, PlayIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-marketing)]">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
              <Image src="/icon.png" alt="" width={28} height={28} className="rounded-md" />
              <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="text-sm text-[var(--color-fg-subtle)]">{site.tagline}</p>
            <div className="mt-1 flex gap-2">
              <a
                href={site.appStoreUrl}
                aria-label="Download on the App Store"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                <AppleIcon width={18} height={18} />
              </a>
              <a
                href={site.playStoreUrl}
                aria-label="Get it on Google Play"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                <PlayIcon width={18} height={18} />
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
              <h3 className="text-[13px] font-medium text-[var(--color-fg)]">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-[var(--color-fg-subtle)] transition-colors hover:text-[var(--color-fg)]">
                      {link.label}
                    </a>
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
          <p className="text-[13px] text-[var(--color-fg-subtle)]">{nav.cta.label} — {site.tagline.toLowerCase()}.</p>
        </div>
      </div>
    </footer>
  );
}
