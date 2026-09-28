import { Brand } from "./Brand";
import { Navigation } from "./Navigation"
import { CTAButton } from "./NavCTA"

function Navbar() {
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

        <button className="block md:hidden">
          Menú
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
