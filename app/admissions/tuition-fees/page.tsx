'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, DollarSign } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function TuitionFeesPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Tuition and Fees"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'តម្លៃសិក្សា' : 'Tuition & Fees'}
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto font-khmer">
            {lang === 'kh' ? 'ការបង់ថ្លៃសិក្សា និងអាហារូបករណ៍' : 'Educational investment and scholarship opportunities.'}
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
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'តម្លៃសិក្សា' : 'Tuition Fees'}</span>
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
                  <Link href="/admissions/master" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</Link>
                </li>
                <li>
                  <Link href="/admissions/bachelor" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</Link>
                </li>
                <li>
                  <Link href="/admissions/intake-dates" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'កាលបរិច្ឆេទចូលរៀន' : 'Intake Dates'}</Link>
                </li>
                <li>
                  <Link href="/admissions/tuition-fees" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'តម្លៃសិក្សា' : 'Tuition Fees'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
              {lang === 'kh' ? 'ការបង់ថ្លៃសិក្សា' : 'Fee Structure'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {lang === 'kh' ? 'ខាងក្រោមនេះជាតារាងតម្លៃសិក្សាសម្រាប់គ្រប់ទីតាំងសាខាទាំងអស់។ តម្លៃគិតជាប្រាក់ដុល្លារអាមេរិក (USD)។' : 'Below is our comprehensive fee structure across all campuses. All figures are represented in USD.'}
            </p>

            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-5 font-serif font-bold border-b border-primary-light whitespace-nowrap">
                        {lang === 'kh' ? 'ទីតាំងសាខា' : 'Campus Location'}
                      </th>
                      <th className="p-5 font-serif font-bold border-b border-primary-light text-right whitespace-nowrap font-khmer">
                        {lang === 'kh' ? 'បរិញ្ញាបត្ររង' : 'Associate'}
                      </th>
                      <th className="p-5 font-serif font-bold border-b border-primary-light text-right whitespace-nowrap font-khmer">
                        {lang === 'kh' ? 'បរិញ្ញាបត្រ' : 'Bachelor'}
                      </th>
                      <th className="p-5 font-serif font-bold border-b border-primary-light text-right whitespace-nowrap font-khmer">
                        {lang === 'kh' ? 'បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.tuition_fees_per_year.map((feeData, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-5 font-medium text-gray-900 flex items-center font-khmer">
                          <div className="w-2 h-2 rounded-full bg-secondary mr-3 flex-shrink-0"></div>
                          {t(feeData.campus)}
                        </td>
                        <td className="p-5 text-right text-gray-700 font-medium font-khmer">{feeData.fees.associate_degree}</td>
                        <td className="p-5 text-right font-bold text-primary font-khmer">{feeData.fees.bachelor_degree}</td>
                        <td className="p-5 text-right text-gray-700 font-medium font-khmer">{feeData.fees.master_degree}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-200">
              <div className="flex items-start mb-6">
                <DollarSign className="w-8 h-8 text-secondary mr-4 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-gray-900 font-khmer">{t(info.scholarship_conditions.title)}</h3>
              </div>
              <div className="space-y-6">
                {info.scholarship_conditions.categories.map((cat, idx) => (
                  <div key={idx} className="bg-white p-6 border border-gray-100 rounded-sm">
                    <h4 className="font-bold text-primary mb-2 font-khmer">{t(cat.level)}</h4>
                    <p className="text-gray-700 font-khmer leading-relaxed">{t(cat.condition)}</p>
                  </div>
                ))}
                <p className="text-sm text-gray-500 italic font-khmer mt-4">
                  * {t(info.scholarship_conditions.note)}
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
