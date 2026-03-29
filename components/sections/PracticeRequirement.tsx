import { practiceRequirement } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PracticeRequirement() {
  return (
    <SectionWrapper bgAlt>
      <div className="max-w-2xl">
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {practiceRequirement.eyebrow}
        </p>

        <div className="flex flex-col gap-5">
          {practiceRequirement.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-body text-text-soft"
              style={{ fontSize: "17px", lineHeight: 1.75 }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Closing lines — elevated treatment, visually separated */}
        <div className="flex flex-col gap-3" style={{ marginTop: "32px" }}>
          {practiceRequirement.closingLines.map((line, i) => (
            <p
              key={i}
              className="font-body font-semibold text-text-main"
              style={{ fontSize: "17px", lineHeight: 1.6 }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
