import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/** Intrinsic size of every app screenshot — a 924 x 1999 device capture. */
const SHOT_WIDTH = 924;
const SHOT_HEIGHT = 1999;

/**
 * A screenshot shown inside a neumorphic device bezel.
 *
 * The image is always rendered at its natural aspect ratio (`h-auto w-full`),
 * so a tall phone capture is never cropped to fit a landscape box — the frame
 * sizes itself to the screenshot instead of the other way around.
 */
export function PhoneFrame({ src, alt, priority = false, className = "", sizes = "(max-width: 640px) 74vw, 300px" }: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="neu-lg neu-sheen relative rounded-[2.6rem] p-2.5">
        <div className="neu-inset-sm overflow-hidden rounded-[2.05rem]">
          <Image
            src={src}
            alt={alt}
            width={SHOT_WIDTH}
            height={SHOT_HEIGHT}
            priority={priority}
            sizes={sizes}
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
