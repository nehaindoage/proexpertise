import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface InteractiveEstimatorProps {
  onApplyEstimate: (scopeText: string, suggestedBudget: string) => void;
}

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({ onApplyEstimate }) => {
  const [selectedService, setSelectedService] = useState<'cinematography' | 'photography' | 'digital-marketing' | 'social-media' | 'graphic-design'>('cinematography');
  const [scopeTier, setScopeTier] = useState<'essential' | 'commercial' | 'flagship'>('commercial');
  const [addOns, setAddOns] = useState<string[]>(['drone', 'color-grading']);

  const services = [
    { id: 'cinematography', label: 'Cinematography', base: 180000 },
    { id: 'photography', label: 'Photography', base: 75000 },
    { id: 'digital-marketing', label: 'Digital Marketing', base: 55000 },
    { id: 'social-media', label: 'Social Media Marketing', base: 65000 },
    { id: 'graphic-design', label: 'Graphic Designing', base: 80000 },
  ] as const;

  const tiers = [
    { id: 'essential', label: 'Essential Tier', multiplier: 0.8, description: '1-Day Shoot / Single Sprint deliverable set' },
    { id: 'commercial', label: 'Commercial Tier', multiplier: 1.0, description: 'Standard Multi-cam / Comprehensive Campaign (Recommended)' },
    { id: 'flagship', label: 'Flagship 360° Tier', multiplier: 1.8, description: 'High-Altitude / Multi-location / Full Master Suite' },
  ] as const;

  const availableAddOns = [
    { id: 'drone', label: 'Himalayan High-Altitude Drone Aerials & FPV', cost: 25000 },
    { id: 'color-grading', label: 'Master DaVinci Resolve Film Emulation & Sound Foley', cost: 30000 },
    { id: 'vertical-reels', label: '6x Optimized 9:16 Vertical Viral Cutdowns', cost: 20000 },
    { id: 'expedited', label: 'Expedited 7-Day Express Delivery Turnaround', cost: 35000 },
  ];

  const toggleAddOn = (id: string) => {
    setAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const baseServicePrice = services.find((s) => s.id === selectedService)?.base || 100000;
  const tierMultiplier = tiers.find((t) => t.id === scopeTier)?.multiplier || 1.0;
  const addOnsTotal = addOns.reduce((sum, id) => {
    const item = availableAddOns.find((a) => a.id === id);
    return sum + (item ? item.cost : 0);
  }, 0);

  const estimatedTotal = Math.round(baseServicePrice * tierMultiplier + addOnsTotal);

  const getBudgetString = (total: number) => {
    if (total < 150000) return '₹50,000 – ₹1,50,000';
    if (total <= 500000) return '₹1,50,000 – ₹5,00,000';
    if (total <= 1500000) return '₹5,00,000 – ₹15,00,000';
    return '₹15,00,000+';
  };

  const handleApply = () => {
    const serviceName = services.find((s) => s.id === selectedService)?.label;
    const tierName = tiers.find((t) => t.id === scopeTier)?.label;
    const addOnNames = addOns
      .map((id) => availableAddOns.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const summary = `Estimated Scope: ${serviceName} (${tierName}). Add-ons: ${addOnNames || 'None'}. Indicative: ₹${estimatedTotal.toLocaleString('en-IN')}`;
    const budgetBracket = getBudgetString(estimatedTotal);
    onApplyEstimate(summary, budgetBracket);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-stone-200/90 p-6 md:p-10 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
            <Calculator className="w-4 h-4 text-stone-700" />
            <span>Interactive Scope Configurator</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-[#121212]">
            Build Your Production Package
          </h3>
          <p className="text-sm text-[#5C5C5A] mt-1">
            Configure your intended deliverables to calculate an accurate production estimate.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Transparent Pricing · Fixed Project Quote</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Controls Column (Col 1-7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Service */}
          <div>
            <label className="text-xs uppercase tracking-wider font-bold text-stone-700 block mb-3">
              1. Select Primary Discipline
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc.id)}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                    selectedService === svc.id
                      ? 'border-[#121212] bg-[#121212] text-white shadow-xs'
                      : 'border-stone-200 hover:border-stone-400 bg-stone-50/50 text-stone-800'
                  }`}
                >
                  <p className="font-semibold">{svc.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scope Tier */}
          <div>
            <label className="text-xs uppercase tracking-wider font-bold text-stone-700 block mb-3">
              2. Production Scale
            </label>
            <div className="space-y-2">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setScopeTier(tier.id)}
                  className={`w-full p-3.5 text-left rounded-xl border flex items-center justify-between text-xs transition-all ${
                    scopeTier === tier.id
                      ? 'border-[#121212] bg-stone-100/90 text-[#121212]'
                      : 'border-stone-200 hover:border-stone-300 text-stone-600'
                  }`}
                >
                  <div>
                    <span className="font-bold text-sm block text-[#121212]">{tier.label}</span>
                    <span className="text-xs text-stone-500">{tier.description}</span>
                  </div>
                  {scopeTier === tier.id && (
                    <div className="w-5 h-5 rounded-full bg-[#121212] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Add-on Capabilities */}
          <div>
            <label className="text-xs uppercase tracking-wider font-bold text-stone-700 block mb-3">
              3. Specialized Add-ons
            </label>
            <div className="space-y-2">
              {availableAddOns.map((item) => {
                const checked = addOns.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleAddOn(item.id)}
                    className={`w-full p-3 rounded-xl border flex items-center justify-between text-left text-xs transition-all ${
                      checked
                        ? 'border-stone-400 bg-stone-50 text-stone-900 font-medium'
                        : 'border-stone-200 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          checked ? 'bg-[#121212] border-[#121212] text-white' : 'border-stone-300 bg-white'
                        }`}
                      >
                        {checked && <Check className="w-3 h-3" />}
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <span className="font-mono text-stone-600 font-semibold">
                      +₹{item.cost.toLocaleString('en-IN')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Calculation Summary Box (Col 8-12) */}
        <div className="lg:col-span-5 bg-[#FAFAF8] rounded-xl p-6 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500">
                Indicative Estimate
              </span>
              <span className="text-xs font-mono text-stone-400">All India & Global</span>
            </div>

            <div className="py-6">
              <span className="text-xs text-stone-500 font-medium block">Starting Package Around</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight font-mono-num mt-1">
                ₹{estimatedTotal.toLocaleString('en-IN')}
              </div>
              <span className="text-xs text-stone-500 mt-1 block">
                Estimated Budget Bracket: <strong className="text-stone-800">{getBudgetString(estimatedTotal)}</strong>
              </span>
            </div>

            <div className="space-y-2 pt-2 border-t border-stone-200 text-xs text-stone-600">
              <div className="flex items-center justify-between">
                <span>Production Crew & Camera Kit</span>
                <span className="font-medium text-stone-900">Included</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Color Timing & Studio Mastering</span>
                <span className="font-medium text-stone-900">Included</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Commercial Usage Rights</span>
                <span className="font-medium text-stone-900">Full Buyout</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Production Base</span>
                <span className="font-medium text-stone-900">Kangra, HP (Dispatched Nationwide)</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={handleApply}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#121212] rounded-xl hover:bg-black transition-all shadow-sm"
            >
              <span>Transfer Scope to Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-stone-500 mt-2">
              No immediate obligation · Official proposal generated in 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
