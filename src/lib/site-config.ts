// Centralized site config — change here and it propagates everywhere.
export const siteConfig = {
  brand: "MR_ROBOTS LABS",
  tagline: "Studio of digital systems",
  whatsappNumber: "34600000000", // Cambia este número por el real
  whatsappPrefilled: "Hola, vengo desde la web de MR_ROBOTS LABS. Me gustaría más información.",
  calendarUrl: "https://cal.com/mr-robots-labs/30min", // Cambia por tu Calendly/Cal.com
  email: "hola@mrrobotslabs.com",
  // Webhook para leads (n8n / Zapier). Si está vacío, el formulario hace fallback a mailto.
  leadsWebhookUrl: "",
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg ?? siteConfig.whatsappPrefilled)}`;
