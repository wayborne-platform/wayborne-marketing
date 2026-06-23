import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  rounded?: string;
};

/**
 * Image wrapped in the site's signature framed treatment: a hairline border,
 * subtle inner highlight, and a soft ambient glow underneath. Used for every
 * product screenshot so the media reads consistently across sections.
 */
export function MediaFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes,
  rounded = "rounded-2xl",
}: MediaFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-px ${rounded} bg-gradient-to-b from-white/10 to-transparent`}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`relative ${rounded} border border-[var(--color-border)] object-cover`}
      />
    </div>
  );
}
