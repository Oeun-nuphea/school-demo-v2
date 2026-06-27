"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const kh = lang === 'kh';

  return (
    <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-[650px] lg:min-h-[720px] flex items-center overflow-hidden py-12 lg:py-0">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,151,0,0.1),transparent_50%)] z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl z-0"></div>
      
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in-up">
            
            {/* Tagline / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <Award className="w-4 h-4 text-secondary animate-pulse" />
              <span className={`text-xs font-semibold tracking-wider text-secondary uppercase ${kh ? 'font-khmer' : ''}`}>
                {kh ? 'គ្រឹះស្ថានឧត្តមសិក្សាឈានមុខគេ' : 'Accredited Higher Education'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              {kh ? (
                <>
                  រៀបចំអនាគតរបស់អ្នកនៅ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-300 font-khmer mt-2 inline-block">
                    វិទ្យាស្ថានអាស៊ី កម្ពុជា
                  </span>
                </>
              ) : (
                <>
                  Shape Your Future at <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-300">
                    Asian Institute of Cambodia
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed ${kh ? 'font-khmer font-light text-[15px]' : ''}`}>
              {kh 
                ? 'វិទ្យាស្ថានឈានមុខគេក្នុងការបណ្តុះបណ្តាលធនធានមនុស្សប្រកបដោយ គុណភាព សមត្ថភាព វិជ្ជាជីវៈ និងសីលធម៌ ដើម្បីឆ្លើយតបទៅនឹងតម្រូវការទីផ្សារការងារជាតិ និងអន្តរជាតិ។' 
                : 'A premium higher education institution dedicated to academic excellence, innovative research, and nurturing the next generation of global leaders.'}
            </p>

            {/* Motto badges */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-white/10 max-w-xl">
              {(kh 
                ? ['សីលធម៌', 'បញ្ញា', 'នវានុវត្តន៍', 'សហគ្រិនភាព'] 
                : ['Morality', 'Intelligence', 'Innovation', 'Entrepreneurship']
              ).map((motto, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-white/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span className={kh ? 'font-khmer' : ''}>{motto}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/colleges"
                className={`flex items-center justify-center border border-white/30 hover:border-white text-white bg-white/5 hover:bg-white/10 font-medium px-8 py-3.5 rounded-sm transition-colors text-center ${kh ? 'font-khmer' : ''}`}
              >
                {kh ? 'ស្វែងរកមុខជំនាញ' : 'Explore Programs'}
              </Link>
            </div>
          </div>

          {/* Right Visual Column (Overlap Image Collage) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] lg:h-[550px] w-full flex items-center justify-center mt-8 lg:mt-0">
            {/* Main Image Card */}
            <div className="absolute w-[70%] h-[75%] top-[10%] left-[5%] rounded-sm overflow-hidden border border-white/10 shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="AIC Main Campus Student Life"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent"></div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute w-[60%] h-[55%] bottom-[8%] right-[5%] rounded-sm overflow-hidden border-2 border-secondary shadow-2xl z-20 transition-transform duration-500 hover:scale-[1.03] rotate-[3deg] hover:rotate-0">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AIC Classrooms"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent"></div>
            </div>

            {/* Floating Glassmorphic Stat Badge 1 */}
            <div className="absolute bottom-[25%] left-[-2%] z-30 glass-card p-4 rounded-sm shadow-xl flex items-center gap-3 animate-float max-w-[220px]">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{kh ? 'អាហារូបករណ៍' : 'Scholarships'}</div>
                <div className={`text-sm font-serif font-bold text-primary ${kh ? 'font-khmer' : ''}`}>{kh ? 'រហូតដល់ ១០០%' : 'Up to 100% Granted'}</div>
              </div>
            </div>

            {/* Floating Glassmorphic Stat Badge 2 */}
            <div className="absolute top-[18%] right-[-2%] z-30 glass-card p-4 rounded-sm shadow-xl flex items-center gap-3 animate-float-delayed max-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{kh ? 'ការទទួលស្គាល់' : 'Recognition'}</div>
                <div className={`text-sm font-serif font-bold text-primary ${kh ? 'font-khmer' : ''}`}>{kh ? 'រដ្ឋាភិបាលកម្ពុជា' : 'Royal Govt Approved'}</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

