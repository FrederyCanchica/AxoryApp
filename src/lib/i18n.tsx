import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "es" | "en";
type Dict = Record<string, string>;

const dict: Record<Lang, Dict> = {
  es: {
    "nav.solutions": "Soluciones",
    "nav.demos": "Demos",
    "nav.process": "Proceso",
    "nav.about": "Nosotros",
    "nav.pricing": "Paquetes",
    "nav.contact": "Contacto",

    "ps.problem.eyebrow": "El problema",
    "ps.problem.title": "Tu web actual tiene un problema.",
    "ps.p1.title": "Recibes visitas pero no clientes",
    "ps.p1.desc": "Tu web tiene tráfico pero la tasa de conversión es del 1-2%. El 98% de los visitantes se van sin contactar.",
    "ps.p2.title": "Contestas las mismas preguntas 100 veces",
    "ps.p2.desc": "WhatsApp, email, llamadas — siempre las mismas dudas. Pierdes horas explicando lo mismo una y otra vez.",
    "ps.p3.title": "Pierdes ventas fuera de horario",
    "ps.p3.desc": "El 40% de las consultas llegan después de las 8pm o los fines de semana. Cuando respondes, ya contrataron a otro.",
    "ps.solution.eyebrow": "La solución",
    "ps.solution.title": "Nosotros lo arreglamos con sistemas, no con diseño.",
    "ps.s1.title": "Automatización de captación",
    "ps.s1.desc": "Formularios inteligentes que cualifican leads automáticamente y los envían directamente a tu CRM.",
    "ps.s2.title": "IA que trabaja 24/7",
    "ps.s2.desc": "Chatbot que responde consultas, agenda citas y cierra ventas simples — incluso a las 3 de la madrugada.",
    "ps.s3.title": "Métricas que importan",
    "ps.s3.desc": "Dashboard con conversiones, fuentes de tráfico y ROI real — no vanity metrics.",
    "nav.cta": "Solicitar asesoría",

    "hero.eyebrow": "Desarrollo Inteligente + automatización",
    "hero.title": "Construimos sistemas digitales para negocios que quieren crecer .",
    "hero.subtitle": "Desarrollo web, automatización y agentes IA para captar clientes y ahorrar tiempo. Construimos sistemas, no solo páginas.",
    "hero.cta1": "Ver soluciones",
    "hero.cta2": "Solicitar asesoría",
    "hero.metric1.value": "+38%",
    "hero.metric1.label": "captación media de leads",
    "hero.metric2.value": "12 h",
    "hero.metric2.label": "ahorradas a la semana",
    "hero.metric3.value": "24/7",
    "hero.metric3.label": "atención automatizada",

    "value.eyebrow": "Propuesta de valor",
    "value.title": "No hacemos solo webs ",
    "value.body": "Construimos sistemas inteligentes para vender mientras duermes.",
    "value.p1.title": "Tu web, tu mejor comercial",
    "value.p1.body": "No solo una Pagina bonita: estructuras pensadas para que el usuario haga clic y se convierta en cliente.",
    "value.p2.title": "Dile adiós a las tareas repetitivas",
    "value.p2.body": "Conectamos tus herramientas para que los datos viajen solos. Menos trabajo manual, cero errores humanos.",
    "value.p3.title": "Agentes IA funcionando 24/7",
    "value.p3.body": "Nuestras Automatizaciones se convierten en expertos que conocen tu negocio, responden dudas en segundos y agenda citas en tu calendario mientras duermes.",
    "value.p4.title": "Datos, no humo",
    "value.p4.body": "Sabrás exactamente de dónde vienen tus clientes y qué mensajes son los que más dinero te generan.",

    "demos.eyebrow": "Showroom",
    "demos.title": "Portafolios.",
    "demos.body": "Toca, prueba, imagina",
    "demos.view": "Ver demo",
    "demos.want": "Quiero una para mi negocio",
    "demos.tattoo.name": "Tattoo Studio",
    "demos.tattoo.desc": "Reservas, portfolio y filtrado por estilo. Pensado para artistas con agenda llena.",
    "demos.barber.name": "Barber Shop",
    "demos.barber.desc": "Cita en 30 segundos, recordatorios automáticos y panel para el barbero.",
    "demos.local.name": "Local Business",
    "demos.local.desc": "Presencia premium, captación por WhatsApp y agente IA que cualifica.",

    "about.eyebrow": "Sin humo · Solo resultados",
    "about.title": "No hacemos webs bonitas.||Construimos máquinas de vender.",
    "about.intro": "Somos técnicos que combinan desarrollo web, automatización e inteligencia artificial para crear sistemas que captan clientes, ahorran horas de trabajo y funcionan sin descanso. No creemos en la presencia digital como decoración. Creemos en la conversión.",
    "about.value1.title": "Resultados medibles",
    "about.value1.desc": "No vendemos diseño, vendemos conversiones reales y horas recuperadas cada semana. Si no funciona, devolvemos el dinero.",
    "about.value2.title": "Tecnología sin tecnicismos",
    "about.value2.desc": "IA, automatizaciones, integraciones — pero explicado como si se lo contaras a tu madre. Cero jerga, cero humo.",
    "about.value3.title": "Transparencia radical",
    "about.value3.desc": "Sin permanencias. Sin sorpresas en la factura. Primera consulta gratis. Cancelación cuando quieras.",
    "about.closing": "Llevamos 12 proyectos activos. Todos siguen con nosotros. Eso dice más que cualquier testimonio.",

    "pricing.eyebrow": "Paquetes",
    "pricing.title": "Tecnología diseñada para hacer crecer tu negocio.",
    "pricing.body": "Elige el sistema que tu negocio necesita hoy. Escala cuando estés listo.",
    "pricing.recommended": "Recomendado",
    "pricing.from": "Proyectos desde",
    "pricing.cta": "Analicemos tu estrategia",
    "pricing.smart.context": "pago único · sin mensualidades",
    "pricing.book.context": "pago único · sin mensualidades",
    "pricing.ai.context": "pago único · sin mensualidades",
    "pricing.smart.social": "✓ NitroFix, Sal & Olivo y 3 más",
    "pricing.book.social": "✓ Legalis & Co, Lumière Studio y 4 más",
    "pricing.ai.social": "✓ VitalCenter, Pardo & Asociados y 2 más",
    "pricing.urgency": "2 plazas disponibles este mes",
    "pricing.guarantee": "→ Primera consulta gratuita · Sin permanencia · Resultados o te devolvemos el dinero",
    "pricing.smart.name": "Smart Presence",
    "pricing.smart.tag": "Landing pages para captar clientes",
    "pricing.book.name": "Smart Booking",
    "pricing.book.tag": "Web con reservas integradas",
    "pricing.ai.name": "AI Receptionist",
    "pricing.ai.tag": "Agentes IA y automatizaciónes",

    "cases.eyebrow": "Casos de uso",
    "cases.title": "Del caos manual al, orden automático.",
    "cases.tattoo": "Estudios de tatuaje",
    "cases.barber": "Barberías",
    "cases.local": "Negocios locales y autónomos",

    "process.eyebrow": "¿Cómo trabajamos?",
    "process.title": "Rapido, 1 proceso, 4 movimientos.",
    "process.s1.t": "Diagnóstico",
    "process.s1.b": "Analizamos tu negocio, tu cliente ideal y dónde estás perdiendo tiempo o dinero.",
    "process.s2.t": "Diseño",
    "process.s2.b": "Construimos una presencia digital con la escencia de tu marca.",
    "process.s3.t": "Automatización",
    "process.s3.b": "Conectamos calendarios, mensajes y agentes IA a tu sistema de negocios.",
    "process.s4.t": "Escalado",
    "process.s4.b": "Trabajamos con datos reales y multiplicamos lo que funciona.",

    "test.eyebrow": "Quienes ya confiaron",
    "test.title": "Resultados que se ven en la agenda.",

    "lead.eyebrow": "Auditoría gratuita",
    "lead.title": "Hablemos de hacer mas ágil tu negocio.",
    "lead.body": "30 minutos. Sin compromiso. Te llevas un plan claro de qué automatizar primero y qué no merece la pena.",
    "lead.name": "Nombre",
    "lead.email": "Email",
    "lead.business": "Tu negocio",
    "lead.message": "¿Qué te gustaría resolver?",
    "lead.submit": "Solicitar auditoría",
    "lead.sent": "Recibido. Te escribimos en menos de 24 h.",
    "lead.error": "Algo falló. Inténtalo de nuevo o escríbenos por WhatsApp.",

    "faq.eyebrow": "Preguntas",
    "faq.title": "Lo que suelen preguntarnos.",

    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos.",
    "contact.body": "Atención los 365 dias del año. \nlas 24 horas al día",
    "contact.whatsapp": "Escribir por WhatsApp",
    "contact.calendar": "Agendar llamada",
    "contact.form": "Enviar mensaje",

    "footer.tagline": "Sistemas web que trabajan por ti.",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.solutions": "Solutions",
    "nav.demos": "Demos",
    "nav.pricing": "Packages",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Book a call",

    "hero.eyebrow": "Design studio + automation",
    "hero.title": "Smart websites and automation for businesses that want to grow.",
    "hero.subtitle": "Design, automation and AI agents that capture clients and save you time. We build systems, not just pages.",
    "hero.cta1": "See solutions",
    "hero.cta2": "Book a call",
    "hero.metric1.value": "+38%",
    "hero.metric1.label": "average lead lift",
    "hero.metric2.value": "12 h",
    "hero.metric2.label": "saved per week",
    "hero.metric3.value": "24/7",
    "hero.metric3.label": "automated attention",

    "value.eyebrow": "What we do",
    "value.title": "We don't just build websites. We build systems that sell while you sleep.",
    "value.body": "Editorial design, real automation and AI agents so your business captures, books and serves clients without you having to be there.",
    "value.p1.title": "Design that sells",
    "value.p1.body": "Refined typography, clear hierarchy and CTAs built to convert.",
    "value.p2.title": "Real automation",
    "value.p2.body": "n8n flows and APIs that handle the boring work for you.",
    "value.p3.title": "AI agents",
    "value.p3.body": "Assistants that reply, book and qualify clients 24/7.",
    "value.p4.title": "Data, not noise",
    "value.p4.body": "We measure every click, every booking, every chat.",

    "demos.eyebrow": "Showroom",
    "demos.title": "Live demos. Touch, try, imagine.",
    "demos.body": "Each demo is a real navigable version of what your business could have running this week.",
    "demos.view": "View demo",
    "demos.want": "I want one for my business",
    "demos.tattoo.name": "Tattoo Studio",
    "demos.tattoo.desc": "Bookings, portfolio and style filtering. Built for artists with full agendas.",
    "demos.barber.name": "Barber Shop",
    "demos.barber.desc": "30-second booking, automatic reminders and a panel for the barber.",
    "demos.local.name": "Local Business",
    "demos.local.desc": "Premium presence, WhatsApp lead capture and an AI agent that qualifies.",

    "about.eyebrow": "No fluff · Just results",
    "about.title": "We don't build pretty websites.||We build selling machines.",
    "about.intro": "We're technicians who combine web development, automation and AI to create systems that capture clients, save hours of work and run non-stop. We don't believe in digital presence as decoration. We believe in conversion.",
    "about.value1.title": "Measurable results",
    "about.value1.desc": "We don't sell design, we sell real conversions and hours saved every week. If it doesn't work, we refund your money.",
    "about.value2.title": "Tech without jargon",
    "about.value2.desc": "AI, automations, integrations — but explained like you're telling your mother. Zero jargon, zero fluff.",
    "about.value3.title": "Radical transparency",
    "about.value3.desc": "No lock-ins. No invoice surprises. First consultation free. Cancel anytime.",
    "about.closing": "We have 12 active projects. All of them still with us. That says more than any testimonial.",

    "pricing.eyebrow": "Packages",
    "pricing.title": "Three ways to start.",
    "pricing.body": "Pick the system your business needs today. Scale when you're ready.",
    "pricing.recommended": "Recommended",
    "pricing.from": "from",
    "pricing.cta": "Choose plan",
    "pricing.smart.context": "one-time payment · no monthly fees",
    "pricing.book.context": "one-time payment · no monthly fees",
    "pricing.ai.context": "one-time payment · no monthly fees",
    "pricing.smart.social": "✓ NitroFix, Sal & Olivo and 3 more",
    "pricing.book.social": "✓ Legalis & Co, Lumière Studio and 4 more",
    "pricing.ai.social": "✓ VitalCenter, Pardo & Asociados and 2 more",
    "pricing.urgency": "2 spots available this month",
    "pricing.guarantee": "→ Free first consultation · No commitment · Results or your money back",
    "pricing.smart.name": "Smart Presence",
    "pricing.smart.tag": "Landing pages to capture clients",
    "pricing.book.name": "Smart Booking",
    "pricing.book.tag": "Website with built-in bookings",
    "pricing.ai.name": "AI Receptionist",
    "pricing.ai.tag": "AI agents and automation",

    "cases.eyebrow": "Use cases",
    "cases.title": "Built for those who serve, not those who theorize.",
    "cases.tattoo": "Tattoo studios",
    "cases.barber": "Barber shops",
    "cases.local": "Local businesses & freelancers",

    "process.eyebrow": "How we work",
    "process.title": "One process, four moves.",
    "process.s1.t": "Diagnosis",
    "process.s1.b": "We understand your business, your client and where you're losing time or money.",
    "process.s2.t": "Design",
    "process.s2.b": "We build the digital presence your brand deserves.",
    "process.s3.t": "Automation",
    "process.s3.b": "We connect calendars, messages and AI agents into a single system.",
    "process.s4.t": "Scale",
    "process.s4.b": "We iterate with real data and multiply what works.",

    "test.eyebrow": "Who trusted us",
    "test.title": "Results you can see on the calendar.",

    "lead.eyebrow": "Free audit",
    "lead.title": "We'll tell you exactly what's holding your business back.",
    "lead.body": "30 minutes. No strings attached. You get a clear plan of what to automate first and what isn't worth it.",
    "lead.name": "Name",
    "lead.email": "Email",
    "lead.business": "Your business",
    "lead.message": "What would you like to solve?",
    "lead.submit": "Request audit",
    "lead.sent": "Received. We'll get back to you within 24h.",
    "lead.error": "Something failed. Try again or message us on WhatsApp.",

    "faq.eyebrow": "FAQ",
    "faq.title": "What we get asked the most.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk.",
    "contact.body": "Three ways to start. Pick the one that feels easiest.",
    "contact.whatsapp": "Message on WhatsApp",
    "contact.calendar": "Book a call",
    "contact.form": "Send message",

    "footer.tagline": "Web systems that work for you.",
    "footer.rights": "All rights reserved.",
  },
};

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "es";
    return (localStorage.getItem("mr_lang") as Lang) || "es";
  });

  useEffect(() => {
    localStorage.setItem("mr_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (k: string) => dict[lang][k] ?? k;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
};

export const useI18n = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useI18n must be inside I18nProvider");
  return c;
};
