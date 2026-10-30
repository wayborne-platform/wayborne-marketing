import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** On a light surface the deep drop shadow turns to a gray smudge; use a crisp, light one. */
  onLight?: boolean;
};

/** Intrinsic size of every app screenshot: a 390 x 844pt screen captured at 3x. */
const SHOT_WIDTH = 1170;
const SHOT_HEIGHT = 2532;

/*
 * Hardware proportions, all expressed against the screen box so the frame
 * scales with the screenshot instead of needing a breakpoint per size. The
 * captures come from the app's capture rig, which lays out a 390 x 844pt
 * iPhone screen with its status bar and puts the Dynamic Island (126 x 37pt)
 * 11pt below the top edge; the rig's own island is removed so this one draws.
 */
const ISLAND = {
  width: `${(126 / 390) * 100}%`,
  height: `${(37 / 844) * 100}%`,
  top: `${(11 / 844) * 100}%`,
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
 * rail catching light from the top-left, matching the page's top-lit panels,
 * a black bezel inside it, side buttons tucked behind the rail so they read as
 * protruding, and a Dynamic Island over the screen. The island lands in the gap
 * the composited status bar leaves between the clock and the indicators, which
 * is where a real device puts it.
 */
export function PhoneFrame({ src, alt, priority = false, className = "", sizes = "(max-width: 640px) 74vw, 300px", onLight = false }: PhoneFrameProps) {
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
                ? "linear-gradient(to right, #121314, #3a3b3f)"
                : "linear-gradient(to left, #121314, #3a3b3f)",
          }}
        />
      ))}

      {/* The titanium rail. */}
      <div
        className="relative rounded-[2.7rem] p-[3px]"
        style={{
          background: "linear-gradient(150deg, #5a5b60 0%, #2a2b2f 26%, #18191b 58%, #46474c 100%)",
          boxShadow: onLight
            ? "0 0 0 1px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.10)"
            : "0 0 0 1px rgba(0,0,0,0.6), 0 40px 80px -30px rgba(0,0,0,0.9), 0 18px 36px -18px rgba(0,0,0,0.7)",
        }}
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
