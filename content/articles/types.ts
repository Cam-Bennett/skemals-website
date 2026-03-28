export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  sections: ArticleSection[];
}

export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "bold-paragraph"; label: string; text: string }
  | { type: "italic-paragraph"; text: string };
