import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { Search, MapPin, Calendar, Weight, ArrowUpRight, Filter } from 'lucide-react';
import gsap from 'gsap';
import { registerScrollTrigger } from '../animations/registerGSAP';

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    registerScrollTrigger();

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-project-card]').forEach((card) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true
          }
        });

        timeline
          .fromTo(
            card,
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power3.out' }
          )
          .fromTo(
            card.querySelector('h3'),
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' },
            0.12
          )
          .fromTo(
            card.querySelector('p'),
            { autoAlpha: 0, y: 8 },
            { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' },
            0.22
          );
      });
    });

    return () => context.revert();
  }, [activeFilter, searchQuery]);

  const categories = ['All', 'Industrial', 'Commercial', 'Institutional', 'Infrastructure'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.structureType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.codeStandard.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-28 pb-28 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
              PORTFOLIO & CASE STUDIES
            </span>
            <span className="h-px w-12 bg-[#77766F]/30" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#222522] leading-[1.1]">
            Structures tell our story.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#77766F] leading-relaxed">
            Explore authentic structural steel detailing case studies executed by G5 Engineering for global fabrication and engineering partners.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 p-4 bg-white border border-[#77766F]/20 rounded-xs shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all rounded-xs ${
                  activeFilter === cat
                    ? 'bg-[#222522] text-white shadow-xs'
                    : 'bg-[#F5F3EE] text-[#77766F] hover:text-[#222522] hover:bg-[#E5E1D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#77766F]" />
            <input
              type="text"
              placeholder="Search by title, location, code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#F5F3EE] border border-[#77766F]/20 rounded-xs text-xs text-[#222522] placeholder-[#77766F] focus:outline-hidden focus:border-[#345B4B]"
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="mb-8 text-xs font-mono text-[#77766F] flex items-center justify-between">
          <span>SHOWING {filteredProjects.length} OF {projectsData.length} DOCUMENTED PROJECTS</span>
          {activeFilter !== 'All' && <span>FILTER: {activeFilter.toUpperCase()}</span>}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              data-project-card
              className="group flex flex-col justify-between bg-white border border-[#77766F]/20 rounded-xs overflow-hidden hover:border-[#345B4B] transition-all duration-300 shadow-xs"
            >
              <Link to={`/projects/${project.slug}`} className="block">
                
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#FAF9F6] border-b border-[#77766F]/15 flex items-center justify-center p-6 group-hover:bg-white transition-colors">
                  <img
                    src={project.images.hero}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#222522] border border-[#77766F]/20 shadow-2xs">
                    {project.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2 py-0.5 text-[10px] font-mono text-[#345B4B] font-semibold border border-[#77766F]/20 shadow-2xs">
                    {project.codeStandard}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-mono text-[#77766F] flex items-center justify-between">
                    <span className="flex items-center gap-1.5 truncate max-w-[200px]">
                      <MapPin className="w-3.5 h-3.5 text-[#345B4B]" />
                      <span>{project.location}</span>
                    </span>
                    <span>0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#222522] group-hover:text-[#345B4B] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#77766F] line-clamp-2 leading-relaxed">
                    {project.criticalChallenge}
                  </p>

                  <div className="pt-3 border-t border-[#77766F]/15 flex items-center justify-between text-xs font-mono text-[#222522]">
                    <span className="flex items-center gap-1">
                      <Weight className="w-3.5 h-3.5 text-[#77766F]" />
                      <span>{project.tonnage || 'Custom'}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#345B4B] font-semibold">
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </Link>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white border border-[#77766F]/20 rounded-xs">
            <p className="font-serif text-xl text-[#222522]">No matching projects found</p>
            <p className="text-xs text-[#77766F] mt-2">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#222522] text-white text-xs font-mono uppercase tracking-wider rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
