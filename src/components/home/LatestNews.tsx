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

  const formatTime = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      const hoursStr = hours < 10 ? '0' + hours : hours;
      return `${hoursStr}:${minutesStr} ${ampm}`;
    } catch {
      return '';
    }
  };

  const getEventDateInfo = (event: EventItem) => {
    const dateObj = new Date(event.startDate);
    const day = dateObj.getDate();
    const monthEn = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const monthKhmerMap: { [key: string]: string } = {
      'JAN': 'មករា', 'FEB': 'កុម្ភៈ', 'MAR': 'មីនា', 'APR': 'មេសា', 'MAY': 'ឧសភា', 'JUN': 'មិថុនា',
      'JUL': 'កក្កដា', 'AUG': 'សីហា', 'SEP': 'កញ្ញា', 'OCT': 'តុលា', 'NOV': 'វិច្ឆិកា', 'DEC': 'ធ្នូ'
    };
    const monthKh = monthKhmerMap[monthEn] || monthEn;
    const displayMonth = lang === 'kh' ? monthKh : monthEn;

    // Time & Date range
    let timeRange = '';
    try {
      const startFormatted = dateObj.toLocaleDateString(lang === 'kh' ? 'km-KH' : 'en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const startT = formatTime(event.startDate);

      if (!event.endDate) {
        timeRange = lang === 'kh' ? `${startFormatted} នៅម៉ោង ${startT}` : `${startFormatted} at ${startT}`;
      } else {
        const end = new Date(event.endDate);
        const endFormatted = end.toLocaleDateString(lang === 'kh' ? 'km-KH' : 'en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
        const endT = formatTime(event.endDate);

        if (startFormatted === endFormatted) {
          timeRange = `${startFormatted} | ${startT} - ${endT}`;
        } else {
          timeRange = `${startFormatted} (${startT}) - ${endFormatted} (${endT})`;
        }
      }
    } catch {
      timeRange = lang === 'kh' ? 'មិនទាន់កំណត់កាលបរិច្ឆេទ' : 'Not scheduled';
    }

    return { day, displayMonth, timeRange };
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-8 border-b pb-4">
              <div>
                <h2 className={`text-3xl font-serif font-bold text-primary ${lang === 'kh' ? 'font-khmer' : ''}`}>
                  {lang === 'kh' ? 'ព័ត៌មានវិទ្យាស្ថាន' : 'News'}
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
                {events.map((event) => {
                  const { day, displayMonth, timeRange } = getEventDateInfo(event);
                  const displayLocation = lang === 'kh' ? event.location.khmer : event.location.english;
                  return (
                    <div key={event.id} className="flex bg-gray-50 hover:bg-gray-100 transition-colors border uni-border rounded-sm overflow-hidden">
                      <div className="bg-primary text-white p-4 flex flex-col justify-center items-center min-w-[80px] text-center border-r border-primary-light">
                        <span className="text-2xl font-bold font-serif leading-none">{day}</span>
                        <span className={`text-xs tracking-widest mt-1 font-medium ${lang === 'kh' ? 'font-khmer text-[11px]' : ''}`}>{displayMonth}</span>
                      </div>
                      <div className="p-4 flex-1">
                        <h3 className={`font-serif font-bold text-gray-900 mb-2 leading-tight ${lang === 'kh' ? 'font-khmer' : ''}`}>
                          <Link href={`/events/${event.id}`} className="hover:text-primary">{lang === 'kh' ? event.title.khmer : event.title.english}</Link>
                        </h3>
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-2 flex-shrink-0" />
                            <span className={lang === 'kh' ? 'font-khmer' : ''}>{timeRange}</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <MapPin className="w-3 h-3 mr-2 flex-shrink-0" />
                            {event.isVirtual && event.virtualLink ? (
                              <a 
                                href={event.virtualLink.startsWith('http') ? event.virtualLink : `https://${event.virtualLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline break-all"
                              >
                                {event.virtualLink}
                              </a>
                            ) : (
                              <span className={lang === 'kh' ? 'font-khmer' : ''}>{displayLocation}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
