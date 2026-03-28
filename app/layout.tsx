import type { Metadata } from "next";
import { Space_Grotesk, Karla } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkemaLS — Your Own AI Accountability System",
  description:
    "Custom AI accountability systems for business owners who can't stay consistent. Built by Camden Bennett. 10 minutes every morning. Configured for you, not a template.",
  metadataBase: new URL("https://skemals.com"),
  openGraph: {
    title: "SkemaLS — Your Own AI Accountability System",
    description:
      "Custom-configured AI accountability for business owners who can't close the gap between intention and result. Built by Camden Bennett.",
    url: "https://skemals.com",
    siteName: "SkemaLS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkemaLS — Your Own AI Accountability System",
    description:
      "Custom-configured AI accountability for business owners who can't close the gap between intention and result. Built by Camden Bennett.",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://skemals.com/#organization",
      name: "SkemaLS",
      url: "https://skemals.com",
      description:
        "Custom AI accountability systems for business owners. Built by Camden Bennett.",
      founder: { "@id": "https://skemals.com/#person" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pinedale",
        addressRegion: "WY",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "801-910-6528",
        contactType: "customer service",
      },
    },
    {
      "@type": "Person",
      "@id": "https://skemals.com/#person",
      name: "Camden Bennett",
      jobTitle: "Founder, SkemaLS",
      description:
        "Former U.S. Navy Diver and Intelligence Officer. Real estate broker. Founder of SkemaLS AI accountability coaching.",
      url: "https://skemals.com/about",
      image: "https://skemals.com/_next/image?url=%2Fimages%2Fcamden-headshot.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${karla.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
      <GoogleAnalytics gaId="G-N49NZX240X" />
    </html>
  );
}
