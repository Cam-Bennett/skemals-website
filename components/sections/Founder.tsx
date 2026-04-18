import Image from "next/image";
import { founder } from "@/content/siteContent";

export default function Founder() {
  return (
    <section style={{ background: "#FFFFFF" }}>
      <div className="max-w-site mx-auto px-6 py-24">
        <p
          className="font-sans font-semibold uppercase tracking-widest mb-10"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          {founder.label}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          {/* Photo column — asymmetric with navy accent offset */}
          <div style={{ position: "relative", paddingTop: "24px", paddingLeft: "24px" }}>
            {/* Navy accent block — offset upper-left */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "72%",
                height: "60%",
                background: "#0F1B2D",
                opacity: 0.35,
                borderRadius: "12px",
              }}
            />
            {/* Photo */}
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={founder.imageSrc}
                alt={founder.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Text column */}
          <div style={{ paddingTop: "8px" }}>
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

            <div className="flex flex-col gap-4 mb-6">
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

            <blockquote
              className="font-sans"
              style={{
                borderLeft: "3px solid #C89B3C",
                paddingLeft: "20px",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#6B7280",
                fontStyle: "italic",
              }}
            >
              {founder.pullQuote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
