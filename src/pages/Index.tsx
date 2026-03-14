import HeroSection from "@/components/HeroSection";
import LossSection from "@/components/LossSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LeadFormSection from "@/components/LeadFormSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen mesh-gradient relative">
      <HeroSection />
      <LossSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LeadFormSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />

      {/* Sticky Button */}
      <a
        href="#lead-form"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] btn-primary shadow-2xl! shadow-primary/50 text-sm md:text-base border border-white/10 flex items-center gap-2"
        style={{ borderRadius: "9999px" }}
      >
        <span>عمر الفورم دابا</span>
        <span>🚀</span>
      </a>
    </div>
  );
};

export default Index;
