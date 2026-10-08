import { HeroSection } from "./sections/HeroSection";
import { ContactCTA } from "./sections/ContactCTA";
import { PrinciplesSection } from "./sections/PrinciplesSection";

export default function HomePage(){
  return (
    <div  className="space-y-10 lg:space-y-20">
      <HeroSection/>
      
      <PrinciplesSection />

      <ContactCTA />
    </div>
  );
};
