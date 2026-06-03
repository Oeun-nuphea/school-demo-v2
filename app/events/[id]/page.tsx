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
          <article className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
            {(() => {
              const { day, displayMonth, timeRange, durationDays } = getEventDateInfo(eventItem);
              const displayLocation = lang === 'kh' ? eventItem.location.khmer : eventItem.location.english;
              return (
                <div className="bg-primary text-white p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-10">
                    <CalendarDays className="w-64 h-64" />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block bg-secondary text-primary-dark font-bold px-4 py-2 rounded-sm mb-6 font-khmer shadow-sm text-sm">
                      {day} {displayMonth}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight font-khmer drop-shadow-sm">
                      {lang === 'kh' ? eventItem.title.khmer : eventItem.title.english}
                    </h1>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 mt-8">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                        <span className="text-lg font-khmer">{timeRange}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                        <span className="text-lg font-khmer">
                          {lang === 'kh' 
                            ? `រយៈពេល៖ ${durationDays} ថ្ងៃ` 
                            : `Duration: ${durationDays} ${durationDays > 1 ? 'Days' : 'Day'}`}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-secondary flex-shrink-0" />
                        {eventItem.isVirtual && eventItem.virtualLink ? (
                          <a 
                            href={eventItem.virtualLink.startsWith('http') ? eventItem.virtualLink : `https://${eventItem.virtualLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-khmer text-secondary hover:underline break-all"
                          >
                            {eventItem.virtualLink}
                          </a>
                        ) : (
                          <span className="text-lg font-khmer">{displayLocation}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Event Content */}
            <div className="p-8 md:p-12">
              <div className="prose max-w-none text-gray-700 leading-relaxed font-khmer text-lg mb-10">
                <p>
                  {lang === 'kh' 
                    ? 'សូមអញ្ជើញចូលរួមកម្មវិធីនេះដើម្បីទទួលបានបទពិសោធន៍ថ្មីៗ និងការចែករំលែកចំណេះដឹងពីវាគ្មិនកិត្តិយស។ កម្មវិធីនេះបើកទូលាយសម្រាប់សិស្ស និស្សិត និងសាធារណជនទូទៅ។' 
                    : 'Join us for this exciting event to gain new experiences and knowledge sharing from our guest speakers. This event is open to all students and the general public.'}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{lang === 'kh' ? 'របៀបវារៈកម្មវិធី' : 'Event Agenda'}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{lang === 'kh' ? 'ការចុះឈ្មោះ និងការស្វាគមន៍' : 'Registration and Welcome'}</li>
                  <li>{lang === 'kh' ? 'សុន្ទរកថាបើកកម្មវិធី' : 'Opening Remarks'}</li>
                  <li>{lang === 'kh' ? 'វគ្គចែករំលែកបទពិសោធន៍' : 'Knowledge Sharing Session'}</li>
                  <li>{lang === 'kh' ? 'សំណួរ និងចម្លើយ' : 'Q&A Session'}</li>
                </ul>
              </div>

            </div>
          </article>
        ) : null}
      </div>
    </main>
  );
}
