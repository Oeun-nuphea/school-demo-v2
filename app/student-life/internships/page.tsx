import React from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import info from "../../../information.json";

export default function InternshipsPage() {
  // Extract just the jobs/internships related info for this page
  const internshipInfo = info.student_activities_and_opportunities.find(a => a.toLowerCase().includes('internship') || a.toLowerCase().includes('job'));

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Internships & Jobs</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Jumpstart your career with our robust placement programs. {info.institute_overview.institution_name} partners with prestigious global organizations to provide our students with hands-on professional experience.
          </p>
          
          <div className="bg-primary/5 p-8 border border-primary/20 rounded-sm flex items-start">
            <Briefcase className="w-10 h-10 text-primary mr-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Placement Program</h3>
              <p className="text-lg text-gray-700">
                {internshipInfo || "Opportunities for jobs and internships abroad, ensuring you graduate ready for the global workforce."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
