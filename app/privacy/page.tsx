import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { privacyPolicy } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Pallume",
  description: "Pallume privacy policy. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <Nav />

      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(37,99,235,0.06) 0%, transparent 55%), #0A0A12",
        }}
      >
        {/* Header */}
        <div style={{ maxWidth: "720px", marginBottom: "56px" }}>
          <h1
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {privacyPolicy.title}
          </h1>
          <p className="font-body text-muted" style={{ fontSize: "13px", lineHeight: 1.8 }}>
            Effective Date: {privacyPolicy.effectiveDate} · Last Updated: {privacyPolicy.lastUpdated}
            <br />
            {privacyPolicy.contact} · {privacyPolicy.location}
          </p>
        </div>

        {/* Sections */}
        <div
          style={{
            maxWidth: "720px",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          {privacyPolicy.sections.map((section, i) => (
            <div
              key={i}
              style={{
                paddingTop: "40px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h2
                className="font-heading font-semibold text-text-main mb-4"
                style={{ fontSize: "18px", letterSpacing: "-0.01em" }}
              >
                {section.heading}
              </h2>

              {section.body && (
                <>
                  {section.body.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="font-body text-text-soft mb-4"
                      style={{ fontSize: "15px", lineHeight: 1.85 }}
                    >
                      {para}
                    </p>
                  ))}
                </>
              )}

              {"subsections" in section && section.subsections && (
                <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {section.subsections.map((sub, j) => (
                    <li key={j} className="font-body text-text-soft" style={{ fontSize: "15px", lineHeight: 1.85 }}>
                      <span className="text-text-main font-semibold">{sub.label}</span>{" "}
                      {sub.text}
                    </li>
                  ))}
                </ul>
              )}

              {"list" in section && section.list && (
                <ul style={{ paddingLeft: "20px", margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {section.list.map((item, j) => (
                    <li key={j} className="font-body text-text-soft" style={{ fontSize: "15px", lineHeight: 1.85 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {"footer" in section && section.footer && (
                <p className="font-body text-text-soft mt-4" style={{ fontSize: "15px", lineHeight: 1.85 }}>
                  {section.footer}
                </p>
              )}

              {"contact" in section && section.contact && (
                <div className="font-body text-text-soft mt-2" style={{ fontSize: "15px", lineHeight: 2 }}>
                  <p className="text-text-main font-semibold">{section.contact.name}</p>
                  <p>{section.contact.company}</p>
                  <a
                    href={`mailto:${section.contact.email}`}
                    className="text-primary hover:opacity-80 transition-opacity"
                    style={{ textDecoration: "none" }}
                  >
                    {section.contact.email}
                  </a>
                  <p>{section.contact.location}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
