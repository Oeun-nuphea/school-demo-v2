'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Quote, Star, ArrowRight, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SuccessStoriesPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const stories = [
    {
      name: 'Chhim Leakhena',
      classYear: '2022',
      major: { en: 'International Business', kh: 'ពាណិជ្ជកម្មអន្តរជាតិ' },
      position: { en: 'Senior Logistics Analyst', kh: 'អ្នកវិភាគដឹកជញ្ជូនជាន់ខ្ពស់' },
      company: { en: 'Japanese Logistics Firm, Tokyo', kh: 'ក្រុមហ៊ុនដឹកជញ្ជូន ជប៉ុន' },
      salary: '$2,200/month',
      quote: { en: 'AIC gave me both the language skills and the internship link to land my dream career in Japan. The professors were always available and the curriculum was practical.', kh: 'AIC បានផ្ដល់ឱ្យខ្ញុំនូវជំនាញភាសា និងការតភ្ជាប់ការងាររហូតដល់ការងារក្តីស្រមៃនៅជប៉ុន។ សាស្ត្រាចារ្យតែងតែមានប្រកប ហើយកម្មវិធីជាក់ស្ដែង។' },
    },
    {
      name: 'Sok Chamroeun',
      classYear: '2020',
      major: { en: 'Finance & Banking', kh: 'ហិរញ្ញវត្ថុ និងធនាគារ' },
      position: { en: 'Finance Officer', kh: 'មន្ត្រីហិរញ្ញវត្ថុ' },
      company: { en: 'National Bank of Cambodia, Phnom Penh', kh: 'ធនាគារជាតិ ភ្នំពេញ' },
      salary: '$800/month',
      quote: { en: 'The rigorous accounting and finance curriculum, combined with real internship experience, prepared me fully for the professional banking world.', kh: 'កម្មវិធីគណនេយ្យ និងហិរញ្ញវត្ថុ រួមជាមួយបទពិសោធន៍កម្មសិក្សាជាក់ស្ដែង បានរៀបចំខ្ញុំយ៉ាងល្អក្នុងវិស័យធនាគារ។' },
    },
    {
      name: 'Nget Sokunthea',
      classYear: '2021',
      major: { en: 'Computer Science', kh: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ' },
      position: { en: 'IT Project Manager', kh: 'អ្នកគ្រប់គ្រងគម្រោង IT' },
      company: { en: 'Technology Company, Phnom Penh', kh: 'ក្រុមហ៊ុន Technology ភ្នំពេញ' },
      salary: '$900/month',
      quote: { en: 'The practical labs and research mindset I gained at AIC gave me a real edge when entering the tech industry. I was job-ready from day one.', kh: 'ហ្វឹកហ្វឺនជាក់ស្ដែង និងគំនិតស្រាវជ្រាវដែលខ្ញុំទទួលបានពី AIC បានផ្ដល់ឱ្យខ្ញុំនូវគណៈប្រតិភូល្អ ក្នុងឧស្សាហកម្មបច្ចេកទេស។' },
    },
    {
      name: 'Pich Dara',
      classYear: '2019',
      major: { en: 'Public Law', kh: 'នីតិសាធារណៈ' },
      position: { en: 'Legal Advisor', kh: 'អ្នកប្រឹក្សាផ្នែកច្បាប់' },
      company: { en: 'Ministry of Justice, Cambodia', kh: 'ក្រសួងយុត្តិធម៌ ព្រះរាជាណាចក្រកម្ពុជា' },
      salary: '$750/month',
      quote: { en: 'Studying law at AIC with experienced legal practitioners gave me the solid theoretical and practical foundation I needed to serve in government.', kh: 'ការសិក្សាច្បាប់នៅ AIC ជាមួយអ្នកច្បាប់ដែលមានបទពិសោធ បានផ្ដល់ឱ្យខ្ញុំនូវមូលដ្ឋានគ្រឹះដ៏ប្រសើរ ដើម្បីបម្រើការក្នុងរដ្ឋាភិបាល។' },
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
          <Star className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'រឿងរ៉ាវជោគជ័យ' : 'Alumni Success Stories'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ជោគជ័យរបស់អតីតនិស្សិតគឺជាក្តី誇ររបស់យើង' : 'Our graduates are building careers across Cambodia and beyond — inspiring the next generation.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/alumni/network" className="hover:text-primary transition-colors">{kh ? 'អតីតនិស្សិត' : 'Alumni'}</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'រឿងរ៉ាវជោគជ័យ' : 'Success Stories'}</span>
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
                    <Link href={link.href} className={`block transition-colors ${link.href === '/alumni/success-stories' ? 'text-primary font-bold border-l-2 border-primary pl-3' : 'text-gray-600 hover:text-primary'} ${kh ? 'font-khmer' : ''}`}>
                      {kh ? link.label.kh : link.label.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-8">
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ការបំផុសអារម្មណ៍ពីអតីតនិស្សិត' : 'Inspiring Journeys from Our Graduates'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
            </div>

            {stories.map((story, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="bg-primary px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white text-lg">{story.name}</p>
                    <p className={`text-white/70 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? `ជំនាន់ ${story.classYear} · ${story.major.kh}` : `Class of ${story.classYear} · ${story.major.en}`}</p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-secondary font-bold">{story.salary}</p>
                    <p className="text-white/60 text-xs">{kh ? 'ប្រាក់ខែ' : 'Monthly Salary'}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className={`font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? story.position.kh : story.position.en}</p>
                      <p className={`text-sm text-gray-500 ${kh ? 'font-khmer' : ''}`}>{kh ? story.company.kh : story.company.en}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-sm">
                    <Quote className="w-6 h-6 text-secondary flex-shrink-0 mt-1 opacity-70" />
                    <p className={`text-gray-700 italic leading-relaxed ${kh ? 'font-khmer' : ''}`}>{kh ? story.quote.kh : story.quote.en}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចង់ចែករំលែករឿងរ៉ាវ?' : 'Share Your Story?'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ជូនដំណឹងដល់យើងខ្ញុំពីជោគជ័យរបស់អ្នកបន្ទាប់ពីបញ្ចប់ AIC' : 'Tell us about your achievement after graduating from AIC.'}</p>
              </div>
              <Link href="/about/contact" className={`flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary-dark font-bold px-8 py-3 rounded-sm whitespace-nowrap transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ទំនាក់ទំនង' : 'Contact Us'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
