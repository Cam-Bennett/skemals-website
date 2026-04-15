import { howItWorks } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" variant="light">
      <p
        className="font-sans font-semibold uppercase tracking-widest mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {howItWorks.label}
      </p>
      <h2
        className="font-serif font-semibold mb-16"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#1A1A1A",
        }}
      >
        {howItWorks.headline}
      </h2>

      <div
        className="grid gap-12 md:gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {howItWorks.steps.map((step) => (
          <div key={step.number}>
            <div
              aria-hidden="true"
              className="font-serif font-bold select-none mb-4"
              style={{
                fontSize: "56px",
                opacity: 0.12,
                lineHeight: 1,
                color: "#0F1B2D",
              }}
            >
              {step.number}
            </div>

            <h3
              className="font-serif font-semibold mb-3"
              style={{ fontSize: "22px", color: "#1A1A1A" }}
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
                  className="font-sans"
                  style={{ fontSize: "15px", lineHeight: 1.75, color: "#6B7280" }}
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
