'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Network, Users, Shield, BookOpen, Building2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function StructurePage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const leadership = [
    {
      role: { en: 'Founder & President', kh: 'ស្ថាបនិក និងប្រធានស្ថាប័ន' },
      name: { en: 'H.E. [Name]', kh: 'ឯ.ឧ. [ឈ្មោះ]' },
      desc: { en: 'Responsible for overall strategic direction and institutional vision.', kh: 'ទទួលខុសត្រូវលើទិសដៅយុទ្ធសាស្ត្រ និងទស្សនវិស័យទូទៅ។' },
      icon: Shield,
    },
    {
      role: { en: 'Principal / Rector', kh: 'នាយក / ប្រតិបតិ្តការ' },
      name: { en: 'Dr. [Name]', kh: 'បណ្ឌិត [ឈ្មោះ]' },
      desc: { en: 'Oversees academic affairs, administrative functions, and daily operations.', kh: 'ត្រួតពិនិត្យកិច្ចការសិក្សា រដ្ឋបាល និងប្រតិបត្តិការ។' },
      icon: Users,
    },
    {
      role: { en: 'Vice Principal – Academic', kh: 'នាយករងផ្នែកសិក្សា' },
      name: { en: 'Dr. [Name]', kh: 'បណ្ឌិត [ឈ្មោះ]' },
      desc: { en: 'Leads curriculum development, faculty management, and academic quality.', kh: 'ដឹកនាំការអភិវឌ្ឍកម្មវិធី ការគ្រប់គ្រងសាស្ត្រាចារ្យ និងគុណភាពសិក្សា។' },
      icon: BookOpen,
    },
    {
      role: { en: 'Vice Principal – Administration', kh: 'នាយករងផ្នែករដ្ឋបាល' },
      name: { en: '[Name]', kh: '[ឈ្មោះ]' },
      desc: { en: 'Manages finances, HR, facilities, and student services.', kh: 'គ្រប់គ្រងហិរញ្ញកិច្ច ធនធានមនុស្ស បរិក្ខារ និងសេវាកម្មនិស្សិត។' },
      icon: Building2,
    },
  ];

  const colleges = [
    { en: 'College of Business & Management', kh: 'មហាវិទ្យាល័យពាណិជ្ជកម្ម និងគ្រប់គ្រង', programs: ['MBA', 'BBA', 'Accounting', 'Marketing'] },
    { en: 'College of Information Technology', kh: 'មហាវិទ្យាល័យព័ត៌មានវិទ្យា', programs: ['Computer Science', 'IT Management', 'Networking'] },
    { en: 'College of Language & Communication', kh: 'មហាវិទ្យាល័យភាសា និងការទំនាក់ទំនង', programs: ['English Studies', 'Translation', 'Media'] },
    { en: 'College of Tourism & Hospitality', kh: 'មហាវិទ្យាល័យទេសចរណ៍ និងបដិសណ្ឋារកិច្ច', programs: ['Hotel Management', 'Tour Operations', 'Culinary Arts'] },
    { en: 'TVET Division', kh: 'ផ្នែក TVET', programs: ['Automotive', 'Electrical', 'Beauty & Cosmetology'] },
    { en: 'Centre for Research & Publication', kh: 'មជ្ឈមណ្ឌលស្រាវជ្រាវ', programs: ['Academic Journal', 'Faculty Research', 'Publications'] },
  ];

  const departments = [
    { en: 'Admissions & Registration Office', kh: 'ការិយាល័យចុះឈ្មោះ' },
    { en: 'Student Affairs Department', kh: 'ផ្នែកកិច្ចការនិស្សិត' },
    { en: 'Finance & Accounting Department', kh: 'ផ្នែកហិរញ្ញវត្ថុ' },
    { en: 'Human Resources Department', kh: 'ផ្នែកធនធានមនុស្ស' },
    { en: 'International Relations Office', kh: 'ការិយាល័យទំនាក់ទំនងអន្តរជាតិ' },
    { en: 'IT & Infrastructure Department', kh: 'ផ្នែកព័ត៌មានវិទ្យា' },
    { en: 'Library & Learning Resources', kh: 'បណ្ណាល័យ' },
    { en: 'Marketing & Communications', kh: 'ផ្នែកទីផ្សារ' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-16">
          <Network className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-white mb-4 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'រចនាសម្ព័ន្ធស្ថាប័ន' : 'Organization Structure'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការគ្រប់គ្រងដោយតម្លាភាព ប្រកបដោយប្រសិទ្ធភាព' : 'Transparent, accountable and effective institutional governance.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">About Us</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'រចនាសម្ព័ន្ធ' : 'Organization Structure'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">About Us</h3>
              <ul className="space-y-3">
                <li><Link href="/about/vision-and-missions" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ទស្សនវិស័យ បេសកកម្ម' : 'Vision & Mission'}</Link></li>
                <li><Link href="/about/structure" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'រចនាសម្ព័ន្ធ' : 'Organization Structure'}</Link></li>
                <li><Link href="/about/founder-and-principal" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ស្ថាបនិក' : 'Founder & Principal'}</Link></li>
                <li><Link href="/about/campuses" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ទីតាំងសាខា' : 'Campus Locations'}</Link></li>
                <li><Link href="/careers" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ឱកាសការងារ' : 'Careers at AIC'}</Link></li>
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-14">

            {/* Leadership */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ក្រុមដឹកនាំ' : 'Senior Leadership'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leadership.map((leader, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-sm p-6 hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <leader.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className={`font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? leader.name.kh : leader.name.en}</p>
                        <p className={`text-sm text-primary font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? leader.role.kh : leader.role.en}</p>
                      </div>
                    </div>
                    <p className={`text-sm text-gray-600 leading-relaxed ${kh ? 'font-khmer' : ''}`}>{kh ? leader.desc.kh : leader.desc.en}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Colleges */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'មហាវិទ្យាល័យ និងផ្នែក' : 'Academic Colleges & Divisions'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colleges.map((college, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200 rounded-sm p-5">
                    <h3 className={`font-bold text-primary mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? college.kh : college.en}</h3>
                    <div className="flex flex-wrap gap-2">
                      {college.programs.map((prog, pIdx) => (
                        <span key={pIdx} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-full">{prog}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Departments */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <h2 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ផ្នែករដ្ឋបាល និងសេវាកម្ម' : 'Administrative Departments'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {departments.map((dept, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                    <span className={`text-gray-700 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? dept.kh : dept.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-xl font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចង់ចូលបម្រើការងារ?' : 'Interested in Joining Our Team?'}</h3>
                <p className={`text-white/75 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? 'ស្វែងរកឱកាសការងារបច្ចុប្បន្ន' : 'View our current open positions and apply today.'}</p>
              </div>
              <Link href="/careers" className={`flex items-center gap-2 bg-secondary text-primary-dark font-bold px-6 py-3 rounded-sm whitespace-nowrap hover:bg-secondary/90 transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ឱកាសការងារ' : 'View Openings'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
