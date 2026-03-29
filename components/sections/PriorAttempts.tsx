import { priorAttempts } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PriorAttempts() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl">
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {priorAttempts.eyebrow}
        </p>

        <div className="flex flex-col gap-5">
          {priorAttempts.paragraphs.map((p, i) => (
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
