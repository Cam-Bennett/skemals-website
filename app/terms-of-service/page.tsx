import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service — Pallume",
  description:
    "Terms of service for Pallume AI execution system and coaching services.",
  alternates: {
    canonical: "https://pallume.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service — Pallume",
    description:
      "Terms of service for Pallume AI execution system and coaching services.",
    url: "https://pallume.com/terms-of-service",
    siteName: "Pallume",
    type: "website",
  },
};

const EFFECTIVE_DATE = "March 29, 2026";

type Section = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

const sections: Section[] = [
  {
    heading: "1. Services",
    paragraphs: [
      "Pallume provides custom AI execution system design and ongoing coaching services to accepted clients. Services include intake analysis, system configuration, deployment support, weekly review, and periodic refinement — collectively referred to as the 'System' or 'Pallume Journal.'",
      "All services are delivered remotely. Scope, cadence, and deliverables are defined per engagement path (Path A, Path B, or Path C) and confirmed in writing prior to payment.",
    ],
  },
  {
    heading: "2. Eligibility and Acceptance",
    paragraphs: [
      "Pallume is not an open enrollment service. Access requires completing an application, a discovery conversation with Camden Bennett, and mutual agreement to proceed. Submission of an application does not constitute acceptance. Camden Bennett reserves the right to decline any application without explanation.",
      "By engaging Pallume services, you represent that you are at least 18 years old, have the legal authority to enter into this agreement, and are a business owner or operator with an active working context the system can address.",
    ],
  },
  {
    heading: "3. Payment",
    paragraphs: [
      "Payment terms are confirmed in writing before your engagement begins. Path A and Path B engagements are billed monthly. Path C is scoped and quoted per project.",
      "Payment is due at the start of each billing period. Failure to pay within 7 days of the due date may result in suspension of services. All fees are stated in USD.",
      "Prices are subject to change. Any price change will be communicated at least 30 days before it takes effect and will not apply to current billing periods already paid.",
    ],
  },
  {
    heading: "4. Cancellation",
    paragraphs: [
      "You may cancel a monthly engagement with 30 days written notice to camden@pallume.com. No partial refunds are issued for the current billing period. Cancellation takes effect at the end of the paid period.",
      "Path C project engagements are governed by the scope document agreed upon at project start. Cancellation of a project engagement mid-delivery does not entitle the client to a refund of amounts already paid.",
      "Pallume reserves the right to terminate any engagement immediately if a client engages in abusive behavior, misrepresents material information during intake, or violates any part of these terms. In such cases, no refund will be issued for the current period.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    paragraphs: [
      "You retain ownership of all content you provide — business data, goals, journal entries, and any other information submitted during the engagement.",
      "The methodology, frameworks, system architecture, and coaching processes developed and used by Pallume are the intellectual property of Camden Bennett and Pallume. System configurations created for you during your engagement are yours to use. You may not resell, sublicense, or distribute them as a service to others.",
      "Pallume retains the right to reference the existence of client engagements in aggregate or anonymized form for marketing purposes unless you request otherwise in writing.",
    ],
  },
  {
    heading: "6. No Guarantee of Results",
    paragraphs: [
      "Pallume provides execution systems and coaching. We do not guarantee specific business outcomes, revenue figures, productivity improvements, or any other measurable result.",
      "The effectiveness of any system depends on your participation, consistency, and follow-through. Pallume is a tool and a thinking partner — not a substitute for your own decision-making, judgment, or effort.",
    ],
  },
  {
    heading: "7. Confidentiality",
    paragraphs: [
      "All information you share during intake, coaching sessions, and system use is treated as confidential. Pallume will not share your personal business information with third parties without your consent, except as required by law.",
      "You agree to keep any proprietary frameworks, system prompts, or materials provided by Pallume confidential and not share them publicly or with competitors.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Pallume and Camden Bennett are not liable for any indirect, incidental, consequential, or punitive damages arising from your use of the service.",
      "Our total liability to you for any claim arising under these terms is limited to the total amount you paid to Pallume in the 90 days preceding the claim.",
    ],
  },
  {
    heading: "9. Governing Law",
    paragraphs: [
      "These terms are governed by the laws of the State of Wyoming, without regard to conflict-of-law principles. Any dispute arising from these terms or the services will be resolved in the courts of Sublette County, Wyoming.",
    ],
  },
  {
    heading: "10. Changes to These Terms",
    paragraphs: [
      "Pallume may update these terms from time to time. Material changes will be communicated by email at least 14 days before they take effect. Continued use of services after the effective date constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "11. Contact",
    paragraphs: [
      "Questions about these terms can be directed to:",
    ],
    list: [
      "Email: camden@pallume.com",
      "Phone: 801-910-6528",
      "Mailing address: Pallume, Pinedale, Wyoming 82941",
    ],
  },
];

const termsBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pallume.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms of Service",
      item: "https://pallume.com/terms-of-service",
    },
  ],
};

export default function TermsPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsBreadcrumb) }}
      />
      <Nav />

      {/* ── Header ───────────────────────────────────────────────── */}
      <SectionWrapper>
        <div style={{ maxWidth: "720px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            Legal
          </p>
          <h1
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Terms of Service
          </h1>
          <p
            className="font-body text-muted"
            style={{ fontSize: "14px" }}
          >
            Effective {EFFECTIVE_DATE}
          </p>
        </div>
      </SectionWrapper>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <SectionWrapper variant="light" style={{ paddingTop: "0" }}>
        <div
          style={{
            maxWidth: "720px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "56px",
          }}
        >
          <div className="flex flex-col" style={{ gap: "48px" }}>
            {sections.map((section) => (
              <div key={section.heading}>
                <h2
                  className="font-heading font-bold text-text-main mb-4"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {section.heading}
                </h2>
                <div className="flex flex-col" style={{ gap: "16px" }}>
                  {section.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="font-body text-text-soft"
                      style={{ fontSize: "16px", lineHeight: 1.8 }}
                    >
                      {para}
                    </p>
                  ))}
                  {section.list && (
                    <ul
                      className="flex flex-col"
                      style={{ gap: "8px", listStyle: "none", padding: 0, marginTop: "4px" }}
                    >
                      {section.list.map((item, i) => (
                        <li
                          key={i}
                          className="font-body text-text-soft flex items-start gap-3"
                          style={{ fontSize: "16px", lineHeight: 1.7 }}
                        >
                          <span style={{ color: "#DC2626", flexShrink: 0, marginTop: "2px" }}>—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
