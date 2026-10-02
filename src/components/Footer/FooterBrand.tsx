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
        Creo soluciones tecnológicas que combinan código, datos e inteligencia para transformar negocios y mejorar la vida de las personas.
      </p>
    </div>
  );
};
