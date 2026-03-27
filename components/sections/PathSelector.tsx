import { pathSelector } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PathSelector() {
  return (
    <SectionWrapper id="paths">
      {/* Header */}
      <p
        className="font-body font-semibold text-primary uppercase tracking-widest text-xs mb-4"
      >
        {pathSelector.label}
      </p>
      <h2
        className="font-heading font-bold text-text-main mb-3"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {pathSelector.headline}
      </h2>
      <p
        className="font-body text-text-soft mb-12 max-w-xl"
        style={{ fontSize: "17px", lineHeight: 1.7 }}
      >
        {pathSelector.subhead}
      </p>

      {/* Path cards */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {pathSelector.paths.map((path) => (
          <div
            key={path.id}
            className="bg-bg-card rounded-xl flex flex-col"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              borderTop: `3px solid ${path.color}`,
              padding: "32px 24px",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="font-heading font-bold text-sm tracking-wider uppercase"
                style={{ color: path.color }}
              >
                PATH {path.id}
              </span>
            </div>
            <h3
              className="font-heading font-semibold text-text-main mb-3"
              style={{ fontSize: "20px", letterSpacing: "-0.01em" }}
            >
              {path.title}
            </h3>
            <p
              className="font-body text-text-soft mb-6 flex-1"
              style={{ fontSize: "15px", lineHeight: 1.7 }}
            >
              {path.description}
            </p>
            <a
              href="#qualifier"
              className="font-body font-semibold text-sm transition-colors duration-150"
              style={{ color: path.color, textDecoration: "none" }}
            >
              {path.cta}
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
