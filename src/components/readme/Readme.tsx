import { Sparkles, Cloud, Bot } from 'lucide-react';

const badges = [
  { label: 'SaaS B2B', cls: 'badge-green' },
  { label: 'AI-Native', cls: 'badge-blue' },
  { label: 'Cloud First', cls: 'badge-yellow' },
  { label: 'Continuous Delivery', cls: 'badge-orange' },
];

export default function Readme() {
  return (
    <section id="sobre" className="container-content mt-10 sm:mt-12">
      <div className="overflow-hidden rounded-xl border border-ink-500 bg-ink-800">
        {/* header bar */}
        <div className="flex items-center gap-2 border-b border-ink-500 px-4 py-3.5 font-mono text-[13px] text-ink-200">
          <span className="text-ink-400">📖</span>
          <span>README.md</span>
        </div>

        {/* body */}
        <div className="px-6 py-11 sm:px-[55px] sm:py-[55px]">
          {/* heading with badges */}
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <h2 className="m-0 text-[28px] tracking-tighter text-ink-50">
              👋 Sobre a RT5 Labs
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {badges.map((b) => (
                <span key={b.label} className={`badge ${b.cls}`}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <p className="m-0 max-w-[760px] text-ink-200">
            A <strong>RT5 Labs</strong> é um laboratório de tecnologia especializado no desenvolvimento de{' '}
            <strong className="text-ink-50">SaaS B2B sob demanda</strong> e plataformas <strong className="text-ink-50">AI-Native</strong>, integrando quatro pilares fundamentais:{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              engenharia de software
            </code>{' '}
            +{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              ai-native
            </code>{' '}
            +{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              cloud first
            </code>{' '}
            +{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              continuous delivery
            </code>
            .
          </p>

          {/* SaaS para leigos + SaaS B2B sob demanda + AI-Native */}
          <div className="my-7 max-w-[760px] rounded-lg border border-ink-500 bg-ink-850 p-5 sm:p-6">
            <div className="flex items-center gap-2 font-mono text-xs text-green">
              <Sparkles size={15} />
              <span>O QUE É SAAS NA PRÁTICA? (SEM JARGÃO)</span>
            </div>

            <p className="mt-2.5 text-sm leading-relaxed text-ink-100">
              <strong>SaaS</strong> <em>(Software as a Service)</em> é um sistema que funciona 100% online — no navegador ou celular —, sem necessidade de instalar programas locais ou manter servidores físicos. Toda a infraestrutura, segurança e atualizações ficam na nuvem.
            </p>

            <div className="mt-4 pt-4 border-t border-ink-600/60">
              <div className="flex items-center gap-2 font-mono text-xs text-yellow">
                <Cloud size={14} />
                <span>POR QUE SAAS B2B SOB DEMANDA?</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-200">
                Softwares engessados de prateleira forçam sua empresa a adaptar seus processos à ferramenta. Nós fazemos o caminho oposto: construímos o sistema sob medida para as regras e desafios da sua operação, com arquitetura <strong>Cloud First</strong> e deploys contínuos.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-ink-600/60">
              <div className="flex items-center gap-2 font-mono text-xs text-blue">
                <Bot size={14} />
                <span>ARQUITETURA AI-NATIVE & AI-READY</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-200">
                Criamos sistemas preparados desde o primeiro dia para integrar inteligência artificial aplicada, modelos de linguagem (LLMs), agentes autônomos e fluxos automatizados de dados diretamente no fluxo de trabalho da sua equipe.
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-[760px] text-ink-200">
            Trabalhamos com código limpo, testes automatizados e esteiras de entrega contínua, garantindo que o software evolua com agilidade e máxima segurança.
          </p>

          <div className="sep" />

          {/* positioning block */}
          <div className="max-w-[760px]">
            <h3 className="m-0 mb-3 font-mono text-sm text-ink-300">
              <span className="text-green">#</span> posicionamento
            </h3>
            <blockquote className="m-0 border-l-2 border-green/60 pl-5 text-lg text-ink-100">
              Diagnóstico → Arquitetura Cloud & AI-Native → Continuous Delivery.
              <br />
              <span className="text-ink-300">
                Software resiliente, automação inteligente e foco em entregas contínuas de alto impacto.
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
