import Navigation from "@/components/Navigation";
import ShaderHero from "@/components/ShaderHero";
import { AnimatedHero } from "@/components/ui/animated-hero";
import LogoCloudSection from "@/components/LogoCloudSection";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Metrics from "@/components/Metrics";
import ROICalculator from "@/components/ROICalculator";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashCursor />
      <Navigation />
      <ShaderHero />
      <div className="relative -mt-32 bg-gradient-to-b from-transparent via-background to-background pt-32">
        <AnimatedHero />
      </div>
      <LogoCloudSection />
      <Services />
      <SuccessStories />
      <Metrics />
      <ROICalculator />
      <TestimonialsAnimated />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
