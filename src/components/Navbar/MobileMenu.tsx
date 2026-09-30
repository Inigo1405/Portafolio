import { useState } from "react";

import { navigationItems } from "./navigationItems";

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button 
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menú
      </button>

      {isMenuOpen && (
        <nav className="absolute end-5 space-y-2">
          {navigationItems.map((item) => (
            <div>
              {item.label}
            </div>
          ))}
        </nav>
      )}
    </>
  );
};
