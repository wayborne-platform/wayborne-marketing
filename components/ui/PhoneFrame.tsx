import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/** Intrinsic size of every app screenshot: a 924 x 1999 device capture. */
const SHOT_WIDTH = 924;
const SHOT_HEIGHT = 1999;

/*
 * Hardware proportions, all expressed against the screen box so the frame
 * scales with the screenshot instead of needing a breakpoint per size.
 *
 * The captures are 924 x 1999, an aspect of 2.163, which is the modern iPhone
 * screen almost exactly (1179 x 2556 is 2.168) -- so device measurements in
 * points carry over directly. The Dynamic Island is 125 x 36.7pt on a 393pt
 * screen sitting 11pt below the top edge.
 */
const ISLAND = {
  width: `${(125 / 393) * 100}%`,
  height: `${(36.7 / 852) * 100}%`,
  top: `${(11 / 852) * 100}%`,
};

/** Side buttons: [edge, top, height], as percentages of the frame height. */
const BUTTONS = [
  { side: "left", top: "17.5%", height: "4.2%" }, // action button
  { side: "left", top: "25.4%", height: "7.6%" }, // volume up
  { side: "left", top: "35.0%", height: "7.6%" }, // volume down
  { side: "right", top: "27.8%", height: "11.2%" }, // side button
] as const;

/**
 * A screenshot shown inside a device frame.
 *
 * The image is always rendered at its natural aspect ratio (`h-auto w-full`),
 * so a tall phone capture is never cropped to fit a landscape box; the frame
 * sizes itself to the screenshot instead of the other way around.
 *
 * The frame itself is real hardware rather than a plain rounded pad: a titanium
 * rail catching light from the top-left to match the page's neumorphic lighting,
 * a black bezel inside it, side buttons tucked behind the rail so they read as
 * protruding, and a Dynamic Island over the screen. The island lands in the gap
 * the composited status bar leaves between the clock and the indicators, which
 * is where a real device puts it.
 */
export function PhoneFrame({ src, alt, priority = false, className = "", sizes = "(max-width: 640px) 74vw, 300px" }: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Buttons sit behind the rail, offset outward so only their outer half shows. */}
      {BUTTONS.map((button, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute -z-10 w-[3px] rounded-[2px] sm:w-[4px]"
          style={{
            top: button.top,
            height: button.height,
            [button.side]: "-2px",
            background:
              button.side === "left"
                ? "linear-gradient(to right, #14171c, #3b414b)"
                : "linear-gradient(to left, #14171c, #3b414b)",
          }}
        />
      ))}

      {/* The titanium rail. */}
      <div
        className="neu-lg relative rounded-[2.7rem] p-[3px]"
        style={{ background: "linear-gradient(150deg, #5b626e 0%, #2c313a 26%, #1b1f25 58%, #454c57 100%)" }}
      >
        {/* The black bezel between rail and glass. */}
        <div className="relative overflow-hidden rounded-[2.6rem] bg-[#050607] p-[6px]">
          <div className="relative overflow-hidden rounded-[2.15rem]">
            <Image
              src={src}
              alt={alt}
              width={SHOT_WIDTH}
              height={SHOT_HEIGHT}
              priority={priority}
              sizes={sizes}
              className="block h-auto w-full"
            />

            <span
              aria-hidden="true"
              className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black"
              style={{ width: ISLAND.width, height: ISLAND.height, top: ISLAND.top }}
            />

            {/* A faint diagonal glare across the glass, clipped to the screen. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(147deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 18%, transparent 38%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
