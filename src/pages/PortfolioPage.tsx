import React, { useState } from 'react';
import { PageId, ServiceCategory, GalleryItem } from '../types';
import { GALLERY_PHOTOS } from '../data/mockData';
import { GalleryLightbox } from '../components/GalleryLightbox';
import {
  Play,
  Filter,
  Maximize2,
  Grid3X3,
  LayoutGrid,
  Columns,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onOpenShowreel: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenShowreel,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [layoutMode, setLayoutMode] = useState<'editorial' | 'compact'>('editorial');

  const filterOptions: { id: 'all' | ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'cinematography', label: 'Cinematography' },
    { id: 'photography', label: 'Photography' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'graphic-design', label: 'Graphic Design' },
  ];

  const filteredPhotos: GalleryItem[] =
    activeFilter === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.service === activeFilter);

  return (
    <div className="w-full bg-[#FAFAF8] min-h-screen">
      {/* 1. Header Banner */}
      <section className="pt-16 pb-12 border-b border-[#121212]/10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
                <span>Visual Archive · Kangra Studio</span>
                <span aria-hidden="true">·</span>
                <span>Proexpertise</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121212] leading-tight">
                Our Work.
              </h1>
              <p className="text-sm sm:text-base text-[#5C5C5A] mt-2 max-w-xl">
                A visual showcase across cinematography, editorial fashion, architecture,
                product stills, and packaging design. Click any frame to inspect in full resolution.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenShowreel}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#121212] rounded-full hover:bg-black transition-all shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>2026 Showreel</span>
              </button>
            </div>
          </div>

          {/* Filter Bar + Layout Toggle */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                    activeFilter === opt.id
                      ? 'bg-[#121212] text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Layout Mode Toggles & Counter */}
            <div className="flex items-center gap-4 text-xs font-mono text-stone-500">
              <span>{filteredPhotos.length} Visual Records</span>
              <div className="flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200">
                <button
                  onClick={() => setLayoutMode('editorial')}
                  className={`p-1 rounded ${
                    layoutMode === 'editorial' ? 'bg-white text-[#121212] shadow-2xs' : 'text-stone-400'
                  }`}
                  title="Editorial Staggered Layout"
                >
                  <Columns className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLayoutMode('compact')}
                  className={`p-1 rounded ${
                    layoutMode === 'compact' ? 'bg-white text-[#121212] shadow-2xs' : 'text-stone-400'
                  }`}
                  title="Uniform Grid Layout"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Standout Media Grid (NO TEXT on cards - pure visual immersion) */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-6">
        {layoutMode === 'editorial' ? (
          /* Editorial Asymmetric Staggered Masonry Layout */
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPhotos.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-stone-200 border border-stone-300/80 shadow-xs hover:shadow-xl transition-all duration-500"
              >
                {/* Pure Image with native high-resolution framing */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />

                {/* Sleek Minimalist Glass Hover Lens */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />

                {/* Micro floating corner inspect button on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#121212] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Minimalist Micro Frame Number in bottom-left */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-white bg-black/60 backdrop-blur-md rounded">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Compact Dynamic Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-stone-200 border border-stone-300/80 shadow-xs hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />

                {/* Sleek hover veil */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />

                {/* Floating inspect icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#121212] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-white bg-black/60 backdrop-blur-md rounded">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state fallback */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-24 bg-white rounded-2xl border border-stone-200">
            <p className="text-sm text-stone-500">No media assets found for this category filter.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-3 text-xs font-semibold text-[#121212] underline"
            >
              Reset filter
            </button>
          </div>
        )}
      </section>

      {/* 3. Inquiry Bar */}
      <section className="py-16 bg-white border-t border-[#121212]/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Commission a Production
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#121212]">
            Want Custom Visuals Like These For Your Brand?
          </h2>
          <p className="text-sm text-[#5C5C5A] max-w-md mx-auto">
            Our multi-camera cinema crews and medium-format still photographers are available
            across India and worldwide.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#121212] rounded-full hover:bg-black transition-all shadow-sm"
            >
              <span>Book Your Shoot</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Fullscreen Lightbox Media Viewer */}
      <GalleryLightbox
        items={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigateIndex={(idx) => setLightboxIndex(idx)}
        onInquire={() => onNavigate('contact')}
      />
    </div>
  );
};
