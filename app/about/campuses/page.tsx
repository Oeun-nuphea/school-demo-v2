import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import info from "../../../information.json";

export default function CampusesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <h1 className="text-4xl font-serif font-bold text-primary mb-6">Our Campuses</h1>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {info.institute_overview.institution_name} operates across {info.institute_overview.campus_locations.length} distinct campuses nationwide, bringing quality education closer to you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.institute_overview.campus_locations.map((campus, idx) => (
              <div key={idx} className="border uni-border p-6 rounded-sm flex flex-col items-center text-center hover:border-primary transition-colors hover:shadow-md">
                <div className="w-12 h-12 bg-primary-light/10 flex items-center justify-center rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900">{campus} Campus</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
