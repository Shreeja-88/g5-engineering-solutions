import React from 'react';
import { standardsAndCodes, softwareTools, structuresDetailed } from '../data/companyData';
import { Check, Shield, Wrench } from 'lucide-react';

export const StandardsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F3EE] border-t border-[#77766F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
              STANDARDS & TECHNOLOGICAL RIGOR
            </span>
            <span className="h-px w-12 bg-[#77766F]/30" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222522]">
            Driven by technology. <br />
            <span className="italic text-[#345B4B]">Guided by standards.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#77766F] leading-relaxed">
            Our engineers detail in alignment with international industry standards and fabricator standards across North America, the UK, the Middle East, India, and Africa.
          </p>
        </div>

        {/* 2-Column Split: Software Platforms vs Code Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Software Suites & Licensed Tools */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#222522] font-semibold pb-3 border-b border-[#77766F]/20">
              <Wrench className="w-4 h-4 text-[#345B4B]" />
              <span>Core Detailing & BIM Platforms</span>
            </div>

            <div className="space-y-4">
              {softwareTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-5 bg-white border border-[#77766F]/20 rounded-xs hover:border-[#345B4B] transition-colors shadow-xs"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-display font-bold text-base text-[#222522]">
                      {tool.name}
                    </h3>
                    <span className="text-xs font-mono text-[#345B4B] font-medium">
                      {tool.licensed}
                    </span>
                  </div>
                  <p className="text-xs text-[#77766F]">
                    {tool.type}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#E5E1D8]/50 border border-[#77766F]/20 rounded-xs text-xs text-[#77766F] leading-relaxed">
              <strong className="text-[#222522] block mb-1">Interoperability:</strong>
              Deliverables formatted for Tekla, SDS/2, FabSuite/Tekla EPM, CNC DSTV, DXF, KISS, and IFC model exchanges.
            </div>
          </div>

          {/* Right Column: International Standards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#222522] font-semibold pb-3 border-b border-[#77766F]/20">
              <Shield className="w-4 h-4 text-[#345B4B]" />
              <span>International Standards</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standardsAndCodes.map((item) => (
                <div
                  key={item.code}
                  className="p-4 bg-white border border-[#77766F]/20 rounded-xs hover:border-[#345B4B] transition-colors shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="font-mono font-bold text-base text-[#222522]">
                      {item.code}
                    </div>
                    <div className="text-xs text-[#222522]/90 font-medium mt-1">
                      {item.title}
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#77766F]/10 text-[11px] font-mono text-[#77766F]">
                    Jurisdiction: {item.region}
                  </div>
                </div>
              ))}
            </div>

            {/* Structures Detailed Strip */}
            <div className="pt-6 border-t border-[#77766F]/20">
              <div className="text-xs font-mono uppercase tracking-wider text-[#77766F] mb-3">
                Structures Detailed by G5 Engineering Solutions Pvt. Ltd.
              </div>
              <div className="flex flex-wrap gap-2">
                {structuresDetailed.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#77766F]/20 text-xs font-sans text-[#222522] rounded-xs"
                  >
                    <Check className="w-3 h-3 text-[#345B4B]" />
                    <span>{type}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
