/**
 * Single source of truth for all marketing copy and navigation data.
 *
 * Copy, numbers, and screenshots match what the Wayborne app ships today (the
 * captures in public/images/screens come from the app's design capture rig): a
 * per-trip safety score built from speed, smooth driving, braking, and
 * awareness; a trip list with per-trip detail; a usage-based insurance
 * estimate; streaks and challenges; and a friends leaderboard. Numbers shown
 * in site-drawn UI (the score panel, floating cards) are the same sample
 * driver the screenshots show, so the two never disagree.
 *
 * Link policy: anything that does not have a real destination yet is modeled
 * as `href: null` so the UI can render it disabled instead of shipping a dead
 * link.
 */

export type MaybeLink = {
  label: string;
  /** `null` means "no destination yet": rendered disabled, never clickable. */
  href: string | null;
};

export const site = {
  name: "Wayborne",
  tagline: "Every drive, scored",
  description:
    "Wayborne scores every drive on speed, smooth driving, braking, and awareness, shows you what to fix, and turns a clean record into an insurance estimate.",
  url: "https://wayborne.app",
} as const;

/**
 * Store listings are not live yet, so both are disabled. Flip `href` to the
 * real listing URL and the badges become links automatically.
 */
export const stores = [
  { id: "ios", label: "Download on the", store: "App Store", href: null as string | null },
  { id: "android", label: "Get it on", store: "Google Play", href: null as string | null },
] as const;

/**
 * In-page anchors. Every one is a real destination. The header shows `links`
 * and the launch `status`; the hero button goes to `cta`; the footer lists
 * `cta` and `links`.
 */
