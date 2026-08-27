import { Brand } from "./Brand";
import { Navigation } from "./Navigation"
import { CTAButton } from "./CTAButton"

function Navbar() {
  return (
    <div className="max-w-dvw py-5 px-15 border-b-accent">
      <div className="grid grid-cols-3 items-center gap-10">
        <Brand />
        <Navigation />
        <CTAButton />
      </div>
    </div>
  );
};

export default Navbar;
