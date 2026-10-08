import { Eyebrow } from "@components/ui/eyebrow";

export function HeroSection () {
  return(
    <section>
      <Eyebrow>INGENIERÍA EN SISTEMAS COMPUTACIONALES · PUEBLA, MX</Eyebrow>
      <h1>Soluciones digitales a la medida de tu negocio.</h1>
      <p>Autimatización, plataformas y herramientas en la nube, diseñadas para tu operación y acompañadas hasta que funcionen.</p>

      <div className="flex space-x-5">
        <button 
          className="border-surface border bg-surface text-background"
        >
          Ver proyectos
        </button>

        <button
          className="border-surface border"
        >
          Hablemos
        </button>
      </div>
    </section>
  );
};
