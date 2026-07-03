import { motion } from "framer-motion";

const passos = [
  {
    num: "01",
    titulo: "Cronologia",
    texto: "Reconhecemos os eventos que, desde a infância, ainda influenciam quem você é hoje. Esse mapeamento ajuda a identificar bloqueios emocionais e traços limitantes que se repetem, abrindo uma visão comparativa entre o que passou e o que floresce agora.",
    icon: (
      /* Timeline com pontos */
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="24" x2="42" y2="24" />
        <circle cx="10" cy="24" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="20" cy="24" r="2.4" fill="currentColor" stroke="none" opacity="0.8" />
        <circle cx="30" cy="24" r="2.4" fill="currentColor" stroke="none" opacity="0.6" />
        <circle cx="40" cy="24" r="2.4" fill="currentColor" stroke="none" opacity="0.4" />
        <path d="M10 24 V 14" opacity="0.5" />
        <path d="M20 24 V 34" opacity="0.5" />
        <path d="M30 24 V 14" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: "02",
    titulo: "Sensitivo",
    texto: "Investigamos as manifestações corporais das emoções, a tensão que se instala, o cansaço que não passa, o aperto que fica. O corpo guarda o que a mente ainda não sabe nomear, e liberar isso é parte central do reprocessamento.",
    icon: (
      /* Corpo com onda de percepção */
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18" strokeOpacity="0.55" />
        <path d="M10 24 Q15 18 20 24 T30 24 T40 24" />
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "03",
    titulo: "Transitivo",
    texto: "Trabalhamos as emoções conectadas ao evento original e as transformamos. As cargas emocionais que pesavam começam a se dissolver, abrindo espaço para atravessar o dia a dia com mais leveza.",
    highlight: "dissolver",
    icon: (
      /* Metamorfose: círculo → losango */
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="24" r="7" strokeOpacity="0.55" />
        <path d="M22 24 L 30 24" strokeDasharray="2 3" strokeOpacity="0.6" />
        <path d="M34 24 L 40 18 L 46 24 L 40 30 Z" strokeOpacity="0" fill="none" transform="translate(-4, 0)" />
        <path d="M34 24 L 39 19 L 44 24 L 39 29 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M28 20 L 34 24 L 28 28" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    num: "04",
    titulo: "Futuro",
    texto: "Preparamos você para o que ainda está por vir. Desanuviamos expectativas negativas e construímos, no lugar delas, uma visão mais serena e esperançosa do que pode acontecer daqui pra frente.",
    icon: (
      /* Horizonte com sol e raios */
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="34" x2="44" y2="34" />
        <path d="M14 34 A 10 10 0 0 1 34 34" />
        <line x1="24" y1="14" x2="24" y2="10" opacity="0.7" />
        <line x1="34" y1="18" x2="37" y2="15" opacity="0.7" />
        <line x1="14" y1="18" x2="11" y2="15" opacity="0.7" />
        <line x1="40" y1="26" x2="44" y2="26" opacity="0.7" />
        <line x1="4" y1="26" x2="8" y2="26" opacity="0.7" />
      </svg>
    ),
  },
  {
    num: "05",
    titulo: "Personalização",
    texto: "Cada pessoa é única, e cada processo também. Personalizamos técnicas de visualização, respiração e imaginação guiada para que o caminho atenda ao seu tempo, ao seu jeito, à sua história.",
    highlight: "único",
    icon: (
      /* Impressão digital / assinatura orgânica */
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8 C 32 8, 40 15, 40 24 C 40 33, 34 40, 24 40 C 14 40, 8 33, 8 24" />
        <path d="M14 24 C 14 18, 18 14, 24 14 C 30 14, 34 18, 34 24 C 34 30, 30 34, 24 34" strokeOpacity="0.7" />
        <path d="M20 24 C 20 22, 22 20, 24 20 C 26 20, 28 22, 28 24 C 28 26, 26 28, 24 28" strokeOpacity="0.55" />
        <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
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
            A TRG em <span className="italic font-light text-[var(--color-tinta)]/45">5 etapas</span> básicas e eficazes
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-tinta-suave)] text-balance">
            Um caminho estruturado, conduzido no seu tempo e adaptado à sua história.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Linha central vertical (desktop) */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-verde-profundo)]/15 to-transparent"
          />

          <div className="grid gap-8 md:gap-12">
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
                    className={`relative rounded-[28px] p-7 md:p-10 bg-[var(--color-verde-profundo)] text-[var(--color-creme)] overflow-hidden shadow-[0_28px_60px_-24px_rgba(14,60,56,0.5)] ${
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
                          Etapa {p.num}
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
