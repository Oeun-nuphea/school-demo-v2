'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Quote, Award, Briefcase, Star, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AlumniPage() {
  const { lang } = useLanguage();

  const alumniData = [
    {
      name: { english: "Sok Rithy", khmer: "សុខ រិទ្ធី" },
      graduation_year: "2016",
      major: { english: "Business Administration", khmer: "គ្រប់គ្រងពាណិជ្ជកម្ម" },
      current_role: { english: "CEO at TechStart Cambodia", khmer: "នាយកប្រតិបត្តិនៅ TechStart កម្ពុជា" },
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: { 
        english: "The practical knowledge and leadership skills I gained here were the foundation of my entrepreneurial journey.", 
        khmer: "ចំណេះដឹងជាក់ស្តែង និងជំនាញភាពជាអ្នកដឹកនាំដែលខ្ញុំទទួលបាននៅទីនេះ គឺជាមូលដ្ឋានគ្រឹះនៃដំណើរអាជីវកម្មរបស់ខ្ញុំ។" 
      }
    },
    {
      name: { english: "Chea Sreyneth", khmer: "ជា ស្រីណេត" },
      graduation_year: "2018",
      major: { english: "Information Technology", khmer: "ព័ត៌មានវិទ្យា" },
      current_role: { english: "Senior Developer at Wing Bank", khmer: "អ្នកអភិវឌ្ឍន៍ជាន់ខ្ពស់នៅធនាគារវីង" },
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: { 
        english: "The curriculum is perfectly aligned with modern tech industry standards, which helped me land my dream job instantly.", 
        khmer: "កម្មវិធីសិក្សាគឺស្របគ្នាទាំងស្រុងជាមួយនឹងស្តង់ដារឧស្សាហកម្មបច្ចេកវិទ្យាទំនើប ដែលបានជួយខ្ញុំឱ្យទទួលបានការងារក្នុងក្តីស្រមៃភ្លាមៗ។" 
      }
    },
    {
      name: { english: "Vannak Piseth", khmer: "វណ្ណៈ ពិសិដ្ឋ" },
      graduation_year: "2015",
      major: { english: "Civil Engineering", khmer: "វិស្វកម្មសំណង់ស៊ីវិល" },
      current_role: { english: "Project Manager at OCIC", khmer: "អ្នកគ្រប់គ្រងគម្រោងនៅ OCIC" },
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      quote: { 
        english: "I am proud to be an alumni. The professors genuinely care about student success and push you to achieve your best.", 
        khmer: "ខ្ញុំមានមោទនភាពដែលបានក្លាយជាអតីតនិស្សិត។ សាស្ត្រាចារ្យពិតជាយកចិត្តទុកដាក់ចំពោះភាពជោគជ័យរបស់និស្សិត ហើយជំរុញអ្នកឱ្យសម្រេចបានលទ្ធផលល្អបំផុត។" 
      }
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'អតីតនិស្សិតរបស់យើង' : 'Our Alumni'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {lang === 'kh' ? 'មោទនភាពនៃគ្រឹះស្ថានរបស់យើង ភាពជោគជ័យរបស់និស្សិតយើង' : 'The pride of our institution, the success of our graduates.'}
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
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'អតីតនិស្សិតរបស់យើង' : 'Our Alumni'}</span>
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
                  <Link href="/about/vision-and-missions" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'សីលធម៌ និងទស្សនវិស័យ' : 'Vision & Missions'}</Link>
                </li>
                <li>
                  <Link href="/about/founder-and-principal" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ស្ថាបនិក និងនាយកវិទ្យាស្ថាន' : 'Founder & Principal'}</Link>
                </li>
                <li>
                  <Link href="/about/campuses" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ទីតាំងសាខា' : 'Campus Locations'}</Link>
                </li>
                <li>
                  <Link href="/about/contact-and-branches" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ទំនាក់ទំនង និងសាខា' : 'Contact and Branches'}</Link>
                </li>
                <li>
                  <Link href="/about/alumni" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'អតីតនិស្សិតរបស់យើង' : 'Our Alumni'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{lang === 'kh' ? 'រឿងរ៉ាវជោគជ័យ' : 'Alumni Success Stories'}</h2>
                <div className="w-16 h-1 bg-secondary"></div>
              </div>
            </div>

            {/* Scrollable Carousel Wrapper */}
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {alumniData.map((alumni, idx) => (
                <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-sm p-8 flex flex-col gap-6 items-center hover:shadow-md transition-shadow min-w-[320px] w-[350px] shrink-0 snap-center h-full">
                  
                  {/* Photo & Basic Info */}
                  <div className="w-full flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner mb-4 relative">
                      <img src={alumni.image} alt={alumni.name.english} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 border-2 border-primary/10 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-khmer">{lang === 'kh' ? alumni.name.khmer : alumni.name.english}</h3>
                    <div className="inline-flex items-center bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full mt-2">
                      <Award className="w-3 h-3 mr-1" />
                      Class of {alumni.graduation_year}
                    </div>
                  </div>

                  {/* Professional Details & Quote */}
                  <div className="w-full border-t border-gray-100 pt-6 flex flex-col flex-grow">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start text-gray-700">
                        <Briefcase className="w-5 h-5 mr-3 mt-0.5 text-secondary flex-shrink-0" />
                        <span className="font-bold text-sm leading-snug">{lang === 'kh' ? alumni.current_role.khmer : alumni.current_role.english}</span>
                      </div>
                      <div className="flex items-start text-gray-600">
                        <GraduationCap className="w-5 h-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                        <span className="font-khmer text-sm leading-snug">{lang === 'kh' ? `ជំនាញ៖ ${alumni.major.khmer}` : `Degree: ${alumni.major.english}`}</span>
                      </div>
                    </div>

                    <div className="relative bg-gray-50 rounded-sm p-6 italic text-gray-700 font-khmer leading-relaxed text-sm flex-grow flex flex-col justify-center">
                      <Quote className="absolute top-4 left-4 w-6 h-6 text-secondary/20" />
                      <p className="relative z-10 pl-4">{lang === 'kh' ? alumni.quote.khmer : alumni.quote.english}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-primary text-white rounded-sm p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-4">{lang === 'kh' ? 'តើអ្នកជាអតីតនិស្សិតមែនទេ?' : 'Are you an Alumni?'}</h3>
              <p className="text-primary-100 mb-8 max-w-xl mx-auto">
                {lang === 'kh' 
                  ? 'ចូលរួមជាមួយបណ្តាញអតីតនិស្សិតរបស់យើង ដើម្បីទទួលបានព័ត៌មានថ្មីៗ ឱកាសការងារ និងចូលរួមកម្មវិធីផ្សេងៗ។' 
                  : 'Join our alumni network to stay updated on news, career opportunities, and exclusive networking events.'}
              </p>
              <button className="bg-secondary text-white px-8 py-3 rounded-sm font-bold shadow-lg hover:bg-white hover:text-primary transition-colors">
                {lang === 'kh' ? 'ចូលរួមបណ្តាញអតីតនិស្សិត' : 'Join Alumni Network'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
