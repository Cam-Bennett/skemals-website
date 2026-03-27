import { whatItsNot } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function WhatItsNot() {
  return (
    <SectionWrapper bgAlt>
      <p className="font-body font-semibold text-primary uppercase tracking-widest text-xs mb-4">
        {whatItsNot.label}
      </p>
      <h2
        className="font-heading font-bold text-text-main mb-14"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
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
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              className="font-heading font-semibold text-text-main"
              style={{ fontSize: "16px" }}
            >
              {row.left}
            </p>
            <p
              className="font-body text-text-soft"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              {row.right}
            </p>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
      </div>
    </SectionWrapper>
  );
}
