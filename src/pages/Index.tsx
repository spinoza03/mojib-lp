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
    <div className="min-h-screen mesh-gradient">
      <HeroSection />
      <LossSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <LeadFormSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
