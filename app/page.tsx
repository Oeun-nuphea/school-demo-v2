import Hero from "@/components/home/Hero";
import QuickAccess from "@/components/home/QuickAccess";
import LatestNews from "@/components/home/LatestNews";
import Faculties from "@/components/home/Faculties";
import StudentLife from "@/components/home/StudentLife";
import Statistics from "@/components/home/Statistics";
import InternationalActivities from "@/components/home/InternationalActivities";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col">
      <Hero />
      <QuickAccess />
      <LatestNews />
      <Statistics />
      <Faculties />
      <StudentLife />
      <InternationalActivities />
    </main>
  );
}
