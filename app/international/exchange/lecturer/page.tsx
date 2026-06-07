'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Presentation, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PhotoGallery from '@/components/PhotoGallery';

export default function LecturerExchangePage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const exchangePhotos = [
    { src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000', alt: 'Lecturer presenting to international students' },
    { src: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000', alt: 'International faculty collaboration' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000', alt: 'Guest lecturer giving a seminar' },
    { src: 'https://images.unsplash.com/photo-1577415124228-29d1f27fd54d?q=80&w=1000', alt: 'Faculty meeting with partner university' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <Presentation className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការផ្លាស់ប្តូរសាស្ត្រាចារ្យ' : 'Lecturer Exchange'}
          </h1>
          <p className={`text-lg text-white/75 font-sans max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh 
              ? 'ការចែករំលែកចំណេះដឹងឆ្លងទ្វីប និងការស្រាវជ្រាវរួមគ្នា។' 
              : 'Fostering cross-border knowledge sharing and collaborative research.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">International Relations</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការផ្លាស់ប្តូរសាស្ត្រាចារ្យ' : 'Lecturer Exchange'}
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Exchange Programs</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/international/exchange/lecturer" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'ការផ្លាស់ប្តូរសាស្ត្រាចារ្យ' : 'Lecturer Exchange'}</Link>
                </li>
                <li>
                  <Link href="/international/exchange/student" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការផ្លាស់ប្តូរនិស្សិត' : 'Student Exchange'}</Link>
                </li>
                <li className="pt-4 border-t border-gray-200 mt-4">
                  <h4 className="text-sm font-bold text-gray-400 mb-2">{kh ? 'ដៃគូសហការ' : 'Partnerships'}</h4>
                  <Link href="/international/partners/asian" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ដៃគូអាស៊ី' : 'Asian Partners'}</Link>
                </li>
                <li className="mt-2">
                  <Link href="/international/partners/european" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ដៃគូអឺរ៉ុប' : 'European Partners'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            
            <div className="mb-12">
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ការផ្លាស់ប្តូរបទពិសោធន៍បង្រៀន' : 'Teaching Excellence Across Borders'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 border border-gray-200 p-8 rounded-sm mb-12">
                <div className="flex-1">
                  <h3 className={`text-xl font-bold text-primary mb-4 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'សាស្ត្រាចារ្យកិត្តិយសអន្តរជាតិ' : 'Visiting Faculty Program'}
                  </h3>
                  <p className={`text-gray-700 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                    {kh 
                      ? 'យើងសូមស្វាគមន៍សាស្ត្រាចារ្យពីសាកលវិទ្យាល័យដៃគូមកចូលរួមបង្រៀន ចែករំលែកបទពិសោធន៍ និងធ្វើការស្រាវជ្រាវរួមគ្នា។' 
                      : 'We regularly host esteemed faculty members from our partner universities around the world, enriching our curriculum with diverse, global perspectives and joint research initiatives.'}
                  </p>
                </div>
                <Users className="w-24 h-24 text-gray-300 hidden md:block" />
              </div>
            </div>

            {/* Historical Photos Gallery */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'សកម្មភាពកន្លងមក' : 'Historical Exchange Moments'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <p className={`text-gray-700 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh 
                  ? 'ទិដ្ឋភាពនៃការចូលរួមចំណែករបស់សាស្ត្រាចារ្យជាតិ និងអន្តរជាតិក្នុងកម្មវិធីផ្លាស់ប្តូរ។' 
                  : 'A photographic history of our academic collaborations and guest lectures.'}
              </p>
              <PhotoGallery photos={exchangePhotos} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
