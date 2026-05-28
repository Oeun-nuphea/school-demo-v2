import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function TopInfoBar() {
  return (
    <div className="bg-primary-dark text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-6 mb-2 sm:mb-0">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2 opacity-80" />
            +1 (555) 123-4567
          </span>
          <span className="flex items-center hidden md:flex">
            <Mail className="w-4 h-4 mr-2 opacity-80" />
            info@aic.edu.kh          </span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/students" className="hover:text-secondary transition-colors">Current Students</Link>
          <Link href="/faculty" className="hover:text-secondary transition-colors">Faculty & Staff</Link>
          <Link href="/alumni" className="hover:text-secondary transition-colors">Alumni</Link>
        </div>
      </div>
    </div>
  );
}
