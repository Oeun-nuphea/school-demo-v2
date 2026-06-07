'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Briefcase, Users, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CareersAtAICPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  // Placeholder data for job openings
  const jobOpenings = [
    {
      title: { en: 'Full-Time Lecturer in Business Administration', kh: 'សាស្ត្រាចារ្យពេញម៉ោងផ្នែកគ្រប់គ្រងពាណិជ្ជកម្ម' },
      department: { en: 'College of Business', kh: 'មហាវិទ្យាល័យគ្រប់គ្រងពាណិជ្ជកម្ម' },
      type: { en: 'Full-Time', kh: 'ពេញម៉ោង' },
      location: { en: 'Phnom Penh Campus', kh: 'សាខាភ្នំពេញ' },
    },
    {
      title: { en: 'IT Support Specialist', kh: 'អ្នកឯកទេសគាំទ្រផ្នែកព័ត៌មានវិទ្យា' },
      department: { en: 'IT Department', kh: 'ផ្នែកព័ត៌មានវិទ្យា' },
      type: { en: 'Full-Time', kh: 'ពេញម៉ោង' },
      location: { en: 'Phnom Penh Campus', kh: 'សាខាភ្នំពេញ' },
    },
    {
      title: { en: 'Student Counselor', kh: 'ទីប្រឹក្សានិស្សិត' },
      department: { en: 'Student Affairs', kh: 'កិច្ចការនិស្សិត' },
      type: { en: 'Part-Time', kh: 'ក្រៅម៉ោង' },
      location: { en: 'Siem Reap Campus', kh: 'សាខាសៀមរាប' },
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <Briefcase className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ឱកាសការងារជាមួយវិទ្យាស្ថាន' : 'Careers at AIC'}
          </h1>
          <p className={`text-lg text-white/75 font-sans max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh 
              ? 'ចូលរួមជាមួយពួកយើងដើម្បីអភិវឌ្ឍវិស័យអប់រំនៅកម្ពុជា។' 
              : 'Join our team of dedicated professionals to shape the future of education in Cambodia.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">About Us</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ឱកាសការងារ' : 'Careers'}
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">In this section</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about/vision-and-missions" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ទស្សនវិស័យ បេសកកម្ម និងគោលដៅ' : 'Vision, Mission & Goals'}</Link>
                </li>
                <li>
                  <Link href="/about/founder-and-principal" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ស្ថាបនិក និងនាយកវិទ្យាស្ថាន' : 'Founder & Principal'}</Link>
                </li>
                <li>
                  <Link href="/about/campuses" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ទីតាំងសាខា' : 'Campus Locations'}</Link>
                </li>
                <li>
                  <Link href="/about/careers" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'ឱកាសការងារ' : 'Careers at AIC'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            
            <div className="mb-12">
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ហេតុអ្វីត្រូវជ្រើសរើសធ្វើការនៅ AIC?' : 'Why Work at AIC?'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
                  <GraduationCap className="w-8 h-8 text-primary mb-4" />
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'បរិយាកាសសិក្សា និងការលូតលាស់' : 'A Culture of Growth'}
                  </h3>
                  <p className={`text-gray-600 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'យើងគាំទ្រការអភិវឌ្ឍសមត្ថភាពរបស់បុគ្គលិកគ្រប់លំដាប់ថ្នាក់។' : 'We foster an environment where continuous learning and professional development are encouraged.'}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 border border-gray-100 rounded-sm">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'សហគមន៍ដែលយកចិត្តទុកដាក់' : 'A Caring Community'}
                  </h3>
                  <p className={`text-gray-600 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'ធ្វើការជាមួយក្រុមការងារដែលមានភាពរួសរាយរាក់ទាក់ និងសហការគ្នា។' : 'Join a diverse, inclusive, and highly collaborative team of educators and professionals.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Current Openings */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ឱកាសការងារបច្ចុប្បន្ន' : 'Current Openings'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              
              <div className="space-y-4">
                {jobOpenings.map((job, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-gray-200 rounded-sm hover:border-primary transition-colors group">
                    <div className="mb-4 md:mb-0">
                      <h3 className={`text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? job.title.kh : job.title.en}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-secondary" />
                          <span className={kh ? 'font-khmer' : ''}>{kh ? job.department.kh : job.department.en}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-secondary" />
                          <span className={kh ? 'font-khmer' : ''}>{kh ? job.type.kh : job.type.en}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-secondary" />
                          <span className={kh ? 'font-khmer' : ''}>{kh ? job.location.kh : job.location.en}</span>
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/about/contact"
                      className={`inline-flex items-center justify-center gap-2 px-6 py-2 border-2 border-primary text-primary font-bold rounded-sm hover:bg-primary hover:text-white transition-colors ${kh ? 'font-khmer' : ''}`}
                    >
                      {kh ? 'ដាក់ពាក្យ' : 'Apply Now'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* No openings message / General submission */}
              <div className="mt-8 bg-primary/5 p-6 rounded-sm border border-primary/20 text-center">
                <p className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>
                  {kh 
                    ? 'មិនឃើញមុខតំណែងដែលអ្នកកំពុងស្វែងរកមែនទេ? អ្នកអាចផ្ញើប្រវត្តិរូបសង្ខេបរបស់អ្នកមកកាន់ពួកយើងនៅ hr@aic.edu.kh ។' 
                    : 'Don\'t see a role that fits your profile? Send us your CV at hr@aic.edu.kh and we\'ll keep you in mind for future openings.'}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
