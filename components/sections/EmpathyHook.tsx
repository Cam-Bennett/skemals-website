import { empathy } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function EmpathyHook() {
  return (
    <SectionWrapper bgAlt>
      <div className="max-w-2xl">
        <h2
          className="font-heading font-bold text-text-main mb-8"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {empathy.headline}
        </h2>

        <div className="flex flex-col gap-5">
          {empathy.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`font-body ${
                i === empathy.emphasizedIndex
                  ? "text-text-main font-semibold"
                  : "text-text-soft"
              }`}
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
