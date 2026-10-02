import type { CommonProps } from "@sharedTypes/Common";

import { FooterBrand } from "./FooterBrand";
import { FooterCopyright } from "./FooterCopyright";
import { FooterCTA } from "./FooterCTA";
import { FooterNavGroup } from "./FooterNavGroup";


function Footer({className}: CommonProps) {
  return (
    <footer className={`${className} border-t border-divider py-5 px-6 lg:px-15`}>
      <div className="flex flex-col gap-10">

        <div className="flex justify-between">
          <FooterBrand className="max-w-xs"/>
          
          <div className="w-0.5 rounded bg-divider"/>

          <FooterNavGroup />
          
          <div className="w-0.5 rounded bg-divider"/>
          
          <FooterCTA />
        </div>
        
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
