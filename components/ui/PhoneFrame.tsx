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
 * Device geometry in points, from the iPhone the captures are sized for: a
 * 390 x 844pt display with 47.33pt corners, and about 20.8pt of rail and black
 * border on each side. Corners are concentric, so each layer's radius is the
 * screen's plus everything between it and the screen. The Dynamic Island is
 * 126 x 37pt, 11pt below the top edge; the capture rig's own island is removed
 * so this one draws.
 */
const SCREEN = { width: 390, height: 844, radius: 47.33 };
const BEZEL = 16.3;
const RAIL = 4.5;
const BORDER = BEZEL + RAIL;
const DEVICE_WIDTH = SCREEN.width + 2 * BORDER;

/**
 * A length in points as a share of the device's width. The frame is a size
 * container, so every radius and border scales with the rendered phone and
 * stays in the device's real proportions at any size.
 */
const cqw = (points: number) => `${(points / DEVICE_WIDTH) * 100}cqw`;

const ISLAND = {
  width: `${(126 / SCREEN.width) * 100}%`,
  height: `${(37 / SCREEN.height) * 100}%`,
  top: `${(11 / SCREEN.height) * 100}%`,
};

/** Side buttons: [edge, top, height], as percentages of the frame height. */
const BUTTONS = [
  { side: "left", top: "17.5%", height: "4.2%" }, // action button
  { side: "left", top: "25.4%", height: "7.6%" }, // volume up
  { side: "left", top: "35.0%", height: "7.6%" }, // volume down
  { side: "right", top: "27.8%", height: "11.2%" }, // side button
] as const;

/**
 * The aspect ratio (width / height) of a box that shows the device from its
 * top edge down to `fraction` of the screen's height. Panels that let a phone
 * run off their bottom edge use it to land the cut on a chosen row of the
 * screenshot at any width.
 */
export const visibleAspectRatio = (fraction: number) =>
  `${DEVICE_WIDTH} / ${BORDER + fraction * SCREEN.height}`;

/**
 * A screenshot shown inside a device frame.
 *
 * The image is always rendered at its natural aspect ratio (`h-auto w-full`),
 * so a tall phone capture is never cropped to fit a landscape box; the frame
 * sizes itself to the screenshot instead of the other way around.
 *
 * The frame is drawn from the real device's proportions (see the geometry
 * above), not fixed pixel sizes, so a small phone in a caption row has the
 * same corners and bezels as the large hero phone: a rail catching light from
 * the top-left, a black border, side buttons tucked behind the rail so they
 * read as protruding, and a Dynamic Island in the gap the composited status
 * bar leaves between the clock and the indicators.
 */
export function PhoneFrame({ src, alt, priority = false, className = "", sizes = "(max-width: 640px) 74vw, 300px", onLight = false }: PhoneFrameProps) {
  return (
    <div className={`relative [container-type:inline-size] ${className}`}>
      {/* Buttons sit behind the rail, offset outward so only their outer half shows. */}
      {BUTTONS.map((button, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute -z-10"
          style={{
            top: button.top,
            height: button.height,
            width: cqw(4),
            [button.side]: cqw(-1.5),
            borderRadius: cqw(1.5),
            background:
              button.side === "left"
                ? "linear-gradient(to right, #121314, #3a3b3f)"
                : "linear-gradient(to left, #121314, #3a3b3f)",
          }}
        />
      ))}

      {/* The rail. */}
      <div
        className="relative"
        style={{
          padding: cqw(RAIL),
          borderRadius: cqw(SCREEN.radius + BORDER),
          background: "linear-gradient(150deg, #5a5b60 0%, #2a2b2f 26%, #18191b 58%, #46474c 100%)",
          boxShadow: onLight
            ? "0 0 0 1px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.10)"
            : "0 0 0 1px rgba(0,0,0,0.6), 0 40px 80px -30px rgba(0,0,0,0.9), 0 18px 36px -18px rgba(0,0,0,0.7)",
        }}
      >
        {/* The black border between rail and glass. */}
        <div
          className="relative overflow-hidden bg-[#050607]"
          style={{ padding: cqw(BEZEL), borderRadius: cqw(SCREEN.radius + BEZEL) }}
        >
          <div className="relative overflow-hidden" style={{ borderRadius: cqw(SCREEN.radius) }}>
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
