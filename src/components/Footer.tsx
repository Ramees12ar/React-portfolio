import { SOCIAL_LINKS } from "../data/content";

export default function Footer() {
    return (
      <footer className="border-t py-4 sm:py-6 text-center text-xs sm:text-sm">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-3">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.title} href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border bg-glass hover-ring">
                {s.iconUrl && (
                  <img src={s.iconUrl} alt={s.title} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
                <span className="text-xs sm:text-sm">{s.title}</span>
              </a>
            ))}
          </div>
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Ramees. Built with ❤️ using React, Vite,
            Tailwind, and shadcn/ui.
          </p>
        </div>
      </footer>
    );
  }
  