import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Calendar, Weight, Layers, Eye, X, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';

interface ProjectsGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  limit = 8,
  showFilters = true
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [quickViewProject, setQuickViewProject] = useState<Project | null>(null);

  const categories = ['All', 'Industrial', 'Commercial', 'Institutional', 'Infrastructure'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F5F3EE] border-t border-[#77766F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
                03 / SELECTED WORK
              </span>
              <span className="h-px w-12 bg-[#77766F]/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222522]">
              Structures tell our story.
            </h2>
          </div>
          
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#222522] hover:text-[#345B4B] font-semibold transition-colors pb-1 border-b border-[#222522] hover:border-[#345B4B]"
          >
            <span>View All {projectsData.length} Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filters (Clean Functional Segmented Controls) */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#77766F]/15">
            <span className="text-xs font-mono text-[#77766F] uppercase mr-2">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all rounded-xs ${
                  activeFilter === cat
                    ? 'bg-[#222522] text-white shadow-xs'
                    : 'bg-white/80 text-[#77766F] hover:text-[#222522] hover:bg-white border border-[#77766F]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Asymmetrical Editorial Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {displayedProjects.map((project, index) => {
            const colSpans = [
              'md:col-span-8',
              'md:col-span-4',
              'md:col-span-5',
              'md:col-span-7',
              'md:col-span-6',
              'md:col-span-6',
              'md:col-span-7',
              'md:col-span-5',
            ];
            const spanClass = colSpans[index % colSpans.length];

            return (
              <article
                key={project.id}
                className={`group flex flex-col justify-between ${spanClass}`}
              >
                {/* Image Card Container: Light architectural canvas with seamless image presentation */}
                <div className="relative overflow-hidden rounded-xs border border-[#77766F]/20 bg-white group-hover:border-[#345B4B] transition-all duration-300 shadow-xs group-hover:shadow-md">
                  
                  {/* Clean light container for 3D model */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#FAF9F6] border-b border-[#77766F]/15 flex items-center justify-center p-6 group-hover:bg-white transition-colors duration-300">
                    <img
                      src={project.images.hero}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />

                    {/* Quick View Hover Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setQuickViewProject(project);
                      }}
                      className="absolute inset-0 bg-[#222522]/0 group-hover:bg-[#222522]/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                    >
                      <span className="px-4 py-2 bg-white text-[#222522] text-xs font-mono uppercase tracking-wider font-semibold rounded-xs shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-[#345B4B]" />
                        <span>Quick Inspect</span>
                      </span>
                    </button>
                  </div>

                  {/* Clean Category & Code Tags */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#222522] border border-[#77766F]/20 shadow-2xs">
                    {project.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#345B4B] font-semibold border border-[#77766F]/20 shadow-2xs">
                    {project.codeStandard}
                  </div>
                </div>

                {/* Project Metadata & Typography */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-baseline justify-between text-xs font-mono text-[#77766F]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#345B4B]" />
                      <span className="truncate max-w-[220px]">{project.location}</span>
                    </span>
                    <span>PROJECT 0{index + 1}</span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="font-serif text-xl sm:text-2xl text-[#222522] group-hover:text-[#345B4B] transition-colors leading-tight focus-visible:outline-hidden"
                    >
                      {project.title}
                    </Link>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="shrink-0 p-1.5 rounded-xs bg-[#E5E1D8]/60 group-hover:bg-[#345B4B] text-[#222522] group-hover:text-white transition-all"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-xs text-[#77766F] line-clamp-2 leading-relaxed">
                    {project.criticalChallenge}
                  </p>

                  {/* Key Technical Metric Pills */}
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#222522]">
                    {project.tonnage && (
                      <span className="flex items-center gap-1">
                        <Weight className="w-3 h-3 text-[#77766F]" />
                        {project.tonnage}
                      </span>
                    )}
                    {project.schedule && (
                      <>
                        <span className="text-[#77766F]/40">·</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#77766F]" />
                          {project.schedule}
                        </span>
                      </>
                    )}
                    {project.elementsCount && (
                      <>
                        <span className="text-[#77766F]/40">·</span>
                        <span className="flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#77766F]" />
                          {project.elementsCount} elements
                        </span>
                      </>
                    )}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* View All Bottom Link */}
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#222522] hover:bg-[#345B4B] text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors shadow-xs"
          >
            <span>Explore Complete Project Archive ({projectsData.length} Projects)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Trendy Project Quick Inspect Modal */}
      {quickViewProject && (
        <div
          className="fixed inset-0 z-50 bg-[#222522]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setQuickViewProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-xs shadow-2xl border border-[#77766F]/20 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-[#FAF9F6] border-b border-[#77766F]/15 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#345B4B] uppercase tracking-wider font-semibold block">
                  {quickViewProject.category} · {quickViewProject.codeStandard}
                </span>
                <h3 className="font-serif text-2xl text-[#222522] mt-0.5">
                  {quickViewProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQuickViewProject(null)}
                className="p-2 text-[#77766F] hover:text-[#222522] hover:bg-[#E5E1D8]/60 rounded-xs transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              
              {/* Image Preview on clean background */}
              <div className="aspect-16/9 w-full bg-[#FAF9F6] border border-[#77766F]/15 rounded-xs p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={quickViewProject.images.hero}
                  alt={quickViewProject.title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FAF9F6] border border-[#77766F]/15 rounded-xs text-xs font-mono">
                <div>
                  <span className="text-[#77766F] block">TONNAGE</span>
                  <span className="text-[#222522] font-bold text-sm">{quickViewProject.tonnage || 'Custom'}</span>
                </div>
                <div>
                  <span className="text-[#77766F] block">SCHEDULE</span>
                  <span className="text-[#222522] font-bold text-sm">{quickViewProject.schedule}</span>
                </div>
                <div>
                  <span className="text-[#77766F] block">LOCATION</span>
                  <span className="text-[#222522] font-bold text-sm truncate block">{quickViewProject.location}</span>
                </div>
                <div>
                  <span className="text-[#77766F] block">CODE</span>
                  <span className="text-[#345B4B] font-bold text-sm">{quickViewProject.codeStandard}</span>
                </div>
              </div>

              {/* Overview & Detailing Approach */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg text-[#222522]">Detailing Scope & Challenge</h4>
                <p className="text-xs sm:text-sm text-[#77766F] leading-relaxed">
                  {quickViewProject.criticalChallenge}
                </p>
                <p className="text-xs sm:text-sm text-[#222522]/90 leading-relaxed">
                  {quickViewProject.description}
                </p>
              </div>

              {quickViewProject.keyDeliverables && (
                <div className="pt-3 border-t border-[#77766F]/15">
                  <h4 className="text-xs font-mono uppercase text-[#345B4B] font-bold mb-2">Verified Deliverables:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#222522]">
                    {quickViewProject.keyDeliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#345B4B] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FAF9F6] border-t border-[#77766F]/15 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setQuickViewProject(null)}
                className="px-4 py-2 text-xs font-mono uppercase text-[#77766F] hover:text-[#222522]"
              >
                Close
              </button>
              <Link
                to={`/projects/${quickViewProject.slug}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#345B4B] hover:bg-[#274539] text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
