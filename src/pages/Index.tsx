import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Metrics from "@/components/Metrics";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashCursor />
      <Navigation />
      <Hero />
      <Services />
      <SuccessStories />
      <Metrics />
      <ROICalculator />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
