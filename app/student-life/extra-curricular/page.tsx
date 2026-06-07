'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Activity, Users, Heart, Trophy, Music, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PhotoGallery from '@/components/PhotoGallery';

export default function ExtraCurricularPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const clubs = [
    { icon: '🗣️', title: { en: 'Debate Club', kh: 'ក្លឹបជជែកវែកញែក' }, desc: { en: 'Weekly debates on business, politics, and social issues. Open to all levels.', kh: 'ការជជែកវែកញែកប្រចាំសប្ដាហ៍ ទំនើបសម្រាប់ទាំងអស់គ្នា' } },
    { icon: '📸', title: { en: 'Photography Club', kh: 'ក្លឹបថតរូប' }, desc: { en: 'Campus events, field trips, and exhibitions for photography enthusiasts.', kh: 'ថតរូបព្រឹត្តិការណ៍ ដំណើរកំសាន្ត និងពិព័រណ៍' } },
    { icon: '🎭', title: { en: 'Arts & Culture Club', kh: 'ក្លឹបศิลปៈ និងវប្បធម៌' }, desc: { en: 'Traditional dance, music performances, and cultural celebrations.', kh: 'របាំប្រពៃណី តន្ត្រី និងបុណ្យប្រៀបប្រដូច' } },
    { icon: '🌱', title: { en: 'Environmental Club', kh: 'ក្លឹបបរិស្ថាន' }, desc: { en: 'Tree planting, campus clean-ups, and sustainability awareness campaigns.', kh: 'ដាំដើមឈើ សំអាតបរិស្ថាន និងយុទ្ធនាការ' } },
    { icon: '💻', title: { en: 'Tech & Innovation Club', kh: 'ក្លឹបបច្ចេកវិទ្យា' }, desc: { en: 'Hackathons, coding workshops, and app development competitions.', kh: 'ការប្រកួតសរសេរកូដ និងអភិវឌ្ឍ App' } },
    { icon: '🤝', title: { en: 'Volunteer & Community Service', kh: 'ក្លឹបស្ម័គ្រចិត្ត' }, desc: { en: 'Outreach programs, tutoring underprivileged children, and charity drives.', kh: 'កម្មវិធីជួយសង្គម ការបង្ហាត់ and ការប្រមូលមូលនិធិ' } },
  ];

  const sports = [
    { icon: '⚽', name: { en: 'Football', kh: 'បាល់ទាត់' } },
    { icon: '🏀', name: { en: 'Basketball', kh: 'បាល់បោះ' } },
    { icon: '🏸', name: { en: 'Badminton', kh: 'ប៉ូ' } },
    { icon: '🏐', name: { en: 'Volleyball', kh: 'បាល់ទះ' } },
    { icon: '🏓', name: { en: 'Table Tennis', kh: 'តែនីស' } },
    { icon: '🥋', name: { en: 'Martial Arts / Bokator', kh: 'ប្រដាល់ / បុករាំ' } },
  ];

  const events = [
    { title: { en: 'AIC Sports Day', kh: 'ទិវាកីឡា AIC' }, date: { en: 'Every March', kh: 'រៀងរាល់ខែមីនា' }, desc: { en: 'Annual inter-college sports competition with all faculties.', kh: 'ការប្រកួតកីឡាប្រចាំឆ្នាំរវាងមហាវិទ្យាល័យ' } },
    { title: { en: 'Cultural Night', kh: 'យប់វប្បធម៌' }, date: { en: 'Every November', kh: 'រៀងរាល់ខែវិច្ឆិកា' }, desc: { en: 'Showcase of traditional Khmer performances and student talent.', kh: 'ការបង្ហាញសិល្បៈប្រពៃណីខ្មែរ និងទេពកោសល្យ' } },
    { title: { en: 'Freshmen Welcome Day', kh: 'ថ្ងៃស្វាគមន៍និស្សិតថ្មី' }, date: { en: 'Every October', kh: 'រៀងរាល់ខែតុលា' }, desc: { en: 'Orientation event for new students to meet clubs and classmates.', kh: 'ព្រឹត្តិការណ៍ស្វាគមន៍សម្រាប់និស្សិតថ្មី' } },
    { title: { en: 'National Day Celebrations', kh: 'ពិធីប្រារព្ធទិវាជាតិ' }, date: { en: 'Various', kh: 'ប្រែប្រួល' }, desc: { en: 'Annual events marking Khmer New Year, Independence Day, and more.', kh: 'ប្រជុំប្រចាំឆ្នាំ ចូលឆ្នាំខ្មែរ ថ្ងៃឯករាជ្យ' } },
  ];

  const photos = [
    { src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000', alt: 'Students playing sports' },
    { src: 'https://images.unsplash.com/photo-1523580494112-071d1694035c?q=80&w=1000', alt: 'Community service event' },
    { src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000', alt: 'Debate club event' },
    { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000', alt: 'Cultural exchange event' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-20">
          <Activity className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-white mb-4 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'សកម្មភាពក្រៅម៉ោងសិក្សា' : 'Extra-Curricular Activities'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'អភិវឌ្ឍជំនាញ បង្កើតស្នាមជើង ហើយជ្រើសរើសការកំសាន្តដ៏គ្រប់គ្រាន់' : 'Grow beyond the classroom — develop leadership, friendships, and lifelong skills.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Student Life</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>{kh ? 'សកម្មភាពក្រៅម៉ោង' : 'Extra-Curricular'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Student Life</h3>
                <ul className="space-y-3">
                  <li><Link href="/student-life/facilities/self-study" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'បរិក្ខារ' : 'Facilities'}</Link></li>
                  <li><Link href="/student-life/extra-curricular" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'សកម្មភាពក្រៅម៉ោង' : 'Extra-Curricular'}</Link></li>
                  <li><Link href="/student-life/internships" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'កម្មសិក្សា' : 'Careers & Internships'}</Link></li>
                  <li><Link href="/student-life/graduation" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការបញ្ចប់ការសិក្សា' : 'Graduation'}</Link></li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-sm text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className={`text-sm text-gray-600 mt-1 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ក្លឹប និងសម្ព័ន្ធ' : 'Active Clubs & Associations'}</p>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-14">

            {/* Clubs */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ក្លឹបនិស្សិត' : 'Student Clubs'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {clubs.map((club, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-sm p-6 hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="text-3xl mb-3">{club.icon}</div>
                    <h3 className={`font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? club.title.kh : club.title.en}</h3>
                    <p className={`text-sm text-gray-600 leading-relaxed ${kh ? 'font-khmer' : ''}`}>{kh ? club.desc.kh : club.desc.en}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sports */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h2 className={`text-2xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? 'កីឡា' : 'Sports & Athletics'}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sports.map((sport, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-sm p-4 flex items-center gap-3">
                    <span className="text-2xl">{sport.icon}</span>
                    <span className={`font-medium text-gray-800 ${kh ? 'font-khmer' : ''}`}>{kh ? sport.name.kh : sport.name.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Annual Events */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Music className="w-6 h-6 text-primary" />
                <h2 className={`text-3xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ព្រឹត្តិការណ៍ប្រចាំឆ្នាំ' : 'Annual Events'}</h2>
              </div>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="space-y-4">
                {events.map((ev, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row border border-gray-100 rounded-sm overflow-hidden bg-white">
                    <div className="bg-primary text-white px-6 py-4 md:w-48 flex-shrink-0 flex flex-col justify-center">
                      <p className={`font-bold text-lg ${kh ? 'font-khmer' : ''}`}>{kh ? ev.title.kh : ev.title.en}</p>
                      <p className={`text-secondary text-sm mt-1 ${kh ? 'font-khmer' : ''}`}>{kh ? ev.date.kh : ev.date.en}</p>
                    </div>
                    <div className="p-6 flex items-center">
                      <p className={`text-gray-600 ${kh ? 'font-khmer' : ''}`}>{kh ? ev.desc.kh : ev.desc.en}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-primary" />
                <h2 className={`text-3xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? 'រូបភាពសកម្មភាព' : 'Activity Gallery'}</h2>
              </div>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <PhotoGallery photos={photos} />
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-xl font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ចូលរួមក្លឹបថ្ងៃនេះ!' : 'Join a Club Today!'}</h3>
                <p className={`text-white/75 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? 'ទំនាក់ទំនងការិយាល័យកិច្ចការនិស្សិត' : 'Contact the Student Affairs office to register your interest.'}</p>
              </div>
              <Link href="/about/contact" className={`flex items-center gap-2 bg-secondary text-primary-dark font-bold px-6 py-3 rounded-sm whitespace-nowrap hover:bg-secondary/90 transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ទំនាក់ទំនង' : 'Get Involved'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
