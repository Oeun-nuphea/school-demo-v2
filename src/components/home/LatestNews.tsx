"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchNews, fetchEvents, NewsItem, EventItem } from "@/services/api";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LatestNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, lang } = useLanguage();

  useEffect(() => {
    async function loadData() {
      try {
        const [newsData, eventsData] = await Promise.all([
          fetchNews(),
          fetchEvents()
        ]);
        setNews(newsData);
        setEvents(eventsData);
      } catch (error) {
        console.error("Failed to load news and events", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-8 border-b pb-4">
              <div>
                <h2 className={`text-3xl font-serif font-bold text-primary ${lang === 'kh' ? 'font-khmer' : ''}`}>
                  {lang === 'kh' ? 'ព័ត៌មានវិទ្យាស្ថាន' : 'University News'}
                </h2>
                <p className={`text-gray-500 mt-2 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                  {lang === 'kh' ? 'សេចក្តីប្រកាស និងព្រឹត្តិការណ៍ថ្មីៗ' : 'Latest announcements and academic updates'}
                </p>
              </div>
              <Link href="/news" className={`text-primary font-medium hover:text-primary-light flex items-center text-sm mb-1 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                {lang === 'kh' ? 'ព័ត៌មានទាំងអស់' : 'All News'} <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse flex flex-col sm:flex-row gap-6">
                    <div className="w-full sm:w-48 h-32 bg-gray-200 rounded-sm"></div>
                    <div className="flex-1 space-y-3 py-2">
                      <div className="h-4 bg-gray-200 w-1/4"></div>
                      <div className="h-6 bg-gray-200 w-3/4"></div>
                      <div className="h-4 bg-gray-200 w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {news.map((item) => (
                  <article key={item.id} className="flex flex-col sm:flex-row gap-6 group">
                    {item.imageUrl && (
                      <div className="w-full sm:w-56 h-40 relative overflow-hidden rounded-sm flex-shrink-0">
                        {/* Use standard img tag for ease without configuring next domains */}
                        <img 
                          src={item.imageUrl} 
                          alt={t(item.title)}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2 text-xs font-semibold tracking-wider uppercase">
                        <span className={`text-primary ${lang === 'kh' ? 'font-khmer' : ''}`}>{t(item.category)}</span>
                        <span className="text-gray-400">|</span>
                        <span className={`text-gray-500 ${lang === 'kh' ? 'font-khmer' : ''}`}>{t(item.date)}</span>
                      </div>
                      <h3 className={`text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug ${lang === 'kh' ? 'font-khmer' : ''}`}>
                        <Link href={`/news/${item.id}`}>{t(item.title)}</Link>
                      </h3>
                      <p className={`text-gray-600 line-clamp-2 text-sm ${lang === 'kh' ? 'font-khmer' : ''}`}>{t(item.excerpt)}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Events Section */}
          <div>
            <div className="flex justify-between items-end mb-8 border-b pb-4">
              <div>
                <h2 className={`text-3xl font-serif font-bold text-primary ${lang === 'kh' ? 'font-khmer' : ''}`}>
                  {lang === 'kh' ? 'ព្រឹត្តិការណ៍នាពេលខាងមុខ' : 'Upcoming Events'}
                </h2>
                <p className={`text-gray-500 mt-2 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                  {lang === 'kh' ? 'ចូលរួមជាមួយសហគមន៍របស់យើង' : 'Join our vibrant campus community'}
                </p>
              </div>
              <Link href="/events" className={`text-primary font-medium hover:text-primary-light flex items-center text-sm mb-1 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                {lang === 'kh' ? 'ព្រឹត្តិការណ៍ទាំងអស់' : 'All Events'} <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse h-24 bg-gray-100 rounded-sm"></div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex bg-gray-50 hover:bg-gray-100 transition-colors border uni-border rounded-sm overflow-hidden">
                    <div className="bg-primary text-white p-4 flex flex-col justify-center items-center min-w-[80px] text-center border-r border-primary-light">
                      <span className="text-2xl font-bold font-serif leading-none">{event.date}</span>
                      <span className={`text-xs tracking-widest mt-1 font-medium ${lang === 'kh' ? 'font-khmer text-[11px]' : ''}`}>{t(event.month)}</span>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className={`font-serif font-bold text-gray-900 mb-2 leading-tight ${lang === 'kh' ? 'font-khmer' : ''}`}>
                        <Link href={`/events/${event.id}`} className="hover:text-primary">{t(event.title)}</Link>
                      </h3>
                      <div className="space-y-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-2" />
                          <span className={lang === 'kh' ? 'font-khmer' : ''}>{event.time}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-2" />
                          <span className={lang === 'kh' ? 'font-khmer' : ''}>{t(event.location)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
