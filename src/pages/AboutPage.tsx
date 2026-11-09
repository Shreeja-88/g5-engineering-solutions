import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyProfile, heroStats } from '../data/companyData';
import { SteelModelCanvas } from '../components/SteelModelCanvas';
import { ArrowUpRight, CheckCircle2, Users, Compass, Shield, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-28 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
              ABOUT G5 ENGINEERING
            </span>
            <span className="h-px w-12 bg-[#77766F]/30" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#222522] leading-[1.1]">
            Employee-owned. <br />
            Technology-led. <br />
            <span className="italic text-[#345B4B]">Detail-obsessed.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#77766F] leading-relaxed">
            Formed by energetic engineers with over a decade of structural steel detailing experience across industrial and commercial projects, our leadership brings deep technical knowledge to every job we take on.
          </p>
        </div>

        {/* Narrative & Guiding Purpose Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#222522]">
              Helping our clients focus on what they do best.
            </h2>
            <p className="text-base text-[#222522]/90 leading-relaxed">
              Established in 2019 in Mysore, India, G5 Engineering was founded on a simple conviction: when engineers have a direct personal and proprietary stake in the firm, drawing quality transforms from a routine checklist into an uncompromising craft.
            </p>
            <p className="text-sm text-[#77766F] leading-relaxed">
              Today, our team of over 70 structural detailers, connection modelers, and check engineers operates around the clock across three rotational shifts. We function not merely as an outsourced drafting contractor, but as a seamlessly integrated remote engineering office for steel fabricators, general contractors, and detailing firms worldwide.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-white border border-[#77766F]/20 rounded-xs shadow-xs space-y-2">
                <span className="font-mono text-xs text-[#345B4B] uppercase tracking-wider font-semibold block">
                  OUR MISSION
                </span>
                <h3 className="font-serif text-lg text-[#222522]">
                  Defect-free drawings, extended-team service.
                </h3>
                <p className="text-xs text-[#77766F] leading-relaxed">
                  {companyProfile.mission}
                </p>
              </div>

              <div className="p-6 bg-white border border-[#77766F]/20 rounded-xs shadow-xs space-y-2">
                <span className="font-mono text-xs text-[#345B4B] uppercase tracking-wider font-semibold block">
                  OUR VISION
                </span>
                <h3 className="font-serif text-lg text-[#222522]">
                  Stronger engineering capability for every client.
                </h3>
                <p className="text-xs text-[#77766F] leading-relaxed">
                  {companyProfile.vision}
                </p>
              </div>
            </div>

            {/* Guiding Quote */}
            <div className="p-6 bg-[#E5E1D8]/60 border-l-3 border-[#345B4B] rounded-xs mt-6">
              <p className="font-serif italic text-lg text-[#222522]">
                “{companyProfile.teamQuote}”
              </p>
              <div className="text-xs font-mono uppercase text-[#77766F] mt-2">
                — G5 Engineering Internal Standard
              </div>
            </div>

          </div>

          {/* Right Column: Studio Verification Card & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-white border border-[#77766F]/20 rounded-xs shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#77766F]/15">
                <img
                  src="/assets/g5_logo_transparent.png"
                  alt="G5 Engineering Solutions"
                  className="h-14 w-auto object-contain"
                />
                <span className="font-mono text-xs text-[#345B4B] uppercase tracking-wider font-semibold">
                  STUDIO OVERVIEW
                </span>
              </div>
              
              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between pb-2 border-b border-[#77766F]/15">
                  <span className="text-[#77766F]">FOUNDED</span>
                  <span className="text-[#222522] font-semibold">2019 · Mysore, India</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#77766F]/15">
                  <span className="text-[#77766F]">OWNERSHIP STRUCTURE</span>
                  <span className="text-[#345B4B] font-semibold">100% Employee-Owned</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#77766F]/15">
                  <span className="text-[#77766F]">ENGINEERING FORCE</span>
                  <span className="text-[#222522] font-semibold">70+ Engineers in 3 Shifts</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#77766F]/15">
                  <span className="text-[#77766F]">PRODUCTION CAPACITY</span>
                  <span className="text-[#222522] font-semibold">10,000+ Detailing Hrs / Mo</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#77766F]/15">
                  <span className="text-[#77766F]">PRIMARY MODELING SUITE</span>
                  <span className="text-[#222522] font-semibold">Tekla Structures (18 Seats)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#77766F]">ON-TIME RECORD</span>
                  <span className="text-[#345B4B] font-semibold">90% On-Time Delivery</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#222522] hover:bg-[#345B4B] text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors"
                >
                  <span>Connect with Engineering Leadership</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Interactive 3D Model Teaser */}
            <div className="border border-[#77766F]/20 rounded-xs overflow-hidden bg-white shadow-xs">
              <div className="p-3 bg-[#E5E1D8]/40 border-b border-[#77766F]/15 text-[11px] font-mono text-[#77766F] flex items-center justify-between">
                <span>INTERACTIVE STRUCTURAL SYSTEM</span>
                <span className="text-[#345B4B]">3D VIEW</span>
              </div>
              <SteelModelCanvas height="h-64" interactive={true} />
            </div>

          </div>

        </div>

        {/* Studio Culture & Shift Model */}
        <div className="p-10 bg-[#222522] text-[#F5F3EE] rounded-xs shadow-md">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs text-[#8DC63F] uppercase tracking-wider font-semibold block mb-2">
              WHY THE 3-SHIFT ROTATION MATTERS
            </span>
            <h3 className="font-serif text-3xl text-white">
              The overnight advantage for Western fabricators.
            </h3>
            <p className="text-sm text-[#E5E1D8]/80 mt-3 leading-relaxed">
              When our North American and European partners submit structural markup, RFIs, or drawing updates at the close of their business day, our Mysore engineering team works through the night. Drawings and revised models are often back on your desk before your morning fabrication meeting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs">
            <div>
              <div className="font-mono text-[#8DC63F] uppercase mb-1 font-semibold">Shift 01 · Morning</div>
              <div className="text-white font-medium mb-1">North American Coordination & Detailing</div>
              <p className="text-[#77766F] leading-snug">Real-time sync with US Eastern & Pacific standard hours.</p>
            </div>
            <div>
              <div className="font-mono text-[#8DC63F] uppercase mb-1 font-semibold">Shift 02 · Evening</div>
              <div className="text-white font-medium mb-1">UK & Middle East Alignment</div>
              <p className="text-[#77766F] leading-snug">Direct overlap with European consultants and Middle East sites.</p>
            </div>
            <div>
              <div className="font-mono text-[#8DC63F] uppercase mb-1 font-semibold">Shift 03 · Night</div>
              <div className="text-white font-medium mb-1">Continuous QC & Clash Resolution</div>
              <p className="text-[#77766F] leading-snug">Deep verification and NC output generation without interruptions.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
