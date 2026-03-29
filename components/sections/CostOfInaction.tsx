import { costOfInaction } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CostOfInaction() {
  return (
    <SectionWrapper bgAlt>
      <div className="max-w-2xl">
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {costOfInaction.eyebrow}
        </p>

        <div className="flex flex-col gap-5">
          {costOfInaction.paragraphs.map((p, i) => (
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
