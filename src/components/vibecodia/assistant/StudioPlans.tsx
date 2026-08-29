import { Check, Sparkles, Bot, ShieldCheck } from 'lucide-react';
import BorderBeam from '@/components/ui/BorderBeam';

export default function StudioPlans() {
  const plans = [
    {
      name: 'Basic Agent',
      desc: 'Para pequenos negócios e testes de validação de mercado.',
      price: '89',
      period: '/mês',
      features: [
        '1 Assistente de IA Ativo',
        'Até 1.000 mensagens/mês',
        'Treinamento em pt-BR',
        'Widget Web flutuante para sites',
        'Regras básicas de atendimento',
        'Suporte por email',
      ],
      buttonText: 'Criar Assistente Basic',
      featured: false,
    },
    {
      name: 'Pro Agentic',
      desc: 'Para empresas que dependem do WhatsApp para vender e agendar.',
      price: '189',
      period: '/mês',
      features: [
        '3 Assistentes de IA Simultâneos',
        'Até 10.000 mensagens/mês',
        'Integração oficial WhatsApp Cloud API',
        'Conexão com VibeCodia Agenda',
        'Pipeline dos 5 Agentes de Otimização',
        'Guardrails anti-alucinação avançados',
        'Suporte prioritário via WhatsApp',
      ],
      buttonText: 'Testar Pro com WhatsApp',
      featured: true,
    },
    {
      name: 'Enterprise Hub',
      desc: 'Para redes, agências e softwares com alto volume de atendimento.',
      price: '489',
      period: '/mês',
      features: [
        'Assistentes e canais ilimitados',
        'Volume de mensagens sob demanda',
        'White-label e domínio customizado',
        'Integração com CRMs e Webhooks',
        'Modelos de IA dedicados (Gemini / Claude / GPT)',
        'SLA 99.9% garantido em contrato',
        'Engenheiro de IA dedicado',
      ],
      buttonText: 'Falar com Arquitetura',
      featured: false,
    },
  ];

  return (
    <section id="studio-plans" className="container-content py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="mono-label text-cyan"># planos & infraestrutura</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 mt-1">
          Planos Transparentes para IA em Produção
        </h2>
        <p className="text-sm text-ink-300 mt-2">
          Escalabilidade garantida com esteira agentic e infraestrutura em nuvem segura.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-xl border p-6 flex flex-col justify-between transition-all ${
              p.featured
                ? 'border-cyan bg-ink-850 shadow-xl shadow-cyan/5'
                : 'border-ink-600 bg-ink-900/90'
            }`}
          >
            {p.featured && (
              <>
                <BorderBeam size={180} duration={8} colorFrom="#00f0ff" colorTo="#3fb950" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-cyan bg-cyan px-3 py-0.5 text-[11px] font-bold text-ink-950 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={12} />
                  Recomendado
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
                    <Check size={14} className="text-cyan shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className={`w-full btn ${
                p.featured ? 'btn-cyan font-semibold' : 'btn-secondary text-xs'
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
