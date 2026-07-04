import { motion } from "framer-motion";

const elementos = [
  {
    nome: "Corpo",
    frase: "O que se sente, se guarda.",
    copy: "Respirar mais fundo antes da pressa, dormir com verdade, beber água com presença. É pelo corpo que o alívio começa a caber.",
    svg: (
      <svg viewBox="0 0 140 140" className="w-24 h-24" aria-hidden>
        <defs>
          <linearGradient id="corpo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A961" stopOpacity="1" />
            <stop offset="100%" stopColor="#B8935A" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        {/* triângulo apontando pra cima */}
        <motion.path
          d="M70 20 L120 110 L20 110 Z"
          fill="none"
          stroke="url(#corpo-grad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* onda de água dentro */}
        <motion.path
          d="M35 82 Q55 70 70 82 T105 82"
          fill="none"
          stroke="#F3CFB2"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M35 92 Q55 80 70 92 T105 92"
          fill="none"
          stroke="#F3CFB2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </svg>
    ),
  },
  {
    nome: "Mente",
    frase: "O que se pensa, se planta.",
    copy: "Trocar o automático por atenção, escolher palavras que acolham em vez de ferir. A cabeça descansa quando o dia tem intenção.",
    svg: (
      <svg viewBox="0 0 140 140" className="w-24 h-24" aria-hidden>
        <defs>
          <linearGradient id="mente-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A961" stopOpacity="1" />
            <stop offset="100%" stopColor="#B8935A" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        {/* triângulo */}
        <motion.path
          d="M70 20 L120 110 L20 110 Z"
          fill="none"
          stroke="url(#mente-grad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
        {/* rede neural: 3 pontos + linhas */}
        <motion.line
          x1="52" y1="75" x2="88" y2="75"
          stroke="#F3CFB2" strokeWidth="1.2"
          animate={{ strokeOpacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="52" y1="75" x2="70" y2="95"
          stroke="#F3CFB2" strokeWidth="1.2"
          animate={{ strokeOpacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.line
          x1="88" y1="75" x2="70" y2="95"
          stroke="#F3CFB2" strokeWidth="1.2"
          animate={{ strokeOpacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle cx="52" cy="75" r="3" fill="#0E3C38" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "52px 75px" }} />
        <motion.circle cx="88" cy="75" r="3" fill="#0E3C38" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} style={{ transformOrigin: "88px 75px" }} />
        <motion.circle cx="70" cy="95" r="3" fill="#0E3C38" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} style={{ transformOrigin: "70px 95px" }} />
      </svg>
    ),
  },
  {
    nome: "Espírito",
    frase: "O que se cultiva, floresce.",
    copy: "O silêncio também é cuidado, a gratidão também é remédio. Fazer a sua parte com verdade, e depois soltar, confiando no processo.",
    svg: (
      <svg viewBox="0 0 140 140" className="w-24 h-24" aria-hidden>
        <defs>
          <linearGradient id="espirito-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A961" stopOpacity="1" />
            <stop offset="100%" stopColor="#B8935A" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        {/* triângulo */}
        <motion.path
          d="M70 20 L120 110 L20 110 Z"
          fill="none"
          stroke="url(#espirito-grad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
        {/* espiral respirando */}
        <motion.path
          d="M70 88 C 62 88 60 78 66 74 C 74 68 82 78 78 88 C 74 100 60 100 56 88 C 52 74 68 60 82 66 C 96 72 96 92 82 96"
          fill="none"
          stroke="#F3CFB2"
          strokeWidth="1.4"
          strokeLinecap="round"
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "70px 84px" }}
        />
        {/* estrela pequena */}
        <motion.circle
          cx="70" cy="52" r="2.2"
          fill="#F3CFB2"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "70px 52px" }}
        />
      </svg>
    ),
  },
];

export function Filosofia() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-[var(--color-creme-warm)]/40">
      <div className="grain" aria-hidden />
      <div className="aurora-warm opacity-30" aria-hidden />

      <div className="container-lp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-14 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-tinta-mute)] font-medium mb-5">
            A visão
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Somos parte de um <span className="italic font-light text-[var(--color-tinta)]/45">mesmo todo</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-tinta-suave)] text-balance">
            Corpo, mente e espírito não caminham separados, e o ambiente onde você pisa faz parte dessa mesma respiração.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto mb-16 md:mb-20">
          {elementos.map((el, i) => (
            <motion.article
              key={el.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] p-8 md:p-9 bg-[var(--color-creme)]/85 backdrop-blur-sm border border-[var(--color-verde-profundo)]/10 hover:border-[var(--color-verde-profundo)]/25 hover:shadow-[0_28px_60px_-30px_rgba(14,60,56,0.35)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="mb-5">{el.svg}</div>
              <p className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] font-bold text-[var(--color-verde-profundo)] mb-3">
                <span className="w-6 h-px bg-[var(--color-verde-profundo)]" />
                {el.nome}
              </p>
              <h3
                className="font-display text-[1.65rem] md:text-[1.85rem] leading-[1.15] text-[var(--color-verde-profundo)] mb-4 italic font-light"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                {el.frase}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--color-tinta-suave)]">
                {el.copy}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[var(--color-bege)] to-transparent" />
          <p
            className="font-display italic text-xl md:text-2xl leading-[1.5] text-[var(--color-verde-profundo)] text-balance"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            Nas escolhas do dia, no gole de água, na palavra gentil, no silêncio antes da pressa, o alívio dentro se torna alívio ao redor.
          </p>
          <p className="mt-6 text-[15.5px] leading-relaxed text-[var(--color-tinta-suave)] text-balance">
            Quando fazemos a nossa parte com cuidado e verdade, e depois soltamos, a vida retribui em leveza.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
