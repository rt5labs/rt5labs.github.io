import { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Users, 
  DollarSign, 
  UserCheck, 
  Clock, 
  CheckCircle2, 
  Plus, 
  Smartphone, 
  ShieldCheck, 
  RotateCcw,
  Sparkles,
  X
} from 'lucide-react';
import BorderBeam from '@/components/ui/BorderBeam';

interface Slot {
  id: string;
  time: string;
  client: string;
  service: string;
  status: 'confirmed' | 'free';
  price: number;
}

const INITIAL_SLOTS: Slot[] = [
  { id: '1', time: '09:00', client: 'Lucas Silva', service: 'Corte Degradê', status: 'confirmed', price: 45 },
  { id: '2', time: '09:30', client: '—', service: 'Horário Livre', status: 'free', price: 0 },
  { id: '3', time: '10:00', client: 'Pedro Costa', service: 'Barba + Corte', status: 'confirmed', price: 75 },
  { id: '4', time: '10:30', client: '—', service: 'Horário Livre', status: 'free', price: 0 },
  { id: '5', time: '11:00', client: 'Marcelo Ramos', service: 'Corte Social', status: 'confirmed', price: 40 },
  { id: '6', time: '11:30', client: '—', service: 'Horário Livre', status: 'free', price: 0 },
];

