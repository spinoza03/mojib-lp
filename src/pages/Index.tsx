import HeroSection from "@/components/HeroSection";
import LossSection from "@/components/LossSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen mesh-gradient">
      <HeroSection />
      <LossSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LeadFormSection />
      <Footer />
    </div>
  );
};

export default Index;
