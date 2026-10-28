import React from 'react';
import { PageId } from '../types';
import { LOGO_URL } from '../data/mockData';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const exploreLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About us', page: 'about' },
    { label: 'Our work', page: 'work' },
    { label: 'Contact', page: 'contact' },
  ];

  const whatWeDoLinks: { label: string; id: string }[] = [
    { label: 'Cinematography', id: 'cinematography' },
    { label: 'Photography', id: 'photography' },
    { label: 'Digital marketing', id: 'digital-marketing' },
    { label: 'Social media marketing', id: 'social-media' },
    { label: 'Graphic designing', id: 'graphic-design' },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceNav = (id: string) => {
    onNavigate('services', id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F4F4F0] text-[#121212] border-t border-[#121212]/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#121212]/10">
          {/* Brand Column (Col 1-5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <img
                  src={LOGO_URL}
                  alt="Proexpertise Productions"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-contain bg-white shadow-xs border border-stone-300/80 p-1"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#121212]">
                    Proexpertise Productions
                  </h3>
                  <p className="text-xs text-[#5C5C5A]">
                    Cinematic Films · Editorial Photography · Digital Engines
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#5C5C5A] leading-relaxed max-w-sm mb-6">
                Combining Himalayan creative spirit with Hollywood-grade cinema production,
                cutting-edge performance marketing, and enduring brand identities.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs text-[#70706E]">
                Direct inquiries welcome worldwide · Based in Himachal Pradesh, India
              </span>
            </div>
          </div>

          {/* Explore Column (Col 6-7) */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#121212] mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="text-sm text-[#5C5C5A] hover:text-[#121212] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do Column (Col 8-9) */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#121212] mb-5">
              What we do
            </h4>
            <ul className="space-y-3">
              {whatWeDoLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleServiceNav(item.id)}
                    className="text-sm text-[#5C5C5A] hover:text-[#121212] transition-colors duration-200 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us Column (Col 10-12) */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#121212] mb-5">
                Find us
              </h4>
              <div className="space-y-3 text-sm text-[#5C5C5A]">
                <p className="leading-snug">
                  Kangra, Himachal Pradesh 176225<br />
                  India
                </p>

                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=Kangra,+Himachal+Pradesh+176225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#121212] hover:text-black underline underline-offset-4 decoration-stone-400 hover:decoration-black transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    View location ↗
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:hello@proexpertise.in"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#121212] hover:text-black hover:underline transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-stone-500" />
                    hello@proexpertise.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#70706E]">
          <div>
            © {new Date().getFullYear()} Proexpertise Productions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Cinema · Stills · Growth · Identity</span>
            <span>Kangra, HP 176225</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
