import { motion } from "framer-motion";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  );
}

const facts = [
  { n: "30+", label: "anos com a palavra" },
  { n: "TRG", label: "certificação CITRG 17.419" },
  { n: "2", label: "formatos: online e presencial" },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden bg-[var(--color-creme-warm)]/40">
      <div className="grain" aria-hidden />

      <div className="container-lp relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Foto — card retangular padrão alivemkt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto md:mx-0 border border-[var(--color-verde-profundo)]/10 shadow-[0_40px_80px_-30px_rgba(14,60,56,0.35)]">
              <picture>
                <source srcSet="/assets/img/foto-maria.avif" type="image/avif" />
                <source srcSet="/assets/img/foto-maria.webp" type="image/webp" />
                <img
                  src="/assets/img/foto-maria.jpg"
                  alt="Maria de Fátima Abreu, terapeuta de Reprocessamento Generativo (TRG) certificada CITRG 17.419, atendimento online e presencial em Curitiba"
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                  style={{ filter: "saturate(1.05) contrast(1.03)" }}
                  width={480}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              {/* Gradient overlay bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[var(--color-verde-profundo)]/98 via-[var(--color-verde-profundo)]/60 to-transparent"
                aria-hidden
              />
              {/* Card overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-bege)] font-semibold whitespace-nowrap">
                    A especialista
                  </p>
                  <h3
                    className="mt-1.5 font-display text-xl md:text-2xl text-[var(--color-creme)] leading-tight"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    Maria de Fátima Abreu
                  </h3>
                  <p className="text-xs md:text-[13px] text-[var(--color-creme)]/70 mt-1">
                    Terapeuta TRG · CITRG 17.419
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://instagram.com/mfatima.Terapeuta"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-creme)]/10 backdrop-blur border border-[var(--color-creme)]/10 hover:bg-[var(--color-bege)] hover:text-[var(--color-verde-profundo)] text-[var(--color-creme)] transition-all"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/5541988374178?text=Ol%C3%A1%2C%20Maria%20de%20F%C3%A1tima!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia%20TRG."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-creme)]/10 backdrop-blur border border-[var(--color-creme)]/10 hover:bg-[var(--color-bege)] hover:text-[var(--color-verde-profundo)] text-[var(--color-creme)] transition-all"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Blur decorativo atrás da foto */}
            <div
              aria-hidden
              className="absolute -z-10 inset-6 rounded-3xl blur-3xl opacity-45"
              style={{
                background: "linear-gradient(135deg, #F3CFB2 0%, #BECBBA 100%)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[var(--color-tinta-mute)] font-semibold">
              Sobre
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-balance mb-8"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Quem vai <span className="italic font-light text-[var(--color-tinta)]/45">caminhar com você</span>
            </h2>

            <div className="space-y-4 text-[var(--color-tinta-suave)] leading-relaxed text-[16.5px] md:text-[17px] text-pretty">
              <p>
                Antes da terapia, foram mais de <span className="text-[var(--color-verde-profundo)] font-semibold">30 anos como professora de Língua Portuguesa</span>. Nesse tempo aprendi uma coisa que carrego até hoje: a palavra cura. Ouvir e ser ouvido transforma.
              </p>
              <p>
                Foi esse cuidado com o outro que me levou à Terapia de Reprocessamento Generativo. Hoje ajudo pessoas a se reencontrarem, a soltar o peso do que ficou para trás e voltar a viver com mais presença, autoestima e paz.
              </p>
              <p className="text-[var(--color-verde-profundo)] italic font-medium">
                Se você chegou até aqui, sinta-se em casa.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
              {facts.map((f) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl border border-[var(--color-verde-profundo)]/10 bg-[var(--color-creme)]/60 backdrop-blur p-4 md:p-5 text-center"
                >
                  <div
                    className="font-display text-3xl md:text-4xl font-medium leading-none text-[var(--color-verde-profundo)]"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {f.n}
                  </div>
                  <div className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[var(--color-tinta-mute)] leading-tight">
                    {f.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
