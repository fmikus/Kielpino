import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import MarkdownContent from "@/components/MarkdownContent";

interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getNews(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080'}/api/news/${slug}`,
      { cache: 'no-store' }
    );

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const news = await getNews(slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {news.coverImage && (
            <div className="relative h-96 w-full overflow-hidden">
              <Image
                src={news.coverImage}
                alt={news.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          )}

          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <time dateTime={news.publishedAt}>
                {format(new Date(news.publishedAt), "d MMMM yyyy", { locale: pl })}
              </time>
              {news.category && (
                <>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 font-medium">{news.category}</span>
                </>
              )}
              {news.author && (
                <>
                  <span className="mx-2">•</span>
                  <span>Autor: {news.author}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl font-bold mb-6">{news.title}</h1>

            {news.excerpt && (
              <p className="text-xl text-gray-600 mb-8 italic border-l-4 border-blue-500 pl-4">
                {news.excerpt}
              </p>
            )}

            <MarkdownContent content={news.content} />

            <div className="mt-12 pt-6 border-t">
              <a
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Powrót do aktualności
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
