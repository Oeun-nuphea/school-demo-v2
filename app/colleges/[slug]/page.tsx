import React from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle, BookOpen } from "lucide-react";
import info from "../../../information.json";import { notFound } from "next/navigation";

const collegeSlugs: Record<string, string> = {
  "business": "College of Business Administration",
  "law": "College of Law",
  "arts": "College of Arts, Humanities & Foreign Languages",
  "agriculture": "College of Agriculture",
  "science": "College of Science and Technology",
  "engineering": "College of Civil Engineering", 
};

export default async function CollegePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const targetCollegeName = collegeSlugs[resolvedParams.slug];
  
  if (!targetCollegeName) {
    notFound();
  }

  let degrees: string[] = [];
  let displayTitle = targetCollegeName;

  if (resolvedParams.slug === 'engineering') {
    displayTitle = "College of Engineering (Civil & Electrical)";
    const civil = info.academic_programs.bachelor_programs.find(c => c.college === "College of Civil Engineering");
    const electrical = info.academic_programs.bachelor_programs.find(c => c.college === "College of Electrical Engineering and Electronics");
    if (civil) degrees.push(...civil.degrees.map(d => `Civil Engineering: ${d}`));
    if (electrical) degrees.push(...electrical.degrees.map(d => `Electrical Engineering: ${d}`));
  } else {
    const collegeData = info.academic_programs.bachelor_programs.find(c => c.college === targetCollegeName);
    if (collegeData) {
      degrees = collegeData.degrees;
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/80 z-10"></div>
        {/* Using a nice library photo */}
        <img 
          src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt={displayTitle}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {displayTitle}
          </h1>
          <p className="text-xl text-gray-200 font-sans max-w-2xl mx-auto">
            Discover our rigorous curriculum and specialized degree offerings.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
          <span className="text-gray-900 font-medium">Colleges</span>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50 flex-shrink-0" />
          <span className="text-gray-900 font-medium">{displayTitle}</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-primary mb-4 border-b border-gray-200 pb-2">Academic Colleges</h3>
              <ul className="space-y-3">
                {Object.keys(collegeSlugs).map((slugKey) => {
                  const isActive = slugKey === resolvedParams.slug;
                  return (
                    <li key={slugKey}>
                      <Link 
                        href={`/colleges/${slugKey}`} 
                        className={`block transition-colors ${isActive ? "text-primary font-bold border-l-2 border-primary pl-3" : "text-gray-600 hover:text-primary"}`}
                      >
                        {slugKey === 'engineering' ? 'Engineering' : collegeSlugs[slugKey].replace("College of ", "")}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-secondary mr-4" />
              <h2 className="text-3xl font-serif font-bold text-gray-900">Available Majors & Degrees</h2>
            </div>
            <div className="w-16 h-1 bg-secondary mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Welcome to the {displayTitle} at {info.institute_overview.institution_name}. We offer specialized degree programs designed to equip you with deep expertise, critical thinking abilities, and practical skills for your professional career.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {degrees.map((degree, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{degree}</h3>
                      <p className="text-sm text-gray-500 uppercase tracking-widest">Bachelor's Degree Program</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
