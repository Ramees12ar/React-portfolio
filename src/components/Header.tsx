import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDarkMode(true);
      return;
    }
    if (stored === "light") {
      setDarkMode(false);
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  // Apply theme and persist
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "tools", label: "Tools" },
    { id: "personal-projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-glass border-b">
      <div className="container flex justify-between items-center py-2 sm:py-3">
        <a href="#home" className="flex items-center gap-1.5 sm:gap-2">
          <span className="inline-grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-400 shadow-soft text-white text-xs font-bold">
            RA
          </span>
          <span className="glow-text font-extrabold text-base sm:text-lg tracking-tight">Ramees</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="capitalize text-sm lg:text-base text-muted-foreground hover:text-foreground hover-ring px-2 py-1 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Light</span>
            <Switch
              checked={darkMode}
              onCheckedChange={() => setDarkMode(!darkMode)}
            />
            <span className="text-xs text-muted-foreground">Dark</span>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground">Light</span>
            <Switch
              checked={darkMode}
              onCheckedChange={() => setDarkMode(!darkMode)}
            />
            <span className="text-xs text-muted-foreground">Dark</span>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border bg-glass hover-ring"
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t bg-glass/80 backdrop-blur-sm">
          <nav className="container py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left capitalize text-sm text-muted-foreground hover:text-foreground hover:bg-background/50 px-4 py-3 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </header>
  );
}
