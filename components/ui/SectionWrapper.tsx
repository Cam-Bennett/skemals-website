import { type ReactNode } from "react";

type Variant = "dark" | "navy2" | "light" | "white";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: Variant;
  style?: React.CSSProperties;
}

const bgMap: Record<Variant, string> = {
  dark: "#0F1B2D",
  navy2: "#1B2838",
  light: "#F8F6F0",
  white: "#FFFFFF",
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  variant = "light",
  style,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-6 py-24 ${className}`}
      style={{ background: bgMap[variant], ...style }}
    >
      <div className="max-w-site mx-auto">{children}</div>
    </section>
  );
}
