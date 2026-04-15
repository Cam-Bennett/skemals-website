import { empathy } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function EmpathyHook() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-2xl">
        <p
          className="font-sans font-semibold uppercase tracking-widest mb-6"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          THE EXECUTION GAP
        </p>

        <h2
          className="font-serif font-semibold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            lineHeight: 1.2,
            color: "#1A1A1A",
            marginBottom: "32px",
          }}
        >
          {empathy.headline}
        </h2>

        <div className="flex flex-col gap-5">
          {empathy.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans"
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: i === empathy.emphasizedIndex ? "#1A1A1A" : "#6B7280",
                fontWeight: i === empathy.emphasizedIndex ? 600 : 400,
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
