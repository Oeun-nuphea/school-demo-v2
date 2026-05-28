'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Globe, ArrowRight } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function ActivitiesPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1529070538774-1843cb1665e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="International Activities"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'សកម្មភាពអន្តរជាតិ' : 'International Activities'}
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto font-khmer">
            {t(info.opportunities.study_tours_abroad.title)}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Student Life</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'សកម្មភាពអន្តរជាតិ' : 'International Activities'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Student Life</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/student-life/schedules" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'វេនសិក្សា' : 'Study Schedules'}</Link>
                </li>
                <li>
                  <Link href="/student-life/activities" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'សកម្មភាពអន្តរជាតិ' : 'International Activities'}</Link>
                </li>
                <li>
                  <Link href="/student-life/internships" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'កម្មសិក្សា និងការងារ' : 'Internships & Jobs'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
              {t(info.opportunities.study_tours_abroad.title)}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {lang === 'kh' ? 'យើងជឿជាក់ថាបទពិសោធន៍អន្តរជាតិមានសារៈសំខាន់សម្រាប់ការអភិវឌ្ឍន៍ភាពជាអ្នកដឹកនាំនាពេលអនាគត។' : 'We believe that global exposure is crucial to developing well-rounded future leaders. Explore our study tours and international exchange programs.'}
            </p>

            <div className="space-y-6">
              {info.opportunities.study_tours_abroad.details.map((detail, idx) => (
                <div key={idx} className="flex items-start bg-white p-8 border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mr-6 flex-shrink-0">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                      {lang === 'kh' ? `កម្មវិធីអន្តរជាតិ ${idx + 1}` : `Global Program ${idx + 1}`}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-khmer">{t(detail)}</p>
                    <button className="mt-4 text-primary font-semibold hover:text-primary-light flex items-center text-sm">
                      {lang === 'kh' ? 'ស្វែងយល់បន្ថែម' : 'Learn more'} <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
