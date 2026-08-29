interface FooterProps {
  onSelectTab?: (tab: 'rt5labs' | 'agenda' | 'studio') => void;
}

export default function Footer({ onSelectTab }: FooterProps) {
  return (
    <footer className="py-12 border-t border-ink-600/60 bg-ink-950 font-mono text-xs text-ink-300">
      <div className="container-content">
        <div className="grid gap-6 sm:grid-cols-3 pb-8 mb-8 border-b border-ink-800 text-left font-sans">
          <div>
            <span className="font-mono text-xs font-bold text-ink-100 uppercase tracking-wider block mb-2">
              RT5 Labs
            </span>
            <p className="text-xs text-ink-400 leading-relaxed mb-3">
              Engenharia de Software, SaaS sob medida e plataformas AI-Native com arquitetura Cloud First.
            </p>
            {onSelectTab && (
              <button
                type="button"
                onClick={() => onSelectTab('rt5labs')}
                className="text-xs text-green hover:underline font-mono"
              >
                → Explorar Hub RT5 Labs
              </button>
            )}
          </div>

          <div>
            <span className="font-mono text-xs font-bold text-amber uppercase tracking-wider block mb-2">
              VibeCodia Agenda 2.0
            </span>
            <p className="text-xs text-ink-400 leading-relaxed mb-3">
              Plataforma de agendamento online com confirmação por SMS, comissões automáticas e painel financeiro.
            </p>
            {onSelectTab && (
              <button
                type="button"
                onClick={() => onSelectTab('agenda')}
                className="text-xs text-amber hover:underline font-mono"
              >
                → Abrir Agenda 2.0
              </button>
            )}
          </div>

          <div>
            <span className="font-mono text-xs font-bold text-cyan uppercase tracking-wider block mb-2">
              VibeCodia AI Studio
            </span>
            <p className="text-xs text-ink-400 leading-relaxed mb-3">
              Esteira de múltiplos agentes autônomos para desenho, testes e deploy de chatbots para WhatsApp e Web.
            </p>
            {onSelectTab && (
              <button
                type="button"
                onClick={() => onSelectTab('studio')}
                className="text-xs text-cyan hover:underline font-mono"
              >
                → Abrir AI Studio
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © 2026 <span className="text-ink-200 font-semibold">RT5 Labs & VibeCodia</span> · Vibe Coding 2.0 Architecture
          </p>
          <div className="flex items-center gap-4 text-ink-400">
            <a href="https://github.com/rt5labs" target="_blank" rel="noreferrer" className="hover:text-ink-100">
              GitHub
            </a>
            <span>·</span>
            <a href="#contato" className="hover:text-ink-100">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
