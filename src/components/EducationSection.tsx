import { Card, CardContent } from "./ui/card";

interface EducationItem {
    degree: string;
    institution: string;
    year: string;
  }
  
  export default function EducationSection({ items }: { items: EducationItem[] }) {
    return (
      <div className="grid gap-6">
        {items.map((edu, i) => (
          <Card key={i} className="tilt-hover hover:shadow-soft-lg transition-transform">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              <p className="text-sm">{edu.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  