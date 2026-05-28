'use client'
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, FileText, Send, CheckCircle } from "lucide-react";
import info from "../../information.json";
import { useLanguage } from "@/context/LanguageContext";

export default function ApplyPage() {
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
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Apply Now"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {lang === 'kh' ? 'ដាក់ពាក្យចូលរៀន' : 'Apply Now'}
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto font-khmer">
            {lang === 'kh' ? 'ចាប់ផ្តើមដំណើរការសិក្សារបស់អ្នកជាមួយយើង' : 'Start your academic journey with us today.'}
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-gray-900 font-medium">{lang === 'kh' ? 'ដាក់ពាក្យ' : 'Apply Now'}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-gray-200 shadow-xl rounded-sm overflow-hidden">
          <div className="bg-primary px-8 py-6 text-white flex items-center">
            <FileText className="w-8 h-8 mr-4" />
            <div>
              <h2 className="text-2xl font-serif font-bold">{lang === 'kh' ? 'ទម្រង់ចុះឈ្មោះចូលរៀន' : 'Admission Application Form'}</h2>
              <p className="text-primary-light text-sm mt-1">{lang === 'kh' ? 'សូមបំពេញព័ត៌មានខាងក្រោមឱ្យបានត្រឹមត្រូវ' : 'Please fill out the information below accurately.'}</p>
            </div>
          </div>
          
          <div className="p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'kh' ? 'ការដាក់ពាក្យទទួលបានជោគជ័យ!' : 'Application Submitted Successfully!'}</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  {lang === 'kh' ? 'សូមអរគុណចំពោះការចាប់អារម្មណ៍របស់អ្នក។ ក្រុមការងាររបស់យើងនឹងទាក់ទងទៅអ្នកវិញក្នុងពេលឆាប់ៗនេះ។' : 'Thank you for your interest. Our admissions team will contact you shortly regarding the next steps.'}
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary text-white px-8 py-3 rounded-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  {lang === 'kh' ? 'ដាក់ពាក្យម្តងទៀត' : 'Submit Another Application'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'នាមត្រកូល និងនាមខ្លួន *' : 'Full Name *'}</label>
                    <input required type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" placeholder={lang === 'kh' ? 'ឧទាហរណ៍៖ សុខ សាន្ត' : 'John Doe'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'លេខទូរស័ព្ទ *' : 'Phone Number *'}</label>
                    <input required type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" placeholder={lang === 'kh' ? 'ឧទាហរណ៍៖ 012 345 678' : '+855 12 345 678'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'អ៊ីមែល' : 'Email Address'}</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'កម្រិតសិក្សាដែលចង់រៀន *' : 'Desired Program Level *'}</label>
                    <select required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary bg-white">
                      <option value="">{lang === 'kh' ? 'ជ្រើសរើសកម្រិតសិក្សា' : 'Select Program Level'}</option>
                      <option value="bachelor">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រ' : 'Bachelor Degree'}</option>
                      <option value="master">{lang === 'kh' ? 'ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់' : 'Master Degree'}</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'មុខជំនាញ *' : 'Intended Major *'}</label>
                    <select required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary bg-white">
                      <option value="">{lang === 'kh' ? 'ជ្រើសរើសមុខជំនាញ' : 'Select Major'}</option>
                      <optgroup label={lang === 'kh' ? 'មុខជំនាញពេញនិយម' : 'Popular Majors'}>
                        <option value="business">{lang === 'kh' ? 'គ្រប់គ្រងពាណិជ្ជកម្ម' : 'Business Administration'}</option>
                        <option value="law">{lang === 'kh' ? 'នីតិសាស្ត្រ' : 'Law'}</option>
                        <option value="it">{lang === 'kh' ? 'ព័ត៌មានវិទ្យា' : 'Information Technology'}</option>
                        <option value="english">{lang === 'kh' ? 'ភាសាអង់គ្លេស' : 'English Literature'}</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'kh' ? 'សារបន្ថែម (បើមាន)' : 'Additional Notes (Optional)'}</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-primary focus:border-primary" placeholder={lang === 'kh' ? 'តើអ្នកមានសំណួរអ្វីបន្ថែមទេ?' : 'Do you have any specific questions?'}></textarea>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button type="submit" className="bg-secondary text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-secondary-dark transition-colors flex items-center shadow-md">
                    <Send className="w-5 h-5 mr-2" />
                    {lang === 'kh' ? 'បញ្ជូនពាក្យស្នើសុំ' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
