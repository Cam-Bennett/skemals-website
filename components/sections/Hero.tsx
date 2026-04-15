import { hero } from "@/content/siteContent";
import Btn from "@/components/ui/Btn";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        background: "#0F1B2D",
        minHeight: "100vh",
        paddingTop: "64px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Main content: 55/45 split */}
      <div
        className="flex-1 max-w-site mx-auto w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: "64px",
          alignItems: "center",
          padding: "80px 24px 60px",
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
              fontSize: "clamp(32px, 4.5vw, 52px)",
              lineHeight: 1.15,
              color: "#F8F6F0",
              marginBottom: "24px",
            }}
          >
            {hero.headline}
          </h1>

          <p
            className="font-sans"
            style={{
              fontSize: "clamp(16px, 1.6vw, 19px)",
              lineHeight: 1.75,
              color: "#B0B8C4",
              marginBottom: "16px",
              maxWidth: "520px",
            }}
          >
            {hero.subtitle}
          </p>

          {hero.discoveryLine && (
            <p
              className="font-sans"
              style={{
                fontSize: "clamp(14px, 1.4vw, 16px)",
                lineHeight: 1.75,
                color: "#B0B8C4",
                opacity: 0.75,
                marginBottom: "40px",
                maxWidth: "480px",
              }}
            >
              {hero.discoveryLine}
            </p>
          )}

          <div className="flex flex-wrap gap-4 mb-6">
            <Btn as="a" href="#qualifier" size="lg">
              {hero.ctaPrimary}
            </Btn>
            <Btn as="a" href="#paths" variant="secondary" size="lg">
              {hero.ctaSecondary}
            </Btn>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="/pricing"
              className="font-sans text-textMuted hover:text-textLightMuted transition-colors duration-150"
              style={{ fontSize: "13px", textDecoration: "none" }}
            >
              See pricing →
            </a>
            <a
              href="/pallume-journal-lite"
              className="font-sans text-textMuted hover:text-textLightMuted transition-colors duration-150"
              style={{ fontSize: "13px", textDecoration: "none" }}
            >
              Try Pallume Journal Lite free →
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div
          className="hidden lg:block relative rounded-xl overflow-hidden"
          style={{
            height: "520px",
            border: "1px solid rgba(200,155,60,0.15)",
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
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          borderTop: "1px solid rgba(200,155,60,0.15)",
          padding: "24px",
        }}
      >
        <div className="max-w-site mx-auto flex flex-wrap gap-8 justify-start md:justify-center">
          {hero.featureStrip.map((feature, i) => (
            <span
              key={feature}
              className="flex items-center gap-3 font-sans text-textMuted"
              style={{ fontSize: "13px" }}
            >
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "rgba(200,155,60,0.3)" }}>
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
