import { motion } from "framer-motion";
import { Info } from "lucide-react";

export function OQueETRG() {
  return (
    <section id="a-terapia" className="relative py-24 md:py-36 overflow-hidden">
      <div className="aurora-warm opacity-60" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="container-lp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-tinta-mute)] font-medium mb-5">
            A terapia
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Uma outra forma de{" "}
            <span className="italic font-light">cuidar por dentro</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,auto,1fr] items-center gap-12 md:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-[16.5px] leading-relaxed text-[var(--color-tinta-suave)] text-pretty"
          >
            <p>
              A{" "}
              <strong className="font-semibold text-[var(--color-verde-profundo)]">
                Terapia de Reprocessamento Generativo (TRG)
              </strong>{" "}
              é uma terapia breve e focada, criada pelo psicólogo brasileiro Jair Soares.
            </p>
            <p>
              Em vez de apenas falar sobre o problema, ela vai até a{" "}
              <span className="text-[var(--color-verde-profundo)] font-medium">raiz emocional</span>{" "}
              dele: aquelas memórias e experiências que ficaram "congeladas" e que, sem percebermos, seguem influenciando como nos sentimos hoje.
            </p>
            <p>
              Ao reprocessar essas experiências de forma segura, a mente pode dar a elas um novo significado. E o peso que elas carregavam começa a se dissolver.{" "}
              <span className="italic text-[var(--color-verde-profundo)]">
                Muitas pessoas relatam sentir diferença já nas primeiras sessões.
              </span>
            </p>
          </motion.div>

          {/* SVG orgânico animado: círculos concêntricos "respirando" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto"
          >
            <svg viewBox="0 0 300 300" className="w-56 md:w-72 h-auto">
              <defs>
                <radialGradient id="ring-grad" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#0E3C38" stopOpacity="0.05" />
                  <stop offset="70%" stopColor="#0E3C38" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0E3C38" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[110, 85, 60, 38].map((r, i) => (
                <motion.circle
                  key={r}
                  cx="150"
                  cy="150"
                  fill="none"
                  stroke="#0E3C38"
                  strokeWidth={1.2}
                  strokeOpacity={0.35 - i * 0.05}
                  initial={{ scale: 1, r }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.35,
                  }}
                  style={{ transformOrigin: "150px 150px" }}
                />
              ))}
              <motion.circle
                cx="150"
                cy="150"
                r="8"
                fill="#F3CFB2"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "150px 150px" }}
              />
              <circle cx="150" cy="150" r="140" fill="url(#ring-grad)" />
            </svg>
            <p
              className="mt-6 text-center font-display italic text-[var(--color-verde-profundo)] text-lg"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Ir à origem <span className="text-[var(--color-bege)]">·</span> reprocessar <span className="text-[var(--color-bege)]">·</span> ressignificar
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="rounded-3xl border border-[var(--color-verde-profundo)]/10 bg-[var(--color-creme-warm)]/60 backdrop-blur-sm p-6 md:p-7 glow-card">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-verde-suave)]/40 flex items-center justify-center">
                  <Info className="h-4 w-4 text-[var(--color-verde-profundo)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] font-medium text-[var(--color-verde-profundo)] mb-2">
                    Um cuidado importante
                  </p>
                  <p className="text-[14.5px] leading-relaxed text-[var(--color-tinta-suave)]">
                    A TRG é uma prática terapêutica complementar. <span className="text-[var(--color-verde-profundo)] font-medium">Não substitui</span> acompanhamento médico, psicológico ou psiquiátrico.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--color-verde-profundo)]/8 p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.16em] font-medium text-[var(--color-tinta-mute)] mb-3">
                Criada por
              </p>
              <p className="font-display text-2xl text-[var(--color-verde-profundo)]">
                Dr. Jair Soares
              </p>
              <p className="text-sm text-[var(--color-tinta-suave)] mt-1">
                Psicólogo brasileiro, desenvolveu a TRG como método focado em reprocessar experiências emocionais sem reviver a dor.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
