'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PhotoGallery from '@/components/PhotoGallery';

export default function GraduationPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  // Placeholder historical photos for graduation
  const graduationPhotos = [
    { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000', alt: 'Graduation Ceremony Group' },
    { src: 'https://images.unsplash.com/photo-1562222087-83673cce09c3?q=80&w=1000', alt: 'Students throwing caps' },
    { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000', alt: 'Receiving diploma' },
    { src: 'https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=1000', alt: 'Graduation gowns and caps' },
    { src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1000', alt: 'Happy graduate' },
    { src: 'https://images.unsplash.com/photo-1525926477800-7a0e104f4699?q=80&w=1000', alt: 'Audience at graduation' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <GraduationCap className="w-16 h-16 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការបញ្ចប់ការសិក្សា' : 'Graduation Ceremonies'}
          </h1>
          <p className={`text-lg text-white/75 font-sans max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh 
              ? 'អបអរសាទរជោគជ័យ និងការខិតខំប្រឹងប្រែងរបស់និស្សិតយើង។' 
              : 'Celebrating the hard work, dedication, and success of our students.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Student Life</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className={`text-gray-900 font-medium ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ការបញ្ចប់ការសិក្សា' : 'Graduation'}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'អនុស្សាវរីយ៍នៃភាពជោគជ័យ' : 'Memories of Success'}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className={`text-lg text-gray-700 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
            {kh 
              ? 'ពិធីប្រគល់សញ្ញាបត្រ គឺជាព្រឹត្តិការណ៍ដ៏សំខាន់បំផុតមួយក្នុងជីវិតនិស្សិត។ ខាងក្រោមនេះគឺជារូបភាពអនុស្សាវរីយ៍មួយចំនួនពីកម្មវិធីបញ្ចប់ការសិក្សារបស់វិទ្យាស្ថានយើង។' 
              : 'The graduation ceremony is a major milestone in every student\'s life. Here are some beautiful memories from our previous graduation events capturing the joy of our alumni and their families.'}
          </p>
        </div>

        {/* Requirements Banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-primary" />
              <h3 className={`text-xl font-serif font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'លក្ខខណ្ឌបញ្ចប់ការសិក្សា' : 'Graduation Requirements'}
              </h3>
            </div>
            <p className={`text-gray-600 ${kh ? 'font-khmer' : ''}`}>
              {kh 
                ? 'និស្សិតត្រូវបញ្ចប់ក្រេឌីតទាំងអស់ដោយជោគជ័យ និងការពារសារណាបញ្ចប់ការសិក្សា។' 
                : 'Students must successfully complete all required course credits, internships, and their final thesis defense to be eligible for graduation.'}
            </p>
          </div>
          <Link
            href="/admissions"
            className={`inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-sm whitespace-nowrap transition-colors ${kh ? 'font-khmer' : ''}`}
          >
            {kh ? 'ព័ត៌មានបន្ថែម' : 'Learn More'}
          </Link>
        </div>

        {/* Photo Gallery Component */}
        <h3 className={`text-2xl font-serif font-bold text-gray-900 mb-6 ${kh ? 'font-khmer' : ''}`}>
          {kh ? 'កម្រងរូបភាព' : 'Photo Gallery'}
        </h3>
        <PhotoGallery photos={graduationPhotos} />

      </div>
    </main>
  );
}
