"use client";

import { useEffect, useState } from "react";
import { fetchStatistics, Statistic } from "@/services/api";

export default function Statistics() {
  const [stats, setStats] = useState<Statistic[]>([]);

  useEffect(() => {
    fetchStatistics().then(setStats);
  }, []);

  return (
    <section className="py-16 bg-primary text-white border-y-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={stat.id} className={`px-4 ${index === 0 ? "border-none" : ""}`}>
              <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium tracking-wide uppercase text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
