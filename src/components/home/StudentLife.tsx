"use client";
import { useLanguage } from "@/context/LanguageContext";
import info from "../../../information.json";

export default function StudentLife() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold text-primary ${lang === 'kh' ? 'font-khmer' : ''}`}>
              {lang === 'kh' ? 'ជីវិតនិស្សិតដ៏រស់រវើក' : 'Vibrant Campus Life'}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className={`text-gray-600 text-lg leading-relaxed ${lang === 'kh' ? 'font-khmer' : ''}`}>
              {lang === 'kh' 
                ? 'នៅ វិទ្យាស្ថានអាស៊ី កម្ពុជា ការរៀនសូត្រមិនមែនមានតែក្នុងថ្នាក់រៀននោះទេ។ យើងផ្តល់ឱកាសពិសេសដើម្បីកសាងបណ្តាញ ទទួលបានបទពិសោធន៍សកល និងត្រៀមខ្លួនសម្រាប់អាជីពជោគជ័យ។' 
                : 'At AIC, learning extends far beyond the classroom. We provide exceptional opportunities to build your network, gain global perspective, and prepare for a successful career.'}
            </p>
            <ul className="space-y-4">
              {info.opportunities.study_tours_abroad.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-secondary mt-2 mr-3 rounded-full flex-shrink-0"></div>
                  <span className={`text-gray-700 ${lang === 'kh' ? 'font-khmer' : ''}`}>{t(detail)}</span>
                </li>
              ))}
            </ul>

          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Students collaborating"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-40 bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Graduation day"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-40 bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Campus library"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-64 bg-gray-200 rounded-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Student activity"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
