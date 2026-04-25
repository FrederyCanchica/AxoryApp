import { whatsappLink } from "@/lib/site-config";
import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
    className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-oxblood/40 animate-ping opacity-60" />
    <span className="relative flex items-center gap-2 bg-oxblood text-bone hover:bg-oxblood-glow transition-colors h-14 pl-4 pr-5 rounded-full shadow-elevated border border-bone/10">
      <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] hidden sm:inline">
        WhatsApp
      </span>
    </span>
  </a>
);
