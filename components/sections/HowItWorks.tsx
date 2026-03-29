import { howItWorks } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" bgAlt>
      {/* Header */}
      <p className="font-body font-semibold text-primary uppercase tracking-widest text-xs mb-4">
        {howItWorks.label}
      </p>
      <h2
        className="font-heading font-bold text-text-main mb-16"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {howItWorks.headline}
      </h2>

      {/* Steps */}
      <div
        className="grid gap-12 md:gap-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {howItWorks.steps.map((step) => (
          <div key={step.number} className="relative">
            {/* Ghost number */}
            <div
              aria-hidden="true"
              className="font-heading font-bold text-text-main select-none mb-4"
              style={{
                fontSize: "48px",
                opacity: 0.12,
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              {step.number}
            </div>

            <h3
              className="font-heading font-semibold text-text-main mb-3"
              style={{ fontSize: "20px", letterSpacing: "-0.01em" }}
            >
              {step.title}
            </h3>
            <div className="flex flex-col gap-3">
              {(Array.isArray(step.description)
                ? step.description
                : [step.description]
              ).map((para, i) => (
                <p
                  key={i}
                  className="font-body text-text-soft"
                  style={{ fontSize: "15px", lineHeight: 1.75 }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
