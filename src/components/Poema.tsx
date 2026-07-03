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
    <section className="relative py-24 md:py-36 overflow-hidden bg-[var(--color-creme-warm)]/40">
      <div className="grain" aria-hidden />
      <div className="aurora-warm opacity-45" aria-hidden />

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
            className="text-center text-[11px] uppercase tracking-[0.24em] text-[var(--color-tinta-mute)] font-medium mb-6"
          >
            Um respiro
          </motion.p>

          {/* Título */}
          <motion.h2
            variants={linha}
            className="text-center font-display text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] tracking-[0.22em] text-[var(--color-verde-profundo)] mb-3"
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
                    className="font-display italic text-[17px] sm:text-[19px] md:text-[20px] leading-[1.55] text-[var(--color-verde-profundo)] text-balance"
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
  );
}
