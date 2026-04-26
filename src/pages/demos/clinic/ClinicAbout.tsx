import { Link } from "react-router-dom";
import { Award, Calendar, ChevronRight, GraduationCap } from "lucide-react";

const TEAM = [
  {
    name: "Dra. Elena Méndez",
    role: "Cardióloga",
    exp: "18 años",
    edu: "Universidad de Navarra · MIR Hospital Clínic",
    bio: "Especialista en cardiología preventiva y diagnóstico no invasivo. Coordinadora del programa de salud cardiovascular.",
    color: "#C7EBD9",
  },
  {
    name: "Dr. Marcos Ortiz",
    role: "Medicina general",
    exp: "12 años",
    edu: "Universidad Complutense · MIR La Paz",
    bio: "Atención familiar integral. Enfoque holístico en prevención y seguimiento crónico de pacientes adultos.",
    color: "#E4F5EC",
  },
  {
    name: "Dra. Lucía Vera",
    role: "Pediatría",
    exp: "10 años",
    edu: "Universidad de Barcelona · Hospital Sant Joan de Déu",
    bio: "Pediatría integral con especialización en desarrollo infantil temprano y vacunación.",
    color: "#C7EBD9",
  },
  {
    name: "Dra. Patricia Soler",
    role: "Análisis clínicos",
    exp: "15 años",
    edu: "Universidad de Valencia · Especialidad bioquímica",
    bio: "Responsable del laboratorio. Resultados rápidos con interpretación clínica personalizada.",
    color: "#E4F5EC",
  },
  {
    name: "Dr. Javier Ruiz",
    role: "Traumatología",
    exp: "20 años",
    edu: "Universidad Autónoma · MIR Hospital 12 de Octubre",
    bio: "Lesiones deportivas, dolor articular crónico y rehabilitación funcional avanzada.",
    color: "#C7EBD9",
  },
  {
    name: "Dra. Carla Núñez",
    role: "Dermatología",
    exp: "9 años",
    edu: "Universidad de Sevilla · Hospital Virgen del Rocío",
    bio: "Dermatología clínica y estética. Especialista en diagnóstico precoz de melanoma.",
    color: "#E4F5EC",
  },
];

const ClinicAbout = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="vc-eyebrow mb-4">— Profesionales</div>
          <h1 className="vc-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-[0.95]">
            Personas reales,<br /><span style={{ color: "var(--vc-mint-dark)" }}>medicina cercana.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--vc-mute)" }}>
            Un equipo multidisciplinar con vocación, formación continua y trato humano. Cada profesional pertenece al colegio oficial y cuenta con más de una década de experiencia clínica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((p) => (
            <div key={p.name} className="vc-card overflow-hidden flex flex-col">
              <div className="aspect-[4/3] relative flex items-center justify-center" style={{ background: p.color }}>
                <div className="vc-display text-7xl" style={{ color: "var(--vc-mint-dark)", opacity: 0.4 }}>
                  {p.name.split(" ").slice(-2).map(s => s[0]).join("")}
                </div>
                <div className="absolute bottom-3 left-3 vc-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full" style={{ background: "white", color: "var(--vc-mint-dark)" }}>
                  {p.role}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="vc-display text-2xl mb-1">{p.name}</h3>
                <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "var(--vc-mute)" }}>
                  <span className="flex items-center gap-1"><Award className="w-3 h-3" /> {p.exp}</span>
                </div>
                <p className="text-sm flex-1 leading-relaxed mb-4" style={{ color: "var(--vc-mute)" }}>{p.bio}</p>
                <div className="pt-4 border-t flex items-start gap-2 text-xs" style={{ borderColor: "var(--vc-line)", color: "var(--vc-mute)" }}>
                  <GraduationCap className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{p.edu}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 vc-card-static p-10 md:p-14 text-center" style={{ background: "var(--vc-mint-soft)", border: "none" }}>
          <h2 className="vc-display text-3xl md:text-4xl mb-4">¿Quieres consultar con alguno de ellos?</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "var(--vc-mute)" }}>
            Vita IA te ayuda a elegir el especialista adecuado según tus síntomas y agenda la cita por ti.
          </p>
          <Link to="/demos/clinica-vital/servicios" className="vc-cta">
            Ver servicios <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ClinicAbout;
