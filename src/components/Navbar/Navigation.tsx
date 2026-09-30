import { navigationItems } from "./navigationItems";

export function Navigation() {
  // const pages = ["Inicio", "Sobre mí", "Servicios", "Proyectos", "Experiencia"];

  return (
    <nav className="flex items-center justify-center gap-8">
      {navigationItems.map((item) => (
        <p>{item.label}</p>
      ))}
    </nav>
  );
};
