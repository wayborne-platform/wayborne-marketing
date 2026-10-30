import Image from "next/image";
import { footer, nav, site } from "@/content/site";

/**
 * A short footer: brand, the same in-page anchors as the header, and the
 * copyright line. It lists only links that go somewhere; pages that do not
 * exist yet (privacy, contact) get added here when they do.
 */
export function Footer() {
  return (
    <footer className="border-t border-[var(--color-hairline)]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-10 px-6 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Image src="/icon.png" alt="" width={26} height={26} className="rounded-[7px]" />
            <span className="text-[15px] font-semibold tracking-[-0.01em]">{site.name}</span>
          </div>
          <p className="text-[14px] leading-relaxed text-[var(--color-fg-muted)]">{footer.blurb}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:gap-8">
            {[nav.cta, ...nav.links].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14px] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-[1160px] px-6 pb-10">
        <p className="text-[13px] text-[#9298a3]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
