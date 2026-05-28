import TopInfoBar from "@/components/layout/TopInfoBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import QuickAccess from "@/components/home/QuickAccess";
import LatestNews from "@/components/home/LatestNews";
import Faculties from "@/components/home/Faculties";
import StudentLife from "@/components/home/StudentLife";
import Statistics from "@/components/home/Statistics";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <QuickAccess />
        <LatestNews />
        <Statistics />
        <Faculties />
        <StudentLife />
      </main>
      <Footer />
    </>
  );
}
