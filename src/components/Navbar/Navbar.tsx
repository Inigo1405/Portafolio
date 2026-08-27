import { Brand } from "./Brand";
import { Navigation } from "./Navigation"

function Navbar() {
  return (
    <div className="max-h-10 py-7 px-15">
      <Brand />
      <Navigation />
    </div>
  );
};

export default Navbar;
