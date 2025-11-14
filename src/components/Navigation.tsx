import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import heroRelief from "@/assets/hero-relief.jpg";

const navItems = [
  { label: "O mně", href: "#o-mne" },
  { label: "Služby", href: "#sluzby" },
  { label: "Reference", href: "/reference", isPage: true },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string, isPage?: boolean) => {
    if (isPage) {
      navigate(href);
      setIsMobileMenuOpen(false);
    } else {
      // Pokud nejsme na hlavní stránce, navigujeme tam s hash
      if (location.pathname !== "/") {
        navigate("/" + href);
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
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroRelief})` }}
        />
      </div>
      <div className="container px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
          >
            Jan Vích
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
