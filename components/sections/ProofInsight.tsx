import { proofInsight } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ProofInsight() {
  return (
    <SectionWrapper>
      <blockquote
        className="max-w-2xl font-body text-text-soft"
        style={{
          borderLeft: "3px solid #DC2626",
          paddingLeft: "24px",
          fontSize: "17px",
          lineHeight: 1.75,
          fontStyle: "normal",
        }}
      >
        &ldquo;{proofInsight.quote}&rdquo;
      </blockquote>
    </SectionWrapper>
  );
}
