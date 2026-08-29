import { useEffect, useState, useRef } from 'react';
import { 
  Search, 
  Calendar, 
  Bot, 
  Terminal as TerminalIcon, 
  Layers, 
  ExternalLink, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  X,
  LucideIcon
} from 'lucide-react';

export interface CommandItem {
  id: string;
  category: 'Navegação' | 'Ações VibeCodia' | 'Contato & Links';
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  onSelect: () => void;
  badge?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: 'rt5labs' | 'agenda' | 'studio') => void;
  onOpenBookingDemo: () => void;
  onFocusAiSandbox: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onNavigateTab,
  onOpenBookingDemo,
  onFocusAiSandbox,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const commands: CommandItem[] = [
    {
      id: 'tab-rt5',
      category: 'Navegação',
      title: 'RT5 Labs — Engenharia & SaaS B2B',
      subtitle: 'Visão institucional, stack Cloud First e cases de produção',
      icon: TerminalIcon,
      onSelect: () => {
        onNavigateTab('rt5labs');
        onClose();
      },
      badge: 'Hub',
    },
    {
      id: 'tab-agenda',
      category: 'Navegação',
      title: 'VibeCodia Agenda 2.0',
      subtitle: 'Plataforma inteligente de agendamento para barbearias e salões',
      icon: Calendar,
      onSelect: () => {
        onNavigateTab('agenda');
        onClose();
      },
      badge: 'SaaS',
    },
    {
      id: 'tab-studio',
      category: 'Navegação',
      title: 'VibeCodia Studio — AI Assistant',
      subtitle: 'Pipeline de agentes autônomos e estúdio de assistentes virtuais',
      icon: Bot,
      onSelect: () => {
        onNavigateTab('studio');
        onClose();
      },
      badge: 'AI-Native',
    },
    {
      id: 'action-book-demo',
      category: 'Ações VibeCodia',
      title: 'Simular Agendamento em 30s (Sem Login)',
      subtitle: 'Experimente a confirmação por PIN e o fluxo sem atrito',
      icon: Sparkles,
      onSelect: () => {
        onNavigateTab('agenda');
        onOpenBookingDemo();
        onClose();
      },
      badge: 'Demo',
    },
    {
      id: 'action-ai-sandbox',
      category: 'Ações VibeCodia',
      title: 'Testar Chatbot com IA no Sandbox',
      subtitle: 'Simule um diálogo em tempo real com agente gerado na hora',
      icon: MessageCircle,
      onSelect: () => {
        onNavigateTab('studio');
        onFocusAiSandbox();
        onClose();
      },
      badge: 'Sandbox',
    },
    {
      id: 'action-cases',
      category: 'Navegação',
      title: 'Ver Projetos & Soluções em Produção',
      subtitle: 'Finanças Integradas, Operations SaaS, Cloud Platform IaC',
      icon: Layers,
      onSelect: () => {
        onNavigateTab('rt5labs');
        onClose();
        setTimeout(() => {
          document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
    },
    {
      id: 'contact-whatsapp',
      category: 'Contato & Links',
      title: 'Falar com Engenheiro no WhatsApp',
      subtitle: 'Tire dúvidas técnicas e orce seu projeto sob medida',
      icon: ExternalLink,
      onSelect: () => {
        window.open('https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20o%20ecossistema%20RT5%20Labs%20e%20VibeCodia.', '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q)) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled outside or triggered
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].onSelect();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-ink-500 bg-ink-900 shadow-2xl shadow-cyan/10 animate-reveal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input header */}
        <div className="relative flex items-center border-b border-ink-600 px-4 py-3.5">
          <Search size={18} className="text-cyan shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite um comando, produto ou funcionalidade..."
            className="w-full bg-transparent text-ink-50 placeholder-ink-400 text-sm font-sans focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-ink-400 hover:text-ink-200 p-1"
            >
              <X size={15} />
            </button>
          )}
          <span className="ml-2 hidden sm:inline-flex items-center text-[10px] font-mono text-ink-400 border border-ink-600 rounded px-1.5 py-0.5">
            ESC
          </span>
        </div>

        {/* Results list */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-ink-800/40">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-sm text-ink-400">
              Nenhum comando encontrado para <span className="text-ink-200">"{query}"</span>
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={cmd.onSelect}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between rounded-lg px-3.5 py-2.5 text-left transition-all duration-150 ${
                    isSelected
                      ? 'bg-ink-800 border-l-2 border-cyan text-ink-50 pl-3'
                      : 'text-ink-200 hover:bg-ink-850 hover:text-ink-100'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`grid h-8 w-8 place-items-center rounded-md border shrink-0 transition-colors ${
                        isSelected
                          ? 'border-cyan/40 bg-cyan/10 text-cyan'
                          : 'border-ink-600 bg-ink-850 text-ink-300'
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-ink-50 truncate">
                          {cmd.title}
                        </span>
                        {cmd.badge && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded border border-ink-600 text-ink-300">
                            {cmd.badge}
                          </span>
                        )}
                      </div>
                      {cmd.subtitle && (
                        <p className="text-xs text-ink-400 truncate mt-0.5">
                          {cmd.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`shrink-0 transition-transform ${
                      isSelected ? 'text-cyan translate-x-0.5' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-ink-600/70 bg-ink-950/60 px-4 py-2 text-[11px] font-mono text-ink-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navegar</span>
            <span>↵ Executar</span>
          </div>
          <span className="text-cyan/80">RT5 Labs + VibeCodia 2.0</span>
        </div>
      </div>
    </div>
  );
}
