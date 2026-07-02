import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const depoimentos = [
  {
    inicial: "A",
    texto: "Cheguei carregando um cansaço que não sabia mais nomear. Sair de cada sessão foi como abrir uma janela. Em poucas semanas, senti espaço dentro de mim de novo.",
    nome: "Ana C.",
    local: "Curitiba",
  },
  {
    inicial: "R",
    texto: "A Maria acolhe sem apressar. A TRG me ajudou a olhar para memórias antigas sem me machucar de novo. Voltei a dormir melhor e a confiar em mim.",
    nome: "Roberto S.",
    local: "São Paulo",
  },
  {
    inicial: "L",
    texto: "Eu procurei querendo entender uma ansiedade que não passava. O que encontrei foi um caminho de reconciliação comigo mesma. Recomendo com o coração.",
    nome: "Luiza M.",
    local: "Atendimento online",
  },
];

export function Depoimentos() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-[var(--color-creme-warm)]/40">
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

        {/* TROCAR: depoimentos fake até cliente enviar reais */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto">
          {depoimentos.map((d, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] border border-[var(--color-verde-profundo)]/8 bg-[var(--color-creme)]/85 backdrop-blur-sm p-7 md:p-8 hover:border-[var(--color-verde-profundo)]/20 hover:shadow-[0_28px_60px_-30px_rgba(14,60,56,0.35)] transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[var(--color-bege)] opacity-40" />
              <p className="font-display italic text-[17px] md:text-[18px] leading-[1.55] text-[var(--color-tinta)] text-pretty mb-8">
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
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
