import { contactCTA } from "./navigationItems";

export function CTAButton() {
  return (
    <button
      className="border border-surface text-surface"
      onClick={() => console.log("Click")}
    >
      {contactCTA.label} →
    </button>
  );
};
