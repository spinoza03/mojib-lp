import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import PillarsSection from "@/components/PillarsSection";
import IndustrySection from "@/components/IndustrySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const Index = () => {
  useEffect(() => {
    window.fbq?.("track", "ViewContent", {
      content_name: "Mojib Landing Page",
      content_category: "SaaS / AI Assistant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <StatsBar />
      <PillarsSection />
      <IndustrySection />
      <HowItWorksSection />
      <PricingSection />
      <LeadFormSection />
      <Footer />
    </div>
  );
};

export default Index;
