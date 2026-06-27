'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, GraduationCap, Clock, Users, BookOpen, CheckCircle, ArrowRight, Star } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function MasterProgramsPage() {
  const { t, lang } = useLanguage();
  const kh = lang === 'kh';

  const stats = [
    { value: '2 Years', valueKh: '២ ឆ្នាំ', label: 'Program Duration', labelKh: 'រយៈពេលសិក្សា', icon: Clock },
    { value: '500+', valueKh: '500+', label: 'Graduates', labelKh: 'និស្សិតបញ្ចប់ការសិក្សា', icon: GraduationCap },
    { value: '20+', valueKh: '20+', label: 'Expert Faculty', labelKh: 'សាស្ត្រាចារ្យជំនាញ', icon: Users },
    { value: '95%', valueKh: '95%', label: 'Employment Rate', labelKh: 'អត្រាចូលការងារ', icon: Star },
  ];

  const requirements = [
    { en: "Bachelor's Degree from a recognized university", kh: "សញ្ញាបត្របរិញ្ញាបត្រពីសាកលវិទ្យាល័យដែលទទួលស្គាល់" },
    { en: "Official transcript of academic records", kh: "ព្រឹត្តិបត្រពិន្ទុផ្លូវការ" },
    { en: "Copy of National ID or Passport", kh: "ច្បាប់ចម្លងអត្តសញ្ញាណប័ណ្ណ ឬ លិខិតឆ្លងដែន" },
    { en: "Personal statement (500 words)", kh: "សេចក្ដីថ្លែងអំពីខ្លួន (៥០០ ពាក្យ)" },
    { en: "Two letters of recommendation", kh: "លិខិតណែនាំ ២ ច្បាប់" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/graduated.jpeg" alt="Graduation" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-20 text-center px-4 py-20">
          <p className={`text-secondary font-bold uppercase tracking-widest text-sm mb-3 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ថ្នាក់ក្រោយឧត្តមសិក្សា' : 'Postgraduate Studies'}
          </p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'កម្មវិធីសិក្សាកម្រិតខ្ពស់ ដែលរៀបចំឡើងសម្រាប់អ្នកជំនាញ និងអ្នកស្រាវជ្រាវ។' : 'Rigorous postgraduate programs designed for professionals, researchers, and future leaders.'}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/admissions/how-to-apply" className={`bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-sm transition-colors ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ដាក់ពាក្យ' : 'Apply Now'}
            </Link>
            <Link href="/admissions/tuition-fees" className={`border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-sm transition-colors ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ថ្លៃសិក្សា' : 'View Tuition'}
            </Link>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Academic Programs</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</span>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <s.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">{kh ? s.valueKh : s.value}</div>
                <div className={`text-white/70 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? s.labelKh : s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Programs</h3>
                <ul className="space-y-3">
                  <li><Link href="/programs" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កម្មវិធីទាំងអស់' : 'All Programs'}</Link></li>
                  <li><Link href="/programs/master" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Programs'}</Link></li>
                  <li><Link href="/programs/bachelor" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Programs'}</Link></li>
                  <li><Link href="/programs/associate" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ថ្នាក់បរិញ្ញាបត្ររង' : 'Associate Programs'}</Link></li>
                  <li><Link href="/programs/tvet" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេស' : 'TVET Programs'}</Link></li>
                </ul>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <ul className="space-y-3">
                    <li><Link href="/scholarships" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អាហារូបករណ៍' : 'Scholarships'}</Link></li>
                    <li><Link href="/admissions" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការចុះឈ្មោះចូលរៀន' : 'Admissions'}</Link></li>
                  </ul>
                </div>
              </div>
              <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-sm">
                <h4 className={`font-bold text-primary mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ត្រូវការជំនួយ?' : 'Need Guidance?'}</h4>
                <p className={`text-sm text-gray-600 mb-4 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទូរស័ព្ទមកកាន់ការិយាល័យចុះឈ្មោះ' : 'Contact our admissions office for a free consultation.'}</p>
                <Link href="/about/contact" className={`block text-center bg-primary text-white py-2 rounded-sm text-sm font-bold hover:bg-primary-dark transition-colors ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ទំនាក់ទំនង' : 'Get in Touch'}
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4 space-y-16">

            {/* Programs Grid */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'កម្មវិធីសិក្សាដែលផ្ដល់ជូន' : 'Available Master Programs'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <p className={`text-lg text-gray-700 mb-8 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'កម្មវិធីថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់របស់យើងផ្ដល់នូវចំណេះដឹងស៊ីជម្រៅ ជំនាញភាពជាអ្នកដឹកនាំ និងបណ្ដាញវិជ្ជាជីវៈដ៏ទូលំទូលាយ។' : 'Designed for working professionals and ambitious scholars, our Master\'s programs provide advanced knowledge, leadership skills, and a broad professional network.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {info.academic_programs.master_programs.map((program, idx) => (
                  <div key={idx} className="flex items-start p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <GraduationCap className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className={`font-serif font-bold text-gray-900 text-lg mb-1 ${kh ? 'font-khmer' : ''}`}>{t(program)}</h3>
                      <p className={`text-sm text-gray-500 ${kh ? 'font-khmer' : ''}`}>{kh ? 'រយៈពេល ២ ឆ្នាំ · ថ្នាក់ពេលរសៀល/យប់' : '2 Years · Evening & Weekend Classes'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose section */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ហេតុអ្វីត្រូវជ្រើសរើស AIC?' : 'Why Choose AIC?'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { en: 'Taught by experienced industry practitioners and PhD-qualified faculty', kh: 'បង្រៀនដោយអ្នកជំនាញ និងសាស្ត្រាចារ្យបណ្ឌិតបទពិសោធ' },
                  { en: 'Flexible class schedules designed for working professionals', kh: 'ម៉ោងរៀនបត់បែនសម្រាប់អ្នកធ្វើការ' },
                  { en: 'International academic exchange opportunities with partner universities', kh: 'ឱកាសសិក្សាជាមួយសាកលវិទ្យាល័យដៃគូអន្តរជាតិ' },
                  { en: 'Research-focused curriculum with real-world case studies', kh: 'កម្មវិធីផ្ដោតលើការស្រាវជ្រាវ និងករណីសិក្សាពិតប្រាកដ' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>{kh ? item.kh : item.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Requirements */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'លក្ខខណ្ឌចូលរៀន' : 'Admission Requirements'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 border border-gray-100 bg-white rounded-sm">
                    <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <span className={`text-gray-700 pt-0.5 ${kh ? 'font-khmer' : ''}`}>{kh ? req.kh : req.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Banner */}
            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ត្រៀមខ្លួនចាប់ផ្ដើម?' : 'Ready to Begin Your Journey?'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចូលរៀនក្នុងកម្មវិធីថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់ ដើម្បីលើកកម្ពស់ការងាររបស់អ្នក។' : 'Enroll in a Master\'s program and elevate your career to the next level.'}</p>
              </div>
              <Link href="/admissions/how-to-apply" className={`flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-sm whitespace-nowrap transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ដាក់ពាក្យឥឡូវ' : 'Apply Now'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
