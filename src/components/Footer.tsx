import { SOCIAL_LINKS } from "../data/content";

export default function Footer() {
    return (
      <footer className="border-t py-6 text-center text-sm">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.title} href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border bg-glass hover-ring">
                {s.iconUrl && (
                  <img src={s.iconUrl} alt={s.title} className="w-4 h-4" />
                )}
                <span>{s.title}</span>
              </a>
            ))}
          </div>
          <p>
            © {new Date().getFullYear()} Ramees. Built with ❤️ using React, Vite,
            Tailwind, and shadcn/ui.
          </p>
        </div>
      </footer>
    );
  }
  