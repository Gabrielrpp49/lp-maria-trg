import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/utils";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-verde-profundo)] text-[var(--color-creme)] pt-16 pb-8 overflow-hidden">
      <div className="grain" aria-hidden />

      <div className="container-lp relative z-10">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-[var(--color-creme)]/12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/img/logo-trg.webp" alt="" className="h-10 w-10" />
              <div>
                <p className="font-display text-lg leading-tight">Maria de Fátima Abreu</p>
                <p className="text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-creme)]/60 mt-1">
                  Terapeuta TRG · CITRG 17.419
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--color-creme)]/60 leading-relaxed max-w-xs">
              Terapia de Reprocessamento Generativo. Um caminho breve e acolhedor.
            </p>
          </div>

          <div>
            <p className="text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-bege)] mb-4">
              Contato
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-creme)]/85 hover:text-[var(--color-creme)] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mfatima.Terapeuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-creme)]/85 hover:text-[var(--color-creme)] transition-colors"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @mfatima.Terapeuta
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10.5px] uppercase tracking-[0.18em] font-semibold text-[var(--color-bege)] mb-4">
              Institucional
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacidade" className="text-[var(--color-creme)]/85 hover:text-[var(--color-creme)] transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start gap-4 text-xs text-[var(--color-creme)]/45">
          <p className="italic max-w-2xl leading-relaxed">
            A Terapia de Reprocessamento Generativo é uma prática terapêutica complementar e não substitui tratamento médico, psicológico ou psiquiátrico. Em caso de emergência emocional, procure ajuda profissional imediata (CVV: 188).
          </p>
          <p className="whitespace-nowrap tracking-[0.05em]">
            © 2026 Maria de Fátima Abreu
          </p>
        </div>
      </div>
    </footer>
  );
}
