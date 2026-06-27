'use client';
import React from 'react';
import Link from 'next/link';
import { Globe, MapPin, Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const destinations = [
  { en: 'China', kh: 'ចិន' },
  { en: 'Japan', kh: 'ជប៉ុន' },
  { en: 'South Korea', kh: 'កូរ៉េ' },
  { en: 'Vietnam', kh: 'វៀតណាម' },
  { en: 'Singapore', kh: 'សិង្ហបុរី' },
  { en: 'Malaysia', kh: 'ម៉ាឡេស៊ី' },
  { en: 'Laos', kh: 'ឡាវ' },
];

const stats = [
  { icon: Globe, value: '8+', label: { en: 'Partner Countries', kh: 'ប្រទេសដៃគូ' } },
  { icon: Users, value: '200+', label: { en: 'Students Sent Abroad', kh: 'និស្សិតចេញទៅក្រៅ' } },
  { icon: Award, value: '100%', label: { en: 'Scholarship Eligible', kh: 'ទទួលអាហារូបករណ៍' } },
  { icon: BookOpen, value: '10+', label: { en: 'Exchange Programs', kh: 'កម្មវិធីផ្លាស់ប្ដូរ' } },
];

const activities = [
  {
    icon: Globe,
    title: { en: 'Study Tours Abroad', kh: 'ទស្សនកិច្ចសិក្សានៅក្រៅប្រទេស' },
    description: { en: 'Students have opportunities to visit and intern in countries across Asia including China, Korea, Japan, and more.', kh: 'និស្សិតមានឱកាសទៅទស្សនកិច្ចសិក្សា និងកម្មសិក្សានៅប្រទេសជាច្រើននៅអាស៊ី។' },
  },
  {
    icon: Award,
    title: { en: 'Scholarship Exchanges', kh: 'ការផ្លាស់ប្ដូរអាហារូបករណ៍' },
    description: { en: 'Top students receive fully-funded scholarship opportunities to continue their education at partner universities abroad.', kh: 'និស្សិតល្អបំផុតទទួលបានអាហារូបករណ៍ពេញលេញដើម្បីបន្តការសិក្សានៅសាកលវិទ្យាល័យដៃគូនៅបរទេស។' },
  },
  {
    icon: Users,
    title: { en: 'International Conferences', kh: 'សន្និសីទអន្តរជាតិ' },
    description: { en: 'Students participate in international academic conferences, forums, and networking events to broaden their global perspective.', kh: 'និស្សិតចូលរួមសន្និសីទសិក្សា វេទិកា និងព្រឹត្តិការណ៍ទំនាក់ទំនងអន្តរជាតិ។' },
  },
];

export default function InternationalActivities() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'សកម្មភាពអន្តរជាតិ' : 'International Activities'}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className={`text-lg text-gray-600 ${kh ? 'font-khmer' : ''}`}>
            {kh
              ? 'ពង្រីកទស្សនៈរបស់អ្នកតាមរយៈការចូលរួមសកម្មភាពអន្តរជាតិ និងការផ្លាស់ប្ដូរវប្បធម៌។'
              : 'Broaden your horizons through international experiences and cross-cultural exchange programs.'}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-primary/5 border border-primary/10 rounded-sm p-5 text-center">
              <s.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
              <div className={`text-xs text-gray-500 ${kh ? 'font-khmer' : ''}`}>{kh ? s.label.kh : s.label.en}</div>
            </div>
          ))}
        </div>

        {/* Activity types */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Globe className="w-6 h-6 text-secondary" />
            <h3 className={`text-2xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'កម្មវិធីសកម្មភាពរបស់យើង' : 'Our Activity Programs'}
            </h3>
          </div>
          <div className="w-12 h-0.5 bg-secondary mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {activities.map((act, i) => (
              <div key={i} className="flex flex-col items-start gap-4 p-6 border border-gray-100 rounded-sm hover:border-primary/20 hover:bg-gray-50 transition-all shadow-sm">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center">
                  <act.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                </div>
                <div>
                  <h4 className={`font-bold text-lg text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? act.title.kh : act.title.en}</h4>
                  <p className={`text-gray-600 text-sm leading-relaxed ${kh ? 'font-khmer' : ''}`}>{kh ? act.description.kh : act.description.en}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Destination tags */}
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
            <p className={`text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ប្រទេសដៃគូ៖' : 'Partner Countries:'}
            </p>
            <div className="flex flex-wrap gap-2">
              {destinations.map((d, i) => (
                <span key={i} className={`inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full shadow-sm ${kh ? 'font-khmer' : ''}`}>
                  <MapPin className="w-3 h-3 text-secondary" />
                  {kh ? d.kh : d.en}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className={`text-xl font-serif font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ចូលរួមកម្មវិធីអន្តរជាតិ' : 'Join an International Program'}
            </h3>
            <p className={`text-white/75 text-sm max-w-xl ${kh ? 'font-khmer' : ''}`}>
              {kh
                ? 'ទំនាក់ទំនងការិយាល័យសិស្ស ដើម្បីដឹងអំពីឱកាសសកម្មភាពអន្តរជាតិ។'
                : 'Contact the student office to learn about upcoming international activity opportunities.'}
            </p>
          </div>
          <Link
            href="/about/contact"
            className={`inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-3 rounded-sm whitespace-nowrap transition-colors shadow-sm ${kh ? 'font-khmer' : ''}`}
          >
            {kh ? 'ទំនាក់ទំនងយើង' : 'Contact Us'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
