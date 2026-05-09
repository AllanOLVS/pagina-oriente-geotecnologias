import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  MapPin, Plane, Mountain, Droplets, Route as RouteIcon, FileText,
  GraduationCap, Cpu, ShieldCheck, Globe2, ArrowRight, Quote, Star,
  ChevronDown, Lock, Clock, CheckCircle2, Mail, Phone, Instagram, Linkedin, Facebook,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Navbar } from "@/components/Navbar";
import { WhatsappFab } from "@/components/WhatsAppFab";
import { FadeUp } from "@/components/FadeUp";
import { Counter } from "@/components/Counter";
import { CasesSection } from "@/components/CasesSection";
import { BackToTop } from "@/components/BackToTop";
import heroBg from "@/assets/img-backgraund-hero.png";
import aboutImg from "@/assets/about.JPG";
import heroLogo from "@/assets/logo-sFundo-nomeBranco.png";
import fotoJanderson from "@/assets/foto-janderson.jpeg";
import fotoMahatman from "@/assets/foto-mahatman.jpeg";
import bgFaleConosco from "@/assets/backgraund-fale-conosco.JPG";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oriente Geotecnologias — Regularização Fundiária, Topografia e Drone" },
      { name: "description", content: "Geotecnologia de precisão: regularização fundiária, mapeamento aerofotogramétrico, topografia e infraestrutura. Equipe UFBA, tecnologia de ponta." },
      { property: "og:title", content: "Oriente Geotecnologias" },
      { property: "og:description", content: "Transformamos dados em território. Precisão que constrói o futuro." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: FileText, title: "Regularização de Imóveis Rurais", desc: "Georreferenciamento e regularização completa para propriedades rurais.", items: ["Georref. INCRA / SIGEF", "Cadastro Ambiental Rural (CAR)", "Laudos e memoriais técnicos"] },
  { icon: MapPin, title: "Regularização de Imóveis Urbanos", desc: "REURB e regularização fundiária urbana com segurança jurídica.", items: ["REURB-S e REURB-E", "Usucapião técnica", "Regularização municipal"] },
  { icon: Plane, title: "Levantamento Aerofotogramétrico", desc: "Drones profissionais para mapeamento de alta precisão.", items: ["Ortomosaicos georreferenciados", "Nuvem de pontos densa", "Modelos 3D e MDT/MDS"] },
  { icon: Mountain, title: "Levantamento Topográfico", desc: "Topografia planialtimétrica com tecnologia GNSS RTK.", items: ["Planimetria e altimetria", "GNSS RTK / Estação Total", "Demarcação e georreferenciamento"] },
  { icon: Droplets, title: "Projetos de Drenagem", desc: "Soluções hidráulicas para micro e macrodrenagem.", items: ["Dimensionamento hidráulico", "Plantas e perfis", "Memoriais descritivos"] },
  { icon: RouteIcon, title: "Projetos Rodoviários e Terraplanagem", desc: "Traçado geométrico e cálculo de movimento de terra.", items: ["Traçado e perfis", "Volumes de corte e aterro", "Quantitativos e cronograma"] },
];

const steps = [
  { n: "01", title: "DIAGNÓSTICO", desc: "Análise da documentação e definição do escopo técnico ideal." },
  { n: "02", title: "PLANEJAMENTO", desc: "Preparo de logística, plano de voo (se drone) e aferição de equipamentos." },
  { n: "03", title: "LEVANTAMENTO", desc: "Ida a campo com equipe especializada para coleta de dados de alta precisão." },
  { n: "04", title: "PROCESSAMENTO", desc: "Uso de softwares de engenharia para gerar plantas, laudos e modelos." },
  { n: "05", title: "ENTREGA", desc: "Aprovação junto aos órgãos competentes e entrega do material ao cliente." },
];

