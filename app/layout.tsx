import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopInfoBar from "@/components/layout/TopInfoBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asian Institute of Cambodia (AIC) | Excellence in Education",
  description: "Welcome to Asian Institute of Cambodia (AIC). Discover our programs, campus life, and commitment to Morality, Intelligence, Innovation, and Entrepreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
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
