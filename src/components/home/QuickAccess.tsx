import Link from "next/link";
import { GraduationCap, BookOpen, Calendar, Users, Library, Award } from "lucide-react";

export default function QuickAccess() {
  const links = [
    { name: "Admissions", icon: GraduationCap, href: "/admissions", desc: "Apply and join our community" },
    { name: "Faculties", icon: BookOpen, href: "/faculties", desc: "Explore academic departments" },
    { name: "Scholarships", icon: Award, href: "/scholarships", desc: "Financial aid and funding" },
    { name: "Academic Calendar", icon: Calendar, href: "/calendar", desc: "Important dates and deadlines" },
    { name: "Student Portal", icon: Users, href: "/portal", desc: "Access your student account" },
    { name: "Library", icon: Library, href: "/library", desc: "Research and academic resources" },
  ];

  return (
    <section className="py-12 bg-gray-50 border-b uni-border relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-7xl rounded-sm shadow-sm bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex flex-col items-center text-center p-4 group hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 rounded-sm"
              >
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-gray-900 mb-1">{link.name}</h3>
                <p className="text-xs text-gray-500 font-sans hidden sm:block">{link.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
