import { features } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Features() {
  return (
    <SectionWrapper id="features" variant="white">
      <p
        className="font-sans font-semibold uppercase tracking-widest mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {features.label}
      </p>
      <h2
        className="font-serif font-semibold mb-3"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#1A1A1A",
        }}
      >
        {features.headline}
      </h2>
      <p
        className="font-sans mb-14 max-w-xl"
        style={{ fontSize: "17px", lineHeight: 1.7, color: "#6B7280" }}
      >
        {features.subhead}
      </p>

      <div
        className="grid gap-6 mb-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        {features.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E1D8",
              padding: "28px 24px",
            }}
          >
            <h3
              className="font-serif font-semibold mb-3"
              style={{ fontSize: "18px", color: "#1A1A1A" }}
            >
              {card.title}
            </h3>
            <p
              className="font-sans"
              style={{ fontSize: "15px", lineHeight: 1.75, color: "#6B7280" }}
            >
              {card.description}
            </p>
            {card.whichMeans && (
              <p
                className="font-sans"
                style={{
                  fontSize: "13px",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginTop: "14px",
                  paddingTop: "14px",
                  borderTop: "1px solid #E5E1D8",
                  color: "#6B7280",
                }}
              >
                <span style={{ fontStyle: "normal", fontWeight: 600, color: "#1A1A1A" }}>
                  Which means:{" "}
                </span>
                {card.whichMeans}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Progressive deployment callout */}
      <div
        className="rounded-xl"
        style={{
          background: "#F8F6F0",
          border: "1px solid #E5E1D8",
          borderLeft: "3px solid #C89B3C",
          padding: "40px",
          maxWidth: "780px",
        }}
      >
        <h3
          className="font-serif font-semibold mb-6"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", lineHeight: 1.2, color: "#1A1A1A" }}
        >
          {features.progressiveDeployment.headline}
        </h3>

        {features.progressiveDeployment.body.map((para, i) => (
          <p
            key={i}
            className="font-sans mb-4"
            style={{ fontSize: "15px", lineHeight: 1.75, color: "#6B7280" }}
          >
            {para}
          </p>
        ))}

        <ul style={{ listStyle: "none", padding: 0, margin: "24px 0" }}>
          {features.progressiveDeployment.weeks.map((item, i) => (
            <li
              key={i}
              className="font-sans"
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                paddingLeft: "16px",
                borderLeft: "2px solid rgba(200,155,60,0.4)",
                marginBottom: "10px",
                color: "#6B7280",
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <p
          className="font-sans"
          style={{ fontSize: "15px", lineHeight: 1.75, fontStyle: "italic", color: "#6B7280" }}
        >
          {features.progressiveDeployment.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
