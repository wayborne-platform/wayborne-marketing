"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

/**
 * Fixed header. Transparent over the hero, then a raised panel once the page
 * scrolls. Every link is an in-page anchor, so nothing here can dead-end; the
 * launch status on the right is a label, not a button.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-14 w-full max-w-[1160px] items-center gap-8 rounded-2xl pl-4 pr-2.5 transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "panel bg-[rgba(26,27,30,0.88)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/icon.png" alt="" width={26} height={26} className="rounded-[7px]" />
          <span className="text-[15px] font-semibold tracking-[-0.01em]">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
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

        <p className="ml-auto flex items-center gap-2 whitespace-nowrap pr-2 text-[13px] font-medium text-[var(--color-fg-muted)]">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-score-fair)]" />
          {nav.status}
        </p>
      </nav>
    </header>
  );
}
