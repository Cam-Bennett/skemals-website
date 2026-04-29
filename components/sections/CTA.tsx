import { cta } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";

export default function CTA() {
  return (
    <SectionWrapper variant="dark">
      <div className="max-w-2xl">
        <h2
          className="font-serif font-semibold mb-4"
          style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            lineHeight: 1.2,
            color: "#F8F6F0",
          }}
        >
          {cta.headline}
        </h2>
        <p
          className="font-sans mb-10"
          style={{ fontSize: "17px", lineHeight: 1.75, color: "#B0B8C4" }}
        >
          {cta.description}
        </p>
        <div className="mb-8">
          <Btn as="a" href="/apply" size="lg">
            {cta.buttonLabel}
          </Btn>
        </div>
        <p
          className="font-sans mb-3"
          style={{ fontSize: "14px", color: "#B0B8C4" }}
        >
          {cta.trustLine}
        </p>
        <p
          className="font-sans"
          style={{ fontSize: "13px", color: "#6B7280" }}
        >
          {cta.contact}
        </p>
      </div>
    </SectionWrapper>
  );
}
