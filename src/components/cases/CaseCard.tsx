import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/data/cases';
import { statusBadgeClass, statusDotClass, statusLabels } from '@/data/cases';

export default function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="card-surface card-hover group p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className={`h-2 w-2 rounded-full ${statusDotClass[study.status]}`} />
          <h3 className="m-0 text-lg text-ink-50">{study.name}</h3>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-0.5 shrink-0 text-ink-400 transition-all duration-200 group-hover:text-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      <dl className="mt-4 grid gap-3.5">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-300">
            Problema
          </dt>
          <dd className="m-0 mt-0.5 text-sm text-ink-100">{study.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-300">
            Solução
          </dt>
          <dd className="m-0 mt-0.5 text-sm text-ink-100">{study.solution}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-300">
            Resultado
          </dt>
          <dd className="m-0 mt-0.5 text-sm text-ink-100">{study.result}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-ink-500 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {study.stack.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
        <span className={`badge ${statusBadgeClass[study.status]} ml-auto`}>
          {statusLabels[study.status]}
        </span>
      </div>
    </article>
  );
}
