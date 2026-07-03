import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Pricing = () => {
  const { t, lang } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  const plans = [
    {
      key: "smart",
      price: "690 €",
      featured: false,
      features:
        lang === "es"
          ? [
              "Presencia digital premium 1 página",
              "Branding digital esencial",
              "Botón WhatsApp flotante",
              "SEO técnico básico",
              "Alojamiento web y configuración del dominio durante el primer año",
            ]
          : [
              "Premium 1-page digital presence",
              "Essential digital branding",
              "Floating WhatsApp button",
              "Basic technical SEO",
              "Hosting & domain setup for the first year",
            ],
    },
    {
      key: "book",
      price: "1.490 €",
      featured: true,
      features:
        lang === "es"
          ? [
              "Web multipágina + branding",
              "Reservas online integradas",
              "Sincronización Google Calendar",
              "Recordatorios automáticos",
              "Pasarela de pago opcional",
              "Panel del negocio",
            ]
          : [
              "Multi-page site + branding",
              "Built-in online bookings",
              "Google Calendar sync",
              "Automated reminders",
              "Optional payment gateway",
              "Business dashboard",
            ],
    },
    {
      key: "ai",
      price: "2.890 €",
      featured: false,
      features:
        lang === "es"
          ? [
              "Todo lo de Smart Booking",
              "Agente IA conversacional",
              "Chatbot WhatsApp + web",
              "Flujos n8n personalizados",
              "Integración CRM",
              "Soporte prioritario",
            ]
          : [
              "Everything in Smart Booking",
              "Conversational AI agent",
              "WhatsApp + web chatbot",
              "Custom n8n workflows",
              "CRM integration",
              "Priority support",
            ],
    },
  ];

  return (
    <section id="pricing" className="bg-background text-foreground py-24 md:py-36">
      <div ref={ref} className="container-editorial reveal">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
              {t("pricing.title")}
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {plans.map((p, i) => (
            <div
              key={p.key}
              className={cn(
                "reveal-item relative flex flex-col",
                p.featured
                  ? "glow-card bg-carbon text-bone mt-8 lg:mt-0 lg:-my-6 z-10 p-8 md:p-10 lg:py-14 shadow-[0_0_0_1px_#FCA311,0_24px_60px_rgba(252,163,17,0.15)]"
                  : "bg-background text-foreground border border-foreground/15 opacity-[0.92] p-8 md:p-10",
              )}
            >
              {p.featured && (
                <div className="absolute -top-8 lg:-top-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                  <span className="bg-[#FCA311] text-black font-mono text-[11px] uppercase tracking-widest px-3 py-1">
                    {t("pricing.recommended")}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[rgba(252,163,17,0.7)]">
                    {t("pricing.urgency")}
                  </span>
                </div>
              )}

              <div className="flex items-baseline justify-between mb-2">
                <span className={cn("label-eyebrow", p.featured && "text-bone/60")}>
                  0{i + 1} / {t(`pricing.${p.key}.name`)}
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl mt-4 mb-3">
                {t(`pricing.${p.key}.name`)}
              </h3>
              <p className={cn("text-sm mb-8", p.featured ? "text-bone/65" : "text-foreground/65")}>
                {t(`pricing.${p.key}.tag`)}
              </p>

              <div className="mb-6 pb-6 border-b border-current/15">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                  {t("pricing.from")}
                </span>
                <div className="font-display text-5xl md:text-6xl mt-2">{p.price}</div>
                <p className="font-mono text-[10px] uppercase tracking-wider opacity-50 mt-2">
                  {t(`pricing.${p.key}.context`)}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check
                      className={cn("h-4 w-4 mt-0.5 shrink-0", p.featured ? "text-oxblood-glow" : "text-oxblood")}
                      strokeWidth={1.5}
                    />
                    <span className="opacity-85">{f}</span>
                  </li>
                ))}
              </ul>

              <p className="font-mono text-[10px] text-center opacity-50 mb-6">
                {t(`pricing.${p.key}.social`)}
              </p>

              <Button
                asChild
                variant={p.featured ? "oxblood" : "editorial"}
                size="lg"
                className="w-full"
              >
                <a href="#contact">{t("pricing.cta")}</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-widest text-foreground/40 text-center mt-12">
          {t("pricing.guarantee")}
        </p>
      </div>
    </section>
  );
};
