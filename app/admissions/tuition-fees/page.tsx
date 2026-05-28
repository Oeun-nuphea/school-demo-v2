import React from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign } from "lucide-react";
import info from "../../../information.json";

export default function TuitionFeesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Tuition Fees (Per Year)</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            At {info.institute_overview.institution_name}, we are committed to providing an affordable, world-class education. Below is our fee structure across all campuses.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 font-bold border-b border-primary-light">Campus Location</th>
                  <th className="p-4 font-bold border-b border-primary-light text-right">Associate Degree</th>
                  <th className="p-4 font-bold border-b border-primary-light text-right">Bachelor Degree</th>
                  <th className="p-4 font-bold border-b border-primary-light text-right">Master Degree</th>
                </tr>
              </thead>
              <tbody>
                {info.tuition_fees_per_year_usd.map((fee, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                      {fee.campus}
                    </td>
                    <td className="p-4 text-right text-gray-700">${fee.associate_degree}</td>
                    <td className="p-4 text-right font-bold text-primary">${fee.bachelor_degree}</td>
                    <td className="p-4 text-right text-gray-700">${fee.master_degree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-6 flex items-center">
            <DollarSign className="w-4 h-4 mr-1" /> All figures are represented in USD (US Dollars) per academic year.
          </p>
        </div>
      </div>
    </main>
  );
}
