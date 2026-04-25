import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import tattoo from "@/assets/case-tattoo.jpg";
import barber from "@/assets/case-barber.jpg";
import local from "@/assets/case-local.jpg";

export const Cases = () => {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  const cases = [
    { img: tattoo, label: t("cases.tattoo"), tag: "TATTOO_001" },
    { img: barber, label: t("cases.barber"), tag: "BARBER_001" },
    { img: local, label: t("cases.local"), tag: "LOCAL_001" },
  ];

  return (
    <section className="bg-bone-dim text-foreground py-24 md:py-36">
      <div ref={ref} className="container-editorial reveal">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-oxblood" />
              <span className="label-eyebrow">— 005 / {t("cases.eyebrow")}</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
              {t("cases.title")}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {cases.map((c) => (
            <figure key={c.tag} className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>
              <figcaption className="flex items-center justify-between mt-4">
                <span className="font-display text-xl">{c.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                  {c.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
