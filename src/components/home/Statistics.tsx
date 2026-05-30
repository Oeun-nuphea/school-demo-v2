"use client";

import { useEffect, useState } from "react";
import { fetchStatistics, Statistic } from "@/services/api";
import { useLanguage } from "@/context/LanguageContext";

export default function Statistics() {
  const [stats, setStats] = useState<Statistic[]>([]);
  const { lang } = useLanguage();

  useEffect(() => {
    fetchStatistics().then(setStats);
  }, []);

  const getKhmerLabel = (label: string) => {
    switch (label) {
      case "Nationwide Campuses": return "ទីតាំងសាខា";
      case "Academic Colleges": return "មហាវិទ្យាល័យ";
      case "Degree Programs": return "មុខជំនាញ";
      case "International Partners": return "ដៃគូអន្តរជាតិ";
      default: return label;
    }
  };

  return (
    <section className="py-16 bg-primary text-white border-y-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`px-4 border-white/20 ${
                index === 0 ? "" : 
                index === 2 ? "max-md:border-none md:border-l" : 
                "border-l"
              }`}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className={`text-sm md:text-base font-medium tracking-wide uppercase text-white/90 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                {lang === 'kh' ? getKhmerLabel(stat.label) : stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
