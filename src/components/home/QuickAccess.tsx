"use client";
import Link from "next/link";
import { GraduationCap, BookOpen, Calendar, Users, Library, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function QuickAccess() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const links = [
    { name: kh ? 'ការចុះឈ្មោះ' : "Admissions", icon: GraduationCap, href: "/admissions", desc: kh ? 'លក្ខខណ្ឌ និងរបៀបចុះឈ្មោះ' : "Requirements & apply options", glowColor: "hover:shadow-blue-500/10" },
    { name: kh ? 'មហាវិទ្យាល័យ' : "Colleges", icon: BookOpen, href: "/colleges", desc: kh ? 'ស្វែងរកមហាវិទ្យាល័យ' : "Explore academic options", glowColor: "hover:shadow-secondary/15" },
    { name: kh ? 'អាហារូបករណ៍' : "Scholarships", icon: Award, href: "/scholarships", desc: kh ? 'ឱកាសទទួលបានការសិក្សា' : "Financial aid & funding", glowColor: "hover:shadow-emerald-500/10" },
    { name: kh ? 'កាលបរិច្ឆេទចូលរៀន' : "Intake Dates", icon: Calendar, href: "/admissions/intake-dates", desc: kh ? 'កាលបរិច្ឆេទសិក្សាថ្មីៗ' : "Important entry deadlines", glowColor: "hover:shadow-amber-500/10" },
    { name: kh ? 'ជីវិតនិស្សិត' : "Student Life", icon: Users, href: "/student-life", desc: kh ? 'សកម្មភាព និងការរស់នៅ' : "Discover student life", glowColor: "hover:shadow-indigo-500/10" },
    { name: kh ? 'អំពីយើង' : "About Us", icon: Library, href: "/about", desc: kh ? 'ប្រវត្តិនៃវិទ្យាស្ថាន' : "Discover our history", glowColor: "hover:shadow-rose-500/10" },
  ];

  return (
    <section className="relative z-30 -mt-16 sm:-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card shadow-xl rounded-sm p-6 sm:p-8 border border-white/30">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex flex-col items-center text-center p-4 rounded-sm border border-gray-100/50 bg-white/40 hover:bg-white hover:-translate-y-2 hover:border-secondary/35 transition-all duration-300 shadow-sm ${link.glowColor} hover:shadow-md group`}
              >
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 group-hover:rotate-6 transition-transform" />
                </div>
                <h3 className={`font-serif font-bold text-gray-900 mb-1.5 transition-colors group-hover:text-primary ${kh ? 'font-khmer text-sm leading-relaxed' : 'text-base'}`}>
                  {link.name}
                </h3>
                <p className={`text-[11px] text-gray-400 font-sans hidden sm:block ${kh ? 'font-khmer font-light leading-relaxed' : ''}`}>
                  {link.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

