'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen, Clock, Wifi } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PhotoGallery from '@/components/PhotoGallery';

export default function SelfStudyPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const photos = [
    { src: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000', alt: 'Library reading area' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000', alt: 'Quiet study pods' },
    { src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000', alt: 'Bookshelves and desks' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="relative z-20 text-center px-4 py-16">
          <BookOpen className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {kh ? 'ទីតាំងស្វ័យសិក្សា' : 'Self-Study Areas'}
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Student Life</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'ទីតាំងស្វ័យសិក្សា' : 'Self-Study Areas'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Facilities</h3>
              <ul className="space-y-3">
                <li><Link href="/student-life/facilities/self-study" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'ទីតាំងស្វ័យសិក្សា' : 'Self-Study Areas'}</Link></li>
                <li><Link href="/student-life/facilities/dormitory" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អន្តេវាសិកដ្ឋាន' : 'Dormitory'}</Link></li>
                <li><Link href="/student-life/facilities/canteen" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អាហារដ្ឋាន' : 'Canteen'}</Link></li>
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{kh ? 'បណ្ណាល័យ និងកន្លែងអានសៀវភៅ' : 'Library & Reading Spaces'}</h2>
            <div className="w-16 h-1 bg-secondary mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {kh 
                ? 'យើងមានបណ្ណាល័យធំទូលាយ និងទីតាំងស្ងប់ស្ងាត់បំពាក់ដោយម៉ាស៊ីនត្រជាក់ អ៊ីនធឺណិតល្បឿនលឿន សម្រាប់និស្សិតធ្វើការស្រាវជ្រាវ និងស្វ័យសិក្សា។' 
                : 'Our modern library and dedicated quiet zones provide the perfect environment for focus, equipped with high-speed Wi-Fi and extensive academic resources.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm flex items-center gap-4">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-gray-900">{kh ? 'ម៉ោងប្រតិបត្តិការ' : 'Opening Hours'}</h4>
                  <p className="text-gray-600">8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm flex items-center gap-4">
                <Wifi className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-gray-900">{kh ? 'សេវាកម្មអ៊ីនធឺណិត' : 'Internet Service'}</h4>
                  <p className="text-gray-600">{kh ? 'Wi-Fi ល្បឿនលឿនឥតគិតថ្លៃ' : 'Free High-Speed Wi-Fi'}</p>
                </div>
              </div>
            </div>

            <PhotoGallery photos={photos} />
          </div>
        </div>
      </div>
    </main>
  );
}
