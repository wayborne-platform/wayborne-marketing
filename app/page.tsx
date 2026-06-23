import { coaching, dashboard } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { DualFeature } from "@/components/sections/DualFeature";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Notifications } from "@/components/sections/Notifications";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <DualFeature />
        <FeatureSection
          id="how-it-works"
          heading={dashboard.heading}
          body={dashboard.body}
          image={dashboard.image}
          subFeatures={dashboard.subFeatures}
        />
        <FeatureSection
          id="families"
          heading={coaching.heading}
          body={coaching.body}
          image={coaching.image}
          subFeatures={coaching.subFeatures}
        />
        <Notifications />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
