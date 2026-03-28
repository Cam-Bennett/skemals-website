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
          padding: "40px 40px",
          maxWidth: "780px",
        }}
      >
        <h3
          className="font-heading font-bold text-text-main mb-6"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
        >
          {features.progressiveDeployment.headline}
        </h3>

        {features.progressiveDeployment.body.map((para, i) => (
          <p
            key={i}
            className="font-body text-text-soft mb-4"
            style={{ fontSize: "15px", lineHeight: 1.75 }}
          >
            {para}
          </p>
        ))}

        <ul className="mb-6" style={{ listStyle: "none", padding: 0, margin: "24px 0" }}>
          {features.progressiveDeployment.weeks.map((item, i) => (
            <li
              key={i}
              className="font-body text-text-soft"
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                paddingLeft: "16px",
                borderLeft: "2px solid rgba(124,58,237,0.4)",
                marginBottom: "10px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <p
          className="font-body text-text-soft"
          style={{ fontSize: "15px", lineHeight: 1.75, fontStyle: "italic" }}
        >
          {features.progressiveDeployment.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
