import Image from "next/image";
import { founder } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Founder() {
  return (
    <SectionWrapper
      bgAlt
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(220,38,38,0.06) 0%, transparent 60%), #0E0E18",
      }}
    >
      <p className="font-body font-semibold text-primary uppercase tracking-widest text-xs mb-4">
        {founder.label}
      </p>

      <div
        className="flex flex-col md:flex-row gap-10 md:gap-14 items-start"
      >
        {/* Headshot */}
        <div className="flex-shrink-0">
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Image
              src={founder.imageSrc}
              alt={founder.imageAlt}
              fill
              className="object-cover object-top"
              style={{ filter: "brightness(0.95) contrast(1.05)" }}
              sizes="200px"
            />
          </div>
        </div>

        {/* Bio */}
        <div style={{ maxWidth: "560px" }}>
          <h2
            className="font-heading font-bold text-text-main mb-6"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {founder.headline}
          </h2>

          <div className="flex flex-col gap-4">
            {founder.bio.map((p, i) => (
              <p
                key={i}
                className="font-body text-text-soft"
                style={{ fontSize: "16px", lineHeight: 1.75 }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
