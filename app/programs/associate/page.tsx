'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Award, Clock, Users, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AssociateProgramsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const programs = [
    { en: 'Associate in Business Administration', kh: 'បរិញ្ញាបត្ររង គ្រប់គ្រងពាណិជ្ជកម្ម', duration: '2 yrs', mode: { en: 'Day/Evening', kh: 'ថ្ងៃ/យប់' } },
    { en: 'Associate in Information Technology', kh: 'បរិញ្ញាបត្ររង ព័ត៌មានវិទ្យា', duration: '2 yrs', mode: { en: 'Day/Evening', kh: 'ថ្ងៃ/យប់' } },
    { en: 'Associate in English for Communication', kh: 'បរិញ្ញាបត្ររង ភាសាអង់គ្លេសសម្រាប់ការប្រាស្រ័យទាក់ទង', duration: '2 yrs', mode: { en: 'Day', kh: 'ថ្ងៃ' } },
    { en: 'Associate in Accounting', kh: 'បរិញ្ញាបត្ររង គណនេយ្យ', duration: '2 yrs', mode: { en: 'Day/Evening', kh: 'ថ្ងៃ/យប់' } },
    { en: 'Associate in Tourism & Hospitality', kh: 'បរិញ្ញាបត្ររង ទេសចរណ៍ និងបដិសណ្ឋារកិច្ច', duration: '2 yrs', mode: { en: 'Day', kh: 'ថ្ងៃ' } },
    { en: 'Associate in Marketing', kh: 'បរិញ្ញាបត្ររង ទីផ្សារ', duration: '2 yrs', mode: { en: 'Day/Evening', kh: 'ថ្ងៃ/យប់' } },
  ];

  const benefits = [
    { en: 'Pathway to Bachelor\'s Degree — complete 2 more years to upgrade', kh: 'ផ្លូវវិញ្ញាបនប័ត្រ — ចំណាយ ២ ឆ្នាំបន្ថែម ដើម្បីអាប់ហ្គ្រេតទៅបរិញ្ញាបត្រ' },
    { en: 'Industry-relevant curriculum developed with local employers', kh: 'កម្មវិធីសិក្សាដែលស្របនឹងតម្រូវការម្ចាស់ការអាជីវកម្ម' },
    { en: 'Internship placement support in year 2', kh: 'ការគាំទ្រកម្មសិក្សាក្នុងឆ្នាំទី ២' },
    { en: 'Affordable tuition with scholarship options available', kh: 'ថ្លៃសិក្សាសមរម្យ ហើយមានអាហារូបករណ៍' },
  ];

  const sampleModules = [
    { en: 'Principles of Management', kh: 'គោលការណ៍គ្រប់គ្រង' },
    { en: 'Business Communication', kh: 'ការប្រាស្រ័យទាក់ទងក្នុងពាណិជ្ជកម្ម' },
    { en: 'Fundamentals of Accounting', kh: 'មូលដ្ឋានគ្រឹះគណនេយ្យ' },
    { en: 'Introduction to Marketing', kh: 'ការណែនាំអំពីទីផ្សារ' },
    { en: 'Computer Applications for Business', kh: 'ការប្រើប្រាស់កុំព្យូទ័រក្នុងអាជីវកម្ម' },
    { en: 'Business Law & Ethics', kh: 'ច្បាប់ពាណិជ្ជកម្ម និងក្រមសីលធម៌' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-20">
          <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">{kh ? 'ថ្នាក់ ២ ឆ្នាំ' : '2-Year Degree'}</p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ថ្នាក់បរិញ្ញាបត្ររង' : 'Associate Programs'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ចាប់ផ្ដើមអាជីពរបស់អ្នកក្នុងរយៈពេលខ្លី ហើយបន្ថែមសញ្ញាបត្របន្ទាប់មក។' : 'Launch your career in just 2 years with a pathway to upgrade to a full Bachelor\'s Degree.'}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/admissions/how-to-apply" className={`bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-sm transition-colors ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ដាក់ពាក្យ' : 'Apply Now'}
            </Link>
            <Link href="/admissions/tuition-fees" className={`border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-sm transition-colors ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ថ្លៃសិក្សា' : 'View Fees'}
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/programs" className="hover:text-primary transition-colors">Academic Programs</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'ថ្នាក់បរិញ្ញាបត្ររង' : 'Associate Programs'}</span>
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div><Clock className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xl font-bold">2 {kh ? 'ឆ្នាំ' : 'Years'}</div><div className="text-white/70 text-xs">{kh ? 'រយៈពេល' : 'Duration'}</div></div>
            <div><Users className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xl font-bold">6+</div><div className="text-white/70 text-xs">{kh ? 'ជំនាញ' : 'Specializations'}</div></div>
            <div><Award className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xl font-bold">{kh ? 'ទំហំ' : 'Small'}</div><div className="text-white/70 text-xs">{kh ? 'ថ្នាក់តូច' : 'Class Sizes'}</div></div>
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
                  <li><Link href="/programs/associate" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'ថ្នាក់បរិញ្ញាបត្ររង' : 'Associate Programs'}</Link></li>
                  <li><Link href="/programs/tvet" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'TVET' : 'TVET Programs'}</Link></li>
                </ul>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <ul className="space-y-3">
                    <li><Link href="/scholarships" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អាហារូបករណ៍' : 'Scholarships'}</Link></li>
                    <li><Link href="/admissions" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការចុះឈ្មោះចូលរៀន' : 'Admissions'}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-sm">
                <h4 className={`font-bold text-primary mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចង់ដឹងបន្ថែម?' : 'Want to Know More?'}</h4>
                <p className={`text-sm text-gray-600 mb-4 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទាក់ទងការិយាល័យចុះឈ្មោះ' : 'Contact our admissions office for a free consultation.'}</p>
                <Link href="/about/contact" className={`block text-center bg-primary text-white py-2 rounded-sm text-sm font-bold hover:bg-primary-dark transition-colors ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ទំនាក់ទំនង' : 'Contact Us'}
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-14">

            {/* Programs Grid */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ជំនាញដែលផ្ដល់ជូន' : 'Available Specializations'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((p, idx) => (
                  <div key={idx} className="flex items-start p-5 bg-white border border-gray-100 rounded-sm hover:shadow-md hover:border-primary/40 transition-all group">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Award className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-gray-900 mb-1 ${kh ? 'font-khmer' : ''}`}>{kh ? p.kh : p.en}</h3>
                      <p className={`text-xs text-gray-500 ${kh ? 'font-khmer' : ''}`}>{p.duration} · {kh ? p.mode.kh : p.mode.en}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Modules */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className={`text-2xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? 'គំរូមុខវិជ្ជាសិក្សា (ឆ្នាំទី ១)' : 'Sample Year 1 Modules'}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sampleModules.map((m, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-sm">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                    <span className={`text-gray-700 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? m.kh : m.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ហេតុអ្វីត្រូវជ្រើសរើស Associate Degree?' : 'Why Choose an Associate Degree?'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-sm">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>{kh ? b.kh : b.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចាប់ផ្ដើមអាជីព ២ ឆ្នាំ' : 'Start Your Career in 2 Years'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចុះឈ្មោះចូលរៀនសម្រាប់ឆ្នាំសិក្សាបន្ទាប់' : 'Enroll now for the upcoming academic intake.'}</p>
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
