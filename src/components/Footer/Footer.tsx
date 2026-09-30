import { FooterBrand } from "./FooterBrand";
import { FooterCopyright } from "./FooterCopyright";
import { FooterCTA } from "./FooterCTA";
import { FooterNavGroup } from "./FooterNavGroup";

function Footer() {
  return (
    <div className="border-t border-divider py-5 px-6 lg:px-15">
      <div className="flex flex-col gap-10">

        <div className="flex justify-between gap-8">
          <FooterBrand />
          <FooterNavGroup />
          <FooterCTA />
        </div>
        
        <div className="">
          <FooterCopyright />
        </div>

      </div>
    </div>
  );
};

export default Footer;
