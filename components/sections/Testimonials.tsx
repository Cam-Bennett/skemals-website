import { testimonials } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Testimonials() {
  const visible = testimonials.items.filter((t) => t.paragraphs.length > 0);
  if (visible.length === 0) return null;

  return (
    <SectionWrapper variant="white">
      <p
        className="font-sans font-semibold uppercase tracking-widest mb-12"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {testimonials.label}
      </p>

      <div className="flex flex-col" style={{ gap: "56px" }}>
        {visible.map((item, i) => (
          <div
            key={i}
            style={{
              borderLeft: "3px solid #C89B3C",
              paddingLeft: "32px",
              maxWidth: "720px",
            }}
          >
            <div className="flex flex-col" style={{ gap: "20px", marginBottom: "28px" }}>
              {item.paragraphs.map((para, j) => (
                <p
                  key={j}
                  className="font-sans"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.8,
                    color: "#1A1A1A",
                    fontStyle: "italic",
                  }}
                >
                  {j === 0 ? `“${para}` : j === item.paragraphs.length - 1 ? `${para}”` : para}
                </p>
              ))}
            </div>

            <div>
              <p
                className="font-sans font-semibold"
                style={{ fontSize: "14px", color: "#1A1A1A", letterSpacing: "0.03em" }}
              >
                {item.name}
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "13px", color: "#6B7280", marginTop: "2px" }}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
