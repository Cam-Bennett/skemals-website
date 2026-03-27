import { schemaDefinition } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function SchemaDefinition() {
  return (
    <SectionWrapper bgAlt>
      <div className="max-w-2xl">
        {/* Dictionary entry */}
        <div
          className="mb-10 pb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-baseline gap-3 mb-2 flex-wrap">
            <span
              className="text-text-main"
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.1,
              }}
            >
              {schemaDefinition.term}
            </span>
            <span
              className="font-body text-muted"
              style={{ fontSize: "17px", letterSpacing: "0.02em" }}
            >
              {schemaDefinition.pronunciation}
            </span>
            <span
              className="font-body text-muted italic"
              style={{ fontSize: "14px" }}
            >
              {schemaDefinition.partOfSpeech}
            </span>
          </div>

          <p
            className="font-body text-text-soft mb-4"
            style={{ fontSize: "17px", lineHeight: 1.75 }}
          >
            {schemaDefinition.definition}
          </p>

          <p
            className="font-body text-muted"
            style={{ fontSize: "13px", letterSpacing: "0.02em" }}
          >
            {schemaDefinition.etymology}
          </p>
        </div>

        {/* Brand reveal */}
        <h3
          className="font-heading font-bold text-primary mb-4"
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {schemaDefinition.brandHeadline}
        </h3>
        <p
          className="font-body text-text-soft mb-8"
          style={{ fontSize: "17px", lineHeight: 1.75 }}
        >
          {schemaDefinition.brandDescription}
        </p>
        <p
          className="font-heading font-semibold text-text-main"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
          }}
        >
          {schemaDefinition.brandPunchline}
        </p>
      </div>
    </SectionWrapper>
  );
}
