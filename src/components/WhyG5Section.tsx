import React from 'react';
import { whyChooseG5 } from '../data/companyData';

export const WhyG5Section: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F3EE] border-t border-[#77766F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
              WHY G5 ENGINEERING SOLUTIONS PVT. LTD.
            </span>
            <span className="h-px w-12 bg-[#77766F]/30" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222522]">
            More than a detailing partner. <br />
            <span className="italic text-[#345B4B]">An extension of your team.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#77766F] leading-relaxed">
            Six foundational principles that have guided our client partnerships, drawing quality, and global growth since 2019.
          </p>
        </div>

        {/* 6 Editorial Content Blocks (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseG5.map((item) => (
            <div
              key={item.number}
              className="group p-8 bg-white border border-[#77766F]/20 rounded-xs hover:border-[#345B4B] transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs tracking-widest text-[#77766F] mb-4">
                  PRINCIPLE {item.number}
                </div>
                <h3 className="font-serif text-2xl text-[#222522] group-hover:text-[#345B4B] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#77766F] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#77766F]/15 flex items-center justify-between text-[11px] font-mono text-[#77766F]">
                <span>G5 STANDARD</span>
                <span className="text-[#345B4B] font-medium">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-[#E5E1D8]/60 border border-[#77766F]/20 rounded-xs text-center max-w-3xl mx-auto">
          <p className="font-serif italic text-xl sm:text-2xl text-[#222522]">
            “Customer satisfaction is our main profit.”
          </p>
          <div className="mt-2 text-xs font-mono uppercase tracking-widest text-[#345B4B] font-semibold">
            G5 ENGINEERING SOLUTIONS PVT. LTD. · MYSORE, INDIA
          </div>
        </div>

      </div>
    </section>
  );
};
