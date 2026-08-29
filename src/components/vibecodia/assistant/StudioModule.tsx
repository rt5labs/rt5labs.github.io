import StudioHero from './StudioHero';
import AgenticPipelineVisualizer from './AgenticPipelineVisualizer';
import InteractiveBotBuilder from './InteractiveBotBuilder';
import StudioPlans from './StudioPlans';
import { Bot, Sparkles, ArrowRight, Calendar } from 'lucide-react';

interface StudioModuleProps {
  onNavigateToAgenda?: () => void;
}

export default function StudioModule({ onNavigateToAgenda }: StudioModuleProps) {
  const scrollToSandbox = () => {
    document.getElementById('bot-sandbox')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPipeline = () => {
    document.getElementById('pipeline-visualizer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 sm:space-y-16 animate-reveal">
      <StudioHero onStartBuilder={scrollToSandbox} onSimulatePipeline={scrollToPipeline} />
      <InteractiveBotBuilder />
      <AgenticPipelineVisualizer />
      <StudioPlans />

      {/* CTA Final */}
      <section className="container-content my-12">
        <div className="relative overflow-hidden rounded-2xl border border-cyan/40 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="mono-label text-cyan">◆ automação inteligente</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-ink-50 mt-2">
              Transforme seu Atendimento com IA Hoje
            </h2>
            <p className="text-sm sm:text-base text-ink-200 mt-3 leading-relaxed">
              Integre assistentes autônomos que tiram dúvidas, captam leads e agendam horários 24 horas por dia, 7 dias por semana sem descanso.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={scrollToSandbox}
                className="btn btn-cyan px-6 py-3 text-sm font-semibold flex items-center gap-2"
              >
                <Sparkles size={16} />
                Testar Meu Assistente no Sandbox
              </button>
              {onNavigateToAgenda && (
                <button
                  type="button"
                  onClick={onNavigateToAgenda}
                  className="btn btn-secondary px-6 py-3 text-sm font-medium flex items-center gap-2"
                >
                  <Calendar size={16} />
                  Ver Plataforma VibeCodia Agenda
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
