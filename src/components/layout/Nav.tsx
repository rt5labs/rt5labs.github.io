import { useEffect, useState } from 'react';
import { Menu, X, Terminal, Calendar, Bot, Search, ChevronDown } from 'lucide-react';

interface NavProps {
  activeTab: 'rt5labs' | 'agenda' | 'studio';
  onSelectTab: (tab: 'rt5labs' | 'agenda' | 'studio') => void;
  onOpenCmdk: () => void;
}

export default function Nav({ activeTab, onSelectTab, onOpenCmdk }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const rt5Links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#cases', label: 'Cases' },
    { href: '#processo', label: 'Processo' },
    { href: '#contato', label: 'Contato' },
  ];

  const agendaLinks = [
    { href: '#demo-agenda', label: 'Demo Interativa' },
    { href: '#agenda-features', label: 'Recursos' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#agenda-pricing', label: 'Planos' },
    { href: '#agenda-depoimentos', label: 'Depoimentos' },
  ];

  const studioLinks = [
    { href: '#bot-sandbox', label: 'Sandbox IA' },
    { href: '#pipeline-visualizer', label: '5 Agentes' },
    { href: '#studio-plans', label: 'Planos' },
  ];

  const currentLinks =
    activeTab === 'rt5labs'
      ? rt5Links
      : activeTab === 'agenda'
      ? agendaLinks
      : studioLinks;

  return (
    <nav
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-ink-500/70 bg-ink-900/82 backdrop-blur-xl'
          : 'border-transparent bg-ink-900/40 backdrop-blur-md'
      }`}
      aria-label="Navegação principal"
    >
      <div className="container-content">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectTab('rt5labs')}
              className="brand flex items-center gap-2.5 font-bold tracking-tightest text-left"
            >
              <span
                className={`grid h-[34px] w-[34px] place-items-center rounded-[9px] border transition-colors ${
                  activeTab === 'rt5labs'
                    ? 'border-green/25 bg-green-soft text-green'
                    : activeTab === 'agenda'
                    ? 'border-amber/25 bg-amber/10 text-amber'
                    : 'border-cyan/25 bg-cyan/10 text-cyan'
                }`}
              >
                {activeTab === 'rt5labs' ? (
                  <Terminal size={18} />
                ) : activeTab === 'agenda' ? (
                  <Calendar size={18} />
                ) : (
                  <Bot size={18} />
                )}
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[17px] font-bold text-ink-50">
                  {activeTab === 'rt5labs' ? (
                    <>
                      rt5labs<span className="text-ink-300">.io</span>
                    </>
                  ) : (
                    <>
                      vibecodia<span className="text-ink-300">.io</span>
                    </>
                  )}
                </span>
                <span className="text-[10px] font-mono text-ink-400">
                  {activeTab === 'rt5labs'
                    ? 'Engineering Suite'
                    : activeTab === 'agenda'
                    ? 'Agenda SaaS 2.0'
                    : 'AI Studio 2.0'}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Module Switcher Tabs */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-ink-600/70 bg-ink-850/80 text-xs">
            <button
              type="button"
              onClick={() => onSelectTab('rt5labs')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                activeTab === 'rt5labs'
                  ? 'bg-green text-ink-950 font-semibold shadow-[0_0_12px_rgba(63,185,80,0.3)]'
                  : 'text-ink-300 hover:text-ink-50'
              }`}
            >
              <Terminal size={13} />
              RT5 Labs
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('agenda')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                activeTab === 'agenda'
                  ? 'bg-amber text-ink-950 font-semibold shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                  : 'text-ink-300 hover:text-ink-50'
              }`}
            >
              <Calendar size={13} />
              Agenda 2.0
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('studio')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                activeTab === 'studio'
                  ? 'bg-cyan text-ink-950 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'text-ink-300 hover:text-ink-50'
              }`}
            >
              <Bot size={13} />
              IA Studio
            </button>
          </div>

          {/* Right Action & Links */}
          <div className="flex items-center gap-4">
            <ul className="hidden lg:flex items-center gap-5 text-xs text-ink-200">
              {currentLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-ink-50">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick CmdK trigger */}
            <button
              type="button"
              onClick={onOpenCmdk}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-ink-600 bg-ink-850 text-xs text-ink-300 hover:border-ink-400 hover:text-ink-100 transition-colors"
            >
              <Search size={14} className="text-cyan" />
              <span>Buscar</span>
              <kbd className="font-mono text-[10px] bg-ink-900 border border-ink-700 px-1 rounded text-ink-400">
                ⌘K
              </kbd>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-md border border-ink-500 text-ink-100 transition-colors hover:border-ink-300 md:hidden"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="border-t border-ink-700 pt-3 pb-5 md:hidden space-y-4">
            <div>
              <span className="block text-[11px] font-mono text-ink-400 mb-2 px-3">
                Módulos do Ecossistema
              </span>
              <div className="grid grid-cols-3 gap-2 px-3">
                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('rt5labs');
                    setOpen(false);
                  }}
                  className={`p-2 rounded-lg text-xs font-semibold flex flex-col items-center gap-1 border ${
                    activeTab === 'rt5labs'
                      ? 'border-green bg-green/15 text-green'
                      : 'border-ink-700 bg-ink-850 text-ink-300'
                  }`}
                >
                  <Terminal size={16} />
                  RT5 Labs
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('agenda');
                    setOpen(false);
                  }}
                  className={`p-2 rounded-lg text-xs font-semibold flex flex-col items-center gap-1 border ${
                    activeTab === 'agenda'
                      ? 'border-amber bg-amber/15 text-amber'
                      : 'border-ink-700 bg-ink-850 text-ink-300'
                  }`}
                >
                  <Calendar size={16} />
                  Agenda
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onSelectTab('studio');
                    setOpen(false);
                  }}
                  className={`p-2 rounded-lg text-xs font-semibold flex flex-col items-center gap-1 border ${
                    activeTab === 'studio'
                      ? 'border-cyan bg-cyan/15 text-cyan'
                      : 'border-ink-700 bg-ink-850 text-ink-300'
                  }`}
                >
                  <Bot size={16} />
                  IA Studio
                </button>
              </div>
            </div>

            <div>
              <span className="block text-[11px] font-mono text-ink-400 mb-1 px-3">
                Navegação
              </span>
              <ul className="flex flex-col gap-1">
                {currentLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-ink-100 hover:bg-ink-800 hover:text-ink-50"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenCmdk();
                }}
                className="w-full btn btn-secondary text-xs flex items-center justify-center gap-2"
              >
                <Search size={14} />
                Abrir Menu de Comandos (⌘K)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
