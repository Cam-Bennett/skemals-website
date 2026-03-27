import { features } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Features() {
  return (
    <SectionWrapper id="features">
      {/* Header */}
      <p className="font-body font-semibold text-primary uppercase tracking-widest text-xs mb-4">
        {features.label}
      </p>
      <h2
        className="font-heading font-bold text-text-main mb-3"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {features.headline}
      </h2>
      <p
        className="font-body text-text-soft mb-14 max-w-xl"
        style={{ fontSize: "17px", lineHeight: 1.7 }}
      >
        {features.subhead}
      </p>

      {/* Feature cards */}
      <div
        className="grid gap-6 mb-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        }}
      >
        {features.cards.map((card) => (
          <div
            key={card.title}
            className="bg-bg-card rounded-xl"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "28px 24px",
            }}
          >
            <h3
              className="font-heading font-semibold text-text-main mb-3"
              style={{ fontSize: "18px", letterSpacing: "-0.01em" }}
            >
              {card.title}
            </h3>
            <p
              className="font-body text-text-soft"
              style={{ fontSize: "15px", lineHeight: 1.75 }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Progressive deployment callout */}
      <div
        className="rounded-xl"
        style={{
          background: "rgba(124,58,237,0.04)",
          border: "1px solid rgba(124,58,237,0.12)",
          padding: "24px 28px",
        }}
      >
        <p
          className="font-body text-text-soft"
          style={{ fontSize: "15px", lineHeight: 1.75 }}
        >
          <strong className="text-text-main font-semibold">
            {features.progressiveDeployment.boldText}
          </strong>{" "}
          {features.progressiveDeployment.description}
        </p>
      </div>
    </SectionWrapper>
  );
}
