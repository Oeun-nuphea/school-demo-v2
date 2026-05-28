import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import info from "../../../information.json";

export default function CoreValuesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="University Core Values"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            Motto & Vision
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto">
            {info.institution_info.motto.english}
          </p>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto mt-2 font-khmer">
            {info.institution_info.motto.khmer}
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
          <span className="text-gray-900 font-medium">Motto & Vision</span>
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
                  <Link href="/about/core-values" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">Motto & Vision</Link>
                </li>
                <li>
                  <Link href="/about/campuses" className="block text-gray-600 hover:text-primary transition-colors">Campus Locations</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Vision & Mission</h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>

            <div className="space-y-8 mb-12">
              <div className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed font-khmer">
                  {info.about_institute.vision_and_mission.vision}
                </p>
              </div>
              <div className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed font-khmer">
                  {info.about_institute.vision_and_mission.mission}
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{info.about_institute.goals.title}</h2>
            <div className="w-16 h-1 bg-secondary mb-8"></div>

            <ul className="space-y-4">
              {info.about_institute.goals.points.map((point, idx) => (
                <li key={idx} className="flex items-start bg-gray-50 p-4 border border-gray-100 rounded-sm">
                  <span className="text-gray-800 font-khmer pt-1 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
