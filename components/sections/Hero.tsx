import { hero } from "@/content/siteContent";
import Btn from "@/components/ui/Btn";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col justify-center"
      style={{
        background: "#0A0A12",
        paddingTop: "128px",
        paddingBottom: "96px",
      }}
    >
      {/* Background image layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-abstract.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          opacity: 0.75,
        }}
      />

      {/* Gradient overlay — dark left (text), open right (colors) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,18,0.92) 0%, rgba(10,10,18,0.60) 42%, rgba(10,10,18,0.08) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #0E0E18)",
        }}
      />

      <GrainOverlay />

      <div className="relative z-10 max-w-site mx-auto px-6 w-full">
        {/* Eyebrow */}
        <p
          className="font-body font-semibold text-primary mb-6 tracking-widest text-xs uppercase"
        >
          {hero.eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="font-heading font-bold text-text-main mb-6 max-w-3xl"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            whiteSpace: "pre-line",
          }}
        >
          {hero.headline}
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-text-main mb-10 max-w-xl"
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            opacity: 0.6,
          }}
        >
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Btn as="a" href="#qualifier" size="lg">
            {hero.ctaPrimary}
          </Btn>
          <Btn as="a" href="#how-it-works" variant="secondary" size="lg">
            {hero.ctaSecondary}
          </Btn>
        </div>

        {/* Feature strip */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {hero.featureStrip.map((feature, i) => (
            <span key={feature} className="flex items-center gap-2 text-sm text-muted font-body">
              {i > 0 && (
                <span aria-hidden="true" className="text-white/20">·</span>
              )}
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
