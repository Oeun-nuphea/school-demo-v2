'use client'
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Send, Globe, CheckCircle } from "lucide-react";
import info from "../../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactAndBranchesPage() {
  const { t, lang } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real application, handle form submission to backend here
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary opacity-10 blur-3xl" />

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'ទំនាក់ទំនង' : 'Contact'}
          </h1>
          <p className="text-lg text-white/75 font-sans max-w-2xl mx-auto">
            {lang === 'kh' ? `ទំនាក់ទំនងមកកាន់ ${t(info.institution_info.name)} តាមរយៈសាខាណាមួយរបស់យើង` : `Get in touch with ${t(info.institution_info.name)} at any of our national branches.`}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">About Us</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ទំនាក់ទំនង' : 'Contact'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about/vision-and-missions" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ទស្សនវិស័យ បេសកកម្ម និងគោលដៅ' : 'Vision, Mission & Goals'}</Link>
                </li>
                <li>
                  <Link href="/about/structure" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'រចនាសម្ព័ន្ធស្ថាប័ន' : 'Organization Structure'}</Link>
                </li>
                <li>
                  <Link href="/about/founder-and-principal" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ស្ថាបនិក និងនាយកវិទ្យាស្ថាន' : 'Founder & Principal'}</Link>
                </li>
                <li>
                  <Link href="/about/campuses" className="block text-gray-600 hover:text-primary transition-colors">{lang === 'kh' ? 'ទីតាំងសាខា' : 'Campus Locations'}</Link>
                </li>
                <li>
                  <Link href="/about/contact" className="block text-primary font-bold border-l-2 border-primary pl-3 transition-colors">{lang === 'kh' ? 'ទំនាក់ទំនង' : 'Contact Us'}</Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">

            {/* Contact Form Section */}
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{lang === 'kh' ? 'ផ្ញើសារមកកាន់យើង' : 'Send Us a Message'}</h2>
            <div className="w-16 h-1 bg-secondary mb-10"></div>

            <div className="bg-white border border-gray-200 shadow-lg rounded-sm overflow-hidden mb-16">
              <div className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'kh' ? 'សារត្រូវបានបញ្ជូនជោគជ័យ!' : 'Message Sent Successfully!'}</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      {lang === 'kh' ? 'សូមអរគុណចំពោះការទាក់ទងមកយើង។ ក្រុមការងាររបស់យើងនឹងឆ្លើយតបទៅអ្នកវិញក្នុងពេលឆាប់ៗនេះ។' : 'Thank you for reaching out. Our team will get back to you as soon as possible.'}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-primary text-white px-8 py-3 rounded-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                      {lang === 'kh' ? 'ផ្ញើសារថ្មី' : 'Send Another Message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'ជ្រើសរើសសាខា *' : 'Select Branch *'}</label>
                        <select required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary bg-white">
                          <option value="">{lang === 'kh' ? '-- សូមជ្រើសរើសសាខា --' : '-- Please select a branch --'}</option>
                          {info.contact_and_branches.map((campus, idx) => (
                            <option key={idx} value={campus.branch_name.english}>{t(campus.branch_name)}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'ឈ្មោះរបស់អ្នក *' : 'Your Name *'}</label>
                        <input required type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" placeholder={lang === 'kh' ? 'ឧទាហរណ៍៖ សុខ សាន្ត' : 'Sok San'} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'លេខទូរស័ព្ទ *' : 'Phone Number *'}</label>
                        <input required type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" placeholder={lang === 'kh' ? 'ឧទាហរណ៍៖ 012 345 678' : '+855 12 345 678'} />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'អ៊ីមែល' : 'Email Address'}</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" placeholder="example@email.com" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'សាររបស់អ្នក *' : 'Your Message *'}</label>
                        <textarea required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" placeholder={lang === 'kh' ? 'សូមសរសេរសាររបស់អ្នកនៅទីនេះ...' : 'How can we help you?'}></textarea>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button type="submit" className="bg-secondary text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-secondary-dark transition-colors flex items-center shadow-md">
                        <Send className="w-5 h-5 mr-2" />
                        {lang === 'kh' ? 'បញ្ជូនសារ' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>



          </div>
        </div>
      </div>
    </main>
  );
}
