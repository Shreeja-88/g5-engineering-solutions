import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="introduction" className="relative py-24 sm:py-32 bg-[#F5F3EE] border-t border-[#77766F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
            01 / WHO WE ARE
          </span>
          <span className="h-px w-12 bg-[#77766F]/30" />
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#222522]">
              Engineering expertise. <br />
              <span className="italic text-[#345B4B]">Built around precision.</span>
            </h2>

            {/* Quote Pill / Quote Callout */}
            <div className="mt-8 pl-5 border-l-2 border-[#345B4B] py-1">
              <p className="font-serif italic text-lg sm:text-xl text-[#222522]/90">
                “The strength of our team is each individual member. The strength of each member is our team.”
              </p>
              <div className="text-xs font-mono uppercase tracking-wider text-[#77766F] mt-2">
                — G5 Engineering Solutions Pvt. Ltd. Guiding Ethos
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#222522] leading-relaxed font-normal">
              G5 Engineering Solutions Pvt. Ltd. is an <strong className="font-semibold text-[#345B4B]">employee-owned</strong> structural detailing company delivering advanced engineering services and solutions through innovative practices, specialized expertise and efficient project execution.
            </p>
            <p className="font-sans text-base text-[#77766F] leading-relaxed">
              Since 2019, our team has worked with engineering consultants, steel fabricators, detailing companies and erection firms, supporting complex industrial, commercial and civic infrastructure projects across the United States, Canada, the United Kingdom, the Middle East and India.
            </p>

            {/* Three Pillar Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#77766F]/15">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#222522] font-semibold">
                  <Users className="w-4 h-4 text-[#345B4B]" />
                  <span>Employee-Owned</span>
                </div>
                <p className="text-xs text-[#77766F] leading-relaxed">
                  Every engineer shares direct accountability for defect-free deliverables and client retention.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#222522] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#345B4B]" />
                  <span>Tekla & SDS/2 Led</span>
                </div>
                <p className="text-xs text-[#77766F] leading-relaxed">
                  18 licensed Tekla stations & 12 model-sharing seats integrated directly into client workflows.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#222522] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#345B4B]" />
                  <span>24×7 Operations</span>
                </div>
                <p className="text-xs text-[#77766F] leading-relaxed">
                  Three rotational shifts ensuring overnight turnaround on time-sensitive shop drawings and RFIs.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#345B4B] hover:text-[#222522] font-semibold transition-colors"
              >
                <span>Read more about our Mysore studio and team</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Visual: Architectural Steel 3D Model Render Banner */}
        <div className="mt-16 relative rounded-xs overflow-hidden border border-[#77766F]/20 bg-white shadow-xs group">
          <div className="aspect-21/9 sm:aspect-24/9 w-full overflow-hidden bg-[#222522] flex items-center justify-center p-4">
            <img
              src="/assets/projects/g5_structural_complex_3d.png"
              alt="G5 Engineering Solutions Pvt. Ltd. high-complexity structural steel 3D model"
              className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="p-4 bg-white/95 border-t border-[#77766F]/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#77766F]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#345B4B]" />
              TEKLA 3D BIM STRUCTURAL MODELING · FULL PROCESS COMPLEX
            </span>
            <span>FABRICATION-READY ACCURACY SINCE 2019</span>
          </div>
        </div>

      </div>
    </section>
  );
};
