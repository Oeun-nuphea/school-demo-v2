'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Quote, Mail, GraduationCap, Briefcase } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function FounderAndPrincipalPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'ស្ថាបនិក និងនាយកវិទ្យាស្ថាន' : 'Founder & Principal'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {t(info.about_institute.director_message_title)}
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
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ស្ថាបនិក និងនាយកវិទ្យាស្ថាន' : 'Priciple'}</span>
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
                  <Link href="/about/founder-and-principal" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'ស្ថាបនិក និងនាយកវិទ្យាស្ថាន' : 'Priciple'}</Link>
                </li>
                <li>
                  <Link href="/about/campuses" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ទីតាំងសាខា' : 'Campus Locations'}</Link>
                </li>
                <li>
                  <Link href="/about/contact-and-branches" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ទំនាក់ទំនង និងសាខា' : 'Contact and Branches'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">

            <div className="bg-white border border-gray-100 shadow-sm rounded-sm p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Profile Image Placeholder */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden relative border border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Priciple"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-white p-4 text-center">
                      <p className="font-bold font-serif">{lang === 'kh' ? 'ឯកឧត្តម នាយកវិទ្យាស្ថាន' : 'H.E. Institute Director'}</p>
                      <p className="text-sm opacity-90">{lang === 'kh' ? 'ស្ថាបនិក និងនាយក' : 'Founder & Principal'}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 bg-gray-50 border border-gray-100 rounded-sm p-3 hover:text-primary transition-colors hover:bg-primary/5 cursor-pointer mt-4">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:director@aic.edu.kh" className="text-sm font-medium">director@aic.edu.kh</a>
                  </div>
                </div>

                {/* Message Content */}
                <div className="w-full md:w-2/3">
                  <Quote className="w-12 h-12 text-secondary/30 mb-6" />
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 font-khmer">{t(info.about_institute.director_message_title)}</h2>
                  <div className="w-16 h-1 bg-secondary mb-8"></div>

                  <div className="space-y-6 text-gray-700 leading-relaxed font-khmer">
                    <p className="text-lg">
                      {lang === 'kh'
                        ? `សូមស្វាគមន៍មកកាន់ ${t(info.institution_info.name)}។ ក្នុងនាមជាស្ថាបនិក និងនាយកវិទ្យាស្ថាន ខ្ញុំមានសេចក្តីសោមនស្សរីករាយយ៉ាងក្រៃលែង ដែលបានស្វាគមន៍អ្នកទាំងអស់គ្នាមកកាន់គ្រឹះស្ថានឧត្តមសិក្សារបស់យើង។`
                        : `Welcome to ${t(info.institution_info.name)}. As the Priciple, I am immensely pleased to welcome you all to our higher education institution.`}
                    </p>
                    <p>
                      {lang === 'kh'
                        ? 'គោលបំណងចម្បងរបស់យើង គឺការបណ្តុះបណ្តាលធនធានមនុស្សប្រកបដោយគុណភាព សមត្ថភាព និងសីលធម៌ខ្ពស់ ស្របតាមតម្រូវការទីផ្សារការងារជាតិ និងអន្តរជាតិ។ យើងជឿជាក់យ៉ាងមុតមាំថា ការអប់រំគឺជាគន្លឹះតែមួយគត់ក្នុងការអភិវឌ្ឍសង្គមជាតិ។'
                        : 'Our primary purpose is to train human resources with high quality, competence, and morality, in line with the needs of national and international labor markets. We firmly believe that education is the ultimate key to developing our nation.'}
                    </p>
                    <p>
                      {lang === 'kh'
                        ? 'យើងបានប្តេជ្ញាចិត្តក្នុងការផ្តល់ជូននូវបរិយាកាសសិក្សាដ៏ល្អប្រសើរ ជាមួយសាស្ត្រាចារ្យដែលមានបទពិសោធន៍ និងកម្មវិធីសិក្សាដែលស្របតាមស្តង់ដារជាតិ និងអន្តរជាតិ។ យើងរំពឹងថានិស្សិតគ្រប់រូបនឹងទទួលបានភាពជោគជ័យក្នុងអាជីពរបស់ពួកគេ។'
                        : 'We are committed to providing an excellent learning environment with experienced professors and a curriculum that meets national and international standards. We expect every student to achieve success in their careers.'}
                    </p>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <img src="/logo-transparent.png" alt="Signature" className="h-16 opacity-50 mb-2 grayscale" />
                    <p className="font-bold text-gray-900 font-khmer">{lang === 'kh' ? 'នាយកវិទ្យាស្ថាន' : 'Institute Director'}</p>
                    <p className="text-sm text-gray-500">{t(info.institution_info.name)}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Background & Experience Section */}
            <div className="mt-8 bg-white border border-gray-100 shadow-sm rounded-sm p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                {lang === 'kh' ? 'ប្រវត្តិការសិក្សា និងបទពិសោធន៍' : 'Educational Background & Experience'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Education */}
                <div>
                  <div className="flex items-center mb-6">
                    <GraduationCap className="w-7 h-7 text-secondary mr-3" />
                    <h4 className="text-xl font-bold text-gray-800">{lang === 'kh' ? 'ប្រវត្តិការសិក្សា' : 'Educational Background'}</h4>
                  </div>
                  <ul className="space-y-4 text-gray-700 font-khmer">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{lang === 'kh' ? 'បរិញ្ញាបត្រជាន់ខ្ពស់ / បណ្ឌិត...' : 'Master\'s / Ph.D. degree...'}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{lang === 'kh' ? 'ជំនាញ...' : 'Majoring in...'}</span>
                    </li>
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <div className="flex items-center mb-6">
                    <Briefcase className="w-7 h-7 text-secondary mr-3" />
                    <h4 className="text-xl font-bold text-gray-800">{lang === 'kh' ? 'បទពិសោធន៍ការងារ' : 'Professional Experience'}</h4>
                  </div>
                  <ul className="space-y-4 text-gray-700 font-khmer">
                    <li className="flex items-start bg-gray-50 p-4 border border-gray-100 rounded-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span>
                        <strong className="text-gray-900 block mb-1">{lang === 'kh' ? 'ស្ថាបនិក និងនាយកវិទ្យាស្ថាន (២០១១ - បច្ចុប្បន្ន)' : 'Founder & Principal (2011 - Present)'}</strong>
                        <span className="leading-relaxed">{lang === 'kh' ? 'បានបង្កើតវិទ្យាស្ថាននេះឡើងតាំងពីឆ្នាំ ២០១១ ដោយមានចក្ខុវិស័យវែងឆ្ងាយក្នុងការអភិវឌ្ឍវិស័យអប់រំនៅកម្ពុជា។' : 'Founded this institution in 2011 with a long-term vision to develop the education sector in Cambodia.'}</span>
                      </span>
                    </li>
                    <li className="flex items-start p-4">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{lang === 'kh' ? 'បទពិសោធន៍ដឹកនាំផ្សេងៗ...' : 'Previous leadership experiences...'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
