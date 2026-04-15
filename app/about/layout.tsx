import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Camden Bennett — Pallume",
  description:
    "Camden Bennett built Pallume for himself before offering it to clients. 15 years in the Navy. Real estate broker. Founder of an AI execution system that runs every morning.",
  alternates: {
    canonical: "https://pallume.com/about",
  },
  openGraph: {
    title: "About Camden Bennett — Pallume",
    description:
      "Camden Bennett built Pallume for himself before offering it to clients. 15 years in the Navy. Real estate broker. Founder of an AI execution system that runs every morning.",
    url: "https://pallume.com/about",
    siteName: "Pallume",
    type: "website",
  },
};

const aboutBreadcrumb = {
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
      name: "About",
      item: "https://pallume.com/about",
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }}
      />
      {children}
    </>
  );
}
