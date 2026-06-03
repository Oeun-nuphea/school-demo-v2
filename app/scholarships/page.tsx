'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, Award, CheckCircle, Phone, Mail, Globe, Info } from 'lucide-react';
import info from '../../information.json';
import { useLanguage } from '@/context/LanguageContext';

const faqs = [
  {
    q: { english: 'What is the scholarship exam process?', khmer: 'តើដំណើរការប្រឡងអាហារូបករណ៍មានអ្វីខ្លះ?' },
    a: { english: 'Students apply through AIC admissions, sit for a written entrance exam, and are evaluated based on academic performance and interview results.', khmer: 'និស្សិតដាក់ពាក្យតាមការចូលរៀន AIC ហើយប្រឡងសរសេរ ក៏ដូចជាការសម្ភាសសម្រាប់វាយតម្លៃ។' },
  },
  {
    q: { english: 'Can I receive a scholarship if I transfer from another institution?', khmer: 'តើខ្ញុំអាចទទួលអាហារូបករណ៍បានទេ ប្រសិនបើផ្លាស់ប្ដូរពីស្ថាប័នផ្សេង?' },
    a: { english: 'Yes, transfer students may be eligible. Please contact the admissions office for individual assessment and eligibility confirmation.', khmer: 'បាទ/ចាស, និស្សិតផ្លាស់ប្ដូរអាចមានលក្ខខណ្ឌ។ សូមទាក់ទងការិយាល័យចូលរៀនដើម្បីវាយតម្លៃជាក់លាក់។' },
  },
  {
    q: { english: 'Does the scholarship cover all study years?', khmer: 'តើអាហារូបករណ៍គ្របដណ្ដប់ឆ្នាំសិក្សាទាំងអស់ទេ?' },
    a: { english: 'The 100% scholarship covers the full duration of your program as long as you maintain satisfactory academic standing.', khmer: 'អាហារូបករណ៍ ១០០% គ្របដណ្ដប់ពេញរយៈពេលកម្មវិធីរបស់អ្នក ដរាបណារក្សាស្ថានភាពសិក្សាប្រក្រតី។' },
  },
  {
    q: { english: 'Is there an opportunity to study in the English Program?', khmer: 'តើមានឱកាសសិក្សាក្នុងកម្មវិធីភាសាអង់គ្លេសទេ?' },
    a: { english: 'Yes, AIC offers programs where English is the primary medium of instruction, especially for international business and technology majors.', khmer: 'បាទ/ចាស, AIC មានកម្មវិធីដែលភាសាអង់គ្លេសជាមធ្យោបាយបង្រៀនចម្បង ជាពិសេសសម្រាប់ជំនាញពាណិជ្ជកម្មអន្តរជាតិ និងបច្ចេកវិទ្យា។' },
  },
];

