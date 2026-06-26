import type { Metadata } from "next";
import { Poppins, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import TopInfoBar from "@/components/layout/TopInfoBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const kantumruy = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asian Institute of Cambodia | Excellence in Education",
  description: "Welcome to Asian Institute of Cambodia. Discover our programs, campus life, and commitment to Morality, Intelligence, Innovation, and Entrepreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${kantumruy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-gray-800 bg-white">
        <LanguageProvider>
          <TopInfoBar />
          <Navbar />
          <div className="flex-grow flex flex-col">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
