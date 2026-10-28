import React, { useState, useEffect } from 'react';
import { PageId, ProjectCaseStudy } from '../types';
import {
  HERO_IMAGE,
  CAR_REEL_IMAGE,
  FASHION_IMAGE,
  STUDIO_IMAGE,
  BRAND_IMAGE,
  NIGHT_RAIN_IMAGE,
  RESORT_IMAGE,
  PERFUME_IMAGE,
  WEAVER_PORTRAIT_IMAGE,
  PROJECTS_DATA,
  AGENCY_STATS,
  SERVICES_DATA,
  CLIENT_TESTIMONIALS,
} from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  Play,
  ArrowUpRight,
  ArrowRight,
  Camera,
  Film,
  TrendingUp,
  Share2,
  PenTool,
  CheckCircle2,
  MapPin,
  Quote,
  Maximize2,
  Sliders,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenShowreel: () => void;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenShowreel,
  onOpenCaseStudy,
}) => {
  const [activeServiceHover, setActiveServiceHover] = useState<number>(0);
  const [timecode, setTimecode] = useState('00:04:18:12');

  // Simulated live cinema timecode
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const frames = String(Math.floor(Math.random() * 24)).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      setTimecode(`${hours}:${minutes}:${seconds}:${frames}`);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const serviceImages = [
    CAR_REEL_IMAGE,
    FASHION_IMAGE,
    HERO_IMAGE,
    STUDIO_IMAGE,
    BRAND_IMAGE,
  ];

  // Unique 3-Column Marquee Tiles with Proexpertise Assets & Palette
  const col1Tiles = [
    { type: 'photo', img: CAR_REEL_IMAGE, title: 'High Altitude GT Commercial' },
    { type: 'color', bg: 'bg-[#EF5D44]', tag: 'CINEMA LAB' },
    { type: 'photo', img: FASHION_IMAGE, title: 'Sculptural Raw Silk' },
    { type: 'color', bg: 'bg-[#151515]', tag: '8K SENSOR' },
    { type: 'photo', img: RESORT_IMAGE, title: 'Twilight Alpine Sanctuary' },
  ];

  const col2Tiles = [
    { type: 'color', bg: 'bg-[#FCDD71]', tag: 'KANGRA HP' },
    { type: 'photo', img: NIGHT_RAIN_IMAGE, title: 'Mountain Rain Sequence' },
    { type: 'color', bg: 'bg-[#151515]', tag: 'MASTER LUT' },
    { type: 'photo', img: PERFUME_IMAGE, title: 'Aura Fragrance Still' },
    { type: 'color', bg: 'bg-[#EF5D44]', tag: 'PRODUCTIONS' },
  ];

  const col3Tiles = [
    { type: 'color', bg: 'bg-[#9FD5F7]', tag: 'ANAMORPHIC' },
    { type: 'photo', img: BRAND_IMAGE, title: 'Botanical Packaging Design' },
    { type: 'color', bg: 'bg-[#F9F6F1] border border-stone-300', tag: 'PRINT GRADE' },
    { type: 'photo', img: WEAVER_PORTRAIT_IMAGE, title: 'Himalayan Handloom Master' },
    { type: 'photo', img: HERO_IMAGE, title: 'Peak Camera Crew Rigging' },
  ];

  // Duplicate for seamless 50% loop
  const col1Loop = [...col1Tiles, ...col1Tiles];
  const col2Loop = [...col2Tiles, ...col2Tiles];
  const col3Loop = [...col3Tiles, ...col3Tiles];

  return (
    <div className="w-full overflow-hidden bg-[#FAFAF8]">
      {/* 1. UNIQUE HERO SECTION with Staggered Multi-Column Mosaic Animation */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center pt-24 sm:pt-28 lg:pt-10 pb-16 lg:pb-24 border-b border-[#121212]/10 overflow-hidden bg-gradient-to-b from-[#FAFAF8] via-[#F6F6F2] to-[#F1F1EB]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#12121206_1px,transparent_1px),linear-gradient(to_bottom,#12121206_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content (Col 1-6): Typographic Engine */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              {/* Studio Telemetry Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 shadow-2xs self-start text-xs font-mono">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="font-bold text-stone-900 tracking-wider text-[11px] uppercase">
                  PROEXPERTISE PRODUCTIONS
                </span>
                <span className="text-stone-300">/</span>
                <span className="text-stone-500 text-[11px]">
                  REC [{timecode}]
                </span>
              </div>

              {/* Bold Statement Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121212] leading-[1.05] [text-wrap:balance]">
                An Archive of <span className="font-serif-italic font-normal underline decoration-stone-300 underline-offset-8">Light</span>, Motion & Impact.
              </h1>

              {/* Lead Body */}
              <p className="text-base sm:text-lg text-[#5C5C5A] leading-relaxed max-w-xl">
                Proexpertise Productions merges world-class cinema cameras, editorial fashion stills,
                and scalable performance marketing—curated from the mountain valleys of Kangra, Himachal Pradesh
                and broadcast globally.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#121212] rounded-full hover:bg-black transition-all shadow-md active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="absolute inset-0 bg-stone-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </button>

                <button
                  onClick={() => onNavigate('work')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-[#121212] bg-white border border-stone-300 rounded-full hover:border-black hover:bg-stone-50 transition-all shadow-2xs"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Hardware Strip */}
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-stone-500">
                <span>Kangra, HP 176225</span>
                <span>·</span>
                <span>ARRI & RED 8K</span>
                <span>·</span>
                <span>Hasselblad 100MP</span>
              </div>
            </div>

            {/* Right Media (Col 7-12): Continuous Column Marquee (Hover to Pause All) */}
            <div className="mosaic-container lg:col-span-6 relative h-[480px] sm:h-[580px] lg:h-[620px] overflow-hidden rounded-3xl border border-stone-300/80 shadow-2xl bg-[#EBEAE5] cursor-default">
              {/* Fade scrims on top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#EBEAE5] via-[#EBEAE5]/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#EBEAE5] via-[#EBEAE5]/80 to-transparent z-20 pointer-events-none" />

              {/* The 3 Columns Grid */}
              <div className="grid grid-cols-3 gap-3 p-3 h-full">
                {/* Column 1: Moves Down */}
                <div className="flex flex-col gap-3 animate-col-down">
                  {col1Loop.map((tile, i) => (
                    <div
                      key={`col1-${i}`}
                      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xs group/tile flex-shrink-0"
                    >
                      {tile.type === 'photo' && tile.img ? (
                        <img
                          src={tile.img}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover/tile:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-full h-full ${tile.bg} flex items-center justify-center p-3 text-center`}>
                          <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">
                            {tile.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Column 2: Moves Up */}
                <div className="flex flex-col gap-3 animate-col-up">
                  {col2Loop.map((tile, i) => (
                    <div
                      key={`col2-${i}`}
                      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xs group/tile flex-shrink-0"
                    >
                      {tile.type === 'photo' && tile.img ? (
                        <img
                          src={tile.img}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover/tile:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-full h-full ${tile.bg} flex items-center justify-center p-3 text-center`}>
                          <span className="font-mono text-[10px] font-bold text-[#121212] tracking-widest uppercase">
                            {tile.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Column 3: Moves Down */}
                <div className="flex flex-col gap-3 animate-col-down">
                  {col3Loop.map((tile, i) => (
                    <div
                      key={`col3-${i}`}
                      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xs group/tile flex-shrink-0"
                    >
                      {tile.type === 'photo' && tile.img ? (
                        <img
                          src={tile.img}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover/tile:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-full h-full ${tile.bg} flex items-center justify-center p-3 text-center`}>
                          <span className="font-mono text-[10px] font-bold text-[#121212] tracking-widest uppercase">
                            {tile.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none flex items-center justify-between text-[11px] font-mono text-stone-700 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-300">
                <span>HOVER TO PAUSE MOTION</span>
                <span className="flex items-center gap-1 font-bold">
                  <span>9 PRODUCTION VISUALS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Full-Width Agency KPI Strip Below Split */}
          <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENCY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-stone-200 shadow-2xs hover:border-black transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#121212] font-mono-num block">
                  {stat.value}
                </span>
                <span className="text-xs text-[#5C5C5A] mt-1 font-medium leading-relaxed block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Kinetic Ticker Ribbon */}
      <section className="py-4 bg-[#121212] text-white overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite]">
          <div className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            <span>CINEMATOGRAPHY</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>EDITORIAL PHOTOGRAPHY</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>DIGITAL MARKETING</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>SOCIAL MEDIA REELS</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>GRAPHIC DESIGN & PACKAGING</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>EST. KANGRA, HIMACHAL PRADESH</span>
            <span className="text-amber-400 font-bold">★</span>
          </div>
          <div className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase ml-8" aria-hidden="true">
            <span>CINEMATOGRAPHY</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>EDITORIAL PHOTOGRAPHY</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>DIGITAL MARKETING</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>SOCIAL MEDIA REELS</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>GRAPHIC DESIGN & PACKAGING</span>
            <span className="text-amber-400 font-bold">★</span>
            <span>EST. KANGRA, HIMACHAL PRADESH</span>
            <span className="text-amber-400 font-bold">★</span>
          </div>
        </div>
      </section>

      {/* 3. Interactive 5 Disciplines Showcase (Unseen.co / Shiftbrain style Hover Preview) */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#121212]/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2">
                Core Production Pillars
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#121212]">
                What We Do.
              </h2>
            </div>
            <p className="text-sm text-[#5C5C5A] max-w-md">
              Hover to preview each discipline in action. Everything from camera sensor to digital conversion funnels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: 5 Rows */}
            <div className="lg:col-span-7 divide-y divide-stone-200 border-y border-stone-200">
              {SERVICES_DATA.map((service, idx) => {
                const isActive = activeServiceHover === idx;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveServiceHover(idx)}
                    onClick={() => onNavigate('services', service.id)}
                    className={`group py-6 sm:py-8 px-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between gap-4 ${
                      isActive ? 'bg-[#FAFAF8] shadow-2xs' : 'hover:bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-5 sm:gap-8">
                      <span className={`font-mono text-sm font-bold transition-colors ${
                        isActive ? 'text-[#121212]' : 'text-stone-400'
                      }`}>
                        {service.num}
                      </span>
                      <div>
                        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-transform duration-300 ${
                          isActive ? 'text-[#121212] translate-x-1' : 'text-stone-700'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-xs text-[#5C5C5A] mt-1 max-w-md">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-xs font-mono text-stone-400 hidden sm:inline">
                        {service.badge}
                      </span>
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#121212] text-white border-[#121212] scale-105'
                          : 'border-stone-300 text-stone-500 group-hover:border-black group-hover:text-black'
                      }`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Dynamic Interactive Preview Canvas */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-300 shadow-xl bg-stone-900 group">
                <img
                  src={serviceImages[activeServiceHover]}
                  alt="Service Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300 block mb-1">
                      {SERVICES_DATA[activeServiceHover].badge}
                    </span>
                    <h4 className="text-lg font-bold text-white leading-tight">
                      {SERVICES_DATA[activeServiceHover].title}
                    </h4>
                    <span className="text-xs font-mono text-stone-300 mt-1 block">
                      {SERVICES_DATA[activeServiceHover].startingRange}
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigate('services', SERVICES_DATA[activeServiceHover].id)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-lg hover:bg-stone-200 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Master Before & After Graded Slider */}
      <section className="py-20 md:py-28 bg-[#FAFAF8] border-b border-[#121212]/10">
        <div className="max-w-7xl mx-auto px-6">
          <BeforeAfterSlider image={CAR_REEL_IMAGE} />
        </div>
      </section>

      {/* 5. Kangra Sanctuary / Himalayan Heritage Feature */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#121212]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-stone-200 shadow-lg">
                <img
                  src={STUDIO_IMAGE}
                  alt="Proexpertise Productions Himalayan Studio in Kangra"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-mono text-stone-300 block">Studio & Edit Suites</span>
                  <p className="text-sm font-semibold">Kangra Valley · Elevation 733m · Himachal Pradesh 176225</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase font-mono text-stone-500">
                <MapPin className="w-3.5 h-3.5 text-stone-700" />
                <span>Geographic Soul & Global Perspective</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#121212] leading-tight">
                Quiet Valleys, Towering Peaks, Undiluted Focus.
              </h2>

              <p className="text-sm sm:text-base text-[#5C5C5A] leading-relaxed">
                Operating out of Kangra, Himachal Pradesh gives our productions an undeniable
                advantage. Away from urban noise, our directors and artists view projects with
                pristine clarity, natural lighting intuition, and relentless dedication to the craft.
              </p>

              <div className="space-y-3 pt-2 text-sm text-stone-700">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>On-demand aerial permits across the Western Himalayas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Calibrated DaVinci Resolve color grading & sound suites</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rapid dispatch to Delhi, Mumbai, Chandigarh, and Pan-India sets</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#121212] hover:text-stone-600 underline underline-offset-4"
                >
                  Learn Our Story & Studio Ethos
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Client Proof & Testimonials */}
      <section className="py-20 md:py-28 bg-[#FAFAF8] border-b border-[#121212]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2">
              Verified Client Collaborations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#121212]">
              Trusted by Founders & Creative Directors.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLIENT_TESTIMONIALS.map((test, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <Quote className="w-8 h-8 text-stone-300 mb-4" />
                  <p className="text-sm text-[#121212] leading-relaxed mb-6 font-serif-italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <h4 className="text-sm font-bold text-[#121212]">{test.author}</h4>
                  <p className="text-xs text-stone-500">{test.position}, {test.company}</p>
                  <span className="text-[11px] font-mono text-stone-400 mt-1 block">
                    {test.projectType} · {test.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-stone-400">
            Let’s Create Together
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Have an Upcoming Commercial, Shoot, or Brand Launch?
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed">
            From single commercial films to complete 360° digital retainers, our cameras and creative
            minds are ready. Let’s talk numbers and vision.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-wider uppercase text-[#121212] bg-white rounded-full hover:bg-stone-100 transition-all shadow-md active:scale-95"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:hello@proexpertise.in"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-wider uppercase text-white bg-transparent border border-white/30 rounded-full hover:bg-white/10 transition-all"
            >
              hello@proexpertise.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
