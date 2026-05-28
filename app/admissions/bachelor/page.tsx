'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, BookOpen } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function BachelorProgramsPage() {
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
            {lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {lang === 'kh' ? 'កម្មវិធីសិក្សាថ្នាក់បរិញ្ញាបត្រ (Bachelor Degree)' : 'Begin your academic journey with our comprehensive undergraduate programs.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Admissions</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Admissions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/admissions/master" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</Link>
                </li>
                <li>
                  <Link href="/admissions/bachelor" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</Link>
                </li>
                <li>
                  <Link href="/admissions/intake-dates" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'កាលបរិច្ឆេទចូលរៀន' : 'Intake Dates'}</Link>
                </li>
                <li>
                  <Link href="/admissions/tuition-fees" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'តម្លៃសិក្សា' : 'Tuition Fees'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
              {lang === 'kh' ? 'កម្មវិធីសិក្សាថ្នាក់បរិញ្ញាបត្រ' : 'Undergraduate Degrees'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {lang === 'kh' ? 'កម្មវិធីថ្នាក់បរិញ្ញាបត្ររបស់យើងផ្តល់នូវមូលដ្ឋានគ្រឹះដ៏រឹងមាំនៃចំណេះដឹងទ្រឹស្តី និងការអនុវត្តជាក់ស្តែង។' : 'Our diverse undergraduate curriculum provides a solid foundation of theoretical knowledge and practical application.'}
            </p>

            <div className="space-y-12">
              {info.academic_programs.bachelor_programs_by_college.map((collegeData, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center">
                    <div className="flex items-center mb-2 md:mb-0">
                      <BookOpen className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                      <h3 className="text-xl font-serif font-bold text-gray-900 font-khmer">{t(collegeData.college_name)}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {collegeData.degrees.map((degree, dIdx) => (
                        <li key={dIdx} className="flex items-start text-gray-700 hover:text-primary transition-colors group">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 mt-2 flex-shrink-0"></span>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors font-khmer">{t(degree)}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
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
