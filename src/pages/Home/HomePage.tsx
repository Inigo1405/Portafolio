import { ContactCTA } from "./sections/ContactCTA";
import { HeroSection } from "./sections/HeroSection";
import { ProyectsSection } from "./sections/PrinciplesSection";
import { ProcessSection } from "./sections/MethodologySection";
import { ServicesSection } from "./sections/ServicesSection";
import { AboutSection } from "./sections/AboutSection";

export default function HomePage(){
  return (
    <div  className="space-y-10 lg:space-y-20">
      <HeroSection/>
      
      {/* <ServicesSection /> */}

      <ServicesSection />

      {/* <ServicesSection /> */}

      <ProyectsSection />

      <ProcessSection />

      <AboutSection />

      <ContactCTA />
    </div>
  );
};
