import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#cases', label: 'Cases' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-ink-500/70 bg-ink-900/82 backdrop-blur-xl'
          : 'border-transparent bg-ink-900/40 backdrop-blur-md'
      }`}
      aria-label="Navegação principal"
    >
      <div className="container-content">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="brand flex items-center gap-2.5 font-bold tracking-tightest">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-green/25 bg-green-soft text-green">
              <Terminal size={18} />
            </span>
            <span className="text-[17px]">
              rt5labs
              <span className="text-ink-300">.io</span>
            </span>
          </a>

          <ul className="hidden items-center gap-6 text-sm text-ink-200 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-ink-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-ink-500 text-ink-100 transition-colors hover:border-ink-300 sm:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <ul className="flex flex-col gap-1 pb-4 sm:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-ink-100 transition-colors hover:bg-ink-800 hover:text-ink-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
