import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/*
 * Apple's official iPhone 18 Pro (Black) product bezel, from Apple Design
 * Resources, and the size and position of its screen hole in that PNG. The
 * hole is a 402 x 874pt screen at 3x, so screenshots rendered at that size
 * fill it pixel for pixel. The bezel already draws the Dynamic Island and the
 * device's continuous corners.
 */
const BEZEL = { src: "/images/device/iphone-18-pro-black.png", width: 1350, height: 2760 };
const SCREEN = { x: 72, y: 69, width: 1206, height: 2622 };

/**
 * The screen hole's exact shape, cut from the bezel's own alpha channel
 * (tools/screens/screen-mask.py), so the screenshot's corners follow Apple's
 * curve instead of a CSS border-radius approximation.
 */
const SCREEN_MASK = "url(/images/device/iphone-18-pro-screen-mask.png)";

const pct = (part: number, whole: number) => `${(part / whole) * 100}%`;

/**
 * The aspect ratio (width / height) of a box that shows the device from its
 * top edge down to `fraction` of the screen's height. Panels that let a phone
 * run off their bottom edge use it to land the cut on a chosen row of the
 * screenshot at any width.
 */
export const visibleAspectRatio = (fraction: number) => `${BEZEL.width} / ${SCREEN.y + fraction * SCREEN.height}`;

/**
 * A screenshot inside Apple's iPhone bezel.
 *
 * The screenshot sits in the bezel's screen hole at its natural aspect ratio,
 * clipped to the hole's shape, and the bezel PNG is laid over it unchanged.
 * Screenshots must be 1206 x 2622 (see AGENTS.md).
 */
export function PhoneFrame({ src, alt, priority = false, className = "", sizes = "(max-width: 640px) 74vw, 300px" }: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${BEZEL.width} / ${BEZEL.height}` }}>
      <div
        className="absolute"
        style={{
          left: pct(SCREEN.x, BEZEL.width),
          top: pct(SCREEN.y, BEZEL.height),
          width: pct(SCREEN.width, BEZEL.width),
          height: pct(SCREEN.height, BEZEL.height),
          maskImage: SCREEN_MASK,
          WebkitMaskImage: SCREEN_MASK,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={SCREEN.width}
          height={SCREEN.height}
          priority={priority}
          sizes={sizes}
          className="block h-full w-full"
        />
      </div>
      <Image
        src={BEZEL.src}
        alt=""
        aria-hidden="true"
        width={BEZEL.width}
        height={BEZEL.height}
        priority={priority}
        sizes={sizes}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
}
