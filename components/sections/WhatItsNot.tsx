import { whatItsNot } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function WhatItsNot() {
  return (
    <SectionWrapper variant="navy2">
      <p
        className="font-sans font-semibold uppercase tracking-widest text-xs mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {whatItsNot.label}
      </p>
      <h2
        className="font-serif font-semibold mb-14"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#F8F6F0",
        }}
      >
        {whatItsNot.headline}
      </h2>

      <div className="flex flex-col">
        {whatItsNot.rows.map((row, i) => (
          <div
            key={i}
            className="grid gap-6 py-6"
            style={{
              gridTemplateColumns: "clamp(160px, 25%, 220px) 1fr",
              borderTop: "1px solid rgba(200,155,60,0.12)",
            }}
          >
            <p
              className="font-serif font-semibold"
              style={{ fontSize: "16px", color: "#F8F6F0" }}
            >
              {row.left}
            </p>
            <p
              className="font-sans"
              style={{ fontSize: "16px", lineHeight: 1.7, color: "#B0B8C4" }}
            >
              {row.right}
            </p>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(200,155,60,0.12)" }} />
      </div>
    </SectionWrapper>
  );
}
