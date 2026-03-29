import { hero } from "@/content/siteContent";
import Btn from "@/components/ui/Btn";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Hero() {
  return (
    <div style={{ paddingTop: "64px" }}>

      {/* ── IMAGE STRIP — full-width, full color ───────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          height: "62vh",
          minHeight: "420px",
          background: "#0A0A12",
        }}
      >
        {/* Image at near-full opacity — no uniform overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-abstract.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            opacity: 0.90,
          }}
        />

        {/* Bottom fade into dark section below */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "45%",
            background: "linear-gradient(to bottom, transparent, #0A0A12)",
          }}
        />

        {/* Left-side legibility guard — only darkens behind the text */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,18,0.82) 0%, rgba(10,10,18,0.38) 38%, rgba(10,10,18,0.0) 62%)",
          }}
        />

        <GrainOverlay />

        {/* Eyebrow + headline anchored to bottom-left */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ padding: "0 24px 40px" }}
        >
          <div className="max-w-site mx-auto">
            <p
              className="font-body font-semibold text-primary mb-4 tracking-widest uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.14em" }}
            >
              {hero.eyebrow}
            </p>
            <h1
              className="font-heading font-bold text-text-main"
              style={{
                fontSize: "clamp(2.2rem, 4.8vw, 3.6rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                maxWidth: "640px",
              }}
            >
              {hero.headline}
            </h1>
          </div>
        </div>
      </section>

      {/* ── DARK SECTION — subheadline, subtitle, CTAs, strip ─────── */}
      <section
        style={{
          background: "#0A0A12",
          padding: "40px 24px 80px",
        }}
      >
        <div className="max-w-site mx-auto">
          {/* Subheadline — only renders if populated */}
          {hero.subheadline && (
            <p
              className="font-heading font-semibold text-text-soft mb-5"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                letterSpacing: "-0.01em",
                maxWidth: "520px",
              }}
            >
              {hero.subheadline}
            </p>
          )}

          {/* Subtitle */}
          <p
            className="font-body text-text-main mb-4"
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              opacity: 0.6,
              maxWidth: "520px",
            }}
          >
            {hero.subtitle}
          </p>

          {/* Discovery line */}
          {hero.discoveryLine && (
            <p
              className="font-body text-muted mb-8"
              style={{ fontSize: "14px", lineHeight: 1.7, maxWidth: "480px" }}
            >
              {hero.discoveryLine}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-4">
            <Btn as="a" href="#qualifier" size="lg">
              {hero.ctaPrimary}
            </Btn>
            <Btn as="a" href="#paths" variant="secondary" size="lg">
              {hero.ctaSecondary}
            </Btn>
          </div>

          {/* Pricing anchor */}
          <div className="mb-10">
            <a
              href="/pricing"
              className="font-body text-muted hover:text-text-soft transition-colors duration-150"
              style={{ fontSize: "13px", textDecoration: "none" }}
            >
              See pricing →
            </a>
          </div>

          {/* Feature strip */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {hero.featureStrip.map((feature, i) => (
              <span
                key={feature}
                className="flex items-center gap-2 text-sm text-muted font-body"
              >
                {i > 0 && (
                  <span aria-hidden="true" className="text-white/20">·</span>
                )}
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
