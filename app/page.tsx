import { friends, insurance, progress, trips } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { DuoFeature } from "@/components/sections/DuoFeature";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showcase />
        <DuoFeature
          id={trips.id}
          heading={trips.heading}
          body={trips.body}
          features={trips.features}
        />
        <SplitFeature
          id={insurance.id}
          heading={insurance.heading}
          body={insurance.body}
          image={insurance.image}
          alt={insurance.alt}
          points={insurance.points}
          imageSide="left"
        />
        <DuoFeature
          id={progress.id}
          heading={progress.heading}
          body={progress.body}
          features={progress.features}
        />
        <SplitFeature
          id={friends.id}
          heading={friends.heading}
          body={friends.body}
          image={friends.image}
          alt={friends.alt}
          points={friends.points}
          imageSide="right"
        />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
