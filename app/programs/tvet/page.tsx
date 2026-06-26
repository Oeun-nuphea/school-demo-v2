'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Wrench, Clock, CheckCircle, ArrowRight, Briefcase, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TVETProgramsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const programs = [
    { en: 'Automotive Mechanics', kh: 'មេកានិចរថយន្ត', duration: '1–2 yrs', icon: '🔧', desc: { en: 'Vehicle servicing, diagnostics & repair', kh: 'ការថែទាំ ចម្រោះ និងជួសជុលរថយន្ត' } },
    { en: 'Electrical Installations', kh: 'អគ្គិសនី', duration: '1 yr', icon: '⚡', desc: { en: 'Residential and commercial wiring & systems', kh: 'ការដំឡើងអគ្គិសនីក្នុងផ្ទះ និងពាណិជ្ជកម្ម' } },
    { en: 'Hospitality & Tourism', kh: 'បដិសណ្ឋារកិច្ច និងទេសចរណ៍', duration: '1–2 yrs', icon: '🏨', desc: { en: 'Hotel operations, front desk & tour guiding', kh: 'ប្រតិបត្តិការសណ្ឋាគារ និងណែនាំទេសចរ' } },
    { en: 'Culinary Arts', kh: 'សិល្បៈធ្វើម្ហូប', duration: '1 yr', icon: '🍽️', desc: { en: 'Professional cooking, plating & kitchen management', kh: 'ការធ្វើម្ហូបវិជ្ជាជីវៈ និងគ្រប់គ្រងផ្ទះបាយ' } },
    { en: 'IT Support & Networking', kh: 'ព័ត៌មានវិទ្យា និងបណ្ដាញ', duration: '1–2 yrs', icon: '💻', desc: { en: 'Hardware, software, LAN/WAN networking', kh: 'ផ្នែករឹង ផ្នែកទន់ និងបណ្ដាញ LAN/WAN' } },
    { en: 'Air Conditioning & Refrigeration', kh: 'ប្រព័ន្ធត្រជាក់', duration: '1 yr', icon: '❄️', desc: { en: 'Installation, maintenance of AC & cooling systems', kh: 'ការដំឡើង និងថែទាំម៉ាស៊ីនត្រជាក់' } },
    { en: 'Beauty & Cosmetology', kh: 'សម្ផស្ស', duration: '6 months–1 yr', icon: '💅', desc: { en: 'Hair, skincare, makeup & nail techniques', kh: 'ស្វ័យប្រវត្តិ ស្បែក ការតុបតែង' } },
    { en: 'Plumbing & Sanitation', kh: 'បំពង់ទឹក និងអនាម័យ', duration: '1 yr', icon: '🔩', desc: { en: 'Water systems installation and maintenance', kh: 'ការដំឡើង និងថែទាំប្រព័ន្ធទឹក' } },
  ];

  const outcomes = [
    { en: 'Direct employment with certified skills recognized by employers', kh: 'ការងារភ្លាមៗ ដោយជំនាញដែលត្រូវបានទទួលស្គាល់' },
    { en: 'Pathway to upgrade to Associate or Bachelor Degree', kh: 'ផ្លូវទៅ Associate ឬ Bachelor ដោយបន្ថែមឆ្នាំ' },
    { en: 'Practical hands-on training in real workshop environments', kh: 'ការបណ្ដុះបណ្ដាលក្នុងបរិយាកាសការងារពិតប្រាកដ' },
    { en: 'Internship placement coordination with industry partners', kh: 'ការរៀបចំកម្មសិក្សាជាមួយក្រុមហ៊ុនអ្នកចម្រើន' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-20">
          <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">{kh ? 'ការអប់រំបច្ចេកទេស' : 'Technical & Vocational'}</p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'កម្មវិធីបណ្ដុះបណ្ដាលបច្ចេកទេស (TVET)' : 'TVET Programs'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ជំនាញជាក់ស្ដែងដែលទីផ្សារការងារត្រូវការ — ចូលបម្រើការងារក្នុងរយៈពេល ៦ ខែ–២ ឆ្នាំ' : 'Practical skills employers demand — job-ready in as little as 6 months to 2 years.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/programs" className="hover:text-primary transition-colors">Academic Programs</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'កម្មវិធី TVET' : 'TVET Programs'}</span>
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div><Clock className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xl font-bold">6m–2yrs</div><div className="text-white/70 text-xs">{kh ? 'រយៈពេលសិក្សា' : 'Program Duration'}</div></div>
            <div><Wrench className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xl font-bold">8+</div><div className="text-white/70 text-xs">{kh ? 'ជំនាញ' : 'Specializations'}</div></div>
            <div><Star className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xl font-bold">90%</div><div className="text-white/70 text-xs">{kh ? 'ចូលបម្រើការងារ' : 'Employment Rate'}</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Programs</h3>
                <ul className="space-y-3">
                  <li><Link href="/programs" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កម្មវិធីទាំងអស់' : 'All Programs'}</Link></li>
                  <li><Link href="/programs/master" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</Link></li>
                  <li><Link href="/programs/bachelor" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</Link></li>
                  <li><Link href="/programs/associate" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្ររង' : 'Associate Programs'}</Link></li>
                  <li><Link href="/programs/tvet" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'TVET' : 'TVET Programs'}</Link></li>
                </ul>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <ul className="space-y-3">
                    <li><Link href="/scholarships" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អាហារូបករណ៍' : 'Scholarships'}</Link></li>
                    <li><Link href="/admissions" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការចុះឈ្មោះចូលរៀន' : 'Admissions'}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-sm">
                <Briefcase className="w-8 h-8 text-primary mb-3" />
                <p className={`text-sm font-bold text-gray-900 mb-1 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចង់ចូលការងារឆាប់' : 'Want a Job Fast?'}</p>
                <p className={`text-xs text-gray-600 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'TVET ជួយអ្នកចូលបម្រើការងារក្នុងរយៈពេល ៦ ខែ' : 'TVET gets you job-ready in as little as 6 months.'}</p>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-14">

            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ជំនាញ TVET ដែលមាន' : 'Available TVET Specializations'}</h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className={`text-lg text-gray-700 mb-8 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'កម្មវិធី TVET របស់ AIC ផ្ដោតលើការបណ្ដុះបណ្ដាលដ៏ជ្រៅជ្រះ ដើម្បីឱ្យនិស្សិតរួចខ្លួនរួចចាក់ទៅបម្រើការងារភ្លាមៗ ។' : 'AIC\'s TVET programs focus on deep, hands-on training so graduates are immediately work-ready and in high demand.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((p, idx) => (
                  <div key={idx} className="flex items-start p-5 bg-white border border-gray-100 rounded-sm hover:shadow-md hover:border-primary/40 transition-all group">
                    <div className="text-2xl mr-4 mt-0.5">{p.icon}</div>
                    <div>
                      <h3 className={`font-bold text-gray-900 mb-1 ${kh ? 'font-khmer' : ''}`}>{kh ? p.kh : p.en}</h3>
                      <p className={`text-sm text-gray-500 mb-1 ${kh ? 'font-khmer' : ''}`}>{kh ? p.desc.kh : p.desc.en}</p>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{p.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <h2 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>{kh ? 'លទ្ធផលនៃការបញ្ចប់ការសិក្សា' : 'Program Outcomes'}</h2>
              <ul className="space-y-4">
                {outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>{kh ? o.kh : o.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចាប់ផ្ដើមជំនាញរបស់អ្នក' : 'Build Your Skilled Career'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ដាក់ពាក្យចុះឈ្មោះសម្រាប់ TVET ឥឡូវ' : 'Apply today and start your vocational career journey.'}</p>
              </div>
              <Link href="/admissions/how-to-apply" className={`flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-sm whitespace-nowrap transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ដាក់ពាក្យ' : 'Apply Now'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
