import { practitionerProof } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PractitionerProof() {
  return (
    <SectionWrapper>
      <p className="font-body font-semibold text-primary uppercase tracking-widest text-xs mb-4">
        {practitionerProof.label}
      </p>
      <h2
        className="font-heading font-bold text-text-main mb-10 max-w-2xl"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {practitionerProof.headline}
      </h2>

      <div className="flex flex-col gap-5 max-w-2xl">
        {practitionerProof.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-body text-text-soft"
            style={{ fontSize: "17px", lineHeight: 1.75 }}
          >
            {p}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
