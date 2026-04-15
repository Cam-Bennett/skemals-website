import { costOfInaction } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CostOfInaction() {
  return (
    <SectionWrapper variant="dark">
      <p
        className="font-sans font-semibold uppercase tracking-widest mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {costOfInaction.eyebrow}
      </p>

      <h2
        className="font-serif font-semibold mb-12"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#F8F6F0",
        }}
      >
        {costOfInaction.headline}
      </h2>

      {/* Stat cards */}
      <div
        className="grid gap-6 mb-14"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {costOfInaction.stats.map((stat) => (
          <div
            key={stat.number}
            className="rounded-xl"
            style={{
              background: "#1B2838",
              border: "1px solid rgba(200,155,60,0.15)",
              padding: "32px 28px",
            }}
          >
            <p
              className="font-serif font-semibold mb-2"
              style={{ fontSize: "clamp(36px, 4vw, 48px)", color: "#C89B3C" }}
            >
              {stat.number}
            </p>
            <p
              className="font-sans font-semibold mb-3"
              style={{ fontSize: "14px", color: "#F8F6F0", letterSpacing: "0.04em" }}
            >
              {stat.label}
            </p>
            <p
              className="font-sans"
              style={{ fontSize: "14px", lineHeight: 1.7, color: "#B0B8C4" }}
            >
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Body paragraphs */}
      <div className="max-w-2xl flex flex-col gap-5">
        {costOfInaction.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-sans"
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#B0B8C4",
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
