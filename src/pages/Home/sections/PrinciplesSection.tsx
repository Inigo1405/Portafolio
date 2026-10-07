type Principle = {
  label: string;
  description: string;
};

const principles: Principle[] = [
  {
    label: "Integrdidad",
    description: "",
  },
  {
    label: "Excelencia técnica",
    description: "",
  },
  {
    label: "Excelencia técnica",
    description: "",
  },
  {
    label: "Innovación",
    description: "",
  },
  {
    label: "Compromiso",
    description: "",
  },
];

export function PrinciplesSection() {
  return (
    <section>
      <h2>Nuestos Valores</h2>
      <div className="flex justify-between">
        {principles.map((item) => (
          <div key={item.label}>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
