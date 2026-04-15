import { clientProof } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ClientProof() {
  return (
    <SectionWrapper variant="white">
      <p
        className="font-sans font-semibold uppercase tracking-widest text-xs mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {clientProof.label}
      </p>
      <h2
        className="font-serif font-semibold mb-3"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#1A1A1A",
        }}
      >
        {clientProof.headline}
      </h2>

      <p
        className="font-sans mb-12 max-w-xl"
        style={{ fontSize: "16px", lineHeight: 1.7, color: "#6B7280" }}
      >
        {clientProof.subhead}
      </p>

      <div
        className="grid gap-6 mb-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {clientProof.cards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl flex flex-col"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E1D8",
              borderTop: `3px solid ${card.eyebrowColor}`,
              padding: "28px 24px",
            }}
          >
            <p
              className="font-sans font-semibold uppercase tracking-widest mb-3"
              style={{ fontSize: "11px", color: card.eyebrowColor }}
            >
              {card.eyebrow}
            </p>
            <h3
              className="font-serif font-semibold mb-3"
              style={{ fontSize: "18px", lineHeight: 1.3, color: "#1A1A1A" }}
            >
              {card.headline}
            </h3>
            <p
              className="font-sans"
              style={{ fontSize: "15px", lineHeight: 1.75, color: "#6B7280" }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>

      {clientProof.testimonialPublished && (
        <div
          className="rounded-xl"
          style={{
            background: "#F8F6F0",
            border: "1px solid #E5E1D8",
            padding: "28px 24px",
          }}
        >
          <p
            className="font-sans italic mb-4"
            style={{ fontSize: "17px", lineHeight: 1.7, color: "#6B7280" }}
          >
            &ldquo;{clientProof.testimonial.quote}&rdquo;
          </p>
          <p
            className="font-sans font-semibold"
            style={{ fontSize: "13px", letterSpacing: "0.04em", color: "#C89B3C" }}
          >
            {clientProof.testimonial.attribution}
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}
