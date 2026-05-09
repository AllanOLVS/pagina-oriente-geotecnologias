import {
  Quote, ArrowRight, X,
  FileText, AlertTriangle, Lightbulb, CheckCircle2,
  Building2, Wrench, MapPin,
} from "lucide-react";
import type { CaseStudy } from "@/data/cases";

interface CaseDetailContentProps {
  caseData: CaseStudy;
  onClose: () => void;
  onCtaClick: () => void;
}

export function CaseDetailContent({ caseData, onClose, onCtaClick }: CaseDetailContentProps) {
  return (
    <div className="case-modal-root">
      {/* ── HERO IMAGE AREA (unchanged) ── */}
      <div className="case-modal-hero">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #1b2838 0%, #0d1b2a 50%, #1a3a4a 100%)",
        }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <button onClick={onClose} aria-label="Fechar case" className="case-modal-close">
          <X className="w-[18px] h-[18px]" />
        </button>
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: "25%" }}>
          <div className="flex items-center justify-center rounded-full" style={{
            width: 110, height: 110,
            border: "2px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(4px)",
          }}>
            <span className="font-bold text-2xl select-none" style={{
              color: "var(--gold-primary)",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.05em",
            }}>
              {caseData.logoInitials}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
          height: "60%",
          background: "linear-gradient(to top, #0d1b2a 0%, rgba(13,27,42,0.8) 40%, transparent 100%)",
        }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          <span className="case-modal-pill">{caseData.serviceTag}</span>
          <h2 className="text-2xl md:text-[28px] font-bold mt-3 mb-1" style={{
            fontFamily: "'Playfair Display', serif", color: "#fff",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}>{caseData.company}</h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{caseData.shortDescription}</p>
        </div>
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="case-modal-body">

        {/* ── OVERVIEW STRIP ── */}
        <div className="flex flex-wrap gap-3 mb-8 mt-2">
          {[
            { icon: Building2, label: "Cliente", value: caseData.company },
            { icon: Wrench, label: "Serviço", value: caseData.serviceTag },
            { icon: MapPin, label: "Local", value: caseData.location },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <item.icon size={15} className="shrink-0" style={{ color: "#c9a84c" }} />
              <div>
                <span className="block" style={{
                  fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.4)",
                }}>
                  {item.label}
                </span>
                <span className="block font-medium" style={{
                  fontSize: 13, color: "rgba(255,255,255,0.9)",
                }}>
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── CONTEXTO — gold left border ── */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{
              background: "rgba(201,168,76,0.1)",
            }}>
              <FileText size={15} style={{ color: "#c9a84c" }} />
            </div>
            <span className="case-modal-label">Contexto</span>
          </div>
          <div className="ml-4 pl-5" style={{ borderLeft: "2px solid rgba(201,168,76,0.25)" }}>
            <p className="case-modal-text">{caseData.context}</p>
          </div>
        </div>

        {/* ── DESAFIO — subtle card bg ── */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{
              background: "rgba(245,158,11,0.1)",
            }}>
              <AlertTriangle size={15} style={{ color: "rgba(251,191,36,0.8)" }} />
            </div>
            <span className="case-modal-label">Desafio</span>
          </div>
          <div className="p-5 rounded-xl" style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}>
            <p className="case-modal-text">{caseData.problem}</p>
          </div>
        </div>

        {/* ── SOLUÇÃO — dashed blue left border ── */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{
              background: "rgba(59,130,246,0.1)",
            }}>
              <Lightbulb size={15} style={{ color: "rgba(96,165,250,0.8)" }} />
            </div>
            <span className="case-modal-label">Solução</span>
          </div>
          <div className="ml-4 pl-5" style={{ borderLeft: "2px dashed rgba(96,165,250,0.2)" }}>
            <p className="case-modal-text">{caseData.solution}</p>
          </div>
        </div>

        {/* ── RESULTADO — subtle green card ── */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{
              background: "rgba(16,185,129,0.1)",
            }}>
              <CheckCircle2 size={15} style={{ color: "rgba(52,211,153,0.8)" }} />
            </div>
            <span className="case-modal-label">Resultado</span>
          </div>
          <div className="p-5 rounded-xl" style={{
            background: "rgba(16,185,129,0.03)",
            border: "1px solid rgba(16,185,129,0.08)",
          }}>
            <p className="case-modal-text" style={{ color: "rgba(255,255,255,0.7)" }}>
              {caseData.result}
            </p>
          </div>
        </div>

        {/* ── TESTIMONIAL ── */}
        <div className="case-modal-quote relative">
          <Quote
            size={28}
            className="absolute top-5 right-5"
            style={{ color: "rgba(201,168,76,0.2)" }}
          />
          <p className="italic text-[15px] leading-[1.8] pr-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            "{caseData.testimonial}"
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-6 h-px" style={{ background: "rgba(201,168,76,0.3)" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {caseData.company}
            </span>
          </div>
        </div>

        {/* ── CTA BUTTON ── */}
        <button onClick={onCtaClick} className="case-modal-cta">
          Solicitar orçamento similar <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

