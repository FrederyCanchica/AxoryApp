import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import {
  TrendingDown,
  MessageSquare,
  Clock,
  Zap,
  Bot,
  BarChart3,
} from "lucide-react";

const problems = [
  { Icon: TrendingDown, k: "ps.p1" },
  { Icon: MessageSquare, k: "ps.p2" },
  { Icon: Clock, k: "ps.p3" },
];

const solutions = [
  { Icon: Zap, k: "ps.s1" },
  { Icon: Bot, k: "ps.s2" },
  { Icon: BarChart3, k: "ps.s3" },
];

export const ProblemSolution = () => {
  const { t } = useI18n();
  const refProblems = useReveal<HTMLDivElement>();
  const refSolutions = useReveal<HTMLDivElement>();

  return (
    <section id="solutions" aria-label="Problem and Solution">
      {/* PROBLEMS */}
      <div className="bg-[#0a0a0a] text-bone py-24 md:py-36">
        <div ref={refProblems} className="container-editorial reveal-up">
          <div className="text-center mb-16 md:mb-20">
            <p className="font-mono text-[11px] uppercase tracking-widest text-bone/40 mb-6">
              {t("ps.problem.eyebrow")}
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance mx-auto max-w-5xl">
              {t("ps.problem.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map(({ Icon, k }) => (
              <div
                key={k}
                className="reveal-item rounded-sm border border-bone/10 bg-bone/[0.03] p-8 md:p-10 transition-colors hover:bg-bone/[0.06]"
              >
                <Icon
                  className="h-7 w-7 mb-6 text-[#ff6b3d]"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-2xl mb-3 leading-tight">
                  {t(`${k}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-bone/65">
                  {t(`${k}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle divider gradient */}
        <div
          className="h-px mt-16 md:mt-24"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(252,163,17,0.4), transparent)",
          }}
          aria-hidden
        />
      </div>

      {/* SOLUTIONS */}
      <div className="bg-white text-[#0a0a0a] py-24 md:py-36">
        <div ref={refSolutions} className="container-editorial reveal-up">
          <div className="text-center mb-16 md:mb-20">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#0a0a0a]/40 mb-6">
              {t("ps.solution.eyebrow")}
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance mx-auto max-w-5xl">
              {t("ps.solution.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map(({ Icon, k }) => (
              <div
                key={k}
                className="reveal-item rounded-sm border border-[#0a0a0a]/10 bg-[#0a0a0a]/[0.02] p-8 md:p-10 transition-colors hover:bg-[#0a0a0a]/[0.04]"
              >
                <Icon
                  className="h-7 w-7 mb-6"
                  style={{ color: "#FCA311" }}
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-2xl mb-3 leading-tight">
                  {t(`${k}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-[#0a0a0a]/65">
                  {t(`${k}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
