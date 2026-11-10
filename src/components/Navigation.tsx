import { useLanguage } from "@/i18n/useLanguage";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { localisedPath } from "@/i18n/routing";

const navItems = [
  { label: "O mně", href: "#o-mne" },
  { label: "Služby", href: "#sluzby" },
  { label: "Reference", href: "/reference", isPage: true },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Navigation = () => {
  const { t, path, isEnglish } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleNavigation = (href: string, isPage?: boolean) => {
    if (isPage) {
      navigate(path(href));
      setIsMobileMenuOpen(false);
    } else {
      // Pokud nejsme na hlavní stránce, navigujeme tam s hash
      if (location.pathname.replace(/\/$/, "") !== path("/").replace(/\/$/, "")) {
        navigate(path("/" + href));
        setIsMobileMenuOpen(false);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsMobileMenuOpen(false);
        }
      }
    }
  };

  // Scrollování na sekci po navigaci z jiné stránky
  useEffect(() => {
    if (location.pathname.replace(/\/$/, "") === path("/").replace(/\/$/, "") && location.hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1).split("?")[0]);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const languageSwitcher = (
    <div className="flex items-center gap-1 shrink-0" aria-label={isEnglish ? "Language" : "Jazyk"}>
      {(["cs", "en"] as const).map((language) => (
        <Button key={language} asChild variant="ghost" className={`h-9 px-2 ${isEnglish === (language === "en") ? "text-primary underline underline-offset-4 font-bold" : "text-muted-foreground"}`}>
          <a href={localisedPath(location.pathname + location.search + location.hash, language)} hrefLang={language} lang={language} aria-current={isEnglish === (language === "en") ? "true" : undefined}>
            {language === "cs" ? "CZ" : "EN"}
          </a>
        </Button>
      ))}
    </div>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost"
            onClick={() => {
              navigate(path("/"));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold h-auto p-0 hover:bg-transparent hover:text-primary transition-colors shrink-0"
          >
            ak. soch. Jan Vích
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Button variant="ghost"
                key={item.href}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className="text-lg text-foreground hover:bg-transparent hover:text-primary transition-colors font-medium p-0 h-auto"
              >
                {t(item.label)}
              </Button>
            ))}
            {languageSwitcher}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-1">
          <div className="hidden sm:block">{languageSwitcher}</div>
          <Button
            ref={buttonRef}
            variant="ghost"
            className="lg:hidden h-10 w-10 p-0 [&_svg]:!w-[32px] [&_svg]:!h-[32px]"
            aria-label={isEnglish ? (isMobileMenuOpen ? "Close menu" : "Open menu") : (isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
          </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation" ref={menuRef} className="lg:hidden absolute right-4 top-16 bg-background/95 backdrop-blur-md shadow-soft rounded-lg p-4 space-y-2 min-w-[200px] z-50">
            {navItems.map((item) => (
              <Button variant="ghost"
                key={item.href}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className="flex justify-start w-full text-left text-lg text-foreground hover:text-primary transition-colors font-medium py-2 px-3 rounded hover:bg-muted/50"
              >
                {t(item.label)}
              </Button>
            ))}
            <div className="sm:hidden border-t pt-2">{languageSwitcher}</div>
          </div>
        )}
      </div>
    </nav>
  );
};
