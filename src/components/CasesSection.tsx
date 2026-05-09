import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { caseStudies, type CaseStudy } from "@/data/cases";
import { CaseCard } from "@/components/CaseCard";
import { CaseDetailContent } from "@/components/CaseDetailContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { FadeUp } from "@/components/FadeUp";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

export function CasesSection() {
  const isMobile = useIsMobile();
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
    slidesToScroll: 1,
    startIndex: 0,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // ── 3D coverflow transforms ──
  const applySlideStyles = useCallback(() => {
    if (!emblaApi) return;

    const selected = emblaApi.selectedScrollSnap();
    const slides = emblaApi.slideNodes();
    const total = slides.length;
    const isSmall = typeof window !== "undefined" && window.innerWidth < 640;

    slides.forEach((node, index) => {
      let diff = index - selected;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      const absDiff = Math.abs(diff);

      // Scale
      const scale = Math.max(0.6, 1 - absDiff * 0.12);
      // Rotation — cards face toward center
      const maxRotate = isSmall ? 12 : 22;
      const rotateY = -diff * maxRotate;
      // Z depth
      const translateZ = -absDiff * (isSmall ? 25 : 45);
      // X offset — ajustado para compensar a remoção da margem negativa no CSS
      // Valores negativos puxam os cards laterais para mais perto do centro
      const translateX = diff * (isSmall ? -70 : -20);
      // Opacity
      const opacity = Math.max(0.15, 1 - absDiff * 0.28);
      // Z-index: center card on top
      const zIndex = Math.round(10 - absDiff);
      // Blur
      const blur = absDiff >= 2 ? `blur(${Math.min((absDiff - 1) * 1.5, 3)}px)` : "none";
      // Hide cards too far away
      const visibility = absDiff > 2 ? "hidden" : "visible";

      // Outer node: z-index + visibility (Embla owns its transform)
      node.style.zIndex = String(zIndex);
      node.style.position = "relative";
      node.style.visibility = visibility;
      node.style.perspective = "1200px";

      // Inner wrapper: 3D transforms
      const inner = node.querySelector("[data-coverflow-inner]") as HTMLElement | null;
      if (inner) {
        inner.style.transform = `translateX(${translateX}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
        inner.style.opacity = String(opacity);
        inner.style.filter = blur;
        inner.style.transition = "transform 600ms cubic-bezier(0.25,1,0.35,1), opacity 600ms ease, filter 600ms ease, visibility 0ms";
      }
    });
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const apply = () => { applySlideStyles(); onSelect(); };
    emblaApi.on("select", apply);
    emblaApi.on("scroll", applySlideStyles);
    emblaApi.on("resize", applySlideStyles);
    emblaApi.on("reInit", apply);
    apply();
    return () => {
      emblaApi.off("select", apply);
      emblaApi.off("scroll", applySlideStyles);
      emblaApi.off("resize", applySlideStyles);
      emblaApi.off("reInit", apply);
    };
  }, [emblaApi, applySlideStyles, onSelect]);

  // Click: center → open modal, side → scroll to center
  const handleCardClick = (index: number, caseData: CaseStudy) => {
    if (!emblaApi) return;
    if (index === emblaApi.selectedScrollSnap()) {
      setSelectedCase(caseData);
    } else {
      emblaApi.scrollTo(index);
    }
  };

  const handleClose = () => setSelectedCase(null);

  const handleCtaClick = () => {
    setSelectedCase(null);
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const scrollSnaps = emblaApi?.scrollSnapList() ?? [];

  return (
    <section id="cases" className="section-y" style={{ background: "var(--bg-base)", overflow: "hidden" }}>
      {/* Title area — inside container for centering */}
      <div className="container-x">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeUp>
            <div className="eyebrow mb-4">Cases de Sucesso</div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="font-display text-h1 mb-4">
              Projetos que comprovam nossa expertise.
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p style={{ color: "var(--text-secondary)" }}>
              Da regularização fundiária ao aerolevantamento com drones — conheça
              atuações reais da Oriente em grandes projetos.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Carousel area — full width for 3D overflow, section clips */}
      <FadeUp delay={300}>
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Nav arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Case anterior"
            className="absolute left-0 lg:left-2 top-[40%] -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próximo case"
            className="absolute right-0 lg:right-2 top-[40%] -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Embla viewport */}
          <div ref={emblaRef} className="w-full" style={{ overflow: "visible" }}>
            <div className="flex items-center">
              {caseStudies.map((cs, i) => (
                <div
                  key={cs.id}
                  className="coverflow-slide"
                >
                  {/* Inner wrapper — receives 3D transforms */}
                  <div data-coverflow-inner="" style={{ transformStyle: "preserve-3d" }}>
                    <CaseCard caseData={cs} onClick={() => handleCardClick(i, cs)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots — centered */}
        <div className="flex justify-center gap-2 mt-10">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background:
                  i === selectedIndex
                    ? "var(--gold-primary)"
                    : "rgba(255,255,255,0.15)",
                transform: i === selectedIndex ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </FadeUp>

      {/* Modal / Drawer */}
      {isMobile ? (
        <Drawer open={!!selectedCase} onOpenChange={(open) => !open && handleClose()}>
          <DrawerContent
            className="case-modal-scroll-area"
            style={{
              maxHeight: "95vh",
              background: "#0d1b2a",
              borderColor: "rgba(255,255,255,0.06)",
              borderRadius: "12px 12px 0 0",
            }}
          >
            <DrawerTitle className="sr-only">
              {selectedCase?.company ?? "Case"}
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              Detalhes do case {selectedCase?.company}
            </DrawerDescription>
            {selectedCase && (
              <CaseDetailContent
                caseData={selectedCase}
                onClose={handleClose}
                onCtaClick={handleCtaClick}
              />
            )}
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={!!selectedCase} onOpenChange={(open) => !open && handleClose()}>
          <DialogContent
            className="case-modal-scroll-area"
            style={{
              maxWidth: 640,
              maxHeight: "85vh",
              padding: 0,
              background: "#0d1b2a",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            {/* Hide shadcn's auto-generated close button (rendered by DialogPrimitive.Close) */}
            <style dangerouslySetInnerHTML={{
              __html: `
              .case-modal-scroll-area > button[class*="opacity-70"] { display: none !important; }
            `}} />
            <DialogTitle className="sr-only">
              {selectedCase?.company ?? "Case"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detalhes do case {selectedCase?.company}
            </DialogDescription>
            {selectedCase && (
              <CaseDetailContent
                caseData={selectedCase}
                onClose={handleClose}
                onCtaClick={handleCtaClick}
              />
            )}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
