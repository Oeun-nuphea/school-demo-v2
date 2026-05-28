'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function IntakeDatesPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Intake Dates"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'កាលបរិច្ឆេទចូលរៀន' : 'Intake Dates'}
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto font-khmer">
            {lang === 'kh' ? 'វគ្គសិក្សាថ្មី និងការទទួលពាក្យ' : 'Important deadlines and upcoming semesters.'}
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
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'កាលបរិច្ឆេទចូលរៀន' : 'Intake Dates'}</span>
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
                  <Link href="/admissions/bachelor" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</Link>
                </li>
                <li>
                  <Link href="/admissions/intake-dates" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'កាលបរិច្ឆេទចូលរៀន' : 'Intake Dates'}</Link>
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
              {lang === 'kh' ? 'វគ្គចូលរៀនបន្ទាប់' : 'Upcoming Intakes'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {lang === 'kh' ? 'យើងផ្តល់ជូនវគ្គចូលរៀនជាច្រើនលើកក្នុងមួយឆ្នាំ។ សូមរួសរាន់ដាក់ពាក្យឱ្យបានមុនកាលកំណត់។' : 'We offer multiple intakes throughout the year. Ensure you submit your application well before the deadlines associated with these dates.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {info.intake_dates.map((intakeObj, idx) => {
                return (
                  <div key={idx} className="bg-white border border-gray-100 p-8 rounded-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 z-0 group-hover:bg-primary-light/10 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <Calendar className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-secondary mb-2 font-khmer">
                        {t(intakeObj.intake)}
                      </h3>
                      <p className="text-gray-700 text-lg mb-6 font-khmer">{t(intakeObj.date)}</p>
                      
                      <Link href="/admissions/apply" className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors">
                        {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'Apply for this intake'} <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Admission Requirements */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-sm">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 font-khmer">{t(info.admission_requirements.title)}</h3>
              <p className="text-gray-700 font-khmer leading-relaxed">
                {t(info.admission_requirements.description)}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
