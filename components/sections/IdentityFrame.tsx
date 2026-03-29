import { identityFrame } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function IdentityFrame() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl">
        {/* Eyebrow only */}
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-8"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          {identityFrame.eyebrow}
        </p>

        {/* Intro paragraphs */}
        <div className="flex flex-col gap-5 mb-12">
          {identityFrame.intro.map((p, i) => (
            <p
              key={i}
              className="font-body text-text-soft"
              style={{ fontSize: "17px", lineHeight: 1.75 }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* For you list */}
        <div className="mb-10">
          <p
            className="font-body font-semibold text-text-main mb-4"
            style={{ fontSize: "14px", letterSpacing: "0.04em" }}
          >
            {identityFrame.forYouLabel}
          </p>
          <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0 }}>
            {identityFrame.forYou.map((item, i) => (
              <li
                key={i}
                className="font-body text-text-soft flex gap-3"
                style={{ fontSize: "16px", lineHeight: 1.65 }}
              >
                <span className="text-primary mt-1 flex-shrink-0" style={{ fontSize: "12px" }}>
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Not for you list — red left border signals exclusion */}
        <div
          className="mb-12"
          style={{
            borderLeft: "3px solid #DC2626",
            paddingLeft: "20px",
          }}
        >
          <p
            className="font-body font-semibold text-text-main mb-4"
            style={{ fontSize: "14px", letterSpacing: "0.04em" }}
          >
            {identityFrame.notForYouLabel}
          </p>
          <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0 }}>
            {identityFrame.notForYou.map((item, i) => (
              <li
                key={i}
                className="font-body text-text-soft"
                style={{ fontSize: "16px", lineHeight: 1.65 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Closing line */}
        <p
          className="font-body font-semibold text-text-main"
          style={{ fontSize: "17px", lineHeight: 1.6 }}
        >
          {identityFrame.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
