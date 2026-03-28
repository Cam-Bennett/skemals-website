import type { Article } from "./types";
import article1 from "./how-i-built-my-ai-operating-system";

export const articles: Article[] = [article1];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
