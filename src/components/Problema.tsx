import { motion, useReducedMotion } from "framer-motion";

export function Problema() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Wave divider superior */}
      <div className="relative -mb-px">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block w-full h-14 md:h-20">
          <path
            fill="#0E3C38"
            d="M0,64 C240,10 480,80 720,50 C960,20 1200,74 1440,42 L1440,90 L0,90 Z"
          />
        </svg>
      </div>

      <section className="section-dark relative py-24 md:py-32">
        <div className="grain" aria-hidden />

        {/* Aurora muito sutil no dark */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25"
            style={{ background: "radial-gradient(closest-side, #F3CFB2, transparent)" }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] opacity-18"
            style={{ background: "radial-gradient(closest-side, #BECBBA, transparent)" }}
          />
        </div>

        <div className="container-lp relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-bege)]/80 font-medium mb-6">
              Um espelho
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-balance mb-10"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Talvez você <span className="italic font-light text-[var(--color-bege)]">reconheça</span> isso
            </h2>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[var(--color-creme)]/85 font-light text-balance">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                Uma ansiedade que não desliga, mesmo quando está tudo{" "}
                <span className="italic text-[var(--color-bege-glow)]">"bem"</span>. Uma tristeza sem nome, que insiste em voltar. A sensação de estar travado, repetindo os mesmos padrões, carregando um peso que você nem sabe de onde vem.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                Quando isso se arrasta por muito tempo, é comum achar que é assim mesmo, que é só o seu jeito de ser. Mas grande parte desse desconforto{" "}
                <span className="text-[var(--color-creme)] font-normal">tem raiz em experiências que ficaram guardadas por dentro</span>, ainda pedindo para serem resolvidas.
              </motion.p>
            </div>

            {!reduced && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-14 h-px w-32 bg-gradient-to-r from-transparent via-[var(--color-bege)]/60 to-transparent origin-center"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Wave divider inferior */}
      <div className="relative -mt-px">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block w-full h-14 md:h-20">
          <path
            fill="#0E3C38"
            d="M0,0 L1440,0 L1440,48 C1200,80 960,26 720,50 C480,74 240,20 0,58 Z"
          />
        </svg>
      </div>
    </>
  );
}
