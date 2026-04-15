import { priorAttempts } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PriorAttempts() {
  return (
    <SectionWrapper variant="white">
      <div className="max-w-2xl">
        <p
          className="font-sans font-semibold uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          {priorAttempts.eyebrow}
        </p>

        <div className="flex flex-col gap-5">
          {priorAttempts.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans"
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: i < priorAttempts.paragraphs.length - 2 ? "#6B7280" : "#1A1A1A",
                fontStyle:
                  i < priorAttempts.paragraphs.length - 2 ? "italic" : "normal",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
