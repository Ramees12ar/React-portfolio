import { Card, CardContent } from "./ui/card";

interface EducationItem {
    degree: string;
    institution: string;
    year: string;
  }
  
  export default function EducationSection({ items }: { items: EducationItem[] }) {
    return (
      <div className="grid gap-4 sm:gap-6">
        {items.map((edu, i) => (
          <Card key={i} className="tilt-hover hover:shadow-soft-lg transition-transform">
            <CardContent className="p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-semibold leading-tight">{edu.degree}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{edu.institution}</p>
              <p className="text-xs sm:text-sm mt-1">{edu.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  