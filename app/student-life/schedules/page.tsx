'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function SchedulesPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'វេនសិក្សា' : 'Study Schedules'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {lang === 'kh' ? 'ជម្រើសនៃវេនសិក្សាដើម្បីសម្រួលដល់ការសិក្សារបស់អ្នក' : 'Flexible learning shifts to accommodate your lifestyle.'}
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
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'វេនសិក្សា' : 'Study Schedules'}</span>
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
                  <Link href="/student-life/schedules" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'វេនសិក្សា' : 'Study Schedules'}</Link>
                </li>
                <li>
                  <Link href="/student-life/activities" className="block text-gray-600 hover:text-primary border-l-2 border-transparent pl-3 transition-colors">{lang === 'kh' ? 'សកម្មភាពអន្តរជាតិ' : 'International Activities'}</Link>
                </li>
                <li>
                  <Link href="/student-life/internships" className="block text-gray-600 hover:text-primary border-l-2 border-transparent pl-3 transition-colors">{lang === 'kh' ? 'កម្មសិក្សា និងការងារ' : 'Internships & Jobs'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
              {lang === 'kh' ? 'ជម្រើសនៃវេនសិក្សា' : 'Class Schedules'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {lang === 'kh' ? 'យើងផ្តល់ជូននូវជម្រើសវេនសិក្សាជាច្រើនដើម្បីឆ្លើយតបទៅនឹងតម្រូវការរបស់និស្សិត មិនថាអ្នកជានិស្សិតពេញម៉ោង ឬអ្នកកំពុងធ្វើការនោះទេ។' : 'We offer multiple class shifts to accommodate the diverse needs of our students, whether you are a full-time student or a working professional balancing your career and education.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Monday to Friday */}
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-6 flex items-center font-khmer">
                  <Clock className="w-6 h-6 mr-3" /> 
                  {lang === 'kh' ? info.study_schedules.monday_to_friday.khmer_label : info.study_schedules.monday_to_friday.english_label}
                </h3>
                <div className="space-y-4">
                  {info.study_schedules.monday_to_friday.shifts.map((schedule, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:border-primary/50 transition-colors">
                      <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 font-khmer">{t(schedule.shift)}</span>
                      <span className="block text-xl font-medium text-gray-900 font-khmer">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekend */}
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center font-khmer">
                  <Clock className="w-6 h-6 mr-3 text-secondary" /> 
                  {lang === 'kh' ? info.study_schedules.saturday_and_sunday.khmer_label : info.study_schedules.saturday_and_sunday.english_label}
                </h3>
                <div className="space-y-4">
                  {info.study_schedules.saturday_and_sunday.shifts.map((schedule, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:border-secondary/50 transition-colors">
                      <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 font-khmer">{t(schedule.shift)}</span>
                      <span className="block text-xl font-medium text-gray-900 font-khmer">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
