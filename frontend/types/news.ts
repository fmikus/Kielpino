export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  category?: string;
  author?: string;
}

export interface NewsResponse {
  news: NewsItem[];
  total: number;
  page: number;
  hasMore: boolean;
}
