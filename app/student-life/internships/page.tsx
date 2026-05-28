import React from "react";
import Link from "next/link";
import { ChevronRight, Briefcase } from "lucide-react";
import info from "../../../information.json";

export default function InternshipsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Internships and Jobs"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            Internships & Jobs
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto font-khmer">
            {info.opportunities.jobs_inside_and_outside_country.title}
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
          <span className="text-gray-900 font-medium">Internships & Jobs</span>
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
                  <Link href="/student-life/schedules" className="block text-gray-600 hover:text-primary transition-colors">Study Schedules</Link>
                </li>
                <li>
                  <Link href="/student-life/activities" className="block text-gray-600 hover:text-primary transition-colors">International Activities</Link>
                </li>
                <li>
                  <Link href="/student-life/internships" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">Internships & Jobs</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
              {info.opportunities.jobs_inside_and_outside_country.title}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>

            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              We don't just provide an education; we prepare you for the workforce. {info.institution_info.name.english} partners with prestigious global organizations to provide our students with hands-on professional experience.
            </p>

            <div className="space-y-8">
              {info.opportunities.jobs_inside_and_outside_country.details.map((detail, idx) => (
                <div key={idx} className="bg-white border-l-4 border-primary p-8 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-4 rounded-full mr-6 flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Placement Program {idx + 1}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed font-khmer">
                        {detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Services Center</h3>
              <p className="text-gray-600 mb-6">
                Our dedicated Career Services Center assists students with resume building, interview preparation, and connecting with our extensive network of alumni and corporate partners.
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-sm font-semibold hover:bg-primary-light transition-colors">
                Book a Counseling Session
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
