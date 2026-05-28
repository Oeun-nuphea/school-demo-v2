'use client'
import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { ChevronRight, Calendar, Tag } from "lucide-react";
import { fetchNews, NewsItem } from "@/services/api";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { t, lang } = useLanguage();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews().then((data) => {
      const item = data.find(n => n.id === resolvedParams.id);
      if (item) {
        setNewsItem(item);
      } else {
        setNewsItem(null);
      }
      setLoading(false);
    });
  }, [resolvedParams.id]);

  if (!loading && !newsItem) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
          <Link href="/news" className="hover:text-primary transition-colors">{lang === 'kh' ? 'ព័ត៌មាន' : 'News'}</Link>
          {newsItem && (
            <>
              <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
              <span className="text-gray-900 font-medium truncate">{t(newsItem.title)}</span>
            </>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div className="animate-pulse bg-white p-8 rounded-sm shadow-sm border border-gray-100">
            <div className="h-8 bg-gray-200 w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 w-1/4 mb-8"></div>
            <div className="w-full h-80 bg-gray-200 mb-8 rounded-sm"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 w-full"></div>
              <div className="h-4 bg-gray-200 w-full"></div>
              <div className="h-4 bg-gray-200 w-5/6"></div>
            </div>
          </div>
        ) : newsItem ? (
          <article className="bg-white p-6 md:p-10 rounded-sm shadow-sm border border-gray-100">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
              <div className="flex items-center text-primary font-medium bg-primary/5 px-3 py-1 rounded-full">
                <Tag className="w-4 h-4 mr-2" />
                <span className={lang === 'kh' ? 'font-khmer' : ''}>{t(newsItem.category)}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className={lang === 'kh' ? 'font-khmer' : ''}>{t(newsItem.date)}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight font-khmer">
              {t(newsItem.title)}
            </h1>

            {newsItem.imageUrl && (
              <div className="mb-10 w-full max-h-[500px] overflow-hidden rounded-sm relative">
                <img 
                  src={newsItem.imageUrl} 
                  alt={t(newsItem.title)}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            <div className="prose max-w-none text-gray-700 leading-relaxed font-khmer text-lg">
              <p className="font-medium text-xl text-gray-800 mb-6 border-l-4 border-primary pl-4">
                {t(newsItem.excerpt)}
              </p>
              <p className="mb-4">
                {lang === 'kh' 
                  ? 'នេះគឺជាព័ត៌មានលម្អិតបឋម។ វិទ្យាស្ថានអាស៊ី កម្ពុជា បន្តអភិវឌ្ឍគុណភាពអប់រំ និងផ្តល់នូវព័ត៌មានថ្មីៗដល់និស្សិត និងសាធារណជនជាប្រចាំ។' 
                  : 'This is the detailed content placeholder. Asian Institute of Cambodia continuously develops education quality and provides recent updates to students and the public.'}
              </p>
              <p>
                {lang === 'kh'
                  ? 'សូមតាមដានព័ត៌មានបន្ថែមនៅលើគេហទំព័ររបស់យើង។'
                  : 'Stay tuned for more information on our website.'}
              </p>
            </div>
          </article>
        ) : null}
      </div>
    </main>
  );
}
