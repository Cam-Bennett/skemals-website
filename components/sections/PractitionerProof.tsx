import { practitionerProof } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PractitionerProof() {
  return (
    <SectionWrapper variant="light">
      <p
        className="font-sans font-semibold uppercase tracking-widest text-xs mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {practitionerProof.label}
      </p>
      <h2
        className="font-serif font-semibold mb-10 max-w-2xl"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#1A1A1A",
        }}
      >
        {practitionerProof.headline}
      </h2>

      <div className="flex flex-col gap-5 max-w-2xl">
        {practitionerProof.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-sans"
            style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
          >
            {p}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
