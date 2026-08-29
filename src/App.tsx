import { useState, useEffect } from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import FloatingDock from '@/components/layout/FloatingDock';
import ParticleBackground from '@/components/canvas/ParticleBackground';
import CommandPalette from '@/components/cmdk/CommandPalette';

// RT5 Labs Components
import Hero from '@/components/hero/Hero';
import Readme from '@/components/readme/Readme';
import Services from '@/components/services/Services';
import Cases from '@/components/cases/Cases';
import Process from '@/components/process/Process';
import Contact from '@/components/contact/Contact';

// VibeCodia Modules
import AgendaModule from '@/components/vibecodia/agenda/AgendaModule';
import StudioModule from '@/components/vibecodia/assistant/StudioModule';

export type EcosystemTab = 'rt5labs' | 'agenda' | 'studio';

function App() {
  const [activeTab, setActiveTab] = useState<EcosystemTab>('rt5labs');
  const [isCmdkOpen, setIsCmdkOpen] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('agenda')) {
        setActiveTab('agenda');
      } else if (hash.includes('studio') || hash.includes('bot') || hash.includes('ia')) {
        setActiveTab('studio');
      } else if (hash.includes('rt5') || hash.includes('cases') || hash.includes('servicos') || hash.includes('sobre')) {
        setActiveTab('rt5labs');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Global keydown for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdkOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTab = (tab: EcosystemTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (tab === 'agenda') {
      window.history.replaceState(null, '', '#agenda');
    } else if (tab === 'studio') {
      window.history.replaceState(null, '', '#studio');
    } else {
      window.history.replaceState(null, '', '#');
    }
  };

  const handleOpenBookingDemo = () => {
    setActiveTab('agenda');
    setTimeout(() => {
      document.getElementById('demo-agenda')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFocusAiSandbox = () => {
    setActiveTab('studio');
    setTimeout(() => {
      document.getElementById('bot-sandbox')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-ink-900 text-ink-50 selection:bg-cyan/30 selection:text-ink-50">
      {/* Dynamic 2.0 Canvas Particle Network */}
      <ParticleBackground />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCmdkOpen}
        onClose={() => setIsCmdkOpen(false)}
        onNavigateTab={handleSelectTab}
        onOpenBookingDemo={handleOpenBookingDemo}
        onFocusAiSandbox={handleFocusAiSandbox}
      />

      {/* Sticky Navigation with Ecosystem Switcher */}
      <Nav
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenCmdk={() => setIsCmdkOpen(true)}
      />

      {/* Main View Transition */}
      <main className="flex-1 pb-24 z-10">
        {activeTab === 'rt5labs' && (
          <div className="animate-reveal">
            <Hero onNavigateTab={handleSelectTab} />
            <Readme />
            <Services />
            <Cases />
            <Process />
            <Contact />
          </div>
        )}

        {activeTab === 'agenda' && (
          <div className="animate-reveal">
            <AgendaModule onNavigateToStudio={() => handleSelectTab('studio')} />
          </div>
        )}

        {activeTab === 'studio' && (
          <div className="animate-reveal">
            <StudioModule onNavigateToAgenda={() => handleSelectTab('agenda')} />
          </div>
        )}
      </main>

      {/* Floating Bottom Quick Dock */}
      <FloatingDock
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenCmdk={() => setIsCmdkOpen(true)}
      />

      {/* Unified Ecosystem Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}

export default App;
