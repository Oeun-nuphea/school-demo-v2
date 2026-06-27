'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home, Shield, Bed } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PhotoGallery from '@/components/PhotoGallery';

export default function DormitoryPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const photos = [
    { src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000', alt: 'Dormitory Bedroom' },
    { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000', alt: 'Common Lounge Area' },
    { src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000', alt: 'Dormitory Exterior' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="relative z-20 text-center px-4 py-16">
          <Home className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {kh ? 'អន្តេវាសិកដ្ឋាន' : 'Dormitory'}
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Student Life</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'អន្តេវាសិកដ្ឋាន' : 'Dormitory'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Student Life</h3>
              <ul className="space-y-3">
                {[
                  { href: '/student-life/schedules', en: 'Study Schedules', kh: 'វេនសិក្សា' },
                  { href: '/student-life/facilities/self-study', en: 'Self-Study Area', kh: 'កន្លែងស្វ័យសិក្សា' },
                  { href: '/student-life/facilities/dormitory', en: 'Dormitory', kh: 'អន្តេវាសិកដ្ឋាន', active: true },
                  { href: '/student-life/facilities/canteen', en: 'Canteen', kh: 'អាហារដ្ឋាន' },
                  { href: '/student-life/extra-curricular', en: 'Extra-Curricular', kh: 'សកម្មភាពក្រៅម៉ោង' },
                  { href: '/student-life/graduation', en: 'Graduation', kh: 'ការបញ្ចប់ការសិក្សា' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block pl-3 transition-colors border-l-2 ${item.active ? 'text-primary font-bold border-primary' : 'text-gray-600 hover:text-primary border-transparent'} ${kh ? 'font-khmer' : ''}`}
                    >
                      {kh ? item.kh : item.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{kh ? 'កន្លែងស្នាក់នៅមានសុវត្ថិភាព' : 'Safe & Comfortable Living'}</h2>
            <div className="w-16 h-1 bg-secondary mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {kh 
                ? 'អន្តេវាសិកដ្ឋានរបស់យើងផ្តល់ជូននូវកន្លែងស្នាក់នៅប្រកបដោយផាសុកភាព សុវត្ថិភាពខ្ពស់២៤ម៉ោង និងមានបំពាក់នូវសម្ភារៈប្រើប្រាស់ចាំបាច់គ្រប់គ្រាន់សម្រាប់និស្សិតមកពីតាមបណ្តាខេត្ត។' 
                : 'Our student dormitories offer safe, comfortable, and fully furnished accommodations with 24/7 security, providing a home away from home for provincial and international students.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm flex items-center gap-4">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-gray-900">{kh ? 'សន្តិសុខសុវត្ថិភាព' : '24/7 Security'}</h4>
                  <p className="text-gray-600">{kh ? 'មានកាមេរ៉ាសុវត្ថិភាព និងសន្តិសុខយាមកាម' : 'CCTV and on-site guards'}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm flex items-center gap-4">
                <Bed className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-gray-900">{kh ? 'សម្ភារៈប្រើប្រាស់' : 'Furnished Rooms'}</h4>
                  <p className="text-gray-600">{kh ? 'គ្រែ ទូ និងម៉ាស៊ីនត្រជាក់' : 'Beds, wardrobes, and AC included'}</p>
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