const differentials = [
  { icon: GraduationCap, title: "Equipe Formada pela UFBA", desc: "Solidez acadêmica federal e domínio técnico comprovado em campo." },
  { icon: Cpu, title: "Tecnologia de Ponta", desc: "Drones DJI, GNSS RTK, AutoCAD Civil 3D e softwares especializados." },
  { icon: ShieldCheck, title: "Transparência Total", desc: "Relatórios claros, prazos cumpridos e comunicação direta com o cliente." },
  { icon: Globe2, title: "Cobertura Ampla", desc: "Atendimento em múltiplos estados, projetos rurais e urbanos." },
];

const testimonials = [
  { quote: "Trabalho impecável na regularização da nossa fazenda. Prazo cumprido e relatórios extremamente claros.", name: "Ricardo Almeida", role: "Produtor Rural · BA" },
  { quote: "Mapeamento por drone com qualidade muito acima do que esperávamos. Recomendo sem hesitação.", name: "Marcela Souza", role: "Construtora Horizonte" },
  { quote: "Profissionais técnicos de verdade. Resolveram um problema fundiário antigo da nossa família.", name: "João Pereira", role: "Proprietário · MA" },
];

const team = [
  {
    name: "Janderson",
    role: "ENGENHEIRO · UFBA",
    spec: "Engenheiro Agrimensor e Cartógrafo focado em alta precisão posicional.",
    img: fotoJanderson,
    skills: [{ icon: Mountain, label: "Topografia" }, { icon: MapPin, label: "GNSS" }]
  },
  {
    name: "Mahatman",
    role: "ENGENHEIRO · UFBA",
    spec: "Especialista em mapeamento aéreo e soluções de fotogrametria.",
    img: fotoMahatman,
    skills: [{ icon: Plane, label: "Drones" }, { icon: FileText, label: "Modelos 3D" }]
  }
];

