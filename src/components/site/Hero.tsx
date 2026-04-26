import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ArrowDownRight } from "lucide-react";
import heroImg from "@/assets/hero-workspace.jpg";

export const Hero = () => {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen bg-carbon text-bone overflow-hidden grain pt-24">
      {/* Hairline grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
           style={{
             backgroundImage:
               "linear-gradient(to right, hsl(var(--bone)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--bone)) 1px, transparent 1px)",
             backgroundSize: "80px 80px",
           }}
      />

      {/* Top index bar */}
      <div className="container-editorial relative z-10 flex items-center justify-between border-b border-bone/10 pb-4 mb-10 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/50">
           — 001  / Studio
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/50 hidden md:inline">
          / 24/7 systems
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-400">
          ● Available
        </span>
      </div>

      <div className="container-editorial relative z-10 grid lg:grid-cols-12 gap-10 pb-20">
        {/* LEFT — text */}
        <div className="lg:col-span-7 flex flex-col justify-center animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-10 h-px bg-oxblood" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[86px] xl:text-[104px] leading-[0.92] tracking-[-0.03em] text-balance">
            {t("hero.title").split(" ").map((w, i, arr) =>
              i === arr.length - 2 ? (
                <span key={i} className="italic text-oxblood-glow font-light">
                  {w}{" "}
                </span>
              ) : (
                <span key={i}>{w} </span>
              ),
            )}
          </h1>

          <p className="mt-8 max-w-xl text-bone/70 text-base md:text-lg leading-relaxed text-balance">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="oxblood" size="xl">
              <a href="#solutions">
                {t("hero.cta1")}
                <ArrowDownRight className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="editorialBone" size="xl">
              <a href="#contact">{t("hero.cta2")}</a>
            </Button>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden border border-bone/10">
            <img
              src={heroImg}
              alt="Workspace MR_ROBOTS LABS"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1600}
              height={1200}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-bone/70">
              <span>FILE_001 · system_overview.jpg</span>
              <span className="text-oxblood-glow">REC ●</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics strip */}
      <div className="container-editorial relative z-10 border-t border-bone/10">
        <div className="grid grid-cols-3 gap-4 py-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display text-3xl md:text-5xl text-bone">
                {t(`hero.metric${i}.value`)}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50 mt-2">
                {t(`hero.metric${i}.label`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
