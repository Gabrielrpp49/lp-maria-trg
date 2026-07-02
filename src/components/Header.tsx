import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#a-terapia", label: "A terapia" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#sobre", label: "Sobre" },
    { href: "#atendimento", label: "Atendimento" },
    { href: "#faq", label: "Dúvidas" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-creme)]/90 backdrop-blur-md border-b border-[var(--color-linha)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-lp flex items-center justify-between py-4 md:py-5">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/assets/img/logo-trg.webp"
                alt=""
                className="h-9 w-9 md:h-10 md:w-10 relative z-10"
              />
              <span className="absolute inset-0 rounded-full bg-[var(--color-bege)] blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[15px] md:text-base font-medium text-[var(--color-verde-profundo)] tracking-tight">
                Maria de Fátima Abreu
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-[var(--color-tinta-mute)] font-medium">
                Terapeuta TRG
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-tinta)] hover:text-[var(--color-verde-profundo)] transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-verde-profundo)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--color-verde-profundo)] hover:bg-[var(--color-verde-hover)] text-[var(--color-creme)] px-5 py-2.5 text-sm font-medium transition-all btn-magnetic shadow-[0_10px_30px_-10px_rgba(14,60,56,0.55)]"
          >
            <MessageCircle className="h-4 w-4" />
            Conversar
          </a>

          <button
            className="lg:hidden inline-flex md:hidden items-center justify-center w-11 h-11 rounded-full bg-[var(--color-verde-profundo)] text-[var(--color-creme)]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[68px] inset-x-0 z-40 bg-[var(--color-creme)] border-b border-[var(--color-linha)] md:hidden"
          >
            <nav className="container-lp py-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[var(--color-tinta)] font-medium border-b border-[var(--color-linha)] last:border-none"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-verde-profundo)] text-[var(--color-creme)] px-5 py-3 font-medium"
              >
                <MessageCircle className="h-4 w-4" />
                Conversar no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
