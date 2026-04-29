import Image from "next/image";
import { mechanism } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Mechanism() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-2xl">
        <p
          className="font-sans font-semibold uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          {mechanism.eyebrow}
        </p>

        <div className="flex flex-col gap-5 mb-16">
          {mechanism.bodyPart1.map((p, i) => (
            <p
              key={i}
              className="font-sans"
              style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Product reveal — section headline treatment */}
        <div style={{ marginBottom: "64px" }}>
          <p
            className="font-sans font-semibold uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
          >
            THE SOLUTION
          </p>
          <h2
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              lineHeight: 1.2,
              color: "#1A1A1A",
            }}
          >
            {mechanism.reveal}
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {mechanism.bodyPart2.map((p, i) => (
            <p
              key={i}
              className="font-sans"
              style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Screenshot — breaks out of max-w-2xl for visual impact */}
      <div style={{ maxWidth: "860px", margin: "64px auto 0" }}>
        <div
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(200,155,60,0.2)",
            boxShadow: "0 24px 64px rgba(15,27,45,0.18)",
          }}
        >
          <Image
            src="/images/pallume-journal-screenshot.png"
            alt="Pallume Journal — AI pattern recognition in action. The system surfaces a six-week avoidance pattern the client couldn't see themselves."
            width={3290}
            height={2086}
            className="w-full h-auto"
            priority={false}
            sizes="(max-width: 768px) 100vw, 860px"
          />
        </div>
        <p
          className="font-sans text-center"
          style={{
            fontSize: "13px",
            lineHeight: 1.6,
            color: "#9CA3AF",
            marginTop: "12px",
          }}
        >
          The system reads your patterns across weeks — not just today&apos;s entry.
        </p>
      </div>
    </SectionWrapper>
  );
}
