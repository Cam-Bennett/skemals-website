import { proofInsight } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ProofInsight() {
  return (
    <SectionWrapper variant="white" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
      <blockquote
        className="max-w-2xl font-sans"
        style={{
          borderLeft: "3px solid #C89B3C",
          paddingLeft: "28px",
          fontSize: "17px",
          lineHeight: 1.8,
          color: "#6B7280",
          fontStyle: "italic",
        }}
      >
        &ldquo;{proofInsight.quote}&rdquo;
        <footer
          className="font-sans not-italic mt-3"
          style={{ fontSize: "13px", color: "#C89B3C", letterSpacing: "0.06em" }}
        >
          — CAMDEN BENNETT
        </footer>
      </blockquote>
    </SectionWrapper>
  );
}
