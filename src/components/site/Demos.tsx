import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";
import tattoo from "@/assets/case-tattoo.jpg";
import barber from "@/assets/case-barber.jpg";
import local from "@/assets/case-local.jpg";

export const Demos = () => {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  const demos = [
    { slug: "tattoo", img: tattoo, k: "tattoo" },
    { slug: "barber", img: barber, k: "barber" },
    { slug: "local", img: local, k: "local" },
  ];

  return (
    <section id="demos" className="bg-carbon text-bone py-24 md:py-36 grain relative">
      <div ref={ref} className="container-editorial reveal">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-oxblood" />
              <span className="label-eyebrow text-bone/60">— 003 / {t("demos.eyebrow")}</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
              {t("demos.title")}
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-bone/65 leading-relaxed">{t("demos.body")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {demos.map((d, i) => (
            <article key={d.slug} className="group flex flex-col">
              <Link
                to={`/demos/${d.slug}`}
                className="relative block aspect-[3/4] overflow-hidden border border-bone/10"
              >
                <img
                  src={d.img}
                  alt={t(`demos.${d.k}.name`)}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-carbon/10 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/80 bg-carbon/60 backdrop-blur px-2 py-1 border border-bone/15">
                    DEMO_0{i + 1}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl md:text-3xl mb-2">
                    {t(`demos.${d.k}.name`)}
                  </h3>
                  <p className="text-sm text-bone/70 leading-relaxed">
                    {t(`demos.${d.k}.desc`)}
                  </p>
                </div>
                <div className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center bg-oxblood text-bone opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <Button asChild variant="bone" size="sm" className="!bg-bone !text-carbon">
                  <Link to={`/demos/${d.slug}`}>{t("demos.view")}</Link>
                </Button>
                <Button asChild variant="oxblood" size="sm">
                  <a href="#contact">{t("demos.want")}</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
