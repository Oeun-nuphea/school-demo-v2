'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Plane, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PhotoGallery from '@/components/PhotoGallery';

export default function StudentExchangePage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const exchangePhotos = [
    { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000', alt: 'Students at partner university' },
    { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000', alt: 'International student group' },
    { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000', alt: 'Students studying abroad' },
    { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000', alt: 'Cultural exchange event' }
  ];

  const benefits = [
    { en: 'Experience different cultures and educational systems.', kh: 'ទទួលបានបទពិសោធន៍ពីវប្បធម៌ និងប្រព័ន្ធអប់រំថ្មីៗ។' },
    { en: 'Develop a global network of friends and professionals.', kh: 'កសាងបណ្តាញទំនាក់ទំនងជាមួយមិត្តភ័ក្តិ និងអ្នកជំនាញជុំវិញពិភពលោក។' },
    { en: 'Improve foreign language proficiency through immersion.', kh: 'ពង្រឹងសមត្ថភាពភាសាបរទេសតាមរយៈការអនុវត្តផ្ទាល់។' },
    { en: 'Enhance your resume and future employability.', kh: 'បង្កើនតម្លៃប្រវត្តិរូបសង្ខេប (CV) សម្រាប់ការងារនាពេលអនាគត។' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <Plane className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការផ្លាស់ប្តូរនិស្សិត' : 'Student Exchange & Mobility'}
          </h1>
          <p className={`text-lg text-white/75 font-sans max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh 
              ? 'ពង្រីកការយល់ដឹងរបស់អ្នកតាមរយៈការសិក្សានៅក្រៅប្រទេស។' 
              : 'Broaden your horizons through international study experiences.'}
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
            {kh ? 'ការផ្លាស់ប្តូរនិស្សិត' : 'Student Exchange'}
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
                  <Link href="/international/exchange/lecturer" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការផ្លាស់ប្តូរសាស្ត្រាចារ្យ' : 'Lecturer Exchange'}</Link>
                </li>
                <li>
                  <Link href="/international/exchange/student" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'ការផ្លាស់ប្តូរនិស្សិត' : 'Student Exchange'}</Link>
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
                {kh ? 'អំពីកម្មវិធីផ្លាស់ប្តូរនិស្សិត' : 'About the Program'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <p className={`text-lg text-gray-700 leading-relaxed mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh 
                  ? 'កម្មវិធីផ្លាស់ប្តូរនិស្សិត (Student Mobility) ត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ឱកាសឱ្យនិស្សិតរបស់យើងបានទៅសិក្សានៅសាកលវិទ្យាល័យដៃគូនៅបរទេសរយៈពេលមួយឆមាស ឬមួយឆ្នាំ។' 
                  : 'Our Student Mobility program is designed to give our students the opportunity to study abroad at one of our partner universities for a semester or a full academic year.'}
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-sm">
                <h3 className={`text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 ${kh ? 'font-khmer' : ''}`}>
                  <Globe className="w-5 h-5 text-primary" />
                  {kh ? 'អត្ថប្រយោជន៍នៃការចូលរួម' : 'Benefits of Participating'}
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className={kh ? 'font-khmer' : ''}>{kh ? benefit.kh : benefit.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Historical Photos Gallery */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'សកម្មភាពផ្លាស់ប្តូរនិស្សិតកន្លងមក' : 'Historical Exchange Moments'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <p className={`text-gray-700 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh 
                  ? 'ទិដ្ឋភាពនៃការសិក្សា និងការផ្លាស់ប្តូរវប្បធម៌របស់និស្សិតយើងនៅសាកលវិទ្យាល័យដៃគូកន្លងមក។' 
                  : 'A look back at the academic and cultural experiences of our past exchange students.'}
              </p>
              <PhotoGallery photos={exchangePhotos} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
