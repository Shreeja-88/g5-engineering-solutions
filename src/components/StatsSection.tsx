import React from 'react';
import { heroStats } from '../data/companyData';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F3EE] border-y border-[#77766F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Subtle Section Label */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-[#77766F] tracking-widest uppercase">
            VERIFIED OPERATIONAL METRICS · 2019 — PRESENT
          </span>
        </div>

        {/* 5-Column Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#77766F]/15">
          {heroStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-between pt-6 md:pt-0 ${
                idx > 0 ? 'md:pl-6 lg:pl-8' : ''
              }`}
            >
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#222522] tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-mono uppercase tracking-wider text-[#222522] font-semibold">
                  {stat.label}
                </div>
              </div>
              <p className="mt-2 text-xs text-[#77766F] leading-snug">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
