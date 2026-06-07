'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, BookText, PenTool, Search, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function JournalPage() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const recentArticles = [
    {
      title: { en: 'Microfinance and Women Empowerment in Rural Cambodia', kh: 'មីក្រូហិរញ្ញវត្ថុ និងការផ្ដល់សិទ្ធិស្ត្រីនៅជនបទកម្ពុជា' },
      author: { en: 'Dr. Chea Sophea', kh: 'បណ្ឌិត ជា សុភា' },
      volume: 'Vol. 4, No. 2 · 2024',
      tags: [{ en: 'Economics', kh: 'សេដ្ឋកិច្ច' }, { en: 'Gender Studies', kh: 'ការសិក្សាយេនឌ័រ' }],
    },
    {
      title: { en: 'Digital Literacy Among University Students Post-COVID', kh: 'ចំណេះដឹងឌីជីថលក្នុងចំណោមនិស្សិតក្រោយ COVID' },
      author: { en: 'Prof. Heng Sokha', kh: 'សាស្ត្រាចារ្យ ហេង សុខា' },
      volume: 'Vol. 4, No. 1 · 2024',
      tags: [{ en: 'Education', kh: 'ការអប់រំ' }, { en: 'Technology', kh: 'បច្ចេកវិទ្យា' }],
    },
    {
      title: { en: 'Tourism Recovery Strategies in Siem Reap Post-Pandemic', kh: 'យុទ្ធសាស្ត្រស្ដារ​ទេសចរណ៍សៀមរាបក្រោយជំងឺ' },
      author: { en: 'Dr. Ly Dara', kh: 'បណ្ឌិត លី ដារ៉ា' },
      volume: 'Vol. 3, No. 2 · 2023',
      tags: [{ en: 'Tourism', kh: 'ទេសចរណ៍' }, { en: 'Management', kh: 'គ្រប់គ្រង' }],
    },
    {
      title: { en: 'Corporate Governance Practices in Cambodian SMEs', kh: 'ការអភិបាលនៅក្នុងក្រុមហ៊ុនខ្នាតតូច និងមធ្យម' },
      author: { en: 'Prof. Vong Ratha', kh: 'សាស្ត្រាចារ្យ វ៉ុង រ៉ាថា' },
      volume: 'Vol. 3, No. 1 · 2023',
      tags: [{ en: 'Business Law', kh: 'ច្បាប់ពាណិជ្ជកម្ម' }, { en: 'Governance', kh: 'អភិបាលកិច្ច' }],
    },
  ];

  const faqs = [
    {
      q: { en: 'Who can submit an article?', kh: 'តើអ្នកណាអាចដាក់ស្នើអត្ថបទបាន?' },
      a: { en: 'Faculty members, researchers, postgraduate students, and affiliated professionals are eligible to submit.', kh: 'សាស្ត្រាចារ្យ អ្នកស្រាវជ្រាវ និស្សិតថ្នាក់ក្រោយ និងអ្នកជំនាញទាំងអស់អាចដាក់ស្នើ។' }
    },
    {
      q: { en: 'What is the review process?', kh: 'តើដំណើរការត្រួតពិនិត្យជាដូចម្ដេច?' },
      a: { en: 'All submissions undergo a double-blind peer review by at least two expert reviewers before acceptance.', kh: 'អត្ថបទទាំងអស់ ត្រូវបានត្រួតពិនិត្យដោយអ្នកជំនាញ ២ នាក់ (Double-blind)។' }
    },
    {
      q: { en: 'How often is the journal published?', kh: 'ទស្សនាវដ្ដីចេញផ្សាយប៉ុន្មានដង?' },
      a: { en: 'The journal is published twice a year (bi-annually) — typically in January and July.', kh: 'ទស្សនាវដ្ដីចេញ ២ ដងក្នុងមួយឆ្នាំ — ជាធម្មតានៅខែមករា និងខែកក្កដា។' }
    },
    {
      q: { en: 'Is the journal open access?', kh: 'តើទស្សនាវដ្ដីជា Open Access ដែរទេ?' },
      a: { en: 'Yes, all published articles are available freely online to promote knowledge sharing in Cambodia.', kh: 'បាទ/ចាស អត្ថបទទាំងអស់ដែលបានផ្សាយ អាចចូលអានបានដោយឥតគិតថ្លៃ ។' }
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[280px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-16">
          <BookText className="w-14 h-14 text-secondary mx-auto mb-4" />
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-white mb-4 ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'ទស្សនាវដ្ដីវិទ្យាសាស្ត្រ AIC' : 'AIC Academic Journal'}
          </h1>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto ${kh ? 'font-khmer' : ''}`}>
            {kh ? 'វេទិកាបោះពុម្ពផ្សាយស្នាដៃស្រាវជ្រាវ ស្ដីអំពីការអភិវឌ្ឍកម្ពុជា' : 'A peer-reviewed platform publishing original research on Cambodian development and global knowledge.'}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">Research</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{kh ? 'ទស្សនាវដ្ដីវិទ្យាសាស្ត្រ' : 'Academic Journal'}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Research</h3>
                <ul className="space-y-3">
                  <li><Link href="/research/journal" className="block text-primary font-bold border-l-2 border-primary pl-3">{kh ? 'ទស្សនាវដ្ដី' : 'Academic Journal'}</Link></li>
                  <li><Link href="/research/publications" className="block text-gray-600 hover:text-primary transition-colors">{kh ? 'ការបោះពុម្ពផ្សាយ' : 'Publications'}</Link></li>
                </ul>
              </div>
              <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-sm">
                <PenTool className="w-8 h-8 text-primary mb-3" />
                <p className={`font-bold text-gray-900 mb-1 text-sm ${kh ? 'font-khmer' : ''}`}>{kh ? 'ដាក់ស្នើអត្ថបទ' : 'Submit Your Paper'}</p>
                <p className={`text-xs text-gray-600 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ផ្ញើទៅ: journal@aic.edu.kh' : 'Send to: journal@aic.edu.kh'}</p>
                <a href="mailto:journal@aic.edu.kh" className={`block text-center bg-primary text-white py-2 rounded-sm text-sm font-bold hover:bg-primary-dark transition-colors ${kh ? 'font-khmer' : ''}`}>
                  {kh ? 'ទំនាក់ទំនង' : 'Submit Now'}
                </a>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4 space-y-14">

            {/* Recent Articles */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'អត្ថបទថ្មីៗ' : 'Recent Articles'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="space-y-5">
                {recentArticles.map((article, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-6 rounded-sm hover:border-primary/40 hover:shadow-md transition-all group">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{kh ? tag.kh : tag.en}</span>
                      ))}
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{article.volume}</span>
                    </div>
                    <h3 className={`text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors ${kh ? 'font-khmer' : ''}`}>
                      {kh ? article.title.kh : article.title.en}
                    </h3>
                    <p className={`text-sm text-gray-500 ${kh ? 'font-khmer' : ''}`}>{kh ? article.author.kh : article.author.en}</p>
                    <button className={`mt-3 text-primary font-bold text-sm hover:underline ${kh ? 'font-khmer' : ''}`}>
                      {kh ? 'អានបន្ថែម →' : 'Read Abstract →'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Call for Papers */}
            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-sm p-8">
              <div className="flex items-start gap-4">
                <PenTool className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'ការអញ្ជើញដាក់ស្នើអត្ថបទ (Vol. 5)' : 'Call for Papers — Volume 5 (2025)'}</h3>
                  <p className={`text-gray-700 mb-4 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                    {kh ? 'យើងកំពុងទទួលអត្ថបទស្រាវជ្រាវ ដែលគ្របដណ្ដប់លើគ្រប់ជំនាញ រួមមាន ពាណិជ្ជកម្ម ទេសចរណ៍ ព័ត៌មានវិទ្យា ភាសា អប់រំ និងសង្គម ។ ថ្ងៃផ្ដាច់ញ្ញត្តិ: ០១ ធ្នូ ២០២៤ ។' : 'We are currently accepting manuscripts across all disciplines including Business, Tourism, IT, Language, Education, and Social Sciences. Submission Deadline: 01 December 2024.'}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span><strong>{kh ? 'ព្រំដៃ:' : 'Word Limit:'}</strong> 4,000–8,000 words</span>
                    <span><strong>{kh ? 'ភាសា:' : 'Language:'}</strong> English / Khmer</span>
                    <span><strong>{kh ? 'ទ្រង់ទ្រាយ:' : 'Format:'}</strong> APA 7th Edition</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className={`text-3xl font-serif font-bold text-gray-900 mb-3 ${kh ? 'font-khmer' : ''}`}>{kh ? 'សំណួរសំខាន់ (FAQ)' : 'Frequently Asked Questions'}</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-sm overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                      <span className={`font-bold text-gray-900 ${kh ? 'font-khmer' : ''}`}>{kh ? faq.q.kh : faq.q.en}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? '-rotate-180 text-primary' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className={`px-6 py-4 bg-white text-gray-700 leading-relaxed ${kh ? 'font-khmer' : ''}`}>
                        {kh ? faq.a.kh : faq.a.en}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
