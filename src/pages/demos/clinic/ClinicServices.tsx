import { useOutletContext } from "react-router-dom";
import { Bot, Check, Clock, Heart, Stethoscope, Activity, User, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: Heart,
    name: "Cardiología",
    duration: "45 min",
    price: "90€",
    items: ["ECG en consulta", "Auscultación y exploración", "Plan preventivo personalizado", "Informe clínico digital"],
  },
  {
    icon: Stethoscope,
    name: "Consulta general",
    duration: "30 min",
    price: "60€",
    items: ["Anamnesis completa", "Exploración física", "Recetas y derivaciones", "Seguimiento integrado"],
  },
  {
    icon: Activity,
    name: "Análisis clínicos",
    duration: "15 min",
    price: "45€",
    items: ["Extracción rápida", "Resultados en 24-48h", "Interpretación médica", "Acceso vía portal paciente"],
  },
  {
    icon: User,
    name: "Pediatría",
    duration: "30 min",
    price: "70€",
    items: ["Revisiones de desarrollo", "Calendario vacunal", "Asesoría a familias", "Urgencias coordinadas"],
  },
  {
    icon: Zap,
    name: "Traumatología",
    duration: "40 min",
    price: "85€",
    items: ["Diagnóstico ecográfico", "Infiltraciones", "Plan de rehabilitación", "Coordinación con fisio"],
  },
  {
    icon: Heart,
    name: "Dermatología",
    duration: "30 min",
    price: "75€",
    items: ["Mapeo de lunares", "Dermatoscopia digital", "Tratamientos estéticos", "Seguimiento oncológico"],
  },
];

type Ctx = { openChat: () => void };

const ClinicServices = () => {
  const { openChat } = useOutletContext<Ctx>();

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="vc-eyebrow mb-4">— Servicios</div>
          <h1 className="vc-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-[0.95]">
            Tratamientos médicos<br /><span style={{ color: "var(--vc-mint-dark)" }}>que importan.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--vc-mute)" }}>
            Servicios privados con tecnología actualizada, equipo certificado y tarifas transparentes. Sin sorpresas en factura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.name} className="vc-card p-7 flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--vc-mint-soft)" }}>
                <s.icon className="w-6 h-6" style={{ color: "var(--vc-mint-dark)" }} strokeWidth={1.5} />
              </div>
              <h3 className="vc-display text-2xl mb-2">{s.name}</h3>
              <div className="flex items-center gap-3 text-xs mb-5" style={{ color: "var(--vc-mute)" }}>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {s.duration}</span>
                <span>·</span>
                <span className="vc-mono" style={{ color: "var(--vc-mint-dark)" }}>{s.price}</span>
              </div>
              <ul className="space-y-2 flex-1 mb-5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm" style={{ color: "var(--vc-mute)" }}>
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--vc-mint-deep)" }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <button onClick={openChat} className="vc-ghost w-full justify-center">
                <Bot className="w-4 h-4" /> Pedir cita con Vita
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ClinicServices;
