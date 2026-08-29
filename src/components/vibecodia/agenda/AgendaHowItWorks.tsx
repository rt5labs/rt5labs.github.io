import { Rocket, Share2, Smartphone, LayoutDashboard } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Crie sua Conta em 30s',
    desc: 'Sem burocracia ou cartão. Obtenha imediatamente seu link exclusivo agenda.vibecodia.com.br/sua-marca.',
    icon: Rocket,
  },
  {
    step: '02',
    title: 'Compartilhe o Link',
    desc: 'Coloque na biografia do Instagram, envie no WhatsApp ou divulgue nos stories com botão direto.',
    icon: Share2,
  },
  {
    step: '03',
    title: 'Cliente Agenda Sozinho',
    desc: 'Escolhe o serviço, confirma com SMS em 30s e recebe confirmação com lembretes automáticos.',
    icon: Smartphone,
  },
  {
    step: '04',
    title: 'Gerencie em Tempo Real',
    desc: 'Acompanhe agenda, equipe e faturamento consolidado pelo celular ou pelo computador.',
    icon: LayoutDashboard,
  },
];

export default function AgendaHowItWorks() {
  return (
    <section id="como-funciona" className="container-content py-12 sm:py-16">
      <div className="section-eyebrow text-amber">
        <span>#</span> fluxo rápido
      </div>
      <h2 className="section-heading">
        Do cadastro ao primeiro agendamento em <span className="text-amber">&lt; 5 minutos</span>
      </h2>
      <p className="section-sub mt-1 max-w-xl">
        Simplicidade máxima para você e experiência impecável para o seu cliente final.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 relative">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              className="relative rounded-xl border border-ink-600 bg-ink-850 p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-2xl font-bold text-amber">
                    {s.step}
                  </div>
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-ink-600 bg-ink-800 text-ink-200">
                    <Icon size={17} />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-ink-50 mb-1.5">
                  {s.title}
                </h3>
                <p className="text-xs text-ink-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-ink-500 font-mono text-xs">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
