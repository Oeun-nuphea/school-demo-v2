'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Briefcase, Globe, Building2, TrendingUp, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import info from '../../../information.json';
import { useLanguage } from '@/context/LanguageContext';

const destinations = [
  { en: 'China', kh: 'ចិន' },
  { en: 'Japan', kh: 'ជប៉ុន' },
  { en: 'South Korea', kh: 'កូរ៉េ' },
  { en: 'Vietnam', kh: 'វៀតណាម' },
  { en: 'Singapore', kh: 'សិង្ហបុរី' },
  { en: 'Malaysia', kh: 'ម៉ាឡេស៊ី' },
  { en: 'Laos', kh: 'ឡាវ' },
];

const stats = [
  { icon: Building2, value: '100+', label: { en: 'Partner Companies', kh: 'ក្រុមហ៊ុនដៃគូ' } },
  { icon: Globe, value: '8+', label: { en: 'Countries', kh: 'ប្រទេស' } },
  { icon: TrendingUp, value: '$300–$2,500', label: { en: 'Monthly Salary Range', kh: 'ប្រាក់ខែ/ខែ' } },
  { icon: Briefcase, value: '95%', label: { en: 'Job Placement Rate', kh: 'អត្រាចូលការងារ' } },
];

export default function InternshipsPage() {
  const { t, lang } = useLanguage();
  const kh = lang === 'kh';
  const jobs = info.opportunities.jobs_inside_and_outside_country;
  const tours = info.opportunities.study_tours_abroad;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[240px] flex items-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl">
            <h1 className={`text-4xl md:text-5xl font-serif font-bold text-white mb-3 ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'កម្មសិក្សា និងឱកាសការងារ' : 'Internships & Jobs'}
            </h1>
            <p className={`text-white/75 text-lg ${kh ? 'font-khmer' : ''}`}>
              {kh
                ? 'ភ្ជាប់ជាមួយក្រុមហ៊ុនជាតិ និងអន្តរជាតិ — ចាប់ផ្ដើមអាជីពរបស់អ្នកមុនបញ្ចប់ការសិក្សា។'
                : 'Connect with local and global employers — launch your career before you graduate.'}
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/student-life" className="hover:text-primary transition-colors">{kh ? 'ជីវិតនិស្សិត' : 'Student Life'}</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'កម្មសិក្សា និងការងារ' : 'Internships & Jobs'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">
                {kh ? 'ជីវិតនិស្សិត' : 'Student Life'}
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/student-life/schedules', en: 'Study Schedules', kh: 'វេនសិក្សា' },
                  { href: '/student-life/internships', en: 'Internships & Jobs', kh: 'កម្មសិក្សា និងការងារ', active: true },
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

          {/* Main content */}
          <div className="lg:w-3/4 space-y-14">

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-primary/5 border border-primary/10 rounded-sm p-5 text-center">
                  <s.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                  <div className={`text-xs text-gray-500 ${kh ? 'font-khmer' : ''}`}>{kh ? s.label.kh : s.label.en}</div>
                </div>
              ))}
            </div>

            {/* Domestic jobs */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-secondary" />
                <h2 className={`text-2xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ឱកាសការងារក្នុងប្រទេស' : 'Jobs Inside Cambodia'}
                </h2>
              </div>
              <div className="w-12 h-0.5 bg-secondary mb-6" />

              <div className="space-y-4">
                {jobs.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 border border-gray-100 rounded-sm hover:border-primary/20 hover:bg-gray-50 transition-all">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className={`text-gray-700 text-sm leading-relaxed ${kh ? 'font-khmer' : ''}`}>{t(detail)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Tours / International */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-secondary" />
                <h2 className={`text-2xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                  {t(tours.title)}
                </h2>
              </div>
              <div className="w-12 h-0.5 bg-secondary mb-6" />

              <div className="space-y-4 mb-8">
                {tours.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 border border-gray-100 rounded-sm hover:border-primary/20 hover:bg-gray-50 transition-all">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className={`text-gray-700 text-sm leading-relaxed ${kh ? 'font-khmer' : ''}`}>{t(detail)}</p>
                  </div>
                ))}
              </div>

              {/* Destination countries */}
              <div>
                <p className={`text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ប្រទេសដៃគូ' : 'Partner Countries'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {destinations.map((d, i) => (
                    <span key={i} className={`inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full ${kh ? 'font-khmer' : ''}`}>
                      <MapPin className="w-3 h-3 text-secondary" />
                      {kh ? d.kh : d.en}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Services CTA */}
            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'មជ្ឈមណ្ឌលសេវាកម្មការងារ' : 'Career Services Center'}
                </h3>
                <p className={`text-white/75 text-sm ${kh ? 'font-khmer' : ''}`}>
                  {kh
                    ? 'យើងជួយអ្នករៀបចំ CV, ត្រៀមសម្ភាស, និងភ្ជាប់ជាមួយក្រុមហ៊ុនដៃគូ។'
                    : 'We help you build your CV, prepare for interviews, and connect with our partner companies.'}
                </p>
              </div>
              <Link
                href="/apply"
                className={`inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-3 rounded-sm whitespace-nowrap transition-colors ${kh ? 'font-khmer' : ''}`}
              >
                {kh ? 'ទំនាក់ទំនងយើង' : 'Get in Touch'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
