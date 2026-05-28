"use client";
import Link from "next/link";
import { GraduationCap, BookOpen, Calendar, Users, Library, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function QuickAccess() {
  const { lang } = useLanguage();

  const links = [
    { name: lang === 'kh' ? 'ការចុះឈ្មោះ' : "Admissions", icon: GraduationCap, href: "/admissions", desc: lang === 'kh' ? 'ដាក់ពាក្យ និងចូលរួមជាមួយយើង' : "Apply and join our community" },
    { name: lang === 'kh' ? 'មហាវិទ្យាល័យ' : "Colleges", icon: BookOpen, href: "/colleges", desc: lang === 'kh' ? 'ស្វែងរកមហាវិទ្យាល័យ' : "Explore academic departments" },
    { name: lang === 'kh' ? 'អាហារូបករណ៍' : "Scholarships", icon: Award, href: "/scholarships", desc: lang === 'kh' ? 'ជំនួយហិរញ្ញវត្ថុ' : "Financial aid and funding" },
    { name: lang === 'kh' ? 'កាលបរិច្ឆេទចូលរៀន' : "Intake Dates", icon: Calendar, href: "/admissions/intake-dates", desc: lang === 'kh' ? 'កាលបរិច្ឆេទសំខាន់ៗ' : "Important dates and deadlines" },
    { name: lang === 'kh' ? 'ជីវិតនិស្សិត' : "Student Life", icon: Users, href: "/student-life", desc: lang === 'kh' ? 'ស្វែងយល់ពីជីវិតក្នុងបរិវេណសាលា' : "Discover campus life" },
    { name: lang === 'kh' ? 'អំពីយើង' : "About Us", icon: Library, href: "/about", desc: lang === 'kh' ? 'ស្វែងយល់អំពីវិទ្យាស្ថាន' : "Learn about our institute" },
  ];

  return (
    <section className="py-12 bg-gray-50 border-b uni-border relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-7xl rounded-sm shadow-sm bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex flex-col items-center text-center p-4 group hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 rounded-sm"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`font-serif font-bold text-gray-900 mb-1 ${lang === 'kh' ? 'font-khmer' : ''}`}>{link.name}</h3>
                <p className={`text-xs text-gray-500 font-sans hidden sm:block ${lang === 'kh' ? 'font-khmer' : ''}`}>{link.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
