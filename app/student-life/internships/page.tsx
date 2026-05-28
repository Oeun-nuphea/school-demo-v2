'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Briefcase } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function InternshipsPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'កម្មសិក្សា និងការងារ' : 'Internships & Jobs'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {t(info.opportunities.jobs_inside_and_outside_country.title)}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Student Life</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'កម្មសិក្សា និងការងារ' : 'Internships & Jobs'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Student Life</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/student-life/schedules" className="block text-gray-600 hover:text-primary border-l-2 border-transparent pl-3 transition-colors">{lang === 'kh' ? 'វេនសិក្សា' : 'Study Schedules'}</Link>
                </li>
                <li>
                  <Link href="/student-life/activities" className="block text-gray-600 hover:text-primary border-l-2 border-transparent pl-3 transition-colors">{lang === 'kh' ? 'សកម្មភាពអន្តរជាតិ' : 'International Activities'}</Link>
                </li>
                <li>
                  <Link href="/student-life/internships" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'កម្មសិក្សា និងការងារ' : 'Internships & Jobs'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
              {t(info.opportunities.jobs_inside_and_outside_country.title)}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {lang === 'kh' ? `យើងមិនត្រឹមតែផ្តល់ការអប់រំប៉ុណ្ណោះទេ ថែមទាំងរៀបចំអ្នកសម្រាប់ទីផ្សារការងារ។ ${t(info.institution_info.name)} មានដៃគូសហការជាមួយស្ថាប័នល្បីៗជាច្រើន។` : `We don't just provide an education; we prepare you for the workforce. ${t(info.institution_info.name)} partners with prestigious global organizations to provide our students with hands-on professional experience.`}
            </p>

            <div className="space-y-8">
              {info.opportunities.jobs_inside_and_outside_country.details.map((detail, idx) => (
                <div key={idx} className="bg-white border-l-4 border-primary p-8 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-4 rounded-full mr-6 flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                        {lang === 'kh' ? `កម្មវិធីឱកាសការងារ ${idx + 1}` : `Placement Program ${idx + 1}`}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed font-khmer">
                        {t(detail)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{lang === 'kh' ? 'មជ្ឈមណ្ឌលសេវាកម្មការងារ' : 'Career Services Center'}</h3>
              <p className="text-gray-600 mb-6">
                {lang === 'kh' ? 'មជ្ឈមណ្ឌលរបស់យើងជួយនិស្សិតក្នុងការរៀបចំប្រវត្តិរូបសង្ខេប ត្រៀមសម្ភាសន៍ និងភ្ជាប់ទំនាក់ទំនងជាមួយដៃគូក្រុមហ៊ុន។' : 'Our dedicated Career Services Center assists students with resume building, interview preparation, and connecting with our extensive network of alumni and corporate partners.'}
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-sm font-semibold hover:bg-primary-light transition-colors">
                {lang === 'kh' ? 'កក់ម៉ោងប្រឹក្សា' : 'Book a Counseling Session'}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
