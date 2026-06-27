'use client'
import React from "react";
import Link from "next/link";
import { ChevronRight, Heart, BookOpen, Users, Building2, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AlumniGivingPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const givingWays = [
    {
      icon: BookOpen,
      title: { en: 'Scholarship Fund', kh: 'មូលនិធិអាហារូបករណ៍' },
      desc: { en: 'Contribute to the AIC scholarship fund, directly enabling talented students from disadvantaged backgrounds to access quality higher education.', kh: 'ចូលរួមចំណែកដល់មូលនិធិអាហារូបករណ៍ AIC ដើម្បីជួយនិស្សិតដែលខ្វះប្រាក់ ក្នុងការចូលប្រើប្រាស់ការអប់រំកម្រិតខ្ពស់ប្រកបដោយគុណភាព។' },
    },
    {
      icon: Building2,
      title: { en: 'Facility & Infrastructure', kh: 'ហេដ្ឋារចនាសម្ព័ន្ធ' },
      desc: { en: 'Support the development of new laboratories, libraries, and modern learning spaces to enhance the student experience across all 5 campuses.', kh: 'គាំទ្រការអភិវឌ្ឍន៍មន្ទីរពិសោធន៍ថ្មី បណ្ណាល័យ និងទីតាំងសិក្សាទំនើប នៅពេញទាំង ៥ សាខា។' },
    },
    {
      icon: Users,
      title: { en: 'Student Mentorship', kh: 'ការណែនាំនិស្សិត' },
      desc: { en: 'Donate your time by mentoring current students through our structured alumni mentorship program — no financial contribution required.', kh: 'ឧបត្ថម្ភពេលវេលារបស់អ្នក ដោយណែនាំនិស្សិតបច្ចុប្បន្ន — មិនចាំបាច់ចំណាយថវិកា។' },
    },
    {
      icon: Heart,
      title: { en: 'General Endowment', kh: 'មូលនិធិទូទៅ' },
      desc: { en: 'Make an unrestricted gift to AIC\'s general endowment fund, which supports where the need is greatest — programs, research, and student welfare.', kh: 'ធ្វើការបរិច្ចាគទៅមូលនិធិ AIC ដែលគ្មានការកំណត់ ដើម្បីគាំទ្រចំណែកដ៏ចាំបាច់ — កម្មវិធី ស្រាវជ្រាវ និងសុខមាលភាពនិស្សិត។' },
    },
  ];

  const impactStats = [
    { value: '200+', label: { en: 'Scholarships Awarded', kh: 'អាហារូបករណ៍ប្រគល់ជូន' } },
    { value: '$50K+', label: { en: 'Alumni Donations', kh: 'ការបរិច្ចាគពីអតីតនិស្សិត' } },
    { value: '5', label: { en: 'Campuses Supported', kh: 'សាខាដែលបានគាំទ្រ' } },
    { value: '100%', label: { en: 'Transparency', kh: 'តម្លាភាព' } },
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
          <Heart className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការចូលរួមឧបត្ថម្ភ' : 'Alumni Giving'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ជំនួយរបស់អ្នក — មិនថាតូចប៉ុណ្ណា — ជំរុញការសិក្សារបស់ជំនាន់ក្រោយ' : 'Your support — no matter the size — helps the next generation of Cambodian leaders thrive at AIC.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/alumni/network" className="hover:text-primary transition-colors">{kh ? 'អតីតនិស្សិត' : 'Alumni'}</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'ការចូលរួមឧបត្ថម្ភ' : 'Giving'}</span>
        </div>
      </div>

      {/* Impact stats bar */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((s, i) => (
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
                    <Link href={link.href} className={`block transition-colors ${link.href === '/alumni/giving' ? 'text-primary font-bold border-l-2 border-primary pl-3' : 'text-gray-600 hover:text-primary'} ${kh ? 'font-khmer' : ''}`}>
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
                {kh ? 'របៀបចូលរួម' : 'Ways to Give Back'}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {givingWays.map((way, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-sm p-6 hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <way.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className={`font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? way.title.kh : way.title.en}</h3>
                    <p className={`text-sm text-gray-600 leading-relaxed ${kh ? 'font-khmer' : ''}`}>{kh ? way.desc.kh : way.desc.en}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How donations are used */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <h2 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ការប្រើប្រាស់ថវិកា' : 'How We Use Donations'}
              </h2>
              <ul className="space-y-3">
                {[
                  { en: '40% — Student scholarship funding and tuition support', kh: '40% — ថវិកាអាហារូបករណ៍ និងការជំនួយថ្លៃសិក្សានិស្សិត' },
                  { en: '30% — Laboratory and library facility upgrades', kh: '30% — ការធ្វើឱ្យប្រសើរឡើងនូវបរិក្ខារ មន្ទីរពិសោធន៍ និងបណ្ណាល័យ' },
                  { en: '20% — Research and academic publication support', kh: '20% — ការស្រាវជ្រាវ និងការបោះពុម្ពផ្សាយ' },
                  { en: '10% — Student welfare, events, and alumni programs', kh: '10% — សុខមាលភាពនិស្សិត ព្រឹត្តិការណ៍ និងកម្មវិធីអតីតនិស្សិត' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-700 ${kh ? 'font-khmer' : ''}`}>{kh ? item.kh : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចង់ចូលរួម?' : 'Ready to Give?'}</h3>
                <p className={`text-white/75 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទំនាក់ទំនងយើងខ្ញុំ ដើម្បីពិភាក្សាពីឱកាសបរិច្ចាគ' : 'Contact us to discuss donation and giving opportunities at AIC.'}</p>
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
