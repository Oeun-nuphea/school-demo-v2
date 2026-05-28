import React from "react";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import info from "../../../information.json";

export default function MasterProgramsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Master Programs</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Advance your career and deepen your expertise with our comprehensive postgraduate degree options at {info.institute_overview.institution_name}.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {info.academic_programs.master_programs.map((program, idx) => (
              <li key={idx} className="flex items-center p-4 border border-gray-100 rounded-sm hover:bg-gray-50 transition-colors">
                <GraduationCap className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-800">{program}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
