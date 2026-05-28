"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            {lang === 'kh' ? (
              <>រៀបចំអនាគតរបស់អ្នកនៅ <span className="text-secondary font-khmer block mt-2">វិទ្យាស្ថានអាស៊ី កម្ពុជា</span></>
            ) : (
              <>Shape Your Future at <span className="text-secondary">Asian Institute of Cambodia</span></>
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-sans leading-relaxed">
            {lang === 'kh' ? 'ស្ថាប័នស្តង់ដារអន្តរជាតិដែលផ្តោតលើភាពល្អឯកក្នុងការអប់រំ ការស្រាវជ្រាវ និងការអភិវឌ្ឍអ្នកដឹកនាំជំនាន់ក្រោយ។' : 'A world-class institution dedicated to academic excellence, groundbreaking research, and the development of future leaders.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/apply" 
              className={`bg-secondary text-primary-dark font-bold px-8 py-3 rounded-sm hover:bg-secondary-dark transition-colors flex items-center justify-center ${lang === 'kh' ? 'font-khmer' : ''}`}
            >
              {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'Apply for Fall 2026'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/programs" 
              className={`bg-transparent border border-white text-white font-medium px-8 py-3 rounded-sm hover:bg-white/10 transition-colors text-center ${lang === 'kh' ? 'font-khmer' : ''}`}
            >
              {lang === 'kh' ? 'ស្វែងរកមុខជំនាញ' : 'Explore Programs'}
            </Link>
          </div>

          {/* Quick links under hero */}
          <div className="mt-12 pt-6 border-t border-white/20 flex flex-wrap gap-6 text-sm text-white font-medium">
            <Link href="/students" className={`hover:text-secondary flex items-center ${lang === 'kh' ? 'font-khmer' : ''}`}>
              {lang === 'kh' ? 'និស្សិតបច្ចុប្បន្ន' : 'Current Students'} <ChevronRight className="w-4 h-4 ml-1 opacity-70"/>
            </Link>
            <Link href="/faculty" className={`hover:text-secondary flex items-center ${lang === 'kh' ? 'font-khmer' : ''}`}>
              {lang === 'kh' ? 'បុគ្គលិក និងសាស្រ្តាចារ្យ' : 'Faculty & Staff'} <ChevronRight className="w-4 h-4 ml-1 opacity-70"/>
            </Link>
            <Link href="/alumni" className={`hover:text-secondary flex items-center ${lang === 'kh' ? 'font-khmer' : ''}`}>
              {lang === 'kh' ? 'សមាគមអតីតនិស្សិត' : 'Alumni Portal'} <ChevronRight className="w-4 h-4 ml-1 opacity-70"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