const scholarships = [
  {
    id: 'master',
    badge: '100%',
    title: { english: "Master's Degree Scholarship", khmer: 'អាហារូបករណ៍បរិញ្ញាបត្រជាន់ខ្ពស់' },
    description: { english: 'Full scholarship for students who pass the Master\'s entrance exam, including accommodation and international study opportunities.', khmer: 'អាហារូបករណ៍ពេញសម្រាប់និស្សិតដែលប្រឡងជាប់ រួមបញ្ចូលបន្ទប់ស្នាក់នៅ និងឱកាសសិក្សានៅក្រៅប្រទេស។' },
    eligibility: [
      { english: 'Pass the AIC Master\'s entrance examination', khmer: 'ប្រឡងជាប់ការប្រឡងចូលបរិញ្ញាបត្រជាន់ខ្ពស់ AIC' },
      { english: 'Hold a valid Bachelor\'s degree', khmer: 'មានបរិញ្ញាបត្រត្រឹមត្រូវវាលបច្ចុប្បន្ន' },
      { english: 'Maintain satisfactory GPA throughout studies', khmer: 'រក្សា GPA ប្រក្រតីពេញការសិក្សា' },
    ],
    benefits: [
      { label: { english: 'Tuition Fee', khmer: 'ថ្លៃសិក្សា' }, value: { english: '100% Waived', khmer: 'ឥតគិតថ្លៃ ១០០%' } },
      { label: { english: 'Accommodation', khmer: 'ការស្នាក់នៅ' }, value: { english: 'Provided', khmer: 'ផ្ដល់ជូន' } },
      { label: { english: 'Study Abroad', khmer: 'ការសិក្សាក្រៅប្រទេស' }, value: { english: 'Opportunity', khmer: 'ឱកាស' } },
      { label: { english: 'Job Placement', khmer: 'ការដាក់ការងារ' }, value: { english: 'After Graduation', khmer: 'ក្រោយបញ្ចប់' } },
    ],
  },
  {
    id: 'bachelor',
    badge: '100%',
    title: { english: "Bachelor's Degree Scholarship", khmer: 'អាហារូបករណ៍បរិញ្ញាបត្រ' },
    description: { english: 'Full scholarship for students who pass the Bachelor\'s entrance exam, with opportunities to study abroad and job placement upon graduation.', khmer: 'អាហារូបករណ៍ពេញសម្រាប់និស្សិតដែលប្រឡងជាប់ ជាមួយឱកាសសិក្សានៅក្រៅប្រទេស និងការដាក់ការងារ។' },
    eligibility: [
      { english: 'Pass the AIC Bachelor\'s entrance examination', khmer: 'ប្រឡងជាប់ការប្រឡងចូលបរិញ្ញាបត្រ AIC' },
      { english: 'Hold a valid high school diploma (Bac II)', khmer: 'មានសញ្ញាបត្រមធ្យមសិក្សា (បាក់ទោ)' },
      { english: 'Demonstrate academic excellence', khmer: 'បង្ហាញពីភាពល្អឥតខ្ចោះក្នុងការសិក្សា' },
    ],
    benefits: [
      { label: { english: 'Tuition Fee', khmer: 'ថ្លៃសិក្សា' }, value: { english: '100% Waived', khmer: 'ឥតគិតថ្លៃ ១០០%' } },
      { label: { english: 'Accommodation', khmer: 'ការស្នាក់នៅ' }, value: { english: 'Provided', khmer: 'ផ្ដល់ជូន' } },
      { label: { english: 'Study Abroad', khmer: 'ការសិក្សាក្រៅប្រទេស' }, value: { english: 'Opportunity', khmer: 'ឱកាស' } },
      { label: { english: 'Job Placement', khmer: 'ការដាក់ការងារ' }, value: { english: 'After Graduation', khmer: 'ក្រោយបញ្ចប់' } },
    ],
  },
  {
    id: 'associate',
    badge: '100%',
    title: { english: "Associate Degree Scholarship", khmer: 'អាហារូបករណ៍បរិញ្ញាបត្ររង' },
    description: { english: 'Full scholarship for students who pass the Associate\'s entrance exam, with job placement support after completion of the 2-year program.', khmer: 'អាហារូបករណ៍ពេញសម្រាប់និស្សិតដែលប្រឡងជាប់ ជាមួយការគាំទ្រការដាក់ការងារក្រោយបញ្ចប់កម្មវិធី ២ ឆ្នាំ។' },
    eligibility: [
      { english: 'Pass the AIC Associate\'s entrance examination', khmer: 'ប្រឡងជាប់ការប្រឡងចូលបរិញ្ញាបត្ររង AIC' },
      { english: 'Hold at least grade 12 certificate', khmer: 'មានវិញ្ញាបនបត្រថ្នាក់ទី ១២ យ៉ាងតិច' },
    ],
    benefits: [
      { label: { english: 'Tuition Fee', khmer: 'ថ្លៃសិក្សា' }, value: { english: '100% Waived', khmer: 'ឥតគិតថ្លៃ ១០០%' } },
      { label: { english: 'Job Placement', khmer: 'ការដាក់ការងារ' }, value: { english: 'Included', khmer: 'រួមបញ្ចូល' } },
    ],
  },
];

