import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const itens = [
  "Ansiedade e angústia",
  "Tristeza persistente e desânimo",
  "Baixa autoestima e autocrítica",
  "Medos e bloqueios que limitam sua vida",
  "Padrões emocionais que se repetem",
  "A vontade de reencontrar propósito e paz interior",
];

export function ParaQuem() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
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
            Para quem é
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] tracking-tight text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            A TRG pode te ajudar <span className="italic font-light">a lidar com</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
          {itens.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group flex items-start gap-4 rounded-2xl border border-[var(--color-verde-profundo)]/8 bg-[var(--color-creme-warm)]/40 backdrop-blur-sm p-5 hover:border-[var(--color-verde-profundo)]/20 hover:bg-[var(--color-creme-warm)]/70 transition-all"
            >
              <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-verde-profundo)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="#FEF4EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <p className="text-[15.5px] text-[var(--color-tinta)] leading-snug font-medium pt-0.5">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-[var(--color-verde-suave)]/60 to-[var(--color-verde-suave)]/25 border border-[var(--color-verde-profundo)]/8 p-8 text-center relative overflow-hidden"
        >
          <Heart className="mx-auto h-6 w-6 text-[var(--color-verde-profundo)] mb-4 breathe" />
          <p className="font-display text-lg md:text-xl italic leading-relaxed text-[var(--color-verde-profundo)] text-balance">
            "A terapia caminha ao lado do cuidado médico e psicológico. Não no lugar dele. Se você está passando por um momento delicado, buscar apoio é um ato de coragem, e estou aqui para caminhar junto."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
