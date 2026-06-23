import Image from "next/image";
import { site } from "@/content/site";
import { AppleIcon, PlayIcon } from "./icons";

type AppLinksProps = {
  /** Show the desktop "scan to download" QR card alongside the store buttons. */
  showQr?: boolean;
  className?: string;
};

function StoreButton({
  href,
  icon,
  label,
  store,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  store: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-[58px] items-center gap-3 rounded-2xl border border-[var(--color-border-strong)] bg-white/[0.04] px-5 backdrop-blur transition-colors duration-200 hover:bg-white/[0.08]"
    >
      <span className="text-[var(--color-fg)]">{icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] text-[var(--color-fg-muted)]">{label}</span>
        <span className="text-[15px] font-medium text-[var(--color-fg)]">{store}</span>
      </span>
    </a>
  );
}

export function AppLinks({ showQr = false, className = "" }: AppLinksProps) {
  return (
    <div className={`flex items-stretch gap-3 ${className}`}>
      {showQr && (
        <div className="hidden flex-col items-center justify-between rounded-2xl border border-[var(--color-border-strong)] bg-white p-2 sm:flex">
          <Image src="/images/qr.svg" alt="Scan to download Wayborne" width={86} height={86} unoptimized />
          <span className="pb-1 text-[10px] font-medium uppercase tracking-wide text-[#08090a]">Scan to download</span>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <StoreButton href={site.appStoreUrl} icon={<AppleIcon width={22} height={22} />} label="Download on the" store="App Store" />
        <StoreButton href={site.playStoreUrl} icon={<PlayIcon width={22} height={22} />} label="Get it on" store="Google Play" />
      </div>
    </div>
  );
}
