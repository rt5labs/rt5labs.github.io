import { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Smartphone, 
  RotateCcw, 
  Check, 
  ShieldCheck,
  User,
  Sliders
} from 'lucide-react';
import BorderBeam from '@/components/ui/BorderBeam';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export default function InteractiveBotBuilder() {
  const [companyName, setCompanyName] = useState('Studio Lumina Beleza');
  const [businessNiche, setBusinessNiche] = useState('Estética & Bem-Estar');
  const [tone, setTone] = useState<'friendly' | 'executive' | 'technical'>('friendly');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(true);

  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Seja muito bem-vindo ao Studio Lumina Beleza ✨ Como posso te ajudar hoje? Você pode tirar dúvidas sobre serviços, valores ou agendar um horário.',
      timestamp: '14:30',
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUpdateBot = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
      const greeting =
        tone === 'friendly'
          ? `Olá! Seja super bem-vindo(a) à ${companyName}! 🌟 Como podemos iluminar o seu dia?`
          : tone === 'executive'
          ? `Prezado(a) cliente, bem-vindo(a) ao canal oficial da ${companyName}. Em que posso colaborar com seu atendimento hoje?`
          : `Sistema de Atendimento ${companyName} conectado. Especifique sua solicitação ou código de serviço.`;

      setMessages([
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: greeting,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 800);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');

    // Generate contextual bot answer
    setTimeout(() => {
      let botResponse = '';
      const lower = userText.toLowerCase();

      if (lower.includes('preço') || lower.includes('valor') || lower.includes('quanto')) {
        botResponse = `Na ${companyName}, nossos pacotes iniciam em R$ 45,00 com garantia de qualidade. Deseja que eu envie a tabela detalhada ou o link de agendamento online?`;
      } else if (lower.includes('horário') || lower.includes('aberto') || lower.includes('funciona')) {
        botResponse = `Nosso horário de atendimento é de Segunda a Sábado, das 09:00 às 20:00. Você pode escolher seu melhor horário direto no link de agendamento!`;
      } else if (lower.includes('agendar') || lower.includes('marcar') || lower.includes('horario')) {
        botResponse = `Perfeito! Você pode agendar em menos de 30 segundos sem precisar baixar aplicativo pelo link: agenda.vibecodia.com.br/${companyName.toLowerCase().replace(/\s+/g, '-')}`;
      } else {
        botResponse = `Entendi perfeitamente sua pergunta sobre "${userText}". Na ${companyName}, prezamos pelo melhor atendimento. Gostaria de falar com um consultor humano ou agendar um serviço agora?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 600);
  };

  return (
    <section id="bot-sandbox" className="container-content py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="mono-label text-cyan"># sandbox interativo</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 mt-1">
          Configure & Teste o seu Assistente ao Vivo
        </h2>
        <p className="text-sm text-ink-300 mt-2">
          Personalize as regras da sua empresa à esquerda e converse com o agente em tempo real à direita.
        </p>
      </div>

      <div className="relative grid lg:grid-cols-12 gap-6 overflow-hidden rounded-xl border border-ink-500 bg-ink-900 p-5 sm:p-7 shadow-2xl">
        <BorderBeam size={220} duration={12} colorFrom="#00f0ff" colorTo="#3fb950" />

        {/* Left Form Settings */}
        <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-ink-700/80 pb-6 lg:pb-0 lg:pr-6">
          <form onSubmit={handleUpdateBot} className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan">
              <Sliders size={14} />
              Configuração da Persona
            </div>

            <div>
              <label className="block text-xs font-mono text-ink-300 mb-1">Nome da Empresa</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="w-full rounded-md border border-ink-600 bg-ink-850 px-3 py-2 text-xs text-ink-100 placeholder-ink-400 focus:border-cyan focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-ink-300 mb-1">Ramo de Atuação</label>
              <select
                value={businessNiche}
                onChange={(e) => setBusinessNiche(e.target.value)}
                className="w-full rounded-md border border-ink-600 bg-ink-850 px-3 py-2 text-xs text-ink-100 focus:border-cyan focus:outline-none"
              >
                <option value="Estética & Bem-Estar">Estética & Salão de Beleza</option>
                <option value="Barbearia Moderna">Barbearia & Barbearia Premium</option>
                <option value="Consultoria & Serviços">Consultoria & Serviços B2B</option>
                <option value="Clínica & Saúde">Clínica Médica & Odonto</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-ink-300 mb-1">Tom de Voz da IA</label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => setTone('friendly')}
                  className={`px-2 py-1.5 rounded text-[11px] font-mono border transition-all ${
                    tone === 'friendly'
                      ? 'border-cyan bg-cyan/15 text-cyan'
                      : 'border-ink-700 bg-ink-800 text-ink-300'
                  }`}
                >
                  Amigável
                </button>
                <button
                  type="button"
                  onClick={() => setTone('executive')}
                  className={`px-2 py-1.5 rounded text-[11px] font-mono border transition-all ${
                    tone === 'executive'
                      ? 'border-cyan bg-cyan/15 text-cyan'
                      : 'border-ink-700 bg-ink-800 text-ink-300'
                  }`}
                >
                  Executivo
                </button>
                <button
                  type="button"
                  onClick={() => setTone('technical')}
                  className={`px-2 py-1.5 rounded text-[11px] font-mono border transition-all ${
                    tone === 'technical'
                      ? 'border-cyan bg-cyan/15 text-cyan'
                      : 'border-ink-700 bg-ink-800 text-ink-300'
                  }`}
                >
                  Técnico
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full btn btn-cyan text-xs py-2.5 font-semibold flex items-center justify-center gap-2 mt-2"
            >
              <Sparkles size={14} />
              {isGenerating ? 'Recalibrando Agente...' : 'Aplicar Persona ao Chat'}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-ink-800/80 text-[11px] font-mono text-ink-400 space-y-1.5">
            <div className="flex items-center gap-1.5 text-green">
              <ShieldCheck size={13} />
              Guardrail ativo: sem alucinações
            </div>
            <div className="flex items-center gap-1.5 text-ink-300">
              <Smartphone size={13} />
              Pronto para WhatsApp Cloud API
            </div>
          </div>
        </div>

        {/* Right Live Chat Simulator */}
        <div className="lg:col-span-7 flex flex-col h-[420px] rounded-lg border border-ink-700 bg-ink-950/80 overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-ink-700 bg-ink-850 px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="relative grid h-8 w-8 place-items-center rounded-full bg-cyan/20 text-cyan border border-cyan/40">
                <Bot size={16} />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green border border-ink-900" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-ink-100">{companyName}</h4>
                <span className="text-[10px] font-mono text-green">● Online · IA 2.0</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMessages([
                  {
                    id: Date.now().toString(),
                    sender: 'bot',
                    text: `Olá! Canal de atendimento da ${companyName}. Como posso te ajudar hoje?`,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  },
                ]);
              }}
              className="text-ink-400 hover:text-ink-200 p-1"
              title="Limpar Conversa"
            >
              <RotateCcw size={13} />
            </button>
          </div>

          {/* Chat Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3.5 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`grid h-6 w-6 place-items-center rounded-full text-[10px] shrink-0 ${
                    msg.sender === 'user'
                      ? 'bg-amber/20 text-amber border border-amber/40'
                      : 'bg-cyan/20 text-cyan border border-cyan/40'
                  }`}
                >
                  {msg.sender === 'user' ? <User size={11} /> : <Bot size={11} />}
                </div>

                <div
                  className={`rounded-xl p-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-amber/20 text-ink-50 border border-amber/30 rounded-tr-none'
                      : 'bg-ink-850 text-ink-100 border border-ink-700 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[9px] font-mono text-ink-400 mt-1 text-right">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Quick Questions */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-ink-900 border-t border-ink-800 overflow-x-auto text-[10px] font-mono text-ink-300">
            <span className="text-ink-500 shrink-0">Sugestões:</span>
            <button
              type="button"
              onClick={() => setInputMessage('Quais são os serviços e valores?')}
              className="shrink-0 px-2 py-0.5 rounded border border-ink-700 hover:border-cyan hover:text-cyan transition-colors"
            >
              Quais serviços e valores?
            </button>
            <button
              type="button"
              onClick={() => setInputMessage('Qual o horário de funcionamento?')}
              className="shrink-0 px-2 py-0.5 rounded border border-ink-700 hover:border-cyan hover:text-cyan transition-colors"
            >
              Qual o horário?
            </button>
            <button
              type="button"
              onClick={() => setInputMessage('Como faço para agendar um horário?')}
              className="shrink-0 px-2 py-0.5 rounded border border-ink-700 hover:border-cyan hover:text-cyan transition-colors"
            >
              Como agendar?
            </button>
          </div>

          {/* Input Box */}
          <form onSubmit={handleSendMessage} className="flex items-center gap-2 p-2.5 bg-ink-850 border-t border-ink-700">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua mensagem para a IA..."
              className="flex-1 rounded-md border border-ink-600 bg-ink-900 px-3 py-2 text-xs text-ink-50 placeholder-ink-400 focus:border-cyan focus:outline-none"
            />
            <button
              type="submit"
              className="btn btn-cyan px-3 py-2 text-xs font-semibold flex items-center justify-center shrink-0"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
