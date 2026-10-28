import React from 'react';
import { PageId } from '../types';
import {
  STUDIO_IMAGE,
  HERO_IMAGE,
  CAR_REEL_IMAGE,
  TEAM_MEMBERS,
  AGENCY_STATS,
  LOGO_URL,
} from '../data/mockData';
import {
  MapPin,
  Camera,
  Layers,
  Heart,
  Award,
  ArrowRight,
  Shield,
  Eye,
  Sliders
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Light as Architecture',
      desc: 'We never treat lighting as an afterthought. Every key, rim, and ambient diffusion is sculpted to direct the emotional resonance of the narrative.',
      icon: <Eye className="w-5 h-5 text-stone-800" />,
    },
    {
      title: 'Himalayan Discipline',
      desc: 'High-altitude production in Himachal demands uncompromising precision, battery care, weather prediction, and physical grit. We bring that discipline to every set.',
      icon: <Shield className="w-5 h-5 text-stone-800" />,
    },
    {
      title: 'Art Meets Performance',
      desc: 'Beautiful films that generate zero business value are half-measures. We align artistic cinematography with clear digital acquisition funnels and audience retention.',
      icon: <Sliders className="w-5 h-5 text-stone-800" />,
    },
    {
      title: 'Uncompromising Craft',
      desc: 'Zero shortcuts in color grading, audio foley, font kerning, or pixel alignment. If it bears our signature, it stands proud alongside international boutique studios.',
      icon: <Award className="w-5 h-5 text-stone-800" />,
    },
  ];

  const gearVault = [
    { category: 'Cinema Cameras', items: 'ARRI Alexa Mini LF, RED V-Raptor 8K VV, Sony FX6 Cinema Line' },
    { category: 'Optics & Glass', items: 'Cooke Anamorphic /i Full Frame Plus, Atlas Orion T2.0, Sony G-Master Prime Suite' },
    { category: 'Stabilization & Aerial', items: 'DJI Ronin 4D 6K, DJI Ronin 2 3-Axis Gimbal, DJI Inspire 3 X9-8K Air Cinema' },
    { category: 'Lighting & Grip', items: 'Aputure 1200d Pro, 600c Full Color, Nanlite Pavotube II, Matthews C-Stands & Booms' },
    { category: 'Audio & Monitoring', items: 'Sennheiser MKH 416 Boom, DJI Mic 2 32-Bit Float, SmallHD Cine 7 Wireless Monitors' },
    { category: 'Post & Grading Lab', items: 'DaVinci Resolve Studio 19 Advanced Panels, Eizo ColorEdge 4K Calibrated Displays' },
  ];

  return (
    <div className="w-full bg-[#FAFAF8]">
      {/* 1. Hero Header */}
      <section className="pt-16 pb-16 border-b border-[#121212]/10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
              <span>Our Origin & Philosophy</span>
              <span aria-hidden="true">·</span>
              <span>Kangra, HP 176225</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121212] leading-tight">
              Rooted in the Himalayas. Built for the Global Stage.
            </h1>
            <p className="text-base sm:text-lg text-[#5C5C5A] mt-4 leading-relaxed">
              Proexpertise Productions is an independent media house and digital laboratory established
              in Kangra, Himachal Pradesh. We bring cinematic depth to commercials, high-fashion editorials,
              and data-driven growth.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Studio Sanctuary Spotlight */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-900">
              <img
                src={STUDIO_IMAGE}
                alt="Proexpertise Kangra Studio overlooking Himalayan peaks"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-300">
                    Production Headquarters & Lab
                  </span>
                  <p className="text-sm font-bold">Kangra Valley, Himachal Pradesh 176225</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-stone-300 bg-white/20 backdrop-blur-md px-3 py-1 rounded">
                  <MapPin className="w-3 h-3 text-amber-300" />
                  <span>32.1° N, 76.2° E</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
              <span>Why Kangra?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#121212] leading-tight">
              The Stillness of the Valley Meets High-Octane Output.
            </h2>
            <p className="text-sm text-[#5C5C5A] leading-relaxed">
              Most creative agencies are trapped in metropolitan noise, recycling identical creative
              templates. Our studio in Kangra is surrounded by pine forests, snow-clad Dhauladhar
              peaks, and pure silence.
            </p>
            <p className="text-sm text-[#5C5C5A] leading-relaxed">
              This spatial freedom allows our directors, colorists, and growth architects to focus
              deeply on client narratives without distraction. Yet with rapid road, rail, and flight
              links from Kangra Airport (DHM), we deploy crew and equipment anywhere in India
              within hours.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-stone-600">
              <span>Established Studio</span>
              <span aria-hidden="true">·</span>
              <span>Kangra, HP 176225</span>
              <span aria-hidden="true">·</span>
              <span>hello@proexpertise.in</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Philosophy & Values */}
      <section className="py-20 bg-white border-y border-[#121212]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#121212]">
              What We Stand For on Every Shoot.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAFAF8] rounded-xl border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center mb-4 shadow-2xs">
                    {val.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#121212] mb-2">{val.title}</h3>
                  <p className="text-xs text-[#5C5C5A] leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Core Craftspeople */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2">
            The Makers
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#121212]">
            Directors, Designers & Growth Strategists.
          </h2>
          <p className="text-sm text-[#5C5C5A] mt-2">
            Every client works directly with discipline leads, not junior account handlers.
          </p>
        </div>

        {/* 3-in-a-row Clean Profile Cards per Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden p-6 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-100 mb-5 border border-stone-200">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {member.discipline}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#121212]">{member.name}</h3>
                <p className="text-xs font-semibold text-stone-600 mt-0.5">{member.role}</p>

                <p className="text-xs text-[#5C5C5A] mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 text-[11px] font-mono text-stone-500">
                {member.credentials}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Production Hardware & Gear Vault */}
      <section className="py-20 bg-white border-y border-[#121212]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2">
                In-House Equipment Ecosystem
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#121212]">
                Our Technical Arsenal.
              </h2>
            </div>
            <p className="text-xs text-stone-500 max-w-sm">
              We own and maintain our cinema camera bodies, anamorphic lenses, lighting packages, and
              monitoring kits in Kangra, ensuring zero third-party rental bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearVault.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#FAFAF8] rounded-xl border border-stone-200/90 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#121212] block mb-2">
                    {item.category}
                  </span>
                  <p className="text-xs font-mono text-[#5C5C5A] leading-relaxed">
                    {item.items}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 text-[10px] text-stone-400 font-mono">
                  Calibrated & In-Stock
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#121212]">
          Let’s Discuss Your Next Creative Vision.
        </h2>
        <p className="text-sm text-[#5C5C5A] max-w-md mx-auto">
          Visit our studio in Kangra, Himachal Pradesh or schedule an exploratory video briefing.
        </p>
        <div className="pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#121212] rounded-full hover:bg-black transition-all shadow-sm"
          >
            Connect With Directors
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
