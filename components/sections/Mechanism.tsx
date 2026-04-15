import { mechanism } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Mechanism() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-2xl">
        <p
          className="font-sans font-semibold uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          {mechanism.eyebrow}
        </p>

        <div className="flex flex-col gap-5 mb-16">
          {mechanism.bodyPart1.map((p, i) => (
            <p
              key={i}
              className="font-sans"
              style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Product reveal callout */}
        <div
          style={{
            borderLeft: "3px solid #C89B3C",
            paddingLeft: "28px",
            marginBottom: "64px",
          }}
        >
          <p
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
              lineHeight: 1.2,
              color: "#1A1A1A",
            }}
          >
            {mechanism.reveal}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {mechanism.bodyPart2.map((p, i) => (
            <p
              key={i}
              className="font-sans"
              style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
