// Centralized site config — change here and it propagates everywhere.
export const siteConfig = {
  brand: "aXory",
  tagline: "Sistemas web que trabajan por ti",
  whatsappNumber: "34600000000", // Cambia este número por el real
  whatsappPrefilled: "Hola, vengo desde la web de aXory. Me gustaría más información.",
  calendarUrl: "https://cal.com/axory/30min", // Cambia por tu Calendly/Cal.com
  email: "hola@axory.com",
  // Webhook para leads (n8n / Zapier). Si está vacío, el formulario hace fallback a mailto.
  leadsWebhookUrl: "",
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg ?? siteConfig.whatsappPrefilled)}`;
