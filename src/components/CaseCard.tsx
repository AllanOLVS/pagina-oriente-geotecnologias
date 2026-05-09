import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/cases";

interface CaseCardProps {
  caseData: CaseStudy;
  onClick: () => void;
}

export function CaseCard({ caseData, onClick }: CaseCardProps) {
  return (
    <div
      className="case-card group cursor-pointer flex flex-col h-full"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver case: ${caseData.company}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      {/* Image Area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0C1A30 0%, #1A2F52 50%, #0C1A30 100%)",
          }}
        >
          <span
            className="text-sm font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            [Foto do Projeto]
          </span>
        </div>
        {/* Gradient overlay from bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, var(--bg-base) 0%, transparent 60%)",
          }}
        />
        {/* Service tag pill */}
        <span
          className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1.5 rounded z-10"
          style={{
            background: "rgba(7,18,36,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "var(--gold-primary)",
          }}
        >
          {caseData.serviceTag}
        </span>
      </div>

      {/* Bottom section */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg font-bold mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          {caseData.company}
        </h3>
        <p
          className="text-sm mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          {caseData.shortDescription}
        </p>
        <div
          className="w-10 h-0.5 mb-4 transition-all duration-300 group-hover:w-15"
          style={{ background: "var(--gold-primary)" }}
        />
        <span className="btn-ghost mt-auto text-sm">
          Ver case completo <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}
