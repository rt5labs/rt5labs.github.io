import SpotlightCard from '@/components/ui/SpotlightCard';
import { 
  Link2, 
  Smartphone, 
  ShieldAlert, 
  CalendarDays, 
  Users2, 
  TrendingUp, 
  History, 
  BellRing 
} from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: 'Link Personalizado Exclusivo',
    desc: 'Cada salão recebe sua URL limpa: agenda.vibecodia.com.br/sua-marca. Divulgue na bio do Instagram e WhatsApp.',
    tag: 'Link Direto',
    color: 'rgba(245, 158, 11, 0.15)',
  },
  {
    icon: Smartphone,
    title: 'Agendamento em 30 Segundos',
    desc: 'Seu cliente só digita nome e telefone. Sem baixar app da Play Store, sem lembrar senha ou preencher formulários longos.',
    tag: 'Zero Fricção',
    color: 'rgba(0, 240, 255, 0.15)',
  },
  {
    icon: ShieldAlert,
    title: 'Confirmação Anti-Falta por SMS',
    desc: 'PIN de segurança temporário enviado via SMS. Elimina trotes, bots e reduz ausências não justificadas em até 70%.',
    tag: 'Segurança',
    color: 'rgba(63, 185, 80, 0.15)',
  },
  {
    icon: CalendarDays,
    title: 'Agenda Visual com Drag & Drop',
    desc: 'Visão panorâmica por dia, semana ou profissional. Reordene atendimentos, bloqueie intervalos e intervalos de almoço com um clique.',
    tag: 'Produtividade',
    color: 'rgba(168, 85, 247, 0.15)',
  },
  {
    icon: Users2,
    title: 'Gestão de Barbeiros & Comissões',
    desc: 'Cadastre quantos colaboradores desejar. Defina comissões percentuais ou fixas e feche a folha sem dor de cabeça no fim do mês.',
    tag: 'Equipe',
    color: 'rgba(245, 158, 11, 0.15)',
  },
  {
    icon: TrendingUp,
    title: 'Controle Financeiro em Tempo Real',
    desc: 'Acompanhe faturamento do dia, tíquete médio, serviços mais procurados e curvas de sazonalidade direto no painel.',
    tag: 'Gestão',
    color: 'rgba(63, 185, 80, 0.15)',
  },
  {
    icon: History,
    title: 'Histórico & CRM de Clientes',
    desc: 'Descubra clientes inativos há mais de 30 dias e reative agendamentos com promoções pontuais e fidelização.',
    tag: 'Retenção',
    color: 'rgba(0, 240, 255, 0.15)',
  },
  {
    icon: BellRing,
    title: 'Lembretes Automáticos de Horário',
    desc: 'Disparo de lembrete 24h e 2h antes do atendimento. O cliente pode confirmar ou cancelar com antecedência.',
    tag: 'Automação',
    color: 'rgba(240, 136, 62, 0.15)',
  },
];

export default function AgendaFeatures() {
  return (
    <section id="agenda-features" className="container-content py-12 sm:py-16">
      <div className="section-eyebrow text-amber">
        <span>#</span> funcionalidades 2.0
      </div>
      <h2 className="section-heading">
        Tudo o que seu negócio precisa em um <span className="text-amber">só ecossistema</span>
      </h2>
      <p className="section-sub mt-1 max-w-xl">
        Do link na bio do Instagram ao controle de faturamento e comissões da equipe.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <SpotlightCard
              key={f.title}
              spotlightColor={f.color}
              className="p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-ink-600 bg-ink-800 text-amber">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono text-ink-400 border border-ink-600 rounded px-1.5 py-0.5">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-ink-50 mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-ink-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
