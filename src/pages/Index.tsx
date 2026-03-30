import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import PillarsSection from "@/components/PillarsSection";
import ProductShowcase3D from "@/components/ProductShowcase3D";
import LossCalculator from "@/components/LossCalculator";
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

const StickyCtaButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (~600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#lead-form"
      className="fixed bottom-6 right-6 z-50 btn-urgent py-3 px-6 text-sm shadow-xl animate-in fade-in slide-in-from-bottom-4"
      style={{
        animation: visible ? "slideUp 0.3s ease-out" : undefined,
        boxShadow: "0 8px 32px rgba(37,137,208,0.35)",
      }}
    >
      Essai Gratuit
      <ArrowRight size={16} />
    </a>
  );
};

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
      <ProductShowcase3D />
      <LossCalculator />
      <IndustrySection />
      <HowItWorksSection />
      <PricingSection />
      <LeadFormSection />
      <Footer />
      <StickyCtaButton />
    </div>
  );
};

export default Index;
