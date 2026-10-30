/**
 * Single source of truth for all marketing copy and navigation data.
 *
 * Copy and screenshots match the Wayborne app's current design (screens in
 * public/images/iphone are rendered from the app's design preview; see
 * AGENTS.md):
 * a per-trip safety score built from speed, smooth driving, braking, and
 * awareness; a trip list with per-trip maps; a usage-based insurance preview;
 * streaks, tiers, and challenges; and a friends leaderboard.
 *
 * Link policy: anything that does not have a real destination yet is modeled
 * as `href: null` so the UI can render it grayed out and non-interactive
 * instead of shipping a dead link.
 */

export type MaybeLink = {
  label: string;
  /** `null` means "no destination yet": rendered disabled, never clickable. */
  href: string | null;
};

export const site = {
  name: "Wayborne",
  tagline: "Safe driving pays off",
  description:
    "Wayborne scores every drive in real time, including speed, smooth driving, braking, and awareness, then turns that record into a usage-based insurance estimate.",
  url: "https://wayborne.app",
} as const;

/**
 * Store listings are not live yet, so both are disabled. Flip `href` to the
 * real listing URL and the buttons become active automatically.
 */
export const stores = [
  { id: "ios", label: "Download on the", store: "App Store", href: null as string | null },
  { id: "android", label: "Get it on", store: "Google Play", href: null as string | null },
] as const;

export const nav = {
  cta: { label: "Get the app", href: null as string | null },
  login: { label: "Log in", href: null as string | null },
} as const;

export const hero = {
  eyebrow: "Introducing Wayborne",
  headline: "Every drive, scored in real time",
  subhead: [
    "Wayborne turns everyday driving into a safety score you can watch improve,",
    "and a record that can lower what you pay to insure the car.",
  ],
  requirement: "Records through a Bluetooth OBD-II adapter.",
  /** The screenshots show a sample driver, not a real account. */
  sampleNote: "App screens show a sample driver.",
  image: "/images/iphone/home.png",
  imageAlt:
    "Wayborne home screen showing a safety score of 79, rated Fair, with speed 100, smooth driving 39, braking 57, and awareness 100",
} as const;

export const showcase = {
  eyebrow: "Your driving, measured.",
  body: "Wayborne scores every trip across the four behaviors that actually cause crashes: speed, smooth driving, braking, and awareness. An invisible risk becomes a number you can watch improve.",
  /** `icon` keys the glyph the app uses for that sub-score. See ui/icons.tsx. */
  metrics: [
    { icon: "speed", name: "Speed", body: "Stays near posted limits and avoids very high-speed exposure." },
    { icon: "smooth", name: "Smooth driving", body: "Accelerates steadily, without repeated hard launches." },
    { icon: "braking", name: "Braking", body: "Slows down predictably instead of braking late and hard." },
    { icon: "awareness", name: "Awareness", body: "Tracks phone handling and other distractions behind the wheel." },
  ],
} as const;

export const trips = {
  id: "trips",
  heading: "Every trip, scored the moment you park",
  body: "Plug a Bluetooth OBD-II adapter in once. After that, Wayborne picks up each drive on its own and grades it, and any trip opens to show what built its score and where each event happened.",
  /** Reading order: list, breakdown, map. The middle one sits forward. */
  screens: [
    {
      tab: "Trip history",
      src: "/images/iphone/trips.png",
      alt: "Wayborne trips list with seven recent drives, each with its own score",
      heading: "A graded history",
      body: "Every drive gets its own score, so a rough commute shows up instead of hiding in an average.",
    },
    {
      tab: "Breakdown",
      src: "/images/iphone/trip.png",
      alt: "Wayborne trip detail for Home to Climbing gym, scored 95 Excellent, with a score breakdown by habit",
      heading: "What built the score",
      body: "Tap any habit to see the events behind it, like a hard brake or time over the limit.",
    },
    {
      tab: "Route",
      src: "/images/iphone/map.png",
      alt: "Wayborne trip map for Home to Climbing gym, with the route and each driving event pinned along it",
      heading: "Where it happened",
      body: "Each event is pinned to the route, so you know which corner or on-ramp to work on.",
    },
  ],
} as const;

