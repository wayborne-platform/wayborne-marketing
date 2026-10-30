"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

/** Every in-page destination, in page order. */
const sections = [nav.cta, ...nav.links];

/**
 * Fixed header. Transparent over the hero, then a raised panel once the page
 * scrolls. Every link is an in-page anchor, so nothing here can dead-end.
 * Below `lg` the links fold into a menu that opens under the bar and closes
 * when a link is picked.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const raised = scrolled || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto w-full max-w-[1160px] rounded-2xl transition-[background-color,box-shadow] duration-300 ${
          raised ? "panel bg-[rgba(26,27,30,0.9)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="flex h-14 items-center gap-8 pl-4 pr-2">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
            <Image src="/icon.png" alt="" width={26} height={26} className="rounded-[7px]" />
            <span className="text-[15px] font-semibold tracking-[-0.01em]">{site.name}</span>
          </Link>

          <ul className="ml-auto hidden items-center gap-1 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-[14px] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl text-[var(--color-fg)] lg:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="m5 5 10 10M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <ul id="mobile-menu" className="flex flex-col border-t border-[var(--color-hairline)] px-2 py-2 lg:hidden">
            {sections.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 text-[16px] font-medium text-[var(--color-fg)] hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
