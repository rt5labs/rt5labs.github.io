const badges = [
  { label: 'SaaS', cls: 'badge-green' },
  { label: 'Cloud', cls: 'badge-blue' },
  { label: 'Delivery', cls: 'badge-yellow' },
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
            A <strong>RT5 Labs</strong> é um laboratório de engenharia e tecnologia especializado
            em criar soluções digitais sob medida, unindo três pilares fundamentais:{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              engenharia de software
            </code>{' '}
            +{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              arquitetura cloud
            </code>{' '}
            +{' '}
            <code className="rounded bg-ink-850 px-1.5 py-0.5 font-mono text-[0.9em] text-green">
              visão de negócio
            </code>
            .
          </p>

          <p className="mt-4 max-w-[760px] text-ink-200">
            Desenvolvemos plataformas escaláveis e softwares personalizados que resolvem
            desafios operacionais reais. Cada projeto é construído com arquitetura sólida,
            código limpo e pronto para suportar o crescimento da sua empresa.
          </p>

          <div className="sep" />

          {/* positioning block */}
          <div className="max-w-[760px]">
            <h3 className="m-0 mb-3 font-mono text-sm text-ink-300">
              <span className="text-green">#</span> posicionamento
            </h3>
            <blockquote className="m-0 border-l-2 border-green/60 pl-5 text-lg text-ink-100">
              Diagnóstico → Arquitetura → Software em Produção.
              <br />
              <span className="text-ink-300">
                Soluções modernas, código confiável e foco em entregas contínuas que geram valor real.
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
