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
    "AI-powered accountability coaching for business owners who know what to do but can't stay consistent. Custom-configured for your goals, your patterns, and the specific ways you get stuck.",
  metadataBase: new URL("https://skemals.com"),
  openGraph: {
    title: "SkemaLS — Your Own AI Accountability System",
    description:
      "For business owners who know what to do but can't stay consistent. Custom-configured for your goals, your patterns, and the specific ways you get stuck.",
    url: "https://skemals.com",
    siteName: "SkemaLS",
    locale: "en_US",
    type: "website",
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