export default function AgendaSimulator() {
  const [activeTab, setActiveTab] = useState<'agenda' | 'clients' | 'finance' | 'team'>('agenda');
  const [slots, setSlots] = useState<Slot[]>(INITIAL_SLOTS);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [bookingStep, setBookingStep] = useState<'form' | 'sms' | 'success'>('form');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedService, setSelectedService] = useState({ name: 'Corte Degradê', price: 45 });
  const [pinCode, setPinCode] = useState('');
  const [generatedPin, setGeneratedPin] = useState('8429');

  const totalRevenue = slots
    .filter((s) => s.status === 'confirmed')
    .reduce((acc, curr) => acc + curr.price, 0);

  const confirmedCount = slots.filter((s) => s.status === 'confirmed').length;

  const handleOpenBooking = (slot: Slot) => {
    setSelectedSlot(slot);
    setBookingStep('form');
    setClientName('');
    setClientPhone('');
    setPinCode('');
  };

  const handleSendPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;
    const randomPin = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedPin(randomPin);
    setBookingStep('sms');
  };

  const handleConfirmPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;

    setSlots((prev) =>
      prev.map((s) =>
        s.id === selectedSlot.id
          ? {
              ...s,
              client: clientName,
              service: selectedService.name,
              status: 'confirmed',
              price: selectedService.price,
            }
          : s
      )
    );

    setBookingStep('success');
    setTimeout(() => {
      setSelectedSlot(null);
    }, 1600);
  };

  const handleResetSlots = () => {
    setSlots(INITIAL_SLOTS);
  };

  return (
    <section id="demo-agenda" className="container-content py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="mono-label text-amber"># playground interativo</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-50 mt-1">
          Experimente o Painel da Barbearia ao Vivo
        </h2>
        <p className="text-sm text-ink-300 mt-2">
          Clique nos horários disponíveis para simular a experiência do cliente agendando em menos de 30 segundos.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-ink-500 bg-ink-900 shadow-2xl">
        <BorderBeam size={220} duration={12} colorFrom="#f59e0b" colorTo="#00f0ff" />

        {/* Browser Mockup Header */}
        <div className="flex items-center justify-between border-b border-ink-600/80 bg-ink-850 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <div className="ml-3 hidden sm:flex items-center gap-1.5 rounded-md border border-ink-600 bg-ink-900/90 px-3 py-1 text-xs font-mono text-ink-300">
              <span className="text-amber">https://</span>agenda.vibecodia.com.br/barbearia-vintage
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetSlots}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-ink-300 hover:text-amber transition-colors px-2 py-1 rounded border border-ink-600"
              title="Restaurar horários padrão"
            >
              <RotateCcw size={12} />
              Resetar Demo
            </button>
            <span className="badge badge-amber text-[10px]">Modo Interativo</span>
          </div>
        </div>

        {/* Main Application Shell */}
        <div className="grid md:grid-cols-[180px_1fr] min-h-[420px]">
          {/* Sidebar */}
          <div className="border-b md:border-b-0 md:border-r border-ink-700 bg-ink-900/60 p-3 flex md:flex-col gap-1 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('agenda')}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                activeTab === 'agenda'
                  ? 'bg-amber/15 text-amber border border-amber/30'
                  : 'text-ink-300 hover:bg-ink-800 hover:text-ink-100'
              }`}
            >
              <CalendarIcon size={15} />
              <span>Agenda</span>
              <span className="ml-auto text-[10px] font-mono opacity-80">{confirmedCount}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('clients')}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                activeTab === 'clients'
                  ? 'bg-amber/15 text-amber border border-amber/30'
                  : 'text-ink-300 hover:bg-ink-800 hover:text-ink-100'
              }`}
            >
              <Users size={15} />
              <span>Clientes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('finance')}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                activeTab === 'finance'
                  ? 'bg-amber/15 text-amber border border-amber/30'
                  : 'text-ink-300 hover:bg-ink-800 hover:text-ink-100'
              }`}
            >
              <DollarSign size={15} />
              <span>Financeiro</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('team')}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                activeTab === 'team'
                  ? 'bg-amber/15 text-amber border border-amber/30'
                  : 'text-ink-300 hover:bg-ink-800 hover:text-ink-100'
              }`}
            >
              <UserCheck size={15} />
              <span>Equipe</span>
            </button>
          </div>

          {/* Content View */}
          <div className="p-4 sm:p-6 bg-ink-950/40">
            {activeTab === 'agenda' && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-700/80 pb-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-ink-50">
                      Hoje — Quinta-feira, Agenda Online
                    </h3>
                    <p className="text-xs text-ink-300">
                      Barbearia Vintage Club · Profissional: <strong>Carlos Eduardo (Bancada 1)</strong>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-green bg-green/10 border border-green/30 px-2 py-0.5 rounded">
                      R$ {totalRevenue},00 faturado
                    </span>
                  </div>
                </div>

                {/* Slots Grid */}
                <div className="grid gap-2.5">
                  {slots.map((slot) => {
                    const isConfirmed = slot.status === 'confirmed';
                    return (
                      <div
                        key={slot.id}
                        className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                          isConfirmed
                            ? 'border-ink-600 bg-ink-850/80'
                            : 'border-dashed border-amber/40 bg-amber/5 hover:bg-amber/10 hover:border-amber cursor-pointer'
                        }`}
                        onClick={() => !isConfirmed && handleOpenBooking(slot)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 font-mono text-xs font-semibold text-amber w-14">
                            <Clock size={13} />
                            {slot.time}
                          </div>

                          <div>
                            <div className="text-xs sm:text-sm font-medium text-ink-100">
                              {slot.client}
                            </div>
                            <div className="text-[11px] text-ink-400">
                              {slot.service} {slot.price > 0 && `• R$ ${slot.price}`}
                            </div>
                          </div>
                        </div>

                        <div>
                          {isConfirmed ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-green bg-green/10 border border-green/30 px-2 py-0.5 rounded-full">
                              <CheckCircle2 size={12} />
                              Confirmado ✓
                            </span>
                          ) : (
                            <button
                              type="button"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-amber bg-amber/20 border border-amber/50 px-2.5 py-1 rounded-md hover:bg-amber hover:text-ink-950 transition-colors"
                            >
                              <Plus size={12} />
                              Agendar (30s)
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'clients' && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-ink-50">Clientes Recentes (Base Automática)</h3>
                <p className="text-xs text-ink-300">Cada agendamento via link alimenta seu CRM com histórico e frequência.</p>
                <div className="border border-ink-600 rounded-lg overflow-hidden divide-y divide-ink-700 text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-ink-850">
                    <div>
                      <span className="font-semibold text-ink-100">Lucas Silva</span>
                      <span className="text-ink-400 ml-2 font-mono">(11) 98123-4567</span>
                    </div>
                    <span className="badge badge-green text-[10px]">Frequente (3x/mês)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-ink-850">
                    <div>
                      <span className="font-semibold text-ink-100">Pedro Costa</span>
                      <span className="text-ink-400 ml-2 font-mono">(11) 97654-3210</span>
                    </div>
                    <span className="badge badge-cyan text-[10px]">Novo Cliente</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-ink-850">
                    <div>
                      <span className="font-semibold text-ink-100">Marcelo Ramos</span>
                      <span className="text-ink-400 ml-2 font-mono">(11) 99876-1122</span>
                    </div>
                    <span className="badge badge-amber text-[10px]">VIP</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'finance' && (
              <div className="space-y-4">
                <h3 className="font-semibold text-sm text-ink-50">Métricas & Comissões em Tempo Real</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg border border-ink-600 bg-ink-850">
                    <span className="text-xs text-ink-400">Faturamento Hoje</span>
                    <div className="text-xl font-bold font-mono text-green mt-1">R$ {totalRevenue},00</div>
                  </div>
                  <div className="p-3 rounded-lg border border-ink-600 bg-ink-850">
                    <span className="text-xs text-ink-400">Comissão Barbeiro (50%)</span>
                    <div className="text-xl font-bold font-mono text-amber mt-1">R$ {totalRevenue * 0.5},00</div>
                  </div>
                </div>
                <p className="text-xs text-ink-300">
                  Cálculo automático de comissões por profissional, evitando atritos e planilhas confusas.
                </p>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-ink-50">Gestão de Cadeiras & Profissionais</h3>
                <div className="border border-ink-600 rounded-lg p-3 bg-ink-850 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-ink-100">Carlos Eduardo</div>
                    <div className="text-ink-400">Barbeiro Master · Cadeira 01</div>
                  </div>
                  <span className="badge badge-green text-[10px]">Ativo no Turno</span>
                </div>
                <div className="border border-ink-600 rounded-lg p-3 bg-ink-850 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-ink-100">Matheus Ferreira</div>
                    <div className="text-ink-400">Barbeiro & Visagista · Cadeira 02</div>
                  </div>
                  <span className="badge badge-yellow text-[10px]">Entra às 13:00</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Booking Modal Overlay */}
        {selectedSlot && (
          <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-reveal">
            <div className="w-full max-w-sm rounded-xl border border-amber/50 bg-ink-900 p-5 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setSelectedSlot(null)}
                className="absolute top-3 right-3 text-ink-400 hover:text-ink-100 p-1"
              >
                <X size={16} />
              </button>

              {bookingStep === 'form' && (
                <form onSubmit={handleSendPin}>
                  <div className="flex items-center gap-2 text-amber font-mono text-xs mb-1">
                    <Sparkles size={14} />
                    Agendamento em 30 Segundos
                  </div>
                  <h4 className="text-base font-bold text-ink-50 mb-1">
                    Horário: {selectedSlot.time}
                  </h4>
                  <p className="text-xs text-ink-300 mb-4">
                    Sem login ou cadastro demorado. Basta seu nome e WhatsApp.
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <label className="block text-xs font-mono text-ink-300 mb-1">Serviço Desejado</label>
                      <select
                        value={selectedService.name}
                        onChange={(e) => {
                          const options = [
                            { name: 'Corte Degradê', price: 45 },
                            { name: 'Barba Terapia', price: 35 },
                            { name: 'Combo Completo (Cabelo + Barba)', price: 75 },
                          ];
                          const found = options.find((o) => o.name === e.target.value);
                          if (found) setSelectedService(found);
                        }}
                        className="w-full rounded-md border border-ink-600 bg-ink-850 px-3 py-2 text-xs text-ink-100 focus:border-amber focus:outline-none"
                      >
                        <option value="Corte Degradê">Corte Degradê — R$ 45,00</option>
                        <option value="Barba Terapia">Barba Terapia — R$ 35,00</option>
                        <option value="Combo Completo (Cabelo + Barba)">Combo Completo — R$ 75,00</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-ink-300 mb-1">Seu Nome</label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Ex: Rodrigo Santos"
                        className="w-full rounded-md border border-ink-600 bg-ink-850 px-3 py-2 text-xs text-ink-100 placeholder-ink-400 focus:border-amber focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-ink-300 mb-1">Celular / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="w-full rounded-md border border-ink-600 bg-ink-850 px-3 py-2 text-xs text-ink-100 placeholder-ink-400 focus:border-amber focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-amber text-xs py-2.5 font-semibold flex items-center justify-center gap-2"
                  >
                    <Smartphone size={14} />
                    Enviar PIN de Confirmação SMS
                  </button>
                </form>
              )}

              {bookingStep === 'sms' && (
                <form onSubmit={handleConfirmPin}>
                  <div className="flex items-center gap-2 text-green font-mono text-xs mb-1">
                    <ShieldCheck size={14} />
                    SMS Simulado Enviado!
                  </div>
                  <h4 className="text-base font-bold text-ink-50 mb-1">
                    Confirme o PIN de Segurança
                  </h4>
                  <div className="p-3 bg-ink-850 border border-ink-600 rounded-lg mb-3 text-xs text-ink-200">
                    <p className="font-mono text-[11px] text-amber">
                      📲 [SMS Simulado]: "Seu código VibeCodia para {selectedSlot.time} é: <strong>{generatedPin}</strong>"
                    </p>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-mono text-ink-300 mb-1">Digite o PIN de 4 dígitos</label>
                    <input
                      type="text"
                      maxLength={4}
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                      placeholder={generatedPin}
                      className="w-full text-center tracking-widest font-mono text-lg rounded-md border border-amber bg-ink-850 px-3 py-2 text-amber focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-primary text-xs py-2.5 font-semibold flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={14} />
                    Confirmar Agendamento
                  </button>
                </form>
              )}

              {bookingStep === 'success' && (
                <div className="py-6 text-center">
                  <div className="inline-grid h-12 w-12 place-items-center rounded-full bg-green/20 text-green mb-3">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-base font-bold text-ink-50">Horário Confirmado com Sucesso!</h4>
                  <p className="text-xs text-ink-300 mt-1">
                    {clientName} agendado para as {selectedSlot.time}.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
