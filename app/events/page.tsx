'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Clock, MapPin, CalendarDays } from "lucide-react";
import { fetchEvents, EventItem } from "@/services/api";
import { useLanguage } from "@/context/LanguageContext";

export default function EventsPage() {
  const { t, lang } = useLanguage();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(data);
      setLoading(false);
    });
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

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ព្រឹត្តិការណ៍ទាំងអស់' : 'Events'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 font-khmer">
          {lang === 'kh' ? 'ព្រឹត្តិការណ៍នាពេលខាងមុខ' : 'Upcoming Events'}
        </h1>
        
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse h-32 bg-white border border-gray-100 rounded-sm"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {events.map((event) => {
              const { day, displayMonth, timeRange, durationDays } = getEventDateInfo(event);
              const displayLocation = lang === 'kh' ? event.location.khmer : event.location.english;
              return (
                <div key={event.id} className="flex bg-white hover:shadow-md transition-shadow border border-gray-100 rounded-sm overflow-hidden group">
                  <div className="bg-secondary text-primary-dark p-6 flex flex-col justify-center items-center min-w-[100px] text-center border-r border-gray-100 group-hover:bg-secondary-dark transition-colors">
                    <span className="text-4xl font-bold font-serif leading-none">{day}</span>
                    <span className={`text-sm tracking-widest mt-2 font-medium uppercase ${lang === 'kh' ? 'font-khmer text-xs' : ''}`}>
                      {displayMonth}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-center flex-1">
                    <h3 className={`text-xl font-serif font-bold text-gray-900 mb-3 leading-tight ${lang === 'kh' ? 'font-khmer' : ''}`}>
                      <Link href={`/events/${event.id}`} className="hover:text-primary">
                        {lang === 'kh' ? event.title.khmer : event.title.english}
                      </Link>
                    </h3>
                    <div className="space-y-2 mt-auto">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-3 opacity-70 flex-shrink-0" />
                        <span className={lang === 'kh' ? 'font-khmer text-xs' : ''}>{timeRange}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarDays className="w-4 h-4 mr-3 opacity-70 flex-shrink-0" />
                        <span className={lang === 'kh' ? 'font-khmer text-xs' : ''}>
                          {lang === 'kh' 
                            ? `រយៈពេល៖ ${durationDays} ថ្ងៃ` 
                            : `Duration: ${durationDays} ${durationDays > 1 ? 'Days' : 'Day'}`}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-3 opacity-70 flex-shrink-0" />
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
                          <span className={lang === 'kh' ? 'font-khmer text-xs' : ''}>{displayLocation}</span>
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
    </main>
  );
}
