'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Shield, BookOpen, CheckCircle, ArrowRight, GraduationCap } from "lucide-react";
import info from "../../../../information.json";
import { useLanguage } from "@/context/LanguageContext";
import CurriculumAccordion from "@/components/CurriculumAccordion";

export default function NationalCurriculumPage() {
  const { t, lang } = useLanguage();
  const kh = lang === 'kh';

  const highlights = [
    { en: 'Accredited by the Ministry of Education, Youth & Sport of Cambodia', kh: 'ទទួលស្គាល់ដោយក្រសួងអប់រំ យុវជន និងកីឡានៃកម្ពុជា' },
    { en: 'Instruction in Khmer with English textbooks integrated', kh: 'ការបង្រៀនជាភាសាខ្មែរ ប្រើសៀវភៅភាសាអង់គ្លេស' },
    { en: 'Curriculum aligned with national labor market needs', kh: 'កម្មវិធីស្របតាមតម្រូវការទីផ្សារការងារជាតិ' },
    { en: 'Mandatory internship in Semester VII & VIII', kh: 'កម្មសិក្សាជាកំហិតក្នុងឆមាសទី ៧ និង ៨' },
    { en: 'Scholarship available up to 100% tuition waiver', kh: 'អាហារូបករណ៍ ១០០% សម្រាប់ការបើកថ្លៃសិក្សា' },
  ];

  const sampleCurriculum = [
    {
      year: { english: "Year 1: Foundation", khmer: "ឆ្នាំទី១: មូលដ្ឋានគ្រឹះ" },
      semesters: [
        {
          semester: { english: "Semester I", khmer: "ឆមាសទី១" },
          modules: [
            { english: "Academic English I", khmer: "ភាសាអង់គ្លេសសិក្សា I" },
            { english: "Introduction to Business", khmer: "គ្រឹះនៃពាណិជ្ជកម្ម" },
            { english: "Business Mathematics", khmer: "គណិតវិទ្យាពាណិជ្ជកម្ម" },
          ]
        },
        {
          semester: { english: "Semester II", khmer: "ឆមាសទី២" },
          modules: [
            { english: "Academic English II", khmer: "ភាសាអង់គ្លេសសិក្សា II" },
            { english: "Principles of Accounting", khmer: "គោលការណ៍គណនេយ្យ" },
            { english: "Principles of Management", khmer: "គោលការណ៍គ្រប់គ្រង" },
          ]
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-20">
          <p className={`text-secondary font-bold uppercase tracking-widest text-sm mb-3 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ថ្នាក់បរិញ្ញាបត្រ · ជាតិ' : 'Bachelor Program · National'}
          </p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'កម្មវិធីសិក្សាថ្នាក់ជាតិ' : 'National Curriculum'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'កម្មវិធីដែលទទួលស្គាល់ក្រសួង ផ្ដោតលើការអភិវឌ្ឍន៍ធនធានមនុស្សសម្រាប់ Cambodia.' : "Ministry-accredited programs developing competent human resources for Cambodia's economy."}
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
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'កម្មវិធីជាតិ' : 'National Curriculum'}</span>
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
                  <li><Link href="/programs/bachelor/national" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'កម្មវិធីជាតិ' : 'National Curriculum'}</Link></li>
                  <li><Link href="/programs/bachelor/international" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កម្មវិធីអន្តរជាតិ' : 'International Curriculum'}</Link></li>
                </ul>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <ul className="space-y-3">
                    <li><Link href="/scholarships" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អាហារូបករណ៍' : 'Scholarships'}</Link></li>
                    <li><Link href="/admissions" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការចុះឈ្មោះចូលរៀន' : 'Admissions'}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-sm">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h4 className={`font-bold text-primary mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ការសិក្សាពីរភាសា' : 'Bilingual Learning'}</h4>
                <p className={`text-sm text-gray-600 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ការបង្រៀនជាខ្មែរ ហើយប្រើប្រាស់ឯកសារការសិក្សាជាភាសាអង់គ្លេស' : 'Taught in Khmer using English academic materials.'}
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-16">
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ជំនាញដែលផ្ដល់ជូន' : 'Programs by College'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <p className={`text-lg text-gray-700 mb-8 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'កម្មវិធីថ្នាក់ជាតិត្រូវបានរៀបចំស្របតាមស្តង់ដារក្រសួងអប់រំ ផ្ដោតលើការអភិវឌ្ឍន៍ធនធានមនុស្សសម្រាប់ទីផ្សារការងារក្នុងស្រុក។' : "Our National Curriculum is aligned with Ministry of Education standards, developing human resources for Cambodia's national labor market."}
              </p>
              <div className="space-y-6">
                {info.academic_programs.bachelor_programs_by_college.map((collegeData, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center">
                      <BookOpen className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                      <h3 className={`text-xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{t(collegeData.college_name)}</h3>
                    </div>
                    <div className="p-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {collegeData.degrees.map((degree, dIdx) => (
                          <li key={dIdx} className="flex items-center text-gray-700">
                            <GraduationCap className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                            <span className={`text-gray-800 ${kh ? 'font-khmer' : ''}`}>{t(degree)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'គំរូរចនាសម្ព័ន្ធកម្មវិធី' : 'Sample Curriculum Structure'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-4"></div>
              <p className={`text-gray-600 mb-8 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ខាងក្រោមជាគំរូសម្រាប់ជំនាញ ពាណិជ្ជកម្មអន្តរជាតិ' : 'Sample structure for the International Business major.'}
              </p>
              {sampleCurriculum.map((year, yIdx) => (
                <CurriculumAccordion key={yIdx} year={year.year} semesters={year.semesters} />
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <h2 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'គុណប្រយោជន៍' : 'Key Benefits'}
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

            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ត្រៀមខ្លួនចាប់ផ្ដើម?' : 'Ready to Get Started?'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចុះឈ្មោះសម្រាប់ការទទួលចូលរៀន' : 'Register for the next intake at AIC.'}</p>
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
