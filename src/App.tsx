import React, { useState } from 'react';
import { PageId, ProjectCaseStudy } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ShowreelModal } from './components/ShowreelModal';
import { CaseStudyModal } from './components/CaseStudyModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>(undefined);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [prefilledScope, setPrefilledScope] = useState('');
  const [prefilledBudget, setPrefilledBudget] = useState('');

  const handleNavigate = (page: PageId, serviceId?: string) => {
    setCurrentPage(page);
    setActiveServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEstimate = (scopeText: string, budgetBracket: string) => {
    setPrefilledScope(scopeText);
    setPrefilledBudget(budgetBracket);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#121212] selection:bg-[#121212] selection:text-white">
      {/* 1. Header (Top Bar Contract) */}
      <Header
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
      />

      {/* 2. Main Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenShowreel={() => setIsShowreelOpen(true)}
            onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            initialServiceId={activeServiceId}
            onNavigate={handleNavigate}
            onSelectEstimate={handleSelectEstimate}
          />
        )}

        {currentPage === 'work' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenShowreel={() => setIsShowreelOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialScope={prefilledScope}
            initialBudget={prefilledBudget}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 3. Footer (With client requested specifications) */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. Interactive Modals */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={() => {
          setSelectedCaseStudy(null);
          handleNavigate('contact');
        }}
      />
    </div>
  );
}
