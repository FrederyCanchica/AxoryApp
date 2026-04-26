import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: onHome ? "#solutions" : "/#solutions", label: t("nav.solutions") },
    { href: onHome ? "#demos" : "/#demos", label: t("nav.demos") },
    { href: onHome ? "#pricing" : "/#pricing", label: t("nav.pricing") },
    { href: onHome ? "#process" : "/#process", label: t("nav.process") },
    { href: onHome ? "#contact" : "/#contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-foreground/10"
          : "bg-transparent",
      )}
    >
      <div className="container-editorial flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="MR_ROBOTS LABS">
          <span className={cn(
          "font-mono text-[11px] tracking-[0.22em] uppercase transition-colors",
            scrolled ? "text-foreground" : "text-bone"
            )}>
            MR_ROBOTS<span className="text-oxblood">/</span>LABS
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn( "font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
              scrolled
                ? "text-foreground/70 hover:text-oxblood"
                : "text-bone hover:text-oxblood"
            )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className={cn( "font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
              scrolled
                ? "text-foreground/70 hover:text-oxblood"
                : "text-bone hover:text-oxblood"
            )}
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <Button asChild variant="oxblood" size="sm" className="hidden md:inline-flex">
            <a href={onHome ? "#contact" : "/#contact"}>{t("nav.cta")}</a>
          </Button>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-foreground/10 bg-background">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/80 py-2 border-b border-foreground/10"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="oxblood" className="mt-2">
              <a href={onHome ? "#contact" : "/#contact"} onClick={() => setOpen(false)}>
                {t("nav.cta")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
