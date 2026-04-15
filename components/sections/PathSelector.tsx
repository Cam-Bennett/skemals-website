import { pathSelector } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PathSelector() {
  return (
    <SectionWrapper id="paths" variant="white">
      <p
        className="font-sans font-semibold uppercase tracking-widest mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {pathSelector.label}
      </p>
      <h2
        className="font-serif font-semibold mb-3"
        style={{
          fontSize: "clamp(28px, 3.5vw, 40px)",
          lineHeight: 1.2,
          color: "#1A1A1A",
        }}
      >
        {pathSelector.headline}
      </h2>
      <p
        className="font-sans mb-12 max-w-xl"
        style={{ fontSize: "17px", lineHeight: 1.7, color: "#6B7280" }}
      >
        {pathSelector.subhead}
      </p>

      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {pathSelector.paths.map((path) => (
          <div
            key={path.id}
            className="rounded-xl flex flex-col"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E1D8",
              borderTop: `3px solid ${path.color}`,
              padding: "32px 24px",
            }}
          >
            <span
              className="font-sans font-semibold text-sm tracking-wider uppercase mb-4 block"
              style={{ color: path.color }}
            >
              PATH {path.id}
            </span>
            <h3
              className="font-serif font-semibold mb-3"
              style={{ fontSize: "20px", color: "#1A1A1A" }}
            >
              {path.title}
            </h3>
            <p
              className="font-sans mb-6 flex-1"
              style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280" }}
            >
              {path.description}
            </p>
            <a
              href={path.id === "C" ? "/#qualifier" : `/?path=${path.id.toLowerCase()}#qualifier`}
              className="font-sans font-semibold text-sm transition-colors duration-150"
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
