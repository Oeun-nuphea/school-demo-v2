'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function CampusesPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'ទីតាំងសាខា' : 'Our Campuses'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {lang === 'kh' ? `ទីតាំងសាខារបស់ ${t(info.institution_info.name)}` : `Explore ${t(info.institution_info.name)} campus locations.`}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">About Us</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ទីតាំងសាខា' : 'Our Campuses'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about/vision-and-missions" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ទស្សនវិស័យ បេសកកម្ម និងគោលដៅ' : 'Vision, Mission & Goals'}</Link>
                </li>
                <li>
                  <Link href="/about/structure" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'រចនាសម្ព័ន្ធស្ថាប័ន' : 'Organization Structure'}</Link>
                </li>
                <li>
                  <Link href="/about/founder-and-principal" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ស្ថាបនិក និងនាយកវិទ្យាស្ថាន' : 'Founder & Principal'}</Link>
                </li>
                <li>
                  <Link href="/about/campuses" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'ទីតាំងសាខា' : 'Campus Locations'}</Link>
                </li>
                <li>
                  <Link href="/about/contact" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ទំនាក់ទំនង' : 'Contact Us'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{lang === 'kh' ? 'ស្វែងរកទីតាំងរបស់យើង' : 'Discover Our Locations'}</h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>

            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              {t(info.institution_info.name)} operates across {info.contact_and_branches.length} distinct campuses nationwide.
            </p>

            <div className="space-y-12">
              {info.contact_and_branches.map((campus, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-0 items-stretch bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="w-full md:w-2/5 min-h-[250px] relative overflow-hidden bg-gray-100">
                    <img
                      src={idx === 0 ? "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" : `https://picsum.photos/seed/${campus.branch_name.english}/800/600`}
                      alt={t(campus.branch_name)}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={`https://maps.google.com/maps?q=${encodeURIComponent(campus.address.english + ', Cambodia')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary px-6 py-3 rounded-sm font-bold flex items-center shadow-lg hover:bg-secondary hover:text-white transition-colors"
                      >
                        <MapPin className="w-5 h-5 mr-2" />
                        {lang === 'kh' ? 'បង្ហាញផែនទី' : 'View Map'}
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                      <h3 className="text-2xl font-serif font-bold text-gray-900 font-khmer">{t(campus.branch_name)}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed font-khmer">
                      {t(campus.address)}
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
