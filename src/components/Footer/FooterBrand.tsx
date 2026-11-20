import type { CommonProps } from "@sharedTypes/Common";

import logo from "@assets/logo.png"

export function FooterBrand({className}: CommonProps) {
  return (
    <div className={`${className}`}>
      <img 
        className="h-10 w-auto"
        src={logo} 
        alt="Iñigo Quintana Delgadillo" 
      />
      <p>
        Desarrollo de soluciones tecnológicas que conectan ingeniería, innovación y necesidades reales de negocio.
      </p>

      <div className="flex gap-4 mt-4">
        <p>Email</p>
        <p>LinkedIn</p>
        <p>Github</p>
      </div>
    </div>
  );
};
