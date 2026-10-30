import Image from "next/image";
import { footer, site } from "@/content/site";
import { MaybeLink } from "@/components/ui/MaybeLink";

/**
 * The footer shares the page surface rather than the sunken one: the canvas
 * colour behind bottom overscroll can only match a single surface, and a footer
 * that differed from it read as a seam under the fold. Depth comes from an
 * inset top shadow instead, which overscroll never exposes.
 */
export function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
      style={{ boxShadow: "inset 0 10px 18px -12px rgba(0, 0, 0, 0.55)" }}
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image src="/icon.png" alt="" width={28} height={28} className="rounded-lg" />
              <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
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
        </div>
      </div>
    </footer>
  );
}
