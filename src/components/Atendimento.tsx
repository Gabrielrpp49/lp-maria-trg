import { motion } from "framer-motion";
import { MessageCircle, Clock, Wallet, MapPin, MessageSquare } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const infos = [
  { icon: Clock, label: "Sessões", value: "Individuais, com hora marcada" },
  { icon: Wallet, label: "Investimento", value: "R$ 150 por sessão" },
  { icon: MapPin, label: "Formato", value: "Online ou presencial em Curitiba" },
  { icon: MessageSquare, label: "Agendamento", value: "Direto pelo WhatsApp" },
];

export function Atendimento() {
  return (
    <section id="atendimento" className="relative py-24 md:py-36 overflow-hidden">
      <div className="grain" aria-hidden />
      <div className="aurora-warm opacity-40" aria-hidden />

      <div className="container-lp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-tinta-mute)] font-medium mb-5">
            O atendimento
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight text-balance mb-14"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Como funciona <span className="italic font-light">na prática</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {infos.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl bg-[var(--color-creme-warm)]/50 border border-[var(--color-verde-profundo)]/10 backdrop-blur-sm p-6 text-center hover:border-[var(--color-verde-profundo)]/25 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="mx-auto mb-4 w-11 h-11 rounded-full bg-[var(--color-verde-profundo)]/10 flex items-center justify-center">
                  <info.icon className="h-5 w-5 text-[var(--color-verde-profundo)]" />
                </div>
                <p className="text-[10.5px] uppercase tracking-[0.16em] font-semibold text-[var(--color-verde-profundo)] mb-2">
                  {info.label}
                </p>
                <p className="text-[14.5px] text-[var(--color-tinta)] leading-snug">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-verde-profundo)] hover:bg-[var(--color-verde-hover)] px-9 py-4 text-base font-medium text-[var(--color-creme)] transition-all btn-magnetic shadow-[0_20px_50px_-16px_rgba(14,60,56,0.55)]"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-[-8deg]" />
              Agendar pelo WhatsApp
            </a>
            <p className="mt-4 text-sm text-[var(--color-tinta-mute)]">
              Ou salve o número: <span className="text-[var(--color-verde-profundo)] font-medium">(41) 98837-4178</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
