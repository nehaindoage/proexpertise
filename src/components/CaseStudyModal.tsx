import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../types';
import { X, Calendar, MapPin, Film, CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAFAF8] text-[#121212] rounded-2xl overflow-hidden shadow-2xl border border-stone-300 my-8">
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-stone-300 flex items-center justify-center text-[#121212] hover:bg-white shadow-md transition-all duration-200"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual Banner */}
        <div className="relative w-full h-72 sm:h-96 bg-stone-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-stone-300 mb-2 font-mono">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-stone-400" />
                {project.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-stone-400" />
                {project.year}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl leading-tight">
              {project.title}
            </h2>
            <p className="text-sm text-stone-300 mt-1">Client: {project.client}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Headline & Overview */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#121212] leading-snug mb-3">
              {project.headline}
            </h3>
            <p className="text-sm sm:text-base text-[#5C5C5A] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-white rounded-xl border border-stone-200">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#121212] tracking-tight font-mono-num">
                  {m.value}
                </span>
                <span className="text-xs text-[#70706E] mt-1 font-medium">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-stone-100/70 rounded-xl border border-stone-200/80">
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-600 mb-2">
                The Creative Challenge
              </h4>
              <p className="text-sm text-[#5C5C5A] leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-900 mb-2">
                Our Production Solution
              </h4>
              <p className="text-sm text-[#5C5C5A] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Secondary Visual if present */}
          {project.secondaryImage && (
            <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-stone-200">
              <img
                src={project.secondaryImage}
                alt={`${project.title} Secondary Detail`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded">
                BEHIND THE SCENES · PRODUCTION MASTER
              </div>
            </div>
          )}

          {/* Deliverables & Gear Used */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 border-t border-stone-200">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#121212] mb-3">
                Deliverables & Assets
              </h4>
              <ul className="space-y-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#5C5C5A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#121212] mb-3">
                Production Hardware & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.gearUsed.map((gear, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white text-stone-700 px-3 py-1.5 rounded-lg border border-stone-200 font-mono"
                  >
                    {gear}
                  </span>
                ))}
              </div>

              {project.directorQuote && (
                <div className="mt-5 p-4 bg-stone-100 rounded-xl border-l-2 border-stone-400">
                  <p className="text-xs italic text-stone-700 font-serif-italic">
                    "{project.directorQuote}"
                  </p>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block mt-2">
                    — Director’s Field Note
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action CTA inside modal */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-500">
              Interested in similar cinematic or digital execution for your brand?
            </span>
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#121212] rounded-full hover:bg-black transition-colors"
            >
              Commission a Project Like This
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
