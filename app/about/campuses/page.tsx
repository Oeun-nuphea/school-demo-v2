import React from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import info from "../../../information.json";

export default function CampusesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="University Campus"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            Our Campuses
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto font-khmer">
            ទីតាំងសាខារបស់ {info.institution_info.name.khmer}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">About AIC</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Our Campuses</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">In this section</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about/core-values" className="block text-gray-600 hover:text-primary transition-colors">Motto & Vision</Link>
                </li>
                <li>
                  <Link href="/about/campuses" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">Campus Locations</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Discover Our Locations</h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>

            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {info.institution_info.name.english} operates across {info.contact_and_branches.length} distinct campuses nationwide.
            </p>

            <div className="space-y-12">
              {info.contact_and_branches.map((campus, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-0 items-stretch bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-full md:w-2/5 min-h-[250px] relative overflow-hidden bg-gray-100">
                    <img
                      src={idx === 0 ? "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : `https://picsum.photos/seed/${campus.branch_name}/800/600`}
                      alt={campus.branch_name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                      <h3 className="text-2xl font-serif font-bold text-gray-900 font-khmer">{campus.branch_name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed font-khmer">
                      {campus.address}
                    </p>

                    <div className="mt-4 space-y-2">
                      {campus.phone_numbers.map((phone, pIdx) => (
                        <div key={pIdx} className="flex items-center text-gray-700">
                          <Phone className="w-4 h-4 mr-3 opacity-60" />
                          {phone}
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
