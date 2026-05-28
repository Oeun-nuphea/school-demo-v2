import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import info from "../../../information.json";

export default function IntakeDatesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Intake Dates</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Mark your calendars for our upcoming intake sessions. Don't miss your chance to join {info.institute_overview.institution_name}.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.intake_dates.map((dateString, idx) => {
              const date = new Date(dateString);
              return (
                <div key={idx} className="border uni-border p-6 rounded-sm flex flex-col items-center text-center bg-gray-50 hover:bg-primary hover:text-white transition-all group">
                  <Calendar className="w-8 h-8 text-secondary mb-4 group-hover:text-white transition-colors" />
                  <span className="text-xl font-bold">
                    {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <span className="text-sm mt-2 opacity-80 uppercase tracking-widest">Enrollment Cycle</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
