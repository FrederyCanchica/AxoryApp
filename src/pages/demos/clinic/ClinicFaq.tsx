import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "¿Cómo funciona Vita IA y es seguro?", a: "Vita es nuestra recepcionista virtual entrenada con protocolos médicos. Cualifica síntomas, propone especialidad y agenda. No diagnostica: el médico humano siempre revisa el caso. Cumple RGPD y los datos se almacenan cifrados en servidores europeos." },
  { q: "¿Atendéis urgencias?", a: "No somos un servicio de urgencias 24h presencial. Si Vita detecta síntomas de alarma, deriva inmediatamente al 112. Para urgencias menores ofrecemos huecos rápidos en el día." },
  { q: "¿Trabajáis con seguros médicos privados?", a: "Sí, somos cuadro médico de Adeslas, Sanitas, DKV y Asisa. Para otros seguros, emitimos factura para reembolso. Confirma tu cobertura antes de la cita." },
  { q: "¿Puedo cancelar o cambiar mi cita?", a: "Sí, hasta 4 horas antes sin coste, directamente desde el SMS de confirmación o hablando con Vita. Cancelaciones tardías reiteradas pueden conllevar gestión." },
  { q: "¿En qué idiomas atiende Vita IA?", a: "Actualmente español, catalán e inglés. Detecta el idioma automáticamente y mantiene la conversación en él." },
  { q: "¿Cómo recibo los resultados de mis análisis?", a: "Por el portal del paciente y notificación push/email en cuanto están validados (24-48h). Si hay valores fuera de rango, el médico te contactará proactivamente." },
  { q: "¿Hacéis revisiones para empresas?", a: "Sí, ofrecemos paquetes de salud corporativa con tarifas a medida desde 5 empleados. Contacta a través de la web o pídenos información a Vita." },
  { q: "¿Cuánto tarda Vita en agendarme?", a: "Menos de 2 minutos en el 94% de los casos. Si tu caso requiere validación humana (síntomas complejos), te avisamos y un sanitario te llama en menos de 30 minutos." },
];

const ClinicFaq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-14">
          <div className="vc-eyebrow mb-4">— Preguntas frecuentes</div>
          <h1 className="vc-display text-5xl md:text-6xl mb-6 leading-[0.95]">
            Lo que necesitas<br /><span style={{ color: "var(--vc-mint-dark)" }}>saber antes.</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--vc-mute)" }}>
            Si no encuentras tu respuesta, Vita IA está disponible 24/7 en el chat.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="vc-card-static overflow-hidden transition-all" style={{ borderColor: isOpen ? "var(--vc-mint-deep)" : "var(--vc-line)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="vc-display text-lg md:text-xl">{f.q}</span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 transition-transform duration-300"
                    style={{
                      color: "var(--vc-mint-dark)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed" style={{ color: "var(--vc-mute)" }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ClinicFaq;
