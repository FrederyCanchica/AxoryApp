import { useI18n } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-carbon text-bone border-t border-bone/10">
      <div className="container-editorial py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] mb-4">
              MR_ROBOTS<span className="text-oxblood">/</span>LABS
            </div>
            <p className="font-display text-2xl md:text-3xl max-w-md leading-tight">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow text-bone/50 mb-4">Studio</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#solutions" className="hover:text-oxblood-glow transition-colors">{t("nav.solutions")}</a></li>
              <li><a href="#demos" className="hover:text-oxblood-glow transition-colors">{t("nav.demos")}</a></li>
              <li><a href="#pricing" className="hover:text-oxblood-glow transition-colors">{t("nav.pricing")}</a></li>
              <li><a href="#process" className="hover:text-oxblood-glow transition-colors">{t("nav.process")}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow text-bone/50 mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-oxblood-glow transition-colors">{siteConfig.email}</a></li>
              <li><a href={siteConfig.social.instagram} className="hover:text-oxblood-glow transition-colors">Instagram</a></li>
              <li><a href={siteConfig.social.linkedin} className="hover:text-oxblood-glow transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/45">
          <span>© {new Date().getFullYear()} MR_ROBOTS LABS — {t("footer.rights")}</span>
          <span className="text-oxblood-glow">● Madrid / Remote</span>
        </div>
      </div>
    </footer>
  );
};
