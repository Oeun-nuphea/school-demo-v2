'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileSearch, Library } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PublicationsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="relative z-20 text-center px-4 py-16">
          <Library className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {kh ? 'ការបោះពុម្ពផ្សាយ' : 'Publications'}
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Research</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'ការបោះពុម្ពផ្សាយ' : 'Publications'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Research</h3>
              <ul className="space-y-3">
                <li><Link href="/research/journal" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ទស្សនាវដ្តីវិទ្យាសាស្ត្រ' : 'Academic Journal'}</Link></li>
                <li><Link href="/research/publications" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'ការបោះពុម្ពផ្សាយ' : 'Publications'}</Link></li>
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{kh ? 'បណ្ណាល័យស្រាវជ្រាវអនឡាញ' : 'Research Repository'}</h2>
            <div className="w-16 h-1 bg-secondary mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {kh 
                ? 'ស្វែងរករបាយការណ៍ស្រាវជ្រាវ សារណា និងអត្ថបទវិទ្យាសាស្ត្រដែលរៀបចំឡើងដោយសាស្ត្រាចារ្យ និងនិស្សិតរបស់យើង។' 
                : 'Browse through an extensive collection of research reports, thesis papers, and academic articles authored by our faculty and alumni.'}
            </p>

            <div className="space-y-6">
              {[
                {
                  title: { en: 'The Impact of Digital Transformation on SMEs in Cambodia', kh: 'ផលប៉ះពាល់នៃការផ្លាស់ប្តូរឌីជីថលលើសហគ្រាសធុនតូច និងមធ្យមនៅកម្ពុជា' },
                  author: { en: 'Dr. Sok Chenda', kh: 'បណ្ឌិត សុខ ចិន្តា' },
                  year: '2023',
                  category: { en: 'Business Administration', kh: 'គ្រប់គ្រងពាណិជ្ជកម្ម' }
                },
                {
                  title: { en: 'Modern Web Architectures: A Performance Analysis', kh: 'ស្ថាបត្យកម្មគេហទំព័រទំនើប៖ ការវិភាគប្រសិទ្ធភាព' },
                  author: { en: 'Prof. Chan Rithy', kh: 'សាស្ត្រាចារ្យ ចាន់ ឫទ្ធី' },
                  year: '2023',
                  category: { en: 'Computer Science', kh: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ' }
                },
                {
                  title: { en: 'Sustainable Tourism Strategies post-Pandemic', kh: 'យុទ្ធសាស្ត្រទេសចរណ៍ប្រកបដោយនិរន្តរភាពក្រោយជំងឺរាតត្បាត' },
                  author: { en: 'Dr. Meas Maly', kh: 'បណ្ឌិត មាស ម៉ាលី' },
                  year: '2022',
                  category: { en: 'Tourism & Hospitality', kh: 'ទេសចរណ៍ និងបដិសណ្ឋារកិច្ច' }
                }
              ].map((pub, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-sm hover:border-primary/50 transition-colors">
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? pub.title.kh : pub.title.en}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span><strong>{kh ? 'អ្នកនិពន្ធ៖' : 'Author:'}</strong> <span className={kh ? 'font-khmer' : ''}>{kh ? pub.author.kh : pub.author.en}</span></span>
                    <span><strong>{kh ? 'ឆ្នាំ៖' : 'Year:'}</strong> {pub.year}</span>
                    <span><strong>{kh ? 'ផ្នែក៖' : 'Category:'}</strong> <span className={kh ? 'font-khmer' : ''}>{kh ? pub.category.kh : pub.category.en}</span></span>
                  </div>
                  <button className={`mt-4 text-primary font-bold text-sm hover:underline ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'ទាញយក PDF' : 'Download PDF'}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
