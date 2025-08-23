import { Card, CardContent } from "./ui/card";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export default function ExperienceCard({
  role,
  company,
  duration,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <Card className="tilt-hover hover:shadow-soft-lg transition-transform">
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold leading-tight">{role}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          {company} • {duration}
        </p>
        <ul className="list-disc list-inside mt-3 text-xs sm:text-sm space-y-1 leading-relaxed">
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
