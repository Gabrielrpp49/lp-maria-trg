import { motion } from "framer-motion";

const stats = [
  { num: "30+", label: "Anos com a palavra" },
  { num: "TRG", label: "Certificação CITRG 17.419" },
  { num: "2", label: "Formatos: online e presencial" },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 md:py-36 overflow-hidden">
      <div className="grain" aria-hidden />
      <div className="aurora-warm opacity-45" aria-hidden />

      <div className="container-lp relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr),minmax(0,1.2fr)] gap-14 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Foto com máscara orgânica SVG blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-[440px] mx-auto">
              <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full">
                <defs>
                  <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0.02 C0.75,0.02 0.95,0.16 0.98,0.4 C1.01,0.64 0.9,0.82 0.75,0.92 C0.6,1.02 0.4,1.01 0.24,0.94 C0.08,0.87 0.01,0.7 0.02,0.5 C0.03,0.3 0.14,0.16 0.28,0.08 C0.36,0.03 0.42,0.02 0.5,0.02 Z"/>
                  </clipPath>
                  <linearGradient id="blob-frame" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F3CFB2" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#BECBBA" stopOpacity="0.6"/>
                  </linearGradient>
                </defs>
                {/* Blob de fundo (moldura orgânica) */}
                <motion.path
                  d="M200,25 C305,25 385,80 395,200 C405,320 360,410 300,460 C240,510 160,505 100,470 C40,435 10,350 5,250 C0,150 45,80 110,45 C145,25 168,20 200,25 Z"
                  fill="url(#blob-frame)"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "50% 50%" }}
                  transform="translate(15, 15)"
                />
                {/* Imagem clipada */}
                <foreignObject x="0" y="0" width="400" height="500" clipPath="url(#blob-mask)">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: "url('/assets/img/foto-maria.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center 25%",
                      filter: "saturate(1.05) contrast(1.03) sepia(0.05)",
                    }}
                  />
                </foreignObject>
              </svg>
            </div>

            {/* Assinatura handwritten flutuando */}
            <motion.p
              initial={{ opacity: 0, rotate: -4 }}
              whileInView={{ opacity: 1, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute -bottom-3 left-4 md:left-8 handwritten italic text-2xl md:text-3xl text-[var(--color-verde-profundo)]"
              style={{ transform: "rotate(-4deg)" }}
            >
              Fatinha
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-tinta-mute)] font-medium mb-5">
              Sobre
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-balance mb-8"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Quem vai <span className="italic font-light">caminhar com você</span>
            </h2>

            <div className="space-y-5 text-[16.5px] leading-relaxed text-[var(--color-tinta-suave)] text-pretty">
              <p>
                Sou <span className="text-[var(--color-verde-profundo)] font-semibold">Maria de Fátima Abreu</span>. Passei mais de 30 anos como professora de Língua Portuguesa, e nesse tempo aprendi que{" "}
                <span className="italic text-[var(--color-verde-profundo)]">a palavra cura</span>. Que ouvir e ser ouvido transforma.
              </p>
              <p>
                Foi esse cuidado com o ser humano que me trouxe até a Terapia de Reprocessamento Generativo. Hoje, como terapeuta TRG, ajudo pessoas a se reencontrarem: a soltar o peso do passado e voltar a viver com mais presença, autoestima e paz.
              </p>
              <p className="text-[var(--color-verde-profundo)] italic font-medium">
                Este espaço nasceu dessa travessia. Se você chegou até aqui, sinta-se em casa.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-[var(--color-verde-profundo)]/10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <p
                    className="font-display text-3xl md:text-4xl text-[var(--color-verde-profundo)] leading-none"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {s.num}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-tinta-mute)] mt-2 leading-tight">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
