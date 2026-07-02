import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export function MobileStickyCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-40 md:hidden inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 text-sm font-semibold shadow-[0_10px_28px_-6px_rgba(37,211,102,0.55)]"
    >
      <MessageCircle className="h-4 w-4" />
      Conversar
    </a>
  );
}
