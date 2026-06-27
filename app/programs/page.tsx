'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, GraduationCap, BookOpen, Wrench, Award, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProgramsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const programTypes = [
    {
      title: { en: 'Master Programs', kh: 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' },
      desc: { en: 'Postgraduate degrees for professionals and researchers.', kh: 'កម្មវិធីក្រោយឧត្តមសិក្សាសម្រាប់អ្នកជំនាញ និងអ្នកស្រាវជ្រាវ។' },
      href: '/programs/master',
      icon: GraduationCap,
      color: 'from-purple-600 to-purple-800'
    },
    {
      title: { en: 'Bachelor Programs', kh: 'ថ្នាក់បរិញ្ញាបត្រ' },
      desc: { en: 'Undergraduate degrees — National & International curricula.', kh: 'ថ្នាក់បរិញ្ញាបត្រទូទៅ ទាំងកម្មវិធីជាតិ និងអន្តរជាតិ។' },
      href: '/programs/bachelor',
      icon: BookOpen,
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: { en: 'Associate Programs', kh: 'ថ្នាក់បរិញ្ញាបត្ររង' },
      desc: { en: '2-year degrees with a pathway to a Bachelor\'s.', kh: 'សញ្ញាបត្រ ២ ឆ្នាំ អាចបន្តទៅថ្នាក់បរិញ្ញាបត្របាន។' },
      href: '/programs/associate',
      icon: Award,
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      title: { en: 'TVET Programs', kh: 'កម្មវិធីបណ្ដុះបណ្ដាលបច្ចេកទេស (TVET)' },
      desc: { en: 'Practical, hands-on vocational training for quick employment.', kh: 'ការបណ្ដុះបណ្ដាលវិជ្ជាជីវៈជាក់ស្ដែង សម្រាប់ការងាររហ័ស។' },
      href: '/programs/tvet',
      icon: Wrench,
      color: 'from-orange-600 to-orange-800'
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[320px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-20">
          <p className={`text-secondary font-bold uppercase tracking-widest text-sm mb-3 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'កម្មវិធីសិក្សា' : 'Academic Programs'}
          </p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'កម្មវិធីសិក្សាទាំងអស់' : 'Our Academic Programs'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ស្វែងយល់ពីកម្មវិធីសិក្សាចម្រុះរបស់ AIC ចាប់ពីថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់ រហូតដល់ការបណ្ដុះបណ្ដាលវិជ្ជាជីវៈ TVET ។' : 'Explore AIC\'s full range of programs — from Master\'s degrees to hands-on TVET training.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'កម្មវិធីសិក្សា' : 'Academic Programs'}</span>
        </div>
      </div>

      {/* Program Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programTypes.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Link key={idx} href={p.href} className="group block">
                <div className="relative h-full bg-white border border-gray-100 rounded-sm p-8 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${p.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className={`text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors ${kh ? 'font-khmer' : ''}`}>
                        {kh ? p.title.kh : p.title.en}
                      </h2>
                      <p className={`text-gray-600 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                        {kh ? p.desc.kh : p.desc.en}
                      </p>
                      <div className={`mt-4 flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all ${kh ? 'font-khmer' : ''}`}>
                        {kh ? 'ស្វែងយល់បន្ថែម' : 'Learn More'} <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Scholarships & Admissions */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/scholarships" className="group block bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 rounded-sm p-8 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className={`text-xl font-serif font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'អាហារូបករណ៍' : 'Scholarships'}
                </h3>
                <p className={`text-gray-600 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ស្វែងរកឱកាសអាហារូបករណ៍ដែលអាចរកបាន' : 'Explore available scholarship opportunities to fund your education.'}
                </p>
                <span className={`inline-flex items-center gap-1 mt-3 text-sm font-bold text-primary group-hover:gap-2 transition-all ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ស្វែងយល់' : 'View Scholarships'} <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          <Link href="/admissions" className="group block bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-sm p-8 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className={`text-xl font-serif font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ការចុះឈ្មោះចូលរៀន' : 'Admissions'}
                </h3>
                <p className={`text-gray-600 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ដំណើរការ លក្ខខណ្ឌ និងកាលបរិច្ឆេទនៃការចុះឈ្មោះចូលរៀន' : 'Application process, requirements, intake dates, and tuition fees.'}
                </p>
                <span className={`inline-flex items-center gap-1 mt-3 text-sm font-bold text-primary group-hover:gap-2 transition-all ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ចូលមើល' : 'View Admissions'} <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className={`text-3xl font-serif font-bold mb-4 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'មិនប្រាកដថាកម្មវិធីណាសាកសមនឹងអ្នក?' : 'Not Sure Which Program Fits You?'}
          </h2>
          <p className={`text-white/75 max-w-xl mx-auto mb-8 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ទាក់ទងក្រុមប្រឹក្សាយោបល់របស់យើងសម្រាប់ការណែនាំផ្ទាល់ខ្លួន។' : 'Contact our counseling team for a free personalized consultation.'}
          </p>
          <Link href="/about/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-10 py-4 rounded-sm transition-colors">
            {kh ? 'ទំនាក់ទំនងយើង' : 'Contact Us'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
