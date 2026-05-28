'use client'
import React from "react";
import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-[60vh] bg-gray-50 flex items-center justify-center p-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-sm shadow-xl p-8 text-center border-t-4 border-secondary">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 font-khmer">
          {lang === 'kh' ? 'រកមិនឃើញទំព័រទេ' : 'Page Not Found'}
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 font-khmer">
          {lang === 'kh' 
            ? 'សូមអភ័យទោស ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមាន ឬត្រូវបានផ្លាស់ប្តូរទីតាំង។' 
            : 'Sorry, the page you are looking for does not exist or has been moved.'}
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-sm hover:bg-primary-dark transition-colors shadow-md w-full sm:w-auto"
        >
          <Home className="w-5 h-5 mr-3" />
          {lang === 'kh' ? 'ត្រឡប់ទៅទំព័រដើម' : 'Back to Home'}
        </Link>
      </div>
    </main>
  );
}
