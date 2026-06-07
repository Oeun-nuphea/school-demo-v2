'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Globe2, Building2, ArrowRight, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function EuropeanPartnersPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const partners = [
    { country: { en: 'United Kingdom', kh: 'ចក្រភពអង់គ្លេស' }, flag: '🇬🇧', color: 'bg-blue-50 border-blue-200',
      universities: [
        { name: 'University of Oxford', dept: { en: 'Business & Finance', kh: 'ពាណិជ្ជកម្ម និងហិរញ្ញវត្ថុ' } },
        { name: 'Imperial College London', dept: { en: 'Science & Engineering', kh: 'វិទ្យាសាស្ត្រ' } },
      ]},
    { country: { en: 'France', kh: 'ប្រទេសបារាំង' }, flag: '🇫🇷', color: 'bg-indigo-50 border-indigo-200',
      universities: [
        { name: 'Sorbonne University', dept: { en: 'Humanities & Social Sciences', kh: 'មនុស្សសាស្ត្រ' } },
        { name: 'École Polytechnique', dept: { en: 'Engineering & Technology', kh: 'វិស្វកម្ម' } },
      ]},
    { country: { en: 'Germany', kh: 'ប្រទេសអាល្លឺម៉ង់' }, flag: '🇩🇪', color: 'bg-yellow-50 border-yellow-200',
      universities: [
        { name: 'Technical University of Munich', dept: { en: 'Technology & Innovation', kh: 'បច្ចេកវិទ្យា' } },
        { name: 'Heidelberg University', dept: { en: 'Sciences & Research', kh: 'វិទ្យាសាស្ត្រ' } },
      ]},
    { country: { en: 'Switzerland', kh: 'ប្រទេសស្វីស' }, flag: '🇨🇭', color: 'bg-red-50 border-red-200',
      universities: [
        { name: 'ETH Zurich', dept: { en: 'Science & Technology', kh: 'វិទ្យាសាស្ត្រ' } },
        { name: 'University of Geneva', dept: { en: 'Law & International Affairs', kh: 'ច្បាប់' } },
      ]},
  ];

  const programs = [
    { en: 'Semester Abroad Exchange (3–6 months)', kh: 'ការសិក្សានៅបរទេសសម្រាប់ ៣-៦ ខែ' },
    { en: 'Dual Degree Programs', kh: 'កម្មវិធីសញ្ញាបត្រពីរ' },
    { en: 'Summer Research Internships in Europe', kh: 'កម្មសិក្សាស្រាវជ្រាវ' },
    { en: 'Visiting Lecture Series from European Professors', kh: 'ការបង្ហាត់ពិសេសពីសាស្ត្រាចារ្យអឺរ៉ុប' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-primary to-primary-dark" />
        <div className="relative z-20 text-center px-4 py-16">
          <Globe2 className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-white mb-4 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ដៃគូសហការតំបន់អឺរ៉ុប' : 'European Partnerships'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការបង្កើតឱកាសសិក្សាក្នុងកម្រិតពិភពលោក' : 'Opening world-class academic pathways through prestigious European university partnerships.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">International Relations</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'ដៃគូអឺរ៉ុប' : 'European Partners'}</span>
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
                  <li className="pt-3 border-t border-gray-200"><Link href="/international/partners/asian" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ដៃគូអាស៊ី' : 'Asian Partners'}</Link></li>
                  <li><Link href="/international/partners/european" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'ដៃគូអឺរ៉ុប' : 'European Partners'}</Link></li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-sm text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className={`text-sm text-gray-600 mt-1 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ដៃគូក្នុងទ្វីបអឺរ៉ុប' : 'Partner Institutions in Europe'}</p>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-12">
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'បណ្ដាញទំនាក់ទំនងអឺរ៉ុប' : 'Our European Academic Network'}</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className={`text-lg text-gray-700 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ការសហប្រតិបត្តិការជាមួយស្ថាប័នអប់រំពូកែៗនៅអឺរ៉ុប ផ្ដល់ឱ្យនិស្សិត AIC នូវឱកាសស្ថាបនាអាជីពក្នុងកម្រិតអន្តរជាតិ ។' : 'Our partnerships with Europe\'s most prestigious institutions give AIC students access to world-class facilities, research labs, and centuries-old academic traditions.'}
              </p>
            </div>

            <div className="space-y-6">
              {partners.map((partner, idx) => (
                <div key={idx} className={`border rounded-sm overflow-hidden ${partner.color}`}>
                  <div className="px-6 py-4 border-b border-inherit flex items-center gap-3">
                    <span className="text-2xl">{partner.flag}</span>
                    <h3 className={`text-xl font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? partner.country.kh : partner.country.en}</h3>
                  </div>
                  <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
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
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <h3 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>{kh ? 'កម្មវិធីដែលផ្ដល់ជូន' : 'Available Programs'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>{kh ? p.kh : p.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-xl font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចូលរួមកម្មវិធីផ្លាស់ប្ដូរ' : 'Join an Exchange Program'}</h3>
                <p className={`text-white/75 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? 'ស្វែងយល់ពីរបៀបចូលរួម និងលក្ខខណ្ឌ' : 'Discover eligibility requirements and application details.'}</p>
              </div>
              <Link href="/international/exchange/student" className={`flex items-center gap-2 bg-secondary text-primary-dark font-bold px-6 py-3 rounded-sm whitespace-nowrap hover:bg-secondary/90 transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ស្វែងយល់' : 'Explore Exchanges'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
