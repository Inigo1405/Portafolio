import { Eyebrow } from "@components/ui/eyebrow";

type Principle = {
  label: string;
  description: string;
};

const principles: Principle[] = [
  {
    label: "Integridad",
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
      <Eyebrow>NUESTOS VALORES</Eyebrow>
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
