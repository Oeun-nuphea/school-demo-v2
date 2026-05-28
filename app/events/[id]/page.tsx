'use client'
import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { ChevronRight, Clock, MapPin, CalendarDays, Share2 } from "lucide-react";
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
              <span className="text-gray-900 font-medium truncate">{t(eventItem.title)}</span>
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
            {/* Event Header */}
            <div className="bg-primary text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <CalendarDays className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="inline-block bg-secondary text-primary-dark font-bold px-4 py-2 rounded-sm mb-6 font-khmer shadow-sm text-sm">
                  {eventItem.date} {t(eventItem.month)}
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight font-khmer drop-shadow-sm">
                  {t(eventItem.title)}
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-secondary" />
                    <span className="text-lg font-khmer">{eventItem.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-secondary" />
                    <span className="text-lg font-khmer">{t(eventItem.location)}</span>
                  </div>
                </div>
              </div>
            </div>

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

              <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-100">
                <button className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-sm transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  {lang === 'kh' ? 'ចែករំលែក' : 'Share Event'}
                </button>
                <button className="flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-sm transition-colors ml-auto shadow-sm">
                  {lang === 'kh' ? 'ចុះឈ្មោះចូលរួម' : 'Register to Attend'}
                </button>
              </div>
            </div>
          </article>
        ) : null}
      </div>
    </main>
  );
}
