'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Globe, CheckCircle, ArrowRight, Star, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function InternationalCurriculumPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const highlights = [
    { en: 'Instruction delivered entirely in English by qualified faculty', kh: 'ការបង្រៀនជាភាសាអង់គ្លេសសុទ្ធ ដោយសាស្ត្រាចារ្យមានសមត្ថភាព' },
    { en: 'Curriculum benchmarked against ASEAN & international standards', kh: 'កម្មវិធីស្ថិតតាមស្តង់ដារ ASEAN និងអន្តរជាតិ' },
    { en: 'Credit transfer opportunities with global partner universities', kh: 'ឱកាសផ្ទេរក្រេឌីតសិក្សាជាមួយ សាកលវិទ្យាល័យដៃគូអន្តរជាតិ' },
    { en: 'Strong focus on critical thinking, leadership & entrepreneurship', kh: 'ផ្ដោតខ្លាំងលើការគិតវិចារណ៍ ភាពជាអ្នកដឹកនាំ និងសហគ្រិនភាព' },
    { en: 'Career pathways to Japan, Korea, China, and Southeast Asia', kh: 'ឱកាសការងារនៅប្រទេសជប៉ុន កូរ៉េ ចិន និងអាស៊ីអាគ្នេយ៍' },
  ];

  const partners = [
    { country: 'China', flag: '🇨🇳', universities: ['Yunnan University', 'Guangxi University'] },
    { country: 'Japan', flag: '🇯🇵', universities: ['Partner Universities in Tokyo', 'Technical Institutes'] },
    { country: 'Korea', flag: '🇰🇷', universities: ['Korean Exchange Partners'] },
    { country: 'Thailand', flag: '🇹🇭', universities: ['Thai Partner Institutions'] },
    { country: 'Malaysia', flag: '🇲🇾', universities: ['Malaysian University Partners'] },
    { country: 'Europe', flag: '🇪🇺', universities: ['European Partner Institutions'] },
  ];

  const programs = [
    { en: 'International Business Administration (BBA)', kh: 'គ្រប់គ្រងពាណិជ្ជកម្មអន្តរជាតិ (BBA)', duration: '4 yrs' },
    { en: 'Computer Science & IT (International)', kh: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ (អន្តរជាតិ)', duration: '4 yrs' },
    { en: 'English for International Communication', kh: 'ភាសាអង់គ្លេសសម្រាប់ទំនាក់ទំនងអន្តរជាតិ', duration: '4 yrs' },
    { en: 'International Law & Diplomacy', kh: 'ច្បាប់ អន្តរជាតិ និងការទូត', duration: '4 yrs' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-teal-700">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 80%, #DAA520 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)'}} />
        <div className="relative z-20 text-center px-4 py-20">
          <Globe className="w-14 h-14 text-secondary mx-auto mb-4" />
          <p className={`text-secondary font-bold uppercase tracking-widest text-sm mb-3 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ថ្នាក់បរិញ្ញាបត្រ · អន្តរជាតិ' : 'Bachelor Program · International'}
          </p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'កម្មវិធីសិក្សាអន្តរជាតិ' : 'International Curriculum'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការសិក្សាជាភាសាអង់គ្លេសសុទ្ធ ស្របតាមស្តង់ដារអន្តរជាតិ ជាមួយឱកាសសិក្សានៅបរទេស' : 'Fully English-medium instruction benchmarked against global standards, with overseas study opportunities.'}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/admissions/how-to-apply" className={`bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-sm transition-colors ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ដាក់ពាក្យ' : 'Apply Now'}
            </Link>
            <Link href="/programs/bachelor" className={`border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-sm transition-colors ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ត្រឡប់' : 'Back to Bachelor'}
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/programs/bachelor" className="hover:text-primary transition-colors">Bachelor Programs</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'កម្មវិធីអន្តរជាតិ' : 'International Curriculum'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Bachelor Programs</h3>
                <ul className="space-y-3">
                  <li><Link href="/programs/bachelor" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ទិដ្ឋភាពទូទៅ' : 'Overview'}</Link></li>
                  <li><Link href="/programs/bachelor/national" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កម្មវិធីជាតិ' : 'National Curriculum'}</Link></li>
                  <li><Link href="/programs/bachelor/international" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'កម្មវិធីអន្តរជាតិ' : 'International Curriculum'}</Link></li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-sm">
                <Globe className="w-8 h-8 text-primary mb-3" />
                <h4 className={`font-bold text-primary mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទៅបន្តសិក្សានៅបរទេស' : 'Study Abroad'}</h4>
                <p className={`text-sm text-gray-600 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'និស្សិតមានឱកាសសិក្សាផ្ទេរទៅប្រទេសដៃគូ។' : 'Exchange & mobility programs available with partner universities.'}
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-16">
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ជំនាញអន្តរជាតិ' : 'International Programs Offered'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((p, idx) => (
                  <div key={idx} className="flex items-start p-5 bg-white border border-gray-100 rounded-sm hover:shadow-md hover:border-primary/40 transition-all group">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Star className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-gray-900 mb-1 ${kh ? 'font-khmer' : ''}`}>{kh ? p.kh : p.en}</h3>
                      <p className="text-xs text-gray-500">{p.duration} · English Medium</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <h2 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ហេតុអ្វីជ្រើសរើសកម្មវិធីអន្តរជាតិ?' : 'Why International Curriculum?'}
              </h2>
              <ul className="space-y-4">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>{kh ? h.kh : h.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ដៃគូសហប្រតិបត្តិការអន្តរជាតិ' : 'Global Partner Institutions'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {partners.map((p, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-sm p-5 text-center hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="text-4xl mb-3">{p.flag}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{p.country}</h3>
                    {p.universities.map((u, ui) => (
                      <p key={ui} className="text-xs text-gray-500">{u}</p>
                    ))}
                  </div>
                ))}
              </div>
              <p className={`text-sm text-gray-500 mt-4 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ព័ត៌មានបន្ថែមអំពីការផ្លាស់ប្ដូរ:' : 'For exchange details, visit:'}{' '}
                <Link href="/international/exchange/student" className="text-primary hover:underline">
                  {kh ? 'ការផ្លាស់ប្ដូរនិស្សិត' : 'Student Exchange Program'}
                </Link>
              </p>
            </div>

            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចង់ចូលរៀនជំនាញអន្តរជាតិ?' : 'Ready for a Global Education?'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចុះឈ្មោះចូលរៀនកម្មវិធីអន្តរជាតិ' : 'Enroll in an international program and expand your horizons.'}</p>
              </div>
              <Link href="/admissions/how-to-apply" className={`flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-sm whitespace-nowrap transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ដាក់ពាក្យឥឡូវ' : 'Apply Now'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
