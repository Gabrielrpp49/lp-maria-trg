import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Diferencial() {
  return (
    <>
      {/* Wave top */}
      <div className="relative -mb-px">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block w-full h-14 md:h-20">
          <path fill="#0E3C38" d="M0,50 C240,90 480,20 720,42 C960,64 1200,10 1440,52 L1440,90 L0,90 Z"/>
        </svg>
      </div>

      <section className="section-dark relative py-24 md:py-36">
        <div className="grain" aria-hidden />

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full blur-[140px] opacity-30"
            style={{ background: "radial-gradient(closest-side, #F3CFB2, transparent)" }}
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 right-1/4 w-[460px] h-[460px] rounded-full blur-[140px] opacity-25"
            style={{ background: "radial-gradient(closest-side, #BECBBA, transparent)" }}
          />
        </div>

        <div className="container-lp relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-bege)]/25 bg-[var(--color-bege)]/8 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[var(--color-bege)]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-bege)]">
                O diferencial
              </span>
            </div>

            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-balance mb-10"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Por que uma{" "}
              <span className="italic font-light text-[var(--color-bege)]">terapia breve?</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[var(--color-creme)]/85 font-light text-balance">
              <p>
                Cada pessoa tem o seu tempo. Mas a TRG é conhecida por ser{" "}
                <span className="text-[var(--color-creme)] font-normal">
                  uma das terapias mais breves e focadas
                </span>{" "}
                que existem. Em vez de anos revisitando o mesmo assunto, o trabalho é orientado a ir à origem e resolver.
              </p>
            </div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-[var(--color-bege)]/60 to-transparent origin-center"
            />

            <p className="font-display italic text-2xl md:text-3xl text-[var(--color-bege-glow)] text-balance leading-snug">
              Não é sobre pressa. É sobre foco: cuidar da raiz, para que o alívio seja real e dure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wave bottom */}
      <div className="relative -mt-px">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block w-full h-14 md:h-20">
          <path fill="#0E3C38" d="M0,0 L1440,0 L1440,40 C1200,80 960,20 720,44 C480,68 240,14 0,54 Z"/>
        </svg>
      </div>
    </>
  );
}
