import { motion } from "framer-motion";

const passos = [
  {
    num: "01",
    titulo: "Escuta e acolhimento",
    texto: "Conversamos sobre o que está te incomodando hoje. Sem julgamento, no seu tempo.",
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16">
        <defs>
          <linearGradient id="p1-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0E3C38" />
            <stop offset="100%" stopColor="#0E3C38" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d="M60,20 Q90,20 90,50 Q90,80 60,90 Q30,80 30,50 Q30,20 60,20 Z" fill="none" stroke="url(#p1-grad)" strokeWidth="1.5"/>
        <circle cx="45" cy="52" r="3" fill="#F3CFB2"/>
        <circle cx="60" cy="52" r="3" fill="#F3CFB2"/>
        <circle cx="75" cy="52" r="3" fill="#F3CFB2"/>
      </svg>
    ),
  },
  {
    num: "02",
    titulo: "Reprocessamento",
    texto: "Por meio de técnicas guiadas, acessamos a origem emocional daquilo, sem precisar reviver a dor, e damos a ela um novo lugar.",
    highlight: "sem precisar reviver a dor",
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16">
        <circle cx="60" cy="60" r="42" fill="none" stroke="#0E3C38" strokeWidth="1.5" strokeDasharray="3 4"/>
        <path d="M60,25 Q95,60 60,95 Q25,60 60,25 Z" fill="#BECBBA" fillOpacity="0.5"/>
        <circle cx="60" cy="60" r="6" fill="#0E3C38"/>
      </svg>
    ),
  },
  {
    num: "03",
    titulo: "Ressignificação",
    texto: "O que antes pesava começa a perder a força. No lugar, vem mais clareza, leveza e espaço para viver.",
    svg: (
      <svg viewBox="0 0 120 120" className="w-16 h-16">
        <path d="M20,80 Q40,50 60,60 Q80,70 100,40" fill="none" stroke="#0E3C38" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="100" cy="40" r="5" fill="#F3CFB2"/>
        <circle cx="60" cy="60" r="3" fill="#BECBBA"/>
        <circle cx="20" cy="80" r="4" fill="#0E3C38" fillOpacity="0.35"/>
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-36 overflow-hidden bg-[var(--color-creme-warm)]/40">
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
            O processo
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] tracking-tight text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Como acontece <span className="italic font-light">uma sessão</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {passos.map((p, i) => (
            <motion.article
              key={p.num}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className={`relative rounded-[28px] p-8 md:p-9 bg-[var(--color-creme)]/80 backdrop-blur-sm border border-[var(--color-verde-profundo)]/8 hover:border-[var(--color-verde-profundo)]/20 hover:shadow-[0_24px_60px_-30px_rgba(14,60,56,0.35)] transition-all duration-500 hover:-translate-y-1 ${i === 1 ? "md:mt-8" : ""}`}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-display text-5xl text-[var(--color-bege)] font-light leading-none"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  {p.num}
                </span>
                <div className="opacity-90">{p.svg}</div>
              </div>
              <h3 className="font-display text-2xl md:text-[1.65rem] text-[var(--color-verde-profundo)] mb-3 leading-tight">
                {p.titulo}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--color-tinta-suave)]">
                {p.highlight
                  ? p.texto.split(p.highlight).map((chunk, idx, arr) => (
                      <span key={idx}>
                        {chunk}
                        {idx < arr.length - 1 && (
                          <strong className="text-[var(--color-verde-profundo)] font-semibold">
                            {p.highlight}
                          </strong>
                        )}
                      </span>
                    ))
                  : p.texto}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
