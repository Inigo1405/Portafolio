import { Brand } from "./Brand";
import { Navigation } from "./Navigation"
import { CTAButton } from "./NavCTA"

function Navbar() {
  return (
    <div className="max-w-dvw py-5 px-15 border-b border-b-divider">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-10">
        <Brand />
        <Navigation />
        <CTAButton />
      </div>
    </div>
  );
};

export default Navbar;
