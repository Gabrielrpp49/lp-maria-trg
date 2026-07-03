import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-40"
    >
      <div className="aurora-warm" aria-hidden />
      <div className="grain" aria-hidden />

      {/* Blob SVG orgânico decorativo — centralizado atrás do headline */}
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        className="absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 w-[680px] md:w-[900px] opacity-60 z-0"
      >
        <defs>
          <radialGradient id="blob-grad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#F3CFB2" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#BECBBA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#BECBBA" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.path
          initial={{ scale: 0.94, rotate: 0 }}
          animate={{ scale: [0.94, 1, 0.96, 0.99, 0.94], rotate: [0, 3, -2, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
          fill="url(#blob-grad)"
          d="M420,320 Q490,220 410,130 Q330,50 210,110 Q90,170 110,290 Q130,410 220,460 Q310,510 390,470 Q470,430 420,320 Z"
        />
      </svg>

      <div className="container-lp relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} className="mb-8 inline-block">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(243, 207, 178, 0.55), 0 0 0 0 rgba(243, 207, 178, 0)",
                  "0 0 0 3px rgba(243, 207, 178, 0.35), 0 0 24px 4px rgba(243, 207, 178, 0.4)",
                  "0 0 0 0 rgba(243, 207, 178, 0.55), 0 0 0 0 rgba(243, 207, 178, 0)",
                ],
              }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[var(--color-bege)] bg-[var(--color-creme)]/40 backdrop-blur px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-bege)] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-bege)]" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-verde-profundo)]">
                Terapia de Reprocessamento Generativo
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-[2.15rem] leading-[1.05] sm:text-[3rem] md:text-6xl lg:text-[5.2rem] font-normal tracking-[-0.025em] text-[var(--color-verde-profundo)]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            A dor que você carrega <span className="italic font-light">tem uma origem.</span> E tem{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[var(--color-verde-profundo)] via-[#2a5d55] to-[var(--color-verde-profundo)] bg-clip-text text-transparent">
                caminho de volta
              </span>
              <svg
                aria-hidden
                viewBox="0 0 400 14"
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
                  d="M4 9 Q 100 1 200 6 T 396 5"
                  fill="none"
                  stroke="url(#underline-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F3CFB2" />
                    <stop offset="100%" stopColor="#BECBBA" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-balance text-[17px] md:text-[18px] leading-relaxed text-[var(--color-tinta-suave)]"
          >
            Um caminho breve e acolhedor para quem convive com{" "}
            <span className="text-[var(--color-verde-profundo)] font-medium">ansiedade, tristeza ou baixa autoestima</span>{" "}
            e deseja voltar a viver com mais leveza e paz interior.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-[var(--color-verde-profundo)] hover:bg-[var(--color-verde-hover)] px-8 py-4 text-base font-medium text-[var(--color-creme)] transition-all btn-magnetic shadow-[0_18px_44px_-14px_rgba(14,60,56,0.55)]"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-[-8deg]" />
              Conversar no WhatsApp
            </a>
            <a
              href="#a-terapia"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[var(--color-verde-profundo)]/15 bg-transparent hover:bg-[var(--color-verde-profundo)]/5 px-7 py-4 text-base font-medium text-[var(--color-verde-profundo)] transition-all"
            >
              <ArrowDown className="h-4 w-4" />
              Entender a terapia
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 text-[11px] uppercase tracking-[0.2em] text-[var(--color-tinta-mute)] list-none"
          >
            <li>Maria de Fátima Abreu</li>
            <li className="hidden sm:inline opacity-40 mx-3">·</li>
            <li>Registro CITRG 17.419</li>
            <li className="hidden sm:inline opacity-40 mx-3">·</li>
            <li>Atendimento online e presencial</li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
