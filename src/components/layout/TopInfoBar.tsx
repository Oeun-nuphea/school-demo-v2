'use client'
import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TopInfoBar() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="bg-primary-dark text-white text-xs py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer">
            <Phone className="w-3.5 h-3.5 mr-2 text-secondary" />
            <span>071 21 000 06 / 098 322 872</span>
          </div>
          <div className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-3.5 h-3.5 mr-2 text-secondary" />
            <span>sopheap4anka@gmail.com</span>
          </div>
          <a href="https://t.me/aicofficialchannel" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer">
            <Send className="w-3.5 h-3.5 mr-2 text-secondary" />
            <span>Telegram</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer">
            <MapPin className="w-3.5 h-3.5 mr-2 text-secondary" />
            <span>{lang === 'kh' ? 'រាជធានីភ្នំពេញ អាគារលេខ១២ ផ្លូវ២៧១' : 'Phnom Penh, Building 12, St. 271'}</span>
          </div>
          <div className="flex items-center space-x-3 bg-primary-light/20 px-3 py-1 rounded-sm border border-primary-light/30">
            <button 
              onClick={() => setLang('kh')} 
              className={`text-xs transition-colors ${lang === 'kh' ? 'text-secondary font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              KH
            </button>
            <span className="text-gray-500 opacity-50">|</span>
            <button 
              onClick={() => setLang('en')} 
              className={`text-xs transition-colors ${lang === 'en' ? 'text-secondary font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
