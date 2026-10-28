import React, { useEffect, useState } from 'react';
import { GalleryItem } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
  onInquire: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigateIndex,
  onInquire,
}) => {
  const [showMeta, setShowMeta] = useState(true);

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onNavigateIndex((currentIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft') {
        onNavigateIndex((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, items.length, onClose, onNavigateIndex]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200 select-none">
      {/* Top Floating Controls */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex items-center gap-3 text-white">
          <span className="font-mono text-xs tracking-wider text-stone-400">
            {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <span className="text-stone-600">·</span>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-300">
            {current.serviceLabel}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowMeta(!showMeta)}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
              showMeta
                ? 'bg-white/20 text-white border-white/30'
                : 'text-stone-400 border-white/10 hover:text-white'
            }`}
          >
            {showMeta ? 'Hide Details' : 'Show Details'}
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Center Stage */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
        <img
          src={current.image}
          alt={current.title}
          referrerPolicy="no-referrer"
          className="max-h-[82vh] max-w-[90vw] object-contain shadow-2xl transition-all duration-300"
        />

        {/* Previous Button */}
        <button
          onClick={() => onNavigateIndex((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all duration-200 z-20 group"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onNavigateIndex((currentIndex + 1) % items.length)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all duration-200 z-20 group"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Floating Metadata HUD */}
      {showMeta && (
        <div className="absolute bottom-6 left-6 right-6 z-30 pointer-events-auto flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:px-6 bg-black/70 backdrop-blur-xl border border-white/15 rounded-2xl text-white max-w-5xl mx-auto">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-0.5">
              <span>{current.tag}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-stone-500" />
                {current.location}
              </span>
            </div>
            <h3 className="text-base font-bold text-white">{current.title}</h3>
            <p className="text-xs text-stone-400 mt-0.5">Client: {current.client} ({current.year})</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col text-right font-mono text-xs text-stone-300">
              <span className="text-[10px] uppercase text-stone-500">Capture Hardware</span>
              <span>{current.camera}</span>
              <span className="text-[10px] text-stone-400">{current.lens}</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-full hover:bg-stone-200 transition-colors shrink-0"
            >
              <span>Inquire This Style</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom Thumbnail Strip */}
      <div className="hidden lg:flex absolute bottom-24 left-1/2 -translate-x-1/2 gap-2 p-2 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 z-20">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => onNavigateIndex(idx)}
            className={`relative w-12 h-9 rounded-md overflow-hidden transition-all ${
              currentIndex === idx
                ? 'ring-2 ring-white scale-110 opacity-100'
                : 'opacity-40 hover:opacity-80'
            }`}
          >
            <img
              src={item.image}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
