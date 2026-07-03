import { ArrowDown } from "lucide-react";

interface Props {
  /** Cor do texto/border. 'dark' para seções dark (bege), 'light' padrão (verde). */
  variant?: "light" | "dark";
  label?: string;
  className?: string;
}

/**
 * CTA secundário que leva até a seção Atendimento.
 * Uso: depois de blocos informativos (o que é a TRG, etapas, para quem é, depoimentos).
 */
export function LinkAtendimento({
  variant = "light",
  label = "Ver como funciona na prática",
  className = "",
}: Props) {
  const isDark = variant === "dark";
  return (
    <a
      href="#atendimento"
      className={`group inline-flex items-center gap-2.5 rounded-full border-[1.5px] px-6 py-3 text-[14.5px] font-medium transition-all ${
        isDark
          ? "border-[var(--color-bege)]/50 text-[var(--color-bege)] hover:bg-[var(--color-bege)] hover:text-[var(--color-verde-profundo)] hover:border-[var(--color-bege)]"
          : "border-[var(--color-verde-profundo)]/25 text-[var(--color-verde-profundo)] hover:bg-[var(--color-verde-profundo)] hover:text-[var(--color-creme)] hover:border-[var(--color-verde-profundo)]"
      } ${className}`}
    >
      {label}
      <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
    </a>
  );
}
