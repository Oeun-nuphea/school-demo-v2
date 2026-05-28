'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, GraduationCap } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function MasterProgramsPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Master Programs"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto font-khmer">
            {lang === 'kh' ? 'កម្មវិធីសិក្សាថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់ (Master Degree)' : 'Advance your career with our rigorous postgraduate degrees.'}
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
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</span>
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
                  <Link href="/admissions/master" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</Link>
                </li>
                <li>
                  <Link href="/admissions/bachelor" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</Link>
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
              {lang === 'kh' ? 'កម្មវិធីសិក្សាថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Postgraduate Degrees'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {lang === 'kh' ? 'កម្មវិធីថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់របស់យើងផ្តល់នូវចំណេះដឹងស៊ីជម្រៅ ជំនាញភាពជាអ្នកដឹកនាំ និងបណ្តាញវិជ្ជាជីវៈដ៏ទូលំទូលាយ។' : 'Designed for working professionals and ambitious scholars, our Master\'s programs provide advanced knowledge, leadership skills, and an expanded professional network.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {info.academic_programs.master_programs.map((program, idx) => (
                <div key={idx} className="flex items-start p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <GraduationCap className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-1">{t(program)}</h3>
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
