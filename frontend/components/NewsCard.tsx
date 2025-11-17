import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import type { NewsItem } from "@/types/news";

interface NewsCardProps {
  news: NewsItem;
}

const categoryColors: Record<string, string> = {
  "Ogłoszenia": "bg-blue-100 text-blue-800",
  "Wydarzenia": "bg-purple-100 text-purple-800",
  "Infrastruktura": "bg-green-100 text-green-800",
  "Transport": "bg-indigo-100 text-indigo-800",
  "Sport": "bg-orange-100 text-orange-800",
  "Inwestycje": "bg-teal-100 text-teal-800",
  "Kultura": "bg-pink-100 text-pink-800",
  "Społeczność": "bg-amber-100 text-amber-800",
  "default": "bg-gray-100 text-gray-800",
};

export default function NewsCard({ news }: NewsCardProps) {
  const categoryColor = categoryColors[news.category || ""] || categoryColors.default;

  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-80 md:flex-shrink-0">
          {news.coverImage ? (
            <div className="relative h-48 md:h-full w-full overflow-hidden">
              <Image
                src={news.coverImage}
                alt={news.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          ) : (
            <div className="relative h-48 md:h-full w-full bg-gradient-to-br from-green-100 via-green-50 to-blue-50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="text-center p-6 relative z-10">
                <svg className="w-16 h-16 mx-auto text-green-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-green-600 font-medium">Zdjęcie wkrótce</p>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time dateTime={news.publishedAt} className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {format(new Date(news.publishedAt), "d MMMM yyyy", { locale: pl })}
            </time>
            {news.category && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
                {news.category}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors">
            <Link href={`/aktualnosci/${news.slug}`}>
              {news.title}
            </Link>
          </h2>

          {news.excerpt && (
            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
              {news.excerpt}
            </p>
          )}

          <Link
            href={`/aktualnosci/${news.slug}`}
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group/link"
          >
            Czytaj więcej
            <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
