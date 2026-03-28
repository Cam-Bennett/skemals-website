import { cta } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";

export default function CTA() {
  return (
    <SectionWrapper bgAlt>
      <div className="max-w-2xl">
        <h2
          className="font-heading font-bold text-text-main mb-4"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {cta.headline}
        </h2>
        <p
          className="font-body text-text-soft mb-8"
          style={{ fontSize: "17px", lineHeight: 1.7 }}
        >
          {cta.description}
        </p>
        <div className="mb-8">
          <Btn as="a" href="#qualifier" size="lg">
            {cta.buttonLabel}
          </Btn>
        </div>
        <p
          className="font-body text-text-soft mb-6"
          style={{ fontSize: "15px" }}
        >
          {cta.pricing}
        </p>
        <p
          className="font-body text-muted mb-4"
          style={{ fontSize: "13px", letterSpacing: "0.04em" }}
        >
          {cta.trustLine}
        </p>
        <p
          className="font-body text-muted"
          style={{ fontSize: "14px" }}
        >
          {cta.contact}
        </p>
      </div>
    </SectionWrapper>
  );
}
