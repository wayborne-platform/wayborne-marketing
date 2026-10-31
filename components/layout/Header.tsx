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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-[64px] w-full max-w-[1100px] items-center gap-6 rounded-2xl px-4 transition-shadow duration-300 sm:px-6 ${
          scrolled ? "neu bg-[rgba(23,24,27,0.92)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/icon.png" alt="" width={28} height={28} className="rounded-lg" />
          <span className="text-[15px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <Button href={nav.cta.href} size="sm" variant="secondary">
            {nav.cta.label}
          </Button>
        </div>
      </nav>
    </header>
  );
}
