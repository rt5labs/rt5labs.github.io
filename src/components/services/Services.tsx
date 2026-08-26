import { Wrench, Cloud, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: 'SaaS & Software Sob Medida',
    description:
      'Plataformas web, APIs e sistemas personalizados para automatizar processos e escalar operações.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description:
      'Arquitetura em nuvem, infraestrutura como código (IaC), containers e ambientes de alta disponibilidade.',
  },
  {
    icon: Rocket,
    title: 'DevOps & Continuous Delivery',
    description:
      'Pipelines CI/CD, testes automatizados, observabilidade e deploy contínuo com alta confiabilidade.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="container-content mt-20 sm:mt-24">
      <div className="section-eyebrow">
        <span className="text-green">#</span> serviços
      </div>
      <h2 className="section-heading">O que fazemos</h2>

      <div className="mt-7 grid gap-3.5 sm:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
              className="card-surface card-hover group p-[22px]"
            >
              <Icon
                size={24}
                className="mb-4 text-green transition-transform duration-200 group-hover:scale-110"
              />
              <h3 className="m-0 mb-1.5 text-base text-ink-50">{s.title}</h3>
              <p className="m-0 text-[13px] text-ink-200">{s.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
