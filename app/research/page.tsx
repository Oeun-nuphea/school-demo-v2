'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, FlaskConical, Globe2, BookOpen, Microscope } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import info from "../../information.json";

export default function ResearchPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'ការស្រាវជ្រាវ' : 'Research & Innovation'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {lang === 'kh' ? 'មជ្ឈមណ្ឌលស្រាវជ្រាវ និងអភិវឌ្ឍន៍' : 'Advancing knowledge through scientific research and global collaboration.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ការស្រាវជ្រាវ' : 'Research'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">
            {lang === 'kh' ? 'មជ្ឈមណ្ឌលស្រាវជ្រាវ និងអភិវឌ្ឍន៍' : 'Research and Development Center'}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed font-khmer">
            {lang === 'kh' 
              ? 'វិទ្យាស្ថានអាស៊ី កម្ពុជា ជំរុញឱ្យនិស្សិតមានគំនិតច្នៃប្រឌិត និងការស្រាវជ្រាវបែបវិទ្យាសាស្ត្រ ដើម្បីគាំទ្រដល់ការសិក្សា និងការអនុវត្តការងារជាក់ស្តែងក្នុងសង្គម។' 
              : 'Asian Institute of Cambodia actively encourages students and faculty to engage in creative thinking and scientific research, supporting both academic growth and practical societal impact.'}
          </p>
        </div>

        {/* Strategic Goals Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <Microscope className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-khmer">
              {lang === 'kh' ? 'ការស្រាវជ្រាវបែបវិទ្យាសាស្ត្រ' : 'Scientific Research'}
            </h3>
            <p className="text-gray-600 font-khmer leading-relaxed">
              {lang === 'kh' ? info.about_institute.goals.points[2].khmer.replace('៣. ', '') : info.about_institute.goals.points[2].english.replace('3. ', '')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <Globe2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-khmer">
              {lang === 'kh' ? 'កិច្ចសហការអន្តរជាតិ' : 'Global Collaboration'}
            </h3>
            <p className="text-gray-600 font-khmer leading-relaxed">
              {lang === 'kh' ? info.about_institute.goals.points[6].khmer.replace('៧. ', '') : info.about_institute.goals.points[6].english.replace('7. ', '')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <FlaskConical className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-khmer">
              {lang === 'kh' ? 'មជ្ឈមណ្ឌល R&D' : 'R&D Facilities'}
            </h3>
            <p className="text-gray-600 font-khmer leading-relaxed">
              {lang === 'kh' ? info.about_institute.goals.points[7].khmer.replace('៨. ', '') : info.about_institute.goals.points[7].english.replace('8. ', '')}
            </p>
          </div>

        </div>

        {/* Call to action for researchers */}
        <div className="bg-gray-50 rounded-sm border border-gray-200 p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-serif font-bold text-primary mb-3 font-khmer">
              {lang === 'kh' ? 'ចូលរួមការស្រាវជ្រាវជាមួយយើង' : 'Join Our Research Initiatives'}
            </h3>
            <p className="text-gray-700 font-khmer">
              {lang === 'kh' ? 'ទាក់ទងមកកាន់ការិយាល័យស្រាវជ្រាវ ដើម្បីស្វែងយល់បន្ថែមអំពីឱកាសចូលរួមក្នុងគម្រោងស្រាវជ្រាវថ្មីៗ។' : 'Contact the Office of Research to learn more about funding opportunities, ongoing projects, and how to get involved.'}
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <Link href="/about" className="px-6 py-3 bg-white border border-primary text-primary font-bold rounded-sm hover:bg-primary hover:text-white transition-colors">
              {lang === 'kh' ? 'ស្វែងយល់បន្ថែម' : 'Learn More'}
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
