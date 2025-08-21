import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 bg-glass border-b">
      <div className="container flex justify-between items-center py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-400 shadow-soft text-white text-xs font-bold">
            RA
          </span>
          <span className="glow-text font-extrabold text-lg tracking-tight">Ramees</span>
        </a>
        <nav className="flex items-center gap-4 md:gap-6">
          {[("home"), ("experience"), ("tools"), ("achievements"), ("education"), ("resume"), ("contact")].map(
            (id) => (
              <a
                key={id}
                href={`#${id}`}
                className="capitalize text-sm md:text-base text-muted-foreground hover:text-foreground hover-ring px-2 py-1 rounded-lg transition-colors"
              >
                {id}
              </a>
            )
          )}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Light</span>
            <Switch
              checked={darkMode}
              onCheckedChange={() => setDarkMode(!darkMode)}
            />
            <span className="text-xs text-muted-foreground">Dark</span>
          </div>
        </nav>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </header>
  );
}
