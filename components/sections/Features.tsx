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

      {/* Featured cards — first two, gold top accent */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {features.cards.slice(0, 2).map((card) => (
          <div
            key={card.title}
            className="rounded-xl"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E1D8",
              borderTop: "3px solid #C89B3C",
              padding: "28px 24px",
            }}
          >
            <h3
              className="font-serif font-semibold mb-3"
              style={{ fontSize: "22px", color: "#1A1A1A" }}
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

      {/* Standard cards — remaining four */}
      <div
        className="grid gap-6 mb-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {features.cards.slice(2).map((card) => (
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

      {/* Progressive deployment callout — navy card */}
      <div
        className="rounded-xl"
        style={{
          background: "#0F1B2D",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          padding: "40px",
          maxWidth: "780px",
        }}
      >
        <h3
          className="font-serif font-semibold mb-6"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", lineHeight: 1.2, color: "#F8F6F0" }}
        >
          {features.progressiveDeployment.headline}
        </h3>

        {features.progressiveDeployment.body.map((para, i) => (
          <p
            key={i}
            className="font-sans mb-4"
            style={{ fontSize: "15px", lineHeight: 1.75, color: "#B0B8C4" }}
          >
            {para}
          </p>
        ))}

        <ul style={{ listStyle: "none", padding: 0, margin: "24px 0" }}>
          {features.progressiveDeployment.weeks.map((item, i) => (
            <li
              key={i}
              className="font-sans flex gap-3 items-baseline"
              style={{ fontSize: "15px", lineHeight: 1.75, marginBottom: "10px", color: "#F8F6F0" }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#C89B3C",
                  color: "#0F1B2D",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: 700,
                  marginTop: "3px",
                }}
              >
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p
          className="font-sans"
          style={{ fontSize: "15px", lineHeight: 1.75, fontStyle: "italic", color: "#B0B8C4" }}
        >
          {features.progressiveDeployment.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
