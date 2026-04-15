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

      <SectionWrapper variant="light">
        <div style={{ maxWidth: "720px", marginBottom: "56px" }}>
          <h1
            className="font-serif font-semibold mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              color: "#1A1A1A",
            }}
          >
            {privacyPolicy.title}
          </h1>
          <p className="font-sans" style={{ fontSize: "13px", lineHeight: 1.8, color: "#6B7280" }}>
            Effective Date: {privacyPolicy.effectiveDate} · Last Updated: {privacyPolicy.lastUpdated}
            <br />
            {privacyPolicy.contact} · {privacyPolicy.location}
          </p>
        </div>

        <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "48px" }}>
          {privacyPolicy.sections.map((section, i) => (
            <div
              key={i}
              style={{ paddingTop: "40px", borderTop: "1px solid #E5E1D8" }}
            >
              <h2
                className="font-serif font-semibold mb-4"
                style={{ fontSize: "18px", color: "#1A1A1A" }}
              >
                {section.heading}
              </h2>

              {section.body && (
                <>
                  {section.body.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="font-sans mb-4"
                      style={{ fontSize: "15px", lineHeight: 1.85, color: "#6B7280" }}
                    >
                      {para}
                    </p>
                  ))}
                </>
              )}

              {"subsections" in section && section.subsections && (
                <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {section.subsections.map((sub, j) => (
                    <li key={j} className="font-sans" style={{ fontSize: "15px", lineHeight: 1.85, color: "#6B7280" }}>
                      <span className="font-semibold" style={{ color: "#1A1A1A" }}>{sub.label}</span>{" "}
                      {sub.text}
                    </li>
                  ))}
                </ul>
              )}

              {"list" in section && section.list && (
                <ul style={{ paddingLeft: "20px", margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {section.list.map((item, j) => (
                    <li key={j} className="font-sans" style={{ fontSize: "15px", lineHeight: 1.85, color: "#6B7280" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {"footer" in section && section.footer && (
                <p className="font-sans mt-4" style={{ fontSize: "15px", lineHeight: 1.85, color: "#6B7280" }}>
                  {section.footer}
                </p>
              )}

              {"contact" in section && section.contact && (
                <div className="font-sans mt-2" style={{ fontSize: "15px", lineHeight: 2, color: "#6B7280" }}>
                  <p className="font-semibold" style={{ color: "#1A1A1A" }}>{section.contact.name}</p>
                  <p>{section.contact.company}</p>
                  <a
                    href={`mailto:${section.contact.email}`}
                    className="text-gold hover:opacity-80 transition-opacity"
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
