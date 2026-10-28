import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { CAR_REEL_IMAGE, HERO_IMAGE } from '../data/mockData';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: '01. Himalayan Pass · Anamorphic Chase', time: '00:15', img: CAR_REEL_IMAGE },
    { title: '02. Mountain Rigging · Alpine Ascent', time: '00:45', img: HERO_IMAGE },
    { title: '03. Atmospheric Lighting & Tone', time: '01:20', img: CAR_REEL_IMAGE },
  ];

  // Keydown listener for ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Simulate progress when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 250);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#111111] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-stone-300">
              Proexpertise Productions · 2026 Director Showreel [4K UHD]
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close showreel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={chapters[activeChapter].img}
            alt="Showreel Preview"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isPlaying ? 'scale-105 filter contrast-105' : 'scale-100'
            }`}
          />

          {/* Letterbox Cinema Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Play/Pause Center Indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:scale-110 hover:bg-white/30 transition-all"
            aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-white" />
            ) : (
              <Play className="w-8 h-8 fill-white ml-1" />
            )}
          </button>

          {/* Bottom Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
            {/* Scrubber bar */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = ((e.clientX - rect.left) / rect.width) * 100;
                setProgress(Math.max(0, Math.min(100, pos)));
              }}
              className="h-1.5 w-full bg-white/20 rounded-full cursor-pointer relative overflow-hidden group/bar hover:h-2 transition-all"
            >
              <div
                className="h-full bg-white transition-all duration-100 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Playback Stats & Chapter Bar */}
            <div className="flex items-center justify-between text-xs text-stone-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isMuted ? 'Muted' : 'Audio On'}</span>
                </button>
                <span className="font-mono text-stone-400">
                  {Math.floor((progress / 100) * 102)}s / 01:42 (24fps RAW)
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-stone-300">
                  Shot on ARRI Alexa Mini LF & Cooke Anamorphics
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reel Chapter Selector Bar */}
        <div className="p-4 bg-[#181818] border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {chapters.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveChapter(idx);
                setProgress(idx * 33);
                setIsPlaying(true);
              }}
              className={`flex items-center gap-3 p-2 rounded-xl text-left text-xs transition-all ${
                activeChapter === idx
                  ? 'bg-white/15 text-white border border-white/20'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
              }`}
            >
              <img
                src={ch.img}
                alt={ch.title}
                referrerPolicy="no-referrer"
                className="w-12 h-8 rounded-lg object-cover"
              />
              <div className="truncate">
                <p className="font-medium text-white truncate">{ch.title}</p>
                <p className="text-[10px] text-stone-400">{ch.time}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
