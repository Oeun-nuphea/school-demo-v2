'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, Users, Heart, Star, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PhotoGallery from '@/components/PhotoGallery';

export default function SocialEventsPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  const socialEvents = [
    {
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000',
      title: { en: 'Welcome Party', kh: 'ពិធីស្វាគមន៍និស្សិតថ្មី' },
      desc: { en: 'Annual welcome event for new students to connect, make friends, and kick off their campus journey with fun activities.', kh: 'ពិធីស្វាគមន៍ប្រចាំឆ្នាំសម្រាប់និស្សិតថ្មីឱ្យស្គាល់គ្នា និងចាប់ផ្តើមដំណើរសិក្សាដោយភាពសប្បាយរីករាយ' },
      stats: { en: '500+ attendees yearly', kh: '៥០០+ នាក់ចូលរួមជារៀងរាល់ឆ្នាំ' }
    },
    {
      image: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?q=80&w=1000',
      title: { en: 'Sports Day', kh: 'ទិវាកីឡា' },
      desc: { en: 'Inter-department sports competition fostering teamwork, school spirit, and healthy rivalry across all colleges.', kh: 'ការប្រកួតកីឡារវាងមហាវិទ្យាល័យ ជំរុញស្មារតីក្រុម និងការប្រកួតប្រជែងប្រកបដោយភាពរួសរាយ' },
      stats: { en: '6 teams, 20+ events', kh: '៦ ក្រុម, ២០+ ព្រឹត្តិការណ៍' }
    },
    {
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000',
      title: { en: 'Talent Show', kh: 'កម្មវិធីបង្ហាញទេពកោសល្យ' },
      desc: { en: 'Showcase your singing, dancing, or hidden talents on stage. Winners get prizes and a spot in the annual gala.', kh: 'បង្ហាញទេពកោសល្យច្រៀង រាំ និងការសម្ដែង អ្នកឈ្នះទទួលបានរង្វាន់' },
      stats: { en: '30+ performers each year', kh: '៣០+ នាក់សម្ដែងជារៀងរាល់ឆ្នាំ' }
    },
    {
      image: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=1000',
      title: { en: 'Cultural Festival', kh: 'ពិធីបុណ្យវប្បធម៌' },
      desc: { en: 'Celebrate diversity with traditional food, music, and performances from Khmer and international cultures.', kh: 'ប្រារព្ធពិធីបុណ្យវប្បធម៌ចម្រុះ ជាមួយអាហារ តន្ត្រី និងការសម្ដែងបែបប្រពៃណី' },
      stats: { en: '15+ cultural showcases', kh: '១៥+ ការបង្ហាញវប្បធម៌' }
    },
    {
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000',
      title: { en: 'Networking Night', kh: 'រាត្រីសន្ទនាបណ្តាញ' },
      desc: { en: 'Connect with alumni, industry professionals, and fellow students to build career connections.', kh: 'ជួបសំណេះសំណាលជាមួយអតីតនិស្សិត និងអ្នកជំនាញ ដើម្បីកសាងបណ្តាញអាជីព' },
      stats: { en: '50+ professionals attend', kh: '៥០+ អ្នកជំនាញចូលរួម' }
    },
    {
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=1000',
      title: { en: 'Seasonal Celebrations', kh: 'ពិធីបុណ្យតាមរដូវ' },
      desc: { en: 'Khmer New Year, Water Festival, Christmas, and other holiday events bringing the campus community together.', kh: 'បុណ្យចូលឆ្នាំថ្មី បុណ្យអុំទូក និងពិធីបុណ្យនានា ប្រមូលផ្តុំសហគមន៍ក្នុងបរិវេណសិក្សា' },
      stats: { en: '4 major celebrations/year', kh: '៤ ពិធីបុណ្យធំៗ/ឆ្នាំ' }
    },
  ];

  const studentStories = [
    {
      name: { en: 'Sreymom', kh: 'ស្រីម៉ម' },
      major: { en: 'Business Administration', kh: 'គ្រប់គ្រងពាណិជ្ជកម្ម' },
      event: { en: 'Welcome Party 2025', kh: 'ពិធីស្វាគមន៍ ២០២៥' },
      quote: {
        en: 'The Welcome Party was my first campus event. I was nervous as a freshman, but everyone was so welcoming. I made my closest friends that night!',
        kh: 'ពិធីស្វាគមន៍គឺជាព្រឹត្តិការណ៍ដំបូងរបស់ខ្ញុំនៅក្នុងបរិវេណសិក្សា។ ខ្ញុំទទួលបានមិត្តភក្តិជិតស្និទ្ធបំផុតនៅយប់នោះ!'
      },
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=400'
    },
    {
      name: { en: 'Vathana', kh: 'វឌ្ឍនា' },
      major: { en: 'Information Technology', kh: 'ព័ត៌មានវិទ្យា' },
      event: { en: 'Sports Day', kh: 'ទិវាកីឡា' },
      quote: {
        en: 'I joined the football tournament during Sports Day. Even though we didn\'t win, the team spirit and cheering from everyone was incredible!',
        kh: 'ខ្ញុំបានចូលរួមការប្រកួតបាល់ទាត់នៅទិវាកីឡា។ ទោះបីយើងមិនឈ្នះក៏ដោយ ស្មារតីក្រុមពិតជាអស្ចារ្យណាស់!'
      },
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400'
    },
    {
      name: { en: 'Dalin', kh: 'ដាលីន' },
      major: { en: 'English Literature', kh: 'អក្សរសាស្ត្រអង់គ្លេស' },
      event: { en: 'Talent Show', kh: 'កម្មវិធីបង្ហាញទេពកោសល្យ' },
      quote: {
        en: 'I performed traditional Khmer dance at the Talent Show. The applause gave me so much confidence. Now I\'m a club leader!',
        kh: 'ខ្ញុំបានសម្តែងរបាំប្រពៃណីខ្មែរនៅក្នុងកម្មវិធី។ ការអបអរសាទរបានផ្តល់ទំនុកចិត្តដល់ខ្ញុំយ៉ាងខ្លាំង។'
      },
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'
    }
  ];

  const galleryPhotos = [
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000', alt: 'Students at welcome party' },
    { src: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?q=80&w=1000', alt: 'Sports day competition' },
    { src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000', alt: 'Talent show performance' },
    { src: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=1000', alt: 'Cultural festival' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000', alt: 'Networking event' },
    { src: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=1000', alt: 'Seasonal celebration' },
  ];

  const howToJoin = [
    { icon: Users, title: { en: '1. Sign Up', kh: '១. ចុះឈ្មោះ' }, desc: { en: 'Register at the Student Affairs office or through your college representative.', kh: 'ចុះឈ្មោះនៅការិយាល័យកិច្ចការនិស្សិត' } },
    { icon: Calendar, title: { en: '2. Check Schedule', kh: '២. ពិនិត្យកាលវិភាគ' }, desc: { en: 'View the event calendar on campus notice boards or our website.', kh: 'ពិនិត្យមើលប្រតិទិនព្រឹត្តិការណ៍នៅក្នុងបរិវេណសិក្សា' } },
    { icon: Users, title: { en: '3. Bring Friends', kh: '៣. នាំមិត្តភក្តិ' }, desc: { en: 'Events are more fun together! Bring your classmates and make new connections.', kh: 'ព្រឹត្តិការណ៍កាន់តែសប្បាយពេលនៅជាមួយគ្នា!' } },
    { icon: Star, title: { en: '4. Participate & Enjoy', kh: '៤. ចូលរួម និងរីករាយ' }, desc: { en: 'Join activities, take photos, and create unforgettable campus memories.', kh: 'ចូលរួមសកម្មភាព ថតរូប និងបង្កើតការចងចាំដែលមិនអាចបំភ្លេចបាន' } },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-20">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ព្រឹត្តិការណ៍សង្គម' : 'Social Events'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ចូលរួមសកម្មភាពសង្គម កសាងមិត្តភាព និងបង្កើតការចងចាំ' : 'Join social activities, build friendships, and create lasting memories.'}
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
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h3 className={`text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ជីវិតនិស្សិត' : 'Student Life'}</h3>
                <ul className="space-y-3">
                  {[
                    { href: '/student-life/schedules', en: 'Study Schedules', kh: 'វេនសិក្សា' },
                    { href: '/student-life/facilities/self-study', en: 'Self-Study Area', kh: 'កន្លែងស្វ័យសិក្សា' },
                    { href: '/student-life/facilities/dormitory', en: 'Dormitory', kh: 'អន្តេវាសិកដ្ឋាន' },
                    { href: '/student-life/facilities/canteen', en: 'Canteen', kh: 'អាហារដ្ឋាន' },
                    { href: '/student-life/extra-curricular', en: 'Extra-Curricular', kh: 'សកម្មភាពក្រៅម៉ោង' },
                    { href: '/student-life/social-events', en: 'Social Events', kh: 'ព្រឹត្តិការណ៍សង្គម', active: true },
                    { href: '/events', en: 'Events', kh: 'ព្រឹត្តិការណ៍' },
                    { href: '/student-life/graduation', en: 'Graduation', kh: 'ការបញ្ចប់ការសិក្សា' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block pl-3 transition-colors border-l-2 ${item.active ? 'text-primary font-bold border-primary' : 'text-gray-600 hover:text-primary border-transparent'} ${kh ? 'font-khmer' : ''}`}
                      >
                        {kh ? item.kh : item.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-sm text-center">
                <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-3xl font-bold text-secondary">12+</p>
                <p className={`text-sm text-gray-600 mt-1 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ព្រឹត្តិការណ៍ក្នុងមួយឆ្នាំ' : 'Events per Year'}</p>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-14">

            {/* Events Grid */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-primary" />
                <h2 className={`text-3xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ព្រឹត្តិការណ៍សង្គម' : 'Campus Social Events'}
                </h2>
              </div>
              <div className="w-16 h-1 bg-secondary mb-8"></div>

              <p className={`text-lg text-gray-700 mb-10 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ចូលរួមព្រឹត្តិការណ៍សង្គមនានា ដើម្បីពង្រីកទំនាក់ទំនង និងបង្កើនបទពិសោធន៍ក្រៅម៉ោងសិក្សា។' : 'Participate in social events to expand your network and enrich your campus experience beyond the classroom.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socialEvents.map((event, idx) => (
                  <div key={idx} className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={kh ? event.title.kh : event.title.en}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <p className="text-xs text-white/80 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {kh ? 'បរិវេណសិក្សា AIC' : 'AIC Campus'}
                        </p>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className={`font-bold text-gray-900 text-lg mb-2 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? event.title.kh : event.title.en}
                      </h3>
                      <p className={`text-sm text-gray-600 leading-relaxed mb-3 ${kh ? 'font-khmer' : ''}`}>
                        {kh ? event.desc.kh : event.desc.en}
                      </p>
                      <span className="inline-block text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                        {kh ? event.stats.kh : event.stats.en}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Stories */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h2 className={`text-2xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'បទពិសោធន៍និស្សិត' : 'Student Experiences'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {studentStories.map((story, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md transition-shadow">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mb-4 mx-auto">
                      <Image
                        src={story.image}
                        alt={kh ? story.name.kh : story.name.en}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <p className={`text-xs text-primary font-semibold text-center mb-1 ${kh ? 'font-khmer' : ''}`}>
                      {kh ? story.event.kh : story.event.en}
                    </p>
                    <p className={`text-sm text-gray-600 italic leading-relaxed text-center mb-3 ${kh ? 'font-khmer' : ''}`}>
                      &ldquo;{kh ? story.quote.kh : story.quote.en}&rdquo;
                    </p>
                    <p className={`text-xs font-bold text-gray-800 text-center ${kh ? 'font-khmer' : ''}`}>
                      — {kh ? story.name.kh : story.name.en}
                    </p>
                    <p className={`text-xs text-gray-400 text-center ${kh ? 'font-khmer' : ''}`}>
                      {kh ? story.major.kh : story.major.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Join */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6 text-primary" />
                <h2 className={`text-3xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'របៀបចូលរួម' : 'How to Join'}
                </h2>
              </div>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {howToJoin.map((step, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-sm p-6 text-center hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className={`font-bold text-gray-900 mb-2 ${kh ? 'font-khmer' : ''}`}>
                      {kh ? step.title.kh : step.title.en}
                    </h3>
                    <p className={`text-sm text-gray-500 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                      {kh ? step.desc.kh : step.desc.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-primary" />
                <h2 className={`text-3xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'រូបភាពព្រឹត្តិការណ៍' : 'Event Gallery'}
                </h2>
              </div>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <PhotoGallery photos={galleryPhotos} />
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className={`text-xl font-bold mb-2 ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ចង់រៀបចំព្រឹត្តិការណ៍? ចូលរួមជាមួយពួកយើង!' : 'Want to organize an event? Join us!'}
                </h3>
                <p className={`text-white/75 text-sm ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ទំនាក់ទំនងការិយាល័យកិច្ចការនិស្សិត ដើម្បីស្នើសុំរៀបចំព្រឹត្តិការណ៍។' : 'Contact the Student Affairs office to propose your event idea.'}
                </p>
              </div>
              <Link href="/about/contact" className={`flex items-center gap-2 bg-secondary text-primary-dark font-bold px-6 py-3 rounded-sm whitespace-nowrap hover:bg-secondary/90 transition-colors ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'ទំនាក់ទំនង' : 'Contact Us'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
