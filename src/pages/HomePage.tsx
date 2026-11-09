import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { IntroSection } from '../components/IntroSection';
import { StatsSection } from '../components/StatsSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { StandardsSection } from '../components/StandardsSection';
import { WhyG5Section } from '../components/WhyG5Section';
import { LocationMap } from '../components/LocationMap';
import { ContactSection } from '../components/ContactSection';
import { MarqueeBanner } from '../components/MarqueeBanner';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* SECTION 01 — CINEMATIC HERO */}
      <HeroSection />

      {/* TRENDY CONTINUOUS MARQUEE BANNER */}
      <MarqueeBanner />

      {/* SECTION 02 — INTRODUCTION (01 / WHO WE ARE) */}
      <IntroSection />

      {/* SECTION 03 — COMPANY STATISTICS */}
      <StatsSection />

      {/* SECTION 04 — OUR EXPERTISE (02 / WHAT WE DO) */}
      <ServicesSection />

      {/* SECTION 05 — FEATURED PROJECTS (03 / SELECTED WORK) */}
      <ProjectsGallery limit={8} showFilters={true} />

      {/* SECTION 06 — ENGINEERING PROCESS (04 / OUR APPROACH) */}
      <ProcessTimeline />

      {/* SECTION 07 — CAPABILITIES & INFRASTRUCTURE */}
      <CapabilitiesSection />

      {/* SECTION 08 — TECHNOLOGY & STANDARDS */}
      <StandardsSection />

      {/* SECTION 09 — WHY G5 ENGINEERING */}
      <WhyG5Section />

      {/* INTERACTIVE LOCATION MAP (MYSORE STUDIO & GLOBAL CONNECTIVITY) */}
      <LocationMap />

      {/* SECTION 10 — FINAL CONTACT CTA */}
      <ContactSection />
    </div>
  );
};
