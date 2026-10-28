import React, { useState, useEffect } from 'react';
import { PageId, ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data/mockData';
import { InteractiveEstimator } from '../components/InteractiveEstimator';
import {
  Film,
  Camera,
  TrendingUp,
  Share2,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  Workflow
} from 'lucide-react';

interface ServicesPageProps {
  initialServiceId?: string;
  onNavigate: (page: PageId) => void;
  onSelectEstimate: (scopeText: string, budgetBracket: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialServiceId,
  onNavigate,
  onSelectEstimate,
}) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>(
    (initialServiceId as ServiceCategory) || 'cinematography'
  );

  useEffect(() => {
    if (initialServiceId) {
      setActiveTab(initialServiceId as ServiceCategory);
      const el = document.getElementById(`service-section-${initialServiceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialServiceId]);

  const serviceIcons: Record<ServiceCategory, React.ReactNode> = {
    cinematography: <Film className="w-4 h-4" />,
    photography: <Camera className="w-4 h-4" />,
    'digital-marketing': <TrendingUp className="w-4 h-4" />,
    'social-media': <Share2 className="w-4 h-4" />,
    'graphic-design': <PenTool className="w-4 h-4" />,
  };

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Creative Treatment',
      desc: 'We define the narrative arc, visual tone, audience hooks, script revisions, and production logistics.',
    },
    {
      step: '02',
      title: 'Pre-Production & Storyboarding',
      desc: 'Frame-by-frame sketches, location scouting in Himachal or nationwide sets, crew rigging, and casting.',
    },
    {
      step: '03',
      title: 'Principal Production & Capture',
      desc: 'On-set filming or photography with cinema sensor cameras, master lenses, stabilized gimbals, and calibrated lighting.',
    },
    {
      step: '04',
      title: 'Post-Mastering & Growth Distribution',
      desc: 'DaVinci Resolve color timing, sound design, vertical 9:16 cutdowns, ad campaign setup, and audience tracking.',
    },
  ];

  return (
    <div className="w-full bg-[#FAFAF8]">
      {/* 1. Header Banner */}
      <section className="pt-16 pb-14 border-b border-[#121212]/10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
              <span>Capabilities & Production Matrix</span>
              <span aria-hidden="true">·</span>
              <span>Proexpertise</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121212] leading-tight">
              Cinematic Vision Meets Digital Scalability.
            </h1>
            <p className="text-base sm:text-lg text-[#5C5C5A] mt-4 leading-relaxed">
              We provide five interconnected creative services designed to elevate brands from regional
              notoriety to global prestige. Explore our technical deliverables, camera packages, and workflows.
            </p>
          </div>

          {/* Quick Filter Navigation Bar */}
          <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-stone-200">
            {SERVICES_DATA.map((svc) => (
              <button
                key={svc.id}
                onClick={() => {
                  setActiveTab(svc.id);
                  const el = document.getElementById(`service-section-${svc.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === svc.id
                    ? 'bg-[#121212] text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {serviceIcons[svc.id]}
                <span>{svc.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Deep-Dives */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 space-y-24">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={`service-section-${service.id}`}
              className="scroll-mt-28 bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Visual Preview Side */}
                <div
                  className={`lg:col-span-5 relative ${
                    isEven ? 'lg:order-last' : 'lg:order-first'
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200 shadow-md bg-stone-900 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-mono tracking-wider bg-white/20 backdrop-blur-md px-2 py-0.5 rounded">
                        {service.badge}
                      </span>
                      <h4 className="text-base font-bold mt-1 text-white">{service.title} In Production</h4>
                    </div>
                  </div>

                  {/* Starting Investment Callout */}
                  <div className="mt-4 p-4 bg-[#FAFAF8] rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-stone-500 font-mono block">Standard Production Scope</span>
                      <span className="font-bold text-stone-900 text-sm">{service.startingRange}</span>
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-3.5 py-2 bg-[#121212] text-white font-semibold rounded-lg hover:bg-black transition-colors"
                    >
                      Book Shoot
                    </button>
                  </div>
                </div>

                {/* Content Breakdown Side */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono font-bold text-stone-400">
                        {service.num}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                        Proexpertise Discipline
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#121212]">
                      {service.title}
                    </h2>
                    <p className="text-sm font-semibold text-stone-800 mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-[#5C5C5A] mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#121212] flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-stone-700" />
                      What We Deliver
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#5C5C5A] bg-[#FAFAF8] p-2.5 rounded-lg border border-stone-200/60"
                        >
                          <span className="text-stone-400 font-mono text-[10px] mt-0.5">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware & Software Rigging */}
                  <div className="pt-2">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#121212] flex items-center gap-2 mb-3">
                      <Cpu className="w-4 h-4 text-stone-700" />
                      Gear & Technical Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.equipment.map((eq, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-md border border-stone-200 font-mono"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4-Step Process for this service */}
                  <div className="pt-4 border-t border-stone-100">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#121212] flex items-center gap-2 mb-3">
                      <Layers className="w-4 h-4 text-stone-700" />
                      Production Workflow
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C5C5A]">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 font-mono text-[10px] flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. The 4-Stage Agency Production Framework */}
      <section className="py-20 bg-white border-y border-[#121212]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#121212]">
              The 4-Stage Production Standard.
            </h2>
            <p className="text-sm text-[#5C5C5A] mt-2">
              How we take projects from a raw spark in the Kangra studio to polished global broadcast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((wf) => (
              <div
                key={wf.step}
                className="p-6 bg-[#FAFAF8] rounded-xl border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#121212] font-mono tracking-tight block mb-4">
                    {wf.step}
                  </span>
                  <h3 className="text-base font-bold text-[#121212] mb-2">{wf.title}</h3>
                  <p className="text-xs text-[#5C5C5A] leading-relaxed">{wf.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-stone-200 text-[11px] font-mono text-stone-400">
                  Phase {wf.step} Review
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Scope & Cost Estimator */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <InteractiveEstimator
          onApplyEstimate={(scope, budget) => {
            onSelectEstimate(scope, budget);
            onNavigate('contact');
          }}
        />
      </section>
    </div>
  );
};
