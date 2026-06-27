'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Users, Trophy, Heart, Calendar, ArrowRight, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AlumniNetworkPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const stats = [
    { value: '5,000+', label: { en: 'Alumni Worldwide', kh: 'អតីតនិស្សិតជុំវិញពិភពលោក' } },
    { value: '20+', label: { en: 'Countries Represented', kh: 'ប្រទេសសរុប' } },
    { value: '95%', label: { en: 'Employment Rate', kh: 'អត្រាការងារ' } },
    { value: '2006', label: { en: 'Established', kh: 'បង្កើតឡើងក្នុងឆ្នាំ' } },
  ];

  const successStories = [
    {
      name: 'Chhim Leakhena',
      classYear: '2022',
      position: { en: 'Senior Logistics Analyst, Japan', kh: 'អ្នកវិភាគដឹកជញ្ជូនជាន់ខ្ពស់ ប្រទេសជប៉ុន' },
      quote: { en: 'AIC gave me both the language skills and the internship link to land my dream career in Japan.', kh: 'AIC បានផ្ដល់ឱ្យខ្ញុំនូវជំនាញភាសា និងការតភ្ជាប់ការងាររហូតដល់ការងារក្តីស្រមៃនៅជប៉ុន។' },
    },
    {
      name: 'Sok Chamroeun',
      classYear: '2020',
      position: { en: 'Finance Officer, National Bank of Cambodia', kh: 'មន្ត្រីហិរញ្ញវត្ថុ ធនាគារជាតិ' },
      quote: { en: 'The practical curriculum and strong faculty mentorship shaped my professional growth in banking.', kh: 'កម្មវិធីសិក្សាជាក់ស្ដែង និងការណែនាំរបស់សាស្ត្រាចារ្យ បានជំរុញការរីកចម្រើនខ្ញុំក្នុងវិស័យធនាគារ។' },
    },
    {
      name: 'Nget Sokunthea',
      classYear: '2021',
      position: { en: 'IT Project Manager, Tech Company, Phnom Penh', kh: 'អ្នកគ្រប់គ្រងគម្រោង IT ភ្នំពេញ' },
      quote: { en: 'The ICT and research skills from AIC opened doors I never imagined possible.', kh: 'ជំនាញ ICT និងស្រាវជ្រាវពី AIC បានបើកទ្វារឱ្យខ្ញុំដែលខ្ញុំមិនធ្លាប់ស្រមៃ។' },
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
          <Users className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'បណ្តាញអតីតនិស្សិត' : 'Alumni Network'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ស្វែងយល់បន្ថែមពីបណ្តាញអតីតនិស្សិត AIC ជុំវិញពិភពលោក' : 'Join a global community of AIC graduates making an impact across industries and borders.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'អតីតនិស្សិត' : 'Alumni'}</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'បណ្តាញ' : 'Network'}</span>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-secondary">{s.value}</div>
                <div className={`text-white/70 text-sm mt-1 ${kh ? 'font-khmer' : ''}`}>{kh ? s.label.kh : s.label.en}</div>
              </div>
            ))}
          </div>
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
                    <Link
                      href={link.href}
                      className={`block transition-colors ${link.href === '/alumni/network' ? 'text-primary font-bold border-l-2 border-primary pl-3' : 'text-gray-600 hover:text-primary'} ${kh ? 'font-khmer' : ''}`}
                    >
                      {kh ? link.label.kh : link.label.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-16">
            {/* About network */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ក្លឹបអតីតនិស្សិត AIC' : 'The AIC Alumni Community'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Users, title: { en: 'Connect', kh: 'ភ្ជាប់ទំនាក់ទំនង' }, desc: { en: 'Expand your professional network with fellow AIC graduates across Cambodia and internationally.', kh: 'ពង្រីកបណ្តាញវិជ្ជាជីវៈរបស់អ្នកជាមួយអតីតនិស្សិត AIC ទូទាំងប្រទេសកម្ពុជា និងជុំវិញពិភពលោក។' } },
                  { icon: Trophy, title: { en: 'Mentor', kh: 'ប្រឹក្សាយោបល់' }, desc: { en: 'Share your experience with current students through our mentorship and career guidance program.', kh: 'ចែករំលែកបទពិសោធន៍ជាមួយនិស្សិតបច្ចុប្បន្នតាមរយៈកម្មវិធីណែនាំ។' } },
                  { icon: Calendar, title: { en: 'Celebrate', kh: 'ប្រារព្ធ' }, desc: { en: 'Join reunions, networking events, and alumni gatherings throughout the year.', kh: 'ចូលរួមកម្មវិធីជួបជុំ ព្រឹត្តិការណ៍ networking និងការជួបជុំអតីតនិស្សិតពេញមួយឆ្នាំ។' } },
                ].map((card, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-sm p-6 hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className={`font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? card.title.kh : card.title.en}</h3>
                    <p className={`text-sm text-gray-600 leading-relaxed ${kh ? 'font-khmer' : ''}`}>{kh ? card.desc.kh : card.desc.en}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured stories */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ជោគជ័យរបស់អតីតនិស្សិត' : 'Alumni Success Highlights'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="space-y-6">
                {successStories.map((story, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200 rounded-sm p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="w-8 h-8 text-secondary flex-shrink-0 mt-1 opacity-60" />
                      <div>
                        <p className={`text-gray-700 italic mb-4 leading-relaxed ${kh ? 'font-khmer' : ''}`}>&ldquo;{kh ? story.quote.kh : story.quote.en}&rdquo;</p>
                        <p className="font-bold text-gray-900">{story.name}</p>
                        <p className={`text-sm text-primary ${kh ? 'font-khmer' : ''}`}>{kh ? story.position.kh : story.position.en}</p>
                        <p className="text-xs text-gray-400 mt-1">{kh ? `ជំនាន់ ${story.classYear}` : `Class of ${story.classYear}`}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/alumni/success-stories" className={`inline-flex items-center gap-2 text-primary font-bold hover:underline ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'អានរឿងរ៉ាវជោគជ័យទាំងអស់' : 'Read All Success Stories'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចូលរួមបណ្តាញ!' : 'Join the Network!'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទំនាក់ទំនងយើងខ្ញុំ ដើម្បីចុះឈ្មោះជាអតីតនិស្សិត AIC' : 'Contact us to register as an AIC alumni member and stay connected.'}</p>
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