export const nav = {
  links: [
    { label: "Safety score", href: "#score" },
    { label: "Trips", href: "#trips" },
    { label: "Insurance", href: "#insurance" },
    { label: "Friends", href: "#friends" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "How it works", href: "#how-it-works" },
  status: "Launching soon on iOS & Android",
} as const;

/** The sample driver every screenshot and site-drawn panel shows. */
export const sample = {
  score: 79,
  band: "Fair",
  insight: { lead: "Smooth driving is your weakest area at 39.", tip: "Roll into the throttle after stops." },
  trip: {
    title: "Home to Climbing gym",
    when: "Yesterday, 6:04 PM",
    score: 95,
    band: "Excellent",
    duration: "10 min",
    distance: "5.9 mi",
  },
  discount: "9–13%",
  /** The insurance screen's example: a $160/mo premium at a score of 79. */
  savings: { monthly: "$14–21", premium: "$160/mo" },
} as const;

export const hero = {
  headline: "Every drive, scored.",
  subhead:
    "Wayborne grades every trip, shows the one habit to fix, and estimates your insurance savings.",
  primary: { label: "See how it works", href: "#how-it-works" },
  requirement: "Requires a WiCAN Bluetooth OBD-II adapter.",
  /** The app screens are a sample driver, not a real account. */
  sampleNote: "App screens show a sample driver.",
  image: "/images/screens/home.png",
  imageAlt:
    "Wayborne home screen showing a safety score of 79, rated Fair, with speed 100, smooth driving 39, braking 57, awareness 100, and three recent trips",
} as const;

export const howItWorks = {
  id: "how-it-works",
  heading: "Plug in once. Then just drive.",
  steps: [
    {
      heading: "Plug in the adapter",
      body: "A WiCAN Bluetooth OBD-II adapter goes in the port under your dashboard. The app pairs it once.",
    },
    {
      heading: "Drive like you normally do",
      body: "Trips start when your car connects, even with the app closed, and record braking and acceleration events.",
    },
    {
      heading: "Get your score",
      body: "After each drive, see the trip's score and the one habit worth working on.",
    },
  ],
} as const;

export const score = {
  id: "score",
  eyebrow: "Safety score",
  heading: "Four habits. One number you can move.",
  body: "Each trip is graded on speed, smooth driving, braking, and awareness. Wayborne points at the habit holding your score back.",
  /**
   * `icon` keys the glyph the app uses for that sub-score (see ui/icons.tsx);
   * `score` is the sample driver's habit score, as on the Home screenshot.
   */
  habits: [
    { icon: "speed", name: "Speed", score: 100, body: "Time near the posted limit, and how much you spend well over it." },
    { icon: "smooth", name: "Smooth driving", score: 39, body: "Steady acceleration instead of repeated hard launches." },
    { icon: "braking", name: "Braking", score: 57, body: "Slowing early and predictably instead of late and hard." },
    { icon: "awareness", name: "Awareness", score: 100, body: "Phone handling and other distractions while moving." },
  ],
} as const;

export const trips = {
  id: "trips",
  eyebrow: "Trips",
  heading: "Graded the moment you park.",
  body: "Each drive lands in your trip list with its own score. Open one to see what it was built from, and where each event happened.",
  /** Each screen pairs with the caption under it. */
  screens: [
    {
      tab: "Trip history",
      src: "/images/screens/trips.png",
      alt: "Wayborne trips list with seven recent drives, each with its own score",
      heading: "A score for every trip",
      body: "Each drive keeps its own score, so one rough commute doesn't vanish into a weekly average.",
    },
    {
      tab: "Breakdown",
      src: "/images/screens/trip.png",
      alt: "Wayborne trip detail for Home to Climbing gym, scored 95 Excellent, with a score breakdown by habit",
      heading: "What it was built from",
      body: "Tap any habit to see the events behind it, like a hard brake or time over the limit.",
    },
    {
      tab: "Route",
      src: "/images/screens/map.png",
      alt: "Wayborne trip map for Home to Climbing gym, with the route and each driving event pinned along it",
      heading: "Where it happened",
      body: "Each event is pinned to the route, so you know which corner or on-ramp to work on.",
    },
  ],
} as const;

export const insurance = {
  id: "insurance",
  eyebrow: "Insurance",
  heading: "See what your driving is worth.",
  body: "Your score becomes a usage-based insurance estimate, with the habits that move it.",
  image: "/images/screens/insurance-light.png",
  alt: "Wayborne insurance estimate in light mode showing a 9 to 13 percent discount at a safety score of 79, about $14 to $21 a month",
  points: [
    {
      heading: "A range, not a promise",
      body: "Every estimate is labeled as one and shows how many trips it's based on.",
    },
    {
      heading: "Traceable to your habits",
      body: "The same four scores drive the estimate, so you know what to work on to move it.",
    },
  ],
} as const;

export const community = {
  id: "friends",
  eyebrow: "Friends",
  heading: "Compare scores. Never locations.",
  body: "Keep a daily streak, climb tiers, and rank against friends on safety. They see your score. Your routes stay with you.",
  panels: [
    {
      tab: "Streaks",
      heading: "Streaks and tiers",
      body: "A daily streak, your rank against other Wayborne drivers, and a tier that climbs with every clean trip.",
      image: "/images/screens/profile.png",
      alt: "Wayborne profile with a 3 day driving streak, a top 38 percent ranking, and a Silver tier",
    },
    {
      tab: "Friends",
      heading: "A leaderboard for safe driving",
      body: "Add friends by email and see who drove the safest this week.",
      image: "/images/screens/friends.png",
      alt: "Wayborne friends leaderboard with five drivers ranked by safety score",
    },
  ],
} as const;

/** Answers come from how the app works today; keep them in sync with it. */
export const faq = {
  id: "faq",
  heading: "Before you ask.",
  /** The three promises worth stating once, beside the questions. */
  promises: ["Records with the app closed.", "Passenger trips never count against you.", "iOS and Android at launch."],
  items: [
    {
      q: "Do I need any hardware?",
      a: "Yes, a WiCAN adapter: a small Bluetooth OBD-II adapter that plugs into your car's diagnostic port, usually under the steering wheel. The app walks you through pairing it and checks which readings your car supports.",
    },
    {
      q: "Is the insurance estimate a quote?",
      a: "No. It estimates what a usage-based policy could take off your premium, based on your score and how many trips it has seen. The app labels it as an estimate everywhere it appears.",
    },
    {
      q: "Who can see my trips?",
      a: "You can. Friends see the score you choose to share. Your routes and location points are never part of what they see.",
    },
    {
      q: "What if I wasn't the one driving?",
      a: "Mark the trip as a passenger trip. It stays in your history but does not count toward your driving score.",
    },
    {
      q: "Is it good for new drivers?",
      a: "Each trip ends with the one habit to work on next, so practice has a concrete target instead of a vague grade.",
    },
    {
      q: "When can I get it?",
      a: "Wayborne is coming to iOS and Android. The App Store and Google Play links will appear on this page the day it launches.",
    },
  ],
} as const;

export const finalCta = {
  status: "Launching soon",
  heading: "Your first score takes one drive.",
  body: "Coming to iOS and Android. Plug in a WiCAN adapter at launch and your first trip scores itself.",
  link: { label: "Check the adapter requirements", href: "#faq" },
} as const;

export const footer = {
  blurb: "Every drive, scored.",
} as const;
