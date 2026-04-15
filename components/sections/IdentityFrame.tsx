import { identityFrame } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function IdentityFrame() {
  return (
    <SectionWrapper variant="white">
      <div className="max-w-2xl">
        <p
          className="font-sans font-semibold uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          {identityFrame.eyebrow}
        </p>

        <div className="flex flex-col gap-5 mb-12">
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

        <div className="mb-10">
          <p
            className="font-sans font-semibold mb-4"
            style={{ fontSize: "14px", letterSpacing: "0.04em", color: "#1A1A1A" }}
          >
            {identityFrame.forYouLabel}
          </p>
          <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0 }}>
            {identityFrame.forYou.map((item, i) => (
              <li
                key={i}
                className="font-sans flex gap-3"
                style={{ fontSize: "16px", lineHeight: 1.65, color: "#6B7280" }}
              >
                <span style={{ color: "#C89B3C", marginTop: "2px", flexShrink: 0, fontSize: "12px" }}>
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mb-12"
          style={{ borderLeft: "3px solid #E5E1D8", paddingLeft: "20px" }}
        >
          <p
            className="font-sans font-semibold mb-4"
            style={{ fontSize: "14px", letterSpacing: "0.04em", color: "#1A1A1A" }}
          >
            {identityFrame.notForYouLabel}
          </p>
          <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0 }}>
            {identityFrame.notForYou.map((item, i) => (
              <li
                key={i}
                className="font-sans"
                style={{ fontSize: "16px", lineHeight: 1.65, color: "#6B7280" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p
          className="font-sans font-semibold"
          style={{ fontSize: "17px", lineHeight: 1.6, color: "#1A1A1A" }}
        >
          {identityFrame.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
