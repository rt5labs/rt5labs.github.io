import { Star } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';

const testimonials = [
  {
    author: 'João Oliveira',
    role: 'Dono, Barbearia Oliveira',
    avatar: 'JO',
    text: 'Minhas faltas caíram 70% depois que comecei a usar o SMS de confirmação. E meus clientes amam agendar sozinhos pelo link sem precisar baixar aplicativo nenhum.',
  },
  {
    author: 'Carla Mendes',
    role: 'Proprietária, Studio Carla Nails',
    avatar: 'CM',
    text: 'Antes eu perdia 2 horas por dia no WhatsApp confirmando horários manualmente. Agora os clientes se viram sozinhos e eu consigo focar no atendimento presencial.',
  },
  {
    author: 'Rafael Santos',
    role: 'Sócio, Barbearia Vintage Club',
    avatar: 'RS',
    text: 'O controle automático de comissões resolveu um problema enorme que tínhamos no fim do mês. Cada barbeiro acompanha sua produção em tempo real pelo celular.',
  },
];

export default function AgendaTestimonials() {
  return (
    <section id="agenda-depoimentos" className="container-content py-12 sm:py-16">
      <div className="section-eyebrow text-amber">
        <span>#</span> depoimentos reais
      </div>
      <h2 className="section-heading">
        Quem usa <span className="text-amber">recomenda</span>
      </h2>
      <p className="section-sub mt-1 max-w-xl">
        Empreendedores que transformaram o fluxo de agendamentos e faturamento de suas barbearias.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <SpotlightCard
            key={t.author}
            spotlightColor="rgba(245, 158, 11, 0.12)"
            className="p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-amber mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-ink-200 leading-relaxed italic mb-6">
                "{t.text}"
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-ink-700/80 pt-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-amber/20 font-mono text-xs font-bold text-amber border border-amber/40">
                {t.avatar}
              </div>
              <div>
                <h4 className="text-xs font-bold text-ink-100">{t.author}</h4>
                <p className="text-[11px] text-ink-400">{t.role}</p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
