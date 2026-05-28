"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const navLinks = [
    {
      name: "About AIC",
      href: "/about",
      subItems: [
        { label: "Core Values", href: "/about/core-values" },
        { label: "Campus Locations", href: "/about/campuses" },
      ]
    },
    {
      name: "Admissions",
      href: "/admissions",
      subItems: [
        { label: "Master Programs", href: "/admissions/master" },
        { label: "Bachelor Programs", href: "/admissions/bachelor" },
        { label: "Intake Dates", href: "/admissions/intake-dates" },
        { label: "Tuition Fees", href: "/admissions/tuition-fees" },
      ]
    },
    {
      name: "Colleges",
      href: "/colleges",
      subItems: [
        { label: "Business Administration", href: "/colleges/business" },
        { label: "Law", href: "/colleges/law" },
        { label: "Arts & Humanities", href: "/colleges/arts" },
        { label: "Agriculture", href: "/colleges/agriculture" },
        { label: "Science and Technology", href: "/colleges/science" },
        { label: "Engineering", href: "/colleges/engineering" },
      ]
    },
    {
      name: "Student Life",
      href: "/student-life",
      subItems: [
        { label: "Study Schedules", href: "/student-life/schedules" },
        { label: "International Activities", href: "/student-life/activities" },
        { label: "Internships & Jobs", href: "/student-life/internships" },
      ]
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
              <div className="w-12 h-10 bg-primary flex items-center justify-center rounded-sm">
                <span className="text-white font-serif font-bold text-lg">AIC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-primary leading-tight">Asian Institute</span>
                <span className="font-sans text-xs tracking-widest text-gray-500 uppercase">of Cambodia</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link 
                  href={link.href} 
                  className="text-gray-700 hover:text-primary font-medium flex items-center h-full transition-colors"
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 group-hover:-rotate-180 transition-all duration-300" />
                </Link>
                {/* Organized dropdown indicator */}
                <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white border-x border-b uni-border shadow-lg py-2 rounded-b-sm">
                  <div className="absolute -top-px left-0 right-0 h-px bg-primary"></div>
                  {link.subItems.map((subItem) => (
                    <Link 
                      key={subItem.label} 
                      href={subItem.href} 
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary hover:pl-6 transition-all duration-200"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-primary p-2 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/apply" 
              className="bg-primary text-white px-5 py-2.5 rounded-sm font-medium hover:bg-primary-dark transition-colors shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto border-b-4 border-secondary">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <button
                  onClick={() => toggleSection(link.name)}
                  className="w-full flex justify-between items-center text-xl font-sans font-semibold text-gray-900 group"
                >
                  {link.name}
                  <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openSection === link.name ? '-rotate-180 text-primary' : ''}`} />
                </button>
                
                {openSection === link.name && (
                  <div className="pt-5 pb-2 space-y-4">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-base font-medium text-gray-600 hover:text-primary transition-colors pl-3 border-l-2 border-gray-200 hover:border-primary"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6 mt-6 border-t border-gray-200">
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 text-lg font-bold text-white bg-primary text-center rounded-sm hover:bg-primary-dark transition-colors shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
