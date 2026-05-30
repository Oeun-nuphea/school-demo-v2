"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname() || "";
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    {
      name: { english: "About Us", khmer: "អំពីវិទ្យាស្ថាន" },
      href: "/about",
      subItems: [
        { label: { english: "Vision & Missions", khmer: "សីលធម៌ និងទស្សនវិស័យ" }, href: "/about/vision-and-missions" },
        { label: { english: "Founder & Principal", khmer: "ស្ថាបនិក និងនាយកវិទ្យាស្ថាន" }, href: "/about/founder-and-principal" },
        { label: { english: "Campus Locations", khmer: "ទីតាំងសាខា" }, href: "/about/campuses" },
        { label: { english: "Contact and Branches", khmer: "ទំនាក់ទំនង និងសាខា" }, href: "/about/contact-and-branches" },
        { label: { english: "Our Alumni", khmer: "អតីតនិស្សិតរបស់យើង" }, href: "/about/alumni" },
      ]
    },
    {
      name: { english: "Admissions", khmer: "ការចុះឈ្មោះចូលរៀន" },
      href: "/admissions",
      subItems: [
        { label: { english: "Master Programs", khmer: "ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់" }, href: "/admissions/master" },
        { label: { english: "Bachelor Programs", khmer: "ថ្នាក់បរិញ្ញាបត្រ" }, href: "/admissions/bachelor" },
        { label: { english: "Intake Dates", khmer: "កាលបរិច្ឆេទចូលរៀន" }, href: "/admissions/intake-dates" },
        { label: { english: "Tuition Fees", khmer: "តម្លៃសិក្សា" }, href: "/admissions/tuition-fees" },
        { label: { english: "Scholarships", khmer: "អាហារូបករណ៍" }, href: "/scholarships" },
      ]
    },
    {
      name: { english: "Colleges", khmer: "មហាវិទ្យាល័យ" },
      href: "/colleges",
      subItems: [
        { label: { english: "Business Administration", khmer: "គ្រប់គ្រងពាណិជ្ជកម្ម" }, href: "/colleges/business" },
        { label: { english: "Law", khmer: "នីតិសាស្ត្រ" }, href: "/colleges/law" },
        { label: { english: "Arts, Humanities & Foreign Languages", khmer: "សិល្បៈ មនុស្សសាស្ត្រ និងភាសាបរទេស" }, href: "/colleges/arts" },
        { label: { english: "Agriculture", khmer: "កសិកម្ម" }, href: "/colleges/agriculture" },
        { label: { english: "Science and Technology", khmer: "វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា" }, href: "/colleges/science" },
        { label: { english: "Engineering", khmer: "វិស្វកម្ម" }, href: "/colleges/engineering" },
      ]
    },
    {
      name: { english: "Student Life", khmer: "ជីវិតនិស្សិត" },
      href: "/student-life",
      subItems: [
        { label: { english: "Study Schedules", khmer: "វេនសិក្សា" }, href: "/student-life/schedules" },
        { label: { english: "International Activities", khmer: "សកម្មភាពអន្តរជាតិ" }, href: "/student-life/activities" },
        { label: { english: "Internships & Jobs", khmer: "កម្មសិក្សា និងការងារ" }, href: "/student-life/internships" },
      ]
    },
    {
      name: { english: "Research", khmer: "ការស្រាវជ្រាវ" },
      href: "/research",
      subItems: []
    },
  ];

  const toggleSection = (name: string) => {
    if (openSection === name) {
      setOpenSection(null);
    } else {
      setOpenSection(name);
    }
  };

  return (
    <header className="bg-white border-b uni-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <nav className="hidden lg:flex space-x-8 items-center h-full">
            {navLinks.map((link) => {
              const isActive = (pathname.startsWith(link.href) && link.href !== '/') || link.subItems.some(subItem => pathname === subItem.href || pathname.startsWith(subItem.href));
              return (
                <div key={link.name.english} className="relative group h-full flex items-center">
                  <Link
                    href={link.href}
                    className={`flex items-center py-1 mt-1 transition-colors border-b-2 ${isActive ? 'text-primary font-bold border-primary' : 'text-gray-700 font-medium border-transparent hover:text-primary'
                      } ${lang === 'kh' ? 'font-khmer text-[15px]' : ''}`}
                  >
                    {t(link.name)}
                    {link.subItems.length > 0 && (
                      <ChevronDown className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:-rotate-180 transition-all duration-300" />
                    )}
                  </Link>
                  {/* Organized dropdown indicator */}
                  {link.subItems.length > 0 && (
                    <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white border-x border-b uni-border shadow-lg py-2 rounded-b-sm">
                      <div className="absolute -top-px left-0 right-0 h-px bg-primary"></div>
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.label.english}
                          href={subItem.href}
                          className={`block px-5 py-2.5 text-sm transition-all duration-200 ${pathname === subItem.href || pathname.startsWith(subItem.href) ? 'text-primary font-bold bg-primary/5 pl-6 border-l-2 border-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary hover:pl-6'
                            } ${lang === 'kh' ? 'font-khmer' : ''}`}
                        >
                          {t(subItem.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/apply"
              className={`bg-primary text-white px-5 py-2.5 rounded-sm font-medium hover:bg-primary-dark transition-colors shadow-sm ${lang === 'kh' ? 'font-khmer text-sm pt-3' : ''}`}
            >
              {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'Apply Now'}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto border-b-4 border-secondary">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => {
              const isActive = (pathname.startsWith(link.href) && link.href !== '/') || link.subItems.some(subItem => pathname === subItem.href || pathname.startsWith(subItem.href));
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
                        <Link
                          key={subItem.label.english}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={`block text-base transition-colors pl-3 border-l-2 ${pathname === subItem.href || pathname.startsWith(subItem.href) ? 'text-primary font-bold border-primary' : 'text-gray-600 font-medium border-gray-200 hover:text-primary hover:border-primary'
                            } ${lang === 'kh' ? 'font-khmer' : ''}`}
                        >
                          {t(subItem.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
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

              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className={`block w-full py-4 text-lg font-bold text-white bg-primary text-center rounded-sm hover:bg-primary-dark transition-colors shadow-md ${lang === 'kh' ? 'font-khmer' : ''}`}
              >
                {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'Apply Now'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
