"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import info from "../../../information.json";
import { Building2, Sparkles, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function StudentLife() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const kh = lang === 'kh';

  const tabs = [
    {
      id: 0,
      title: kh ? 'បរិក្ខារ & ស្នាក់នៅ' : 'Facilities & Dorms',
      icon: Building2,
      subtitle: kh ? 'កន្លែងស្នាក់នៅ និងស្វ័យសិក្សាទំនើប' : 'Modern Living & Study Spaces',
      desc: kh 
        ? 'យើងផ្តល់ជូននូវអន្តេវាសិកដ្ឋានដែលមានផាសុកភាព កន្លែងស្វ័យសិក្សាស្ងប់ស្ងាត់បំពាក់ដោយអ៊ីនធឺណិតល្បឿនលឿន និងអាហារដ្ឋានដែលមានអនាម័យខ្ពស់សម្រាប់ការរស់នៅប្រចាំថ្ងៃរបស់និស្សិត។'
        : 'AIC features highly comfortable dormitory buildings, quiet self-study areas equipped with high-speed internet, and an ultra-hygienic student canteen for a supportive campus life.',
      link: '/student-life/facilities/dormitory',
      images: [
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Library
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"  // Dorm/study room
      ]
    },
    {
      id: 1,
      title: kh ? 'សកម្មភាពនិស្សិត' : 'Student Activities',
      icon: Sparkles,
      subtitle: kh ? 'កម្មវិធីក្រៅម៉ោងសិក្សាដ៏សកម្ម' : 'Vibrant Extra-Curricular Life',
      desc: kh
        ? 'និស្សិតចូលរួមក្នុងសកម្មភាពជាច្រើនដូចជា កីឡា ពិព័រណ៍វប្បធម៌ កម្មវិធីសប្បុរសធម៌ និងការស្រាវជ្រាវជាក្រុម ដើម្បីអភិវឌ្ឍជំនាញទន់ និងពង្រីកទំនាក់ទំនង។'
        : 'Students engage in dynamic extracurricular activities, sports clubs, cultural events, community service projects, and team-based research initiatives to build vital soft skills and lifelong networks.',
      link: '/student-life/extra-curricular',
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Collaboration
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"  // Fun activity
      ]
    },
    {
      id: 2,
      title: kh ? 'ឧត្តមភាពនៃការបញ្ចប់ការសិក្សា' : 'Graduation Excellence',
      icon: GraduationCap,
      subtitle: kh ? 'អបអរសាទរភាពជោគជ័យ' : 'Celebrating Academic Triumphs',
      desc: kh
        ? 'ពិធីប្រគល់សញ្ញាបត្រគឺជាពេលវេលាដ៏រំភើបដែលបង្ហាញពីការខិតខំប្រឹងប្រែងរបស់និស្សិត និងការត្រៀមខ្លួនរួចជាស្រេចដើម្បីក្លាយជាអ្នកដឹកនាំក្នុងអាជីពការងារ។'
        : 'Our graduation ceremonies are grand celebrations honoring our students\' academic dedication and highlighting their readiness to enter the professional global job market with confidence.',
      link: '/student-life/graduation',
      images: [
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Graduation
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"  // Hat throw
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-dark">
              <span className={`text-xs font-bold uppercase tracking-wider ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ជីវិតក្នុងបរិវេណសាលា' : 'Student Life'}
              </span>
            </div>
            
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-primary ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ជីវិតនិស្សិតដ៏រស់រវើក' : 'Vibrant Campus Life'}
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full"></div>
            
            <p className={`text-gray-500 text-base sm:text-lg leading-relaxed ${kh ? 'font-khmer font-light' : ''}`}>
              {kh 
                ? 'នៅ វិទ្យាស្ថានអាស៊ី កម្ពុជា ការរៀនសូត្រមិនមែនមានតែក្នុងថ្នាក់រៀននោះទេ។ យើងបង្កើតបរិយាកាសសិក្សាដែលជួយអភិវឌ្ឍសមត្ថភាពជុំវិញខ្លួន ឱកាសបង្កើតបណ្តាញទំនាក់ទំនង និងការស្នាក់នៅប្រកបដោយផាសុកភាព។' 
                : 'At AIC, learning extends far beyond lectures. We build a supportive environment that cultivates personal growth, global engagement, and premium student accommodation.'}
            </p>

            {/* Interactive Tab Headers */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              {tabs.map((tab, idx) => {
                const Icon = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full flex items-center gap-4 p-4 rounded-sm border transition-all duration-300 text-left ${
                      isActive 
                        ? 'border-secondary/30 bg-secondary/5 text-primary shadow-sm' 
                        : 'border-transparent hover:bg-gray-50 text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-serif font-bold text-sm sm:text-base ${kh ? 'font-khmer' : ''}`}>
                        {tab.title}
                      </div>
                      <div className={`text-[11px] text-gray-400 font-sans ${kh ? 'font-khmer font-light mt-0.5' : ''}`}>
                        {tab.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Visual Tab Panel (Image grid with fade transition) */}
          <div className="w-full lg:w-7/12 relative min-h-[380px] sm:min-h-[440px] flex items-center">
            {tabs.map((tab, idx) => {
              if (activeTab !== idx) return null;
              return (
                <div key={tab.id} className="w-full grid grid-cols-2 gap-4 animate-fade-in">
                  <div className="space-y-4">
                    <div className="h-64 sm:h-72 rounded-sm overflow-hidden border border-gray-100 shadow-md relative hover:scale-[1.01] transition-transform duration-300">
                      <img 
                        src={tab.images[0]} 
                        alt={tab.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-5 border border-gray-100 shadow-sm bg-gray-50 rounded-sm">
                      <p className={`text-xs text-gray-500 leading-relaxed ${kh ? 'font-khmer font-light' : ''}`}>
                        {tab.desc}
                      </p>
                      <Link
                        href={tab.link}
                        className={`inline-flex items-center text-xs font-bold text-primary hover:text-secondary transition-colors mt-4 ${kh ? 'font-khmer' : ''}`}
                      >
                        {kh ? 'អានបន្ថែម' : 'Learn More'}
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <div className="h-44 sm:h-52 rounded-sm overflow-hidden border border-gray-100 shadow-md relative hover:scale-[1.01] transition-transform duration-300">
                      <img 
                        src={tab.images[1]} 
                        alt={tab.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="h-52 sm:h-64 rounded-sm overflow-hidden border border-secondary shadow-lg relative hover:scale-[1.01] transition-transform duration-300">
                      {/* Highlight student opportunity tour text */}
                      <img 
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        alt="Opportunities at AIC"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4">
                        <div className="text-[10px] text-secondary font-bold uppercase tracking-wider">{kh ? 'កម្មវិធីអន្តរជាតិ' : 'Global Opportunities'}</div>
                        <div className={`text-xs text-white font-medium line-clamp-2 mt-1 leading-relaxed ${kh ? 'font-khmer text-[10px]' : ''}`}>
                          {t(info.opportunities.study_tours_abroad.details[0])}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

