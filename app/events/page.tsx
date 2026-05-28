'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Clock, MapPin } from "lucide-react";
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
            {events.map((event) => (
              <div key={event.id} className="flex bg-white hover:shadow-md transition-shadow border border-gray-100 rounded-sm overflow-hidden group">
                <div className="bg-secondary text-primary-dark p-6 flex flex-col justify-center items-center min-w-[100px] text-center border-r border-gray-100 group-hover:bg-secondary-dark transition-colors">
                  <span className="text-4xl font-bold font-serif leading-none">{event.date}</span>
                  <span className={`text-sm tracking-widest mt-2 font-medium uppercase ${lang === 'kh' ? 'font-khmer text-xs' : ''}`}>{t(event.month)}</span>
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                  <h3 className={`text-xl font-serif font-bold text-gray-900 mb-3 leading-tight ${lang === 'kh' ? 'font-khmer' : ''}`}>
                    <Link href={`/events/${event.id}`} className="hover:text-primary">{t(event.title)}</Link>
                  </h3>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-3 opacity-70" />
                      <span className={lang === 'kh' ? 'font-khmer text-xs' : ''}>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 opacity-70" />
                      <span className={lang === 'kh' ? 'font-khmer text-xs' : ''}>{t(event.location)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
