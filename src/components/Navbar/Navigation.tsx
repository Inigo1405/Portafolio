export function Navigation() {
  const pages = ["Inicio", "Sobre mí", "Servicios", "Proyectos", "Experiencia"];

  return (
    <div className="grid grid-cols-5 gap-4">
      {pages.map((page) => (
        <p>{page}</p>
      ))}
    </div>
  );
};
