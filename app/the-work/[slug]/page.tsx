import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";
import { articles, getArticleBySlug } from "@/content/articles";
import type { ArticleSection } from "@/content/articles/types";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — SkemaLS`,
    description: article.excerpt,
  };
}

function renderSection(section: ArticleSection, i: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-heading font-bold text-text-main"
          style={{
            fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            marginTop: "48px",
            marginBottom: "16px",
          }}
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="font-heading font-semibold text-text-main"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            lineHeight: 1.3,
            marginTop: "32px",
            marginBottom: "12px",
          }}
        >
          {section.text}
        </h3>
      );
    case "italic-paragraph":
      return (
        <p
          key={i}
          className="font-body text-text-soft"
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            fontStyle: "italic",
            paddingLeft: "24px",
            borderLeft: "2px solid rgba(220,38,38,0.4)",
            marginTop: "8px",
            marginBottom: "24px",
          }}
        >
          {section.text}
        </p>
      );
    case "bold-paragraph":
      return (
        <p
          key={i}
          className="font-body text-text-soft"
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            marginBottom: "16px",
          }}
        >
          <strong className="text-text-main font-semibold">
            {section.label}{" "}
          </strong>
          {section.text}
        </p>
      );
    case "paragraph":
    default:
      return (
        <p
          key={i}
          className="font-body text-text-soft"
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            marginBottom: "24px",
          }}
        >
          {section.text}
        </p>
      );
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main style={{ paddingTop: "64px" }}>
      <Nav />

      {/* ── Article header ─────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(220,38,38,0.07) 0%, transparent 55%), #0A0A12",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {article.category}
          </p>
          <h1
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {article.title}
          </h1>
          <p
            className="font-body text-muted"
            style={{ fontSize: "13px", letterSpacing: "0.04em" }}
          >
            {formattedDate}
          </p>
        </div>
      </SectionWrapper>

      {/* ── Article body ───────────────────────────────────────────── */}
      <SectionWrapper bgAlt>
        <div style={{ maxWidth: "680px" }}>
          {article.sections.map((section, i) => renderSection(section, i))}
        </div>
      </SectionWrapper>

      {/* ── Bottom CTA ─────────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 40% 80%, rgba(37,99,235,0.07) 0%, transparent 55%), #0A0A12",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            GET STARTED
          </p>
          <h2
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Find out which path is yours.
          </h2>
          <p
            className="font-body text-text-soft mb-8"
            style={{ fontSize: "16px", lineHeight: 1.8 }}
          >
            Five questions. 90 seconds. No sales call until there&apos;s a fit.
          </p>
          <Btn as="a" href="/#qualifier" size="lg">
            Find Your Path
          </Btn>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
