import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import BorderBeam from '@/components/ui/BorderBeam';

interface AgendaPricingProps {
  onSelectPlan?: (planName: string) => void;
}

export default function AgendaPricing({ onSelectPlan }: AgendaPricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      desc: 'Ideal para quem está abrindo a barbearia ou atende sozinho.',
      price: billingCycle === 'monthly' ? 0 : 0,
      period: '/mês',
      features: [
        '1 profissional incluso',
        'Até 50 agendamentos/mês',
        'Link personalizado exclusivo',
        'Agenda visual completa',
        '10 SMS de confirmação/mês',
        'Suporte por email',
      ],
      buttonText: 'Começar Gratuitamente',
      featured: false,
    },
    {
      name: 'Profissional',
      desc: 'Para salões e barbearias em crescimento com equipe.',
      price: billingCycle === 'monthly' ? 47 : 39,
      period: '/mês',
      features: [
        'Até 5 profissionais',
        'Agendamentos 100% ilimitados',
        'Link exclusivo + QR Code',
        'SMS ilimitado para confirmações',
        'Gestão de comissões por barbeiro',
        'Controle financeiro em tempo real',
        'Lembretes automáticos via WhatsApp',
        'Suporte prioritário via WhatsApp',
      ],
      buttonText: 'Testar 7 Dias Grátis',
      featured: true,
    },
    {
      name: 'Premium',
      desc: 'Para redes, franquias ou operações com alta demanda.',
      price: billingCycle === 'monthly' ? 97 : 79,
      period: '/mês',
      features: [
        'Profissionais e cadeiras ilimitados',
        'Multi-unidades integradas',
        'Personalização White-Label completa',
        'API de integração com ERPs',
        'Painel executivo consolidado',
        'Gerente de conta dedicado',
        'SLA 99.9% de disponibilidade',
      ],
      buttonText: 'Falar com Consultor',
      featured: false,
    },
  ];

  return (
    <section id="agenda-pricing" className="container-content py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="mono-label text-amber"># planos flexíveis</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 mt-1">
          Investimento claro, sem taxas escondidas
        </h2>
        <p className="text-sm text-ink-300 mt-2">
          Comece grátis. Faça upgrade quando o volume da sua barbearia exigir.
        </p>

        {/* Toggle Billing */}
        <div className="mt-6 inline-flex items-center gap-2 p-1 rounded-lg border border-ink-600 bg-ink-850">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              billingCycle === 'monthly'
                ? 'bg-amber text-ink-950 font-semibold'
                : 'text-ink-300 hover:text-ink-100'
            }`}
          >
            Mensal
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annual')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'bg-amber text-ink-950 font-semibold'
                : 'text-ink-300 hover:text-ink-100'
            }`}
          >
            Anual
            <span className="text-[10px] font-mono px-1 rounded bg-green/20 text-green border border-green/30">
              Economize 20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-xl border p-6 flex flex-col justify-between transition-all ${
              p.featured
                ? 'border-amber bg-ink-850 shadow-xl shadow-amber/5'
                : 'border-ink-600 bg-ink-900/90'
            }`}
          >
            {p.featured && (
              <>
                <BorderBeam size={180} duration={8} colorFrom="#f59e0b" colorTo="#00f0ff" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-amber bg-amber px-3 py-0.5 text-[11px] font-bold text-ink-950 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={12} />
                  Mais Escolhido
                </div>
              </>
            )}

            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-ink-50">{p.name}</h3>
                <p className="text-xs text-ink-300 mt-1 min-h-[32px]">{p.desc}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-1 border-b border-ink-700 pb-4">
                <span className="text-sm font-mono text-ink-400">R$</span>
                <span className="text-4xl font-bold font-mono text-ink-50">{p.price}</span>
                <span className="text-xs text-ink-400">{p.period}</span>
              </div>

              <ul className="space-y-2.5 mb-6 text-xs text-ink-200">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="text-green shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectPlan?.(p.name)}
              className={`w-full btn ${
                p.featured ? 'btn-amber font-semibold' : 'btn-secondary text-xs'
              }`}
            >
              {p.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
