export function Navigation() {
  const pages = ["Inicio", "Sobre mí", "Servicios", "Proyectos", "Experiencia"];

  return (
    <div className="flex items-center justify-center gap-8">
      {pages.map((page) => (
        <p>{page}</p>
      ))}
    </div>
  );
};
