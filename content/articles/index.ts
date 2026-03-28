import type { Article } from "./types";
import article1 from "./how-i-built-my-ai-operating-system";
import article2 from "./why-time-blocking-fails-business-owners";

export const articles: Article[] = [article1, article2];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
