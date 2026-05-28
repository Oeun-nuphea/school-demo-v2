'use client'
import React, { use } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle, BookOpen } from "lucide-react";
import info from "../../../information.json";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Map English slugs to JSON English Names
const collegeSlugs: Record<string, string> = {
  "business": "College of Business Administration",
  "law": "College of Law",
  "arts": "College of Arts, Humanities & Foreign Languages",
  "agriculture": "College of Agriculture",
  "science": "College of Science and Technology",
  "engineering": "College of Civil Engineering", 
};

export default function CollegePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const targetCollegeNameEn = collegeSlugs[resolvedParams.slug];
  const { t, lang } = useLanguage();
  
  if (!targetCollegeNameEn) {
    notFound();
  }

  let degrees: {khmer: string, english: string}[] = [];
  let displayTitleEn = targetCollegeNameEn;
  let displayTitleKh = "";

  if (resolvedParams.slug === 'engineering') {
    displayTitleEn = "College of Engineering";
    displayTitleKh = "មហាវិទ្យាល័យវិស្វកម្ម";
    const civil = info.academic_programs.bachelor_programs_by_college.find(c => c.college_name.english === "College of Civil Engineering");
    const electrical = info.academic_programs.bachelor_programs_by_college.find(c => c.college_name.english === "College of Electrical Engineering and Electronics");
    if (civil) {
      degrees.push(...civil.degrees.map(d => ({ khmer: d.khmer, english: `Civil: ${d.english}` })));
    }
    if (electrical) {
      degrees.push(...electrical.degrees.map(d => ({ khmer: d.khmer, english: `Electrical: ${d.english}` })));
    }
  } else {
    const collegeData = info.academic_programs.bachelor_programs_by_college.find(c => c.college_name.english === targetCollegeNameEn);
    if (collegeData) {
      degrees = collegeData.degrees;
      displayTitleKh = collegeData.college_name.khmer;
    } else {
      notFound();
    }
  }

  const currentTitle = lang === 'kh' ? displayTitleKh : displayTitleEn;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {currentTitle}
          </h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
          <span className="text-gray-900 font-medium">Colleges</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
          <span className="text-gray-900 font-medium">{currentTitle}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Academic Colleges</h3>
              <ul className="space-y-3">
                {Object.keys(collegeSlugs).map((slugKey) => {
                  const isActive = slugKey === resolvedParams.slug;
                  const enName = slugKey === 'engineering' ? 'Engineering' : collegeSlugs[slugKey].replace("College of ", "");
                  const khName = info.academic_programs.bachelor_programs_by_college.find(c => c.college_name.english === collegeSlugs[slugKey])?.college_name.khmer || enName;
                  return (
                    <li key={slugKey}>
                      <Link 
                        href={`/colleges/${slugKey}`} 
                        className={`block transition-colors ${isActive ? "text-primary font-bold border-l-2 border-primary pl-3" : "text-gray-600 hover:text-primary"}`}
                      >
                        {lang === 'kh' ? khName.replace('មហាវិទ្យាល័យ', '') : enName}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-secondary mr-4" />
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                {lang === 'kh' ? 'មុខជំនាញ និងបរិញ្ញាបត្រ' : 'Available Majors & Degrees'}
              </h2>
            </div>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {lang === 'kh' ? `សូមស្វាគមន៍មកកាន់ ${displayTitleKh} នៅ ${t(info.institution_info.name)}។ យើងផ្តល់ជូននូវកម្មវិធីសិក្សាឯកទេស ដែលរចនាឡើងដើម្បីបំពាក់ឱ្យអ្នកនូវចំណេះដឹងជ្រៅជ្រះ សមត្ថភាពត្រិះរិះពិចារណា និងជំនាញជាក់ស្តែងសម្រាប់អាជីពរបស់អ្នក។` : `Welcome to the ${displayTitleEn} at ${t(info.institution_info.name)}. We offer specialized degree programs designed to equip you with deep expertise, critical thinking abilities, and practical skills for your professional career.`}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {degrees.map((degree, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1 font-khmer">{t(degree)}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
