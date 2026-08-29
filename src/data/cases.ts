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
    id: 'vibecodia-agenda',
    name: 'VibeCodia Agenda 2.0',
    problem:
      'Perda de faturamento por faltas não justificadas e tempo excessivo gasto agendando clientes no WhatsApp.',
    solution:
      'SaaS de agendamento em 30s com validação de PIN via SMS, link personalizado, gestão de comissões e painel financeiro.',
    result: 'Redução de 70% nas faltas e mais de 200 estabelecimentos organizados.',
    stack: ['React', 'TypeScript', 'Fastify', 'SMS Gateway', 'Zod'],
    status: 'production',
  },
  {
    id: 'vibecodia-studio',
    name: 'VibeCodia Studio — AI Assistant',
    problem:
      'Custos elevados e complexidade técnica para criar e hospedar chatbots com IA de atendimento.',
    solution:
      'Pipeline sequencial de 5 agentes autônomos para briefing, engenharia de prompt, guardrails e deploy no WhatsApp.',
    result: 'Atendimento inteligente 24/7 sem alucinação de dados e integração em minutos.',
    stack: ['Multi-Agent', 'WhatsApp Cloud API', 'Supabase', 'React'],
    status: 'production',
  },
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
