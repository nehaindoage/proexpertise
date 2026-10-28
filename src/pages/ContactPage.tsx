import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS } from '../data/mockData';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowUpRight,
  CheckCircle,
  HelpCircle,
  Plane,
  ChevronDown
} from 'lucide-react';

interface ContactPageProps {
  initialScope?: string;
  initialBudget?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialScope = '',
  initialBudget = '',
  onNavigate,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Cinematography');
  const [budget, setBudget] = useState(initialBudget || '₹1,50,000 – ₹5,00,000');
  const [timeline, setTimeline] = useState('Within 1 month');
  const [message, setMessage] = useState(
    initialScope ? `Hello Proexpertise team,\n\n${initialScope}\n\nWe would like to discuss next steps.` : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceOptions = [
    'Cinematography',
    'Photography',
    'Digital marketing',
    'Social media marketing',
    'Graphic designing',
    'Full 360° Retainer',
  ];

  const budgetOptions = [
    '₹50,000 – ₹1,50,000',
    '₹1,50,000 – ₹5,00,000',
    '₹5,00,000 – ₹15,00,000',
    '₹15,00,000+',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-[#FAFAF8]">
      {/* 1. Header Banner */}
      <section className="pt-16 pb-14 border-b border-[#121212]/10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
              <span>Initiate Inquiries</span>
              <span aria-hidden="true">·</span>
              <span>Proexpertise Productions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121212] leading-tight">
              Let’s Start a Dialogue.
            </h1>
            <p className="text-base sm:text-lg text-[#5C5C5A] mt-4 leading-relaxed">
              Whether you require a multi-camera commercial film, an editorial photo shoot, or an
              ROI-driven digital growth campaign, our directors and producers are ready to collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Location Card (Col 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-[#121212]">
                Studio Coordinates
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-stone-100 rounded-lg text-stone-700 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#121212] block">Find Us</span>
                    <p className="text-[#5C5C5A] mt-0.5 leading-snug">
                      Kangra, Himachal Pradesh 176225<br />
                      India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Kangra,+Himachal+Pradesh+176225"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#121212] hover:underline mt-2 underline-offset-4"
                    >
                      <span>View location ↗</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                  <div className="p-2 bg-stone-100 rounded-lg text-stone-700 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#121212] block">Direct Electronic Mail</span>
                    <a
                      href="mailto:hello@proexpertise.in"
                      className="text-xs sm:text-sm text-stone-700 hover:text-black font-medium underline underline-offset-2"
                    >
                      hello@proexpertise.in
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Responses typically within 12 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                  <div className="p-2 bg-stone-100 rounded-lg text-stone-700 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#121212] block">Studio Consultation Hours</span>
                    <p className="text-xs text-[#5C5C5A] mt-0.5">
                      Monday to Saturday: 09:30 – 18:30 IST<br />
                      Sundays: On-Location Shoots Only
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-stone-100">
                  <div className="p-2 bg-stone-100 rounded-lg text-stone-700 shrink-0 mt-0.5">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#121212] block">Transit & Airport Access</span>
                    <p className="text-xs text-[#5C5C5A] mt-0.5">
                      Kangra Airport (DHM) is 15 minutes away with daily direct flights from New Delhi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick interactive map visual preview */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block mb-1">
                  Kangra Valley Hub
                </span>
                <h3 className="text-base font-bold text-[#121212]">
                  Central Western Himalayas Production Base
                </h3>
                <p className="text-xs text-[#5C5C5A] mt-1">
                  Strategic jumping ground for Dharamshala, Palampur, Manali, Spiti, and Chandigarh expressways.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200">
                <a
                  href="https://maps.google.com/?q=Kangra,+Himachal+Pradesh+176225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#121212] bg-white rounded-lg border border-stone-300 hover:border-black transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Brief Planner Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200/90 shadow-xs">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
                  Interactive Brief Builder
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-[#121212]">
                  Tell Us About Your Vision
                </h2>
                <p className="text-xs sm:text-sm text-[#5C5C5A] mt-1">
                  Fill in your requirements below for an official proposal and quote within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center bg-stone-50 rounded-xl border border-stone-200 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#121212]">
                    Brief Received by Proexpertise Productions
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5C5A] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900">{name}</strong>. A copy of your project details has been logged for our executive director. We will reply to <strong className="text-stone-900">{email}</strong> within 12–24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 bg-white border border-stone-300 rounded-lg hover:border-black transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selector */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-stone-700 block mb-2">
                      1. Required Discipline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedService(opt)}
                          className={`p-2.5 text-xs text-left rounded-lg border transition-all ${
                            selectedService === opt
                              ? 'border-[#121212] bg-[#121212] text-white font-semibold'
                              : 'border-stone-200 hover:border-stone-400 bg-stone-50/50 text-stone-700'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Bracket */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-stone-700 block mb-2">
                      2. Approximate Investment Target
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`p-2 text-xs text-center rounded-lg border font-mono transition-all ${
                            budget === b
                              ? 'border-[#121212] bg-[#121212] text-white font-semibold'
                              : 'border-stone-200 hover:border-stone-400 bg-stone-50/50 text-stone-700'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-stone-700 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50/60 border border-stone-200 rounded-lg focus:outline-none focus:border-[#121212] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-stone-700 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vikram@brand.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50/60 border border-stone-200 rounded-lg focus:outline-none focus:border-[#121212] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-stone-700 block mb-1">
                        Company or Brand Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Apex Apparel / Individual"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50/60 border border-stone-200 rounded-lg focus:outline-none focus:border-[#121212] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-bold tracking-wider text-stone-700 block mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm bg-stone-50/60 border border-stone-200 rounded-lg focus:outline-none focus:border-[#121212] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="text-xs uppercase font-bold tracking-wider text-stone-700 block mb-1">
                      Project Vision & Specific Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your shoot date, deliverables, references, or specific questions..."
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50/60 border border-stone-200 rounded-lg focus:outline-none focus:border-[#121212] focus:bg-white transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#121212] rounded-xl hover:bg-black transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Logging Project Scope...</span>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-stone-500 mt-2">
                      Direct consultation with Proexpertise Productions · NDA available on request
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions Accordion */}
      <section className="py-20 bg-white border-t border-[#121212]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Production Protocols
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#121212]">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-stone-200 overflow-hidden bg-[#FAFAF8] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#121212] hover:text-black"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C5C5A] leading-relaxed border-t border-stone-200/50 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
