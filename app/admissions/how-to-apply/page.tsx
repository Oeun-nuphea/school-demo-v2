'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileText, CheckCircle, Mail, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HowToApplyPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const steps = [
    {
      title: { en: 'Choose Your Program', kh: 'ជ្រើសរើសកម្មវិធីសិក្សា' },
      desc: { en: 'Explore our Bachelor, Master, Associate, or TVET programs to find the right fit.', kh: 'ស្វែងយល់ពីកម្មវិធីសិក្សារបស់យើងដើម្បីស្វែងរកជម្រើសដែលស័ក្តិសម។' },
      icon: FileText
    },
    {
      title: { en: 'Check Requirements', kh: 'ពិនិត្យលក្ខខណ្ឌតម្រូវ' },
      desc: { en: 'Ensure you meet the academic and language requirements for your chosen program.', kh: 'ធានាថាអ្នកមានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់សម្រាប់កម្មវិធីដែលបានជ្រើសរើស។' },
      icon: CheckCircle
    },
    {
      title: { en: 'Submit Application', kh: 'ដាក់ពាក្យចូលរៀន' },
      desc: { en: 'Complete the online application form and upload necessary documents.', kh: 'បំពេញទម្រង់ពាក្យស្នើសុំអនឡាញ និងភ្ជាប់ឯកសារចាំបាច់។' },
      icon: Mail
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'របៀបចុះឈ្មោះ' : 'How to Apply'}
          </h1>
          <p className={`text-lg text-white/75 font-sans max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh 
              ? 'ដំណើរការចុះឈ្មោះចូលរៀនងាយៗត្រឹមតែ ៣ជំហានប៉ុណ្ណោះ។' 
              : 'Your journey starts here. Follow these simple steps to complete your application.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Admissions</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'របៀបចុះឈ្មោះ' : 'How to Apply'}
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Admissions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/admissions/how-to-apply" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'របៀបចុះឈ្មោះ' : 'How to Apply'}</Link>
                </li>
                <li>
                  <Link href="/admissions/requirements" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'លក្ខខណ្ឌតម្រូវ' : 'Requirements'}</Link>
                </li>
                <li>
                  <Link href="/admissions/intake-dates" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កាលបរិច្ឆេទចូលរៀន' : 'Intake Dates'}</Link>
                </li>
                <li>
                  <Link href="/admissions/tuition-fees" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'តម្លៃសិក្សា' : 'Tuition Fees'}</Link>
                </li>
                <li>
                  <Link href="/scholarships" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អាហារូបករណ៍' : 'Scholarships'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ជំហានក្នុងការដាក់ពាក្យ' : 'Application Steps'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <div className="space-y-8 mb-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden group hover:border-primary/30 transition-all duration-300">
                  <div className="bg-primary/5 p-6 md:w-48 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gray-100 group-hover:bg-primary/10 transition-colors">
                    <step.icon className="w-10 h-10 text-primary mb-2" />
                    <span className="text-secondary font-bold text-xl">Step {idx + 1}</span>
                  </div>
                  <div className="p-8 flex-1">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                      {kh ? step.title.kh : step.title.en}
                    </h3>
                    <p className={`text-lg text-gray-600 ${kh ? 'font-khmer' : ''}`}>
                      {kh ? step.desc.kh : step.desc.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  <h3 className={`text-xl font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'ត្រូវការជំនួយមែនទេ?' : 'Need Help?'}
                  </h3>
                </div>
                <p className={`text-gray-600 ${kh ? 'font-khmer' : ''}`}>
                  {kh 
                    ? 'ក្រុមការងាររបស់យើងរង់ចាំជួយលោកអ្នកជានិច្ច។' 
                    : 'Our admissions office is ready to assist you with your application.'}
                </p>
              </div>
              <Link
                href="/about/contact"
                className={`inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-sm whitespace-nowrap transition-colors ${kh ? 'font-khmer' : ''}`}
              >
                {kh ? 'ទំនាក់ទំនងពួកយើង' : 'Contact Admissions'}
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
