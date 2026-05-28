import React from "react";
import Link from "next/link";
import { ChevronRight, DollarSign } from "lucide-react";
import info from "../../../information.json";
export default function TuitionFeesPage() {
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
            Tuition & Fees
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto">
            Transparent and affordable world-class education.
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
          <span className="text-gray-900 font-medium">Tuition Fees</span>
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
                  <Link href="/admissions/master" className="block text-gray-600 hover:text-primary transition-colors">Master Programs</Link>
                </li>
                <li>
                  <Link href="/admissions/bachelor" className="block text-gray-600 hover:text-primary transition-colors">Bachelor Programs</Link>
                </li>
                <li>
                  <Link href="/admissions/intake-dates" className="block text-gray-600 hover:text-primary transition-colors">Intake Dates</Link>
                </li>
                <li>
                  <Link href="/admissions/tuition-fees" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">Tuition Fees</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Investment in Your Future</h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At {info.institute_overview.institution_name}, we are committed to providing an affordable, world-class education. Below is our comprehensive fee structure across all campuses. All figures are represented in USD (US Dollars) per academic year.
            </p>

            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-5 font-serif font-bold border-b border-primary-light whitespace-nowrap">Campus Location</th>
                      <th className="p-5 font-serif font-bold border-b border-primary-light text-right whitespace-nowrap">Associate Degree</th>
                      <th className="p-5 font-serif font-bold border-b border-primary-light text-right whitespace-nowrap">Bachelor Degree</th>
                      <th className="p-5 font-serif font-bold border-b border-primary-light text-right whitespace-nowrap">Master Degree</th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.tuition_fees_per_year_usd.map((fee, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-5 font-medium text-gray-900 flex items-center">
                          <div className="w-2 h-2 rounded-full bg-secondary mr-3 flex-shrink-0"></div>
                          {fee.campus}
                        </td>
                        <td className="p-5 text-right text-gray-700 font-medium">${fee.associate_degree}</td>
                        <td className="p-5 text-right font-bold text-primary text-lg">${fee.bachelor_degree}</td>
                        <td className="p-5 text-right text-gray-700 font-medium">${fee.master_degree}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-sm border border-gray-200 flex items-start">
              <DollarSign className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Financial Aid & Scholarships</h4>
                <p className="text-gray-600">
                  {info.institute_overview.institution_name} offers a range of scholarships and financial aid options for outstanding and underprivileged students. Contact our admissions office for detailed eligibility criteria.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
