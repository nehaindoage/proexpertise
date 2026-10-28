import React, { useState } from 'react';
import { PageId } from '../types';
import { LOGO_URL } from '../data/mockData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#121212]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          aria-label="Proexpertise Productions - Home"
        >
          <img
            src={LOGO_URL}
            alt="Proexpertise Productions Logo"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-lg object-contain bg-white shadow-xs border border-stone-200/80 group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Graceful fallback if external image host has delays
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-[#121212] leading-none whitespace-nowrap">
              Proexpertise
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#5C5C5A] font-semibold mt-0.5 whitespace-nowrap">
              Productions
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Single line, 4-5 items) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C5C5A]">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'text-[#121212] font-semibold'
                    : 'hover:text-[#121212]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#121212] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#121212] rounded-full hover:bg-black hover:shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#121212] hover:bg-stone-200/50 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-b border-[#121212]/10 px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg py-2 font-medium transition-colors ${
                  currentPage === item.id ? 'text-[#121212] font-semibold' : 'text-[#5C5C5A]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-stone-200">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#121212] rounded-xl hover:bg-black transition-colors"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
