import { clientProof } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ClientProof() {
  return (
    <SectionWrapper bgAlt>
      <p className="font-body font-semibold text-primary uppercase tracking-widest text-xs mb-4">
        {clientProof.label}
      </p>
      <h2
        className="font-heading font-bold text-text-main mb-3"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {clientProof.headline}
      </h2>

      {/* Subhead sits ABOVE the cards */}
      <p
        className="font-body text-text-soft mb-12 max-w-xl"
        style={{ fontSize: "16px", lineHeight: 1.7 }}
      >
        {clientProof.subhead}
      </p>

      {/* Proof cards — 3 column grid */}
      <div
        className="grid gap-6 mb-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {clientProof.cards.map((card, i) => (
          <div
            key={i}
            className="bg-bg-card rounded-xl flex flex-col"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "28px 24px",
            }}
          >
            <p
              className="font-body font-semibold uppercase tracking-widest mb-3"
              style={{ fontSize: "11px", color: card.eyebrowColor }}
            >
              {card.eyebrow}
            </p>
            <h3
              className="font-heading font-semibold text-text-main mb-3"
              style={{ fontSize: "18px", letterSpacing: "-0.01em", lineHeight: 1.3 }}
            >
              {card.headline}
            </h3>
            <p
              className="font-body text-text-soft"
              style={{ fontSize: "15px", lineHeight: 1.75 }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>

      {/* Quote card — only renders when testimonialPublished is true */}
      {clientProof.testimonialPublished && (
        <div
          className="bg-bg-card rounded-xl"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "28px 24px",
          }}
        >
          <p
            className="font-body text-text-soft italic mb-4"
            style={{ fontSize: "17px", lineHeight: 1.7 }}
          >
            &ldquo;{clientProof.testimonial.quote}&rdquo;
          </p>
          <p
            className="font-body font-semibold text-muted"
            style={{ fontSize: "13px", letterSpacing: "0.04em" }}
          >
            {clientProof.testimonial.attribution}
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}
