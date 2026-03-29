import { mechanism } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Mechanism() {
  return (
    <SectionWrapper bgAlt>
      <div className="max-w-2xl">
        {/* Eyebrow only — no headline */}
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {mechanism.eyebrow}
        </p>

        {/* Body Part 1 */}
        <div className="flex flex-col gap-5 mb-16">
          {mechanism.bodyPart1.map((p, i) => (
            <p
              key={i}
              className="font-body text-text-soft"
              style={{ fontSize: "17px", lineHeight: 1.75 }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Product reveal callout */}
        <div
          style={{
            borderLeft: "3px solid #DC2626",
            paddingLeft: "28px",
            marginBottom: "64px",
          }}
        >
          <p
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            {mechanism.reveal}
          </p>
        </div>

        {/* Body Part 2 */}
        <div className="flex flex-col gap-5">
          {mechanism.bodyPart2.map((p, i) => (
            <p
              key={i}
              className="font-body text-text-soft"
              style={{ fontSize: "17px", lineHeight: 1.75 }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
