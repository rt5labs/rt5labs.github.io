import { ArrowRight, MessageCircle } from 'lucide-react';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 sm:pt-28 sm:pb-24">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-[70px]">
          {/* left */}
          <div className="reveal">
            <div className="mono-label mb-5 flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_12px_rgba(63,185,80,0.8)]" />
              SAAS B2B · AI-NATIVE · CLOUD FIRST · CONTINUOUS DELIVERY
            </div>

            <h1 className="m-0 text-[clamp(48px,7vw,76px)] leading-[0.98] tracking-tightest">
              SaaS B2B & AI-Native,
              <br />
              <span className="text-green">direto para produção.</span>
            </h1>

            <p className="mt-7 max-w-[650px] text-xl text-ink-200">
              Desenvolvemos{' '}
              <strong className="font-semibold text-ink-50">
                soluções SaaS B2B sob demanda e plataformas AI-Native
              </strong>{' '}
              com arquitetura Cloud First, automações inteligentes e esteira de entrega contínua.
            </p>

            <p className="mt-1 max-w-[650px] text-xl text-ink-300">
              Sistemas inteligentes, construídos para escalar a sua operação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cases" className="btn btn-primary">
                Ver projetos
                <ArrowRight size={16} />
              </a>
              <a href="#contato" className="btn btn-secondary">
                <MessageCircle size={16} />
                Fale conosco
              </a>
            </div>
          </div>

          {/* right — terminal */}
          <div className="reveal reveal-delay-2">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
