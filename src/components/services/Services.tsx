import { Wrench, Cloud, Rocket, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: 'SaaS B2B Sob Demanda',
    description:
      'Sistemas e plataformas web desenhados sob medida para automatizar as operações da sua empresa.',
  },
  {
    icon: Bot,
    title: 'AI-Native & Automação',
    description:
      'Integração de LLMs, agentes autônomos, busca semântica (RAG) e fluxos de IA aplicados ao seu negócio.',
  },
  {
    icon: Cloud,
    title: 'Cloud First & Architecture',
    description:
      'Arquitetura resiliente em nuvem (AWS/GCP), infraestrutura como código (IaC), containers e escalabilidade.',
  },
  {
    icon: Rocket,
    title: 'Continuous Delivery & DevOps',
    description:
      'Pipelines CI/CD automatizados, testes contínuos, observabilidade e deploy em produção com máxima segurança.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="container-content mt-20 sm:mt-24">
      <div className="section-eyebrow">
        <span className="text-green">#</span> serviços
      </div>
      <h2 className="section-heading">O que fazemos</h2>

      <div className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
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
