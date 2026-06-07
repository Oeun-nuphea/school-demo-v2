'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TVETProgramsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {kh ? 'កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេស' : 'TVET Programs'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {kh
              ? 'ការអប់រំបណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ។'
              : 'Technical and Vocational Education and Training.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Academic Programs</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេស' : 'TVET Programs'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Programs</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/programs/master" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</Link>
                </li>
                <li>
                  <Link href="/programs/bachelor" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</Link>
                </li>
                <li>
                  <Link href="/programs/associate" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្ររង' : 'Associate Programs'}</Link>
                </li>
                <li>
                  <Link href="/programs/tvet" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេស' : 'TVET Programs'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
              {kh ? 'កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ (TVET)' : 'TVET Education'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {kh 
                ? 'កម្មវិធី TVET របស់យើងផ្តោតលើការអនុវត្តជាក់ស្តែង ដែលផ្តល់ជំនាញពិតប្រាកដសម្រាប់ទីផ្សារការងារ។' 
                : 'Our TVET programs focus on hands-on, practical training that equips students with real-world skills demanded by employers immediately upon graduation.'}
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-sm p-8 text-center">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                {kh ? 'ព័ត៌មានកំពុងរៀបចំ' : 'Content in Progress'}
              </h3>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                {kh 
                  ? 'ព័ត៌មានលម្អិតនៃកម្មវិធីសិក្សា TVET នឹងត្រូវបានអាប់ដេតឆាប់ៗនេះ។' 
                  : 'Detailed module information for our TVET Programs is currently being compiled and will be available here soon.'}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
