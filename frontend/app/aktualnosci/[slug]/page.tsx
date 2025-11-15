import { notFound } from "next/navigation";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

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
            <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-blue-600">Zdjęcie wkrótce</p>
              </div>
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

            <div className="prose prose-lg max-w-none">
              {news.content.split('\n').map((paragraph: string, index: number) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.replace('### ', '')}</h3>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="ml-6">{paragraph.replace('- ', '')}</li>;
                } else if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                  return <p key={index} className="font-bold my-2">{paragraph.replace(/\*\*/g, '')}</p>;
                } else if (paragraph.trim()) {
                  return <p key={index} className="my-4">{paragraph}</p>;
                }
                return null;
              })}
            </div>

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
