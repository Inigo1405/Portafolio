import { FooterBrand } from "./FooterBrand";
import { FooterCopyright } from "./FooterCopyright";
import { FooterCTA } from "./FooterCTA";
import { FooterNavGroup } from "./FooterNavGroup";

function Footer() {
  return (
    <footer className="border-t border-divider py-5 px-6 lg:px-15 ">
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
