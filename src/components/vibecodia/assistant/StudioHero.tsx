import { Bot, Sparkles, ArrowRight, Play, Cpu, ShieldCheck } from 'lucide-react';
import BorderBeam from '@/components/ui/BorderBeam';

interface StudioHeroProps {
  onStartBuilder: () => void;
  onSimulatePipeline: () => void;
}

export default function StudioHero({ onStartBuilder, onSimulatePipeline }: StudioHeroProps) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan font-mono text-xs mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
            VibeCodia Studio 2.0 — Multi-Agent Architecture
          </div>

          <h1 className="text-[clamp(36px,6vw,64px)] font-bold tracking-tightest leading-[1.05] text-ink-50">
            Assistentes de IA Autônomos{' '}
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              Criados por Agentes
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink-200 leading-relaxed">
            Esqueça configurações manuais cansativas. Uma esteira sequencial de <strong>5 agentes de IA</strong> analisa seu nicho, formata a persona, testa os limites de segurança e publica seu bot no WhatsApp em minutos.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onStartBuilder}
              className="btn btn-cyan text-base px-6 py-3 font-medium flex items-center gap-2 group"
            >
              <Sparkles size={18} className="text-ink-950 group-hover:rotate-12 transition-transform" />
              Criar Assistente no Sandbox
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={onSimulatePipeline}
              className="btn btn-secondary text-base px-6 py-3 font-medium flex items-center gap-2"
            >
              <Play size={16} className="text-cyan" />
              Ver Pipeline dos 5 Agentes
            </button>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
            <div className="rounded-xl border border-ink-600 bg-ink-850/70 p-4">
              <div className="flex items-center gap-2 text-cyan font-mono text-xs mb-1">
                <Cpu size={14} />
                5-Agent Sequential
              </div>
              <p className="text-xs text-ink-300">
                Briefing, Design, Integração, Teste de Segurança e Publicação automática.
              </p>
            </div>

            <div className="rounded-xl border border-ink-600 bg-ink-850/70 p-4">
              <div className="flex items-center gap-2 text-green font-mono text-xs mb-1">
                <ShieldCheck size={14} />
                Guardrails Ativos
              </div>
              <p className="text-xs text-ink-300">
                Zero alucinação em preços e horários, com fallback inteligente para atendente humano.
              </p>
            </div>

            <div className="rounded-xl border border-ink-600 bg-ink-850/70 p-4">
              <div className="flex items-center gap-2 text-amber font-mono text-xs mb-1">
                <Bot size={14} />
                WhatsApp & Web Embed
              </div>
              <p className="text-xs text-ink-300">
                Widget flutuante para seu site ou número comercial verificado na Meta Cloud API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
