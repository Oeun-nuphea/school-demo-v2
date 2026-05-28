'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'kh';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (obj: { khmer?: string, english?: string } | string | undefined | null) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: () => ''
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('site_lang') as Language;
    if (saved === 'kh' || saved === 'en') {
      setLang(saved);
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('site_lang', newLang);
  };

  // Helper function to extract correct string based on current language
  const t = (obj: any) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    if (lang === 'kh' && obj.khmer) return obj.khmer;
    if (lang === 'en' && obj.english) return obj.english;
    // Fallback to whichever exists
    return obj.english || obj.khmer || '';
  };

  // Prevent hydration mismatch by returning null until mounted, or just return children
  // (We'll return children directly to keep SEO, but note that the default 'en' will render on server)
  
  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
