"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MaybeLink } from "@/components/ui/MaybeLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-[64px] w-full max-w-[1100px] items-center gap-6 rounded-2xl px-4 transition-shadow duration-300 sm:px-6 ${
          scrolled ? "neu bg-[rgba(35,39,46,0.92)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/icon.png" alt="" width={28} height={28} className="rounded-lg" />
          <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <li key={link.label}>
              <MaybeLink
                label={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-[13px] font-medium"
                linkClassName="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              />
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 md:ml-4">
          <MaybeLink
            label={nav.login.label}
            href={nav.login.href}
            className="hidden px-3 py-2 text-[13px] font-medium sm:block"
            linkClassName="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
          />
          <Button href={nav.cta.href} size="sm" variant="primary">
            {nav.cta.label}
          </Button>
        </div>
      </nav>
    </header>
  );
}