function Index() {
  const equipeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!equipeRef.current) return;
      const rect = equipeRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) for the 300vh container
      const totalScroll = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      let rawProgress = currentScroll / totalScroll;
      const progress = Math.max(0, Math.min(1, rawProgress));
      
      equipeRef.current.style.setProperty('--scroll-progress', progress.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="top" style={{ background: "var(--bg-base)" }}>
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-center justify-center" style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 60 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, rgba(7,18,36,0.85) 0%, rgba(7,18,36,0.5) 40%, rgba(7,18,36,0.3) 100%)",
        }} />
        <div className="container-x relative z-10 w-full">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="max-w-2xl text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight hero-animate hero-delay-1" style={{ color: "var(--text-primary)" }}>
                Transformamos Dados<br />
                em Território.<br />
                Precisão que constrói o{" "}
                <span style={{ color: "var(--gold-primary)" }}>Futuro.</span>
              </h2>
            </div>
            <a
              href="#contato"
              className="btn-primary btn-shimmer hero-animate hero-delay-3"
              style={{ padding: "16px 40px", fontSize: "0.85rem" }}
            >
              Solicitar Orçamento <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL STRIP */}
      <section id="numeros" style={{ background: "var(--bg-surface)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: 50, suffix: "+", l: "Projetos Entregues" },
            { n: 8, suffix: "+", l: "Estados Atendidos" },
            { n: 100, suffix: "%", l: "Satisfação" },
            { n: 3, suffix: "", l: "Especialistas UFBA" },
          ].map((m, i) => (
            <div key={i} className="text-center md:border-l first:border-l-0" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="font-display text-4xl md:text-5xl" style={{ color: "var(--gold-primary)" }}>
                <Counter to={m.n} suffix={m.suffix} />
              </div>
              <div className="font-label text-[11px] uppercase tracking-[0.18em] mt-2" style={{ color: "var(--text-secondary)" }}>{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section-y">
        <div className="container-x grid lg:grid-cols-[1.08fr_0.92fr] gap-14 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <FadeUp><div className="eyebrow mb-4">Sobre a Oriente</div>
            <div className="w-10 h-0.5 mt-2" style={{ background: "var(--gold-primary)" }} /></FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-display text-h1 mb-8 max-w-xl">
                Nascemos do sonho de transformar conhecimento em <span style={{ color: "var(--gold-primary)" }}>impacto real</span>.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mb-6 text-[17px] max-w-xl" style={{ color: "var(--text-secondary)" }}>
                A Oriente Geotecnologias nasceu da iniciativa de jovens engenheiros formados pela Universidade Federal da Bahia, unindo rigor acadêmico, sensibilidade técnica e a vontade genuína de resolver problemas reais.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <p className="mb-10 text-[17px] max-w-xl" style={{ color: "var(--text-secondary)" }}>
                Cada projeto é mais do que um trabalho técnico: é a viabilização de um sonho, a regularização de um patrimônio, a base sobre a qual famílias e empresas constroem o futuro.
              </p>
            </FadeUp>
            <div className="space-y-5 max-w-xl">
              {[
                "Rigor técnico de formação universitária federal",
                "Tecnologia de ponta aplicada ao campo",
                "Compromisso com prazos e transparência",
              ].map((d, i) => (
                <FadeUp key={i} delay={400 + i * 100}>
                  <div className="flex items-center gap-4">
                    <div className="w-3.5 h-3.5 rotate-45 border-2" style={{ borderColor: "var(--gold-primary)" }} />
                    <span className="text-[16px]" style={{ color: "var(--text-primary)" }}>{d}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={200} className="relative justify-self-center lg:justify-self-end w-full max-w-[430px] sm:max-w-[520px] lg:max-w-none lg:w-[92%]">
            <div className="relative">
              <img src={aboutImg} alt="Levantamento topográfico em campo" loading="lazy"
                className="w-full object-cover rounded-xl"
                style={{ height: 620, border: "1px solid var(--border-subtle)", boxShadow: "0 24px 60px rgba(0,0,0,0.30)" }} />
              <div className="absolute -bottom-8 -left-8 glass p-6 hidden md:block" style={{ width: 280 }}>
                <div className="font-label text-[10px] uppercase tracking-[0.18em] mb-2" style={{ color: "var(--gold-primary)" }}>Atuação</div>
                <div className="font-display text-3xl mb-2" style={{ color: "var(--text-primary)" }}>Rural & Urbano</div>
                <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Projetos em todo o território nacional.</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* MISSÃO E VISÃO */}
      <section className="section-y relative overflow-hidden" style={{ background: "var(--bg-base)", zIndex: 1 }}>
        <style dangerouslySetInnerHTML={{__html: `
          .divider-y { transform: scaleY(0); transform-origin: top; transition: transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s; }
          .in .divider-y { transform: scaleY(1); }
          .divider-x { transform: scaleX(0); transform-origin: left; transition: transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s; }
          .in .divider-x { transform: scaleX(1); }
          @keyframes spin-slow { 100% { transform: rotate(360deg); } }
          @keyframes spin-slow-reverse { 100% { transform: rotate(-360deg); } }
        `}} />

        {/* Fundo de Grade Geográfica Sutil */}
        <div className="absolute top-0 right-0 w-[800px] h-full pointer-events-none opacity-[0.04]" style={{ right: '-5%' }}>
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geo-grid)" />
            <path d="M400,0 Q600,400 400,800" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <path d="M200,0 Q400,400 200,800" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <path d="M600,0 Q800,400 600,800" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <path d="M0,400 Q400,600 800,400" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <path d="M0,200 Q400,400 800,200" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <path d="M0,600 Q400,800 800,600" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="300" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="container-x relative z-10 flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
          
          {/* Missão */}
          <FadeUp className="w-full md:flex-1 flex flex-col">
            <div className="group relative overflow-hidden w-full h-full p-8 md:p-12 lg:p-16 flex flex-col" 
              style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(2px)", borderRadius: "16px" }}
              onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
              }}>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                   style={{ background: "radial-gradient(circle 450px at var(--x, 50%) var(--y, 50%), rgba(201,168,76,0.04), transparent)" }} />

              <div className="absolute top-0 right-4 lg:right-8 text-[120px] font-bold leading-none hidden md:block select-none pointer-events-none" 
                   style={{ color: "#ffffff", opacity: 0.03, fontFamily: "'Playfair Display', serif" }}>
                01
              </div>
              
              <div className="relative w-[72px] h-[72px] mb-12 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 relative z-10 transition-transform duration-500 group-hover:scale-110" 
                             style={{ color: "var(--gold-primary)", filter: "drop-shadow(0 0 10px rgba(201,168,76,0.25))" }} strokeWidth={1} />
                <div className="absolute inset-0 rounded-full border border-dashed border-[var(--gold-primary)] opacity-40" 
                     style={{ animation: "spin-slow 15s linear infinite" }} />
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-[20px] h-[2px]" style={{ background: "var(--gold-primary)" }} />
                <div className="text-[10px] md:text-[11px] uppercase font-semibold" 
                     style={{ color: "var(--gold-primary)", letterSpacing: "0.2em" }}>Nossa Missão</div>
              </div>
              
              <h3 className="mb-6 relative z-10" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.15 }}>
                <span className="block" style={{ fontWeight: 300, color: "var(--text-primary)" }}>Soluções precisas para o</span>
                <span className="block" style={{ fontWeight: 700, color: "var(--text-primary)" }}>desenvolvimento sustentável do território.</span>
              </h3>
              
              <p className="text-[15px] leading-relaxed relative z-10 mt-auto" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--text-secondary)", fontWeight: 400 }}>
                Fornecer soluções inovadoras em regularização fundiária, mapeamento, topografia e infraestrutura, garantindo eficiência, confiabilidade e gestão estratégica do espaço — com qualidade, transparência e responsabilidade técnica.
              </p>
            </div>
          </FadeUp>

          {/* Divisor Visual */}
          <FadeUp delay={100} className="hidden md:block w-[1px] relative mx-4 lg:mx-8 shrink-0 !opacity-100 !translate-y-0 transition-none">
            <div className="divider-y absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--gold-primary), transparent)" }} />
          </FadeUp>
          <FadeUp delay={100} className="md:hidden h-[1px] w-full relative my-2 shrink-0 !opacity-100 !translate-y-0 transition-none">
            <div className="divider-x absolute inset-0" style={{ background: "linear-gradient(to right, var(--gold-primary), transparent)" }} />
          </FadeUp>

          {/* Visão */}
          <FadeUp delay={150} className="w-full md:flex-1 flex flex-col">
            <div className="group relative overflow-hidden w-full h-full p-8 md:p-12 lg:p-16 flex flex-col" 
              style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(2px)", borderRadius: "16px" }}
              onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
              }}>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                   style={{ background: "radial-gradient(circle 450px at var(--x, 50%) var(--y, 50%), rgba(201,168,76,0.04), transparent)" }} />

              <div className="absolute top-0 right-4 lg:right-8 text-[120px] font-bold leading-none hidden md:block select-none pointer-events-none" 
                   style={{ color: "#ffffff", opacity: 0.03, fontFamily: "'Playfair Display', serif" }}>
                02
              </div>
              
              <div className="relative w-[72px] h-[72px] mb-12 flex items-center justify-center shrink-0">
                <Globe2 className="w-8 h-8 relative z-10 transition-transform duration-500 group-hover:scale-110" 
                        style={{ color: "var(--gold-primary)", filter: "drop-shadow(0 0 10px rgba(201,168,76,0.25))" }} strokeWidth={1} />
                <div className="absolute inset-0 rounded-full border border-dashed border-[var(--gold-primary)] opacity-40" 
                     style={{ animation: "spin-slow-reverse 15s linear infinite" }} />
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-[20px] h-[2px]" style={{ background: "var(--gold-primary)" }} />
                <div className="text-[10px] md:text-[11px] uppercase font-semibold" 
                     style={{ color: "var(--gold-primary)", letterSpacing: "0.2em" }}>Nossa Visão</div>
              </div>
              
              <h3 className="mb-6 relative z-10" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.15 }}>
                <span className="block" style={{ fontWeight: 300, color: "var(--text-primary)" }}>Ser referência nacional em</span>
                <span className="block" style={{ fontWeight: 700, color: "var(--text-primary)" }}>geotecnologia de alta precisão.</span>
              </h3>
              
              <p className="text-[15px] leading-relaxed relative z-10 mt-auto" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--text-secondary)", fontWeight: 400 }}>
                Oferecer soluções inovadoras que impulsionam o desenvolvimento sustentável, aprimorando continuamente nossos processos e tecnologias para entregar projetos confiáveis, eficientes e alinhados às necessidades dos nossos clientes.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="section-y">
        <div className="container-x">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <FadeUp><div className="eyebrow mb-4">O que fazemos</div></FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-display text-h1 mb-4">Serviços que viabilizam seu projeto.</h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p style={{ color: "var(--text-secondary)" }}>
                Da regularização à execução: cobertura completa em geotecnologia para o setor rural, urbano e de infraestrutura.
              </p>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="card-base h-full flex flex-col">
                  <s.icon className="w-10 h-10 mb-5" style={{ color: "var(--gold-primary)" }} strokeWidth={1.4} />
                  <div className="gold-separator h-0.5 mb-5" style={{ background: "var(--gold-primary)" }} />
                  <h3 className="font-display text-xl mb-3" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                  <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {s.items.map((it, k) => (
                      <li key={k} className="flex gap-2 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--gold-primary)" }}>—</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contato" className="btn-ghost">Saiba mais <ArrowRight className="w-3 h-3" /></a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="section-y relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
        {/* Fundo de Globo (Wireframe) - Apenas lado direito */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[800px] h-[800px] pointer-events-none opacity-[0.02]" style={{ right: '-15%' }}>
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="380" fill="none" stroke="#ffffff" strokeWidth="1" />
            <ellipse cx="400" cy="400" rx="190" ry="380" fill="none" stroke="#ffffff" strokeWidth="1" />
            <ellipse cx="400" cy="400" rx="380" ry="190" fill="none" stroke="#ffffff" strokeWidth="1" />
            <path d="M20,400 L780,400" fill="none" stroke="#ffffff" strokeWidth="1" />
            <path d="M400,20 L400,780" fill="none" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>

        <div className="container-x relative z-10">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <FadeUp><div className="eyebrow mb-4">Como Trabalhamos</div></FadeUp>
            <FadeUp delay={100}><h2 className="font-display text-h1">Um processo claro do diagnóstico à entrega.</h2></FadeUp>
          </div>
          <div className="relative mt-8">
            <div className="hidden lg:block absolute top-[32px] left-[8%] right-[8%] border-t border-dashed" style={{ borderColor: "rgba(201,168,76, 0.25)" }} />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4 relative">
              {steps.map((s, i) => (
                <FadeUp key={i} delay={i * 100} className="text-center flex flex-col items-center">
                  <div className="relative mb-6 z-10">
                    <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center text-xl font-medium transition-all duration-300"
                         style={{ 
                           background: "var(--bg-base)",
                           color: "var(--gold-primary)",
                           border: "1px solid rgba(201,168,76, 0.4)",
                           fontFamily: "var(--font-sans)"
                         }}>
                      {s.n}
                    </div>
                  </div>
                  <h3 className="text-[13px] font-bold tracking-[0.08em] mb-4 uppercase" style={{ color: "var(--text-primary)", fontFamily: "var(--font-sans)" }}>{s.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "230px", margin: "0 auto", fontFamily: "var(--font-sans)" }}>{s.desc}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section-y" style={{ background: "var(--bg-base)" }}>
        <div className="container-x">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <FadeUp><div className="eyebrow mb-4">Por que a Oriente</div></FadeUp>
            <FadeUp delay={100}><h2 className="font-display text-h1">Diferenciais que fazem a diferença em campo.</h2></FadeUp>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((d, i) => (
              <FadeUp key={i} delay={i * 100} className="h-full">
                <div className="card-base diff-card flex gap-6 h-full items-start">
                  <div className="shrink-0 w-14 h-14 rounded-lg flex items-center justify-center relative" style={{ background: "var(--bg-base)", border: "1px solid rgba(201,168,76, 0.3)" }}>
                    <div className="absolute inset-0 rounded-lg" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)" }} />
                    <d.icon className="w-7 h-7 relative z-10" style={{ color: "var(--gold-primary)" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2">{d.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{d.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CASES DE SUCESSO */}
      <CasesSection />

      {/* DEPOIMENTOS */}
      <section className="section-y" style={{ background: "var(--bg-base)" }}>
        <div className="container-x">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <FadeUp><div className="eyebrow mb-4">Quem confia</div></FadeUp>
            <FadeUp delay={100}><h2 className="font-display text-h1">A palavra de quem trabalhou com a gente.</h2></FadeUp>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="card-base testimonial-card h-full flex flex-col">
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sm font-bold" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold-primary)" }}>
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>{t.name}</div>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{t.role}</div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 mb-3" style={{ color: "var(--gold-muted)" }} />
                  <p className="italic mb-6 flex-1 text-[15px] leading-relaxed" style={{ color: "var(--text-primary)" }}>"{t.quote}"</p>
                  <div className="h-px mb-4" style={{ background: "var(--border-subtle)" }} />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="w-3.5 h-3.5" fill="var(--gold-primary)" stroke="var(--gold-primary)" />
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE - STICKY SCROLL */}
      <section id="equipe" ref={equipeRef} className="relative w-full equipe-scroll-section" style={{ background: "var(--bg-base)" }}>
        <div className="equipe-sticky-wrapper w-full overflow-hidden flex flex-col justify-start pt-[120px] md:pt-[140px] pb-10">
          <style dangerouslySetInnerHTML={{__html: `
            .equipe-scroll-section { height: auto; }
            .equipe-sticky-wrapper { position: relative; height: auto; }
            
            @media (min-width: 768px) {
              .equipe-scroll-section { height: 300vh; }
              .equipe-sticky-wrapper { position: sticky; top: 0; height: 100vh; }
              
              .scroll-card-1 {
                opacity: calc((var(--scroll-progress, 0) - 0.15) * 5);
                transform: translateX(calc(max(1 - (var(--scroll-progress, 0) - 0.15) * 5, 0) * -60px));
              }
              .scroll-card-2 {
                opacity: calc((var(--scroll-progress, 0) - 0.35) * 5);
                transform: translateX(calc(max(1 - (var(--scroll-progress, 0) - 0.35) * 5, 0) * 60px));
              }
            }
            
            .team-card {
              background: rgba(255,255,255,0.025);
              backdrop-filter: blur(8px);
              border: 1px solid rgba(255,255,255,0.06);
              border-radius: 16px;
              overflow: hidden;
              transition: border-color 0.3s ease, box-shadow 0.3s ease;
            }
            .team-card:hover {
              border-color: rgba(201,168,76,0.35);
              box-shadow: 0 20px 60px rgba(0,0,0,0.4);
            }
            .img-placeholder {
              background: linear-gradient(135deg, #1a2540 0%, #0d1629 100%);
            }
          `}} />

          {/* Decorativo: Fundo Grid Geo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.04] z-0">
            <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="400" r="380" fill="none" stroke="#ffffff" strokeWidth="1" />
              <circle cx="400" cy="400" r="280" fill="none" stroke="#ffffff" strokeWidth="1" />
              <circle cx="400" cy="400" r="180" fill="none" stroke="#ffffff" strokeWidth="1" />
              <path d="M400,20 L400,780" fill="none" stroke="#ffffff" strokeWidth="1" />
              <path d="M20,400 L780,400" fill="none" stroke="#ffffff" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="190" ry="380" fill="none" stroke="#ffffff" strokeWidth="1" />
              <ellipse cx="400" cy="400" rx="380" ry="190" fill="none" stroke="#ffffff" strokeWidth="1" />
            </svg>
          </div>

          {/* Decorativo: Glow Dourado Central */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
               style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />

          <div className="container-x relative z-10 w-full">
            {/* Cabeçalho */}
            <FadeUp className="max-w-[600px] mx-auto text-center mb-16 w-full flex flex-col items-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-[24px] h-[1px]" style={{ background: "var(--gold-primary)" }} />
                <span style={{ color: "var(--gold-primary)", letterSpacing: "0.25em", fontSize: "11px", fontWeight: 600 }}>QUEM SOMOS</span>
              </div>
              <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1 }}>
                <span className="block" style={{ fontWeight: 300, color: "var(--text-primary)" }}>Conheça os engenheiros</span>
                <span className="block" style={{ fontWeight: 700, color: "var(--text-primary)" }}>por trás da Oriente.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", opacity: 0.65, color: "var(--text-primary)" }}>
                Profissionais dedicados a entregar projetos geotecnológicos de altíssima precisão técnica.
              </p>
            </FadeUp>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 max-w-[900px] mx-auto">
              {team.map((m, i) => (
                <div key={i} className={`w-full md:flex-1 max-w-[340px] mx-auto ${i === 0 ? 'scroll-card-1' : 'scroll-card-2'}`}>
                  <div className={`team-card relative flex flex-col h-full aspect-square md:aspect-[4/5]`}>
                    {/* Container da foto como fundo completo */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={m.img} 
                        alt={m.name} 
                        className="w-full h-full object-cover relative z-10"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <div className="img-placeholder absolute inset-0 hidden items-center justify-center z-0">
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "64px", color: "var(--gold-primary)", opacity: 0.8 }}>
                          {m.name.split(" ").map(n => n[0]).join("").substring(0, 2)}
                        </span>
                      </div>
                      {/* Gradiente escuro subindo de baixo para dar leitura perfeita ao texto */}
                      <div className="absolute bottom-0 left-0 w-full h-[70%] z-20 pointer-events-none" 
                           style={{ background: "linear-gradient(to top, rgba(10,15,30,1) 0%, rgba(10,15,30,0.8) 40%, transparent 100%)" }} />
                    </div>

                    {/* Informações Sobrepostas na parte inferior */}
                    <div className="absolute bottom-0 left-0 w-full z-30 p-8 flex flex-col">
                      <div className="mb-4">
                        <span className="inline-block mb-3" style={{ letterSpacing: "0.2em", fontSize: "10px", color: "var(--gold-primary)", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "4px", padding: "4px 10px", backdropFilter: "blur(4px)" }}>
                          {m.role}
                        </span>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 600, color: "#ffffff", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
                          {m.name}
                        </h3>
                      </div>
                      <p className="mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", opacity: 0.85, color: "#ffffff", textShadow: "0 1px 4px rgba(0,0,0,0.5)", maxWidth: "90%" }}>
                        {m.spec}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        {m.skills.map((skill, si) => (
                          <div key={si} className="flex items-center gap-2">
                            {si > 0 && <span style={{ opacity: 0.4, color: "#ffffff" }}>·</span>}
                            <div className="flex items-center gap-1.5" style={{ opacity: 0.9, color: "#ffffff" }}>
                              <skill.icon className="w-4 h-4" strokeWidth={1.5} style={{ color: "var(--gold-primary)" }} />
                              <span style={{ fontSize: "12px", fontWeight: 500, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{skill.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="section-y relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.85), rgba(10, 15, 30, 0.95)), url(${bgFaleConosco})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}>
        <svg className="absolute -right-32 -top-32 w-[600px] h-[600px] opacity-[0.08]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="var(--gold-primary)" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="var(--gold-primary)" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="var(--gold-primary)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="100" y1="10" x2="100" y2="190"
              stroke="var(--gold-primary)" strokeWidth="0.3"
              transform={`rotate(${i * 15} 100 100)`} />
          ))}
        </svg>
        <div className="container-x relative grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeUp><div className="eyebrow mb-4">Fale com um especialista</div></FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-display text-h1 mb-6">
                Pronto para regularizar seu imóvel ou iniciar seu projeto?
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mb-10" style={{ color: "var(--text-secondary)" }}>
                Nossa equipe responde em até 24 horas. Sem compromisso, sem enrolação.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="space-y-4">
                {[
                  { icon: Lock, t: "Dados protegidos" },
                  { icon: Clock, t: "Resposta em até 24h" },
                  { icon: CheckCircle2, t: "Orçamento 100% gratuito" },
                ].map((it, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <it.icon className="w-4 h-4" style={{ color: "var(--gold-primary)" }} />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{it.t}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={150}>
            <form className="card-base p-8 md:p-10" style={{ borderColor: "var(--border-active)" }}
              onSubmit={(e) => { e.preventDefault(); alert("Recebemos seu contato! Retornaremos em breve."); }}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="nome" className="input-label">Nome completo</label>
                  <input id="nome" required className="input-dark" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="wpp" className="input-label">WhatsApp</label>
                  <input id="wpp" type="tel" required className="input-dark" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label htmlFor="srv" className="input-label">Tipo de serviço</label>
                  <select id="srv" className="input-dark">
                    <option>Regularização rural</option>
                    <option>Regularização urbana (REURB)</option>
                    <option>Mapeamento por drone</option>
                    <option>Topografia</option>
                    <option>Drenagem</option>
                    <option>Rodoviário / Terraplanagem</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="msg" className="input-label">Mensagem</label>
                  <textarea id="msg" rows={3} className="input-dark" placeholder="Conte um pouco sobre o seu projeto..." />
                </div>
                <button type="submit" className="btn-primary btn-shimmer w-full">Quero ser contatado <ArrowRight className="w-4 h-4" /></button>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm mt-2"
                  style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "#25D366" }}>●</span> Ou fale pelo WhatsApp agora
                </a>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid", borderImage: "linear-gradient(90deg, transparent, var(--gold-subtle), transparent) 1" }}>
        <div className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={heroLogo} alt="Oriente Geotecnologias" className="h-16 object-contain" />
            </div>
            <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
              Geotecnologia de precisão. Transformando dados em território desde 2021.
            </p>
            <div className="flex gap-3">
              {[{ Icon: Instagram, cls: "social-instagram" }, { Icon: Linkedin, cls: "social-linkedin" }, { Icon: Facebook, cls: "social-facebook" }].map((item, k) => (
                <a key={k} href="#" aria-label="Rede social" className={`w-9 h-9 flex items-center justify-center rounded transition-colors ${item.cls}`}
                  style={{ color: "var(--text-muted)", border: "1px solid var(--border-subtle)" }}>
                  <item.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-label text-[11px] uppercase tracking-[0.18em] mb-5" style={{ color: "var(--gold-primary)" }}>Navegação</div>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><a href="#sobre" className="hover:text-[color:var(--text-primary)]">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-[color:var(--text-primary)]">Serviços</a></li>
              <li><a href="#processo" className="hover:text-[color:var(--text-primary)]">Processo</a></li>
              <li><a href="#equipe" className="hover:text-[color:var(--text-primary)]">Equipe</a></li>
              <li><a href="#contato" className="hover:text-[color:var(--text-primary)]">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="font-label text-[11px] uppercase tracking-[0.18em] mb-5" style={{ color: "var(--gold-primary)" }}>Serviços</div>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              {services.map((s, i) => <li key={i}>{s.title}</li>)}
            </ul>
          </div>
          <div>
            <div className="font-label text-[11px] uppercase tracking-[0.18em] mb-5" style={{ color: "var(--gold-primary)" }}>Contato</div>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" style={{ color: "var(--gold-primary)" }}/> (71) 0000-0000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" style={{ color: "var(--gold-primary)" }}/> contato@orientegeo.com.br</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: "var(--gold-primary)" }}/> Salvador · BA</li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-center text-xs" style={{ background: "var(--bg-base)", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Oriente Geotecnologias · Todos os direitos reservados
        </div>
      </footer>

      <BackToTop />
      <WhatsappFab />
    </div>
  );
}
