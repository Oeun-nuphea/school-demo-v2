"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchFaculties, Faculty } from "@/services/api";
import { Cog, Briefcase, Monitor, BookOpen, GraduationCap, Scale, ChevronRight, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Map string icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Cog, Briefcase, Monitor, BookOpen, GraduationCap, Scale
};

// Help map slug path for routing
const getSlug = (name: string) => {
  return name.toLowerCase().replace(/,/g, '').split(' ')[0];
};

export default function Faculties() {
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const { t, lang } = useLanguage();
  const kh = lang === 'kh';

  useEffect(() => {
    fetchFaculties().then(setFaculties);
  }, []);

  return (
    <section className="py-24 bg-gray-50/50 border-y uni-border relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(15,42,74,0.02),transparent_40%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary mb-3">
            <span className={`text-xs font-bold uppercase tracking-wider ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'កម្មវិធីអប់រំកម្រិតខ្ពស់' : 'Colleges & Departments'}
            </span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-serif font-bold text-primary mb-5 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'មហាវិទ្យាល័យរបស់យើង' : 'Academic Faculties'}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className={`text-gray-500 text-base sm:text-lg leading-relaxed ${kh ? 'font-khmer text-slate-500 font-light' : ''}`}>
            {kh 
              ? 'ស្វែងរកមុខជំនាញនិងមហាវិទ្យាល័យដែលដឹកនាំដោយសាស្ត្រាចារ្យ និងអ្នកជំនាញល្បីៗរបស់យើង ដើម្បីទទួលបានការអប់រំដ៏ល្អឥតខ្ចោះ។' 
              : 'Discover our diverse range of academic departments, led by world-renowned experts dedicated to advancing knowledge and innovation.'}
          </p>
        </div>

        {/* Faculties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty) => {
            const Icon = iconMap[faculty.iconName] || BookOpen;
            const slug = getSlug(faculty.name.english);
            
            return (
              <div 
                key={faculty.id} 
                className="group relative bg-white border border-gray-100 hover:border-secondary/20 shadow-sm hover:shadow-xl rounded-sm p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-light via-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div>
                  {/* Icon & Badge container */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-primary/5 text-primary border border-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      <Icon className="w-7 h-7 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                    </div>
                    
                    {/* Small Status Tag */}
                    <span className="text-[10px] uppercase font-bold tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {kh ? 'ទទួលស្គាល់' : 'Accredited'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 ${kh ? 'font-khmer leading-relaxed' : ''}`}>
                    {kh ? 'មហាវិទ្យាល័យ ' : 'Faculty of '}{t(faculty.name)}
                  </h3>

                  {/* Description */}
                  <p className={`text-gray-500 mb-8 text-sm leading-relaxed line-clamp-3 ${kh ? 'font-khmer font-light leading-relaxed' : ''}`}>
                    {t(faculty.description)}
                  </p>
                </div>

                {/* Explore Link */}
                <Link 
                  href={`/colleges/${slug}`} 
                  className={`inline-flex items-center text-primary font-bold group-hover:text-secondary transition-colors duration-300 text-sm mt-auto ${kh ? 'font-khmer' : ''}`}
                >
                  <span className="border-b border-transparent group-hover:border-secondary transition-all">
                    {kh ? 'ស្វែងរកមុខជំនាញ' : 'Explore Programs'}
                  </span>
                  <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

