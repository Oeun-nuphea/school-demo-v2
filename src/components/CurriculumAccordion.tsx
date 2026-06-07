import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type Module = {
  english: string;
  khmer: string;
};

type Semester = {
  semester: { english: string; khmer: string };
  modules: Module[];
};

type CurriculumAccordionProps = {
  year: { english: string; khmer: string };
  semesters: Semester[];
};

export default function CurriculumAccordion({ year, semesters }: CurriculumAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <div className="border border-gray-200 rounded-sm mb-4 overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors ${
          isOpen ? 'border-b border-gray-200' : ''
        }`}
      >
        <span className={`text-lg font-bold text-gray-900 ${lang === 'kh' ? 'font-khmer' : ''}`}>
          {t(year)}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? '-rotate-180 text-primary' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {semesters.map((semester, idx) => (
              <div key={idx}>
                <h4 className={`text-md font-bold text-primary mb-4 pb-2 border-b border-gray-100 ${lang === 'kh' ? 'font-khmer' : ''}`}>
                  {t(semester.semester)}
                </h4>
                <ul className="space-y-3">
                  {semester.modules.map((mod, mIdx) => (
                    <li key={mIdx} className="flex items-start text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 mt-1.5 flex-shrink-0"></span>
                      <span className={lang === 'kh' ? 'font-khmer' : ''}>{t(mod)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
