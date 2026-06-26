'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Globe2, Building2, HandshakeIcon, ArrowRight, Users, BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AsianPartnersPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const partners = [
    {
      country: { en: 'China', kh: 'ប្រទេសចិន' },
      flag: '🇨🇳',
      universities: [
        { name: 'Peking University', dept: { en: 'Business & Law', kh: 'ពាណិជ្ជកម្ម និងច្បាប់' } },
        { name: 'Tsinghua University', dept: { en: 'Engineering & IT', kh: 'វិស្វកម្ម និងព័ត៌មានវិទ្យា' } },
        { name: 'Fudan University', dept: { en: 'Management', kh: 'គ្រប់គ្រង' } },
      ],
      color: 'bg-red-50 border-red-200'
    },
    {
      country: { en: 'Japan', kh: 'ប្រទេសជប៉ុន' },
      flag: '🇯🇵',
      universities: [
        { name: 'University of Tokyo', dept: { en: 'Science & Technology', kh: 'វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា' } },
        { name: 'Kyoto University', dept: { en: 'Humanities & Social Sciences', kh: 'មនុស្សសាស្ត្រ' } },
      ],
      color: 'bg-pink-50 border-pink-200'
    },
    {
      country: { en: 'South Korea', kh: 'ប្រទេសកូរ៉េខាងត្បូង' },
      flag: '🇰🇷',
      universities: [
        { name: 'Seoul National University', dept: { en: 'Business Administration', kh: 'គ្រប់គ្រងពាណិជ្ជកម្ម' } },
        { name: 'Yonsei University', dept: { en: 'International Relations', kh: 'ទំនាក់ទំនងអន្តរជាតិ' } },
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      country: { en: 'Singapore & ASEAN', kh: 'សិង្ហបុរី និងអាស៊ាន' },
      flag: '🇸🇬',
      universities: [
        { name: 'National University of Singapore', dept: { en: 'Various Programs', kh: 'កម្មវិធីផ្សេងៗ' } },
        { name: 'Chulalongkorn University (Thailand)', dept: { en: 'Business & Economics', kh: 'ពាណិជ្ជកម្ម និងសេដ្ឋកិច្ច' } },
        { name: 'Vietnam National University', dept: { en: 'Technology & Computing', kh: 'បច្ចេកវិទ្យា' } },
      ],
      color: 'bg-green-50 border-green-200'
    },
  ];

  const benefits = [
    { en: 'Joint research and publication opportunities', kh: 'ឱកាសស្រាវជ្រាវ និងការបោះពុម្ពផ្សាយរួមគ្នា' },
    { en: 'Student exchange for one semester or one full academic year', kh: 'ការផ្លាស់ប្ដូរនិស្សិតមួយឆមាស ឬមួយឆ្នាំ' },
    { en: 'Dual-degree pathways for eligible students', kh: 'ផ្លូវវិញ្ញាបនប័ត្រពីរសម្រាប់និស្សិតដែលមានលក្ខណៈសម្បត្តិ' },
    { en: 'Visiting lecturer exchanges to enrich curriculum', kh: 'ការផ្លាស់ប្ដូរសាស្ត្រាចារ្យបង្ហាត់ដើម្បីពង្រីកកម្មវិធីសិក្សា' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-blue-800" />
        <div className="absolute inset-0 opacity-10">
          {/* decorative dots grid */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="relative z-20 text-center px-4 py-16">
          <Globe2 className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ដៃគូសហការតំបន់អាស៊ី' : 'Asian Partnerships'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'កិច្ចសហប្រតិបត្តិការដ៏រឹងមាំជាមួយសាកលវិទ្យាល័យកំពូលៗក្នុងតំបន់អាស៊ី' : 'Building strong academic bridges across Asia for our students and faculty.'}
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
          <span className="text-gray-900 font-medium">{kh ? 'ដៃគូអាស៊ី' : 'Asian Partners'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">International</h3>
                <ul className="space-y-3">
                  <li><Link href="/international/exchange/lecturer" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការផ្លាស់ប្ដូរសាស្ត្រាចារ្យ' : 'Lecturer Exchange'}</Link></li>
                  <li><Link href="/international/exchange/student" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការផ្លាស់ប្ដូរនិស្សិត' : 'Student Exchange'}</Link></li>
                  <li className="pt-3 border-t border-gray-200">
                    <Link href="/international/partners/asian" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'ដៃគូអាស៊ី' : 'Asian Partners'}</Link>
                  </li>
                  <li><Link href="/international/partners/european" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ដៃគូអឺរ៉ុប' : 'European Partners'}</Link></li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-sm text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className={`text-sm text-gray-600 mt-1 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ដៃគូសហការក្នុងតំបន់អាស៊ី' : 'Partner Institutions in Asia'}</p>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-12">
            
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'បណ្ដាញទំនាក់ទំនងអាស៊ី' : 'Our Asian Academic Network'}</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className={`text-lg text-gray-700 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'វិទ្យាស្ថានអាស៊ីកម្ពុជា បានបង្កើតកិច្ចព្រមព្រៀងសហប្រតិបត្តិការជាមួយ សាកលវិទ្យាល័យ និងស្ថាប័នសិក្សាឈ្នះជ្រើសនៅទូទាំងអាស៊ី ដើម្បីផ្ដល់ឱ្យនិស្សិត និងសាស្ត្រាចារ្យនូវឱកាសសិក្សា ស្រាវជ្រាវ និងការប្ដូររំដោះ។' : 'The Asian Institute of Cambodia has established formal cooperation agreements with top universities across Asia, providing our students and faculty with unparalleled opportunities for study, research, and cultural exchange.'}
              </p>
            </div>

            {/* Partner Cards */}
            <div className="space-y-6">
              {partners.map((partner, idx) => (
                <div key={idx} className={`border rounded-sm overflow-hidden ${partner.color}`}>
                  <div className="px-6 py-4 border-b border-inherit flex items-center gap-3">
                    <span className="text-2xl">{partner.flag}</span>
                    <h3 className={`text-xl font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? partner.country.kh : partner.country.en}</h3>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {partner.universities.map((uni, uIdx) => (
                        <div key={uIdx} className="flex items-start gap-3">
                          <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-gray-900">{uni.name}</p>
                            <p className={`text-sm text-gray-500 ${kh ? 'font-khmer' : ''}`}>{kh ? uni.dept.kh : uni.dept.en}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Benefits */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <h3 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>{kh ? 'អត្ថប្រយោជន៍នៃការជាដៃគូ' : 'What These Partnerships Offer'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>{kh ? b.kh : b.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-xl font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចាប់អារម្មណ៍ចូលរួមកម្មវិធីផ្លាស់ប្ដូរ?' : 'Interested in an Exchange Program?'}</h3>
                <p className={`text-white/75 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទំនាក់ទំនងការិយាល័យទំនាក់ទំនងអន្តរជាតិ' : 'Contact our International Relations Office for more information.'}</p>
              </div>
              <Link href="/international/exchange/student" className={`flex items-center gap-2 bg-secondary text-primary-dark font-bold px-6 py-3 rounded-sm whitespace-nowrap hover:bg-secondary/90 transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ស្វែងយល់បន្ថែម' : 'Learn More'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
