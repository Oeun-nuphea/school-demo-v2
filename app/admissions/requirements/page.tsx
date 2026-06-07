'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle, GraduationCap, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function RequirementsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'លក្ខខណ្ឌតម្រូវ' : 'Admission Requirements'}
          </h1>
          <p className={`text-lg text-white/75 font-sans max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh 
              ? 'ឯកសារនិងលក្ខណៈសម្បត្តិដែលអ្នកត្រូវមានដើម្បីចុះឈ្មោះចូលរៀន។' 
              : 'Everything you need to prepare before applying to our academic programs.'}
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
            {kh ? 'លក្ខខណ្ឌតម្រូវ' : 'Requirements'}
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
                  <Link href="/admissions/how-to-apply" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'របៀបចុះឈ្មោះ' : 'How to Apply'}</Link>
                </li>
                <li>
                  <Link href="/admissions/requirements" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'លក្ខខណ្ឌតម្រូវ' : 'Requirements'}</Link>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              {/* Undergraduate Requirements */}
              <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden hover:border-primary/50 transition-colors">
                <div className="bg-gray-50 p-6 border-b border-gray-200 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h3 className={`text-xl font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'បរិញ្ញាបត្រ និងបរិញ្ញាបត្ររង' : 'Undergraduate (Bachelor & Associate)'}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)' : 'High School Diploma or equivalent'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? 'សំបុត្រកំណើត ឬអត្តសញ្ញាណប័ណ្ណ' : 'Birth Certificate or National ID'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? 'រូបថត ៤x៦ (៤ សន្លឹក)' : '4 Passport-sized photos (4x6)'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Postgraduate Requirements */}
              <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden hover:border-primary/50 transition-colors">
                <div className="bg-gray-50 p-6 border-b border-gray-200 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className={`text-xl font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Postgraduate (Master Degree)'}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? 'សញ្ញាបត្របរិញ្ញាបត្រ' : 'Bachelor\'s Degree Certificate'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? 'ព្រឹត្តិបត្រពិន្ទុ (Transcript)' : 'Official Transcript of Records'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? 'អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន' : 'National ID or Passport'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="mt-8 bg-primary/5 p-6 rounded-sm border border-primary/20">
              <h4 className={`font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'កម្មវិធីអន្តរជាតិ (ចំណាំ)' : 'International Curriculum (Note)'}
              </h4>
              <p className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>
                {kh 
                  ? 'សម្រាប់និស្សិតដែលជ្រើសរើសកម្មវិធីអន្តរជាតិ តម្រូវឱ្យមានឯកសារបញ្ជាក់សមត្ថភាពភាសាអង់គ្លេសបន្ថែម (IELTS 5.5 ឬស្មើ)។' 
                  : 'Students applying for the International Curriculum must provide proof of English proficiency (IELTS 5.5 or equivalent).'}
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
