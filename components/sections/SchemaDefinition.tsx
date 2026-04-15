import { schemaDefinition } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function SchemaDefinition() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-2xl">
        {/* Dictionary entry */}
        <div
          className="mb-10 pb-10"
          style={{ borderBottom: "1px solid #E5E1D8" }}
        >
          <div className="flex items-baseline gap-3 mb-2 flex-wrap">
            <span
              style={{
                fontFamily: "Georgia, 'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.1,
                color: "#1A1A1A",
              }}
            >
              {schemaDefinition.term}
            </span>
            <span
              className="font-sans"
              style={{ fontSize: "17px", letterSpacing: "0.02em", color: "#6B7280" }}
            >
              {schemaDefinition.pronunciation}
            </span>
            <span
              className="font-sans italic"
              style={{ fontSize: "14px", color: "#6B7280" }}
            >
              {schemaDefinition.partOfSpeech}
            </span>
          </div>

          <p
            className="font-sans"
            style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280", marginBottom: "16px" }}
          >
            {schemaDefinition.definition}
          </p>

          <p
            className="font-sans"
            style={{ fontSize: "13px", letterSpacing: "0.02em", color: "#6B7280", opacity: 0.7 }}
          >
            {schemaDefinition.etymology}
          </p>
        </div>

        {/* Brand reveal */}
        <h3
          className="font-serif font-semibold mb-4"
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
            color: "#C89B3C",
          }}
        >
          {schemaDefinition.brandHeadline}
        </h3>
        <p
          className="font-sans mb-8"
          style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
        >
          {schemaDefinition.brandDescription}
        </p>
        <p
          className="font-serif font-semibold"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            lineHeight: 1.3,
            color: "#1A1A1A",
          }}
        >
          {schemaDefinition.brandPunchline}
        </p>
      </div>
    </SectionWrapper>
  );
}
