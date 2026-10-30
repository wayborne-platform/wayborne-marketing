import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ScoreSection } from "@/components/sections/ScoreSection";
import { TripsSection } from "@/components/sections/TripsSection";
import { InsuranceSection } from "@/components/sections/InsuranceSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ScoreSection />
        <TripsSection />
        <InsuranceSection />
        <CommunitySection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
