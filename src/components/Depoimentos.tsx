import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { LinkAtendimento } from "@/components/LinkAtendimento";

// TROCAR: depoimentos fake até cliente enviar reais (6+)
const depoimentos = [
  {
    inicial: "A",
    texto: "Cheguei carregando um cansaço que não sabia mais nomear. Sair de cada sessão foi como abrir uma janela. Em poucas semanas, senti espaço dentro de mim de novo.",
    nome: "Ana C.",
    local: "Curitiba",
  },
  {
    inicial: "R",
    texto: "A Maria acolhe sem apressar. A TRG me ajudou a olhar para memórias antigas sem me machucar de novo. Voltei a dormir melhor, e a confiar em mim.",
    nome: "Roberto S.",
    local: "São Paulo",
  },
  {
    inicial: "L",
    texto: "Eu procurei querendo entender uma ansiedade que não passava. O que encontrei foi um caminho de reconciliação comigo mesma. Recomendo com o coração.",
    nome: "Luiza M.",
    local: "Atendimento online",
  },
  {
    inicial: "P",
    texto: "Depois de anos tentando outros caminhos, encontrei na TRG uma escuta diferente. É como se a Maria abrisse a porta certa. Voltei a me reconhecer.",
    nome: "Patrícia F.",
    local: "Curitiba",
  },
  {
    inicial: "M",
    texto: "Não sei explicar o quanto mudou. Só sei que hoje respiro sem peso, e olho pra dentro sem medo. Gratidão é a palavra.",
    nome: "Marcelo T.",
    local: "Belo Horizonte",
  },
  {
    inicial: "C",
    texto: "A leveza que apareceu depois das primeiras sessões me surpreendeu. Sem promessa mágica, sem pressa. Só cuidado de verdade.",
    nome: "Carla H.",
    local: "Atendimento online",
  },
];

const AUTO_PLAY_MS = 7000;

export function Depoimentos() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ajusta quantos cards visíveis por breakpoint
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, depoimentos.length - visibleCount);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(maxIndex, i)));
  }, [maxIndex]);

  // Corrige index se count muda (ex: redimensionar janela)
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  const totalDots = maxIndex + 1;

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden bg-[var(--color-creme-warm)]/40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grain" aria-hidden />

      <div className="container-lp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-tinta-mute)] font-medium mb-5">
            Palavras de quem já caminhou
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] tracking-tight text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Quem já viveu, <span className="italic font-light">conta</span>
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Setas navegação (desktop) */}
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 z-20 w-11 h-11 items-center justify-center rounded-full bg-[var(--color-creme)] border border-[var(--color-verde-profundo)]/12 shadow-[0_8px_24px_-8px_rgba(14,60,56,0.25)] text-[var(--color-verde-profundo)] hover:bg-[var(--color-verde-profundo)] hover:text-[var(--color-creme)] transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 z-20 w-11 h-11 items-center justify-center rounded-full bg-[var(--color-creme)] border border-[var(--color-verde-profundo)]/12 shadow-[0_8px_24px_-8px_rgba(14,60,56,0.25)] text-[var(--color-verde-profundo)] hover:bg-[var(--color-verde-profundo)] hover:text-[var(--color-creme)] transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Viewport do carrossel */}
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex items-stretch"
              animate={{ x: `${-index * (100 / visibleCount)}%` }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                const threshold = 60;
                if (info.offset.x < -threshold) next();
                else if (info.offset.x > threshold) prev();
              }}
              style={{ touchAction: "pan-y" }}
            >
              {depoimentos.map((d, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3 flex"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <blockquote className="group relative flex flex-col w-full rounded-[28px] border border-[var(--color-verde-profundo)]/8 bg-[var(--color-creme)]/85 backdrop-blur-sm p-7 md:p-8 hover:border-[var(--color-verde-profundo)]/20 hover:shadow-[0_28px_60px_-30px_rgba(14,60,56,0.35)] transition-all duration-500">
                    <Quote className="absolute top-5 right-5 h-7 w-7 text-[var(--color-bege)] opacity-45" />
                    <div className="flex flex-col flex-1 pt-8 pr-8">
                      <p className="font-display italic text-[16.5px] md:text-[18px] leading-[1.55] text-[var(--color-tinta)] text-pretty mb-8 flex-1">
                        {d.texto}
                      </p>
                      <footer className="flex items-center gap-3 pt-6 border-t border-[var(--color-verde-profundo)]/10">
                        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[var(--color-verde-profundo)] flex items-center justify-center">
                          <span className="font-display text-lg text-[var(--color-bege)] leading-none">
                            {d.inicial}
                          </span>
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-[var(--color-verde-profundo)] leading-tight">
                            {d.nome}
                          </p>
                          <p className="text-[11.5px] uppercase tracking-[0.12em] text-[var(--color-tinta-mute)] mt-0.5">
                            {d.local}
                          </p>
                        </div>
                      </footer>
                    </div>
                  </blockquote>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-8 bg-[var(--color-verde-profundo)]"
                    : "w-1.5 bg-[var(--color-verde-profundo)]/25 hover:bg-[var(--color-verde-profundo)]/45"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 md:mt-16 flex justify-center"
        >
          <LinkAtendimento />
        </motion.div>
      </div>
    </section>
  );
}
