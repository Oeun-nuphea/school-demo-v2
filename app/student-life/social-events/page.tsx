'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, Users, Music, Camera, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SocialEventsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const socialEvents = [
    { icon: '🎉', title: { en: 'Welcome Party', kh: 'ពិធីស្វាគមន៍និស្សិតថ្មី' }, desc: { en: 'Annual welcome event for new students to connect and have fun.', kh: 'ពិធីស្វាគមន៍ប្រចាំឆ្នាំសម្រាប់និស្សិតថ្មី' } },
    { icon: '🏆', title: { en: 'Sports Day', kh: 'ទិវាកីឡា' }, desc: { en: 'Inter-department sports competition fostering teamwork and school spirit.', kh: 'ការប្រកួតកីឡារវាងមហាវិទ្យាល័យ' } },
    { icon: '🎵', title: { en: 'Talent Show', kh: 'កម្មវិធីបង្ហាញទេពកោសល្យ' }, desc: { en: 'Showcase your singing, dancing, or other talents on stage.', kh: 'បង្ហាញទេពកោសល្យច្រៀង រាំ និងការសម្ដែង' } },
    { icon: '🎪', title: { en: 'Cultural Festival', kh: 'ពិធីបុណ្យវប្បធម៌' }, desc: { en: 'Celebrate diversity with food, music, and performances from different cultures.', kh: 'ប្រារព្ធពិធីបុណ្យវប្បធម៌ចម្រុះ' } },
    { icon: '🤝', title: { en: 'Networking Night', kh: 'រាត្រីសន្ទនាបណ្តាញ' }, desc: { en: 'Connect with alumni, industry professionals, and fellow students.', kh: 'ជួបសំណេះសំណាលជាមួយអតីតនិស្សិត និងអ្នកជំនាញ' } },
    { icon: '🎄', title: { en: 'Seasonal Celebrations', kh: 'ពិធីបុណ្យតាមរដូវ' }, desc: { en: 'Khmer New Year, Water Festival, Christmas, and other holiday events.', kh: 'បុណ្យចូលឆ្នាំថ្មី បុណ្យអុំទូក និងបុណ្យនានា' } },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ព្រឹត្តិការណ៍សង្គម' : 'Social Events'}
          </h1>
          <p className={`text-lg text-white/75 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ចូលរួមសកម្មភាពសង្គម និងកសាងមិត្តភាព' : 'Join social activities and build lasting friendships.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className={`hover:text-primary transition-colors ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទំព័រដើម' : 'Home'}</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href="/student-life" className={`hover:text-primary transition-colors ${kh ? 'font-khmer' : ''}`}>{kh ? 'ជីវិតនិស្សិត' : 'Student Life'}</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'ព្រឹត្តិការណ៍សង្គម' : 'Social Events'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className={`text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ជីវិតនិស្សិត' : 'Student Life'}</h3>
              <ul className="space-y-3">
                <li><Link href="/student-life/schedules" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'វេនសិក្សា' : 'Study Schedules'}</Link></li>
                <li><Link href="/student-life/facilities/self-study" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កន្លែងស្វ័យសិក្សា' : 'Self-Study Area'}</Link></li>
                <li><Link href="/student-life/facilities/dormitory" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អន្តេវាសិកដ្ឋាន' : 'Dormitory'}</Link></li>
                <li><Link href="/student-life/facilities/canteen" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'អាហារដ្ឋាន' : 'Canteen'}</Link></li>
                <li><Link href="/student-life/extra-curricular" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'សកម្មភាពក្រៅម៉ោង' : 'Extra-Curricular'}</Link></li>
                <li><Link href="/student-life/social-events" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{kh ? 'ព្រឹត្តិការណ៍សង្គម' : 'Social Events'}</Link></li>
                <li><Link href="/events" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ព្រឹត្តិការណ៍' : 'Events'}</Link></li>
                <li><Link href="/student-life/graduation" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការបញ្ចប់ការសិក្សា' : 'Graduation'}</Link></li>
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4">
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-secondary mr-4" />
              <h2 className={`text-3xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ព្រឹត្តិការណ៍សង្គម' : 'Upcoming Social Events'}
              </h2>
            </div>
            <div className="w-16 h-1 bg-secondary mb-10"></div>

            <p className={`text-lg text-gray-700 mb-12 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
              {kh ? 'ចូលរួមព្រឹត្តិការណ៍សង្គមនានា ដើម្បីពង្រីកទំនាក់ទំនង និងបង្កើនបទពិសោធន៍ក្រៅម៉ោងសិក្សា។' : 'Participate in social events to expand your network and enrich your campus experience beyond the classroom.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialEvents.map((event, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl mb-4">{event.icon}</div>
                  <h3 className={`font-bold text-gray-900 text-lg mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? event.title.kh : event.title.en}</h3>
                  <p className={`text-gray-600 ${kh ? 'font-khmer' : ''}`}>{kh ? event.desc.kh : event.desc.en}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-sm p-8">
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'ចង់រៀបចំព្រឹត្តិការណ៍? ចូលរួមជាមួយពួកយើង!' : 'Want to organize an event? Join us!'}
                  </h3>
                  <p className={`text-gray-600 mb-4 ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'និស្សិតអាចស្នើសុំរៀបចំព្រឹត្តិការណ៍តាមរយៈការិយាល័យកិច្ចការនិស្សិត។' : 'Students can propose events through the Student Affairs office.'}
                  </p>
                  <Link href="/about/contact" className={`inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'ទំនាក់ទំនងពួកយើង' : 'Contact Us'} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
