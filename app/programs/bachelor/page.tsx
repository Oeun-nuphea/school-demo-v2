'use client'
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, BookOpen, Globe, Shield } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";
import CurriculumAccordion from "@/components/CurriculumAccordion";

export default function BachelorProgramsPage() {
  const { t, lang } = useLanguage();
  const kh = lang === 'kh';
  const [activeTab, setActiveTab] = useState<'national' | 'international'>('national');

  // Placeholder data for the Curriculum Accordion to demonstrate the split
  const placeholderCurriculum = [
    {
      year: { english: "Year 1: Foundation", khmer: "ឆ្នាំទី១: មូលដ្ឋានគ្រឹះ" },
      semesters: [
        {
          semester: { english: "Semester 1", khmer: "ឆមាសទី១" },
          modules: [
            { english: "Introduction to Business", khmer: "សេចក្តីផ្តើមអំពីអាជីវកម្ម" },
            { english: "Principles of Management", khmer: "គោលការណ៍គ្រប់គ្រង" }
          ]
        },
        {
          semester: { english: "Semester 2", khmer: "ឆមាសទី២" },
          modules: [
            { english: "Microeconomics", khmer: "មីក្រូសេដ្ឋកិច្ច" },
            { english: "Business Mathematics", khmer: "គណិតវិទ្យាអាជីវកម្ម" }
          ]
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {kh ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {lang === 'kh' ? 'កម្មវិធីសិក្សាថ្នាក់បរិញ្ញាបត្រ (Bachelor Degree)' : 'Begin your academic journey with our comprehensive undergraduate programs.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Academic Programs</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Programs</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/programs" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កម្មវិធីទាំងអស់' : 'All Programs'}</Link>
                </li>
                <li>
                  <Link href="/programs/master" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</Link>
                </li>
                <li>
                  <Link href="/programs/bachelor" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</Link>
                </li>
                <li>
                  <Link href="/programs/associate" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្ររង' : 'Associate Programs'}</Link>
                </li>
                <li>
                  <Link href="/programs/tvet" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេស' : 'TVET Programs'}</Link>
                </li>
              </ul>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <ul className="space-y-3">
                  <li><Link href="/scholarships" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អាហារូបករណ៍' : 'Scholarships'}</Link></li>
                  <li><Link href="/admissions" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការចុះឈ្មោះចូលរៀន' : 'Admissions'}</Link></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
              {lang === 'kh' ? 'កម្មវិធីសិក្សាថ្នាក់បរិញ្ញាបត្រ' : 'Undergraduate Degrees'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>

            {/* Curriculum Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-sm mb-10">
              <button
                onClick={() => setActiveTab('national')}
                className={`flex-1 py-3 px-4 flex items-center justify-center text-sm md:text-base font-bold rounded-sm transition-all duration-200 ${
                  activeTab === 'national' 
                    ? 'bg-white text-primary shadow-sm ring-1 ring-black/5' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                <Shield className="w-5 h-5 mr-2" />
                {lang === 'kh' ? 'កម្មវិធីសិក្សាថ្នាក់ជាតិ' : 'National Curriculum'}
              </button>
              <button
                onClick={() => setActiveTab('international')}
                className={`flex-1 py-3 px-4 flex items-center justify-center text-sm md:text-base font-bold rounded-sm transition-all duration-200 ${
                  activeTab === 'international' 
                    ? 'bg-white text-primary shadow-sm ring-1 ring-black/5' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                <Globe className="w-5 h-5 mr-2" />
                {lang === 'kh' ? 'កម្មវិធីសិក្សាអន្តរជាតិ' : 'International Curriculum'}
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'national' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {lang === 'kh' 
                    ? 'កម្មវិធីថ្នាក់ជាតិរបស់យើងត្រូវបានរៀបចំឡើងស្របតាមស្តង់ដារក្រសួងអប់រំ យុវជន និងកីឡា ដោយផ្តោតលើការអភិវឌ្ឍន៍ធនធានមនុស្សសម្រាប់ទីផ្សារការងារក្នុងស្រុក។' 
                    : 'Our National Curriculum is strictly aligned with the Ministry of Education standards, focusing on developing human resources for the local job market.'}
                </p>

                <div className="space-y-12">
                  {info.academic_programs.bachelor_programs_by_college.map((collegeData, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center">
                        <BookOpen className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                        <h3 className="text-xl font-serif font-bold text-gray-900 font-khmer">{t(collegeData.college_name)}</h3>
                      </div>
                      <div className="p-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                          {collegeData.degrees.map((degree, dIdx) => (
                            <li key={dIdx} className="flex items-center text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                              <span className="font-semibold text-gray-900 font-khmer">{t(degree)}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-bold text-gray-900 mb-4">{lang === 'kh' ? 'រចនាសម្ព័ន្ធកម្មវិធីសិក្សាគំរូ:' : 'Sample Curriculum Structure:'}</h4>
                        {placeholderCurriculum.map((year, yIdx) => (
                          <CurriculumAccordion key={yIdx} year={year.year} semesters={year.semesters} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'international' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {lang === 'kh' 
                    ? 'កម្មវិធីអន្តរជាតិផ្តល់ជូននូវការសិក្សាស្របតាមស្តង់ដារអន្តរជាតិ ដោយប្រើប្រាស់ភាសាអង់គ្លេសជាគោល និងផ្តោតលើភាពជាអ្នកដឹកនាំសកល។' 
                    : 'The International Curriculum offers global-standard education instructed entirely in English, focusing on developing global leadership and critical thinking.'}
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-sm p-8 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                    {lang === 'kh' ? 'ព័ត៌មានលម្អិតអំពីកម្មវិធីអន្តរជាតិ' : 'International Programs Documentation'}
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                    {lang === 'kh' 
                      ? 'ព័ត៌មានលម្អិតនៃកម្មវិធីសិក្សាអន្តរជាតិនឹងត្រូវបានអាប់ដេតឆាប់ៗនេះបន្ទាប់ពីទទួលបានឯកសារផ្លូវការ។' 
                      : 'Detailed module lists for the International Curriculum are currently being compiled and will be available here soon.'}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
