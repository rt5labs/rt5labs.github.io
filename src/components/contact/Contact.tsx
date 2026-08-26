import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="container-content mt-20 sm:mt-24">
      <div className="relative overflow-hidden rounded-xl border border-ink-500 px-6 py-14 text-center sm:px-12 sm:py-16">
        {/* glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(63,185,80,0.12), transparent 65%)',
          }}
          aria-hidden="true"
        />

        <div className="relative">
          <div className="mono-label mb-4 flex items-center justify-center gap-2">
            <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_12px_rgba(63,185,80,0.8)]" />
            contato & novos projetos
          </div>

          <h2 className="m-0 text-[clamp(30px,5vw,48px)] tracking-tighter text-ink-50">
            Vamos construir seu próximo SaaS B2B sob medida?
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-ink-200">
            Conte-nos sobre a operação da sua empresa. Desenhamos e desenvolvemos a plataforma ideal com arquitetura Cloud First e entrega contínua.
          </p>

          <a
            href="mailto:contato@rt5labs.dev"
            className="btn btn-primary mt-7"
          >
            <Mail size={16} />
            contato@rt5labs.dev
            <ArrowRight size={16} />
          </a>

          <p className="mt-5 font-mono text-xs text-ink-400">
            SaaS B2B Sob Demanda · AI-Native · Cloud First · Continuous Delivery
          </p>
        </div>
      </div>
    </section>
  );
}
