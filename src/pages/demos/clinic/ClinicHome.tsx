import { Link, useOutletContext } from "react-router-dom";
import { Heart, Stethoscope, Activity, Calendar as CalIcon, ChevronRight, Bot, Sparkles, User } from "lucide-react";
import clinicHero from "@/assets/demo-clinic.jpg";

const SPECIALTIES = [
  { icon: Heart, name: "Cardiología", desc: "Prevención y diagnóstico cardiovascular." },
  { icon: Stethoscope, name: "Medicina general", desc: "Atención integral para toda la familia." },
  { icon: Activity, name: "Análisis clínicos", desc: "Resultados en 24-48h." },
  { icon: User, name: "Pediatría", desc: "Cuidado especializado infantil." },
];

type Ctx = { openChat: () => void };

const ClinicHome = () => {
  const { openChat } = useOutletContext<Ctx>();

  return (
    <>
      {/* Hero */}
      <section className="pt-16 relative overflow-hidden">
        <div className="vc-blob" style={{ background: "var(--vc-mint)", width: 500, height: 500, top: -100, right: -100 }} />
        <div className="vc-blob" style={{ background: "var(--vc-mint-soft)", width: 400, height: 400, bottom: 0, left: -100 }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="vc-eyebrow mb-6 flex items-center gap-3">
              <Sparkles className="w-3.5 h-3.5" />
              Atención IA disponible 24/7
            </div>
            <h1 className="vc-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              Tu salud,<br />
              <span style={{ color: "var(--vc-mint-dark)" }}>cuidada con calma.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed" style={{ color: "var(--vc-mute)" }}>
              Clínica de medicina integral con asistente virtual que escucha tus síntomas, te orienta y agenda tu cita en segundos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demos/clinica-vital/servicios" className="vc-cta">
                Ver servicios <ChevronRight className="w-4 h-4" />
              </Link>
              <button onClick={openChat} className="vc-ghost">
                <Bot className="w-4 h-4" /> Hablar con Vita IA
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t" style={{ borderColor: "var(--vc-line)" }}>
              {[
                { v: "24/7", l: "asistente IA" },
                { v: "<2 min", l: "para citar" },
                { v: "4.9★", l: "Doctoralia" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="vc-display text-3xl md:text-4xl" style={{ color: "var(--vc-mint-dark)" }}>{s.v}</div>
                  <div className="vc-mono text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: "var(--vc-mute)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden" style={{ background: "var(--vc-mint-soft)", boxShadow: "var(--vc-shadow-md)" }}>
              <img src={clinicHero} alt="VitalCenter" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 vc-card-static p-5 max-w-[260px] flex items-center gap-4" style={{ boxShadow: "var(--vc-shadow-md)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--vc-mint)" }}>
                <Bot className="w-6 h-6" style={{ color: "var(--vc-mint-dark)" }} />
              </div>
              <div>
                <div className="text-sm font-medium">Vita IA</div>
                <div className="text-xs" style={{ color: "var(--vc-mute)" }}>En línea ahora</div>
              </div>
              <div className="w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties preview */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="vc-eyebrow mb-4">— 001 / Especialidades</div>
            <h2 className="vc-display text-5xl md:text-6xl mb-4">Equipo médico de confianza.</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--vc-mute)" }}>
              Profesionales colegiados y trato humano en cada consulta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPECIALTIES.map((s) => (
              <div key={s.name} className="vc-card p-7">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--vc-mint-soft)" }}>
                  <s.icon className="w-6 h-6" style={{ color: "var(--vc-mint-dark)" }} strokeWidth={1.5} />
                </div>
                <h3 className="vc-display text-2xl mb-2">{s.name}</h3>
                <p className="text-sm" style={{ color: "var(--vc-mute)" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/demos/clinica-vital/nosotros" className="vc-ghost">
              Conoce a nuestros profesionales <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20" style={{ background: "var(--vc-mint-soft)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="vc-eyebrow mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Recepcionista IA 24/7
          </div>
          <h2 className="vc-display text-4xl md:text-5xl mb-6">¿Necesitas cita ya mismo?</h2>
          <p className="text-lg mb-8" style={{ color: "var(--vc-mute)" }}>
            Vita atiende, cualifica síntomas y agenda en menos de 2 minutos. Sin esperas, sin llamadas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openChat} className="vc-cta"><Bot className="w-4 h-4" /> Hablar con Vita</button>
            <Link to="/demos/clinica-vital/panel" className="vc-ghost">
              <CalIcon className="w-4 h-4" /> Ver panel de gestión
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClinicHome;
