import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/" && location.pathname !== "/Portfolio" && location.pathname !== "/Portfolio/") {
      navigate("/" + href);
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <>
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        "bg-background/80 backdrop-blur-md border-b border-border/50",
        isScrolled ? "py-3 shadow-md" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="text-4xl font-bold text-primary flex items-center cursor-pointer"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Farid</span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-foreground/80 hover:text-primary transition-color duration-300 text-2xl font-bold cursor-pointer"
            >
              {item.name}
            </a>
          ))}

          {/* Theme Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon size={20} className="text-primary" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* mobile nav */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Theme Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon size={20} className="text-primary" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>

    {/*
      Mobile menu overlay - deliberately a sibling of <nav>, not a child.
      The nav carries `backdrop-blur`, and backdrop-filter establishes a
      containing block for fixed-position descendants, which would shrink
      this `fixed inset-0` scrim to the header's box. It sits below the
      nav's z-40 so the header (and its close button) stay on top.
    */}
    <div
      className={cn(
        "fixed inset-0 z-30 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center",
        "transition-opacity duration-300 md:hidden",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isMobileMenuOpen}
    >
      <div className="flex flex-col space-y-8 text-xl">
        {navItems.map((item, key) => (
          <a
            href={item.href}
            key={key}
            onClick={(e) => handleNavClick(e, item.href)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className="text-foreground/80 hover:text-primary transition-color duration-300 text-2xl font-bold cursor-pointer"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
    </>
  );
};
