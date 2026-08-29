import { Calendar, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';
import BorderBeam from '@/components/ui/BorderBeam';

interface AgendaHeroProps {
  onOpenDemo: () => void;
  onViewPricing: () => void;
}

export default function AgendaHero({ onOpenDemo, onViewPricing }: AgendaHeroProps) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber/30 bg-amber/10 text-amber font-mono text-xs mb-6">
            <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
            VibeCodia Agenda 2.0 — Para Barbearias e Salões de Alta Performance
          </div>

          <h1 className="text-[clamp(36px,6vw,64px)] font-bold tracking-tightest leading-[1.05] text-ink-50">
            Agendamento Inteligente para{' '}
            <span className="bg-gradient-to-r from-amber to-orange bg-clip-text text-transparent">
              Seu Negócio Escalar
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink-200 leading-relaxed">
            Seus clientes agendam em <strong>30 segundos</strong> apenas com nome e celular.
            Sem baixar app, sem login chato, com confirmação por PIN via SMS e redução drástica de faltas.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDemo}
              className="btn btn-amber text-base px-6 py-3 font-medium flex items-center gap-2 group"
            >
              <Zap size={18} className="text-ink-950 group-hover:scale-110 transition-transform" />
              Testar Agendamento ao Vivo
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={onViewPricing}
              className="btn btn-secondary text-base px-6 py-3 font-medium"
            >
              Ver Planos e Recursos
            </button>
          </div>

          {/* Key Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 border border-ink-500/70 bg-ink-850/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 relative overflow-hidden">
            <BorderBeam size={150} duration={10} colorFrom="#f59e0b" colorTo="#f0883e" />
            
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold text-amber font-mono">
                +200
              </div>
              <span className="text-xs text-ink-300 mt-1 text-center">Salões & Barbearias</span>
            </div>

            <div className="flex flex-col items-center justify-center border-x border-ink-600">
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold text-green font-mono">
                70%
              </div>
              <span className="text-xs text-ink-300 mt-1 text-center">Menos Faltas</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold text-cyan font-mono">
                30s
              </div>
              <span className="text-xs text-ink-300 mt-1 text-center">Para Agendar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
