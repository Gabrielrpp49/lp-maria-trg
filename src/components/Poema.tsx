import { motion } from "framer-motion";

const estrofes: string[][] = [
  [
    "Abrir o coração para a vida",
    "É olhar para dentro",
    "É esvaziar-se de si mesmo",
    "De concepções que não fazem mais sentido",
    "E estabelecem contradições o tempo todo!",
    "Nublando o campo.",
  ],
  [
    "Abrir o coração para a vida é decidir",
    "O que abrigar no coração e,",
    "O que não entrará mais.",
    "É decidir que caminho quer seguir.",
    "que velocidade quer imprimir em suas ações.",
    "Quais cores vão compor o cenário da sua vida.",
    "É decidir quem vai nascer agora…",
    "Com calma",
    "Com amor… Neste novo tempo!",
  ],
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const linha = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Poema() {
  return (
    <>
      {/* Wave top: transição da FAQ (creme) pro dark */}
      <div className="relative -mb-px">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block w-full h-14 md:h-20">
          <path fill="#0E3C38" d="M0,50 C240,90 480,20 720,42 C960,64 1200,10 1440,52 L1440,90 L0,90 Z" />
        </svg>
      </div>

      <section className="section-dark relative py-24 md:py-32">
        <div className="grain" aria-hidden />

        {/* Aurora sutil bege + verde suave */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full blur-[150px] opacity-22"
            style={{ background: "radial-gradient(closest-side, #F3CFB2, transparent)" }}
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 12, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 right-1/4 w-[460px] h-[460px] rounded-full blur-[150px] opacity-18"
            style={{ background: "radial-gradient(closest-side, #BECBBA, transparent)" }}
          />
        </div>

        <div className="container-lp relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={linha}
              className="text-center text-[11px] uppercase tracking-[0.24em] text-[var(--color-bege)]/85 font-medium mb-6"
            >
              Um respiro
            </motion.p>

            {/* Título */}
            <motion.h2
              variants={linha}
              className="text-center font-display text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] tracking-[0.22em] text-[var(--color-creme)] mb-3"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              ESCOLHA
            </motion.h2>

            {/* Ornamento */}
            <motion.div
              variants={linha}
              className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-[var(--color-bege)] to-transparent mb-14"
            />

            {/* Estrofes */}
            <div className="space-y-8 md:space-y-10 text-center">
              {estrofes.map((estrofe, ei) => (
                <div key={ei} className="space-y-2 md:space-y-2.5">
                  {estrofe.map((verso, vi) => (
                    <motion.p
                      key={vi}
                      variants={linha}
                      className="font-display italic text-[17px] sm:text-[19px] md:text-[20px] leading-[1.55] text-[var(--color-creme)]/90 text-balance"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      {verso}
                    </motion.p>
                  ))}
                </div>
              ))}
            </div>

            {/* Ornamento fim */}
            <motion.div
              variants={linha}
              className="mx-auto mt-16 md:mt-20 h-px w-20 bg-gradient-to-r from-transparent via-[var(--color-bege)] to-transparent"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
