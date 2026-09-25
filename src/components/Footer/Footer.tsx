import { FooterBrand } from "./FooterBrand";
import { FooterCopyright } from "./FooterCopyright";
import { FooterCTA } from "./FooterCTA";
import { FooterNavGroup } from "./FooterNavGroup";

function Footer() {
  return (
    <footer className="max-w-dvw py-5 px-15 border-t border-t-divider">
      <div className="grid grid-rows-2 items-center">

        <div className="flex gap-8">
          <FooterBrand />
          <FooterNavGroup />
          <FooterCTA />
        </div>
        
        <FooterCopyright />

      </div>
    </footer>
  );
};

export default Footer;
