import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const items = [
  {
    q: "A terapia é longa?",
    a: "Não. Apesar de o tempo variar de pessoa para pessoa, a TRG é considerada uma das terapias mais breves e focadas que existem. Por isso muitas pessoas percebem mudanças logo nas primeiras sessões.",
  },
  {
    q: "Vou precisar reviver meus traumas?",
    a: "Não. Uma das características da TRG é permitir reprocessar experiências difíceis **sem reviver a dor original**. O processo é conduzido com cuidado e segurança.",
  },
  {
    q: "A TRG substitui o psicólogo ou o psiquiatra?",
    a: "Não. Ela é uma abordagem complementar. Se você faz acompanhamento médico ou psicológico, a TRG caminha junto, nunca no lugar dele.",
  },
  {
    q: "Preciso ter alguma crença ou religião?",
    a: "Não. A TRG é um trabalho emocional. Acolho você exatamente como você é.",
  },
  {
    q: "Quanto custa e como agendo?",
    a: "Cada sessão é R$ 150, com hora marcada. É só chamar no WhatsApp que a gente conversa e encontra o melhor horário.",
  },
];

function renderAnswer(txt: string) {
  return txt.split(/\*\*(.+?)\*\*/g).map((chunk, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-[var(--color-verde-profundo)] font-semibold">
        {chunk}
      </strong>
    ) : (
      <span key={i}>{chunk}</span>
    )
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-36 overflow-hidden bg-[var(--color-creme-warm)]/40">
      <div className="grain" aria-hidden />

      <div className="container-lp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-14 md:mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-tinta-mute)] font-medium mb-5">
            Perguntas frequentes
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] tracking-tight text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Dúvidas <span className="italic font-light">comuns</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-[var(--color-verde-profundo)]/25 bg-[var(--color-creme)]/95"
                    : "border-[var(--color-verde-profundo)]/8 bg-[var(--color-creme)]/70 hover:bg-[var(--color-creme)]/90"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-7 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl text-[var(--color-verde-profundo)] leading-snug">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-verde-profundo)]/8 flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4 text-[var(--color-verde-profundo)]" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-7 pb-6 text-[15.5px] leading-relaxed text-[var(--color-tinta-suave)] text-pretty">
                        {renderAnswer(item.a)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
