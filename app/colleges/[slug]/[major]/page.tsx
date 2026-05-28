'use client';
import { use } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, BookOpen, Clock, GraduationCap } from 'lucide-react';
import info from '../../../../information.json';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

type CurriculumData = typeof info.curricula[keyof typeof info.curricula];

export default function CurriculumPage({
  params,
}: {
  params: Promise<{ slug: string; major: string }>;
}) {
  const { slug, major } = use(params);
  const { t, lang } = useLanguage();

  const curriculum = (info.curricula as Record<string, CurriculumData>)[major];
  if (!curriculum) notFound();

  // Split semesters into pairs for the 2-column layout
  const semesterPairs: [CurriculumData['semesters'][number], CurriculumData['semesters'][number] | null][] = [];
  for (let i = 0; i < curriculum.semesters.length; i += 2) {
    semesterPairs.push([curriculum.semesters[i], curriculum.semesters[i + 1] ?? null]);
  }

  const majorTitle = lang === 'kh' ? curriculum.major.khmer : curriculum.major.english;
  const collegeTitle = lang === 'kh' ? curriculum.college.khmer : curriculum.college.english;
  const degreeTitle = lang === 'kh' ? curriculum.degree.khmer : curriculum.degree.english;
  const durationTitle = lang === 'kh' ? curriculum.duration.khmer : curriculum.duration.english;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />
        <div className="relative z-20 text-center px-4 py-16">
          <p className={`text-secondary/80 text-sm font-semibold uppercase tracking-widest mb-3 ${lang === 'kh' ? 'font-khmer' : ''}`}>
            {collegeTitle}
          </p>
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-md ${lang === 'kh' ? 'font-khmer' : ''}`}>
            {majorTitle}
          </h1>
          <div className="flex items-center justify-center gap-6 mt-4 flex-wrap">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <GraduationCap className="w-4 h-4" />
              <span className={lang === 'kh' ? 'font-khmer' : ''}>{degreeTitle}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Clock className="w-4 h-4" />
              <span className={lang === 'kh' ? 'font-khmer' : ''}>{durationTitle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap gap-0">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
          <Link href={`/colleges/${slug}`} className="hover:text-primary transition-colors">{collegeTitle}</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
          <span className={`text-gray-900 font-medium ${lang === 'kh' ? 'font-khmer' : ''}`}>
            {lang === 'kh' ? 'កម្មវិធីសិក្សា' : 'Sample Curriculum'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section header */}
        <div className="flex items-center mb-3">
          <BookOpen className="w-7 h-7 text-secondary mr-3" />
          <h2 className={`text-3xl font-serif font-bold text-gray-900 ${lang === 'kh' ? 'font-khmer' : ''}`}>
            {lang === 'kh' ? 'គំរូកម្មវិធីសិក្សា' : 'Sample Curriculum'}
          </h2>
        </div>
        <div className="w-16 h-1 bg-secondary mb-10" />

        {/* Semester pairs */}
        <div className="space-y-14">
          {semesterPairs.map(([left, right], pairIdx) => (
            <div key={pairIdx} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Left semester */}
              <SemesterBlock semester={left} lang={lang} />
              {/* Right semester (may be null for last odd one) */}
              {right ? (
                <SemesterBlock semester={right} lang={lang} />
              ) : (
                <div className="hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link
            href={`/colleges/${slug}`}
            className={`inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors ${lang === 'kh' ? 'font-khmer' : ''}`}
          >
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
            {lang === 'kh' ? 'ត្រឡប់ទៅកាន់មហាវិទ្យាល័យ' : 'Back to College'}
          </Link>
        </div>
      </div>
    </main>
  );
}

function SemesterBlock({
  semester,
  lang,
}: {
  semester: CurriculumData['semesters'][number];
  lang: string;
}) {
  const label = lang === 'kh' ? semester.label.khmer : semester.label.english;
  return (
    <div>
      <h3 className={`text-xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-100 ${lang === 'kh' ? 'font-khmer' : ''}`}>
        {label}
      </h3>
      <div className="space-y-0">
        {semester.courses.map((course, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-3 border-b border-gray-100 group hover:bg-gray-50 -mx-2 px-2 rounded-sm transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-secondary font-bold text-sm font-mono w-20 flex-shrink-0">
                {course.code}
              </span>
              <span className={`text-gray-700 text-sm group-hover:text-gray-900 transition-colors ${lang === 'kh' ? 'font-khmer' : ''}`}>
                {lang === 'kh' ? course.name.khmer : course.name.english}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}
