import React from "react";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import info from "../../../information.json";

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">International Activities & Opportunities</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            As a student at {info.institute_overview.institution_name}, you have unparalleled access to global networking, cultural exchange, and international academic events.
          </p>
          
          <ul className="space-y-6">
            {info.student_activities_and_opportunities.map((activity, idx) => (
              <li key={idx} className="flex items-start bg-gray-50 p-6 border border-gray-100 rounded-sm hover:shadow-md transition-shadow">
                <Globe className="w-8 h-8 text-secondary mr-4 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-800 pt-1">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
