import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-8 sm:py-14">
      <div className="container">
        {title && (
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="underline-fx text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              {title}
            </h2>
          </div>
        )}
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/10 to-muted/30 blur-2xl animate-float" />
          <div className="relative rounded-2xl border bg-glass p-3 sm:p-4 md:p-6 shadow-soft">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
