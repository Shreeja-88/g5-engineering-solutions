import React, { useState } from 'react';
import { processSteps } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach" className="py-24 sm:py-32 bg-[#F5F3EE] border-t border-[#77766F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
              04 / OUR APPROACH
            </span>
            <span className="h-px w-12 bg-[#77766F]/30" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222522]">
            From concept to fabrication-ready precision.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#77766F] leading-relaxed">
            Our systematic 6-stage engineering workflow eliminates ambiguity, protects fabrication schedules, and prevents costly field rectifications.
          </p>
        </div>

        {/* 6-Step Horizontal / Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map((item, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`relative p-8 rounded-xs border transition-all duration-300 cursor-pointer bg-white ${
                  isSelected
                    ? 'border-[#345B4B] shadow-md ring-1 ring-[#345B4B]/20'
                    : 'border-[#77766F]/20 hover:border-[#77766F]/50 shadow-xs'
                }`}
              >
                {/* Step Index & Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs tracking-widest text-[#77766F]">
                    STAGE {item.step}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono transition-colors ${
                      isSelected
                        ? 'bg-[#345B4B] text-white'
                        : 'bg-[#E5E1D8] text-[#222522]'
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-2xl text-[#222522] mb-3">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="font-sans text-xs sm:text-sm text-[#77766F] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Deliverables Sublist */}
                <div className="pt-4 border-t border-[#77766F]/15 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-[#345B4B] font-medium block">
                    Verified Outputs:
                  </span>
                  {item.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-center gap-2 text-xs text-[#222522]/80">
                      <span className="w-1 h-1 rounded-full bg-[#345B4B]" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Summary Strip */}
        <div className="mt-12 p-6 bg-white border border-[#77766F]/20 rounded-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#345B4B] shrink-0" />
            <span className="text-xs sm:text-sm font-sans text-[#222522]">
              Every drawing set passes an independent checker and lead engineer before being released to the client.
            </span>
          </div>
          <span className="shrink-0 text-xs font-mono text-[#345B4B] uppercase tracking-wider font-semibold">
            DEFECT-FREE SHOP DRAWINGS
          </span>
        </div>

      </div>
    </section>
  );
};
