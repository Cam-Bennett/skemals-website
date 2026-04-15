import type { Metadata } from "next";
import Image from "next/image";
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
          position: "relative",
          overflow: "hidden",
          background: "#0F1B2D",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          padding: "96px 24px",
        }}
      >
        {/* Full-width background image */}
        <Image
          src="/images/abstract-2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.75, zIndex: 0 }}
        />
        {/* Gradient overlay — dark left (text), open right (colors) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.58) 42%, rgba(15,27,45,0.06) 100%)",
            zIndex: 1,
          }}
        />
        {/* Content */}
        <div
          className="max-w-site mx-auto w-full"
          style={{ position: "relative", zIndex: 2 }}
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
              <a
                href={`tel:${contact.directContact.phone.replace(/\./g, "")}`}
                className="font-body text-text-soft hover:text-primary"
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
              >
                {contact.directContact.phone}
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
