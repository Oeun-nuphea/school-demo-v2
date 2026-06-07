"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openSubSection, setOpenSubSection] = useState<string | null>(null);
  const pathname = usePathname() || "";
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    {
      name: { english: "About Us", khmer: "អំពីវិទ្យាស្ថាន" },
      href: "/about",
      subItems: [
        { label: { english: "Vision, Mission & Goals", khmer: "ទស្សនវិស័យ បេសកកម្ម និងគោលដៅ" }, href: "/about/vision-and-missions" },
        { label: { english: "Organization Structure", khmer: "រចនាសម្ព័ន្ធស្ថាប័ន" }, href: "/about/structure" },
        { label: { english: "Founder & Principal", khmer: "ស្ថាបនិក និងនាយកវិទ្យាស្ថាន" }, href: "/about/founder-and-principal" },
        { label: { english: "Campus Locations", khmer: "ទីតាំងសាខា" }, href: "/about/campuses" },
        { label: { english: "Careers at AIC", khmer: "ឱកាសការងារជាមួយវិទ្យាស្ថាន" }, href: "/about/careers" },
        { label: { english: "Contact", khmer: "ទំនាក់ទំនង" }, href: "/about/contact" },
      ]
    },
    {
      name: { english: "Academic Programs", khmer: "កម្មវិធីសិក្សា" },
      href: "/programs",
      subItems: [
        { label: { english: "Master Programs", khmer: "ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់" }, href: "/programs/master" },
        { label: { english: "Bachelor Programs", khmer: "ថ្នាក់បរិញ្ញាបត្រ" }, href: "/programs/bachelor" },
        { label: { english: "Associate Programs", khmer: "ថ្នាក់បរិញ្ញាបត្ររង" }, href: "/programs/associate" },
        { label: { english: "TVET Programs", khmer: "កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ" }, href: "/programs/tvet" },
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
        { label: { english: "Careers & Internships", khmer: "កម្មសិក្សា និងការងារ" }, href: "/student-life/internships" },
        { 
          label: { english: "Facilities", khmer: "បរិក្ខារ" }, 
          href: "/student-life/facilities",
          nestedItems: [
            { label: { english: "Self-Study Area", khmer: "កន្លែងស្វ័យសិក្សា" }, href: "/student-life/facilities/self-study" },
            { label: { english: "Dormitory", khmer: "អន្តេវាសិកដ្ឋាន" }, href: "/student-life/facilities/dormitory" },
            { label: { english: "Canteen (Food & Drink)", khmer: "អាហារដ្ឋាន" }, href: "/student-life/facilities/canteen" },
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
            { label: { english: "Asian Partners (incl. China)", khmer: "ដៃគូអាស៊ី" }, href: "/international/partners/asian" },
            { label: { english: "European Partners", khmer: "ដៃគូអឺរ៉ុប" }, href: "/international/partners/european" },
          ]
        },
      ]
    },
    {
      name: { english: "Journal & Research", khmer: "ស្រាវជ្រាវ និងទិនានុប្បវត្តិ" },
      href: "/research",
      subItems: [
        { label: { english: "Academic Journal", khmer: "ទិនានុប្បវត្តិសិក្សា" }, href: "/research/journal" },
        { label: { english: "Publications", khmer: "ការបោះពុម្ពផ្សាយ" }, href: "/research/publications" },
      ]
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

  return (
    <header className="bg-white border-b uni-border sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
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
                  {lang === 'kh' ? 'វិទ្យាស្ថានអាស៊ី កម្ពុជា' : 'Asian Institute'}
                </span>
                <span className="font-sans text-xs tracking-widest text-gray-500 uppercase">
                  {lang === 'kh' ? '' : 'of Cambodia'}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-6 2xl:space-x-8 items-center h-full">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <div key={link.name.english} className="relative group h-full flex items-center">
                  {link.subItems.length > 0 ? (
                    <button
                      className={`flex items-center py-1 mt-1 transition-colors whitespace-nowrap border-b-2 ${isActive ? 'text-primary font-bold border-primary' : 'text-gray-700 font-medium border-transparent hover:text-primary'
                        } ${lang === 'kh' ? 'font-khmer text-[15px]' : ''}`}
                    >
                      {t(link.name)}
                      <ChevronDown className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:-rotate-180 transition-all duration-300" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center py-1 mt-1 transition-colors whitespace-nowrap border-b-2 ${isActive ? 'text-primary font-bold border-primary' : 'text-gray-700 font-medium border-transparent hover:text-primary'
                        } ${lang === 'kh' ? 'font-khmer text-[15px]' : ''}`}
                    >
                      {t(link.name)}
                    </Link>
                  )}
                  {/* Organized dropdown indicator */}
                  {link.subItems.length > 0 && (
                    <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white border-x border-b uni-border shadow-lg py-2 rounded-b-sm">
                      <div className="absolute -top-px left-0 right-0 h-px bg-primary"></div>
                      {link.subItems.map((subItem) => (
                        <div key={subItem.label.english} className="relative group/sub">
                          {subItem.nestedItems ? (
                            <>
                              <div className={`flex justify-between items-center px-5 py-2.5 text-sm transition-all duration-200 cursor-pointer ${pathname.startsWith(subItem.href) ? 'text-primary font-bold bg-primary/5 pl-6 border-l-2 border-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary hover:pl-6'
                                } ${lang === 'kh' ? 'font-khmer' : ''}`}>
                                {t(subItem.label)}
                                <ChevronRight className="w-4 h-4 opacity-50" />
                              </div>
                              <div className="absolute left-full top-0 hidden group-hover/sub:block w-56 bg-white border uni-border shadow-lg py-2 rounded-sm -mt-2 ml-1">
                                {subItem.nestedItems.map((nested) => (
                                  <Link
                                    key={nested.label.english}
                                    href={nested.href}
                                    className={`block px-5 py-2.5 text-sm transition-all duration-200 ${pathname === nested.href || pathname.startsWith(nested.href) ? 'text-primary font-bold bg-primary/5 pl-6 border-l-2 border-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary hover:pl-6'
                                      } ${lang === 'kh' ? 'font-khmer' : ''}`}
                                  >
                                    {t(nested.label)}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              className={`block px-5 py-2.5 text-sm transition-all duration-200 ${pathname === subItem.href || pathname.startsWith(subItem.href) ? 'text-primary font-bold bg-primary/5 pl-6 border-l-2 border-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary hover:pl-6'
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
          </nav>

          {/* Action Area */}
          <div className="hidden xl:flex items-center space-x-4">
            <Link
              href="/admissions/how-to-apply"
              className={`bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-sm font-bold transition-colors shadow-sm ${lang === 'kh' ? 'font-khmer' : ''}`}
            >
              {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'How to Apply'}
            </Link>
          </div>

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
              <Link
                href="/admissions/how-to-apply"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm font-bold transition-colors shadow-sm mb-4 ${lang === 'kh' ? 'font-khmer' : ''}`}
              >
                {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'How to Apply'}
              </Link>
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
