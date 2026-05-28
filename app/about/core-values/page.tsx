import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import info from "../../../information.json";

export default function CoreValuesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Core Values</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At {info.institute_overview.institution_name}, our foundation is built upon four fundamental principles that guide everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {info.institute_overview.core_values.map((value, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-sm border border-gray-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full text-primary font-bold text-xl">
                  {idx + 1}
                </div>
                <span className="text-xl font-serif font-semibold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
