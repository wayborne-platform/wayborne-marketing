/**
 * Single source of truth for all marketing copy and navigation data.
 *
 * Copy and screenshots match what the Wayborne app actually ships today:
 * a per-trip safety score built from speed, smooth driving, braking, and
 * awareness; a trip list with per-trip maps; a usage-based insurance preview;
 * streaks, tiers, challenges and trophies; and a friends leaderboard.
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
    "Wayborne turns everyday driving into a safety score you can watch improve.",
    "and a record that can lower what you pay to insure the car.",
  ],
  image: "/images/app/home.png",
  imageAlt:
    "Wayborne home screen showing a safety score of 84 with sub-scores for speed, smooth driving, braking, and awareness",
} as const;

export const showcase = {
  eyebrow: "Your driving, measured.",
  body: "Wayborne scores every trip across the four behaviors that actually cause crashes: speed, smooth driving, braking, and awareness. An invisible risk becomes a number you can watch improve.",
  metrics: [
    { name: "Speed", body: "Stays near posted limits and avoids very high-speed exposure." },
    { name: "Smooth driving", body: "Accelerates steadily, without repeated hard launches." },
    { name: "Braking", body: "Slows down predictably instead of braking late and hard." },
    { name: "Awareness", body: "Tracks phone handling and other distractions behind the wheel." },
  ],
} as const;

export const trips = {
  id: "trips",
  eyebrow: "Trips",
  heading: "Every trip, scored the moment you park",
  body: "Wayborne detects each drive automatically and grades it on its own. Open any trip to see the route it saved, the safety events it flagged, and exactly what moved the number.",
  features: [
    {
      heading: "A graded history of every drive",
      body: "Distance, duration, safety events, and a score per trip make a rough week obvious at a glance, and a clean one too.",
      image: "/images/app/trips.png",
      alt: "Wayborne trips list showing recent drives with per-trip safety scores",
    },
    {
      heading: "The route behind the score",
      body: "Each trip keeps its own map with the points Wayborne recorded, and calls out clean drives where no safety events were found at all.",
      image: "/images/app/trip-map.png",
      alt: "Wayborne trip detail map for a drive on Foster Ave with no safety events found",
    },
  ],
} as const;

export const insurance = {
  id: "insurance",
  eyebrow: "Insurance preview",
  heading: "See what your driving is worth",
  body: "Wayborne translates your safety score into a usage-based insurance estimate: the discount range, what it saves per month and per year, and which behaviors are carrying it.",
  image: "/images/app/insurance.png",
  alt: "Wayborne insurance preview showing an estimated 13-17% discount based on a safety score of 84",
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
  body: "Streaks, tiers, challenges, and trophies give a long-term reason to keep the score up, well after the novelty of a new app wears off.",
  features: [
    {
      heading: "Streaks, tiers, and challenges",
      body: "Keep a driving streak alive, climb from Platinum toward Sapphire, and work through challenges that reward specific habits.",
      image: "/images/app/profile.png",
      alt: "Wayborne profile screen showing a driving streak, driver percentile, Platinum tier, and challenges",
    },
    {
      heading: "Trophies for the long haul",
      body: "Clean records, phone-free trips, flawless days, and roads explored each track toward their own trophy tier.",
      image: "/images/app/rewards.png",
      alt: "Wayborne rewards screen showing trophy progress for clean record, clean streak, and phone-free trips",
    },
  ],
} as const;

export const friends = {
  id: "friends",
  eyebrow: "Friends",
  heading: "Compare scores. Not locations.",
  body: "Add friends by email or invite code and see how your safety score stacks up. Wayborne shares only the summary you choose, never raw trip routes or location points.",
  image: "/images/app/friends.png",
  alt: "Wayborne friends screen showing a leaderboard and sharing controls",
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
        { label: "Careers", href: null },
        { label: "Blog", href: null },
        { label: "Press", href: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Get the app", href: null },
        { label: "Help center", href: null },
        { label: "Safety research", href: null },
        { label: "Status", href: null },
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
