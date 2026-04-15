import { practiceRequirement } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PracticeRequirement() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-2xl">
        <p
          className="font-sans font-semibold uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          {practiceRequirement.eyebrow}
        </p>

        <div className="flex flex-col gap-5">
          {practiceRequirement.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans"
              style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3" style={{ marginTop: "32px" }}>
          {practiceRequirement.closingLines.map((line, i) => (
            <p
              key={i}
              className="font-sans font-semibold"
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                color: i === 0 ? "#6B7280" : "#1A1A1A",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
