import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export function CTAFinal() {
  return (
    <>
      {/* Wave top */}
      <div className="relative -mb-px">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block w-full h-14 md:h-20">
          <path fill="#0E3C38" d="M0,56 C240,20 480,80 720,50 C960,20 1200,72 1440,40 L1440,90 L0,90 Z"/>
        </svg>
      </div>

      <section className="section-dark relative py-24 md:py-36">
        <div className="grain" aria-hidden />

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <motion.div
            animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-30"
            style={{ background: "radial-gradient(closest-side, #F3CFB2, transparent)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.12, 1], y: [0, -30, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-25"
            style={{ background: "radial-gradient(closest-side, #BECBBA, transparent)" }}
          />
        </div>

        <div className="container-lp relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-bege)] font-medium mb-6">
              Um convite
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] leading-[1.02] tracking-tight text-balance mb-10"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              O primeiro passo pode ser{" "}
              <span className="italic font-light text-[var(--color-bege)]">
                só uma conversa
              </span>
            </h2>

            <p className="mx-auto max-w-xl text-lg md:text-xl leading-relaxed text-[var(--color-creme)]/80 mb-12 text-balance">
              Você não precisa ter certeza de nada agora. Só precisa querer começar.{" "}
              <span className="italic text-[var(--color-bege-glow)]">
                Me manda uma mensagem, e a gente descobre juntas o caminho.
              </span>
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-bege)] hover:bg-[var(--color-bege-glow)] px-10 py-5 text-lg font-medium text-[var(--color-verde-profundo)] transition-all btn-magnetic shadow-[0_24px_60px_-16px_rgba(243,207,178,0.55)]"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-[-8deg]" />
              Conversar no WhatsApp
            </a>

            <p className="mt-8 handwritten italic text-[var(--color-bege)]/90 text-lg">
              Com carinho, Fatinha.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
