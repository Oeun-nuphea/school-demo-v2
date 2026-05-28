import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import info from "../../../information.json";

export default function BachelorProgramsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Bachelor Programs</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Explore our diverse undergraduate degrees designed to provide you with the foundational knowledge and practical skills for your future career.
          </p>
          
          <div className="space-y-12">
            {info.academic_programs.bachelor_programs.map((collegeData, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-primary" />
                  {collegeData.college}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {collegeData.degrees.map((degree, dIdx) => (
                    <div key={dIdx} className="bg-gray-50 p-4 border border-gray-100 rounded-sm hover:border-primary/50 transition-colors">
                      <span className="font-medium text-gray-800 text-sm">{degree}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
