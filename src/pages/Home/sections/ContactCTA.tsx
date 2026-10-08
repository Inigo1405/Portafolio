import { Eyebrow } from "@components/ui/eyebrow";

export function ContactCTA () {
  return(
    <section className="flex flex-col items-center justify-center text-center">
      <Eyebrow right>CONTACTO</Eyebrow>
      <p>¿Tienes un proceso que quieres ordenar?</p>
      <button
        className="border border-surface bg-surface text-background px-6"
      >
        Hablemos de tu proyecto
      </button>
    </section>
  );
};
