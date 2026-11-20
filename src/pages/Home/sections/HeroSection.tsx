import { Eyebrow } from "@components/ui/eyebrow";

export function HeroSection () {
  return(
    <section className="max-w-2/3">
      <Eyebrow>INGENIERÍA EN SISTEMAS COMPUTACIONALES · PUEBLA, MX</Eyebrow>
      <h1 className="my-6 text-5xl font-bold">
        Soluciones digitales a la medida de tu negocio.
      </h1>
      <p className="font-semibold">
        Automatización, plataformas y herramientas en la nube, diseñadas para tu operación y acompañadas hasta que funcionen.
      </p>

      <div className="flex space-x-5 mt-4">
        <button 
          className="border-surface border bg-surface text-background"
        >
          Iniciar
        </button>

        <button
          className="border-surface border"
        >
          Explorar más
        </button>
      </div>
    </section>
  );
};
