import { HeroSection } from "./sections/HeroSection";
import { ContactCTA } from "./sections/ContactCTA";
import { PrinciplesSection } from "./sections/PrinciplesSection";

export default function HomePage(){
  return (
    <div>
      <HeroSection />
      
      <PrinciplesSection />

      <ContactCTA />
    </div>
  );
};
