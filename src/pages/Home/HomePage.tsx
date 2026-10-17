import { ContactCTA } from "./sections/ContactCTA";
import { HeroSection } from "./sections/HeroSection";
import { PrinciplesSection } from "./sections/PrinciplesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ServicesSection } from "./sections/ServicesSection";

export default function HomePage(){
  return (
    <div  className="space-y-10 lg:space-y-20">
      <HeroSection/>
      
      <PrinciplesSection />

      <ServicesSection />

      <ProcessSection />

      <ContactCTA />
    </div>
  );
};
