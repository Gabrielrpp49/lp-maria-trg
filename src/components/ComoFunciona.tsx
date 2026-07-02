import { motion } from "framer-motion";

const passos = [
  {
    num: "01",
    titulo: "Escuta e acolhimento",
    texto: "Conversamos sobre o que está te incomodando hoje. Sem julgamento, no seu tempo.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8 C34 8, 40 16, 40 24 C40 32, 34 40, 24 40 C22 40, 20 39, 18 38 L10 40 L12 32 C10 30, 8 27, 8 24 C8 16, 14 8, 24 8 Z"/>
        <circle cx="18" cy="24" r="1.5" fill="currentColor"/>
        <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
        <circle cx="30" cy="24" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "02",
    titulo: "Reprocessamento",
    texto: "Por meio de técnicas guiadas, acessamos a origem emocional daquilo, sem precisar reviver a dor, e damos a ela um novo lugar.",
    highlight: "sem precisar reviver a dor",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" strokeDasharray="3 4"/>
        <path d="M24 12 Q36 24 24 36 Q12 24 24 12 Z" fill="currentColor" fillOpacity="0.2" stroke="none"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    num: "03",
    titulo: "Ressignificação",
    texto: "O que antes pesava começa a perder a força. No lugar, vem mais clareza, leveza e espaço para viver.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 32 Q16 20 24 24 Q32 28 40 16"/>
        <circle cx="40" cy="16" r="2.5" fill="currentColor" stroke="none"/>
        <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
        <circle cx="8" cy="32" r="2" fill="currentColor" fillOpacity="0.4" stroke="none"/>
      </svg>
    ),
  },
];

function renderTexto(texto: string, highlight?: string) {
  if (!highlight) return texto;
  return texto.split(highlight).map((chunk, idx, arr) => (
    <span key={idx}>
      {chunk}
      {idx < arr.length - 1 && (
        <strong className="text-[var(--color-bege)] font-semibold">
          {highlight}
        </strong>
      )}
    </span>
  ));
}

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-36 overflow-hidden">
      <div className="grain" aria-hidden />

      <div className="container-lp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16 md:mb-24"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-tinta-mute)] font-medium mb-5">
            O processo
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Como acontece <span className="italic font-light text-[var(--color-tinta)]/45">uma sessão</span>
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Linha central vertical (desktop) */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-verde-profundo)]/15 to-transparent"
          />

          <div className="grid gap-8 md:gap-16">
            {passos.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
                    flip ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Card dark */}
                  <div
                    className={`relative rounded-[28px] p-8 md:p-10 bg-[var(--color-verde-profundo)] text-[var(--color-creme)] overflow-hidden shadow-[0_28px_60px_-24px_rgba(14,60,56,0.5)] ${
                      flip ? "md:[direction:ltr]" : ""
                    }`}
                  >
                    {/* Aurora sutil dentro do card */}
                    <div
                      aria-hidden
                      className="absolute -top-24 -right-16 w-64 h-64 rounded-full blur-[80px] opacity-30 pointer-events-none"
                      style={{ background: "radial-gradient(closest-side, #F3CFB2, transparent)" }}
                    />

                    <div className="relative flex items-start gap-5">
                      <div className="shrink-0 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-[var(--color-bege)]/15 text-[var(--color-bege)] border border-[var(--color-bege)]/30">
                        {p.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bege)]/85">
                          Passo {p.num}
                        </p>
                        <h3
                          className="mt-1.5 font-display text-2xl md:text-[1.9rem] leading-tight text-[var(--color-creme)]"
                          style={{ fontVariationSettings: '"opsz" 144' }}
                        >
                          {p.titulo}
                        </h3>
                        <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[var(--color-creme)]/78">
                          {renderTexto(p.texto, p.highlight)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Número gigante ao lado (desktop) */}
                  <div
                    aria-hidden
                    className={`hidden md:flex items-center ${flip ? "md:justify-end md:[direction:ltr]" : "justify-start"}`}
                  >
                    <span
                      className="font-display font-normal text-[10rem] lg:text-[13rem] leading-none select-none"
                      style={{
                        fontVariationSettings: '"opsz" 144',
                        background: "linear-gradient(135deg, rgba(14,60,56,0.35) 0%, rgba(243,207,178,0.5) 60%, rgba(190,203,186,0.3) 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {p.num}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