export const insurance = {
  id: "insurance",
  eyebrow: "Insurance preview",
  heading: "See what your driving is worth",
  body: "Wayborne translates your safety score into a usage-based insurance estimate: the discount range, what it saves per month and per year, and which behaviors are carrying it.",
  image: "/images/iphone/insurance.png",
  alt: "Wayborne insurance estimate showing a 9 to 13 percent discount at a safety score of 79, about $14 to $21 a month",
  /** Share of the screen shown above the panel's bottom edge: the end of the Speed row. */
  cut: 0.84,
  points: [
    {
      eyebrow: "A range, not a promise.",
      body: "Every estimate is labeled as an estimate and shows the trip count behind it, so you know how much history it is actually built on.",
    },
    {
      eyebrow: "Traceable to your habits.",
      body: "The same four scores that drive your safety number drive the estimate, each with a plain-language note on what it is measuring.",
    },
  ],
} as const;

export const progress = {
  id: "progress",
  eyebrow: "Progress",
  heading: "Turn safer habits into something worth keeping",
  body: "Streaks, tiers, and challenges give a long-term reason to keep the score up, well after the novelty of a new app wears off.",
  /** `cut` is the share of each screen shown above the card's bottom edge. */
  features: [
    {
      heading: "Streaks and tiers",
      body: "Keep a driving streak alive, see where you rank against other drivers, and climb from Silver toward Gold.",
      image: "/images/iphone/profile.png",
      alt: "Wayborne profile with a 3 day driving streak, a top 38 percent ranking, and a Silver tier",
      cut: 0.7,
    },
    {
      heading: "Challenges, one habit at a time",
      body: "Work through challenges like three trips without touching your phone, or two clean trips in a row.",
      image: "/images/iphone/challenges.png",
      alt: "Wayborne challenges list with Eyes Forward, Ten Up, Back to Back, and Perfect Day",
      cut: 0.7,
    },
  ],
} as const;

export const friends = {
  id: "friends",
  eyebrow: "Friends",
  heading: "Compare scores. Not locations.",
  body: "Add friends by email or invite code and see how your safety score stacks up. Wayborne shares only the summary you choose, never raw trip routes or location points.",
  image: "/images/iphone/friends.png",
  alt: "Wayborne friends leaderboard with five drivers ranked by safety score",
  /** Share of the screen shown above the panel's bottom edge: the end of the leaderboard. */
  cut: 0.825,
  points: [
    {
      eyebrow: "You pick what leaves the app.",
      body: "Share a profile or a score on purpose. Routes and location points stay on your side of the line.",
    },
    {
      eyebrow: "A leaderboard worth winning.",
      body: "Ranking on safety instead of speed makes the competitive part of driving the part that keeps everyone safer.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Ready for the road ahead",
  body: "Wayborne is coming to iOS and Android. Store links go live at launch.",
} as const;

export const footer = {
  tagline: "Coming to iOS and Android.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Safety score", href: null },
        { label: "Trips & maps", href: null },
        { label: "Insurance preview", href: null },
        { label: "Progress & rewards", href: null },
        { label: "Friends", href: null },
      ],
    },
    {
      title: "For",
      links: [
        { label: "New drivers", href: null },
        { label: "Parents", href: null },
        { label: "Driving schools", href: null },
        { label: "Insurers", href: null },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: null },
        { label: "Blog", href: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Get the app", href: null },
        { label: "Help center", href: null },
        { label: "Safety research", href: null },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact us", href: null },
        { label: "X (Twitter)", href: null },
        { label: "Instagram", href: null },
        { label: "Privacy", href: null },
        { label: "Terms", href: null },
      ],
    },
  ] satisfies readonly { title: string; links: readonly MaybeLink[] }[],
} as const;
