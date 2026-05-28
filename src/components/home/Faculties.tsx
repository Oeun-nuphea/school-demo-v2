"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchFaculties, Faculty } from "@/services/api";
import { Cog, Briefcase, Monitor, BookOpen, GraduationCap, Scale, ChevronRight } from "lucide-react";

// Map string icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Cog, Briefcase, Monitor, BookOpen, GraduationCap, Scale
};

export default function Faculties() {
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    fetchFaculties().then(setFaculties);
  }, []);

  return (
    <section className="py-20 bg-gray-50 border-y uni-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Academic Faculties</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Discover our diverse range of academic departments, led by world-renowned experts dedicated to advancing knowledge and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty) => {
            const Icon = iconMap[faculty.iconName] || BookOpen;
            return (
              <div key={faculty.id} className="bg-white p-8 border uni-border hover:shadow-md transition-shadow group rounded-sm">
                <div className="w-14 h-14 bg-gray-50 border uni-border text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Faculty of {faculty.name}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {faculty.description}
                </p>
                <Link 
                  href={`/faculties/${faculty.id}`} 
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Explore Programs
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
