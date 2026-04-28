import { qualifierForm } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";

export default function QualifierCTA() {
  return (
    <SectionWrapper id="qualifier" variant="light">
      <div style={{ maxWidth: "560px" }}>
        <p
          className="font-body font-semibold uppercase tracking-widest mb-6"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          {qualifierForm.label}
        </p>
        <h2
          className="font-heading font-bold"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#1A1A1A",
            marginBottom: "16px",
          }}
        >
          {qualifierForm.headline}
        </h2>
        <p
          className="font-body"
          style={{
            fontSize: "17px",
            lineHeight: 1.75,
            color: "#6B7280",
            marginBottom: "40px",
          }}
        >
          {qualifierForm.subhead}
        </p>
        <Btn as="a" href="/apply" size="lg">
          Apply Now
        </Btn>
      </div>
    </SectionWrapper>
  );
}
