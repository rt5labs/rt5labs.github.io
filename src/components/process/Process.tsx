const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Compreensão aprofundada dos desafios operacionais e objetivos de negócio.',
  },
  {
    num: '02',
    title: 'Arquitetura',
    desc: 'Definição de arquitetura, stack tecnológica e desenho de infraestrutura.',
  },
  {
    num: '03',
    title: 'Engenharia',
    desc: 'Desenvolvimento ágil, testes automatizados e iterações constantes.',
  },
  {
    num: '04',
    title: 'Deploy & Escala',
    desc: 'Publicação em produção com CI/CD, observabilidade e evolução contínua.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="container-content mt-20 sm:mt-24">
      <div className="section-eyebrow">
        <span className="text-green">#</span> processo
      </div>
      <h2 className="section-heading">Nosso Processo</h2>
      <p className="section-sub mt-1.5">
        Metodologia ágil, engenharia de ponta a ponta e foco em entregas de alto impacto.
      </p>

      <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.num}
            className="group relative border-l-2 border-green bg-ink-850 p-5 transition-colors hover:bg-ink-800"
          >
            <div className="font-mono text-xs text-green">{s.num}</div>
            <h3 className="m-0 mt-2.5 mb-1.5 text-[15px] text-ink-50">
              {s.title}
            </h3>
            <p className="m-0 text-xs text-ink-200">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
