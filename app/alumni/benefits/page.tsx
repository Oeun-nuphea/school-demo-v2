'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Gift, Library, Briefcase, Users, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AlumniBenefitsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const benefits = [
    {
      icon: Library,
      title: { en: 'Campus Library Access', kh: 'សិទ្ធិចូលប្រើបណ្ណាល័យ' },
      desc: { en: 'Lifetime access to AIC campus libraries, research databases, and digital learning resources.', kh: 'ការចូលប្រើប្រាស់បណ្ណាល័យ AIC ពេញមួយជីវិត រួមមានទិន្នន័យស្រាវជ្រាវ និងធនធានសិក្សាឌីជីថល។' },
    },
    {
      icon: Briefcase,
      title: { en: 'Career Services Support', kh: 'សេវាកម្មជំនួយការអាជីព' },
      desc: { en: 'Ongoing access to job placement support, resume reviews, and employer networking events organized by AIC.', kh: 'ការចូលប្រើប្រាស់ជាបន្ត ការជំនួយស្វែងរកការងារ ការពិនិត្យ CV និងព្រឹត្តិការណ៍ networking ជាមួយក្រុមហ៊ុន។' },
    },
    {
      icon: Users,
      title: { en: 'Mentorship Program', kh: 'កម្មវិធីណែនាំ' },
      desc: { en: 'Volunteer as a mentor to current students or be mentored by senior alumni — giving and receiving career guidance.', kh: 'ស្ម័គ្រចិត្តជាគ្រូណែនាំដល់និស្សិតបច្ចុប្បន្ន ឬទទួលការណែនាំពីអតីតនិស្សិតជាន់ខ្ពស់។' },
    },
    {
      icon: Globe,
      title: { en: 'International Network', kh: 'បណ្ដាញអន្តរជាតិ' },
      desc: { en: 'Connect with AIC graduates based in Japan, Korea, China, Thailand, Malaysia, and across Southeast Asia.', kh: 'ភ្ជាប់ទំនាក់ទំនងជាមួយអតីតនិស្សិត AIC នៅប្រទេសជប៉ុន កូរ៉េ ចិន ថៃ ម៉ាឡេស៊ី និងអាស៊ីអាគ្នេយ៍។' },
    },
    {
      icon: Gift,
      title: { en: 'Alumni Discounts', kh: 'ការបញ្ចុះតម្លៃ' },
      desc: { en: 'Enjoy discounts on continuing education, short courses, and professional development programs at AIC.', kh: 'ទទួលបានការបញ្ចុះតម្លៃសម្រាប់ការអប់រំបន្ត វគ្គខ្លី និងកម្មវិធីអភិវឌ្ឍន៍វិជ្ជាជីវៈ។' },
    },
    {
      icon: Library,
      title: { en: 'Alumni Newsletter', kh: 'ព្រឹត្តិបត្រអតីតនិស្សិត' },
      desc: { en: 'Stay informed with our quarterly alumni newsletter covering AIC news, opportunities, and community highlights.', kh: 'ទទួលព្រឹត្តិបត្រប្រចាំត្រីមាសរបស់អតីតនិស្សិត ដែលរួមមានព័ត៌មាន AIC ឱកាស និងចំណុចសំខាន់ៗ។' },
    },
  ];

  const sideLinks = [
    { href: '/alumni/network', label: { en: 'Alumni Network', kh: 'បណ្តាញអតីតនិស្សិត' } },
    { href: '/alumni/success-stories', label: { en: 'Success Stories', kh: 'រឿងរ៉ាវជោគជ័យ' } },
    { href: '/alumni/benefits', label: { en: 'Alumni Benefits', kh: 'អត្ថប្រយោជន៍' } },
    { href: '/alumni/giving', label: { en: 'Alumni Giving', kh: 'ការចូលរួមឧបត្ថម្ភ' } },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-20">
          <Gift className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'អត្ថប្រយោជន៍អតីតនិស្សិត' : 'Alumni Benefits'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ចំណងស្ថាប័ន AIC មិនបញ្ចប់ក្នុងថ្ងៃបញ្ចប់ការសិក្សា — ការភ្ជាប់ ការណែនាំ និងការលូតលាស់ជាបន្ត' : 'Your AIC connection does not end at graduation — discover lifelong benefits awaiting you.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/alumni/network" className="hover:text-primary transition-colors">{kh ? 'អតីតនិស្សិត' : 'Alumni'}</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'អត្ថប្រយោជន៍' : 'Benefits'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">{kh ? 'អតីតនិស្សិត' : 'Alumni'}</h3>
              <ul className="space-y-3">
                {sideLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`block transition-colors ${link.href === '/alumni/benefits' ? 'text-primary font-bold border-l-2 border-primary pl-3' : 'text-gray-600 hover:text-primary'} ${kh ? 'font-khmer' : ''}`}>
                      {kh ? link.label.kh : link.label.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-16">
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'អ្វីដែលអ្នករំពឹងទទួលបាន' : 'What You Receive as an AIC Alumnus'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((b, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-sm p-6 hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <b.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className={`font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? b.title.kh : b.title.en}</h3>
                        <p className={`text-sm text-gray-600 leading-relaxed ${kh ? 'font-khmer' : ''}`}>{kh ? b.desc.kh : b.desc.en}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-sm p-8">
              <h3 className={`text-2xl font-serif font-bold text-gray-900 mb-4 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'របៀបចុះឈ្មោះ' : 'How to Register as Alumni'}
              </h3>
              <ul className="space-y-3">
                {[
                  { en: 'Contact AIC Alumni Relations Office via email or phone', kh: 'ទំនាក់ទំនងការិយាល័យអតីតនិស្សិត AIC តាមមែល ឬទូរស័ព្ទ' },
                  { en: 'Provide your full name, graduation year, major, and contact details', kh: 'ផ្ដល់ឈ្មោះ ឆ្នាំបញ្ចប់ ជំនាញ និងព័ត៌មានទំនាក់ទំនង' },
                  { en: 'Receive your alumni ID and access credentials', kh: 'ទទួលបាន Alumni ID និងព័ត៌មានចូលប្រើ' },
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>{kh ? step.kh : step.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចុះឈ្មោះឥឡូវ!' : 'Register Today!'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទំនាក់ទំនងយើងខ្ញុំ ដើម្បីចុះឈ្មោះ និងចូលប្រើអត្ថប្រយោជន៍' : 'Contact us now to register and start enjoying your alumni benefits.'}</p>
              </div>
              <Link href="/about/contact" className={`flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-sm whitespace-nowrap transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ទំនាក់ទំនង' : 'Get in Touch'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
