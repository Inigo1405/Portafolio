type Principle = {
  label: string;
  description: string;
};

const principles: Principle[] = [
  {
    label: "Entender antes de proponer",
    description: "Primero se estudia cómo opera tu negocio; después se diseña.",
  },
];

export function PrinciplesSection() {
  return (
    <section>
      {principles.map(({ label, description }) => (
        <article key={label}>
          <h3>{label}</h3>
          <p>{description}</p>
        </article>
      ))}
    </section>
  );
}
