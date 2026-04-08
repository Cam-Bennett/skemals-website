import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Camden Bennett — SkemaLS",
  description:
    "Camden Bennett built SkemaLS for himself before offering it to clients. 15 years in the Navy. Real estate broker. Founder of an AI execution system that runs every morning.",
  alternates: {
    canonical: "https://skemals.com/about",
  },
  openGraph: {
    title: "About Camden Bennett — SkemaLS",
    description:
      "Camden Bennett built SkemaLS for himself before offering it to clients. 15 years in the Navy. Real estate broker. Founder of an AI execution system that runs every morning.",
    url: "https://skemals.com/about",
    siteName: "SkemaLS",
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
      item: "https://skemals.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://skemals.com/about",
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
