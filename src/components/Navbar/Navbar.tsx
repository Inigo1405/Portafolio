import { useState } from "react";

import { Brand } from "./Brand";
import { Navigation } from "./Navigation"
import { CTAButton } from "./NavCTA"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="border-b border-divider py-5 px-6 lg:px-15">
      <div className="flex items-center justify-between">
        <Brand />

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="hidden md:block">
          <CTAButton />
        </div>


        <button 
          type="button"
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menú
        </button>

        {isMenuOpen && (
          <div className="mt-5 md:hidden">
            <p>HOLA!!!</p>
          </div>
        )}


      </div>
    </nav>
  );
};

export default Navbar;
