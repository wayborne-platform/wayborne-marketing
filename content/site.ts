/**
 * Single source of truth for all marketing copy and navigation data.
 * Copy is written to match what the Wayborne app actually does today:
 * real-time, per-trip safety scoring from the car's OBD-II port and the
 * phone's own sensors, an event map, family sharing, and in-the-moment alerts.
 */

export const site = {
  name: "Wayborne",
  tagline: "Safe driving pays off",
  description:
    "Wayborne turns every drive into a real-time safety score — reading your car and your phone to build safer habits and a record that can lower your insurance.",
  url: "https://wayborne.app",
  appStoreUrl: "https://apps.apple.com/app/wayborne",
  playStoreUrl: "https://play.google.com/store/apps/details?id=app.wayborne",
} as const;

export const nav = {
  links: [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how-it-works" },
    { label: "For families", href: "#families" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: { label: "Get the app", href: site.appStoreUrl },
  login: { label: "Log in", href: "#" },
} as const;

export const hero = {
  eyebrow: "Introducing Wayborne",
  // Split into words for the staggered blur-up reveal.
  headline: "Every drive, scored in real time",
  subhead: [
    "Wayborne turns everyday driving into a safety score you can watch improve.",
    "Available for iOS and Android.",
  ],
  availability: "Available for iOS and Android.",
} as const;

export const showcase = {
  eyebrow: "Your driving, measured.",
  body: "Wayborne scores every trip in real time across the behaviors that actually cause crashes — speed, acceleration, braking, and awareness. An invisible risk becomes a number you can watch improve.",
  cta: "See how it works",
  image: "/images/showcase.webp",
} as const;

export const dualFeatures = [
  {
    eyebrow: "Real-time scoring.",
    body: "Every trip is scored the moment you park, so the feedback lands while the habit is still fresh — not days later.",
    image: "/images/realtime.avif",
    width: 584,
    height: 438,
  },
  {
    eyebrow: "Straight from your car.",
    body: "Wayborne reads live speed, RPM, and throttle from your car's OBD-II port, and fills in the rest with your phone's GPS and motion sensors.",
    image: "/images/sensor.avif",
    width: 408,
    height: 438,
  },
] as const;

export const dashboard = {
  heading: "Stay on top of every trip that shapes your score",
  body: "Your home screen keeps your safety score and recent trips front and center. Tap any trip to see the breakdown, and watch the number move as your habits change.",
  image: "/images/dashboard.jpg",
  subFeatures: [
    {
      heading: "See exactly what cost you points…",
      body: "Every trip breaks down into speed, acceleration, braking, and awareness — so feedback is specific and actionable, never vague.",
      image: "/images/breakdown.jpg",
    },
    {
      heading: "…and replay the drive, moment by moment",
      body: "Speed, RPM, and throttle are charted across the whole trip, so you can see exactly where things got risky.",
      image: "/images/trends.jpg",
    },
  ],
} as const;

export const coaching = {
  heading: "Coaching that follows you. No matter where you drive.",
  body: "Wayborne detects every trip automatically, maps where the risky moments happen, and shares the results with the people helping you improve.",
  image: "/images/coaching.jpg",
  subFeatures: [
    {
      heading: "Scores every trip automatically",
      body: "Wayborne starts and stops with your drive — no buttons, no setup. Get in and go, and the score is waiting when you park.",
      image: "/images/auto-score.jpg",
    },
    {
      heading: "Maps the roads where risk spikes",
      body: "See exactly where speeding and hard braking happen, so the dangerous patterns on your regular routes become obvious.",
      image: "/images/risk-map.jpg",
    },
    {
      heading: "Shares progress with parents & instructors",
      body: "Switch between Individual and Family to give a parent or driving instructor a shared view of real trips — even the ones they were never in the car for.",
      image: "/images/share.jpg",
    },
    {
      heading: "Explains every flagged moment",
      body: "Tap any event on the map to see what happened — how far over the limit, how hard the acceleration — so coaching is grounded in facts, not guesses.",
      image: "/images/insurer.jpg",
    },
  ],
} as const;

export const notifications = {
  heading: "Always coaching. Never nagging.",
  body: "Wayborne speaks up in the moment that matters — and stays quiet the rest of the time.",
  image: "/images/alerts.jpg",
  points: [
    {
      eyebrow: "Real-time alerts.",
      body: "Get a heads-up the instant a habit needs attention, so you can correct it while it still counts toward your score.",
    },
    {
      eyebrow: "On your terms.",
      body: "Tune how Wayborne coaches — set your own speeding threshold, or decide whether phone use counts against your score or stays awareness-only.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Ready for the road ahead",
  body: "Download Wayborne, start scoring your trips today, and turn safer driving into a record that pays off with lower insurance.",
} as const;

export const footer = {
  columns: [
    {
      title: "Product",
      links: [
        { label: "Safety score", href: "#" },
        { label: "Trip breakdown", href: "#" },
        { label: "Event map", href: "#" },
        { label: "Insurance discounts", href: "#" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      title: "For",
      links: [
        { label: "New drivers", href: "#" },
        { label: "Parents", href: "#" },
        { label: "Driving schools", href: "#" },
        { label: "Insurers", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Download", href: "#" },
        { label: "Help center", href: "#" },
        { label: "Safety research", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact us", href: "#" },
        { label: "X (Twitter)", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ],
} as const;
