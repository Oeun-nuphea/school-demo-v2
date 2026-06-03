'use client'
import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { ChevronRight, Clock, MapPin, CalendarDays } from "lucide-react";
import { fetchEvents, EventItem } from "@/services/api";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { t, lang } = useLanguage();
  const [eventItem, setEventItem] = useState<EventItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents().then((data) => {
      const item = data.find(n => n.id === resolvedParams.id);
      if (item) {
        setEventItem(item);
      } else {
        setEventItem(null);
      }
      setLoading(false);
    });
  }, [resolvedParams.id]);

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

    // Duration in days
    let durationDays = 1;
    try {
      const start = new Date(event.startDate);
      const end = new Date(event.endDate);
      const startD = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      const endD = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      const diffTime = endD.getTime() - startD.getTime();
      if (diffTime >= 0) {
        durationDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      }
    } catch {}

    return { day, displayMonth, timeRange, durationDays };
  };

  if (!loading && !eventItem) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
          <Link href="/events" className="hover:text-primary transition-colors">{lang === 'kh' ? 'ព្រឹត្តិការណ៍' : 'Events'}</Link>
          {eventItem && (
            <>
              <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
              <span className="text-gray-900 font-medium truncate">{lang === 'kh' ? eventItem.title.khmer : eventItem.title.english}</span>
            </>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div className="animate-pulse bg-white p-8 rounded-sm shadow-sm border border-gray-100">
            <div className="h-8 bg-gray-200 w-3/4 mb-4"></div>
            <div className="h-24 bg-gray-200 w-full mb-8 rounded-sm"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 w-full"></div>
              <div className="h-4 bg-gray-200 w-3/4"></div>
            </div>
          </div>
        ) : eventItem ? (
          <article className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            {(() => {
              const { day, displayMonth, timeRange, durationDays } = getEventDateInfo(eventItem);
              const displayLocation = lang === 'kh' ? eventItem.location.khmer : eventItem.location.english;
              return (
                <div className="bg-primary text-white p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 hidden md:block">
                    <CalendarDays className="w-48 h-48 text-white" strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block bg-secondary text-primary-dark font-bold px-3.5 py-1.5 rounded-sm mb-4 text-xs tracking-wider uppercase font-sans">
                      {day} {displayMonth}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight drop-shadow-sm">
                      {lang === 'kh' ? eventItem.title.khmer : eventItem.title.english}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:text-base font-medium opacity-90">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                        <span className={lang === 'kh' ? 'font-khmer' : ''}>{timeRange}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                        <span className={lang === 'kh' ? 'font-khmer' : ''}>
                          {lang === 'kh' 
                            ? `រយៈពេល៖ ${durationDays} ថ្ងៃ` 
                            : `Duration: ${durationDays} ${durationDays > 1 ? 'Days' : 'Day'}`}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm md:text-base font-medium opacity-90 mt-4">
                      <MapPin className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                      {eventItem.isVirtual && eventItem.virtualLink ? (
                        <a 
                          href={eventItem.virtualLink.startsWith('http') ? eventItem.virtualLink : `https://${eventItem.virtualLink}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:underline break-all"
                        >
                          {eventItem.virtualLink}
                        </a>
                      ) : (
                        <span className={lang === 'kh' ? 'font-khmer' : ''}>{displayLocation}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Event Content */}
            <div className="p-8 md:p-12">
              <div 
                className="max-w-none text-gray-700 leading-relaxed font-khmer text-lg [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_li]:mt-1"
                dangerouslySetInnerHTML={{ 
                  __html: (lang === 'kh' ? eventItem.description?.khmer : eventItem.description?.english) || '' 
                }} 
              />
            </div>
          </article>
        ) : null}
      </div>
    </main>
  );
}
