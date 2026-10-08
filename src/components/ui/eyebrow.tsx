import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  as?: "p" | "span" | "h2" | "h3";
  className?: string;
  left?: boolean
  right?: boolean
};

export function Eyebrow ({children, as: Tag="p", className="", left=true, right=false}: EyebrowProps){
  const DecorativeLine = () => <hr className="w-8 border-0 border-t border-surface" />;

  return (
    <div className={`${className} flex items-center gap-3`}>
      {left && <DecorativeLine />}
      <Tag className="text-sm font-medium tracking-widest text-surface">
        {children}
      </Tag>
      {right && <DecorativeLine />}
    </div>
  );
};