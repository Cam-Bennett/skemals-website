import Image from "next/image";
import { founder } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Founder() {
  return (
    <SectionWrapper variant="white">
      <p
        className="font-sans font-semibold uppercase tracking-widest mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {founder.label}
      </p>

      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
        {/* Headshot */}
        <div className="flex-shrink-0">
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              width: "240px",
              height: "240px",
              border: "1px solid #E5E1D8",
            }}
          >
            <Image
              src={founder.imageSrc}
              alt={founder.imageAlt}
              fill
              className="object-cover object-top"
              sizes="240px"
            />
          </div>
        </div>

        {/* Bio */}
        <div style={{ maxWidth: "560px" }}>
          <h2
            className="font-serif font-semibold mb-6"
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.2,
              color: "#1A1A1A",
            }}
          >
            {founder.headline}
          </h2>

          <div className="flex flex-col gap-4">
            {founder.bio.map((p, i) => (
              <p
                key={i}
                className="font-sans"
                style={{ fontSize: "16px", lineHeight: 1.8, color: "#6B7280" }}
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
