import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Heart, Bot, Send } from "lucide-react";

export type Msg = { role: "ai" | "user"; text: string; slots?: string[] };

const SLOTS = ["Mañana 09:30", "Mañana 11:00", "Jueves 17:00"];

const SCRIPT: Msg[] = [
  { role: "ai", text: "Hola, soy Vita, asistente virtual de VitalCenter. ¿En qué puedo ayudarte hoy?" },
  { role: "user", text: "Necesito una revisión cardiológica." },
  { role: "ai", text: "Perfecto. ¿Tienes algún síntoma actualmente (dolor, fatiga, palpitaciones)?" },
  { role: "user", text: "Algo de fatiga al subir escaleras." },
  { role: "ai", text: "Anotado. He consultado la agenda de la Dra. Méndez. Estos son los huecos disponibles esta semana:", slots: SLOTS },
  { role: "user", text: "El jueves a las 17:00 me viene bien." },
  { role: "ai", text: "✓ Cita confirmada para el jueves a las 17:00 con la Dra. Méndez. Te he enviado SMS y email, y se ha guardado en el CRM con prioridad media." },
];

export const ClinicLayout = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([SCRIPT[0]]);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = "VitalCenter · Clínica con Recepcionista IA";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    if (!chatOpen) return;
    let i = 1;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => { if (!cancelled) fn(); }, ms);
      timers.push(id);
    };
    const tick = () => {
      if (i >= SCRIPT.length) return;
      setTyping(true);
      schedule(() => {
        setTyping(false);
        const next = SCRIPT[i];
        if (!next) return;
        setMessages((m) => [...m, next]);
        i++;
        if (i < SCRIPT.length) schedule(tick, SCRIPT[i]?.role === "user" ? 1100 : 2200);
      }, next_delay(SCRIPT[i]));
    };
    function next_delay(m?: Msg) { return m?.role === "user" ? 900 : 1500; }
    schedule(tick, 1400);
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [chatOpen]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const navItems = [
    { to: "/demos/clinica-vital", label: "Inicio", end: true },
    { to: "/demos/clinica-vital/nosotros", label: "Profesionales" },
    { to: "/demos/clinica-vital/servicios", label: "Servicios" },
    { to: "/demos/clinica-vital/faq", label: "FAQ" },
    { to: "/demos/clinica-vital/panel", label: "Panel" },
  ];

  return (
    <div className="vital-root min-h-screen">
      <style>{`
        .vital-root {
          --vc-mint: #C7EBD9;
          --vc-mint-soft: #E4F5EC;
          --vc-mint-deep: #5BA88A;
          --vc-mint-dark: #2E6B53;
          --vc-grey: #F4F6F7;
          --vc-grey-soft: #FAFBFC;
          --vc-line: #E5EAEC;
          --vc-text: #1A2E2A;
          --vc-mute: #6B7B78;
          --vc-white: #FFFFFF;
          --vc-shadow-soft: 0 10px 40px -20px rgba(46,107,83,0.15);
          --vc-shadow-md: 0 20px 60px -30px rgba(46,107,83,0.25);
          background: var(--vc-grey-soft);
          color: var(--vc-text);
          font-family: 'Inter', system-ui, sans-serif;
        }
        .vc-display { font-family: 'Fraunces', Georgia, serif; font-weight: 400; letter-spacing: -0.02em; }
        .vc-mono { font-family: 'JetBrains Mono', monospace; }
        .vc-cta {
          background: var(--vc-mint-dark); color: var(--vc-white);
          padding: 14px 26px; font-size: 13px; font-weight: 500;
          letter-spacing: 0.04em; display: inline-flex; align-items: center;
          gap: 8px; border-radius: 999px; border: none; cursor: pointer;
          transition: all 0.25s; box-shadow: var(--vc-shadow-soft);
        }
        .vc-cta:hover { background: var(--vc-mint-deep); transform: translateY(-1px); box-shadow: var(--vc-shadow-md); }
        .vc-cta:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
        .vc-ghost {
          background: var(--vc-white); color: var(--vc-text);
          padding: 14px 26px; font-size: 13px; letter-spacing: 0.04em;
          border: 1px solid var(--vc-line); border-radius: 999px;
          display: inline-flex; align-items: center; gap: 8px;
          cursor: pointer; transition: all 0.2s;
        }
        .vc-ghost:hover { border-color: var(--vc-mint-dark); color: var(--vc-mint-dark); }
        .vc-card {
          background: var(--vc-white); border: 1px solid var(--vc-line);
          border-radius: 24px; transition: all 0.3s;
          box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }
        .vc-card:hover { border-color: var(--vc-mint-deep); box-shadow: var(--vc-shadow-md); }
        .vc-card-static { background: var(--vc-white); border: 1px solid var(--vc-line); border-radius: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.02); }
        .vc-eyebrow {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          text-transform: uppercase; letter-spacing: 0.22em; color: var(--vc-mint-dark);
        }
        .vc-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.6; pointer-events: none; }
        @keyframes vcDot { 0%, 60%, 100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-4px); opacity: 1; } }
        .vc-typing span { animation: vcDot 1.2s infinite; display: inline-block; }
        .vc-typing span:nth-child(2) { animation-delay: 0.15s; }
        .vc-typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes vcPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(91,168,138,0.5); } 50% { box-shadow: 0 0 0 18px rgba(91,168,138,0); } }
        .vc-pulse { animation: vcPulse 2.2s infinite; }
        .vc-flow-line {
          background: linear-gradient(90deg, transparent, var(--vc-mint-deep), transparent);
          background-size: 200% 100%; animation: vcFlow 2.5s linear infinite;
        }
        @keyframes vcFlow { from { background-position: 200% 0; } to { background-position: -200% 0; } }
        .vc-nav-link { position: relative; padding: 6px 0; transition: color 0.2s; }
        .vc-nav-link.active { color: var(--vc-mint-dark); }
        .vc-nav-link.active::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background: var(--vc-mint-dark); border-radius: 2px;
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md" style={{ background: "rgba(250,251,252,0.92)", borderBottom: "1px solid var(--vc-line)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <Link to="/demos/clinica-vital" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--vc-mint)" }}>
              <Heart className="w-4 h-4" style={{ color: "var(--vc-mint-dark)" }} fill="currentColor" />
            </div>
            <span className="vc-display text-xl">VitalCenter</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: "var(--vc-mute)" }}>
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) => `vc-nav-link ${isActive ? "active" : "hover:text-[var(--vc-mint-dark)]"}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/#demos"
            className="vc-mono text-[10px] uppercase tracking-[0.18em] flex items-center gap-2 shrink-0"
            style={{ color: "var(--vc-mute)" }}
          >
            <ArrowLeft className="w-3 h-3" /> Portafolio
          </Link>
        </div>
      </header>

      <Outlet context={{ openChat: () => setChatOpen(true) }} />

      <footer className="py-10 border-t" style={{ borderColor: "var(--vc-line)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm" style={{ color: "var(--vc-mute)" }}>
          <div>© 2025 VitalCenter · Centro médico autorizado</div>
          <Link to="/#demos" className="flex items-center gap-2 hover:text-[var(--vc-mint-dark)]">
            <ArrowLeft className="w-3 h-3" /> Demo de MR_ROBOTS LABS
          </Link>
        </div>
      </footer>

      {/* AI Chat Widget */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 vc-pulse rounded-full flex items-center gap-3 pl-4 pr-5 h-14 text-white"
          style={{ background: "var(--vc-mint-dark)" }}
          aria-label="Abrir chat IA"
        >
          <Bot className="w-5 h-5" />
          <span className="vc-mono text-[11px] uppercase tracking-[0.18em] hidden sm:inline">Habla con Vita IA</span>
        </button>
      )}

      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[560px] vc-card-static flex flex-col overflow-hidden" style={{ borderRadius: 24, boxShadow: "0 30px 80px -20px rgba(46,107,83,0.35)" }}>
          <div className="p-4 flex items-center justify-between" style={{ background: "var(--vc-mint-dark)", color: "white" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-sm">Vita IA · Recepcionista</div>
                <div className="text-xs opacity-80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Conectada a la agenda
                </div>
              </div>
            </div>
            <button onClick={() => { setChatOpen(false); setMessages([SCRIPT[0]]); }} className="text-white/70 hover:text-white text-xl leading-none w-8 h-8">×</button>
          </div>
          <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "var(--vc-grey-soft)" }}>
            {messages.filter(Boolean).map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[85%] space-y-2">
                  <div
                    className="px-4 py-2.5 text-sm rounded-2xl"
                    style={{
                      background: m.role === "user" ? "var(--vc-mint-dark)" : "white",
                      color: m.role === "user" ? "white" : "var(--vc-text)",
                      border: m.role === "user" ? "none" : "1px solid var(--vc-line)",
                      boxShadow: m.role === "ai" ? "0 2px 8px rgba(46,107,83,0.04)" : "none",
                    }}
                  >
                    {m.text}
                  </div>
                  {m.slots && (
                    <div className="flex flex-wrap gap-1.5">
                      {m.slots.map((s) => (
                        <span key={s} className="text-xs px-3 py-1.5 rounded-full vc-mono" style={{ background: "var(--vc-mint-soft)", color: "var(--vc-mint-dark)", border: "1px solid var(--vc-mint)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl border vc-typing" style={{ background: "white", borderColor: "var(--vc-line)", color: "var(--vc-mute)" }}>
                  <span>·</span><span>·</span><span>·</span>
                </div>
              </div>
            )}
          </div>
          <div className="p-3 border-t flex gap-2" style={{ borderColor: "var(--vc-line)" }}>
            <input placeholder="Escribe tu mensaje..." className="flex-1 px-4 py-2.5 text-sm rounded-full outline-none" style={{ background: "var(--vc-grey)", border: "1px solid var(--vc-line)" }} />
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "var(--vc-mint-dark)" }}>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinicLayout;
