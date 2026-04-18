import { hero } from "@/content/siteContent";
import Btn from "@/components/ui/Btn";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        background: "#0F1B2D",
        paddingTop: "120px",
        paddingBottom: "64px",
      }}
    >
      {/* Main content: 55/45 split */}
      <div>
        <div
          className="max-w-site mx-auto w-full"
          style={{
            display: "grid",
            gridTemplateColumns: "55fr 45fr",
            gap: "64px",
            alignItems: "flex-end",
            padding: "0 24px",
          }}
        >
          {/* Left: text */}
          <div>
            <p
              className="font-sans font-semibold uppercase tracking-widest mb-6"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "#C89B3C",
              }}
            >
              {hero.eyebrow}
            </p>

            <h1
              className="font-serif font-semibold"
              style={{
                fontSize: "clamp(28px, 3.7vw, 46px)",
                lineHeight: 1.1,
                color: "#F8F6F0",
                marginBottom: "24px",
              }}
            >
              {hero.headline}
            </h1>

            <p
              className="font-sans"
              style={{
                fontSize: "clamp(16px, 1.6vw, 18px)",
                lineHeight: 1.75,
                color: "#B0B8C4",
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              {hero.subtitle}
            </p>

            <Btn as="a" href="#qualifier" size="lg">
              {hero.ctaPrimary}
            </Btn>
          </div>

          {/* Right: photo card */}
          <div
            className="hidden lg:flex flex-col rounded-xl overflow-hidden"
            style={{
              height: "480px",
              background: "#1B2838",
              border: "1px solid rgba(200,155,60,0.15)",
              position: "relative",
            }}
          >
            <Image
              src="/images/camden-headshot.jpg"
              alt="Camden Bennett, founder of Pallume"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 0px, 45vw"
            />
            {/* Name caption overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px 24px 20px",
                background: "linear-gradient(to top, rgba(15,27,45,0.85) 0%, transparent 100%)",
              }}
            >
              <p
                className="font-sans font-semibold"
                style={{ fontSize: "14px", color: "#F8F6F0", letterSpacing: "0.04em" }}
              >
                Camden Bennett
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div
        style={{
          borderTop: "1px solid rgba(200,155,60,0.15)",
          padding: "20px 24px",
          marginTop: "64px",
        }}
      >
        <div className="max-w-site mx-auto flex flex-wrap gap-2">
          {hero.featureStrip.map((feature, i) => (
            <span
              key={feature}
              className="flex items-center gap-2 font-sans text-textMuted"
              style={{ fontSize: "13px" }}
            >
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "rgba(200,155,60,0.4)", margin: "0 4px" }}>
                  ·
                </span>
              )}
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
