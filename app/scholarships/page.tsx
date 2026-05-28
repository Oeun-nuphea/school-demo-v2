'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Award, CheckCircle, Info } from "lucide-react";
import info from "../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function ScholarshipsPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md font-khmer">
            {t(info.scholarship_conditions.title)}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {lang === 'kh' ? 'ឱកាសទទួលបានការគាំទ្រហិរញ្ញវត្ថុសម្រាប់ការសិក្សារបស់អ្នក' : 'Financial support opportunities for your academic journey.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{t(info.scholarship_conditions.title)}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-6">
          <Award className="w-10 h-10 text-secondary mr-4" />
          <h2 className="text-3xl font-serif font-bold text-gray-900 font-khmer">
            {lang === 'kh' ? 'អាហារូបករណ៍ ១០០%' : '100% Scholarship Programs'}
          </h2>
        </div>
        <div className="w-16 h-1 bg-secondary mb-10"></div>
        
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          {lang === 'kh' 
            ? 'វិទ្យាស្ថានអាស៊ី កម្ពុជា ផ្តល់ជូននូវឱកាសអាហារូបករណ៍ជាច្រើនដល់និស្សិតឆ្នើម ដើម្បីជួយសម្រួលដល់ការសិក្សា និងការអភិវឌ្ឍន៍ខ្លួនដោយគ្មានក្តីបារម្ភពីបញ្ហាហិរញ្ញវត្ថុ។' 
            : 'Asian Institute of Cambodia offers extensive scholarship opportunities to outstanding students to facilitate their studies and personal development without financial worries.'}
        </p>

        <div className="space-y-8">
          {info.scholarship_conditions.categories.map((category, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-primary/5 px-6 py-4 border-b border-gray-100 flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-bold text-primary font-khmer">{t(category.level)}</h3>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-700 leading-relaxed font-khmer">
                  {t(category.condition)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Section */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-sm">
          <div className="flex items-start">
            <Info className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 font-khmer">{lang === 'kh' ? 'ចំណាំ' : 'Note'}</h4>
              <p className="text-gray-700 font-khmer">
                {t(info.scholarship_conditions.note)}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link 
            href="/apply" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-secondary rounded-sm hover:bg-secondary-dark transition-colors shadow-md"
          >
            {lang === 'kh' ? 'ដាក់ពាក្យឥឡូវនេះ' : 'Apply Now'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
