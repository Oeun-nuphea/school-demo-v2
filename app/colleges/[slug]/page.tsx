import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import info from "../../../information.json";
import { notFound } from "next/navigation";

const collegeSlugs: Record<string, string> = {
  "business": "College of Business Administration",
  "law": "College of Law",
  "arts": "College of Arts, Humanities & Foreign Languages",
  "agriculture": "College of Agriculture",
  "science": "College of Science and Technology",
  "engineering": "College of Civil Engineering", 
};

// Required for Next.js App Router dynamic params
export default async function CollegePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const targetCollegeName = collegeSlugs[resolvedParams.slug];
  
  if (!targetCollegeName) {
    notFound();
  }

  let degrees: string[] = [];
  let displayTitle = targetCollegeName;

  // Handle combining both engineering colleges into one page for the 'engineering' slug
  if (resolvedParams.slug === 'engineering') {
    displayTitle = "College of Engineering (Civil & Electrical)";
    const civil = info.academic_programs.bachelor_programs.find(c => c.college === "College of Civil Engineering");
    const electrical = info.academic_programs.bachelor_programs.find(c => c.college === "College of Electrical Engineering and Electronics");
    if (civil) degrees.push(...civil.degrees.map(d => `Civil: ${d}`));
    if (electrical) degrees.push(...electrical.degrees.map(d => `Electrical: ${d}`));
  } else {
    const collegeData = info.academic_programs.bachelor_programs.find(c => c.college === targetCollegeName);
    if (collegeData) {
      degrees = collegeData.degrees;
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="bg-white p-8 md:p-12 shadow-sm border uni-border rounded-sm">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-secondary mr-4" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">{displayTitle}</h1>
          </div>
          <div className="w-16 h-1 bg-secondary mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Welcome to the {displayTitle} at {info.institute_overview.institution_name}. We offer the following specialized bachelor's degree programs designed to equip you with deep expertise and practical skills.
          </p>
          
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Available Majors & Degrees
          </h2>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {degrees.map((degree, idx) => (
              <li key={idx} className="flex items-start bg-gray-50 p-4 border border-gray-100 rounded-sm hover:border-primary/30 transition-colors">
                <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-gray-800">{degree}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
