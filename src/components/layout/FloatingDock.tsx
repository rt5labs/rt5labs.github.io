import { Terminal, Calendar, Bot, Search, MessageCircle } from 'lucide-react';

interface FloatingDockProps {
  activeTab: 'rt5labs' | 'agenda' | 'studio';
  onSelectTab: (tab: 'rt5labs' | 'agenda' | 'studio') => void;
  onOpenCmdk: () => void;
}

export default function FloatingDock({
  activeTab,
  onSelectTab,
  onOpenCmdk,
}: FloatingDockProps) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-ink-600/80 bg-ink-900/80 backdrop-blur-xl shadow-2xl shadow-black/60">
        <button
          type="button"
          onClick={() => onSelectTab('rt5labs')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            activeTab === 'rt5labs'
              ? 'bg-green/20 text-green border border-green/40 shadow-[0_0_12px_rgba(63,185,80,0.3)]'
              : 'text-ink-300 hover:text-ink-100 hover:bg-ink-800'
          }`}
          title="RT5 Labs — Engenharia & B2B"
        >
          <Terminal size={14} />
          <span className="hidden sm:inline">RT5 Labs</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('agenda')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            activeTab === 'agenda'
              ? 'bg-amber/20 text-amber border border-amber/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
              : 'text-ink-300 hover:text-ink-100 hover:bg-ink-800'
          }`}
          title="VibeCodia Agenda 2.0"
        >
          <Calendar size={14} />
          <span className="hidden sm:inline">Agenda 2.0</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('studio')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            activeTab === 'studio'
              ? 'bg-cyan/20 text-cyan border border-cyan/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
              : 'text-ink-300 hover:text-ink-100 hover:bg-ink-800'
          }`}
          title="VibeCodia Studio — Assistentes IA"
        >
          <Bot size={14} />
          <span className="hidden sm:inline">IA Studio</span>
        </button>

        <div className="h-4 w-px bg-ink-700 mx-1" />

        <button
          type="button"
          onClick={onOpenCmdk}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs text-ink-300 hover:text-cyan hover:bg-ink-800 transition-colors"
          title="Comandos (⌘K)"
        >
          <Search size={14} />
          <span className="hidden md:inline font-mono text-[10px] bg-ink-800 border border-ink-600 px-1 rounded text-ink-400">
            ⌘K
          </span>
        </button>
      </div>
    </div>
  );
}
