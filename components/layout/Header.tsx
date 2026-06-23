"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-[var(--color-border)] bg-[rgba(1,1,2,0.72)] backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1100px] items-center gap-6 px-6" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/icon.png" alt="" width={28} height={28} className="rounded-md" />
          <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <ul className="ml-2 hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={nav.login.href}
            className="hidden px-3 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)] sm:block"
          >
            {nav.login.label}
          </a>
          <Button href={nav.cta.href} size="sm" variant="primary">
            {nav.cta.label}
          </Button>
        </div>
      </nav>
    </header>
  );
}
