import { identityFrame } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function IdentityFrame() {
  return (
    <SectionWrapper variant="white">
      <p
        className="font-sans font-semibold uppercase tracking-widest mb-8"
        style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
      >
        {identityFrame.eyebrow}
      </p>

      <div className="flex flex-col gap-5 mb-12" style={{ maxWidth: "640px" }}>
        {identityFrame.intro.map((p, i) => (
          <p
            key={i}
            className="font-sans"
            style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
          >
            {p}
          </p>
        ))}
      </div>

      {/* Two-column card layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* For you — white card, gold filled circles */}
        <div
          className="rounded-xl"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E1D8",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            padding: "32px 28px",
          }}
        >
          <p
            className="font-sans font-semibold uppercase tracking-widest mb-6"
            style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#C89B3C" }}
          >
            {identityFrame.forYouLabel}
          </p>
          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0 }}>
            {identityFrame.forYou.map((item, i) => (
              <li
                key={i}
                className="font-sans flex gap-3 items-start"
                style={{ fontSize: "15px", lineHeight: 1.65, color: "#1A1A1A" }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#C89B3C",
                    color: "#FFFFFF",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 700,
                    marginTop: "2px",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Not for you — warm gray card, outlined circles */}
        <div
          className="rounded-xl"
          style={{
            background: "#EDE9DD",
            border: "1px solid #D4CFC6",
            padding: "32px 28px",
          }}
        >
          <p
            className="font-sans font-semibold uppercase tracking-widest mb-6"
            style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#6B7280" }}
          >
            {identityFrame.notForYouLabel}
          </p>
          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0 }}>
            {identityFrame.notForYou.map((item, i) => (
              <li
                key={i}
                className="font-sans flex gap-3 items-start"
                style={{ fontSize: "15px", lineHeight: 1.65, color: "#6B7280" }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "1.5px solid #9CA3AF",
                    color: "#9CA3AF",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    marginTop: "2px",
                  }}
                >
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className="font-sans font-semibold"
        style={{ fontSize: "17px", lineHeight: 1.6, color: "#1A1A1A" }}
      >
        {identityFrame.closing}
      </p>
    </SectionWrapper>
  );
}
