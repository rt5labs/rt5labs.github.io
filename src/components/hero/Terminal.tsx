const lines: { text: string; cls?: string }[] = [
  { text: '✓ analyzing b2b requirements', cls: 'text-green' },
  { text: '✓ cloud-first & ai-ready architecture', cls: 'text-green' },
  { text: '✓ software engineering & ai integration', cls: 'text-green' },
  { text: '✓ provisioning cloud infra (IaC)', cls: 'text-green' },
  { text: '✓ continuous delivery to production', cls: 'text-green' },
];

const meta: { key: string; value: string; valueCls?: string }[] = [
  { key: 'model', value: 'SaaS B2B Sob Demanda' },
  { key: 'ai', value: 'AI-Native & AI-Ready', valueCls: 'text-green' },
  { key: 'arch', value: 'Cloud First Architecture' },
  { key: 'delivery', value: 'CI/CD Automated' },
  { key: 'status', value: '● production ready', valueCls: 'text-green' },
];

export default function Terminal() {
  return (
    <div className="terminal group overflow-hidden rounded-[10px] border border-ink-500 bg-ink-950 shadow-[0_30px_80px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.02)] transition-transform duration-300 ease-out hover:-translate-y-1">
      {/* header */}
      <div className="flex h-[38px] items-center border-b border-ink-500 bg-ink-800 px-3.5">
        <div className="flex gap-1.5">
          <i className="h-[9px] w-[9px] rounded-full bg-ink-400" />
          <i className="h-[9px] w-[9px] rounded-full bg-ink-400" />
          <i className="h-[9px] w-[9px] rounded-full bg-ink-400" />
        </div>
        <span className="mx-auto font-mono text-xs text-ink-300">
          rt5labs.io
        </span>
      </div>

      {/* body */}
      <pre className="m-0 overflow-auto p-6 font-mono text-[13px] leading-[1.8] text-ink-100">
        <span className="text-ink-300">$</span> rt5labs init project
        {'\n'}
        {lines.map((l, i) => (
          <span key={i} className={l.cls}>
            {l.text}
            {'\n'}
          </span>
        ))}
        {'\n'}
        <span className="text-ink-400">
          ────────────────────────────
        </span>
        {'\n'}
        {meta.map((m, i) => (
          <span key={i}>
            <span className="text-yellow">{m.key.padEnd(10, ' ')}</span>
            <span className={m.valueCls ?? 'text-ink-100'}>{m.value}</span>
            {'\n'}
          </span>
        ))}
        {'\n'}
        <span className="text-green">→ ready to scale.</span>
        <span className="terminal-cursor" />
      </pre>
    </div>
  );
}
