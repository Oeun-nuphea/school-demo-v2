"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Search, Award, BookOpen, FileText, Compass, Globe, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openSubSection, setOpenSubSection] = useState<string | null>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname() || "";
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    {
      name: { english: "About Us", khmer: "អំពីវិទ្យាស្ថាន" },
      href: "/about",
      subItems: [
        { label: { english: "Vision & Mission", khmer: "ទស្សនវិស័យ & បេសកកម្ម" }, href: "/about/vision" },
        { label: { english: "Goal & Objective", khmer: "គោលដៅ & គោលបំណង" }, href: "/about/goal" },
        { label: { english: "Organization Structure", khmer: "រចនាសម្ព័ន្ធស្ថាប័ន" }, href: "/about/structure" },
        { label: { english: "Campus Locations", khmer: "ទីតាំងសាខា" }, href: "/about/campuses" },
      ]
    },
    {
      name: { english: "Academic Programs", khmer: "កម្មវិធីសិក្សា" },
      href: "/programs",
      subItems: [
        { 
          label: { english: "Colleges", khmer: "មហាវិទ្យាល័យ" }, 
          href: "/colleges",
          nestedItems: [
            { label: { english: "Business Administration", khmer: "គ្រប់គ្រងពាណិជ្ជកម្ម" }, href: "/colleges/business" },
            { label: { english: "Law", khmer: "នីតិសាស្ត្រ" }, href: "/colleges/law" },
            { label: { english: "Arts & Humanities", khmer: "សិល្បៈ និងមនុស្សសាស្ត្ស" }, href: "/colleges/arts" },
            { label: { english: "Agriculture", khmer: "កសិកម្ម" }, href: "/colleges/agriculture" },
            { label: { english: "Science & Technology", khmer: "វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា" }, href: "/colleges/science" },
            { label: { english: "Engineering", khmer: "វិស្វកម្ម" }, href: "/colleges/engineering" },
          ]
        },
        { label: { english: "Master Programs", khmer: "ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់" }, href: "/programs/master" },
        { 
          label: { english: "Bachelor Programs", khmer: "ថ្នាក់បរិញ្ញាបត្រ" }, 
          href: "/programs/bachelor",
          nestedItems: [
            { label: { english: "National Bachelor Programs", khmer: "កម្មវិធីជាតិ" }, href: "/programs/bachelor/national" },
            { label: { english: "International Bachelor Programs", khmer: "កម្មវិធីអន្តរជាតិ" }, href: "/programs/bachelor/international" },
          ]
        },
        { label: { english: "Associate Programs", khmer: "ថ្នាក់បរិញ្ញាបត្ររង" }, href: "/programs/associate" },
        { label: { english: "TVET Programs", khmer: "កម្មវិធីបណ្តុះបណ្តាលវិជ្ជាជីវៈ" }, href: "/programs/tvet" },
      ]
    },
    {
      name: { english: "Admissions", khmer: "ការចុះឈ្មោះចូលរៀន" },
      href: "/admissions",
      subItems: [
        { label: { english: "How to Apply", khmer: "របៀបចុះឈ្មោះ" }, href: "/admissions/how-to-apply" },
        { label: { english: "Requirements", khmer: "លក្ខខណ្ឌតម្រូវ" }, href: "/admissions/requirements" },
        { label: { english: "Intake Dates", khmer: "កាលបរិច្ឆេទចូលរៀន" }, href: "/admissions/intake-dates" },
        { label: { english: "Tuition Fees", khmer: "តម្លៃសិក្សា" }, href: "/admissions/tuition-fees" },
        { label: { english: "Scholarships", khmer: "អាហារូបករណ៍" }, href: "/scholarships" },
      ]
    },
    {
      name: { english: "Student Life", khmer: "ជីវិតនិស្សិត" },
      href: "/student-life",
      subItems: [
        { 
          label: { english: "Facilities", khmer: "បរិក្ខារសិក្សា" }, 
          href: "/student-life/facilities",
          nestedItems: [
            { label: { english: "Self-Study Area", khmer: "កន្លែងស្វ័យសិក្សា" }, href: "/student-life/facilities/self-study" },
            { label: { english: "Dormitory", khmer: "អន្តេវាសិកដ្ឋាន" }, href: "/student-life/facilities/dormitory" },
            { label: { english: "Canteen", khmer: "អាហារដ្ឋាន" }, href: "/student-life/facilities/canteen" },
          ]
        },
        { label: { english: "Extra-Curricular", khmer: "សកម្មភាពក្រៅម៉ោង" }, href: "/student-life/extra-curricular" },
        { label: { english: "Social Events", khmer: "ព្រឹត្តិការណ៍សង្គម" }, href: "/events" },
        { label: { english: "Graduation", khmer: "ការបញ្ចប់ការសិក្សា" }, href: "/student-life/graduation" },
      ]
    },
    {
      name: { english: "International Relations", khmer: "ទំនាក់ទំនងអន្តរជាតិ" },
      href: "/international",
      subItems: [
        { 
          label: { english: "Academic Exchange", khmer: "កម្មវិធីផ្លាស់ប្តូរសិក្សា" }, 
          href: "/international/exchange",
          nestedItems: [
            { label: { english: "Lecturer Exchange", khmer: "ការផ្លាស់ប្តូរសាស្ត្រាចារ្យ" }, href: "/international/exchange/lecturer" },
            { label: { english: "Student Exchange & Mobility", khmer: "ការផ្លាស់ប្តូរនិស្សិត" }, href: "/international/exchange/student" },
          ]
        },
        { 
          label: { english: "Our Partners", khmer: "ដៃគូសហការ" }, 
          href: "/international/partners",
          nestedItems: [
            { label: { english: "Asian Partners", khmer: "ដៃគូអាស៊ី" }, href: "/international/partners/asian" },
            { label: { english: "European Partners", khmer: "ដៃគូអឺរ៉ុប" }, href: "/international/partners/european" },
          ]
        },
      ]
    },
    {
      name: { english: "Research & Journal", khmer: "ការស្រាវជ្រាវ & ទិនានុប្បវត្តិ" },
      href: "/research",
      subItems: [
        { label: { english: "Academic Journal", khmer: "ទិនានុប្បវត្តិសិក្សា" }, href: "/research/journal" },
        { label: { english: "Publications", khmer: "ការបោះពុម្ពផ្សាយ" }, href: "/research/publications" },
      ]
    },
    {
      name: { english: "News & Events", khmer: "ព័ត៌មាន & ព្រឹត្តិការណ៍" },
      href: "/news",
      subItems: []
    }
  ];

  const toggleSection = (name: string) => {
    if (openSection === name) {
      setOpenSection(null);
      setOpenSubSection(null);
    } else {
      setOpenSection(name);
      setOpenSubSection(null);
    }
  };

  const toggleSubSection = (name: string) => {
    if (openSubSection === name) {
      setOpenSubSection(null);
    } else {
      setOpenSubSection(name);
    }
  };

  // helper to check active state deeply
  const isLinkActive = (link: any) => {
    if (pathname.startsWith(link.href) && link.href !== '/') return true;
    return link.subItems?.some((subItem: any) => {
      if (pathname === subItem.href || pathname.startsWith(subItem.href)) return true;
      return subItem.nestedItems?.some((nested: any) => pathname === nested.href || pathname.startsWith(nested.href));
    });
  };

  const getMegaMenuContent = (linkName: string) => {
    const kh = lang === 'kh';
    
    // Find the link
    const link = navLinks.find(l => l.name.english === linkName);
    if (!link || link.subItems.length === 0) return null;

    // We can define custom render layout per section for high-end look
    if (linkName === "About Us") {
      return (
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-8">
          <div className="col-span-8 grid grid-cols-2 gap-6">
            <div>
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ព័ត៌មានស្ថាប័ន' : 'Institutional Profile'}
              </h4>
              <div className="space-y-3">
                {link.subItems.map((sub) => (
                  <Link
                    key={sub.label.english}
                    href={sub.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                  >
                    {t(sub.label)}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ប្រវត្តិនៃការបង្កើត' : 'AIC Foundations'}
              </h4>
              <p className={`text-xs text-gray-400 leading-relaxed ${kh ? 'font-khmer font-light' : ''}`}>
                {kh 
                  ? 'ស្វែងយល់បន្ថែមអំពីប្រវត្តិនៃការកសាង និងអភិវឌ្ឍន៍របស់វិទ្យាស្ថានអាស៊ី កម្ពុជា ចាប់តាំងពីការចាប់ផ្តើមរហូតដល់ក្លាយជាគ្រឹះស្ថានអប់រំឈានមុខ។'
                  : 'Discover the milestones, history, and founding vision of the Asian Institute of Cambodia since its establishment.'}
              </p>
            </div>
          </div>
          
          {/* Featured Card */}
          <div className="col-span-4 bg-gradient-to-br from-primary-dark to-primary text-white p-6 rounded-sm relative overflow-hidden shadow-md flex flex-col justify-between min-h-[180px]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl transform translate-x-8 -translate-y-8"></div>
            <div className="space-y-2">
              <span className={`text-[10px] uppercase tracking-wider text-secondary font-bold ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ទស្សនវិជ្ជាស្នូល' : 'Our Philosophy'}
              </span>
              <h5 className={`font-serif text-base font-bold ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'សីលធម៌ • វិញ្ញាណ • នវានុវត្តន៍ • សហគ្រិនភាព' : 'Morality • Intelligence • Innovation • Entrepreneurship'}
              </h5>
            </div>
            <p className={`text-xs text-gray-300 leading-relaxed mt-2 ${kh ? 'font-khmer font-light' : ''}`}>
              {kh 
                ? 'យើងប្តេជ្ញាចិត្តផ្តល់ការអប់រំប្រកបដោយគុណភាពខ្ពស់ ដើម្បីបណ្តុះបណ្តាលសក្តានុពលនិស្សិតឱ្យក្លាយជាអ្នកដឹកនាំនាពេលអនាគត។'
                : 'AIC is dedicated to cultivating global citizenship, moral integrity, and exceptional entrepreneurship in every student.'}
            </p>
          </div>
        </div>
      );
    }

    if (linkName === "Academic Programs") {
      const colleges = link.subItems.find(s => s.label.english === "Colleges");
      const bachelor = link.subItems.find(s => s.label.english === "Bachelor Programs");
      const otherPrograms = link.subItems.filter(s => s.label.english !== "Colleges" && s.label.english !== "Bachelor Programs");
      
      return (
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-8">
          {/* Column 1: Colleges */}
          {colleges && (
            <div className="col-span-4 border-r border-gray-100 pr-6">
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
                {t(colleges.label)}
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {colleges.nestedItems?.map((nested) => (
                  <Link
                    key={nested.label.english}
                    href={nested.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                  >
                    {t(nested.label)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Bachelor & Degrees */}
          <div className="col-span-4 pr-6 border-r border-gray-100">
            {bachelor && (
              <div className="mb-6">
                <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-3 pb-1 border-b border-gray-50 ${kh ? 'font-khmer' : ''}`}>
                  {t(bachelor.label)}
                </h4>
                <div className="space-y-2">
                  {bachelor.nestedItems?.map((nested) => (
                    <Link
                      key={nested.label.english}
                      href={nested.href}
                      onClick={() => setActiveMegaMenu(null)}
                      className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                    >
                      {t(nested.label)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-3 pb-1 border-b border-gray-50 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'កម្រិតសិក្សាផ្សេងទៀត' : 'Other Degree Pathways'}
              </h4>
              <div className="space-y-2">
                {otherPrograms.map((prog) => (
                  <Link
                    key={prog.label.english}
                    href={prog.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                  >
                    {t(prog.label)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Featured Card */}
          <div className="col-span-4 bg-gradient-to-br from-primary to-primary-light text-white p-6 rounded-sm shadow-md flex flex-col justify-between min-h-[220px]">
            <div>
              <span className={`text-[10px] uppercase tracking-wider text-secondary font-bold ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ជំនាញអប់រំគំរូ' : 'Educational Excellence'}
              </span>
              <h5 className={`font-serif text-base font-bold mt-1 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'កម្មវិធីសិក្សាស្តង់ដារជាតិ និងអន្តរជាតិ' : 'National & International Curriculums'}
              </h5>
              <p className={`text-xs text-gray-200 leading-relaxed mt-2 ${kh ? 'font-khmer font-light' : ''}`}>
                {kh
                  ? 'រាល់កម្មវិធីសិក្សាទាំងអស់ត្រូវបានរៀបចំឡើងយ៉ាងសម្រិតសម្រាំងបំផុត ដើម្បីឆ្លើយតបទៅនឹងតម្រូវការទីផ្សារការងារជាតិ និងតំបន់។'
                  : 'AIC curricula are aligned with international standards to ensure our graduates remain globally competitive.'}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-gray-300">{kh ? 'ទទួលស្គាល់ដោយក្រសួង អប់រំ' : 'Accredited by MoEYS'}</span>
              <Link 
                href="/admissions" 
                onClick={() => setActiveMegaMenu(null)}
                className={`text-xs text-secondary hover:text-white font-bold transition-colors ${kh ? 'font-khmer' : ''}`}
              >
                {kh ? 'ចុះឈ្មោះឥឡូវនេះ' : 'Apply Now'} &rarr;
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (linkName === "Admissions") {
      return (
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-8">
          <div className="col-span-8 grid grid-cols-2 gap-6">
            <div>
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ព័ត៌មានចុះឈ្មោះ' : 'Enrollment Information'}
              </h4>
              <div className="space-y-3">
                {link.subItems.map((sub) => (
                  <Link
                    key={sub.label.english}
                    href={sub.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                  >
                    {t(sub.label)}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'កាលបរិច្ឆេទសំខាន់ៗ' : 'Important Dates'}
              </h4>
              <ul className="space-y-3 text-xs text-gray-500">
                <li className="flex justify-between py-1 border-b border-gray-50">
                  <span className={kh ? 'font-khmer font-light' : ''}>{kh ? 'វគ្គសិក្សាទី១៖' : 'Term 1 Intake:'}</span>
                  <span className="font-bold text-primary">{kh ? 'ខែកញ្ញា' : 'September'}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-gray-50">
                  <span className={kh ? 'font-khmer font-light' : ''}>{kh ? 'វគ្គសិក្សាទី២៖' : 'Term 2 Intake:'}</span>
                  <span className="font-bold text-primary">{kh ? 'ខែមីនា' : 'March'}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-span-4 bg-gradient-to-br from-secondary-dark/90 to-secondary text-white p-6 rounded-sm shadow-md flex flex-col justify-between min-h-[180px]">
            <div>
              <span className={`text-[10px] uppercase tracking-wider text-primary font-bold ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ឱកាសអាហារូបករណ៍' : 'Scholarship Grants'}
              </span>
              <h5 className={`font-serif text-base font-bold mt-1 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'រហូតដល់ ១០០% អាហារូបករណ៍' : 'Up to 100% Academic Scholarships'}
              </h5>
              <p className={`text-xs text-white/90 leading-relaxed mt-2 ${kh ? 'font-khmer font-light' : ''}`}>
                {kh 
                  ? 'ផ្តល់ជូនដល់សិស្សពូកែទូទាំងប្រទេស ដែលមានបំណងសិក្សានៅវិទ្យាស្ថានអាស៊ី កម្ពុជា។'
                  : 'Rewarding academic excellence, civic leadership, and creative talent.'}
              </p>
            </div>
            <Link 
              href="/scholarships" 
              onClick={() => setActiveMegaMenu(null)}
              className={`text-xs text-primary bg-white hover:bg-gray-100 text-center py-2.5 rounded-sm font-bold transition-colors ${kh ? 'font-khmer' : ''}`}
            >
              {kh ? 'ស្នើសុំអាហារូបករណ៍' : 'View Scholarship Details'}
            </Link>
          </div>
        </div>
      );
    }

    if (linkName === "Student Life") {
      const facilities = link.subItems.find(s => s.label.english === "Facilities");
      const otherItems = link.subItems.filter(s => s.label.english !== "Facilities");
      
      return (
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-8">
          {facilities && (
            <div className="col-span-4 border-r border-gray-100 pr-6">
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
                {t(facilities.label)}
              </h4>
              <div className="space-y-2.5">
                {facilities.nestedItems?.map((nested) => (
                  <Link
                    key={nested.label.english}
                    href={nested.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                  >
                    {t(nested.label)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="col-span-4 pr-6 border-r border-gray-100">
            <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ជីវិតនិងសកម្មភាព' : 'Campus Activities'}
            </h4>
            <div className="space-y-2.5">
              {otherItems.map((sub) => (
                <Link
                  key={sub.label.english}
                  href={sub.href}
                  onClick={() => setActiveMegaMenu(null)}
                  className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                >
                  {t(sub.label)}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-4 bg-gradient-to-br from-primary-dark to-[#1d3557] text-white p-6 rounded-sm shadow-md flex flex-col justify-between min-h-[180px]">
            <div>
              <span className={`text-[10px] uppercase tracking-wider text-secondary font-bold ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'បរិវេណសិក្សាទំនើប' : 'State-of-the-Art Campus'}
              </span>
              <h5 className={`font-serif text-base font-bold mt-1 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'បរិក្ខារ និងបរិយាកាសសិក្សាល្អបំផុត' : 'World-Class Learning Spaces'}
              </h5>
              <p className={`text-xs text-gray-300 leading-relaxed mt-2 ${kh ? 'font-khmer font-light' : ''}`}>
                {kh 
                  ? 'អាគារសិក្សាមានផាសុកភាព បន្ទប់ពិសោធន៍ទំនើប និងកន្លែងស្វ័យសិក្សាដ៏ធំទូលាយ។'
                  : 'Equipped with quiet learning nooks, modern tech labs, and premium accommodation units.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (linkName === "International Relations") {
      const exchange = link.subItems.find(s => s.label.english === "Academic Exchange");
      const partners = link.subItems.find(s => s.label.english === "Our Partners");

      return (
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-8">
          {exchange && (
            <div className="col-span-4 border-r border-gray-100 pr-6">
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
                {t(exchange.label)}
              </h4>
              <div className="space-y-2.5">
                {exchange.nestedItems?.map((nested) => (
                  <Link
                    key={nested.label.english}
                    href={nested.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                  >
                    {t(nested.label)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {partners && (
            <div className="col-span-4 pr-6 border-r border-gray-100">
              <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
                {t(partners.label)}
              </h4>
              <div className="space-y-2.5">
                {partners.nestedItems?.map((nested) => (
                  <Link
                    key={nested.label.english}
                    href={nested.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className={`block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                  >
                    {t(nested.label)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="col-span-4 bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-sm shadow-md flex flex-col justify-between min-h-[180px]">
            <div>
              <span className={`text-[10px] uppercase tracking-wider text-white/70 font-bold ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ការតភ្ជាប់ជាសកល' : 'Global Connectedness'}
              </span>
              <h5 className={`font-serif text-base font-bold mt-1 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ដៃគូសហការជាង ៥០ សកលវិទ្យាល័យ' : 'Over 50+ Globally Ranked Partners'}
              </h5>
              <p className={`text-xs text-white/80 leading-relaxed mt-2 ${kh ? 'font-khmer font-light' : ''}`}>
                {kh 
                  ? 'កម្មវិធីផ្លាស់ប្តូរការសិក្សាក្រៅប្រទេស ជួយបង្កើនបទពិសោធន៍សិក្សាជាសកលរបស់និស្សិត។'
                  : 'Fostering cultural exchanges and study tours for academic expansion.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (linkName === "Research & Journal") {
      return (
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <h4 className={`text-xs font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ស្រាវជ្រាវ និងទិនានុប្បវត្តិ' : 'Research Portal'}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {link.subItems.map((sub) => (
                <Link
                  key={sub.label.english}
                  href={sub.href}
                  onClick={() => setActiveMegaMenu(null)}
                  className={`block p-4 border border-gray-100 rounded-sm hover:border-primary hover:shadow-sm transition-all duration-200 ${kh ? 'font-khmer' : ''}`}
                >
                  <div className="font-bold text-primary text-sm mb-1">{t(sub.label)}</div>
                  <div className="text-xs text-gray-400">
                    {sub.label.english === "Academic Journal" 
                      ? (kh ? 'ការបោះពុម្ភផ្សាយអត្ថបទស្រាវជ្រាវ និងទិនានុប្បវត្តិ' : 'AIC academic peer-reviewed journal papers.')
                      : (kh ? 'ឯកសារបោះពុម្ពផ្សាយ និងសៀវភៅស្រាវជ្រាវផ្សេងៗ' : 'Books, findings, and research publications.')
                    }
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="col-span-4 bg-gradient-to-br from-primary-dark to-slate-900 text-white p-6 rounded-sm shadow-md flex flex-col justify-between min-h-[180px]">
            <div>
              <span className={`text-[10px] uppercase tracking-wider text-secondary font-bold ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ការអភិវឌ្ឍតាមរយៈការស្រាវជ្រាវ' : 'Scientific Contribution'}
              </span>
              <h5 className={`font-serif text-base font-bold mt-1 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ជំរុញនវានុវត្តន៍ និងការបង្កើតថ្មី' : 'AIC Research Center'}
              </h5>
              <p className={`text-xs text-gray-400 leading-relaxed mt-2 ${kh ? 'font-khmer font-light' : ''}`}>
                {kh 
                  ? 'ផ្តល់ការគាំទ្រដល់គម្រោងស្រាវជ្រាវរបស់សាស្ត្រាចារ្យ និងនិស្សិតដើម្បីចូលរួមចំណែកអភិវឌ្ឍសង្គម។'
                  : 'Fostering research projects that drive economic, cultural, and technological change.'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <header 
      className="bg-white border-b uni-border sticky top-0 z-50"
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center" onMouseEnter={() => setActiveMegaMenu(null)}>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="/logo-transparent.png"
                  alt="AIC Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-primary leading-tight">
                  {lang === 'kh' ? 'វិទ្យាស្ថានអាស៊ី កម្ពុជា' : 'Asian Institute of Cambodia'}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-4 2xl:space-x-6 items-center h-full">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              const hasDropdown = link.subItems.length > 0;
              return (
                <div 
                  key={link.name.english} 
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveMegaMenu(hasDropdown ? link.name.english : null)}
                >
                  {hasDropdown ? (
                    <button
                      className={`flex items-center py-1 mt-1 text-sm transition-colors whitespace-nowrap border-b-2 ${
                        isActive || activeMegaMenu === link.name.english
                          ? 'text-primary font-bold border-primary' 
                          : 'text-gray-700 font-medium border-transparent hover:text-primary'
                      } ${lang === 'kh' ? 'font-khmer text-[13px]' : ''}`}
                    >
                      {t(link.name)}
                      <ChevronDown className={`w-3.5 h-3.5 ml-1 opacity-50 transition-all duration-300 ${activeMegaMenu === link.name.english ? '-rotate-180 text-primary opacity-100' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center py-1 mt-1 text-sm transition-colors whitespace-nowrap border-b-2 ${
                        isActive ? 'text-primary font-bold border-primary' : 'text-gray-700 font-medium border-transparent hover:text-primary'
                      } ${lang === 'kh' ? 'font-khmer text-[13px]' : ''}`}
                    >
                      {t(link.name)}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Area */}
          {/* <div className="hidden xl:flex items-center space-x-4">
            <Link
              href="/admissions/how-to-apply"
              className={`bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-sm font-bold transition-colors shadow-sm ${lang === 'kh' ? 'font-khmer' : ''}`}
            >
              {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'How to Apply'}
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Container */}
      {activeMegaMenu && (
        <div className="absolute left-0 right-0 top-full w-full bg-white border-t border-gray-150 shadow-2xl z-40 hidden xl:block animate-slide-down">
          <div className="absolute -top-px left-0 right-0 h-px bg-primary"></div>
          {getMegaMenuContent(activeMegaMenu)}
        </div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-white shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto border-b-4 border-secondary">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <div key={link.name.english} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  {link.subItems.length > 0 ? (
                    <button
                      onClick={() => toggleSection(link.name.english)}
                      className={`w-full flex justify-between items-center text-xl font-sans group ${isActive ? 'text-primary font-bold' : 'text-gray-900 font-semibold'
                        } ${lang === 'kh' ? 'font-khmer' : ''}`}
                    >
                      {t(link.name)}
                      <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openSection === link.name.english ? '-rotate-180 text-primary' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full flex justify-between items-center text-xl font-sans group ${isActive ? 'text-primary font-bold' : 'text-gray-900 font-semibold'
                        } ${lang === 'kh' ? 'font-khmer' : ''}`}
                    >
                      {t(link.name)}
                    </Link>
                  )}

                  {openSection === link.name.english && link.subItems.length > 0 && (
                    <div className="pt-5 pb-2 space-y-4">
                      {link.subItems.map((subItem) => (
                        <div key={subItem.label.english}>
                          {subItem.nestedItems ? (
                            <>
                              <button
                                onClick={() => toggleSubSection(subItem.label.english)}
                                className={`w-full flex justify-between items-center text-base transition-colors pl-3 border-l-2 ${pathname.startsWith(subItem.href) ? 'text-primary font-bold border-primary' : 'text-gray-600 font-medium border-gray-200 hover:text-primary hover:border-primary'
                                  } ${lang === 'kh' ? 'font-khmer' : ''}`}
                              >
                                {t(subItem.label)}
                                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openSubSection === subItem.label.english ? '-rotate-180 text-primary' : ''}`} />
                              </button>
                              {openSubSection === subItem.label.english && (
                                <div className="pl-6 pt-3 space-y-3 border-l-2 border-gray-100 ml-3">
                                  {subItem.nestedItems.map((nested) => (
                                    <Link
                                      key={nested.label.english}
                                      href={nested.href}
                                      onClick={() => setIsOpen(false)}
                                      className={`block text-sm transition-colors ${pathname === nested.href || pathname.startsWith(nested.href) ? 'text-primary font-bold' : 'text-gray-500 hover:text-primary'
                                        } ${lang === 'kh' ? 'font-khmer' : ''}`}
                                    >
                                      {t(nested.label)}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={`block text-base transition-colors pl-3 border-l-2 ${pathname === subItem.href || pathname.startsWith(subItem.href) ? 'text-primary font-bold border-primary' : 'text-gray-600 font-medium border-gray-200 hover:text-primary hover:border-primary'
                                } ${lang === 'kh' ? 'font-khmer' : ''}`}
                            >
                              {t(subItem.label)}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
              {/* <Link
                href="/admissions/how-to-apply"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm font-bold transition-colors shadow-sm mb-4 ${lang === 'kh' ? 'font-khmer' : ''}`}
              >
                {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'How to Apply'}
              </Link> */}
              <div className="flex bg-gray-100 p-1 rounded-sm w-full">
                <button
                  onClick={() => setLang('kh')}
                  className={`flex-1 py-2.5 text-center text-sm font-bold rounded-sm transition-colors ${
                    lang === 'kh' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  ភាសាខ្មែរ (KH)
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`flex-1 py-2.5 text-center text-sm font-bold rounded-sm transition-colors ${
                    lang === 'en' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  English (EN)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
