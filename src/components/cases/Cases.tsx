import { cases } from '@/data/cases';
import CaseCard from './CaseCard';

export default function Cases() {
  return (
    <section id="cases" className="container-content mt-20 sm:mt-24">
      <div className="section-eyebrow">
        <span className="text-green">#</span> cases
      </div>
      <h2 className="section-heading">Projetos & Soluções em Produção</h2>
      <p className="section-sub mt-1.5">
        Sistemas desenvolvidos para resolver problemas reais com excelência técnica.
      </p>

      <div className="mt-7 grid gap-3.5 lg:grid-cols-3">
        {cases.map((c) => (
          <CaseCard key={c.id} study={c} />
        ))}
      </div>
    </section>
  );
}
