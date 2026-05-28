import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import info from "../../../information.json";

export default function SchedulesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Study Schedules</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            We offer flexible study schedules to accommodate the diverse needs of our students at {info.institute_overview.institution_name}.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Monday to Friday */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Monday to Friday
              </h2>
              <ul className="space-y-4">
                {info.study_schedule.monday_to_friday.map((schedule, idx) => (
                  <li key={idx} className="flex items-center bg-gray-50 p-4 border border-gray-100 rounded-sm">
                    <Clock className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <span className="block font-bold text-gray-800 uppercase tracking-widest text-xs mb-1">{schedule.shift}</span>
                      <span className="block font-medium text-primary">{schedule.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekend */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Saturday & Sunday
              </h2>
              <ul className="space-y-4">
                {info.study_schedule.weekend_saturday_and_sunday.map((schedule, idx) => (
                  <li key={idx} className="flex items-center bg-gray-50 p-4 border border-gray-100 rounded-sm">
                    <Clock className="w-6 h-6 text-secondary mr-4" />
                    <div>
                      <span className="block font-bold text-gray-800 uppercase tracking-widest text-xs mb-1">{schedule.shift}</span>
                      <span className="block font-medium text-secondary">{schedule.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
