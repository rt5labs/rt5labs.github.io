import AgendaHero from './AgendaHero';
import AgendaSimulator from './AgendaSimulator';
import AgendaFeatures from './AgendaFeatures';
import AgendaHowItWorks from './AgendaHowItWorks';
import AgendaPricing from './AgendaPricing';
import AgendaTestimonials from './AgendaTestimonials';
import { Zap, ArrowRight, MessageCircle } from 'lucide-react';

interface AgendaModuleProps {
  onOpenBookingDemo?: () => void;
  onNavigateToStudio?: () => void;
}

export default function AgendaModule({ onNavigateToStudio }: AgendaModuleProps) {
  const scrollToDemo = () => {
    document.getElementById('demo-agenda')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('agenda-pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="agenda" className="space-y-12 sm:space-y-16 animate-reveal">
      <AgendaHero onOpenDemo={scrollToDemo} onViewPricing={scrollToPricing} />
      <AgendaSimulator />
      <AgendaFeatures />
      <AgendaHowItWorks />
      <AgendaPricing onSelectPlan={scrollToDemo} />
      <AgendaTestimonials />

      {/* CTA Final */}
      <section className="container-content my-12">
        <div className="relative overflow-hidden rounded-2xl border border-amber/40 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="mono-label text-amber">◆ comece agora</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-ink-50 mt-2">
              Sua Barbearia no Ar em Menos de 5 Minutos
            </h2>
            <p className="text-sm sm:text-base text-ink-200 mt-3 leading-relaxed">
              Crie sua conta gratuita agora. Sem cartão de crédito, sem burocracia — elimine 70% das faltas e automatize seu atendimento hoje mesmo.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={scrollToDemo}
                className="btn btn-amber px-6 py-3 text-sm font-semibold flex items-center gap-2"
              >
                <Zap size={16} />
                Criar Minha Agenda Grátis
              </button>
              {onNavigateToStudio && (
                <button
                  type="button"
                  onClick={onNavigateToStudio}
                  className="btn btn-secondary px-6 py-3 text-sm font-medium flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  Conhecer o Criador de Assistentes IA
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