function FAQItem({ item, lang }: { item: typeof faqs[0]; lang: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between py-4 text-left gap-4 ${lang === 'kh' ? 'font-khmer' : ''}`}
      >
        <span className="font-semibold text-gray-900 text-sm">{lang === 'kh' ? item.q.khmer : item.q.english}</span>
        <ChevronDown
          className={`w-4 h-4 text-secondary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        ref={bodyRef}
        style={{
          maxHeight: open ? bodyRef.current?.scrollHeight + 'px' : '0px',
          opacity: open ? 1 : 0,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className={`pb-4 text-sm text-gray-600 leading-relaxed ${lang === 'kh' ? 'font-khmer' : ''}`}>
          {lang === 'kh' ? item.a.khmer : item.a.english}
        </p>
      </div>
    </div>
  );
}

export default function ScholarshipsPage() {
  const { t, lang } = useLanguage();
  const branch = info.contact_and_branches[0];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[240px] flex items-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl">
            <h1 className={`text-4xl md:text-5xl font-serif font-bold text-white mb-4 ${lang === 'kh' ? 'font-khmer' : ''}`}>
              {t(info.scholarship_conditions.title)}
            </h1>
            <p className={`text-white/75 text-lg ${lang === 'kh' ? 'font-khmer' : ''}`}>
              {lang === 'kh'
                ? 'ឱកាសអាហារូបករណ៍ ១០០% សម្រាប់និស្សិតឆ្នើម — គ្រប,ដណ្ដប់ថ្លៃសិក្សា ការស្នាក់នៅ និងឱកាសសិក្សានៅក្រៅប្រទេស។'
                : '100% scholarship opportunities for outstanding students — covering tuition, accommodation, and international study experiences.'}
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${lang === 'kh' ? 'font-khmer' : ''}`}>{t(info.scholarship_conditions.title)}</span>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: Scholarship Cards */}
          <div className="flex-1 space-y-12">
            {scholarships.map((s) => (
              <div key={s.id} className="border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Card header */}
                <div className="bg-primary/5 border-b border-gray-100 px-6 py-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <Award className="w-5 h-5 text-secondary" />
                      <h2 className={`text-xl font-serif font-bold text-primary ${lang === 'kh' ? 'font-khmer' : ''}`}>
                        {lang === 'kh' ? s.title.khmer : s.title.english}
                      </h2>
                    </div>
                    <p className={`text-gray-600 text-sm leading-relaxed ${lang === 'kh' ? 'font-khmer' : ''}`}>
                      {lang === 'kh' ? s.description.khmer : s.description.english}
                    </p>
                  </div>
                  <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
                    {s.badge}
                  </span>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Eligibility */}
                  <div>
                    <h3 className={`text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                      {lang === 'kh' ? 'លក្ខខណ្ឌ' : 'Eligibility'}
                    </h3>
                    <ul className="space-y-2">
                      {s.eligibility.map((e, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className={`text-sm text-gray-700 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                            {lang === 'kh' ? e.khmer : e.english}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits table */}
                  <div>
                    <h3 className={`text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                      {lang === 'kh' ? 'អត្ថប្រយោជន៍' : 'Benefits'}
                    </h3>
                    <table className="w-full text-sm border border-gray-100 rounded-sm overflow-hidden">
                      <tbody>
                        {s.benefits.map((b, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className={`px-3 py-2 text-gray-600 border-r border-gray-100 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                              {lang === 'kh' ? b.label.khmer : b.label.english}
                            </td>
                            <td className={`px-3 py-2 font-semibold text-secondary ${lang === 'kh' ? 'font-khmer' : ''}`}>
                              {lang === 'kh' ? b.value.khmer : b.value.english}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}

            {/* Note */}
            <div className="bg-amber-50 border-l-4 border-secondary p-5 rounded-r-sm flex items-start gap-3">
              <Info className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <p className={`text-gray-700 text-sm leading-relaxed ${lang === 'kh' ? 'font-khmer' : ''}`}>
                {t(info.scholarship_conditions.note)}
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-4">
              <h2 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                {lang === 'kh' ? 'សំណួរដែលសួរញឹកញាប់' : 'Frequently Asked Questions'}
              </h2>
              <div className="bg-white border border-gray-200 rounded-sm divide-y divide-gray-200 px-4">
                {faqs.map((f, i) => <FAQItem key={i} item={f} lang={lang} />)}
              </div>
            </div>
          </div>

          {/* Right: Contact sidebar */}
          <aside className="lg:w-72">
            <div className="sticky top-28 space-y-6">
              <div className="bg-primary text-white rounded-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-white/10">
                  <h3 className={`text-lg font-serif font-bold mb-1 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                    {lang === 'kh' ? 'ទំនាក់ទំនងអាហារូបករណ៍' : 'Contact For Scholarship'}
                  </h3>
                  <p className={`text-white/70 text-xs ${lang === 'kh' ? 'font-khmer' : ''}`}>
                    {lang === 'kh' ? 'ចុះឈ្មោះ ០១ ធ្នូ ២០២៣ – ០១ មីនា ២០២៤' : 'Open year-round — contact us anytime'}
                  </p>
                </div>
                <div className="px-6 py-5 space-y-4">
                  {branch.phone_numbers.slice(0, 3).map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                      <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-secondary transition-colors">{p}</a>
                    </div>
                  ))}
                  {branch.email && (
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                      <a href={`mailto:${branch.email}`} className="hover:text-secondary transition-colors break-all">{branch.email}</a>
                    </div>
                  )}
                  {branch.website && (
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="w-4 h-4 text-secondary flex-shrink-0" />
                      <a href={`https://${branch.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">{branch.website}</a>
                    </div>
                  )}
                </div>
              </div>

              {/* Intake dates */}
              <div className="border border-gray-200 rounded-sm overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h4 className={`font-bold text-gray-900 text-sm ${lang === 'kh' ? 'font-khmer' : ''}`}>
                    {lang === 'kh' ? 'ថ្ងៃទទួលពាក្យ' : 'Intake Dates'}
                  </h4>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {info.intake_dates.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className={`px-4 py-2.5 text-gray-600 border-r border-gray-100 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                          {lang === 'kh' ? row.intake.khmer : row.intake.english}
                        </td>
                        <td className={`px-4 py-2.5 font-semibold text-secondary ${lang === 'kh' ? 'font-khmer' : ''}`}>
                          {lang === 'kh' ? row.date.khmer : row.date.english}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
