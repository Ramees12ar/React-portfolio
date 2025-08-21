import { HERO_CONTENT, SOCIAL_LINKS } from "../data/content";
export default function Home() {
    const { name, role, tagline } = HERO_CONTENT;
    return (
      <section className="relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="orb orb-primary w-[380px] h-[380px] -left-24 -top-24 animate-float" />
          <div className="orb orb-accent w-[320px] h-[320px] right-[-60px] top-20 animate-float" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-6xl py-12 md:py-16 px-4 animate-fade-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h1 className="glow-text text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                  {name}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-semibold mb-4">
                  {role}
                </p>
                <div className="h-[3px] w-24 bg-gradient-to-r from-primary/70 to-transparent rounded-full" />
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.title}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border bg-glass hover-ring"
                    >
                      {s.iconUrl && (
                        <img src={s.iconUrl} alt={s.title} className="w-4 h-4" />
                      )}
                      <span className="text-sm">{s.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-glass rounded-2xl border shadow-soft p-5 md:p-6 tilt-hover">
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    {tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
  