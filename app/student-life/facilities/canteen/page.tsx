'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Coffee, Utensils, Droplets } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PhotoGallery from '@/components/PhotoGallery';

export default function CanteenPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const photos = [
    { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000', alt: 'Canteen food serving area' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000', alt: 'Students eating in the canteen' },
    { src: 'https://images.unsplash.com/photo-1498837167922-41c53b448ce9?q=80&w=1000', alt: 'Healthy food options' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="relative z-20 text-center px-4 py-16">
          <Coffee className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {kh ? 'អាហារដ្ឋាន' : 'Canteen'}
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Student Life</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'អាហារដ្ឋាន' : 'Canteen'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Facilities</h3>
              <ul className="space-y-3">
                <li><Link href="/student-life/facilities/self-study" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ទីតាំងស្វ័យសិក្សា' : 'Self-Study Areas'}</Link></li>
                <li><Link href="/student-life/facilities/dormitory" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អន្តេវាសិកដ្ឋាន' : 'Dormitory'}</Link></li>
                <li><Link href="/student-life/facilities/canteen" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'អាហារដ្ឋាន' : 'Canteen'}</Link></li>
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{kh ? 'អាហារមានអនាម័យ និងតម្លៃសមរម្យ' : 'Healthy & Affordable Dining'}</h2>
            <div className="w-16 h-1 bg-secondary mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {kh 
                ? 'អាហារដ្ឋានរបស់យើងផ្តល់ជូននូវម្ហូបអាហារ ភេសជ្ជៈ ដែលមានអនាម័យខ្ពស់ រសជាតិឈ្ងុយឆ្ងាញ់ និងមានតម្លៃសមរម្យសម្រាប់និស្សិត។' 
                : 'Our campus canteen offers a wide variety of hygienic, delicious, and affordable meals, snacks, and beverages to keep students energized throughout the day.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm flex items-center gap-4">
                <Utensils className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-gray-900">{kh ? 'ជម្រើសអាហារ' : 'Food Options'}</h4>
                  <p className="text-gray-600">{kh ? 'អាហារខ្មែរ និងអន្តរជាតិ' : 'Local and international cuisine'}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm flex items-center gap-4">
                <Droplets className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-gray-900">{kh ? 'ភេសជ្ជៈ' : 'Beverages'}</h4>
                  <p className="text-gray-600">{kh ? 'កាហ្វេ តែ និងទឹកផ្លែឈើស្រស់' : 'Coffee, tea, and fresh juices'}</p>
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
