import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export function MobileStickyCTA() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const darks = document.querySelectorAll(".section-dark");
    const lastDark = darks[darks.length - 1] ?? null;
    const footer = document.querySelector("footer");
    const hideOn = [lastDark, footer].filter(Boolean) as Element[];

    if (!hideOn.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setHidden(anyVisible);
      },
      { threshold: 0.15 }
    );

    hideOn.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-4 z-40 md:hidden inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 text-sm font-semibold shadow-[0_10px_28px_-6px_rgba(37,211,102,0.55)]"
        >
          <MessageCircle className="h-4 w-4" />
          Conversar
        </motion.a>
      )}
    </AnimatePresence>
  );
}
