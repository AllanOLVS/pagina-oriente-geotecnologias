import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-sFundo-nomeBranco.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,18,36,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between" style={{ height: 90 }}>
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Oriente Geotecnologias" className="h-16 object-contain" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="font-label text-[12px] uppercase tracking-[0.12em] transition-colors hover:text-[color:var(--gold-primary)]"
              style={{ color: "var(--text-secondary)" }}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="hidden lg:inline-flex btn-primary" style={{ padding: "10px 22px", fontSize: "0.7rem" }}>
          Orçamento
        </a>

        <button aria-label="Abrir menu" className="lg:hidden p-2" onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" style={{ color: "var(--text-primary)" }} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col items-center justify-center gap-8"
          style={{ background: "var(--bg-base)" }}>
          <button aria-label="Fechar menu" className="absolute top-6 right-6 p-2" onClick={() => setOpen(false)}>
            <X className="w-7 h-7" style={{ color: "var(--text-primary)" }} />
          </button>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-label text-lg uppercase tracking-[0.15em]"
              style={{ color: "var(--text-primary)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="btn-primary mt-4">Orçamento</a>
        </div>
      )}
    </header>
  );
}
