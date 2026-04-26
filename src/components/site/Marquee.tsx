import { useI18n } from "@/lib/i18n";

const ITEMS = [
  "Smart Presence",
  "Smart Booking",
  "AI Receptionist",
  "n8n Automation",
  "Sistemas de Marca",
  "SUBE las Ventas",
  "Funnels de WhatsApp",
  "Sync de Calendario",
];

export const Marquee = () => {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-carbon text-bone py-5 border-y border-bone/10 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-8 px-8 font-mono text-[11px] uppercase tracking-[0.28em] text-bone/70">
            <span>{it}</span>
            <span className="text-oxblood">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
