import React from "react";
import Link from "next/link";
import { ChevronRight, BookOpen } from "lucide-react";
import info from "../../../information.json";
export default function BachelorProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Bachelor Programs"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            Bachelor Programs
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto">
            Discover a comprehensive range of undergraduate degrees tailored for global success.
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
          <span className="text-gray-900 font-medium">Bachelor Programs</span>
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
                  <Link href="/admissions/bachelor" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">Bachelor Programs</Link>
                </li>
                <li>
                  <Link href="/admissions/intake-dates" className="block text-gray-600 hover:text-primary transition-colors">Intake Dates</Link>
                </li>
                <li>
                  <Link href="/admissions/tuition-fees" className="block text-gray-600 hover:text-primary transition-colors">Tuition Fees</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Undergraduate Degrees</h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Our diverse undergraduate curriculum provides a solid foundation of theoretical knowledge and practical application. Explore our colleges below to find the perfect major for your academic journey.
            </p>

            <div className="space-y-12">
              {info.academic_programs.bachelor_programs.map((collegeData, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center">
                    <BookOpen className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-serif font-bold text-gray-900">{collegeData.college}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {collegeData.degrees.map((degree, dIdx) => (
                        <li key={dIdx} className="flex items-center text-gray-700 hover:text-primary transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                          {degree}
                        </li>
                      ))}
                    </ul>
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
