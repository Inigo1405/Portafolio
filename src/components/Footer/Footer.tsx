import type { CommonProps } from "@sharedTypes/Common";

import { FooterBrand } from "./FooterBrand";
import { FooterCopyright } from "./FooterCopyright";
import { FooterCTA } from "./FooterCTA";
import { FooterNavGroup } from "./FooterNavGroup";


function Footer({className}: CommonProps) {
  return (
    <footer className={`${className} border-t border-divider px-6 py-5 lg:px-15`}>
      <div className="flex flex-col gap-6">

        <div className="flex justify-between border-b border-divider pb-4">
          <FooterBrand className="max-w-xs"/>
          
          <div className="w-0.5 rounded bg-divider"/>

          <FooterNavGroup />
          
          <div className="w-0.5 rounded bg-divider hidden lg:block"/>
          
          <FooterCTA />
        </div>
        
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
