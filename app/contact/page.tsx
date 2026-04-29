import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Btn from "@/components/ui/Btn";
import { contact } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Contact — Pallume",
  description:
    "Start with the application form. Six questions, three minutes. Camden reviews every submission personally and responds within 24 hours.",
  alternates: {
    canonical: "https://pallume.com/contact",
  },
  openGraph: {
    title: "Contact — Pallume",
    description:
      "Start with the application form. Six questions, three minutes. Camden reviews every submission personally and responds within 24 hours.",
    url: "https://pallume.com/contact",
    siteName: "Pallume",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@camdenbennett",
    title: "Contact — Pallume",
    description:
      "Start with the application form. Six questions, three minutes. Camden reviews every submission personally and responds within 24 hours.",
  },
};

const contactBreadcrumb = {
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
      name: "Contact",
      item: "https://pallume.com/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }}
      />
      <Nav />

      {/* ── Main section ─────────────────────────────────────────── */}
      <section
        style={{
          background: "#0F1B2D",
          padding: "80px 24px 96px",
        }}
      >
        <div
          className="max-w-site mx-auto w-full"
        >
        <div style={{ maxWidth: "640px" }}>
          {/* Eyebrow */}
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {contact.eyebrow}
          </p>

          {/* Headline */}
          <h1
            className="font-heading font-bold text-text-main mb-6"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {contact.headline}
          </h1>

          {/* Body */}
          <p
            className="font-body text-text-soft mb-5"
            style={{ fontSize: "17px", lineHeight: 1.8, maxWidth: "520px" }}
          >
            {contact.body}
          </p>
          <p
            className="font-body text-text-soft mb-10"
            style={{ fontSize: "17px", lineHeight: 1.8, maxWidth: "520px" }}
          >
            {contact.body2}
          </p>

          {/* CTA */}
          <Btn as="a" href={contact.buttonHref} size="lg">
            {contact.buttonLabel}
          </Btn>

          {/* Direct contact block */}
          <div
            style={{
              marginTop: "56px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              className="font-body font-semibold text-text-soft mb-4"
              style={{ fontSize: "15px", letterSpacing: "0.01em" }}
            >
              {contact.directContact.label}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${contact.directContact.email}`}
                className="font-body text-text-soft hover:text-primary"
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
              >
                {contact.directContact.email}
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
