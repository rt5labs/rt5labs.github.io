export type CaseStatus = 'production' | 'beta' | 'archived';

export interface CaseStudy {
  id: string;
  name: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  status: CaseStatus;
}

export const cases: CaseStudy[] = [
  {
    id: 'financas-gestao',
    name: 'Finanças & Gestão Integrada',
    problem:
      'Controle financeiro disperso em planilhas manuais e falta de visibilidade consolidada.',
    solution:
      'Plataforma customizada com conciliação automática, dashboards em tempo real e relatórios executivos.',
    result: 'Gestão financeira transparente e eliminação de gargalos operacionais.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    status: 'production',
  },
  {
    id: 'business-operations-saas',
    name: 'Operations & Workflow SaaS',
    problem:
      'Operações descentralizadas em ferramentas desconectadas gerando retrabalho.',
    solution:
      'Sistema web sob medida para automação de processos internos e centralização de dados.',
    result: 'Fluxo operacional padronizado e ganho de produtividade da equipe.',
    stack: ['TypeScript', 'React', 'Node.js', 'AWS'],
    status: 'production',
  },
  {
    id: 'cloud-platform-iac',
    name: 'Cloud Infrastructure & IaC',
    problem: 'Deploys manuais inconsistentes e instabilidade de infraestrutura.',
    solution:
      'Infraestrutura como código automatizada com containers e pipeline de CI/CD seguro.',
    result: 'Deploys previsíveis com zero downtime e ambientes padronizados.',
    stack: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'],
    status: 'production',
  },
];

export const statusLabels: Record<CaseStatus, string> = {
  production: 'Production',
  beta: 'Beta',
  archived: 'Archived',
};

export const statusBadgeClass: Record<CaseStatus, string> = {
  production: 'badge-green',
  beta: 'badge-yellow',
  archived: 'badge-orange',
};

export const statusDotClass: Record<CaseStatus, string> = {
  production: 'bg-green',
  beta: 'bg-yellow',
  archived: 'bg-orange',
};
