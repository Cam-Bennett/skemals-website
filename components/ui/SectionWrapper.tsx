import { type ReactNode } from "react";
import GrainOverlay from "./GrainOverlay";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgAlt?: boolean;
  style?: React.CSSProperties;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  bgAlt = false,
  style,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 py-24 ${
        bgAlt ? "bg-bg-alt" : "bg-bg"
      } ${className}`}
      style={style}
    >
      <GrainOverlay />
      <div className="relative z-10 max-w-site mx-auto">{children}</div>
    </section>
  );
}
