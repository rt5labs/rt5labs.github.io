import { useState } from 'react';
import { 
  FileText, 
  MessageSquareCode, 
  Workflow, 
  ShieldAlert, 
  Rocket, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Loader2,
  LucideIcon
} from 'lucide-react';
import BorderBeam from '@/components/ui/BorderBeam';

interface AgentStep {
  id: number;
  name: string;
  role: string;
  icon: LucideIcon;
  description: string;
  outputExample: string;
}

const AGENTS: AgentStep[] = [
  {
    id: 1,
    name: 'Briefing Agent',
    role: 'Engenheiro de Contexto',
    icon: FileText,
    description: 'Analisa o catálogo de serviços, nicho, horário de funcionamento e público-alvo da sua empresa.',
    outputExample: 'Contexto estruturado: 3 serviços mapeados, regras de tolerância de 15min e política de cancelamento.',
  },
  {
    id: 2,
    name: 'Conversation Designer',
    role: 'Engenheiro de Prompts',
    icon: MessageSquareCode,
    description: 'Modela o tom de voz (formal, descontraído ou técnico), formata respostas curtas e árvores de decisão.',
    outputExample: 'Persona validada: tom empático, respostas objetivas com emojis pontuais e formatação de preços clara.',
  },
  {
    id: 3,
    name: 'Integration Agent',
    role: 'Orquestrador de APIs',
    icon: Workflow,
    description: 'Conecta os webhooks do WhatsApp Cloud API, banco de dados Supabase e links da VibeCodia Agenda.',
    outputExample: 'Endpoints vinculados: webhook /api/bot/webhook verificado com token seguro.',
  },
  {
    id: 4,
    name: 'Testing & Guardrails Agent',
    role: 'Auditor de Segurança',
    icon: ShieldAlert,
    description: 'Executa 25 testes simulados (tentativa de jailbreak, perguntas fora do escopo, cancelamento abrupto).',
    outputExample: 'Auditoria concluída: 100% dos testes de guardrail aprovados com fallback gracioso.',
  },
  {
    id: 5,
    name: 'Publication Agent',
    role: 'Deploy & Distribuição',
    icon: Rocket,
    description: 'Gera a URL compartilhável, QR Code do WhatsApp e o snippet JavaScript para colar no seu site.',
    outputExample: 'Pronto para produção: assistente.vibecodia.com.br/sua-marca no ar.',
  },
];

export default function AgenticPipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([
    'Aguardando início do pipeline de agentes...',
  ]);

  const handleStartSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);
    setLogs(['Iniciando esteira multi-agente...']);

    const runStep = (stepIndex: number) => {
      if (stepIndex > AGENTS.length) {
        setIsRunning(false);
        setActiveStep(AGENTS.length + 1);
        setLogs((prev) => [
          ...prev,
          '✓ Todos os agentes concluíram suas tarefas com sucesso!',
          '🚀 Assistente publicado e pronto para receber clientes.',
        ]);
        return;
      }

      setActiveStep(stepIndex);
      const currentAgent = AGENTS[stepIndex - 1];
      setLogs((prev) => [
        ...prev,
        `[Agent ${stepIndex}/5] ${currentAgent.name}: ${currentAgent.outputExample}`,
      ]);

      setTimeout(() => {
        runStep(stepIndex + 1);
      }, 1400);
    };

    setTimeout(() => {
      runStep(1);
    }, 400);
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveStep(0);
    setLogs(['Pipeline resetado. Pronto para nova execução.']);
  };

  return (
    <section id="pipeline-visualizer" className="container-content py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="mono-label text-cyan"># agentic workflow</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 mt-1">
          Esteira de 5 Agentes Autônomos
        </h2>
        <p className="text-sm text-ink-300 mt-2">
          Veja como nossa arquitetura de múltiplos agentes trabalha em cadeia para criar seu assistente com zero código manual.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-ink-500 bg-ink-900 p-6 sm:p-8 shadow-2xl">
        <BorderBeam size={200} duration={10} colorFrom="#00f0ff" colorTo="#a855f7" />

        {/* Controls header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-700/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-xs font-semibold text-ink-100 uppercase tracking-wider">
              Status da Esteira: {isRunning ? 'Processando Tokens...' : activeStep > 5 ? 'Concluído' : 'Pronto'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleStartSimulation}
              disabled={isRunning}
              className={`btn btn-cyan text-xs py-2 px-4 font-semibold flex items-center gap-2 ${
                isRunning ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isRunning ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Agentes Trabalhando...
                </>
              ) : (
                <>
                  <Play size={14} />
                  Simular Execução da Esteira
                </>
              )}
            </button>

            {activeStep > 0 && !isRunning && (
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-secondary text-xs py-2 px-3 flex items-center gap-1.5"
                title="Resetar"
              >
                <RotateCcw size={13} />
                Resetar
              </button>
            )}
          </div>
        </div>

        {/* 5 Agents Pipeline Cards */}
        <div className="grid gap-3 lg:grid-cols-5 relative">
          {AGENTS.map((agent) => {
            const Icon = agent.icon;
            const isCurrent = activeStep === agent.id;
            const isCompleted = activeStep > agent.id;

            return (
              <div
                key={agent.id}
                className={`relative rounded-lg border p-4 transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'border-cyan bg-cyan/10 shadow-lg shadow-cyan/15 scale-[1.02]'
                    : isCompleted
                    ? 'border-green/50 bg-ink-850 text-ink-100'
                    : 'border-ink-700 bg-ink-900/60 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-ink-400">
                      0{agent.id}
                    </span>
                    <div
                      className={`grid h-8 w-8 place-items-center rounded-md border ${
                        isCurrent
                          ? 'border-cyan bg-cyan text-ink-950 animate-bounce'
                          : isCompleted
                          ? 'border-green/40 bg-green/20 text-green'
                          : 'border-ink-700 bg-ink-800 text-ink-400'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 size={16} /> : <Icon size={16} />}
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-ink-50 mb-0.5">
                    {agent.name}
                  </h3>
                  <span className="block font-mono text-[10px] text-cyan/90 mb-2">
                    {agent.role}
                  </span>
                  <p className="text-[11px] text-ink-300 leading-relaxed">
                    {agent.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-ink-700/60 text-[10px] font-mono">
                  {isCompleted && <span className="text-green">✓ Concluído</span>}
                  {isCurrent && <span className="text-cyan animate-pulse">● Processando...</span>}
                  {!isCompleted && !isCurrent && <span className="text-ink-400">Na fila</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Terminal Output */}
        <div className="mt-6 rounded-lg border border-ink-700 bg-ink-950 p-4 font-mono text-xs text-ink-300">
          <div className="flex items-center justify-between text-[11px] text-ink-400 border-b border-ink-800 pb-2 mb-3">
            <span className="text-cyan">terminal://pipeline-orchestrator.log</span>
            <span>UTF-8 · Streaming 2.0</span>
          </div>
          <div className="space-y-1.5 max-h-36 overflow-y-auto">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-ink-500 select-none">&gt;</span>
                <span
                  className={
                    log.startsWith('✓') || log.startsWith('🚀')
                      ? 'text-green font-medium'
                      : log.startsWith('[Agent')
                      ? 'text-cyan'
                      : 'text-ink-300'
                  }
                >
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
