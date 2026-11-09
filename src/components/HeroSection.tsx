import React, { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Box, Image as ImageIcon } from 'lucide-react';
import { SplitText } from '../animations/SplitText';
import heroImage from '../assets/images/g5_hero_steel_arch_1794194517793.webp';

const SteelModelCanvas = lazy(() =>
  import('./SteelModelCanvas').then(({ SteelModelCanvas: Canvas }) => ({ default: Canvas }))
);

export const HeroSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'photo' | 'model'>('photo');

  const scrollToNext = () => {
    const el = document.getElementById('introduction');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section data-hero-reveal className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#F5F3EE]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40" />

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pr-4">
            
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-px bg-[#345B4B]" />
              <span data-hero-label className="font-mono text-xs tracking-widest text-[#77766F] uppercase">
                Structural Engineering · Mysore, India
              </span>
            </div>

            {/* Large headline */}
            <h1
              aria-label="We detail the structures that shape tomorrow."
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.25rem] leading-[1.08] tracking-tight text-[#222522]"
            >
              <span aria-hidden="true">
                <SplitText text="We detail the structures" wordClassName="mr-[0.16em] inline-block" />
                <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#345B4B]">
                  <SplitText text="that shape tomorrow." wordClassName="mr-[0.16em] inline-block" />
                </span>
              </span>
            </h1>

            {/* Supporting text */}
            <p data-hero-copy className="font-sans text-base sm:text-lg text-[#77766F] max-w-xl leading-relaxed">
              Precision-driven structural steel detailing, connection design and BIM engineering solutions for projects across the globe.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                data-hero-cta
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#222522] hover:bg-[#345B4B] text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-all duration-200 shadow-sm"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/about"
                data-hero-cta
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#77766F]/40 hover:border-[#222522] text-[#222522] text-xs font-mono uppercase tracking-wider rounded-xs transition-all duration-200 bg-white/50 hover:bg-white"
              >
                <span>Discover G5</span>
              </Link>
            </div>

            {/* Micro Credibility Strip */}
            <div data-hero-meta className="pt-6 border-t border-[#77766F]/20 flex flex-wrap items-center gap-6 text-xs font-mono text-[#77766F]">
              <div>
                <span className="text-[#222522] font-semibold">30,000+</span> TONS DETAILED
              </div>
              <span className="text-[#77766F]/40">/</span>
              <div>
                <span className="text-[#222522] font-semibold">70+</span> ENGINEERS
              </div>
              <span className="text-[#77766F]/40">/</span>
              <div>
                <span className="text-[#345B4B] font-semibold">100%</span> EMPLOYEE-OWNED
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Interactive 3D Model */}
          <div data-hero-media className="lg:col-span-6 relative">
            <div className="relative rounded-xs overflow-hidden border border-[#77766F]/25 bg-white shadow-sm">
              
              {/* Media Mode Switcher (Photo vs Interactive 3D BIM) */}
              <div className="absolute top-4 right-4 z-20 flex items-center bg-[#FFFFFF]/90 backdrop-blur-md border border-[#77766F]/20 rounded-xs p-1 text-xs font-mono shadow-xs">
                <button
                  onClick={() => setViewMode('photo')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xs transition-colors ${
                    viewMode === 'photo'
                      ? 'bg-[#222522] text-white'
                      : 'text-[#77766F] hover:text-[#222522]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Framework</span>
                </button>
                <button
                  onClick={() => setViewMode('model')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xs transition-colors ${
                    viewMode === 'model'
                      ? 'bg-[#345B4B] text-white'
                      : 'text-[#77766F] hover:text-[#222522]'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D Tekla BIM</span>
                </button>
              </div>

              {/* View 1: Real Architectural Structural Steel Framework Photograph */}
              {viewMode === 'photo' ? (
                <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden bg-[#222522] group">
                  <img
                    src={heroImage}
                    alt="Structural steel framing with bolted connection joints and diagonal bracing"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    fetchPriority="high"
                    decoding="async"
                  />
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222522]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Image Editorial Meta Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between pointer-events-none">
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-[#E5E1D8] uppercase">
                        FIG 01.1 · STRUCTURAL TRUSS BRACING
                      </div>
                      <div className="text-sm font-serif italic text-white/95">
                        High-tolerance Bolted Moment Connections
                      </div>
                    </div>
                    <div className="text-right text-[11px] font-mono text-[#E5E1D8]/80">
                      TOLERANCE: ±1.5mm
                    </div>
                  </div>
                </div>
              ) : (
                /* View 2: Interactive 3D Tekla Model Viewer */
                <div className="aspect-4/3 sm:aspect-16/11 w-full bg-[#F5F3EE]">
                  <Suspense fallback={<div className="h-full w-full animate-pulse bg-[#E5E1D8]" role="status" aria-label="Loading structural model" />}>
                    <SteelModelCanvas height="h-full" interactive />
                  </Suspense>
                </div>
              )}
            </div>

              {/* Asymmetric Floating Architectural Accent Card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#FFFFFF] border border-[#77766F]/20 p-4 shadow-md rounded-xs max-w-[260px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#345B4B]" />
                <span className="text-[11px] font-mono text-[#222522] uppercase tracking-wider font-semibold">
                  Employee-Owned
                </span>
              </div>
              <p className="text-xs text-[#77766F] leading-snug">
                Every engineer has personal stake in precision, drawing accuracy, and on-time fabrication.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Editorial Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-8 flex items-center justify-between text-xs font-mono text-[#77766F]">
        <button
          onClick={scrollToNext}
          className="group inline-flex items-center gap-2 hover:text-[#222522] transition-colors focus-visible:outline-hidden"
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#345B4B]" />
          <span>SCROLL TO EXPLORE</span>
        </button>
        <span className="hidden sm:inline">EST. 2019 · MYSORE HQ</span>
      </div>
    </section>
  );
};
