import React, { useState, useRef } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  image: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  image,
  title = 'Master Color Grading & Sensor Dynamic Range',
  subtitle = 'Drag the slider to compare raw ARRI LogC flat profile vs. final calibrated cinema master grade.'
}) => {
  const [sliderPosition, setSliderPosition] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full bg-[#FFFFFF] rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-700" />
            <span>Post-Production Craft</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#121212]">
            {title}
          </h3>
          <p className="text-sm text-[#5C5C5A] mt-1 max-w-2xl">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-medium text-stone-600 shrink-0">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-stone-100 rounded-md">
            <span className="w-2 h-2 rounded-full bg-stone-400"></span>
            Raw LogC Profile
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-[#121212] text-white rounded-md">
            <Sparkles className="w-3 h-3 text-amber-300" />
            Graded 4K Master
          </span>
        </div>
      </div>

      {/* Slider Viewport */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          isDragging.current = true;
          handleMove(e.clientX);
        }}
        onMouseUp={() => {
          isDragging.current = false;
        }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-72 md:h-[460px] w-full rounded-xl overflow-hidden cursor-ew-resize select-none bg-stone-900 border border-stone-200"
      >
        {/* Layer 1: Graded Cinema Master (Full Background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={image}
            alt="Master Graded Footage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded tracking-wide">
            MASTER GRADED (REC.709)
          </div>
        </div>

        {/* Layer 2: Raw LogC (Clipped Left by Slider Position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full">
            <img
              src={image}
              alt="Raw Sensor LOG Flat Footage"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                filter: 'saturate(0.35) contrast(0.7) brightness(1.25) sepia(0.08)',
              }}
            />
            <div className="absolute bottom-4 left-4 bg-stone-900/80 backdrop-blur-md text-stone-200 text-[11px] font-mono px-3 py-1 rounded tracking-wide">
              FLAT SENSOR LOGC
            </div>
          </div>
        </div>

        {/* Draggable Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-[#121212] rounded-full shadow-lg flex items-center justify-center border border-stone-300">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
