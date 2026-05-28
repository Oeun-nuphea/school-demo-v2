'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { fetchNews, NewsItem } from "@/services/api";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsPage() {
  const { t, lang } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ព័ត៌មានទាំងអស់' : 'News'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 font-khmer">
          {lang === 'kh' ? 'ព័ត៌មាន និងសេចក្តីប្រកាស' : 'News & Announcements'}
        </h1>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse bg-white rounded-sm border border-gray-100 p-4">
                <div className="w-full h-48 bg-gray-200 rounded-sm mb-4"></div>
                <div className="h-4 bg-gray-200 w-1/4 mb-3"></div>
                <div className="h-6 bg-gray-200 w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 w-full mb-2"></div>
                <div className="h-4 bg-gray-200 w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                {item.imageUrl && (
                  <Link href={`/news/${item.id}`} className="block h-48 overflow-hidden relative">
                    <img 
                      src={item.imageUrl} 
                      alt={t(item.title)}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3 text-xs font-semibold tracking-wider uppercase">
                    <span className={`text-primary ${lang === 'kh' ? 'font-khmer' : ''}`}>{t(item.category)}</span>
                    <span className="text-gray-400">|</span>
                    <span className={`text-gray-500 ${lang === 'kh' ? 'font-khmer' : ''}`}>{t(item.date)}</span>
                  </div>
                  <h3 className={`text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors ${lang === 'kh' ? 'font-khmer' : ''}`}>
                    <Link href={`/news/${item.id}`}>{t(item.title)}</Link>
                  </h3>
                  <p className={`text-gray-600 line-clamp-3 mb-4 flex-1 ${lang === 'kh' ? 'font-khmer text-sm' : ''}`}>
                    {t(item.excerpt)}
                  </p>
                  <Link href={`/news/${item.id}`} className="text-primary font-bold hover:text-primary-dark inline-flex items-center text-sm">
                    {lang === 'kh' ? 'អានបន្ត' : 'Read more'} <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
