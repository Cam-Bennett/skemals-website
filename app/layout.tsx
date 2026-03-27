import type { Metadata } from "next";
import { Space_Grotesk, Karla } from "next/font/google";
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
    images: [
      {
        url: "https://skemals.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkemaLS — Your Own AI Accountability System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkemaLS — Your Own AI Accountability System",
    description:
      "Custom-configured AI accountability for business owners who can't close the gap between intention and result. Built by Camden Bennett.",
    images: ["https://skemals.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${karla.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
