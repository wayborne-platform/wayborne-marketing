/**
 * Single source of truth for all marketing copy and navigation data.
 * Keeping content separate from presentation makes the sections trivial to
 * re-skin once Wayborne's own product screenshots are ready.
 */

export const site = {
  name: "Wayborne",
  tagline: "Safe driving pays off",
  description:
    "Wayborne is a real-time driving coach that turns everyday trips into a verified safety score — building safer habits and lower insurance.",
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
  headline: "The portable companion to the Wayborne system",
  subhead: ["Safer driving feedback in compact form.", "Available for iOS and Android."],
  availability: "Available for iOS and Android.",
} as const;

export const showcase = {
  eyebrow: "Built for the road ahead.",
  body: "Wayborne scores every trip in real time across the four behaviors that actually cause crashes — speed, braking, aggression, and steering. An invisible risk becomes a number you can watch improve.",
  cta: "See how it works",
  image: "/images/showcase.webp",
} as const;

export const dualFeatures = [
  {
    eyebrow: "Real-time scoring.",
    body: "Every trip is scored as you drive, so the feedback lands while the habit is still fresh — not days later.",
    image: "/images/realtime.avif",
    width: 584,
    height: 438,
  },
  {
    eyebrow: "Sensor-native.",
    body: "Wayborne reads speed, GPS, and motion data natively for accurate, battery-friendly tracking on any phone.",
    image: "/images/sensor.avif",
    width: 408,
    height: 438,
  },
] as const;

export const dashboard = {
  heading: "Stay on top of every trip that shapes your score",
  body: "Your dashboard keeps you informed about the drives and habits that need attention. Tap to see the breakdown, swipe to dismiss, revisit any trip later.",
  image: "/images/dashboard.jpg",
  subFeatures: [
    {
      heading: "See exactly what cost you points…",
      body: "Every trip breaks down into speed, braking, aggression, and steering — so feedback is specific and actionable, never abstract.",
      image: "/images/breakdown.jpg",
    },
    {
      heading: "…and watch the risky habits fade",
      body: "Track patterns trip over trip as the rough edges smooth out and your safety score climbs.",
      image: "/images/trends.jpg",
    },
  ],
} as const;

export const coaching = {
  heading: "Coaching that follows you. No matter where you drive.",
  body: "Wayborne maps risky spots and coaches in the moment, so every drive — the commute, the road trip, the quick errand — builds a safer habit.",
  image: "/images/coaching.jpg",
  subFeatures: [
    {
      heading: "Scores every trip automatically",
      body: "Wayborne starts and stops with your drive. No buttons, no setup — just get in and go.",
      image: "/images/auto-score.jpg",
    },
    {
      heading: "Maps the roads where risk spikes",
      body: "See exactly where hard braking and speeding happen, so dangerous patterns become obvious.",
      image: "/images/risk-map.jpg",
    },
    {
      heading: "Shares progress with parents & instructors",
      body: "A shared dashboard keeps coaches grounded in real data — from trips they were never in the car for.",
      image: "/images/share.jpg",
    },
    {
      heading: "Carries your score to any insurer",
      body: "Turn a verified safety record into a real discount — portable to any insurer, never locked to one.",
      image: "/images/insurer.jpg",
    },
  ],
} as const;

export const notifications = {
  heading: "Always coaching. Never nagging.",
  body: "Get feedback in real time about the moments that matter (but not all the time).",
  image: "/images/alerts.jpg",
  points: [
    {
      eyebrow: "Real-time alerts.",
      body: "Know the instant a habit needs attention, and correct it while it still counts toward your score.",
    },
    {
      eyebrow: "On your schedule.",
      body: "Tune Wayborne to coach when you want the nudge, and stay quiet when you don't.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Ready for the road ahead",
  body: "Download Wayborne and start turning safer driving into real savings today.",
} as const;

export const footer = {
  columns: [
    {
      title: "Product",
      links: [
        { label: "Safety score", href: "#" },
        { label: "Trip breakdown", href: "#" },
        { label: "Risk map", href: "#" },
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
