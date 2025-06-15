
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DiscoverSection } from "@/components/DiscoverSection";
import { DemoSection } from "@/components/DemoSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BonusTimer } from "@/components/BonusTimer";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <HeroSection />
      <BonusTimer />
      <FeaturesSection />
      <DiscoverSection />
      <DemoSection />
      <WaitlistForm isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
      <Footer />
    </div>
  );
};

export default Index;
