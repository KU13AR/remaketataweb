import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "O mně", href: "#o-mne" },
  { label: "Služby", href: "#sluzby" },
  { label: "Reference", href: "/reference", isPage: true },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const handleNavigation = (href: string, isPage?: boolean) => {
    if (isPage) {
      navigate(href);
    } else {
      // Pokud nejsme na hlavní stránce, navigujeme tam s hash
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft">
      {/* Decorative relief pattern border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent opacity-30" />
      
      <div className="container px-4 py-3">
        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={() => navigate("/")}
            className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
          >
            Jan Vích
          </button>

          {/* Navigation - horizontal layout under name */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 overflow-x-auto w-full justify-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className="text-foreground hover:text-primary transition-colors font-bold whitespace-nowrap text-base sm:text-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
